import fs from 'fs';

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

const CAMPUS_CONFIGS = [
  {
    campusId: 'itera-lampung',
    name: 'ITERA Lampung',
    bbox: [-5.39, 105.28, -5.33, 105.35],
    city: 'Lampung Selatan',
    area: 'Way Huwi / Terusan Ryacudu'
  },
  {
    campusId: 'ui-depok',
    name: 'UI Depok',
    bbox: [-6.38, 106.80, -6.34, 106.85],
    city: 'Depok',
    area: 'Margonda / Kukusan'
  },
  {
    campusId: 'unand-limau-manis',
    name: 'UNAND Limau Manis',
    bbox: [-0.95, 100.42, -0.90, 100.48],
    city: 'Padang',
    area: 'Limau Manis / Pasar Baru'
  }
];

async function fetchDorms(campus) {
  const [minLat, minLon, maxLat, maxLon] = campus.bbox;
  const query = `[out:json][timeout:35];
(
  node["tourism"~"guest_house|hostel|hotel|motel"](${minLat},${minLon},${maxLat},${maxLon});
  way["tourism"~"guest_house|hostel|hotel|motel"](${minLat},${minLon},${maxLat},${maxLon});
  node["building"~"dormitory|apartments|residential"](${minLat},${minLon},${maxLat},${maxLon});
  way["building"~"dormitory|apartments|residential"](${minLat},${minLon},${maxLat},${maxLon});
  node["amenity"="dormitory"](${minLat},${minLon},${maxLat},${maxLon});
  way["amenity"="dormitory"](${minLat},${minLon},${maxLat},${maxLon});
);
out center body;
`;

  console.log(`[${campus.name}] Querying dorms/guest_houses...`);
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
  console.log(`[${campus.name}] Found ${json.elements.length} accommodation elements`);
  
  const named = [];
  for (const el of json.elements) {
    const tags = el.tags || {};
    const name = tags.name || tags['name:id'];
    if (!name) continue;
    named.push({
      osm_id: el.id,
      osm_type: el.type,
      name,
      lat: el.lat || el.center?.lat,
      lon: el.lon || el.center?.lon,
      tags
    });
  }
  console.log(`[${campus.name}] Named: ${named.length}`);
  return named;
}

async function run() {
  const results = {};
  for (const c of CAMPUS_CONFIGS) {
    try {
      results[c.campusId] = await fetchDorms(c);
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console.error(c.name, e.message);
      results[c.campusId] = [];
    }
  }
  fs.writeFileSync('scripts/scraper/scraped_osm_dorms.json', JSON.stringify(results, null, 2));
  console.log('Done!');
}

run();
