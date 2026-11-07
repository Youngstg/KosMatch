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
  readonly shortName: string;
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
    shortName: "UI Depok",
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
    shortName: "UNAND",
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
        id: "unand-pasar-baru",
        name: "Simpang Kampus / Akses Pasar Baru",
        shortLabel: "Akses Pasar Baru",
        coordinates: { latitude: -0.923, longitude: 100.435 },
        description: "Sentra transportasi angkot dan kawasan hunian kos mahasiswa terbanyak",
      },
      {
        id: "unand-pintu-pauh",
        name: "Pintu Masuk Barat / Akses Kuranji Pauh",
        shortLabel: "Akses Pauh Barat",
        coordinates: { latitude: -0.918, longitude: 100.442 },
        description: "Akses gerbang barat jalur alternatif mahasiswa dari Pauh dan Bypass",
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
    shortName: "ITERA",
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
        id: "itera-simpang-wayhuwi",
        name: "Gerbang Barat / Akses Pemda Way Huwi",
        shortLabel: "Gerbang Barat (Way Huwi)",
        coordinates: { latitude: -5.355, longitude: 105.308 },
        description: "Akses gerbang barat favorit mahasiswa dari sentra kos Lapas Raya dan Pemda",
      },
      {
        id: "itera-akses-sabahbalau",
        name: "Gerbang Selatan / Akses Sabah Balau & Tol",
        shortLabel: "Gerbang Selatan (Sabah Balau)",
        coordinates: { latitude: -5.368, longitude: 105.321 },
        description: "Akses gerbang selatan dari kawasan kos Sabah Balau dan pintu keluar tol Kotabaru",
      },
    ],
    radiusKm: 4.0,
    boundingBox: { minLon: 105.26, minLat: -5.41, maxLon: 105.37, maxLat: -5.31 },
    initialTargetVerifiedListings: 25,
    targetAudience: "Mahasiswa baru & sarjana ITERA di kawasan Terusan Ryacudu, Way Huwi, Sabah Balau, dan Jati Agung",
    priorityPoiCategories: ["food", "laundry", "convenience", "pharmacy", "worship", "bus_stop", "atm"] as const,
  },
  unilaPilot: {
    id: "pilot-lampung-unila",
    campusId: "unila-bandarlampung",
    campusName: "Universitas Lampung",
    shortName: "Unila",
    city: "Bandar Lampung",
    centerCoordinates: { latitude: -5.3644, longitude: 105.2435 },
    gates: [
      {
        id: "unila-gerbang-utama",
        name: "Gerbang Utama Jl. Sumantri Brojonegoro",
        shortLabel: "Gerbang Utama (Sumantri)",
        coordinates: { latitude: -5.3644, longitude: 105.2435 },
        description: "Akses utama dari Jl. ZA Pagar Alam, halte BRT, dan Bundaran Unila",
      },
      {
        id: "unila-gerbang-kpbaru",
        name: "Gerbang Belakang Kampung Baru",
        shortLabel: "Pintu Kampung Baru",
        coordinates: { latitude: -5.3582, longitude: 105.2485 },
        description: "Sentra kos mahasiswa Kampung Baru dan jalur pejalan kaki favorit mahasiswa",
      },
      {
        id: "unila-gerbang-gedongmeneng",
        name: "Pintu Barat Gedong Meneng / Bypass",
        shortLabel: "Pintu Gedong Meneng",
        coordinates: { latitude: -5.3695, longitude: 105.239 },
        description: "Akses barat dari arah Rajabasa dan Jl. Soekarno Hatta Bypass",
      },
    ],
    radiusKm: 4.0,
    boundingBox: { minLon: 105.21, minLat: -5.4, maxLon: 105.28, maxLat: -5.33 },
    initialTargetVerifiedListings: 35,
    targetAudience: "Mahasiswa Unila di kawasan Kampung Baru, Gedong Meneng, Rajabasa, dan Jl. ZA Pagar Alam",
    priorityPoiCategories: ["food", "laundry", "convenience", "pharmacy", "worship", "bus_stop", "atm"] as const,
  },
  unpPilot: {
    id: "pilot-padang-unp",
    campusId: "unp-padang",
    campusName: "Universitas Negeri Padang",
    shortName: "UNP",
    city: "Padang",
    centerCoordinates: { latitude: -0.8975, longitude: 100.3524 },
    gates: [
      {
        id: "unp-gerbang-utama",
        name: "Gerbang Utama Jl. Prof. Dr. Hamka",
        shortLabel: "Gerbang Utama (Hamka)",
        coordinates: { latitude: -0.8975, longitude: 100.3524 },
        description: "Gerbang utama kampus dari Jalan Prof. Dr. Hamka Air Tawar",
      },
      {
        id: "unp-stasiun-airtawar",
        name: "Pintu Barat Stasiun Air Tawar",
        shortLabel: "Akses Stasiun Air Tawar",
        coordinates: { latitude: -0.895, longitude: 100.3485 },
        description: "Akses langsung halte KRL Bandara Minangkabau Ekspres Stasiun Air Tawar",
      },
      {
        id: "unp-gerbang-cendrawasih",
        name: "Gerbang Selatan Jl. Cendrawasih",
        shortLabel: "Pintu Cendrawasih",
        coordinates: { latitude: -0.903, longitude: 100.355 },
        description: "Akses sentra kos Jl. Cendrawasih, FIK, dan Gelanggang Olahraga UNP",
      },
    ],
    radiusKm: 4.0,
    boundingBox: { minLon: 100.32, minLat: -0.93, maxLon: 100.39, maxLat: -0.86 },
    initialTargetVerifiedListings: 35,
    targetAudience: "Mahasiswa UNP di kawasan Air Tawar Barat, Air Tawar Timur, Cendrawasih, dan Hamka",
    priorityPoiCategories: ["food", "laundry", "convenience", "pharmacy", "worship", "bus_stop", "atm"] as const,
  },
  get allPilots(): readonly PilotSpecification[] {
    return [this.primaryPilot, this.secondaryPilot, this.iteraPilot, this.unilaPilot, this.unpPilot];
  },
};

export function getPilotByCampusId(campusId: string): PilotSpecification | undefined {
  return PILOT_CONFIG.allPilots.find((pilot) => pilot.campusId === campusId);
}

export function isPilotCampus(campusId: string): boolean {
  return PILOT_CONFIG.allPilots.some((pilot) => pilot.campusId === campusId);
}
