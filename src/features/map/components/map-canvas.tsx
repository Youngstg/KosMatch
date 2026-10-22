"use client";

import { useEffect, useRef } from "react";
import {
  Map as MapLibreMap,
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  setWorkerUrl,
  type StyleSpecification,
  type GeoJSONSource,
  type MapMouseEvent,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre-gl-worker.mjs");
}

import type { PilotSpecification } from "@/data/pilot-config";
import { PILOT_CONFIG } from "@/data/pilot-config";
import type { PilotListing } from "@/data/pilot-listings";
import type { PilotPoi } from "@/data/pilot-pois";
import { POI_CATEGORY_CONFIG } from "@/data/pilot-pois";
import { createGeoJsonCircle } from "../utils/geo-circle";

export interface MapCanvasProps {
  selectedCampus: PilotSpecification;
  listings?: readonly PilotListing[];
  selectedListingId?: string | null;
  candidatePoint: { latitude: number; longitude: number } | null;
  destinationPoint?: { latitude: number; longitude: number; name?: string } | null;
  pois?: readonly PilotPoi[];
  activePoiCategory?: string | null;
  activePoiCategories?: readonly string[] | null;
  theme?: "dark" | "light";
  onMapClick?: (coords: { latitude: number; longitude: number }) => void;
  onCampusSelect?: (campus: PilotSpecification) => void;
  onListingSelect?: (listing: PilotListing) => void;
}

const CARTO_API_KEY =
  process.env.NEXT_PUBLIC_CARTO_API_KEY || "cb1_4rm7_1_bb6324dd9bf6700ea86a2fc1";

const getTileUrls = (theme: "dark" | "light" = "dark", key?: string): string[] => {
  const variant = theme === "light" ? "voyager" : "dark_all";
  if (key) {
    return [
      `https://a.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png?key=${key}`,
      `https://b.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png?key=${key}`,
      `https://c.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png?key=${key}`,
      `https://d.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png?key=${key}`,
    ];
  }
  return [
    `https://a.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png`,
    `https://b.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png`,
    `https://c.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png`,
    `https://d.basemaps.cartocdn.com/rastertiles/${variant}/{z}/{x}/{y}.png`,
  ];
};

const getOsmRasterStyle = (theme: "dark" | "light" = "dark"): StyleSpecification => ({
  version: 8,
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: getTileUrls(theme, CARTO_API_KEY),
      tileSize: 256,
      attribution: CARTO_API_KEY
        ? '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>'
        : '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
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
});

