import fs from 'fs';
import path from 'path';

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

const CAMPUS_CONFIGS = [
  {
    campusId: 'itera-lampung',
    name: 'ITERA Lampung',
    // Broad area covering Way Huwi, Ryacudu, Sabah Balau, Jati Agung, Sukarame
    bbox: [-5.39, 105.28, -5.33, 105.35],
    center: { lat: -5.3584, lon: 105.3148 }
  },
  {
    campusId: 'ui-depok',
    name: 'UI Depok',
    // Kukusan, Pondok Cina, Margonda, Kober, Beji
    bbox: [-6.38, 106.80, -6.34, 106.85],
    center: { lat: -6.362, lon: 106.827 }
  },
  {
    campusId: 'unand-limau-manis',
    name: 'UNAND Limau Manis',
    // Limau Manis, Pasar Baru, Pauh
    bbox: [-0.95, 100.42, -0.90, 100.48],
    center: { lat: -0.9143, lon: 100.4602 }
  }
];

function categorize(tags) {
  if (!tags) return null;
  const amenity = tags.amenity;
  const shop = tags.shop;
  const highway = tags.highway;
  const healthcare = tags.healthcare;

  if (amenity === 'restaurant' || amenity === 'cafe' || amenity === 'fast_food' || amenity === 'food_court') {
    return 'food';
  }
  if (shop === 'laundry') {
    return 'laundry';
  }
  if (shop === 'convenience') {
    return 'convenience';
  }
  if (shop === 'supermarket') {
    return 'supermarket';
  }
  if (amenity === 'marketplace') {
    return 'marketplace';
  }
  if (amenity === 'pharmacy' || amenity === 'clinic' || amenity === 'hospital' || healthcare === 'pharmacy' || healthcare === 'clinic') {
    return 'pharmacy';
  }
  if (amenity === 'place_of_worship') {
    return 'worship';
  }
  if (highway === 'bus_stop' || amenity === 'bus_station') {
    return 'bus_stop';
  }
  if (amenity === 'atm' || amenity === 'bank') {
    return 'atm';
  }
  return null;
}

async function fetchForCampus(campus) {
  const [minLat, minLon, maxLat, maxLon] = campus.bbox;
  const query = `[out:json][timeout:35];
(
  node["amenity"](${minLat},${minLon},${maxLat},${maxLon});
  node["shop"](${minLat},${minLon},${maxLat},${maxLon});
  node["highway"="bus_stop"](${minLat},${minLon},${maxLat},${maxLon});
  way["amenity"](${minLat},${minLon},${maxLat},${maxLon});
  way["shop"](${minLat},${minLon},${maxLat},${maxLon});
);
out center body;
`;

  console.log(`[${campus.name}] Querying Overpass...`);
  const res = await fetch(OVERPASS_URL, {
    method: 'POST',
    headers: {
      'User-Agent': 'KosMatchDataPipeline/2.0 (student research; contact@kosmatch.id)',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'data=' + encodeURIComponent(query)
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const json = await res.json();
  console.log(`[${campus.name}] Received ${json.elements.length} raw elements`);

  const pois = [];
  const osmSet = new Set();

  for (const el of json.elements) {
    const tags = el.tags || {};
    const cat = categorize(tags);
    if (!cat) continue;

    const lat = el.lat || el.center?.lat;
    const lon = el.lon || el.center?.lon;
    if (!lat || !lon) continue;

    const key = `${el.type.charAt(0).toUpperCase()}_${el.id}`;
    if (osmSet.has(key)) continue;
    osmSet.add(key);

    const name = tags.name || tags['name:id'] || tags['brand'] || (cat === 'worship' ? 'Musholla / Masjid' : null);
    if (!name) continue; // Skip completely unnamed POIs for higher quality

    pois.push({
      osm_type: el.type.charAt(0).toUpperCase(),
      osm_id: el.id,
      campus_id: campus.campusId,
      category: cat,
      name: name.trim(),
      lat,
      lon,
      tags
    });
  }

  console.log(`[${campus.name}] Extracted ${pois.length} high-quality POIs`);
  return pois;
}

async function run() {
  const allPois = {};
  for (const c of CAMPUS_CONFIGS) {
    try {
      allPois[c.campusId] = await fetchForCampus(c);
      await new Promise(r => setTimeout(r, 2000)); // Be gentle with Overpass
    } catch (err) {
      console.error(`Failed for ${c.name}:`, err.message);
      allPois[c.campusId] = [];
    }
  }

  fs.writeFileSync('scripts/scraper/scraped_pois.json', JSON.stringify(allPois, null, 2));
  console.log('Saved to scripts/scraper/scraped_pois.json');
}

run().catch(console.error);
