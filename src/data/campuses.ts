import type { GeoPoint } from "@/lib/geo";

export interface CampusStats {
  readonly verifiedListings?: number;
  readonly priceRange?: string;
  readonly gatesCount?: number;
}

export interface Campus extends GeoPoint {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly city: string;
  readonly imageUrl?: string;
  readonly stats?: CampusStats;
}

/**
 * Titik kampus terdaftar di KosMatch.
 * Kampus pilot memiliki katalog terverifikasi lengkap, titik gerbang resmi, dan rute komutasi nyata.
 */
export const CAMPUSES: readonly Campus[] = [
  {
    id: "ui-depok",
    name: "Universitas Indonesia (Depok)",
    shortName: "UI",
    city: "Depok",
    latitude: -6.362,
    longitude: 106.827,
    imageUrl: "/images/campuses/ui-depok.jpg",
    stats: { verifiedListings: 127, priceRange: "Rp 900rb - 2.4jt", gatesCount: 4 },
  },
  {
    id: "itera-lampung",
    name: "Institut Teknologi Sumatera (ITERA)",
    shortName: "ITERA",
    city: "Lampung Selatan",
    latitude: -5.3584,
    longitude: 105.3148,
    imageUrl: "/images/campuses/itera-lampung.jpg",
    stats: { verifiedListings: 322, priceRange: "Rp 550rb - 1.7jt", gatesCount: 3 },
  },
  {
    id: "unila-bandarlampung",
    name: "Universitas Lampung",
    shortName: "Unila",
    city: "Bandar Lampung",
    latitude: -5.3644,
    longitude: 105.2435,
    imageUrl: "/images/campuses/unila-bandarlampung.jpg",
    stats: { verifiedListings: 31, priceRange: "Rp 550rb - 1.5jt", gatesCount: 3 },
  },
  {
    id: "unand-limau-manis",
    name: "Universitas Andalas (Limau Manis)",
    shortName: "Unand",
    city: "Padang",
    latitude: -0.9143,
    longitude: 100.4602,
    imageUrl: "/images/campuses/unand-limau-manis.jpg",
    stats: { verifiedListings: 106, priceRange: "Rp 650rb - 1.4jt", gatesCount: 3 },
  },
  {
    id: "unp-padang",
    name: "Universitas Negeri Padang",
    shortName: "UNP",
    city: "Padang",
    latitude: -0.8975,
    longitude: 100.3524,
    imageUrl: "/images/campuses/unp-padang.jpg",
    stats: { verifiedListings: 33, priceRange: "Rp 500rb - 1.6jt", gatesCount: 3 },
  },
  {
    id: "itb-ganesha",
    name: "Institut Teknologi Bandung (Ganesha)",
    shortName: "ITB",
    city: "Bandung",
    latitude: -6.8915,
    longitude: 107.6107,
    imageUrl: "/images/campuses/itb-ganesha.jpg",
    stats: { priceRange: "Rp 800rb - 3.0jt" },
  },
  {
    id: "unpad-jatinangor",
    name: "Universitas Padjadjaran (Jatinangor)",
    shortName: "Unpad",
    city: "Sumedang",
    latitude: -6.927,
    longitude: 107.7716,
    imageUrl: "/images/campuses/unpad-jatinangor.jpg",
    stats: { priceRange: "Rp 600rb - 2.2jt" },
  },
  {
    id: "ipb-dramaga",
    name: "IPB University (Dramaga)",
    shortName: "IPB",
    city: "Bogor",
    latitude: -6.558,
    longitude: 106.725,
    imageUrl: "/images/campuses/ipb-dramaga.jpg",
    stats: { priceRange: "Rp 500rb - 1.8jt" },
  },
  {
    id: "ugm-bulaksumur",
    name: "Universitas Gadjah Mada",
    shortName: "UGM",
    city: "Sleman",
    latitude: -7.7713,
    longitude: 110.3774,
    imageUrl: "/images/campuses/ugm-bulaksumur.jpg",
    stats: { priceRange: "Rp 650rb - 2.5jt" },
  },
  {
    id: "undip-tembalang",
    name: "Universitas Diponegoro (Tembalang)",
    shortName: "Undip",
    city: "Semarang",
    latitude: -7.0504,
    longitude: 110.438,
    imageUrl: "/images/campuses/undip-tembalang.jpg",
    stats: { priceRange: "Rp 550rb - 1.9jt" },
  },
  {
    id: "uns-kentingan",
    name: "Universitas Sebelas Maret (Kentingan)",
    shortName: "UNS",
    city: "Surakarta",
    latitude: -7.5612,
    longitude: 110.8572,
    imageUrl: "/images/campuses/uns-kentingan.jpg",
    stats: { priceRange: "Rp 450rb - 1.5jt" },
  },
  {
    id: "its-sukolilo",
    name: "Institut Teknologi Sepuluh Nopember",
    shortName: "ITS",
    city: "Surabaya",
    latitude: -7.2819,
    longitude: 112.7949,
    imageUrl: "/images/campuses/its-sukolilo.jpg",
    stats: { priceRange: "Rp 600rb - 2.0jt" },
  },
  {
    id: "ub-malang",
    name: "Universitas Brawijaya",
    shortName: "UB",
    city: "Malang",
    latitude: -7.9522,
    longitude: 112.614,
    imageUrl: "/images/campuses/ub-malang.jpg",
    stats: { priceRange: "Rp 550rb - 2.0jt" },
  },
  {
    id: "usu-medan",
    name: "Universitas Sumatera Utara",
    shortName: "USU",
    city: "Medan",
    latitude: -3.5597,
    longitude: 98.6563,
    imageUrl: "/images/campuses/usu-medan.jpg",
    stats: { priceRange: "Rp 500rb - 1.8jt" },
  },
  {
    id: "unhas-tamalanrea",
    name: "Universitas Hasanuddin (Tamalanrea)",
    shortName: "Unhas",
    city: "Makassar",
    latitude: -5.13,
    longitude: 119.489,
    imageUrl: "/images/campuses/unhas-tamalanrea.jpg",
    stats: { priceRange: "Rp 500rb - 1.7jt" },
  },
];

export function findCampus(id: string): Campus | undefined {
  return CAMPUSES.find((campus) => campus.id === id);
}
