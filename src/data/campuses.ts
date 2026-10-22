import type { GeoPoint } from "@/lib/geo";

export interface Campus extends GeoPoint {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly city: string;
}

/**
 * Titik kampus PERKIRAAN (±1 km) dan BELUM diverifikasi satu per satu.
 * Pengguna harus memeriksa titik di peta dan menyesuaikannya ke gerbang/fakultas yang dituju.
 * Daftar ini sengaja pendek; tambahkan lewat PR setelah koordinatnya diverifikasi.
 */
export const CAMPUSES: readonly Campus[] = [
  { id: "ui-depok", name: "Universitas Indonesia (Depok)", shortName: "UI", city: "Depok", latitude: -6.362, longitude: 106.827 },
  { id: "itera-lampung", name: "Institut Teknologi Sumatera (ITERA)", shortName: "ITERA", city: "Lampung Selatan", latitude: -5.3584, longitude: 105.3148 },
  { id: "itb-ganesha", name: "Institut Teknologi Bandung (Ganesha)", shortName: "ITB", city: "Bandung", latitude: -6.8915, longitude: 107.6107 },
  { id: "unpad-jatinangor", name: "Universitas Padjadjaran (Jatinangor)", shortName: "Unpad", city: "Sumedang", latitude: -6.927, longitude: 107.7716 },
  { id: "ipb-dramaga", name: "IPB University (Dramaga)", shortName: "IPB", city: "Bogor", latitude: -6.558, longitude: 106.725 },
  { id: "ugm-bulaksumur", name: "Universitas Gadjah Mada", shortName: "UGM", city: "Sleman", latitude: -7.7713, longitude: 110.3774 },
  { id: "undip-tembalang", name: "Universitas Diponegoro (Tembalang)", shortName: "Undip", city: "Semarang", latitude: -7.0504, longitude: 110.438 },
  { id: "uns-kentingan", name: "Universitas Sebelas Maret (Kentingan)", shortName: "UNS", city: "Surakarta", latitude: -7.5612, longitude: 110.8572 },
  { id: "its-sukolilo", name: "Institut Teknologi Sepuluh Nopember", shortName: "ITS", city: "Surabaya", latitude: -7.2819, longitude: 112.7949 },
  { id: "ub-malang", name: "Universitas Brawijaya", shortName: "UB", city: "Malang", latitude: -7.9522, longitude: 112.614 },
  { id: "usu-medan", name: "Universitas Sumatera Utara", shortName: "USU", city: "Medan", latitude: -3.5597, longitude: 98.6563 },
  { id: "unand-limau-manis", name: "Universitas Andalas (Limau Manis)", shortName: "Unand", city: "Padang", latitude: -0.9143, longitude: 100.4602 },
  { id: "unhas-tamalanrea", name: "Universitas Hasanuddin (Tamalanrea)", shortName: "Unhas", city: "Makassar", latitude: -5.13, longitude: 119.489 },
];

export function findCampus(id: string): Campus | undefined {
  return CAMPUSES.find((campus) => campus.id === id);
}
