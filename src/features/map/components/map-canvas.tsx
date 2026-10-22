"use client";

import { useEffect, useRef } from "react";
import {
  Map as MapLibreMap,
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  type StyleSpecification,
  type GeoJSONSource,
  type MapMouseEvent,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { PilotSpecification } from "@/data/pilot-config";
import { PILOT_CONFIG } from "@/data/pilot-config";
import type { PilotListing } from "@/data/pilot-listings";
import { createGeoJsonCircle } from "../utils/geo-circle";

export interface MapCanvasProps {
  selectedCampus: PilotSpecification;
  listings?: readonly PilotListing[];
  selectedListingId?: string | null;
  candidatePoint: { latitude: number; longitude: number } | null;
  destinationPoint?: { latitude: number; longitude: number; name?: string } | null;
  onMapClick?: (coords: { latitude: number; longitude: number }) => void;
  onCampusSelect?: (campus: PilotSpecification) => void;
  onListingSelect?: (listing: PilotListing) => void;
}

const OSM_RASTER_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: [
        "https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
        "https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
        "https://c.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
        "https://d.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>',
    },
  },
  layers: [
    {
      id: "osm-layer",
      type: "raster",
      source: "osm-tiles",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export function MapCanvas({
  selectedCampus,
  listings = [],
  selectedListingId = null,
  candidatePoint,
  destinationPoint = null,
  onMapClick,
  onCampusSelect,
  onListingSelect,
}: MapCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const candidateMarkerRef = useRef<Marker | null>(null);
  const destinationMarkerRef = useRef<Marker | null>(null);
  const listingMarkersRef = useRef<Marker[]>([]);
  const circleSourceId = "campus-radius-source";
  const circleFillId = "campus-radius-fill";
  const circleLineId = "campus-radius-line";

  const onMapClickRef = useRef(onMapClick);
  const onCampusSelectRef = useRef(onCampusSelect);
  const onListingSelectRef = useRef(onListingSelect);

  useEffect(() => {
    onMapClickRef.current = onMapClick;
    onCampusSelectRef.current = onCampusSelect;
    onListingSelectRef.current = onListingSelect;
  });

  // Initialize Map
  useEffect(() => {
    if (!containerRef.current) return;

    const initialCenter: [number, number] = [
      selectedCampus.centerCoordinates.longitude,
      selectedCampus.centerCoordinates.latitude,
    ];

    const map = new MapLibreMap({
      container: containerRef.current,
      style: OSM_RASTER_STYLE,
      center: initialCenter,
      zoom: 13,
      minZoom: 5,
      maxZoom: 18,
    });

    map.addControl(new NavigationControl({ visualizePitch: true }), "top-right");
    map.addControl(new ScaleControl({ unit: "metric" }), "bottom-right");

    map.on("load", () => {
      // Add radius circle source & layer
      const circleGeoJson = createGeoJsonCircle(initialCenter, selectedCampus.radiusKm);
      map.addSource(circleSourceId, {
        type: "geojson",
        data: circleGeoJson,
      });

      map.addLayer({
        id: circleFillId,
        type: "fill",
        source: circleSourceId,
        paint: {
          "fill-color": "#4F46E5",
          "fill-opacity": 0.12,
        },
      });

      map.addLayer({
        id: circleLineId,
        type: "line",
        source: circleSourceId,
        paint: {
          "line-color": "#4F46E5",
          "line-width": 2,
          "line-dasharray": [2, 2],
        },
      });

      // Add markers for all pilot campuses
      PILOT_CONFIG.allPilots.forEach((pilot) => {
        const markerEl = document.createElement("div");
        markerEl.className = "map-campus-marker";
        markerEl.setAttribute("role", "button");
        markerEl.setAttribute("aria-label", `Kampus: ${pilot.campusName}`);
        markerEl.innerHTML = `
          <div class="marker-pin ${pilot.id === selectedCampus.id ? "active" : ""}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <span class="marker-label">${pilot.city}</span>
        `;

        const popup = new Popup({ offset: 25 }).setHTML(`
          <div style="font-family: inherit; padding: 4px;">
            <strong style="font-size: 14px; display: block; margin-bottom: 4px;">${pilot.campusName}</strong>
            <p style="margin: 0; font-size: 12px; color: #667085;">
              Kota: <strong>${pilot.city}</strong><br/>
              Radius pilot: <strong>${pilot.radiusKm} km</strong><br/>
              Target listing: <strong>${pilot.initialTargetVerifiedListings} kos</strong>
            </p>
          </div>
        `);

        markerEl.addEventListener("click", () => {
          onCampusSelectRef.current?.(pilot);
        });

        new Marker({ element: markerEl })
          .setLngLat([pilot.centerCoordinates.longitude, pilot.centerCoordinates.latitude])
          .setPopup(popup)
          .addTo(map);
      });
    });

    map.on("click", (e: MapMouseEvent) => {
      onMapClickRef.current?.({ latitude: e.lngLat.lat, longitude: e.lngLat.lng });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // Map instance is created once on mount; dynamic updates handled in effects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FlyTo and update radius when selectedCampus changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const targetCenter: [number, number] = [
      selectedCampus.centerCoordinates.longitude,
      selectedCampus.centerCoordinates.latitude,
    ];

    map.flyTo({
      center: targetCenter,
      zoom: 13,
      speed: 1.2,
      curve: 1.4,
    });

    if (map.isStyleLoaded() && map.getSource(circleSourceId)) {
      const circleSource = map.getSource(circleSourceId) as GeoJSONSource;
      circleSource.setData(createGeoJsonCircle(targetCenter, selectedCampus.radiusKm));
    }
  }, [selectedCampus]);

  // Update listing markers
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove old listing markers
    listingMarkersRef.current.forEach((m) => m.remove());
    listingMarkersRef.current = [];

    listings.forEach((listing) => {
      const isSelected = listing.id === selectedListingId;
      const markerEl = document.createElement("div");
      markerEl.className = `map-listing-marker ${isSelected ? "active" : ""}`;
      markerEl.setAttribute("role", "button");
      markerEl.setAttribute("aria-label", `Kos: ${listing.name}`);
      markerEl.innerHTML = `
        <span class="listing-price-badge">Rp${Math.round(listing.rentMonthly / 1000)}k</span>
      `;

      markerEl.addEventListener("click", (e) => {
        e.stopPropagation();
        onListingSelectRef.current?.(listing);
      });

      const marker = new Marker({ element: markerEl })
        .setLngLat([listing.coordinates.longitude, listing.coordinates.latitude])
        .addTo(map);

      listingMarkersRef.current.push(marker);
    });

    return () => {
      listingMarkersRef.current.forEach((m) => m.remove());
      listingMarkersRef.current = [];
    };
  }, [listings, selectedListingId]);

  // Update candidate marker position
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (!candidatePoint) {
      if (candidateMarkerRef.current) {
        candidateMarkerRef.current.remove();
        candidateMarkerRef.current = null;
      }
      return;
    }

    if (!candidateMarkerRef.current) {
      const pinEl = document.createElement("div");
      pinEl.className = "candidate-pin";
      pinEl.innerHTML = `
        <div class="candidate-pulse"></div>
        <div class="candidate-dot"></div>
      `;

      candidateMarkerRef.current = new Marker({ element: pinEl })
        .setLngLat([candidatePoint.longitude, candidatePoint.latitude])
        .addTo(map);
    } else {
      candidateMarkerRef.current.setLngLat([
        candidatePoint.longitude,
        candidatePoint.latitude,
      ]);
    }
  }, [candidatePoint]);

  // Update destination marker position
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (!destinationPoint) {
      if (destinationMarkerRef.current) {
        destinationMarkerRef.current.remove();
        destinationMarkerRef.current = null;
      }
      return;
    }

    if (!destinationMarkerRef.current) {
      const pinEl = document.createElement("div");
      pinEl.className = "map-destination-marker";
      pinEl.innerHTML = `
        <div class="destination-pin">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="22" y1="12" x2="18" y2="12"/>
            <line x1="6" y1="12" x2="2" y2="12"/>
            <line x1="12" y1="6" x2="12" y2="2"/>
            <line x1="12" y1="22" x2="12" y2="18"/>
          </svg>
        </div>
        ${destinationPoint.name ? `<span class="destination-label">${destinationPoint.name}</span>` : ""}
      `;

      destinationMarkerRef.current = new Marker({ element: pinEl })
        .setLngLat([destinationPoint.longitude, destinationPoint.latitude])
        .addTo(map);
    } else {
      destinationMarkerRef.current.setLngLat([
        destinationPoint.longitude,
        destinationPoint.latitude,
      ]);
    }

    return () => {
      if (destinationMarkerRef.current) {
        destinationMarkerRef.current.remove();
        destinationMarkerRef.current = null;
      }
    };
  }, [destinationPoint]);

  return (
    <div
      ref={containerRef}
      className="map-canvas-container"
      style={{ width: "100%", height: "100%", minHeight: "calc(100vh - 72px)" }}
    />
  );
}
