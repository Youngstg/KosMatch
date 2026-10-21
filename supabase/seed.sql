-- KosMatch v2: Seed Data for Campuses (including Pilot Campuses)

INSERT INTO public.campuses (id, name, short_name, city, geom, is_pilot) VALUES
  ('ui-depok', 'Universitas Indonesia (Depok)', 'UI', 'Depok', ST_SetSRID(ST_MakePoint(106.827, -6.362), 4326)::geography, true),
  ('unand-limau-manis', 'Universitas Andalas (Limau Manis)', 'Unand', 'Padang', ST_SetSRID(ST_MakePoint(100.4602, -0.9143), 4326)::geography, true),
  ('itb-ganesha', 'Institut Teknologi Bandung (Ganesha)', 'ITB', 'Bandung', ST_SetSRID(ST_MakePoint(107.6107, -6.8915), 4326)::geography, false),
  ('unpad-jatinangor', 'Universitas Padjadjaran (Jatinangor)', 'Unpad', 'Sumedang', ST_SetSRID(ST_MakePoint(107.7716, -6.927), 4326)::geography, false),
  ('ipb-dramaga', 'IPB University (Dramaga)', 'IPB', 'Bogor', ST_SetSRID(ST_MakePoint(106.725, -6.558), 4326)::geography, false),
  ('ugm-bulaksumur', 'Universitas Gadjah Mada', 'UGM', 'Sleman', ST_SetSRID(ST_MakePoint(110.3774, -7.7713), 4326)::geography, false),
  ('undip-tembalang', 'Universitas Diponegoro (Tembalang)', 'Undip', 'Semarang', ST_SetSRID(ST_MakePoint(110.438, -7.0504), 4326)::geography, false),
  ('uns-kentingan', 'Universitas Sebelas Maret (Kentingan)', 'UNS', 'Surakarta', ST_SetSRID(ST_MakePoint(110.8572, -7.5612), 4326)::geography, false),
  ('its-sukolilo', 'Institut Teknologi Sepuluh Nopember', 'ITS', 'Surabaya', ST_SetSRID(ST_MakePoint(112.7949, -7.2819), 4326)::geography, false),
  ('ub-malang', 'Universitas Brawijaya', 'UB', 'Malang', ST_SetSRID(ST_MakePoint(112.614, -7.9522), 4326)::geography, false),
  ('usu-medan', 'Universitas Sumatera Utara', 'USU', 'Medan', ST_SetSRID(ST_MakePoint(98.6563, -3.5597), 4326)::geography, false),
  ('unhas-tamalanrea', 'Universitas Hasanuddin (Tamalanrea)', 'Unhas', 'Makassar', ST_SetSRID(ST_MakePoint(119.489, -5.13), 4326)::geography, false)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  short_name = EXCLUDED.short_name,
  city = EXCLUDED.city,
  geom = EXCLUDED.geom,
  is_pilot = EXCLUDED.is_pilot;
