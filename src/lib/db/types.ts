// Strongly-typed database definitions for PostgreSQL + PostGIS on VPS
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type PoiCategory =
  | "food"
  | "laundry"
  | "convenience"
  | "pharmacy"
  | "worship"
  | "bus_stop"
  | "atm"
  | "supermarket"
  | "marketplace";

export type ListingStatus = "pending" | "verified" | "rejected" | "stale";

export type CommuteMode = "walking" | "driving-car" | "cycling" | "motorcycle";

export interface UserRow {
  id: string;
  email: string;
  password_hash: string | null;
  role: "user" | "owner" | "admin";
  created_at: string;
}

export interface CampusRow {
  id: string;
  name: string;
  short_name: string;
  city: string;
  is_pilot: boolean;
  latitude: number;
  longitude: number;
  created_at: string;
}

export interface PoiRow {
  id: number;
  osm_type: "N" | "W" | "R";
  osm_id: number;
  category: PoiCategory;
  name: string | null;
  tags: Json;
  latitude: number;
  longitude: number;
  created_at: string;
}

export interface ListingRow {
  id: string;
  owner_id: string | null;
  campus_id: string | null;
  name: string;
  latitude: number;
  longitude: number;
  rent_monthly: number;
  utilities: Json;
  facilities: Json;
  rules: Json;
  description: string | null;
  status: ListingStatus;
  last_confirmed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CommuteCacheRow {
  origin_cell: string;
  dest_id: string;
  mode: CommuteMode;
  minutes: number;
  distance_m: number;
  fetched_at: string;
}

export interface NeighborhoodProfileDbRow {
  category: string;
  count: number | string;
  nearest_meters: number | string | null;
}
