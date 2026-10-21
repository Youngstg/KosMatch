// Strongly-typed database definitions for Supabase PostgreSQL (PostGIS + pgvector)

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

export interface Database {
  public: {
    Tables: {
      campuses: {
        Row: {
          id: string;
          name: string;
          short_name: string;
          city: string;
          geom: unknown;
          is_pilot: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          short_name: string;
          city: string;
          geom: unknown;
          is_pilot?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          short_name?: string;
          city?: string;
          geom?: unknown;
          is_pilot?: boolean;
          created_at?: string;
        };
      };
      pois: {
        Row: {
          id: number;
          osm_type: "N" | "W" | "R";
          osm_id: number;
          category: PoiCategory;
          name: string | null;
          tags: Json;
          geom: unknown;
          created_at: string;
        };
        Insert: {
          id?: number;
          osm_type: "N" | "W" | "R";
          osm_id: number;
          category: PoiCategory;
          name?: string | null;
          tags?: Json;
          geom: unknown;
          created_at?: string;
        };
        Update: {
          id?: number;
          osm_type?: "N" | "W" | "R";
          osm_id?: number;
          category?: PoiCategory;
          name?: string | null;
          tags?: Json;
          geom?: unknown;
          created_at?: string;
        };
      };
      listings: {
        Row: {
          id: string;
          owner_id: string | null;
          campus_id: string | null;
          name: string;
          geom: unknown;
          rent_monthly: number;
          utilities: Json;
          facilities: Json;
          rules: Json;
          description: string | null;
          embedding: number[] | null;
          status: ListingStatus;
          last_confirmed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          owner_id?: string | null;
          campus_id?: string | null;
          name: string;
          geom: unknown;
          rent_monthly: number;
          utilities?: Json;
          facilities?: Json;
          rules?: Json;
          description?: string | null;
          embedding?: number[] | null;
          status?: ListingStatus;
          last_confirmed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          owner_id?: string | null;
          campus_id?: string | null;
          name?: string;
          geom?: unknown;
          rent_monthly?: number;
          utilities?: Json;
          facilities?: Json;
          rules?: Json;
          description?: string | null;
          embedding?: number[] | null;
          status?: ListingStatus;
          last_confirmed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      commute_cache: {
        Row: {
          origin_cell: string;
          dest_id: string;
          mode: CommuteMode;
          minutes: number;
          distance_m: number;
          fetched_at: string;
        };
        Insert: {
          origin_cell: string;
          dest_id: string;
          mode: CommuteMode;
          minutes: number;
          distance_m: number;
          fetched_at?: string;
        };
        Update: {
          origin_cell?: string;
          dest_id?: string;
          mode?: CommuteMode;
          minutes?: number;
          distance_m?: number;
          fetched_at?: string;
        };
      };
    };
    Functions: {
      get_listing_neighborhood_profile: {
        Args: {
          target_listing_id: string;
          radius_meters?: number;
        };
        Returns: {
          category: string;
          count: number;
          nearest_meters: number;
        }[];
      };
      get_point_neighborhood_profile: {
        Args: {
          target_lat: number;
          target_lng: number;
          radius_meters?: number;
        };
        Returns: {
          category: string;
          count: number;
          nearest_meters: number;
        }[];
      };
      match_listings: {
        Args: {
          query_embedding: number[];
          match_threshold?: number;
          match_count?: number;
        };
        Returns: {
          id: string;
          name: string;
          rent_monthly: number;
          similarity: number;
        }[];
      };
    };
  };
}
