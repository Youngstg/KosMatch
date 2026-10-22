-- KosMatch v2: Initial Seed Data for VPS Database
-- Populates pilot campuses (UI Depok, Unand Padang) and verified kos listings

-- 1. Pilot Campuses
INSERT INTO public.campuses (id, name, short_name, city, geom, is_pilot) VALUES
  ('ui-depok', 'Universitas Indonesia (Depok)', 'UI Depok', 'Depok', ST_SetSRID(ST_MakePoint(106.827, -6.362), 4326)::geography, true),
  ('unand-limau-manis', 'Universitas Andalas (Limau Manis)', 'Unand Padang', 'Padang', ST_SetSRID(ST_MakePoint(100.4602, -0.9143), 4326)::geography, true),
  ('itera-lampung', 'Institut Teknologi Sumatera (ITERA)', 'ITERA Lampung', 'Lampung Selatan', ST_SetSRID(ST_MakePoint(105.3148, -5.3584), 4326)::geography, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  city = EXCLUDED.city,
  geom = EXCLUDED.geom;

-- 2. Representative Pilot POIs (Kukusan, Margonda, Limau Manis, Pasar Baru)
INSERT INTO public.pois (osm_type, osm_id, category, name, tags, geom) VALUES
  -- UI Depok POIs
  ('N', 10001, 'food', 'Warteg Bahari Kukusan', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(106.8215, -6.3688), 4326)::geography),
  ('N', 10002, 'food', 'Ayam Geprek Juara Kutek', '{"cuisine": "chicken"}', ST_SetSRID(ST_MakePoint(106.8208, -6.3695), 4326)::geography),
  ('N', 10003, 'laundry', 'Super Wash Laundry Kukusan', '{"service": "laundry"}', ST_SetSRID(ST_MakePoint(106.8220, -6.3675), 4326)::geography),
  ('N', 10004, 'convenience', 'Indomaret Kutek Raya', '{"shop": "convenience"}', ST_SetSRID(ST_MakePoint(106.8218, -6.3690), 4326)::geography),
  ('N', 10005, 'pharmacy', 'Apotek Kimia Farma Margonda', '{"healthcare": "pharmacy"}', ST_SetSRID(ST_MakePoint(106.8328, -6.3650), 4326)::geography),
  ('N', 10006, 'worship', 'Masjid Al-Falah Pondok Cina', '{"religion": "muslim"}', ST_SetSRID(ST_MakePoint(106.8332, -6.3628), 4326)::geography),
  ('N', 10007, 'bus_stop', 'Halte Bus Kuning FIB UI', '{"highway": "bus_stop"}', ST_SetSRID(ST_MakePoint(106.8305, -6.3645), 4326)::geography),
  ('N', 10008, 'atm', 'ATM Center Stasiun UI', '{"amenity": "atm"}', ST_SetSRID(ST_MakePoint(106.8315, -6.3610), 4326)::geography),
  ('N', 10009, 'food', 'Ayam Bakar Mas Mono Margonda', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(106.8335, -6.3625), 4326)::geography),
  ('N', 10010, 'food', 'Bebek Madura Pak Slamet Margonda', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(106.8315, -6.3720), 4326)::geography),
  ('N', 10011, 'laundry', 'Smart Laundry Express Margonda', '{"service": "laundry"}', ST_SetSRID(ST_MakePoint(106.8318, -6.3695), 4326)::geography),
  ('N', 10012, 'convenience', 'Indomaret Point Margonda Raya', '{"shop": "convenience"}', ST_SetSRID(ST_MakePoint(106.8338, -6.3650), 4326)::geography),
  ('N', 10013, 'atm', 'ATM Bank Mandiri KCP Margonda', '{"amenity": "atm"}', ST_SetSRID(ST_MakePoint(106.8325, -6.3665), 4326)::geography),
  ('N', 10014, 'food', 'Nasi Uduk & Pecel Lele Kukel', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(106.8248, -6.3572), 4326)::geography),
  ('N', 10015, 'laundry', 'Cuci Kering Setrika Kukel', '{"service": "laundry"}', ST_SetSRID(ST_MakePoint(106.8245, -6.3580), 4326)::geography),
  ('N', 10016, 'convenience', 'Alfamart Kukusan Kelurahan', '{"shop": "convenience"}', ST_SetSRID(ST_MakePoint(106.8235, -6.3590), 4326)::geography),
  ('N', 10017, 'food', 'Mie Ayam & Bakso Kober Berkah', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(106.8348, -6.3642), 4326)::geography),
  ('N', 10018, 'laundry', 'Super Wash Kiloan Kober', '{"service": "laundry"}', ST_SetSRID(ST_MakePoint(106.8350, -6.3655), 4326)::geography),

  -- Unand Padang POIs
  ('N', 20001, 'food', 'Rumah Makan Ampera Simpang Kampus', '{"cuisine": "padang"}', ST_SetSRID(ST_MakePoint(100.4485, -0.9230), 4326)::geography),
  ('N', 20002, 'food', 'Nasi Goreng Om Pauh', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(100.4460, -0.9210), 4326)::geography),
  ('N', 20003, 'laundry', 'Sakato Kiloan Laundry Pasar Baru', '{"service": "laundry"}', ST_SetSRID(ST_MakePoint(100.4478, -0.9240), 4326)::geography),
  ('N', 20004, 'convenience', 'Alfamart Simpang Pasar Baru', '{"shop": "convenience"}', ST_SetSRID(ST_MakePoint(100.4490, -0.9250), 4326)::geography),
  ('N', 20005, 'pharmacy', 'Apotek Andalas Limau Manis', '{"healthcare": "pharmacy"}', ST_SetSRID(ST_MakePoint(100.4570, -0.9160), 4326)::geography),
  ('N', 20006, 'worship', 'Masjid Nurul Ilmi Unand', '{"religion": "muslim"}', ST_SetSRID(ST_MakePoint(100.4630, -0.9125), 4326)::geography),
  ('N', 20007, 'bus_stop', 'Halte Pangkalan Angkot Pasar Baru', '{"highway": "bus_stop"}', ST_SetSRID(ST_MakePoint(100.4475, -0.9225), 4326)::geography),
  ('N', 20008, 'atm', 'Galeri ATM BNI Gedung Pusat Unand', '{"amenity": "atm"}', ST_SetSRID(ST_MakePoint(100.4645, -0.9140), 4326)::geography),

  -- ITERA Lampung POIs
  ('N', 30001, 'food', 'Kantin Utama GKU ITERA', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(105.3178, -5.3608), 4326)::geography),
  ('N', 30002, 'food', 'Warung Makan Barokah Way Huwi', '{"cuisine": "indonesian"}', ST_SetSRID(ST_MakePoint(105.3075, -5.3540), 4326)::geography),
  ('N', 30003, 'laundry', 'Clean & Fresh Kiloan Way Huwi', '{"service": "laundry"}', ST_SetSRID(ST_MakePoint(105.3068, -5.3542), 4326)::geography),
  ('N', 30004, 'convenience', 'Indomaret Terusan Ryacudu ITERA', '{"shop": "convenience"}', ST_SetSRID(ST_MakePoint(105.3130, -5.3568), 4326)::geography),
  ('N', 30005, 'pharmacy', 'Apotek K-24 Terusan Ryacudu', '{"healthcare": "pharmacy"}', ST_SetSRID(ST_MakePoint(105.3110, -5.3575), 4326)::geography),
  ('N', 30006, 'worship', 'Masjid Raya Baitul Ilmi ITERA', '{"religion": "muslim"}', ST_SetSRID(ST_MakePoint(105.3185, -5.3592), 4326)::geography),
  ('N', 30007, 'bus_stop', 'Halte Trans Lampung Gerbang Utama ITERA', '{"highway": "bus_stop"}', ST_SetSRID(ST_MakePoint(105.3150, -5.3582), 4326)::geography),
  ('N', 30008, 'atm', 'Galeri ATM Mandiri & BNI Gedung Rektorat', '{"amenity": "atm"}', ST_SetSRID(ST_MakePoint(105.3172, -5.3602), 4326)::geography)
