export interface PilotBoundingBox {
  readonly minLon: number;
  readonly minLat: number;
  readonly maxLon: number;
  readonly maxLat: number;
}

export interface PilotGate {
  readonly id: string;
  readonly name: string;
  readonly shortLabel: string;
  readonly coordinates: { readonly latitude: number; readonly longitude: number };
  readonly description?: string;
}

export interface PilotSpecification {
  readonly id: string;
  readonly campusId: string;
  readonly campusName: string;
  readonly city: string;
  readonly centerCoordinates: { readonly latitude: number; readonly longitude: number };
  readonly gates: readonly PilotGate[];
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
    gates: [
      {
        id: "ui-gerbatama",
        name: "Gerbatama & Stasiun UI",
        shortLabel: "Gerbatama / Stasiun UI",
        coordinates: { latitude: -6.362, longitude: 106.827 },
        description: "Akses utama Margonda Raya, halte bus kuning, dan KRL Stasiun UI",
      },
      {
        id: "ui-kutek",
        name: "Pintu Kukusan Teknik (Kutek)",
        shortLabel: "Pintu Kutek (FT/Vokasi)",
        coordinates: { latitude: -6.3685, longitude: 106.8225 },
        description: "Akses utama Fakultas Teknik dan Program Pendidikan Vokasi",
      },
      {
        id: "ui-kukel",
        name: "Pintu Kukusan Kelurahan (Kukel)",
        shortLabel: "Pintu Kukel (MIPA/FIK)",
        coordinates: { latitude: -6.3575, longitude: 106.8255 },
        description: "Akses FMIPA, Fakultas Ilmu Keperawatan, dan Rumpun Ilmu Kesehatan",
      },
      {
        id: "ui-pocin",
        name: "Jembatan Stasiun Pondok Cina",
        shortLabel: "Pondok Cina (FIB/FEB)",
        coordinates: { latitude: -6.368, longitude: 106.832 },
        description: "Akses pejalan kaki langsung ke FIB, FEB, dan Fakultas Psikologi",
      },
    ],
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
    gates: [
      {
        id: "unand-gerbang-utama",
        name: "Gerbang Utama Limau Manis",
        shortLabel: "Gerbang Utama",
        coordinates: { latitude: -0.9143, longitude: 100.4602 },
        description: "Gerbang utama kampus dari arah Simpang Pasar Baru",
      },
      {
        id: "unand-rektorat-gkb",
        name: "Pusat Rektorat & Gedung Kuliah Bersama (GKB)",
        shortLabel: "Rektorat & GKB",
        coordinates: { latitude: -0.914, longitude: 100.464 },
        description: "Pusat kuliah bersama tingkat 1 dan gedung administrasi rektorat",
      },
      {
        id: "unand-pasar-baru",
        name: "Simpang Kampus / Pasar Baru",
        shortLabel: "Pasar Baru",
        coordinates: { latitude: -0.923, longitude: 100.435 },
        description: "Sentra transportasi angkot dan kawasan hunian kos mahasiswa terbanyak",
      },
    ],
    radiusKm: 5.0,
    boundingBox: { minLon: 100.35, minLat: -0.96, maxLon: 100.49, maxLat: -0.86 },
    initialTargetVerifiedListings: 30,
    targetAudience: "Mahasiswa Unand di kawasan Limau Manis, Pasar Baru, dan Pauh",
    priorityPoiCategories: ["food", "laundry", "convenience", "worship", "pharmacy", "atm"] as const,
  },
  iteraPilot: {
    id: "pilot-lampung-itera",
    campusId: "itera-lampung",
    campusName: "Institut Teknologi Sumatera (ITERA)",
    city: "Lampung Selatan",
    centerCoordinates: { latitude: -5.3584, longitude: 105.3148 },
    gates: [
      {
        id: "itera-gerbang-utama",
        name: "Gerbang Utama Jl. Terusan Ryacudu",
        shortLabel: "Gerbang Utama Ryacudu",
        coordinates: { latitude: -5.3584, longitude: 105.3148 },
        description: "Akses utama Jalan Terusan Ryacudu, halte bus Trans Lampung, dan gerbang depan kampus",
      },
      {
        id: "itera-gku-rektorat",
        name: "Gedung Kuliah Umum (GKU 1) & Rektorat",
        shortLabel: "GKU 1 & Rektorat",
        coordinates: { latitude: -5.3605, longitude: 105.3175 },
        description: "Pusat perkuliahan mahasiswa tingkat pertama dan laboratorium dasar",
      },
      {
        id: "itera-simpang-wayhuwi",
        name: "Simpang Kampus Way Huwi",
        shortLabel: "Simpang Way Huwi",
        coordinates: { latitude: -5.355, longitude: 105.308 },
        description: "Sentra hunian kos mahasiswa, minimarket, laundry, dan kuliner terpadat",
      },
      {
        id: "itera-asrama-embung",
        name: "Kawasan Asrama Mahasiswa & Embung C",
        shortLabel: "Asrama TB & Embung",
        coordinates: { latitude: -5.3645, longitude: 105.322 },
        description: "Akses asrama Tower Bersama (TB 1-4) dan sarana olahraga mahasiswa",
      },
    ],
    radiusKm: 4.0,
    boundingBox: { minLon: 105.26, minLat: -5.41, maxLon: 105.37, maxLat: -5.31 },
    initialTargetVerifiedListings: 25,
    targetAudience: "Mahasiswa baru & sarjana ITERA di kawasan Terusan Ryacudu, Way Huwi, Sabah Balau, dan Jati Agung",
    priorityPoiCategories: ["food", "laundry", "convenience", "pharmacy", "worship", "bus_stop", "atm"] as const,
  },
  get allPilots(): readonly PilotSpecification[] {
    return [this.primaryPilot, this.secondaryPilot, this.iteraPilot];
  },
};

export function getPilotByCampusId(campusId: string): PilotSpecification | undefined {
  return PILOT_CONFIG.allPilots.find((pilot) => pilot.campusId === campusId);
}

export function isPilotCampus(campusId: string): boolean {
  return PILOT_CONFIG.allPilots.some((pilot) => pilot.campusId === campusId);
}
