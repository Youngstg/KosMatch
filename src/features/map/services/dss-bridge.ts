import type {
  AccommodationOption,
  ComparisonProject,
  CriterionKey,
  Importance,
} from "@/domain/entities/types";
import type { PilotListing } from "@/data/pilot-listings";
import type { PilotSpecification } from "@/data/pilot-config";
import { IndexedDbProjectRepository } from "@/data/indexeddb";

/**
 * Konversi PilotListing menjadi AccommodationOption untuk Kalkulator DSS KosMatch
 */
export function pilotListingToAccommodationOption(
  listing: PilotListing,
  projectId: string,
  commuteMinutes: number | null = null
): AccommodationOption {
  const now = new Date().toISOString();
  const includesElectricity = listing.notes.toLowerCase().includes("termasuk listrik");

  return {
    id: `opt-${listing.id}`,
    projectId,
    name: listing.name,
    area: `${listing.area}, ${listing.city}`,
    sourceUrl: null,
    lastCheckedAt: now,
    rent: {
      amount: listing.rentMonthly,
      origin: "confirmed",
    },
    electricity: {
      amount: includesElectricity ? 0 : 150000,
      origin: includesElectricity ? "confirmed" : "estimated",
    },
    water: {
      amount: 0,
      origin: "confirmed",
    },
    internet: {
      amount: 0,
      origin: "confirmed",
    },
    laundry: {
      amount: 100000,
      origin: "estimated",
    },
    otherRecurring: {
      amount: 0,
      origin: "confirmed",
    },
    deposit: {
      amount: 0,
      origin: "confirmed",
    },
    administrationFee: {
      amount: 0,
      origin: "confirmed",
    },
    oneWayCommuteMinutes: commuteMinutes ?? 12,
    commuteOrigin: "estimated",
    roundTripTransportCost: {
      amount: 8000,
      origin: "estimated",
    },
    location: listing.coordinates,
    environmentRating: 4,
    facilityCodes: [...listing.facilityCodes],
    facilityValues: Object.fromEntries(listing.facilityCodes.map((code) => [code, true])),
    ruleValues: {
      access_24h:
        listing.facilityCodes.includes("access_24h") ||
        listing.notes.toLowerCase().includes("24 jam") ||
        listing.notes.toLowerCase().includes("bebas jam malam"),
    },
    notes: listing.notes,
    pros: [
      listing.gender === "female" ? "Khusus Putri" : listing.gender === "male" ? "Khusus Putra" : "Kos Campur",
      `${listing.area}`,
    ],
    concerns: [],
    verificationQuestions: [],
    shortlisted: true,
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Membuat atau memperbarui proyek DSS di IndexedDB dengan daftar kos dari Peta Eksplorasi
 */
export async function sendListingsToDssProject(
  listings: readonly PilotListing[],
  campus: PilotSpecification,
  commuteMap: Record<string, number> = {}
): Promise<{ projectId: string; count: number }> {
  const repository = new IndexedDbProjectRepository();
  const now = new Date().toISOString();

  // Cari apakah sudah ada proyek untuk kampus ini
  const existingProjects = await repository.listProjects();
  let targetProject: ComparisonProject | undefined = existingProjects.find((p) =>
    p.destinationLabel.includes(campus.shortName)
  );

  if (!targetProject) {
    const defaultWeights: Record<CriterionKey, Importance> = {
      cost: 4,
      commute: 4,
      facilities: 3,
      environment: 3,
      ruleFit: 2,
    };

    targetProject = {
      id: crypto.randomUUID(),
      name: `Analisis Kos ${campus.shortName} (${campus.city})`,
      destinationLabel: `${campus.campusName} (${campus.shortName})`,
      destinationPoint: campus.centerCoordinates,
      monthlyBudget: 2000000,
      commuteDaysPerMonth: 22,
      maxOneWayCommuteMinutes: 30,
      weights: defaultWeights,
      facilityPreferences: [
        { code: "wifi", label: "WiFi Internet", level: "desired" },
        { code: "bathroom_inside", label: "Kamar Mandi Dalam", level: "desired" },
        { code: "ac", label: "AC", level: "desired" },
      ],
      rulePreferences: [
        { code: "access_24h", label: "Akses 24 Jam Bebas", expectedValue: true },
      ],
      favoriteOptionId: null,
      createdAt: now,
      updatedAt: now,
    };

    await repository.saveProject(targetProject);
  }

  const activeProject = targetProject;

  // Konversi setiap listing menjadi AccommodationOption
  const optionsToSave: AccommodationOption[] = listings.map((l) =>
    pilotListingToAccommodationOption(l, activeProject.id, commuteMap[l.id] ?? null)
  );

  for (const opt of optionsToSave) {
    await repository.saveOption(opt);
  }

  // Set proyek ini sebagai activeProjectId
  await repository.saveSetting("activeProjectId", activeProject.id);

  return {
    projectId: activeProject.id,
    count: optionsToSave.length,
  };
}
