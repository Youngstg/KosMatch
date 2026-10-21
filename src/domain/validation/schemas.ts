import { z } from "zod";

import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import {
  FACILITY_CODES,
  FACILITY_DEFINITIONS,
  MAX_LAST_CHECKED_FUTURE_MS,
  MAX_RUPIAH,
  MAX_FIELD_RUPIAH,
  RULE_CODES,
  RULE_DEFINITIONS,
} from "@/domain/validation/constants";

const unique = <T>(items: readonly T[]): boolean => new Set(items).size === items.length;

const trimmedString = (maximum: number) => z.string().trim().max(maximum);
const requiredTrimmedString = (maximum: number) => trimmedString(maximum).min(1);

export const idSchema = z
  .string()
  .trim()
  .min(8)
  .max(128)
  .regex(/^[A-Za-z0-9_-]+$/, "ID hanya boleh berisi huruf, angka, garis bawah, dan tanda hubung.");

export const facilityCodeSchema = z.enum(FACILITY_CODES);
export const ruleCodeSchema = z.enum(RULE_CODES);
export const availabilitySchema = z.union([z.boolean(), z.literal("unknown")]);
export const importanceSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const isoDateTimeSchema = z.string().datetime({ offset: true });

export const lastCheckedDateSchema = z
  .string()
  .date()
  .refine(
    (value) => Date.parse(`${value}T00:00:00.000Z`) <= Date.now() + MAX_LAST_CHECKED_FUTURE_MS,
    "Tanggal pemeriksaan tidak boleh terlalu jauh di masa depan.",
  );

export const sourceUrlSchema = z
  .string()
  .trim()
  .max(2_048)
  .url()
  .refine((value) => {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  }, "URL sumber hanya boleh menggunakan http atau https.");

export const geoPointSchema = z
  .object({ latitude: z.number().min(-90).max(90), longitude: z.number().min(-180).max(180) })
  .strict();

export const commuteOriginSchema = z.enum(["manual", "estimated"]);

export const moneyValueSchema = z.discriminatedUnion("origin", [
  z.object({ amount: z.number().int().min(0).max(MAX_FIELD_RUPIAH), origin: z.literal("confirmed") }).strict(),
  z.object({ amount: z.number().int().min(0).max(MAX_FIELD_RUPIAH), origin: z.literal("estimated") }).strict(),
  z.object({ amount: z.null(), origin: z.literal("unknown") }).strict(),
]);

const facilityPreferenceSchema = z
  .object({
    code: facilityCodeSchema,
    label: requiredTrimmedString(80),
    level: z.enum(["required", "desired"]),
  })
  .strict()
  .superRefine((preference, context) => {
    if (preference.label !== FACILITY_DEFINITIONS[preference.code]) {
      context.addIssue({ code: "custom", path: ["label"], message: "Label fasilitas tidak sesuai allowlist." });
    }
  });

const rulePreferenceSchema = z
  .object({
    code: ruleCodeSchema,
    label: requiredTrimmedString(80),
    expectedValue: z.boolean(),
  })
  .strict()
  .superRefine((preference, context) => {
    if (preference.label !== RULE_DEFINITIONS[preference.code]) {
      context.addIssue({ code: "custom", path: ["label"], message: "Label aturan tidak sesuai allowlist." });
    }
  });

const allowlistedAvailabilityRecord = (codes: readonly string[]) =>
  z.record(z.string(), availabilitySchema).superRefine((record, context) => {
    for (const key of Object.keys(record)) {
      if (!codes.includes(key)) {
        context.addIssue({ code: "custom", path: [key], message: `Kode ${key} tidak termasuk allowlist.` });
      }
    }
  });

const verificationQuestionSchema = z
  .object({
    id: idSchema,
    question: requiredTrimmedString(500),
    status: z.enum(["unverified", "confirmed", "changed"]),
  })
  .strict();

export const comparisonProjectSchema: z.ZodType<ComparisonProject> = z
  .object({
    id: idSchema,
    name: requiredTrimmedString(80),
    destinationLabel: requiredTrimmedString(120),
    destinationPoint: geoPointSchema.nullable().default(null),
    monthlyBudget: z.number().int().min(0).max(MAX_FIELD_RUPIAH),
    maxOneWayCommuteMinutes: z.number().int().min(0).max(360),
    commuteDaysPerMonth: z.number().int().min(0).max(31),
    weights: z
      .object({
        cost: importanceSchema,
        commute: importanceSchema,
        facilities: importanceSchema,
        environment: importanceSchema,
        ruleFit: importanceSchema,
      })
      .strict(),
    facilityPreferences: z.array(facilityPreferenceSchema).max(FACILITY_CODES.length),
    rulePreferences: z.array(rulePreferenceSchema).max(RULE_CODES.length),
    favoriteOptionId: idSchema.nullable(),
    createdAt: isoDateTimeSchema,
    updatedAt: isoDateTimeSchema,
  })
  .strict()
  .superRefine((project, context) => {
    if (!unique(project.facilityPreferences.map(({ code }) => code))) {
      context.addIssue({ code: "custom", path: ["facilityPreferences"], message: "Kode fasilitas tidak boleh duplikat." });
    }
    if (!unique(project.rulePreferences.map(({ code }) => code))) {
      context.addIssue({ code: "custom", path: ["rulePreferences"], message: "Kode aturan tidak boleh duplikat." });
    }
    if (Date.parse(project.updatedAt) < Date.parse(project.createdAt)) {
      context.addIssue({ code: "custom", path: ["updatedAt"], message: "updatedAt tidak boleh sebelum createdAt." });
    }
  });

