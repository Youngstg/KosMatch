export { MAX_RUPIAH } from "@/lib/currency";

export const MAX_LAST_CHECKED_FUTURE_MS = 24 * 60 * 60 * 1_000;

export const FACILITY_DEFINITIONS = {
  wifi: "Wi-Fi",
  "private-bathroom": "Kamar mandi dalam",
  kitchen: "Dapur bersama",
  parking: "Parkir",
  "laundry-access": "Akses laundry",
  "nearby-laundry": "Laundry dekat",
} as const;

export const RULE_DEFINITIONS = {
  "no-curfew": "Tanpa jam malam",
  "visitors-allowed": "Tamu diperbolehkan",
  "gender-restriction-compatible": "Sesuai batasan gender",
} as const;

export const FACILITY_CODES = Object.keys(FACILITY_DEFINITIONS) as [
  keyof typeof FACILITY_DEFINITIONS,
  ...(keyof typeof FACILITY_DEFINITIONS)[],
];

export const RULE_CODES = Object.keys(RULE_DEFINITIONS) as [
  keyof typeof RULE_DEFINITIONS,
  ...(keyof typeof RULE_DEFINITIONS)[],
];
