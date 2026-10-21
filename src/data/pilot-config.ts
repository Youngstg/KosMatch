export interface PilotBoundingBox {
  readonly minLon: number;
  readonly minLat: number;
  readonly maxLon: number;
  readonly maxLat: number;
}

export interface PilotSpecification {
  readonly id: string;
  readonly campusId: string;
  readonly campusName: string;
  readonly city: string;
  readonly centerCoordinates: { readonly latitude: number; readonly longitude: number };
  readonly radiusKm: number;
  readonly boundingBox: PilotBoundingBox;
  readonly initialTargetVerifiedListings: number;
  readonly targetAudience: string;
  readonly priorityPoiCategories: readonly string[];
}

export const PILOT_CONFIG = {
  primaryPilot: {
    id: "pilot-depok-ui",
    campusId: "ui-depok",
    campusName: "Universitas Indonesia (Depok)",
    city: "Depok",
    centerCoordinates: { latitude: -6.362, longitude: 106.827 },
    radiusKm: 4.0,
    boundingBox: { minLon: 106.77, minLat: -6.42, maxLon: 106.87, maxLat: -6.32 },
    initialTargetVerifiedListings: 50,
    targetAudience: "Mahasiswa baru & tingkat akhir UI Depok, pencari kos area Margonda, Kukusan, Kober, Pondok Cina",
    priorityPoiCategories: ["food", "laundry", "convenience", "pharmacy", "worship", "bus_stop", "atm"] as const,
  },
  secondaryPilot: {
    id: "pilot-padang-unand",
    campusId: "unand-limau-manis",
    campusName: "Universitas Andalas (Limau Manis)",
    city: "Padang",
    centerCoordinates: { latitude: -0.9143, longitude: 100.4602 },
    radiusKm: 5.0,
    boundingBox: { minLon: 100.35, minLat: -0.96, maxLon: 100.49, maxLat: -0.86 },
    initialTargetVerifiedListings: 30,
    targetAudience: "Mahasiswa Unand di kawasan Limau Manis, Pasar Baru, dan Pauh",
    priorityPoiCategories: ["food", "laundry", "convenience", "worship", "pharmacy", "atm"] as const,
  },
  get allPilots(): readonly PilotSpecification[] {
    return [this.primaryPilot, this.secondaryPilot];
  },
};

export function getPilotByCampusId(campusId: string): PilotSpecification | undefined {
  return PILOT_CONFIG.allPilots.find((pilot) => pilot.campusId === campusId);
}

export function isPilotCampus(campusId: string): boolean {
  return PILOT_CONFIG.allPilots.some((pilot) => pilot.campusId === campusId);
}