export const accommodationOptionSchema: z.ZodType<AccommodationOption> = z
  .object({
    id: idSchema,
    projectId: idSchema,
    name: requiredTrimmedString(100),
    area: trimmedString(120),
    sourceUrl: sourceUrlSchema.nullable(),
    lastCheckedAt: lastCheckedDateSchema.nullable(),
    rent: moneyValueSchema,
    electricity: moneyValueSchema,
    water: moneyValueSchema,
    internet: moneyValueSchema,
    laundry: moneyValueSchema,
    otherRecurring: moneyValueSchema,
    deposit: moneyValueSchema,
    administrationFee: moneyValueSchema,
    oneWayCommuteMinutes: z.number().int().min(0).max(360).nullable(),
    commuteOrigin: commuteOriginSchema.nullable().default(null),
    location: geoPointSchema.nullable().default(null),
    roundTripTransportCost: moneyValueSchema,
    facilityCodes: z.array(facilityCodeSchema).max(FACILITY_CODES.length),
    facilityValues: allowlistedAvailabilityRecord(FACILITY_CODES),
    ruleValues: allowlistedAvailabilityRecord(RULE_CODES),
    environmentRating: importanceSchema.nullable(),
    notes: trimmedString(3_000),
    pros: z.array(requiredTrimmedString(500)).max(100),
    concerns: z.array(requiredTrimmedString(500)).max(100),
    verificationQuestions: z.array(verificationQuestionSchema).max(100),
    shortlisted: z.boolean(),
    createdAt: isoDateTimeSchema,
    updatedAt: isoDateTimeSchema,
  })
  .strict()
  .superRefine((option, context) => {
    if (!unique(option.facilityCodes)) {
      context.addIssue({ code: "custom", path: ["facilityCodes"], message: "Kode fasilitas tidak boleh duplikat." });
    }
    if (!unique(option.verificationQuestions.map(({ id }) => id))) {
      context.addIssue({ code: "custom", path: ["verificationQuestions"], message: "ID pertanyaan tidak boleh duplikat." });
    }
    for (const code of option.facilityCodes) {
      const value = option.facilityValues[code];
      if (value !== undefined && value !== true) {
        context.addIssue({ code: "custom", path: ["facilityValues", code], message: "Fasilitas tersedia tidak boleh bernilai false atau unknown." });
      }
    }
    const availableFacilityCodes = new Set<string>(option.facilityCodes);
    for (const [code, value] of Object.entries(option.facilityValues)) {
      if (value === true && !availableFacilityCodes.has(code)) {
        context.addIssue({ code: "custom", path: ["facilityCodes"], message: `Fasilitas ${code} yang tersedia harus tercantum.` });
      }
    }
    if (Date.parse(option.updatedAt) < Date.parse(option.createdAt)) {
      context.addIssue({ code: "custom", path: ["updatedAt"], message: "updatedAt tidak boleh sebelum createdAt." });
    }
    const monthlyAmounts = [
      option.rent.amount,
      option.electricity.amount,
      option.water.amount,
      option.internet.amount,
      option.laundry.amount,
      option.otherRecurring.amount,
    ].filter((v): v is number => typeof v === "number");
    const sumMonthly = monthlyAmounts.reduce((acc, curr) => acc + curr, 0);
    const transportAmount = option.roundTripTransportCost.amount ?? 0;
    const maxMonthlyWithTransport = sumMonthly + (transportAmount * 31);
    if (maxMonthlyWithTransport > MAX_RUPIAH) {
      context.addIssue({ code: "custom", path: ["rent"], message: "Total estimasi biaya bulanan melebihi batas sistem." });
    }
    const moveInAmounts = [
      option.deposit.amount,
      option.administrationFee.amount,
      option.rent.amount,
    ].filter((v): v is number => typeof v === "number");
    const sumMoveIn = moveInAmounts.reduce((acc, curr) => acc + curr, 0);
    if (sumMoveIn > MAX_RUPIAH) {
      context.addIssue({ code: "custom", path: ["deposit"], message: "Total biaya awal masuk melebihi batas sistem." });
    }
  });

export const kosMatchExportSchema = z
  .object({
    format: z.literal("kosmatch-project"),
    version: z.literal(1),
    exportedAt: isoDateTimeSchema,
    project: comparisonProjectSchema,
    options: z.array(accommodationOptionSchema).max(1_000),
  })
  .strict()
  .superRefine((backup, context) => {
    const optionIds = backup.options.map(({ id }) => id);
    if (!unique(optionIds)) {
      context.addIssue({ code: "custom", path: ["options"], message: "ID pilihan kos tidak boleh duplikat." });
    }
    backup.options.forEach((option, index) => {
      if (option.projectId !== backup.project.id) {
        context.addIssue({
          code: "custom",
          path: ["options", index, "projectId"],
          message: "Pilihan kos harus berasal dari project yang diekspor.",
        });
      }
    });
    if (backup.project.favoriteOptionId !== null && !optionIds.includes(backup.project.favoriteOptionId)) {
      context.addIssue({
        code: "custom",
        path: ["project", "favoriteOptionId"],
        message: "Pilihan favorit harus ada di dalam payload.",
      });
    }
  });

export type KosMatchExport = z.infer<typeof kosMatchExportSchema>;