ON CONFLICT (osm_type, osm_id) DO NOTHING;

-- 3. Verified Pilot Kos Listings
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description) VALUES
  ('Kos Graha Kukusan Mandiri', 'ui-depok', 1650000, '["bathroom_inside", "wifi", "ac", "desk_chair", "closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8212, -6.3685), 4326)::geography, 'verified', 'Dekat Pintu Tol Kukusan dan Gerbang FT UI.'),
  ('Wisma Pondok Cina Asri', 'ui-depok', 1850000, '["bathroom_inside", "wifi", "ac", "water_heater", "access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8324, -6.3612), 4326)::geography, 'verified', '3 menit jalan kaki ke Stasiun Pondok Cina.'),
  ('Kos Green Kober Melati', 'ui-depok', 1250000, '["wifi", "desk_chair", "closet", "shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8341, -6.3648), 4326)::geography, 'verified', 'Kamar mandi luar bersih, dekat laundry kiloan.'),
  ('Paviliun Margonda Residence Studio', 'ui-depok', 2400000, '["bathroom_inside", "wifi", "ac", "water_heater", "access_24h", "parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8310, -6.3715), 4326)::geography, 'verified', 'Kamar tipe studio lengkap di Margonda.'),
  ('Kos Rindang Kukusan Kelurahan', 'ui-depok', 950000, '["wifi", "desk_chair", "closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8195, -6.3742), 4326)::geography, 'verified', 'Hemat biaya, suasana kekeluargaan.'),
  ('Kos Kampus Limau Manis Sejahtera', 'unand-limau-manis', 850000, '["bathroom_inside", "wifi", "desk_chair", "closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4578, -0.9168), 4326)::geography, 'verified', 'Dekat Gerbang Utama Unand Limau Manis.'),
  ('Wisma Pasar Baru Anggrek', 'unand-limau-manis', 750000, '["wifi", "desk_chair", "closet", "shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4492, -0.9245), 4326)::geography, 'verified', 'Dekat pusat kuliner Pasar Baru Unand.'),
  ('Kos Syariah Melati Limau Manis', 'unand-limau-manis', 1100000, '["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4632, -0.9115), 4326)::geography, 'verified', 'Kamar modern ber-AC di perumahan dosen.'),
  ('Kos Pondok Ryacudu Asri', 'itera-lampung', 1200000, '["bathroom_inside", "wifi", "ac", "desk_chair", "closet"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3115, -5.3562), 4326)::geography, 'verified', '5 menit ke Gerbang Utama ITERA.'),
  ('Wisma Putri Way Huwi Cantika', 'itera-lampung', 850000, '["bathroom_inside", "wifi", "desk_chair", "closet", "shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3065, -5.3538), 4326)::geography, 'verified', 'Khusus mahasiswi ITERA, penjagaan portal malam 24 jam.'),
  ('Kos Griya ITERA Mandiri', 'itera-lampung', 600000, '["wifi", "desk_chair", "closet", "shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3092, -5.3525), 4326)::geography, 'verified', 'Pilihan hemat mahasiswa baru, dekat gang tembus kampus.')
ON CONFLICT DO NOTHING;