export function MapCanvas({
  selectedCampus,
  listings = [],
  selectedListingId = null,
  candidatePoint,
  destinationPoint = null,
  pois = [],
  activePoiCategory = null,
  activePoiCategories,
  theme = "dark",
  onMapClick,
  onCampusSelect,
  onListingSelect,
}: MapCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const candidateMarkerRef = useRef<Marker | null>(null);
  const destinationMarkerRef = useRef<Marker | null>(null);
  const listingMarkersRef = useRef<Marker[]>([]);
  const poiMarkersRef = useRef<Marker[]>([]);
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
      style: getOsmRasterStyle(theme),
      center: initialCenter,
      zoom: selectedCampus.radiusKm > 4 ? 12.0 : 12.5,
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

      const circleColor = theme === "dark" ? "#F59E0B" : "#4F46E5";
      map.addLayer({
        id: circleFillId,
        type: "fill",
        source: circleSourceId,
        paint: {
          "fill-color": circleColor,
          "fill-opacity": theme === "dark" ? 0.14 : 0.18,
        },
      });

      map.addLayer({
        id: circleLineId,
        type: "line",
        source: circleSourceId,
        paint: {
          "line-color": circleColor,
          "line-width": 3.5,
          "line-dasharray": [4, 3],
          "line-opacity": 0.95,
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
      zoom: selectedCampus.radiusKm > 4 ? 12.0 : 12.5,
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

  // Update POI category markers (colored dots for map reference)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove old POI markers
    poiMarkersRef.current.forEach((m) => m.remove());
    poiMarkersRef.current = [];

    const visiblePois =
      activePoiCategories !== undefined
        ? (activePoiCategories ? pois.filter((poi) => activePoiCategories.includes(poi.category)) : [])
        : (activePoiCategory ? pois.filter((poi) => poi.category === activePoiCategory) : pois);

    visiblePois.forEach((poi) => {
      const config = POI_CATEGORY_CONFIG[poi.category] ?? {
        color: "#F59E0B",
        bgLight: "rgba(245, 158, 11, 0.2)",
        label: poi.category,
        iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
      };

      const isHighlighted = activePoiCategory === poi.category || (activePoiCategories && activePoiCategories.includes(poi.category));
      const markerEl = document.createElement("div");
      markerEl.className = `map-poi-marker ${isHighlighted ? "highlight" : ""}`;
      markerEl.setAttribute("role", "button");
      markerEl.setAttribute("aria-label", `${config.label}: ${poi.name}`);
      markerEl.innerHTML = `
        <span class="poi-marker-dot" style="background-color: ${config.color}; box-shadow: 0 0 10px ${config.color}99;">
          <span class="poi-marker-inner"></span>
        </span>
      `;

      const popup = new Popup({ offset: 12, closeButton: false }).setHTML(`
        <div class="poi-popup-card">
          <div class="poi-popup-tag" style="color: ${config.color}; background: ${config.bgLight}">
            <span style="display:inline-flex;align-items:center;margin-right:4px;">${config.iconSymbol}</span> ${config.label}
          </div>
          <strong class="poi-popup-name">${poi.name}</strong>
          ${poi.description ? `<p class="poi-popup-desc">${poi.description}</p>` : ""}
        </div>
      `);

      const marker = new Marker({ element: markerEl })
        .setLngLat([poi.coordinates.longitude, poi.coordinates.latitude])
        .setPopup(popup)
        .addTo(map);

      // Show popup on hover
      markerEl.addEventListener("mouseenter", () => popup.addTo(map));
      markerEl.addEventListener("mouseleave", () => popup.remove());

      poiMarkersRef.current.push(marker);
    });

    return () => {
      poiMarkersRef.current.forEach((m) => m.remove());
      poiMarkersRef.current = [];
    };
  }, [pois, activePoiCategory, activePoiCategories]);

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

  // Update theme tiles dynamically when theme changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const updateTiles = () => {
      const source = map.getSource("osm-tiles") as unknown as { setTiles?: (urls: string[]) => void };
      if (source && typeof source.setTiles === "function") {
        source.setTiles(getTileUrls(theme, CARTO_API_KEY));
      }

      const circleColor = theme === "dark" ? "#F59E0B" : "#4F46E5";
      if (map.getLayer(circleFillId)) {
        map.setPaintProperty(circleFillId, "fill-color", circleColor);
        map.setPaintProperty(circleFillId, "fill-opacity", theme === "dark" ? 0.08 : 0.12);
      }
      if (map.getLayer(circleLineId)) {
        map.setPaintProperty(circleLineId, "line-color", circleColor);
      }
    };

    if (map.isStyleLoaded()) {
      updateTiles();
    } else {
      map.once("styledata", updateTiles);
    }
  }, [theme]);

  // Update route polyline between active point and destination point
  const routeSourceId = "route-line-source";
  const routeLayerId = "route-line-layer";

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const activePoint = candidatePoint;

    if (!activePoint || !destinationPoint) {
      if (map.getLayer(routeLayerId)) {
        map.removeLayer(routeLayerId);
      }
      if (map.getSource(routeSourceId)) {
        map.removeSource(routeSourceId);
      }
      return;
    }

    const routeGeoJson = {
      type: "Feature" as const,
      properties: {},
      geometry: {
        type: "LineString" as const,
        coordinates: [
          [activePoint.longitude, activePoint.latitude],
          [destinationPoint.longitude, destinationPoint.latitude],
        ],
      },
    };

    const updateOrCreateRoute = () => {
      if (map.getSource(routeSourceId)) {
        (map.getSource(routeSourceId) as GeoJSONSource).setData(routeGeoJson);
      } else {
        map.addSource(routeSourceId, {
          type: "geojson",
          data: routeGeoJson,
        });

        map.addLayer({
          id: routeLayerId,
          type: "line",
          source: routeSourceId,
          paint: {
            "line-color": "#F97316",
            "line-width": 3.5,
            "line-dasharray": [2, 1],
            "line-opacity": 0.9,
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      updateOrCreateRoute();
    } else {
      map.once("styledata", updateOrCreateRoute);
    }
  }, [candidatePoint, destinationPoint]);

  return (
    <div
      ref={containerRef}
      className="map-canvas-container"
      style={{ width: "100%", height: "100%", minHeight: "100%" }}
    />
  );
}
