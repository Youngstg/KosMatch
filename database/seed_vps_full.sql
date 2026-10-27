-- =====================================================================
-- KosMatch v2: High-Volume Distilled & Scraped Dataset for VPS
-- Campuses: ITERA (120 Kos, 324 POIs), UI Depok (56 Kos, 472 POIs), UNAND (45 Kos, 103 POIs)
-- Total: 221 Kos Listings | 899 POIs
-- =====================================================================

BEGIN;

-- 1. PILOT CAMPUSES
INSERT INTO public.campuses (id, name, short_name, city, geom, is_pilot) VALUES
  ('ui-depok', 'Universitas Indonesia (Depok)', 'UI Depok', 'Depok', ST_SetSRID(ST_MakePoint(106.827, -6.362), 4326)::geography, true),
  ('unand-limau-manis', 'Universitas Andalas (Limau Manis)', 'Unand Padang', 'Padang', ST_SetSRID(ST_MakePoint(100.4602, -0.9143), 4326)::geography, true),
  ('itera-lampung', 'Institut Teknologi Sumatera (ITERA)', 'ITERA Lampung', 'Lampung Selatan', ST_SetSRID(ST_MakePoint(105.3148, -5.3584), 4326)::geography, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  city = EXCLUDED.city,
  geom = EXCLUDED.geom;

-- 2. POINTS OF INTEREST (899 POIs)
INSERT INTO public.pois (osm_type, osm_id, category, name, tags, geom) VALUES
  ('N', 4062837188, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2851902, -5.3616906), 4326)::geography),
  ('N', 4072549501, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.292667, -5.3337713), 4326)::geography),
  ('N', 4072549776, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2920595, -5.3391789), 4326)::geography),
  ('N', 4072549998, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2895462, -5.341717), 4326)::geography),
  ('N', 4072593351, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2918375, -5.350041), 4326)::geography),
  ('N', 4601798389, 'worship', 'Masjid baiturohim', '{"amenity":"place_of_worship","name":"Masjid baiturohim","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2994954, -5.366407), 4326)::geography),
  ('N', 5630021722, 'pharmacy', 'Imanuel', '{"amenity":"hospital","name":"Imanuel"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2850738, -5.3836445), 4326)::geography),
  ('N', 5630021723, 'supermarket', 'Transmart', '{"name":"Transmart","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2818736, -5.382963), 4326)::geography),
  ('N', 9479321617, 'worship', 'Masjid Al Barokah', '{"addr:postcode":"35131","addr:street":"Barokah Raya","amenity":"place_of_worship","name":"Masjid Al Barokah","name:en":"Al Barokah Mosque","opening_hours":"24/7"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2888938, -5.3845705), 4326)::geography),
  ('N', 9771393157, 'food', 'Teman Sebangku Coffee', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Teman Sebangku Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2926918, -5.3863851), 4326)::geography),
  ('N', 9771628427, 'food', 'Yanto Lamongan 3', '{"amenity":"restaurant","name":"Yanto Lamongan 3"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2814005, -5.3839821), 4326)::geography),
  ('N', 9771688496, 'food', 'RM Mbok Wito', '{"amenity":"restaurant","name":"RM Mbok Wito"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2814846, -5.3866239), 4326)::geography),
  ('N', 9771688737, 'food', 'ARCH Eatery', '{"amenity":"cafe","name":"ARCH Eatery"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2814353, -5.3889497), 4326)::geography),
  ('N', 9782036851, 'food', 'Rumah Makan Kusumo Ayu II', '{"amenity":"restaurant","name":"Rumah Makan Kusumo Ayu II"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2878314, -5.3879839), 4326)::geography),
  ('N', 9782038411, 'food', 'Rumah Makan Sarang Seafood', '{"amenity":"restaurant","cuisine":"seafood","name":"Rumah Makan Sarang Seafood"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2915851, -5.3872012), 4326)::geography),
  ('N', 9782054947, 'food', 'Warung Makan Ni Os', '{"amenity":"restaurant","name":"Warung Makan Ni Os"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2871554, -5.3850155), 4326)::geography),
  ('N', 9782060220, 'pharmacy', 'Apotek Permata', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Permata"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2921631, -5.3874802), 4326)::geography),
  ('N', 9782064714, 'food', 'Mama Eyi Kitchen', '{"amenity":"restaurant","name":"Mama Eyi Kitchen"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2898697, -5.3852459), 4326)::geography),
  ('N', 9782071214, 'food', 'Rukila Cafe', '{"amenity":"cafe","name":"Rukila Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2888433, -5.3892541), 4326)::geography),
  ('N', 9782072459, 'worship', 'Gereja Baptis Indonesia Karunia Tuhan', '{"amenity":"place_of_worship","name":"Gereja Baptis Indonesia Karunia Tuhan","religion":"christian"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2877561, -5.3865299), 4326)::geography),
  ('N', 9782072599, 'food', 'Kedai Kopi Lampung SR', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Kedai Kopi Lampung SR"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2900038, -5.3846544), 4326)::geography),
  ('N', 9782072788, 'food', 'Warung Sate Madura', '{"amenity":"restaurant","name":"Warung Sate Madura"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2878576, -5.3899697), 4326)::geography),
  ('N', 9782072796, 'atm', 'BCA', '{"amenity":"atm","brand":"BCA","brand:wikidata":"Q806626","name":"BCA","official_name":"Bank Central Asia","operator":"BCA","operator:wikidata":"Q806626"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2882412, -5.3886571), 4326)::geography),
  ('N', 9782073883, 'food', 'Rumah Makan Abah Roh', '{"amenity":"restaurant","name":"Rumah Makan Abah Roh"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2897999, -5.3861859), 4326)::geography),
  ('N', 9782076319, 'food', 'Kopi Ketje Sukarame', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Kopi Ketje Sukarame"}'::jsonb, ST_SetSRID(ST_MakePoint(105.289662, -5.3886205), 4326)::geography),
  ('N', 9782080247, 'food', 'Kopi De Cinta', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Kopi De Cinta"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2912079, -5.3845038), 4326)::geography),
  ('N', 9782082076, 'atm', 'Bank Mandiri', '{"amenity":"atm","brand":"Bank Mandiri","brand:wikidata":"Q806639","name":"Bank Mandiri","operator":"Bank Mandiri","operator:wikidata":"Q806639"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2880552, -5.386096), 4326)::geography),
  ('N', 9782082081, 'food', 'Mi Jablay Shelin', '{"amenity":"restaurant","name":"Mi Jablay Shelin"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2899529, -5.3855205), 4326)::geography),
  ('N', 9782085880, 'food', 'Food Coury Sukarame', '{"amenity":"food_court","name":"Food Coury Sukarame"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2903083, -5.3854698), 4326)::geography),
  ('N', 9782086071, 'food', 'Taratak Jaya', '{"amenity":"restaurant","name":"Taratak Jaya"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2862465, -5.3811468), 4326)::geography),
  ('N', 9782087911, 'food', 'Mie Ayam 22', '{"amenity":"restaurant","name":"Mie Ayam 22"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2909587, -5.380023), 4326)::geography),
  ('N', 9782102008, 'pharmacy', 'Apotek Falma', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Falma"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2890973, -5.3805557), 4326)::geography),
  ('N', 9782102310, 'food', 'Pecel Lele Mas Fahri', '{"amenity":"restaurant","name":"Pecel Lele Mas Fahri"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2901165, -5.3853616), 4326)::geography),
  ('N', 9782103062, 'pharmacy', 'Apotek Arvanda Medika', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Arvanda Medika"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2942074, -5.3777701), 4326)::geography),
  ('N', 9782112470, 'food', 'Nasi Liwet Kang Emil', '{"amenity":"restaurant","name":"Nasi Liwet Kang Emil"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2869944, -5.3803848), 4326)::geography),
  ('N', 9782112926, 'atm', 'BCA', '{"amenity":"atm","brand":"BCA","brand:wikidata":"Q806626","name":"BCA","official_name":"Bank Central Asia","operator":"BCA","operator:wikidata":"Q806626"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2876112, -5.3858187), 4326)::geography),
  ('N', 9782113278, 'worship', 'Masjid Al Anshar', '{"amenity":"place_of_worship","name":"Masjid Al Anshar","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2877562, -5.380768), 4326)::geography),
  ('N', 9782113764, 'food', 'Warung Tania', '{"amenity":"restaurant","name":"Warung Tania"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2860044, -5.3808187), 4326)::geography),
  ('N', 9782115977, 'food', 'Saung Opo Yoo', '{"amenity":"restaurant","name":"Saung Opo Yoo"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2894594, -5.3805023), 4326)::geography),
  ('N', 9782121427, 'food', 'What''s Up Cafe', '{"amenity":"cafe","name":"What''s Up Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2861594, -5.3813151), 4326)::geography),
  ('N', 9782123808, 'food', 'Warung Cemil', '{"amenity":"restaurant","name":"Warung Cemil"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2863632, -5.3810908), 4326)::geography),
  ('N', 9782125602, 'food', 'Sate Taican Bams', '{"amenity":"restaurant","name":"Sate Taican Bams"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2874142, -5.3806452), 4326)::geography),
  ('N', 9782128583, 'food', 'Nasi Kuning Cah Umbul', '{"amenity":"restaurant","name":"Nasi Kuning Cah Umbul"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2873055, -5.3803688), 4326)::geography),
  ('N', 9782134333, 'food', 'Kubo Coffee', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Kubo Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2886279, -5.3805944), 4326)::geography),
  ('N', 9782134520, 'food', 'RM Saudara Jaya', '{"amenity":"restaurant","name":"RM Saudara Jaya"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2874423, -5.3803314), 4326)::geography),
  ('N', 9782134521, 'food', 'Towns Coffee', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Towns Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2875577, -5.3806412), 4326)::geography),
  ('N', 9782134702, 'food', 'RM Gambreng Ryacudu', '{"amenity":"restaurant","name":"RM Gambreng Ryacudu"}'::jsonb, ST_SetSRID(ST_MakePoint(105.293429, -5.378362), 4326)::geography),
  ('N', 9782137999, 'food', 'Pak Mantep', '{"amenity":"restaurant","name":"Pak Mantep"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2900159, -5.3804476), 4326)::geography),
  ('N', 9782138254, 'food', 'Mie Aceh Asia', '{"amenity":"restaurant","name":"Mie Aceh Asia"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2913624, -5.3799348), 4326)::geography),
  ('N', 9782138628, 'food', 'Rya Chicken', '{"amenity":"fast_food","cuisine":"chicken","name":"Rya Chicken"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2895599, -5.3804649), 4326)::geography),
  ('N', 9782141614, 'pharmacy', 'Apotek Slara', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Slara"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2900132, -5.3800964), 4326)::geography),
  ('N', 9782142829, 'food', 'Mie Ayam Balung', '{"amenity":"restaurant","name":"Mie Ayam Balung"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2909319, -5.3803528), 4326)::geography),
  ('N', 9782144043, 'food', 'RM taliwang Lombok Ijo 2', '{"amenity":"restaurant","name":"RM taliwang Lombok Ijo 2"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2953799, -5.3756311), 4326)::geography),
  ('N', 9782144271, 'food', 'Pecel Lele Hj Ayu', '{"amenity":"restaurant","name":"Pecel Lele Hj Ayu"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2954711, -5.3755323), 4326)::geography),
  ('N', 9782149469, 'pharmacy', 'Apotek Mutiara', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Mutiara"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2919015, -5.3802299), 4326)::geography),
  ('N', 9782150850, 'food', 'Angkringan Syafaat', '{"amenity":"restaurant","name":"Angkringan Syafaat"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2924675, -5.3793954), 4326)::geography),
  ('N', 9782172993, 'pharmacy', 'Apotek Avia', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Avia"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2952927, -5.3746791), 4326)::geography),
  ('N', 9782173008, 'food', 'Town''s Kebab', '{"amenity":"fast_food","cuisine":"kebab","name":"Town''s Kebab"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2966821, -5.3736096), 4326)::geography),
  ('N', 9782184294, 'food', 'Lontong Kambing Cuputo 2', '{"amenity":"restaurant","name":"Lontong Kambing Cuputo 2"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2962757, -5.3742171), 4326)::geography),
  ('N', 9782236940, 'worship', 'Masjid Al Hikmah', '{"amenity":"place_of_worship","name":"Masjid Al Hikmah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2842906, -5.3760996), 4326)::geography),
  ('N', 9782242980, 'food', 'Warkop Nadila', '{"amenity":"cafe","name":"Warkop Nadila"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2824148, -5.330137), 4326)::geography),
  ('N', 9782242981, 'food', 'Es Oyen Bu Mini', '{"amenity":"fast_food","cuisine":"juice","name":"Es Oyen Bu Mini"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2823558, -5.3303159), 4326)::geography),
  ('N', 9782242991, 'worship', 'Masjid Darusalam', '{"amenity":"place_of_worship","name":"Masjid Darusalam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2813741, -5.3315738), 4326)::geography),
  ('N', 9782258955, 'food', 'Warung Kami', '{"amenity":"restaurant","name":"Warung Kami"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2825865, -5.3305256), 4326)::geography),
  ('N', 9782267204, 'food', 'MixMax Kitchen', '{"amenity":"restaurant","name":"MixMax Kitchen"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2827005, -5.3308421), 4326)::geography),
  ('N', 9794652187, 'food', 'Rumah Makan Padang', '{"amenity":"restaurant","name":"Rumah Makan Padang"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2822193, -5.3603952), 4326)::geography),
  ('N', 9794652195, 'food', 'Ayam Geprek Bunda', '{"amenity":"restaurant","name":"Ayam Geprek Bunda"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2841111, -5.3593918), 4326)::geography),
  ('N', 9794662278, 'atm', 'BRI', '{"amenity":"atm","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia","operator":"BRI","operator:wikidata":"Q623042"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2809053, -5.3613953), 4326)::geography),
  ('N', 9794669606, 'food', 'Olbiyami', '{"amenity":"restaurant","name":"Olbiyami"}'::jsonb, ST_SetSRID(ST_MakePoint(105.282058, -5.3594505), 4326)::geography),
  ('N', 9794669616, 'food', 'Omah Joglo Way Kandis', '{"amenity":"restaurant","name":"Omah Joglo Way Kandis"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2862943, -5.3574414), 4326)::geography),
  ('N', 9794684869, 'food', 'Nasi Goreng Mas Heri', '{"amenity":"restaurant","name":"Nasi Goreng Mas Heri"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2881717, -5.3559892), 4326)::geography),
  ('N', 9794698920, 'food', 'Nasi Uduk Mbak Nur', '{"amenity":"restaurant","name":"Nasi Uduk Mbak Nur"}'::jsonb, ST_SetSRID(ST_MakePoint(105.285288, -5.3582459), 4326)::geography),
  ('N', 9794698960, 'food', 'Jajanan Yuyun', '{"amenity":"cafe","name":"Jajanan Yuyun"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2867335, -5.3576721), 4326)::geography),
  ('N', 9794712650, 'atm', 'BRI', '{"amenity":"atm","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia","operator":"BRI","operator:wikidata":"Q623042"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2824565, -5.3606868), 4326)::geography),
  ('N', 9794712652, 'pharmacy', 'Apotek Arafarma', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Arafarma"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2841111, -5.359032), 4326)::geography),
  ('N', 9794718568, 'atm', 'BRI', '{"amenity":"bank","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia"}'::jsonb, ST_SetSRID(ST_MakePoint(105.28607, -5.3576794), 4326)::geography),
  ('N', 9794718909, 'food', 'Kedai OAS', '{"amenity":"cafe","name":"Kedai OAS"}'::jsonb, ST_SetSRID(ST_MakePoint(105.288231, -5.3556424), 4326)::geography),
  ('N', 9794718910, 'food', 'Pecel Lele Zaqila', '{"amenity":"restaurant","name":"Pecel Lele Zaqila"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2903446, -5.3532629), 4326)::geography),
  ('N', 9794726145, 'pharmacy', 'Apotek Ogan 3', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Ogan 3"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2896533, -5.3545472), 4326)::geography),
  ('N', 9794726474, 'food', 'Street Food', '{"amenity":"restaurant","name":"Street Food"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2828864, -5.3602882), 4326)::geography),
  ('N', 9794727198, 'worship', 'Masjid Abdul Rahman Ibnu Auf', '{"amenity":"place_of_worship","name":"Masjid Abdul Rahman Ibnu Auf","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2870912, -5.3574433), 4326)::geography),
  ('N', 9794727829, 'food', 'Sate Jogja Tresno', '{"amenity":"restaurant","name":"Sate Jogja Tresno"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2834977, -5.3594158), 4326)::geography),
  ('N', 9794728122, 'food', 'Babana Tagedoom', '{"amenity":"cafe","name":"Babana Tagedoom"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2858847, -5.3579784), 4326)::geography),
  ('N', 9794730271, 'pharmacy', 'Klinik Husada Way Kandis', '{"amenity":"clinic","healthcare":"clinic","name":"Klinik Husada Way Kandis"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2861294, -5.3582625), 4326)::geography),
  ('N', 9794733653, 'food', 'Putra Mandiri GTC', '{"amenity":"restaurant","name":"Putra Mandiri GTC"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2949315, -5.346932), 4326)::geography),
  ('N', 9794733654, 'food', 'Depot Jamur', '{"amenity":"restaurant","name":"Depot Jamur"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2953707, -5.3465205), 4326)::geography),
  ('N', 9794736219, 'food', 'Kedai Baby Boss', '{"amenity":"restaurant","name":"Kedai Baby Boss"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2869151, -5.3568639), 4326)::geography),
  ('N', 9794737051, 'food', 'MI Tektek Berkah', '{"amenity":"restaurant","name":"MI Tektek Berkah"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2853454, -5.3579618), 4326)::geography),
  ('N', 9794737075, 'food', 'Floop Eatery', '{"amenity":"restaurant","motorcycle":"yes","name":"Floop Eatery"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2941272, -5.3482033), 4326)::geography),
  ('N', 9794737140, 'food', 'Master Fried Chicken', '{"amenity":"fast_food","cuisine":"chicken","name":"Master Fried Chicken"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2883403, -5.3555279), 4326)::geography),
  ('N', 9794737141, 'food', 'Rumah Makan Uda Heri', '{"amenity":"restaurant","name":"Rumah Makan Uda Heri"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2908561, -5.3529049), 4326)::geography),
  ('N', 9794737275, 'food', 'Bakso Solo Kandis', '{"amenity":"restaurant","name":"Bakso Solo Kandis"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2888352, -5.3554265), 4326)::geography),
  ('N', 9794754411, 'food', 'Martabak Bangka 333', '{"amenity":"restaurant","name":"Martabak Bangka 333"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2949964, -5.3436567), 4326)::geography),
  ('N', 9794758674, 'food', 'Mojito Moctail', '{"amenity":"cafe","name":"Mojito Moctail"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2861924, -5.3576278), 4326)::geography),
  ('N', 9794758683, 'pharmacy', 'Apotek Pasar Way Kandis', '{"amenity":"pharmacy","dispensing":"yes","healthcare":"pharmacy","name":"Apotek Pasar Way Kandis"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2920774, -5.351414), 4326)::geography),
  ('N', 9794758954, 'food', 'Siomay Ocan', '{"amenity":"restaurant","name":"Siomay Ocan"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2930727, -5.3500375), 4326)::geography),
  ('N', 9794759082, 'food', 'Pecel lele Jenaka', '{"amenity":"restaurant","name":"Pecel lele Jenaka"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2959323, -5.3460813), 4326)::geography),
  ('N', 9794759224, 'worship', 'Masjid Nurul Iman', '{"amenity":"place_of_worship","name":"Masjid Nurul Iman","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2860534, -5.3567753), 4326)::geography),
  ('N', 9794759229, 'food', 'Bakso Cipto Roso 2', '{"amenity":"restaurant","name":"Bakso Cipto Roso 2"}'::jsonb, ST_SetSRID(ST_MakePoint(105.293397, -5.3491296), 4326)::geography),
  ('N', 9794760336, 'food', 'Seblak Jebret', '{"amenity":"restaurant","name":"Seblak Jebret"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2875619, -5.3562882), 4326)::geography),
  ('N', 9794760534, 'food', 'Lapo Tuak dan Daging', '{"amenity":"restaurant","name":"Lapo Tuak dan Daging"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2928132, -5.3505209), 4326)::geography),
  ('N', 9794760846, 'atm', 'BNI', '{"amenity":"atm","brand":"BNI","brand:wikidata":"Q2882611","name":"BNI","official_name":"Bank Negara Indonesia","operator":"BNI","operator:wikidata":"Q2882611"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2950205, -5.3419978), 4326)::geography),
  ('N', 9794761360, 'food', 'RM Mak Datuk', '{"amenity":"restaurant","name":"RM Mak Datuk"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2962807, -5.3458267), 4326)::geography),
  ('N', 9794761609, 'food', 'RM Tiga Ameh', '{"amenity":"restaurant","name":"RM Tiga Ameh"}'::jsonb, ST_SetSRID(ST_MakePoint(105.293043, -5.3496574), 4326)::geography),
  ('N', 9794761624, 'food', 'GBK Street Food', '{"amenity":"restaurant","name":"GBK Street Food"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2888064, -5.3550417), 4326)::geography),
  ('N', 9794762676, 'food', 'Bakso Mie Ayam Ali', '{"amenity":"restaurant","name":"Bakso Mie Ayam Ali"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2915622, -5.3520026), 4326)::geography),
  ('N', 9794762759, 'food', 'Pempek Raffa', '{"amenity":"restaurant","name":"Pempek Raffa"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2950687, -5.3472604), 4326)::geography),
  ('N', 9794762784, 'atm', 'BCA', '{"amenity":"atm","brand":"BCA","brand:wikidata":"Q806626","name":"BCA","official_name":"Bank Central Asia","operator":"BCA","operator:wikidata":"Q806626"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2966273, -5.3456182), 4326)::geography),
  ('N', 9794766044, 'pharmacy', 'Pustu Way Kandis', '{"amenity":"clinic","healthcare":"clinic","name":"Pustu Way Kandis","operator":"Ministry of Health","operator:en":"Ministry of Health","operator:id":"Kementerian Kesehatan","operator:wikidata":"Q12490745"}'::jsonb, ST_SetSRID(ST_MakePoint(105.293612, -5.3488492), 4326)::geography),
  ('N', 9794767058, 'food', 'Nasi Liwet Ayam Polos', '{"amenity":"restaurant","name":"Nasi Liwet Ayam Polos"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2948277, -5.3470981), 4326)::geography),
  ('N', 9794767339, 'pharmacy', 'Klinik Pratama', '{"amenity":"clinic","healthcare":"clinic","name":"Klinik Pratama"}'::jsonb, ST_SetSRID(ST_MakePoint(105.290593, -5.3540342), 4326)::geography),
  ('N', 9794768432, 'atm', 'BRI', '{"amenity":"bank","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2907579, -5.3526577), 4326)::geography),
  ('N', 9794772317, 'atm', 'BRI', '{"amenity":"atm","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia","operator":"BRI","operator:wikidata":"Q623042"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2919218, -5.3511668), 4326)::geography),
  ('N', 9794772839, 'food', 'Sate Luwes', '{"amenity":"restaurant","name":"Sate Luwes"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2937454, -5.3400917), 4326)::geography),
  ('N', 9794774597, 'food', 'Minimo Cafe', '{"amenity":"cafe","name":"Minimo Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2956561, -5.3446144), 4326)::geography),
  ('N', 9794774955, 'food', 'Bakso Son Haji Jati Mulyo', '{"amenity":"restaurant","name":"Bakso Son Haji Jati Mulyo"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2955246, -5.3437803), 4326)::geography),
  ('N', 9794774957, 'food', 'Ikan Bakar Khas Lampung', '{"amenity":"restaurant","name":"Ikan Bakar Khas Lampung"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2942384, -5.3411453), 4326)::geography),
  ('N', 9794783864, 'worship', 'Masjid Al Maarif', '{"amenity":"place_of_worship","name":"Masjid Al Maarif","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2957377, -5.3451107), 4326)::geography),
  ('N', 9794785818, 'food', 'Ayam Bakar Bandung', '{"amenity":"restaurant","name":"Ayam Bakar Bandung"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2953096, -5.3435607), 4326)::geography),
  ('N', 9794786832, 'food', 'Bakso Ali Jati Mulyo', '{"amenity":"restaurant","name":"Bakso Ali Jati Mulyo"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2963975, -5.3452528), 4326)::geography),
  ('N', 9794788297, 'food', 'Bakso Bakar Kang Asep', '{"amenity":"restaurant","name":"Bakso Bakar Kang Asep"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2940846, -5.3410604), 4326)::geography),
  ('N', 9794794691, 'food', 'Martabak Cahaya', '{"amenity":"restaurant","name":"Martabak Cahaya"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2949, -5.3435128), 4326)::geography),
  ('N', 9794797881, 'worship', 'Mushola Darul Amanah', '{"amenity":"place_of_worship","name":"Mushola Darul Amanah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2952299, -5.3428688), 4326)::geography),
  ('N', 9794797909, 'food', 'RM Minang Mimbau', '{"amenity":"restaurant","name":"RM Minang Mimbau"}'::jsonb, ST_SetSRID(ST_MakePoint(105.294003, -5.3415162), 4326)::geography),
  ('N', 9794810739, 'atm', 'BRI', '{"amenity":"atm","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia","operator":"BRI","operator:wikidata":"Q623042"}'::jsonb, ST_SetSRID(ST_MakePoint(105.293877, -5.3411656), 4326)::geography),
  ('N', 9794815422, 'food', 'Rumah Makan Putra Jaya', '{"amenity":"restaurant","name":"Rumah Makan Putra Jaya"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2933321, -5.3388997), 4326)::geography),
  ('N', 9794815795, 'food', 'Martabak Cempaka', '{"amenity":"restaurant","name":"Martabak Cempaka"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2933154, -5.3348069), 4326)::geography),
  ('N', 9794817073, 'atm', 'BRI', '{"amenity":"atm","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia","operator":"BRI","operator:wikidata":"Q623042"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2935768, -5.3395234), 4326)::geography),
  ('N', 9794825323, 'food', 'Nasi Goreng Wingsiwuluh', '{"amenity":"restaurant","name":"Nasi Goreng Wingsiwuluh"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2934507, -5.339874), 4326)::geography),
  ('N', 9794825792, 'atm', 'Bank BMT Hasannah', '{"amenity":"bank","name":"Bank BMT Hasannah"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2928206, -5.3369142), 4326)::geography),
  ('N', 9794826291, 'food', 'Tekwan Model', '{"amenity":"restaurant","name":"Tekwan Model"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2907478, -5.3300916), 4326)::geography),
  ('N', 9794832263, 'atm', 'BRI', '{"amenity":"atm","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia","operator":"BRI","operator:wikidata":"Q623042"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2929429, -5.3386709), 4326)::geography),
  ('N', 9794833282, 'food', 'Pecel Lele Mas Sapto', '{"amenity":"restaurant","name":"Pecel Lele Mas Sapto"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2938992, -5.3384033), 4326)::geography),
  ('N', 9794835358, 'food', 'Bakso Ali', '{"amenity":"restaurant","name":"Bakso Ali"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2930319, -5.3343105), 4326)::geography),
  ('N', 9794836999, 'food', 'Dapur Teh Opi', '{"amenity":"restaurant","name":"Dapur Teh Opi"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2935508, -5.3365949), 4326)::geography),
  ('N', 9794837123, 'food', 'RM Pagi Sore', '{"amenity":"restaurant","name":"RM Pagi Sore"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2927335, -5.3371817), 4326)::geography),
  ('N', 9794837204, 'food', 'Yay Drinks', '{"amenity":"cafe","name":"Yay Drinks"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2922453, -5.3307909), 4326)::geography),
  ('N', 9794837991, 'food', 'RM Ayam Bakar Ojo Gelo', '{"amenity":"restaurant","name":"RM Ayam Bakar Ojo Gelo"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2929503, -5.3346168), 4326)::geography),
  ('N', 9794839026, 'food', 'Kedai Mimih Yudha', '{"amenity":"restaurant","name":"Kedai Mimih Yudha"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2932654, -5.3354656), 4326)::geography),
  ('N', 9794842105, 'food', 'Wr Serbu Bella', '{"amenity":"restaurant","name":"Wr Serbu Bella"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2930134, -5.3370193), 4326)::geography),
  ('N', 9794850890, 'food', 'Kenz Takoyaki Sosis', '{"amenity":"cafe","name":"Kenz Takoyaki Sosis"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2930054, -5.3340634), 4326)::geography),
  ('N', 9794853363, 'worship', 'Masjid Al Ikhlas', '{"amenity":"place_of_worship","name":"Masjid Al Ikhlas","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2926279, -5.3337754), 4326)::geography),
  ('N', 9794868233, 'food', 'Ayam Geprek Selingkuh', '{"amenity":"restaurant","name":"Ayam Geprek Selingkuh"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2929879, -5.3333744), 4326)::geography),
  ('N', 10160497767, 'worship', 'Masjid Al-Walidain', '{"addr:city":"Bandar Lampung","addr:street":"Pangeran Senopati Raya","amenity":"place_of_worship","name":"Masjid Al-Walidain","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3068502, -5.3613238), 4326)::geography),
  ('N', 11738149017, 'food', 'Zoey Kitchen', '{"addr:city":"bandarlampung","addr:district":"bandarlampung","addr:postcode":"35139","addr:province":"lampung","addr:street":"melati IV","addr:subdistrict":"waykandis","addr:unit":"3","amenity":"restaurant","cuisine":"indonesian","name":"Zoey Kitchen","opening_hours":"Mo-Su 10:00-19:00","phone":"+62 822 8081 2153"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2861468, -5.3466811), 4326)::geography),
  ('N', 13261326993, 'worship', 'masjid at tanwir', '{"amenity":"place_of_worship","name":"masjid at tanwir","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3187448, -5.356796), 4326)::geography),
  ('W', 405026523, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2814604, -5.3359198), 4326)::geography),
  ('W', 522762868, 'worship', 'Masjid Miftahul Huda', '{"amenity":"place_of_worship","building":"yes","denomination":"sunni","name":"Masjid Miftahul Huda","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2961435, -5.3638666), 4326)::geography),
  ('W', 523201691, 'worship', 'Masjid Abdurrahman Ibnu Auf', '{"amenity":"place_of_worship","building":"mosque","name":"Masjid Abdurrahman Ibnu Auf","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2870822, -5.3574736), 4326)::geography),
  ('W', 868684994, 'pharmacy', 'Poliklinik ITERA', '{"amenity":"clinic","building":"yes","healthcare":"clinic","healthcare:speciality":"general","name":"Poliklinik ITERA"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3158735, -5.357734), 4326)::geography),
  ('W', 868684998, 'worship', 'Mushola', '{"amenity":"place_of_worship","building":"yes","name":"Mushola","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.316088, -5.3577109), 4326)::geography),
  ('W', 868684999, 'food', 'Bukit Kiara Lestari', '{"amenity":"restaurant","building":"yes","name":"Bukit Kiara Lestari"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3163251, -5.3577134), 4326)::geography),
  ('W', 868685000, 'food', 'Galeri ITERA', '{"amenity":"cafe","building":"university","building:levels":"1","name":"Galeri ITERA"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3154124, -5.3579983), 4326)::geography),
  ('W', 1023233218, 'worship', 'Masjid Al Hikmah GMZ', '{"amenity":"place_of_worship","building":"yes","denomination":"sunni","name":"Masjid Al Hikmah GMZ","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2930731, -5.3668964), 4326)::geography),
  ('W', 1024455808, 'worship', 'Masjid Baitul Ilmi ITERA', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Baitul Ilmi ITERA","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3126078, -5.3590521), 4326)::geography),
  ('W', 1063830802, 'food', 'Waroenk Tropical', '{"amenity":"cafe","building":"yes","name":"Waroenk Tropical"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2937821, -5.3899247), 4326)::geography),
  ('W', 1063831071, 'food', 'Nuju Coffee', '{"amenity":"cafe","building":"yes","cuisine":"coffee_shop","name":"Nuju Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2929259, -5.3883552), 4326)::geography),
  ('W', 1063831256, 'worship', 'Masjid Al Huda', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Al Huda","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2918915, -5.3866011), 4326)::geography),
  ('W', 1063833538, 'food', 'Inspirasi Coffee', '{"amenity":"cafe","building":"yes","cuisine":"coffee_shop","name":"Inspirasi Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2966848, -5.3831067), 4326)::geography),
  ('W', 1063878558, 'food', 'Yellow Kichen', '{"amenity":"restaurant","building":"yes","name":"Yellow Kichen"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2816574, -5.3897014), 4326)::geography),
  ('W', 1063878594, 'food', 'Bakso Basuki', '{"amenity":"restaurant","building":"yes","name":"Bakso Basuki"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2816933, -5.3894185), 4326)::geography),
  ('W', 1063878757, 'food', 'Bakso TM 2', '{"amenity":"restaurant","building":"yes","name":"Bakso TM 2"}'::jsonb, ST_SetSRID(ST_MakePoint(105.281439, -5.3893384), 4326)::geography),
  ('W', 1063879682, 'food', 'Ketoprak Amigos', '{"amenity":"restaurant","building":"yes","name":"Ketoprak Amigos"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2818049, -5.3890192), 4326)::geography),
  ('W', 1063879952, 'food', 'Warkok BTN3', '{"amenity":"cafe","building":"yes","cuisine":"coffee_shop","name":"Warkok BTN3"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2819117, -5.3887766), 4326)::geography),
  ('W', 1063879978, 'food', 'Bun Coffee Way Halim', '{"amenity":"cafe","building":"yes","cuisine":"coffee_shop","name":"Bun Coffee Way Halim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2818372, -5.3884566), 4326)::geography),
  ('W', 1063888827, 'food', 'Trailmen Cafe', '{"amenity":"cafe","building":"yes","name":"Trailmen Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2815447, -5.3882291), 4326)::geography),
  ('W', 1063895645, 'food', 'RM Ibu Gendut', '{"amenity":"restaurant","building":"yes","name":"RM Ibu Gendut"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2818163, -5.3879635), 4326)::geography),
  ('W', 1063895874, 'pharmacy', 'Klinik Kimia Farma', '{"amenity":"clinic","building":"yes","healthcare":"clinic","name":"Klinik Kimia Farma"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2819004, -5.3874413), 4326)::geography),
  ('W', 1063896310, 'food', 'Kedai Kopi Kini', '{"amenity":"cafe","building":"yes","cuisine":"coffee_shop","name":"Kedai Kopi Kini"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2819087, -5.3868302), 4326)::geography),
  ('W', 1063896968, 'food', 'Mie Aceh', '{"amenity":"restaurant","building":"yes","name":"Mie Aceh"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2814777, -5.3824803), 4326)::geography),
  ('W', 1063897255, 'food', 'Oops Pujasera', '{"amenity":"restaurant","building":"yes","name":"Oops Pujasera"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2812283, -5.383114), 4326)::geography),
  ('W', 1110202582, 'pharmacy', 'RS Imanuel', '{"addr:city":"Bandarlampung","addr:postcode":"35133","addr:street":"Bypass Sukarno Hatta","amenity":"hospital","name":"RS Imanuel"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2878587, -5.3857061), 4326)::geography),
  ('W', 1340905500, 'worship', 'Masjid At Tanwir', '{"amenity":"place_of_worship","building":"yes","name":"Masjid At Tanwir","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3187281, -5.3568283), 4326)::geography),
  ('W', 1445398250, 'worship', 'masjid biru', '{"amenity":"place_of_worship","building":"yes","name":"masjid biru","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3049288, -5.3588563), 4326)::geography),
  ('N', 1323706980, 'food', 'Marugame Udon', '{"alt_name":"Marugame Seimen","amenity":"restaurant","brand":"Marugame Seimen","brand:wikidata":"Q10877253","cuisine":"noodle","name":"Marugame Udon","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8333305, -6.3728137), 4326)::geography),
  ('N', 1352175440, 'atm', 'HSBC', '{"amenity":"bank","atm":"yes","brand":"HSBC","brand:wikidata":"Q190464","name":"HSBC"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8331357, -6.3709118), 4326)::geography),
  ('N', 1538010467, 'food', 'Takarajima', '{"addr:street":"Jalan Margonda Raya","amenity":"restaurant","cuisine":"japanese","name":"Takarajima"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332271, -6.3609294), 4326)::geography),
  ('N', 1538010710, 'convenience', 'Alfa Midi', '{"name":"Alfa Midi","shop":"convenience","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8342198, -6.3662823), 4326)::geography),
  ('N', 1538010827, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8334152, -6.3616013), 4326)::geography),
  ('N', 1840967972, 'food', 'Bebek Tiktok', '{"addr:street":"Jalan Margonda Raya","amenity":"restaurant","name":"Bebek Tiktok"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8337431, -6.3612849), 4326)::geography),
  ('N', 1840967973, 'food', 'Es Pocong', '{"addr:street":"Jalan Margonda Raya","amenity":"restaurant","name":"Es Pocong"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833277, -6.3611638), 4326)::geography),
  ('N', 1840967975, 'convenience', 'Indomaret', '{"addr:street":"Jalan Margonda Raya","air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8336688, -6.3608311), 4326)::geography),
  ('N', 1840967976, 'food', 'Mie Ayam Fajar', '{"addr:street":"Jalan Margonda Raya","amenity":"restaurant","name":"Mie Ayam Fajar"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8333779, -6.3618419), 4326)::geography),
  ('N', 1840967977, 'food', 'Pecel Lele Lela', '{"amenity":"restaurant","name":"Pecel Lele Lela"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8335068, -6.3634229), 4326)::geography),
  ('N', 1840967978, 'food', 'Pizza Hut Delivery', '{"amenity":"fast_food","branch":"(PHD)","brand":"Pizza Hut","brand:wikidata":"Q191615","cuisine":"pizza","delivery":"yes","name":"Pizza Hut Delivery","takeaway":"only"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8340892, -6.3638049), 4326)::geography),
  ('N', 1840967979, 'food', 'Warung Sate Gajah', '{"amenity":"restaurant","name":"Warung Sate Gajah"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8334878, -6.3663551), 4326)::geography),
  ('N', 1846516832, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8495106, -6.3697064), 4326)::geography),
  ('N', 1846516987, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8463122, -6.3723785), 4326)::geography),
  ('N', 1846989439, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8342782, -6.3680892), 4326)::geography),
  ('N', 1846989440, 'pharmacy', 'Apotek', '{"amenity":"pharmacy","dispensing":"no","healthcare":"pharmacy","name":"Apotek"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8345754, -6.3682794), 4326)::geography),
  ('N', 1846989442, 'food', 'DIM SUM', '{"amenity":"restaurant","cuisine":"chinese","name":"DIM SUM"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338964, -6.3680324), 4326)::geography),
  ('N', 1846989451, 'food', 'Kuliner Sore Gang Pinang', '{"amenity":"food_court","name":"Kuliner Sore Gang Pinang"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8352577, -6.3672807), 4326)::geography),
  ('N', 1846989483, 'worship', 'Mushola Al Ikhlas', '{"amenity":"place_of_worship","building":"mosque","name":"Mushola Al Ikhlas","place_of_worship":"musalla","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8352962, -6.3677259), 4326)::geography),
  ('N', 1846989487, 'food', 'Rumah Makan Bude', '{"amenity":"restaurant","cuisine":"regional","name":"Rumah Makan Bude","operator":"Bude"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8342609, -6.3679445), 4326)::geography),
  ('N', 1846989494, 'food', 'Rumah Makan Padang Sederhana', '{"amenity":"restaurant","cuisine":"regional","name":"Rumah Makan Padang Sederhana"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8351249, -6.3674045), 4326)::geography),
  ('N', 2063493247, 'bus_stop', 'Asrama UI', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Asrama UI","public_transport":"platform","shelter":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8297711, -6.3483498), 4326)::geography),
  ('N', 2063493252, 'bus_stop', 'Balairung', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Balairung","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8315993, -6.3681218), 4326)::geography),
  ('N', 2063493256, 'bus_stop', 'Fakultas Ekonomi dan Bisnis', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Ekonomi dan Bisnis","public_transport":"platform","shelter":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8258186, -6.3594526), 4326)::geography),
  ('N', 2063493261, 'bus_stop', 'Fakultas Ekonomi dan Bisnis', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Ekonomi dan Bisnis","public_transport":"platform","shelter":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8256942, -6.3596138), 4326)::geography),
  ('N', 2063493265, 'bus_stop', 'Fakultas Hukum', '{"bench":"yes","bin":"yes","bus":"yes","highway":"bus_stop","lit":"yes","name":"Fakultas Hukum","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8322269, -6.3648982), 4326)::geography),
  ('N', 2063493269, 'bus_stop', 'Fakultas Ilmu Pengetahuan Budaya', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Ilmu Pengetahuan Budaya","public_transport":"platform","shelter":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8294626, -6.361182), 4326)::geography),
  ('N', 2063493272, 'bus_stop', 'Fakultas Kesehatan Masyarakat', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Kesehatan Masyarakat","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8293622, -6.3717018), 4326)::geography),
  ('N', 2063493277, 'bus_stop', 'Fakultas Ilmu Sosial dan Ilmu Politik', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Ilmu Sosial dan Ilmu Politik","public_transport":"platform","shelter":"yes","wheelchair":"limited"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8301695, -6.3618297), 4326)::geography),
  ('N', 2063493281, 'bus_stop', 'Fakultas Kesehatan Masyarakat', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Kesehatan Masyarakat","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8291036, -6.3714557), 4326)::geography),
  ('N', 2063493284, 'bus_stop', 'Fakultas Matematika dan IPA', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Matematika dan IPA","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8259729, -6.3696727), 4326)::geography),
  ('N', 2063493288, 'bus_stop', 'Fakultas Matematika dan IPA', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Matematika dan IPA","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8257566, -6.3698443), 4326)::geography),
  ('N', 2063493292, 'bus_stop', 'Fakultas Psikologi', '{"bench":"yes","bus":"yes","check_date:shelter":"2022-04-26","highway":"bus_stop","name":"Fakultas Psikologi","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8312015, -6.3629161), 4326)::geography),
  ('N', 2063493295, 'bus_stop', 'Fakultas Teknik', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Teknik","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8233114, -6.361283), 4326)::geography),
  ('N', 2063493299, 'bus_stop', 'Universitas Indonesia', '{"bench":"yes","bus":"yes","departures_board":"no","highway":"bus_stop","name":"Universitas Indonesia","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform","route_ref":"4B","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8318182, -6.3535289), 4326)::geography),
  ('N', 2063493308, 'bus_stop', 'Masjid UI', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Masjid UI","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8320129, -6.3655978), 4326)::geography),
  ('N', 2063493312, 'bus_stop', 'Pusgiwa', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Pusgiwa","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8240206, -6.3667604), 4326)::geography),
  ('N', 2063493316, 'bus_stop', 'Pondok Cina', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Pondok Cina","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8317943, -6.3682275), 4326)::geography),
  ('N', 2063493320, 'bus_stop', 'Program Vokasi', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Program Vokasi","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8218006, -6.3659523), 4326)::geography),
  ('N', 2063493325, 'bus_stop', 'Program Vokasi', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Program Vokasi","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8216544, -6.3661131), 4326)::geography),
  ('N', 2063493332, 'bus_stop', 'Stasiun KRL Universitas Indonesia', '{"bench":"yes","bin":"yes","bus":"yes","check_date:shelter":"2022-04-26","highway":"bus_stop","lit":"yes","name":"Stasiun KRL Universitas Indonesia","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8317204, -6.3610642), 4326)::geography),
  ('N', 2141270983, 'food', 'Sinar Garut Bogasari 3', '{"amenity":"food_court","name":"Sinar Garut Bogasari 3","outdoor_seating":"yes","smoking":"yes","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833206, -6.364559), 4326)::geography),
  ('N', 2687994892, 'atm', 'ATM BNI FMIPA', '{"amenity":"atm","name":"ATM BNI FMIPA","operator":"BNI"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8262092, -6.3698821), 4326)::geography),
  ('N', 2995287614, 'bus_stop', 'SOR', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"SOR","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8244835, -6.3670147), 4326)::geography),
  ('N', 3004047175, 'atm', 'BNI', '{"amenity":"atm","brand":"BNI","brand:wikidata":"Q2882611","currency:IDR":"yes","drive_through":"no","official_name":"Bank Negara Indonesia","operator":"BNI","operator:wikidata":"Q2882611"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8308926, -6.368409), 4326)::geography),
  ('N', 3009762892, 'worship', 'Masjid Ukhuwah Islamiyah', '{"addr:city":"Kota Depok","addr:postcode":"16424","addr:street":"Jalan Lingkar Kampus Raya","amenity":"place_of_worship","building:levels":"2","name":"Masjid Ukhuwah Islamiyah","religion":"muslim","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8311115, -6.3658093), 4326)::geography),
  ('N', 3009804634, 'food', 'Kantin Prima', '{"amenity":"restaurant","name":"Kantin Prima"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8281579, -6.3665657), 4326)::geography),
  ('N', 3048454238, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8425685, -6.3562234), 4326)::geography),
  ('N', 3171797951, 'food', 'Takigawa Resto', '{"amenity":"restaurant","name":"Takigawa Resto"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8355764, -6.3737018), 4326)::geography),
  ('N', 3296490974, 'worship', 'Masjid Darul Istiqomah', '{"amenity":"place_of_worship","name":"Masjid Darul Istiqomah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.806432, -6.3699651), 4326)::geography),
  ('N', 3502666028, 'worship', 'Masjid Asy-Syuhada', '{"amenity":"place_of_worship","denomination":"sunni","name":"Masjid Asy-Syuhada","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8487012, -6.356499), 4326)::geography),
  ('N', 3506697607, 'worship', 'Masjid Al Mu''awannah', '{"amenity":"place_of_worship","name":"Masjid Al Mu''awannah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8467232, -6.3737167), 4326)::geography),
  ('N', 3645488439, 'convenience', 'Alfamidi', '{"brand":"Alfamidi","brand:wikidata":"Q12471462","name":"Alfamidi","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8156451, -6.3449789), 4326)::geography),
  ('N', 4152527761, 'food', 'KFC', '{"addr:city":"South Jakarta","addr:housenumber":"Nomor 18","addr:postcode":"12640","addr:street":"Jalan Raya Lenteng Agung","alt_name":"Kentucky Fried Chicken","amenity":"fast_food","branch":"Lenteng Agung","brand":"KFC","brand:wikidata":"Q524757","brand:wikipedia":"en:KFC","cuisine":"chicken","name":"KFC","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833799, -6.3451209), 4326)::geography),
  ('N', 4152535995, 'food', 'McDonald''s', '{"addr:city":"Depok City, West Java","addr:housenumber":"No. 59","addr:postcode":"16951","addr:street":"Jalan Akses UI","amenity":"fast_food","branch":"Kelapa Dua Depok","brand":"McDonald''s","brand:wikidata":"Q38076","brand:wikipedia":"en:McDonald''s","cuisine":"burger","name":"McDonald''s","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8444156, -6.35484), 4326)::geography),
  ('N', 4152818555, 'food', 'KFC Margonda', '{"addr:city":"Depok, West Java","addr:housenumber":"RT. 01/RW.02","addr:postcode":"16235","addr:street":"Jalan Raya Margonda","amenity":"fast_food","name":"KFC Margonda"}'::jsonb, ST_SetSRID(ST_MakePoint(106.832578, -6.374415), 4326)::geography),
  ('N', 4242618989, 'food', 'Pizza Hut', '{"addr:city":"Depok City","addr:postcode":"16431","addr:street":"Jalan Hj Yahya","amenity":"restaurant","cuisine":"pizza","name":"Pizza Hut"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833266, -6.3730083), 4326)::geography),
  ('N', 4343829982, 'atm', 'ATM Mandiri FMIPA', '{"amenity":"atm","name":"ATM Mandiri FMIPA"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8261987, -6.3698697), 4326)::geography),
  ('N', 4343909154, 'food', 'Bikun Coffee', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Bikun Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(106.831092, -6.3649986), 4326)::geography),
  ('N', 4343949731, 'food', 'AH Burger', '{"amenity":"fast_food","cuisine":"burger","name":"AH Burger"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8263437, -6.3619396), 4326)::geography),
  ('N', 4343949732, 'food', 'Mini Pique Nique', '{"amenity":"restaurant","cuisine":"international","microbrewery":"no","name":"Mini Pique Nique","outdoor_seating":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8253511, -6.361233), 4326)::geography),
  ('N', 4343998651, 'food', 'Java Aroma Perpustakaan Universitas Indoenesia', '{"amenity":"cafe","cuisine":"coffee_shop","name":"Java Aroma Perpustakaan Universitas Indoenesia","outdoor_seating":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8297431, -6.365361), 4326)::geography),
  ('N', 4346713571, 'atm', 'ATM Mandiri', '{"amenity":"atm","name":"ATM Mandiri"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8253149, -6.3611611), 4326)::geography),
  ('N', 4399084448, 'convenience', 'Indomaret', '{"addr:street":"Jalan Raya Margonda","air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","opening_hours":"Mo-Su 07:00-22:00","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8327845, -6.3580859), 4326)::geography),
  ('N', 4442088168, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8170608, -6.3596156), 4326)::geography),
  ('N', 4442091451, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8170262, -6.3596833), 4326)::geography),
  ('N', 4559501192, 'food', 'Waroeng steak and shake', '{"amenity":"restaurant","name":"Waroeng steak and shake"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8485253, -6.3553966), 4326)::geography),
  ('N', 4780848423, 'food', 'RM Padang Sederhana', '{"addr:postcode":"16424","addr:street":"Jalan Raya Margonda","amenity":"restaurant","cuisine":"indonesian","name":"RM Padang Sederhana"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8343005, -6.3665593), 4326)::geography),
  ('N', 4965326082, 'pharmacy', 'Posyandu Bindu', '{"addr:city":"DKI Jakarta","addr:full":"Jalan Swadaya","amenity":"clinic","healthcare":"clinic","name":"Posyandu Bindu","operator":"Posyandu","operator:type":"private","operator:wikidata":"Q12506263","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8154113, -6.3426199), 4326)::geography),
  ('N', 4965326230, 'pharmacy', 'Posyandu Semangka I', '{"addr:city":"DKI Jakarta","addr:full":"Jalan Bhakti Indah","amenity":"clinic","healthcare":"clinic","name":"Posyandu Semangka I","operator":"Posyandu","operator:type":"private","operator:wikidata":"Q12506263","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8106082, -6.3455), 4326)::geography),
  ('N', 4992176766, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:wheelchair":"no","website":"https://www.klikindomaret.com","wheelchair":"limited"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8251029, -6.3751773), 4326)::geography),
  ('N', 5367286073, 'food', 'Bakso Kuah & Bakar Moro Seneng', '{"addr:city":"Depok","addr:postcode":"16418","addr:street":"Duta Indah 5","amenity":"cafe","cuisine":"regional;Bakso","internet_access":"yes","name":"Bakso Kuah & Bakar Moro Seneng","opening_hours":"Mo-Su 09:00-23:00","outdoor_seating":"yes","smoking":"separated"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8495719, -6.3753782), 4326)::geography),
  ('N', 5367303996, 'food', 'Warung Edi', '{"amenity":"cafe","name":"Warung Edi"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8494116, -6.3723747), 4326)::geography),
  ('N', 5367304032, 'food', 'Warung Soesoe', '{"amenity":"cafe","name":"Warung Soesoe"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8494184, -6.3724866), 4326)::geography),
  ('N', 5367304886, 'food', 'Nasi Goreng Jangkung', '{"amenity":"restaurant","name":"Nasi Goreng Jangkung"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8494157, -6.3724187), 4326)::geography),
  ('N', 5367310256, 'food', 'Roti Bakar Jangkung', '{"amenity":"cafe","name":"Roti Bakar Jangkung"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8494157, -6.372448), 4326)::geography),
  ('N', 5367328327, 'laundry', 'Laundry Kiloan', '{"name":"Laundry Kiloan","shop":"laundry"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8495713, -6.3753172), 4326)::geography),
  ('N', 5367328440, 'supermarket', 'Grocery Outlet', '{"name":"Grocery Outlet","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8493017, -6.3722567), 4326)::geography),
  ('N', 5367337395, 'supermarket', 'Grocery Outlet', '{"name":"Grocery Outlet","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8495189, -6.3746971), 4326)::geography),
  ('N', 5367354622, 'food', 'Nasi Goreng Ojolali', '{"amenity":"restaurant","name":"Nasi Goreng Ojolali"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8492967, -6.3723396), 4326)::geography),
  ('N', 5430187332, 'food', 'Tomorro Coffee FISIP UI', '{"addr:housenumber":"1","addr:street":"Jalan Prof. DR. Nugroho Notosusanto","air_conditioning":"yes","amenity":"cafe","cuisine":"coffee_shop","internet_access":"wlan","internet_access:fee":"customers","name":"Tomorro Coffee FISIP UI","opening_hours":"Mo-Sa 08:00-19:00","outdoor_seating":"yes","smoking":"no","takeaway":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8287276, -6.3633089), 4326)::geography),
  ('N', 5617927323, 'food', 'Ice Only', '{"addr:postcode":"16425","addr:street":"Jalan Kukusan Raya","amenity":"cafe","contact:instagram":"https://www.instagram.com/iceonly001","cuisine":"sandwich;ice_cream;arab","internet_access":"wlan","name":"Ice Only","name:en":"Ice Only","opening_hours":"Mo-Su 11:00-02:00","operator":"Ali Ridho & Didit Pangestu","phone":"+62 812 26572878","website":"https://www.instagram.com/iceonly001"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8165614, -6.360147), 4326)::geography),
  ('N', 5636838059, 'food', 'Green T Cafe', '{"amenity":"cafe","cuisine":"food & beverage","delivery":"no","internet_access":"yes","internet_access:fee":"no","name":"Green T Cafe","opening_hours":"08:00-19:00","smoking":"no","takeaway":"yes","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8298142, -6.3653117), 4326)::geography),
  ('N', 5938230387, 'food', 'Bakso Boedjangan', '{"addr:street":"Jalan Raya Margonda","amenity":"restaurant","name":"Bakso Boedjangan"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8341952, -6.3667391), 4326)::geography),
  ('N', 6072311185, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","payment:coins":"yes","payment:contactless":"yes","payment:mobile_money":"yes","payment:notes":"yes","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8312928, -6.3634828), 4326)::geography),
  ('N', 6073681182, 'atm', 'BRI', '{"amenity":"bank","brand":"BRI","brand:wikidata":"Q623042","name":"BRI","official_name":"Bank Rakyat Indonesia"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8312032, -6.3634801), 4326)::geography),
  ('N', 6424661688, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","name:en":"Alfamart","opening_hours":"Mo-Su 07:00-22:00","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8188577, -6.3525689), 4326)::geography),
  ('N', 7132599222, 'food', 'Pos Pengamanan Utama FISIP UI', '{"amenity":"cafe","name":"Pos Pengamanan Utama FISIP UI","opening_hours":"Mo-Fr 06:00-22:00"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8286244, -6.3626401), 4326)::geography),
  ('N', 7452513532, 'pharmacy', 'Apotek PharmaPlus', '{"amenity":"pharmacy","healthcare":"pharmacy","name":"Apotek PharmaPlus"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8342418, -6.3677544), 4326)::geography),
  ('N', 8581687617, 'bus_stop', 'Sekolah Perguruan Rakyat 1', '{"bus":"yes","departures_board":"yes","highway":"bus_stop","name":"Sekolah Perguruan Rakyat 1","network":"Desa Putra","operator":"PT Transjakarta, KWK, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8262122, -6.3446602), 4326)::geography),
  ('N', 8581687717, 'bus_stop', 'Seberang TK Kartika VIII - 13', '{"bus":"yes","departures_board":"yes","highway":"bus_stop","name":"Seberang TK Kartika VIII - 13","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8274004, -6.3452761), 4326)::geography),
  ('N', 8581687718, 'bus_stop', 'Universitas Pancasila', '{"bench":"yes","bus":"yes","departures_board":"yes","highway":"bus_stop","name":"Universitas Pancasila","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","route_ref":"4B","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8333149, -6.3421821), 4326)::geography),
  ('N', 8581687817, 'bus_stop', 'Jalan Cempaka Srengseng Sawah', '{"bus":"yes","departures_board":"yes","highway":"bus_stop","name":"Jalan Cempaka Srengseng Sawah","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.828222, -6.3446024), 4326)::geography),
  ('N', 8581687917, 'bus_stop', 'SDN Srengseng Sawah 07', '{"bus":"yes","departures_board":"yes","highway":"bus_stop","name":"SDN Srengseng Sawah 07","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8309779, -6.3451062), 4326)::geography),
  ('N', 8586780617, 'bus_stop', 'Pool JakLingko JAK.46 + JAK.47', '{"amenity":"bus_station","name":"Pool JakLingko JAK.46 + JAK.47","operator":"PT Transjakarta"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8071289, -6.3617236), 4326)::geography),
  ('N', 8589272219, 'bus_stop', 'Warung Sila', '{"bus":"yes","highway":"bus_stop","name":"Warung Sila","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8157549, -6.3451249), 4326)::geography),
  ('N', 8589272220, 'bus_stop', 'Pertigaan Warungsila Rindang', '{"bus":"yes","highway":"bus_stop","name":"Pertigaan Warungsila Rindang","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8116014, -6.3459577), 4326)::geography),
  ('N', 8589272221, 'bus_stop', 'Jalan Persahabatan', '{"bus":"yes","highway":"bus_stop","name":"Jalan Persahabatan","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8104497, -6.3461081), 4326)::geography),
  ('N', 8589272320, 'bus_stop', 'SMP SMA Bakti 17', '{"bus":"yes","highway":"bus_stop","name":"SMP SMA Bakti 17","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8096978, -6.3479452), 4326)::geography),
  ('N', 8589272321, 'bus_stop', 'Pom Bensin Kahfi', '{"bus":"yes","highway":"bus_stop","name":"Pom Bensin Kahfi","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8178673, -6.3426777), 4326)::geography),
  ('N', 8589275318, 'bus_stop', 'RS Ali Sibroh Malisi', '{"bus":"yes","highway":"bus_stop","name":"RS Ali Sibroh Malisi","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8141397, -6.3444081), 4326)::geography),
  ('N', 8589275417, 'bus_stop', 'SMP SMK Bakti 17', '{"bus":"yes","highway":"bus_stop","name":"SMP SMK Bakti 17","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8095761, -6.3481104), 4326)::geography),
  ('N', 8589289917, 'bus_stop', 'SDN Cipedak 04 & 03', '{"bus":"yes","highway":"bus_stop","name":"SDN Cipedak 04 & 03","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8093181, -6.3488794), 4326)::geography),
  ('N', 8589289918, 'bus_stop', 'SDN Cipedak 04 & 03', '{"bus":"yes","highway":"bus_stop","name":"SDN Cipedak 04 & 03","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8093699, -6.3489654), 4326)::geography),
  ('N', 8589290117, 'bus_stop', 'Perempatan Persahabatan Timbul', '{"bus":"yes","highway":"bus_stop","name":"Perempatan Persahabatan Timbul","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8077442, -6.3508883), 4326)::geography),
  ('N', 8589330018, 'bus_stop', 'Masjid Darussalam', '{"bus":"yes","highway":"bus_stop","name":"Masjid Darussalam","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8101078, -6.3467091), 4326)::geography),
  ('N', 8589337817, 'bus_stop', 'Pool JAK.46, JAK.47', '{"amenity":"bus_station","name":"Pool JAK.46, JAK.47","operator":"PT Transjakarta"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8071299, -6.3617213), 4326)::geography),
  ('N', 8589338117, 'bus_stop', 'Gang Dul Djaim', '{"highway":"bus_stop","name":"Gang Dul Djaim","operator":"PT Transjakarta, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8071737, -6.3616279), 4326)::geography),
  ('N', 8589338118, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8071411, -6.3517924), 4326)::geography),
  ('N', 8589338217, 'bus_stop', 'Gang Dul Djaim', '{"highway":"bus_stop","name":"Gang Dul Djaim","operator":"AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8072354, -6.3617464), 4326)::geography),
  ('N', 8589338218, 'bus_stop', 'Persahabatan Timbul Raya', '{"bus":"yes","departures_board":"yes","highway":"bus_stop","name":"Persahabatan Timbul Raya","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8077215, -6.3508388), 4326)::geography),
  ('N', 8594395818, 'bus_stop', 'Masjid Jami Asy Syakirin', '{"bus":"yes","highway":"bus_stop","name":"Masjid Jami Asy Syakirin","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8015233, -6.3512171), 4326)::geography),
  ('N', 8594395819, 'bus_stop', 'Jalan Haji Aselih', '{"bus":"yes","highway":"bus_stop","name":"Jalan Haji Aselih","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8015658, -6.3518407), 4326)::geography),
  ('N', 8594395820, 'bus_stop', 'SDN 05 Cipedak', '{"highway":"bus_stop","name":"SDN 05 Cipedak","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.801156, -6.3548415), 4326)::geography),
  ('N', 8594395821, 'bus_stop', 'SMPN 131', '{"highway":"bus_stop","name":"SMPN 131","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8017391, -6.3621938), 4326)::geography),
  ('N', 8594395823, 'bus_stop', 'Madrasah Aliyah Citra Cendekia', '{"bus":"yes","highway":"bus_stop","name":"Madrasah Aliyah Citra Cendekia","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8006811, -6.3574933), 4326)::geography),
  ('N', 8594395824, 'bus_stop', 'Gang Haji Amsar', '{"bus":"yes","highway":"bus_stop","name":"Gang Haji Amsar","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8036677, -6.3454183), 4326)::geography),
  ('N', 8594395917, 'bus_stop', 'Yayasan Islam Al Makmur', '{"bus":"yes","highway":"bus_stop","name":"Yayasan Islam Al Makmur","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8047559, -6.3403889), 4326)::geography),
  ('N', 8594395918, 'convenience', 'Alfamidi', '{"name":"Alfamidi","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8053195, -6.3636206), 4326)::geography),
  ('N', 8594395919, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8023198, -6.3628192), 4326)::geography),
  ('N', 8594395921, 'bus_stop', 'Yayasan Islam Al Makmur', '{"highway":"bus_stop","name":"Yayasan Islam Al Makmur","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8046845, -6.3402459), 4326)::geography),
  ('N', 8594396117, 'bus_stop', 'Masjid Daarul Iman', '{"bus":"yes","highway":"bus_stop","name":"Masjid Daarul Iman","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8046231, -6.3417326), 4326)::geography),
  ('N', 8594396217, 'bus_stop', 'Pertigaan Brigif Warungsila', '{"bus":"yes","highway":"bus_stop","name":"Pertigaan Brigif Warungsila","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8040179, -6.3447508), 4326)::geography),
  ('N', 8594396218, 'bus_stop', 'Pom Bensin Kahfi 1', '{"bus":"yes","highway":"bus_stop","name":"Pom Bensin Kahfi 1","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8017905, -6.3500482), 4326)::geography),
  ('N', 8594396219, 'bus_stop', 'Masjid Jami Al Makmur', '{"bus":"yes","highway":"bus_stop","name":"Masjid Jami Al Makmur","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8035113, -6.3456264), 4326)::geography),
  ('N', 8594396417, 'bus_stop', 'Pertigaan Kahfi Raya Timbul Raya', '{"bus":"yes","highway":"bus_stop","name":"Pertigaan Kahfi Raya Timbul Raya","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8016966, -6.3501475), 4326)::geography),
  ('N', 8594396517, 'bus_stop', 'Seberang Madrasah Aliyah Citra Cendekia', '{"bus":"yes","highway":"bus_stop","name":"Seberang Madrasah Aliyah Citra Cendekia","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8007801, -6.3575198), 4326)::geography),
  ('N', 8594398717, 'bus_stop', 'Jalan Kramat', '{"highway":"bus_stop","name":"Jalan Kramat","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8032727, -6.3635802), 4326)::geography),
  ('N', 8594398718, 'bus_stop', 'Manggar 2', '{"highway":"bus_stop","name":"Manggar 2","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8027624, -6.3632398), 4326)::geography),
  ('N', 8594398719, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8021587, -6.3630747), 4326)::geography),
  ('N', 8594398720, 'bus_stop', 'SMPN 131', '{"highway":"bus_stop","name":"SMPN 131","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8017112, -6.3622938), 4326)::geography),
  ('N', 8594398721, 'bus_stop', 'SDN 05 Cipedak', '{"highway":"bus_stop","name":"SDN 05 Cipedak","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8012175, -6.3544245), 4326)::geography),
  ('N', 8594398722, 'bus_stop', 'Jalan Haji Aselih', '{"bus":"yes","highway":"bus_stop","name":"Jalan Haji Aselih","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.801499, -6.352172), 4326)::geography),
  ('N', 8594398723, 'bus_stop', 'Simpang Brigif', '{"bus":"yes","highway":"bus_stop","name":"Simpang Brigif","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8042832, -6.3431171), 4326)::geography),
  ('N', 8594515619, 'bus_stop', 'Tanah Baru', '{"highway":"bus_stop","name":"Tanah Baru","operator":"PT Transjakarta, Mikrolet, AKD","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8069589, -6.3634426), 4326)::geography),
  ('N', 8594515620, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8068879, -6.3633908), 4326)::geography),
  ('N', 8620519219, 'bus_stop', 'Jalan Timbul Raya', '{"bus":"yes","highway":"bus_stop","name":"Jalan Timbul Raya","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.803039, -6.350278), 4326)::geography),
  ('N', 8620753817, 'bus_stop', 'Jalan Rindang Warung Sila', '{"bus":"yes","highway":"bus_stop","name":"Jalan Rindang Warung Sila","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8116899, -6.3454231), 4326)::geography),
  ('N', 8620753820, 'bus_stop', 'Jalan Sadar Raya', '{"bus":"yes","highway":"bus_stop","name":"Jalan Sadar Raya","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8126035, -6.3427803), 4326)::geography),
  ('N', 8620753821, 'bus_stop', 'Jalan Timbul Raya', '{"bus":"yes","highway":"bus_stop","name":"Jalan Timbul Raya","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8032543, -6.3503891), 4326)::geography),
  ('N', 8620753917, 'bus_stop', 'Jalan Sadar Raya', '{"bus":"yes","highway":"bus_stop","name":"Jalan Sadar Raya","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8125395, -6.3428944), 4326)::geography),
  ('N', 8659380228, 'bus_stop', 'Pool 9H Transjakarta - Cipedak', '{"highway":"bus_stop","name":"Pool 9H Transjakarta - Cipedak","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8094385, -6.3564874), 4326)::geography),
  ('N', 9037081023, 'food', 'SIXTY NINE BISTRO & LOUNGE', '{"amenity":"restaurant","name":"SIXTY NINE BISTRO & LOUNGE"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338005, -6.3445249), 4326)::geography),
  ('N', 9037081024, 'food', 'Chatime', '{"amenity":"cafe","branch":"Inkopar Plaza","brand":"Chatime","brand:wikidata":"Q16829306","brand:wikipedia":"en:Chatime","cuisine":"bubble_tea","name":"Chatime","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8339455, -6.3445867), 4326)::geography),
  ('N', 9233335607, 'worship', 'Masjid Al Hikam', '{"amenity":"place_of_worship","name":"Masjid Al Hikam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8210325, -6.3596351), 4326)::geography),
  ('N', 9441757217, 'bus_stop', 'Halte Pondok Cina', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Halte Pondok Cina","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8336046, -6.3705416), 4326)::geography),
  ('N', 9555589833, 'worship', 'Masjid Nurul Huda', '{"amenity":"place_of_worship","name":"Masjid Nurul Huda","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8404463, -6.3733918), 4326)::geography),
  ('N', 9559774317, 'bus_stop', 'Margo City', '{"bus":"yes","highway":"bus_stop","name":"Margo City","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332051, -6.3723049), 4326)::geography),
  ('N', 9559774417, 'bus_stop', 'Evecio Apartemen', '{"bus":"yes","highway":"bus_stop","name":"Evecio Apartemen","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332346, -6.3599844), 4326)::geography),
  ('N', 9559774418, 'bus_stop', 'Apartemen Melati', '{"bus":"yes","highway":"bus_stop","name":"Apartemen Melati","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8330527, -6.3601087), 4326)::geography),
  ('N', 9560068818, 'bus_stop', 'Jalan Srengseng Sawah 1', '{"bus":"yes","highway":"bus_stop","name":"Jalan Srengseng Sawah 1","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8315074, -6.3449796), 4326)::geography),
  ('N', 9560069017, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8294402, -6.3451497), 4326)::geography),
  ('N', 9560069117, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8286433, -6.3448256), 4326)::geography),
  ('N', 9560069118, 'bus_stop', 'SMAN 109', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"SMAN 109","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","route_ref":"4B","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8335245, -6.3447979), 4326)::geography),
  ('N', 9560069119, 'bus_stop', 'Halte Universitas Indonesia', '{"highway":"bus_stop","name":"Halte Universitas Indonesia","operator":"PT Transjakarta","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.832433, -6.3524436), 4326)::geography),
  ('N', 9560069217, 'bus_stop', 'Gang Berdikari', '{"bus":"yes","highway":"bus_stop","name":"Gang Berdikari","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8331285, -6.3435997), 4326)::geography),
  ('N', 9560069917, 'bus_stop', 'Syibi', '{"bus":"yes","highway":"bus_stop","name":"Syibi","network":"Transjakarta","network:wikidata":"Q1671143","operator":"PT Transjakarta","public_transport":"platform","route_ref":"4B","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.832765, -6.3503717), 4326)::geography),
  ('N', 9684620445, 'food', 'Kopi Kotak Margonda Depok - Pondok Cina', '{"amenity":"cafe","name":"Kopi Kotak Margonda Depok - Pondok Cina"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8336924, -6.3617588), 4326)::geography),
  ('N', 9684696265, 'food', 'Oi Coffee Eatery - Tugu', '{"amenity":"cafe","name":"Oi Coffee Eatery - Tugu"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8367235, -6.3542183), 4326)::geography),
  ('N', 9694087637, 'food', 'Burger King', '{"amenity":"fast_food","brand":"Burger King","brand:wikidata":"Q177054","brand:wikipedia":"en:Burger King","cuisine":"burger","level":"2","name":"Burger King","smoking":"no","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8348285, -6.3712522), 4326)::geography),
  ('N', 9702253017, 'bus_stop', 'Gang Sawo', '{"highway":"bus_stop","name":"Gang Sawo","operator":"PT Transjakarta","public_transport":"platform","shelter":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8340478, -6.3409388), 4326)::geography),
  ('N', 10214301688, 'food', 'Roomy Kitchen', '{"addr:city":"Depok","addr:housenumber":"8","addr:postcode":"16235","addr:street":"Jalan HM Tohir","amenity":"cafe","cuisine":"coffee_shop;asian","internet_access":"yes","name":"Roomy Kitchen","opening_hours":"24/7","outdoor_seating":"yes","phone":"+6281283839919"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8352991, -6.3684358), 4326)::geography),
  ('N', 10291295323, 'food', 'Warung Kemuning', '{"amenity":"restaurant","cuisine":"indonesian","level":"p","name":"Warung Kemuning","outdoor_seating":"yes","takeaway":"yes","toilets":"yes","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8358948, -6.3606592), 4326)::geography),
  ('N', 10293554542, 'food', 'Kantin Kirani', '{"amenity":"restaurant","cuisine":"indonesian;chicken","name":"Kantin Kirani","takeaway":"yes","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8349494, -6.3608504), 4326)::geography),
  ('N', 10293554543, 'food', 'Warung Kuy', '{"addr:housenumber":"3","addr:street":"Jalan Kober","amenity":"restaurant","contact:mobile":"+62 878-7527-7826","cuisine":"indonesian;chicken","name":"Warung Kuy","opening_hours":"Mo-Su 10:00-23:00","takeaway":"yes","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8348973, -6.3608567), 4326)::geography),
  ('N', 10542804048, 'food', 'Djamal Caffe', '{"amenity":"restaurant","cuisine":"indonesian","name":"Djamal Caffe","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8366518, -6.3603893), 4326)::geography),
  ('N', 10542804049, 'food', 'Warkop Jois Barokah', '{"amenity":"restaurant","cuisine":"indonesian","name":"Warkop Jois Barokah","takeaway":"yes","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8364579, -6.3602805), 4326)::geography),
  ('N', 10570205942, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338098, -6.3686412), 4326)::geography),
  ('N', 10570509610, 'worship', 'Masjid Nurul ''Ilmi - Kampus E Universitas Gunadarma', '{"amenity":"place_of_worship","name":"Masjid Nurul ''Ilmi - Kampus E Universitas Gunadarma","name:en":"Masjid Nurul ''Ilmi","name:id":"Masjid Nurul ''Ilmi - Kampus E Universitas Gunadarma","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8405425, -6.3539704), 4326)::geography),
  ('N', 10700668896, 'worship', 'musholla al-barokah', '{"amenity":"place_of_worship","building":"mosque","name":"musholla al-barokah","place_of_worship":"musalla","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.836582, -6.3698195), 4326)::geography),
  ('N', 10740641168, 'atm', 'Bank Syariah Indonesia', '{"amenity":"bank","atm":"yes","brand":"Bank Syariah Indonesia","brand:wikidata":"Q105574200","name":"Bank Syariah Indonesia","short_name":"BSI"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8264618, -6.369774), 4326)::geography),
  ('N', 10740688710, 'atm', 'BNI', '{"amenity":"bank","atm":"yes","brand":"BNI","brand:wikidata":"Q2882611","name":"BNI","official_name":"Bank Negara Indonesia"}'::jsonb, ST_SetSRID(ST_MakePoint(106.829411, -6.3655839), 4326)::geography),
  ('N', 11080505688, 'atm', 'ATM Bank BSI PNJ', '{"amenity":"atm","name":"ATM Bank BSI PNJ","operator":"Bank Syariah Indonesia (BSI)"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8244822, -6.3713291), 4326)::geography),
  ('N', 11080505689, 'atm', 'ATM Bank Mandiri PNJ', '{"amenity":"atm","name":"ATM Bank Mandiri PNJ","operator":"Bank Mandiri"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8244794, -6.3712934), 4326)::geography),
  ('N', 11688425924, 'bus_stop', 'Gang Saminten', '{"bus":"yes","highway":"bus_stop","name":"Gang Saminten","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8492309, -6.379459), 4326)::geography),
  ('N', 11688425926, 'bus_stop', 'Seberang Gang Saminten', '{"bus":"yes","highway":"bus_stop","name":"Seberang Gang Saminten","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8490384, -6.3792046), 4326)::geography),
  ('N', 11688425930, 'bus_stop', 'Seberang Pesona Square', '{"bus":"yes","highway":"bus_stop","name":"Seberang Pesona Square","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.844166, -6.379614), 4326)::geography),
  ('N', 11688425931, 'bus_stop', 'Pesona Square', '{"bus":"yes","highway":"bus_stop","name":"Pesona Square","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8431333, -6.379612), 4326)::geography),
  ('N', 11688425933, 'bus_stop', 'Moch Yusuf Raya 2', '{"bus":"yes","highway":"bus_stop","name":"Moch Yusuf Raya 2","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8414414, -6.3796915), 4326)::geography),
  ('N', 11688425934, 'bus_stop', 'Moch Yusuf Raya 1', '{"bus":"yes","highway":"bus_stop","name":"Moch Yusuf Raya 1","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.84099, -6.3795751), 4326)::geography),
  ('N', 11688425936, 'bus_stop', 'STIAMI 1', '{"bus":"yes","highway":"bus_stop","name":"STIAMI 1","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332857, -6.3773808), 4326)::geography),
  ('N', 11688425938, 'bus_stop', 'STIAMI 2', '{"bus":"yes","highway":"bus_stop","name":"STIAMI 2","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8326739, -6.3773147), 4326)::geography),
  ('N', 11733087512, 'bus_stop', 'Rumpun Ilmu Kesehatan', '{"bench":"yes","bin":"yes","highway":"bus_stop","name":"Rumpun Ilmu Kesehatan","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8308629, -6.3700605), 4326)::geography),
  ('N', 11733087513, 'bus_stop', 'Rumpun Ilmu Kesehatan', '{"bench":"yes","bin":"yes","highway":"bus_stop","name":"Rumpun Ilmu Kesehatan","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8310607, -6.3701292), 4326)::geography),
  ('N', 11733087527, 'bus_stop', 'Fakultas Hukum', '{"highway":"bus_stop","name":"Fakultas Hukum","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8320505, -6.3647912), 4326)::geography),
  ('N', 11733087530, 'bus_stop', 'Stasiun KRL Universitas Indonesia', '{"highway":"bus_stop","name":"Stasiun KRL Universitas Indonesia","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8314946, -6.3609966), 4326)::geography),
  ('N', 11733087534, 'bus_stop', 'Resimen Mahasiswa', '{"bus":"yes","highway":"bus_stop","name":"Resimen Mahasiswa","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8316609, -6.3534679), 4326)::geography),
  ('N', 11733087536, 'bus_stop', 'Resimen Mahasiswa', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Resimen Mahasiswa","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8318164, -6.3534666), 4326)::geography),
  ('N', 11733783105, 'bus_stop', 'Fakultas Ilmu Keperawatan', '{"bench":"yes","highway":"bus_stop","name":"Fakultas Ilmu Keperawatan","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8271387, -6.3709535), 4326)::geography),
  ('N', 11733783106, 'bus_stop', 'Fakultas Ilmu Keperawatan', '{"bench":"yes","highway":"bus_stop","name":"Fakultas Ilmu Keperawatan","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8269643, -6.3711028), 4326)::geography),
  ('N', 11733891622, 'bus_stop', 'Fakultas Ilmu Pengetahuan Budaya', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Ilmu Pengetahuan Budaya","public_transport":"platform","shelter":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8297189, -6.3611205), 4326)::geography),
  ('N', 11733891637, 'bus_stop', 'Fakultas Teknik', '{"bench":"yes","bus":"yes","highway":"bus_stop","name":"Fakultas Teknik","public_transport":"platform","shelter":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8231918, -6.3610546), 4326)::geography),
  ('N', 11879062582, 'pharmacy', 'RS ALI SIBROH MALISI', '{"amenity":"hospital","healthcare":"hospital","name":"RS ALI SIBROH MALISI","operator":"RS ALI SIBROH MALISI"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8138523, -6.3448144), 4326)::geography),
  ('N', 11909092670, 'worship', 'Musholla RIK', '{"amenity":"place_of_worship","name":"Musholla RIK"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8294924, -6.3699922), 4326)::geography),
  ('N', 11921837462, 'bus_stop', 'Gang Datuk', '{"bus":"yes","highway":"bus_stop","name":"Gang Datuk","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8193988, -6.3416044), 4326)::geography),
  ('N', 11921837464, 'bus_stop', 'Jalan Perikanan', '{"bus":"yes","highway":"bus_stop","name":"Jalan Perikanan","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8160311, -6.3448049), 4326)::geography),
  ('N', 11921837466, 'bus_stop', 'Jalan Haji Mohammed Nalim', '{"bus":"yes","highway":"bus_stop","name":"Jalan Haji Mohammed Nalim","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8132712, -6.348726), 4326)::geography),
  ('N', 11921837468, 'bus_stop', 'Jalan Moch. Kahfi II', '{"bus":"yes","highway":"bus_stop","name":"Jalan Moch. Kahfi II","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8105416, -6.3548703), 4326)::geography),
  ('N', 11921871870, 'bus_stop', 'Seberang Jalan Cipedak Raya', '{"bus":"yes","highway":"bus_stop","name":"Seberang Jalan Cipedak Raya","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.810281, -6.3573731), 4326)::geography),
  ('N', 11921871872, 'bus_stop', 'Gang Haji Benih Srengseng Sawah', '{"bus":"yes","highway":"bus_stop","name":"Gang Haji Benih Srengseng Sawah","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8127087, -6.3562816), 4326)::geography),
  ('N', 11921871874, 'bus_stop', 'Jalan Haji Lele', '{"bus":"yes","highway":"bus_stop","name":"Jalan Haji Lele","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8158389, -6.3523492), 4326)::geography),
  ('N', 11921871876, 'bus_stop', 'SMP PGRI 3 Jakarta', '{"bus":"yes","highway":"bus_stop","name":"SMP PGRI 3 Jakarta","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8175596, -6.3522734), 4326)::geography),
  ('N', 11921871878, 'bus_stop', 'TPU Srengseng Sawah', '{"bus":"yes","highway":"bus_stop","name":"TPU Srengseng Sawah","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8198064, -6.3501588), 4326)::geography),
  ('N', 11921871880, 'bus_stop', 'Masjid Baitul Ma''mur', '{"bus":"yes","highway":"bus_stop","name":"Masjid Baitul Ma''mur","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8209203, -6.3457919), 4326)::geography),
  ('N', 11921871882, 'bus_stop', 'Gang Damai Srengseng Sawah', '{"bus":"yes","highway":"bus_stop","name":"Gang Damai Srengseng Sawah","network":"Transjakarta","network:wikidata":"Q1671143","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.824856, -6.3462239), 4326)::geography),
  ('N', 12145101615, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8016654, -6.3441501), 4326)::geography),
  ('N', 12145101616, 'convenience', 'Alfamart', '{"brand":"Alfamart","brand:wikidata":"Q23745600","name":"Alfamart","operator":"PT Sumber Alfaria Trijaya,Tbk","shop":"convenience","toilets":"yes","toilets:access":"permissive","toilets:unisex":"yes","website":"https://alfamart.co.id"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8021641, -6.3440936), 4326)::geography),
  ('N', 12662590203, 'worship', 'Mushalla', '{"addr:street":"Jl. M. Ali I","amenity":"place_of_worship","name":"Mushalla"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8072633, -6.3773109), 4326)::geography),
  ('N', 12662611820, 'worship', 'Mushalla', '{"amenity":"place_of_worship","name":"Mushalla","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8072662, -6.3773108), 4326)::geography),
  ('N', 13530660059, 'worship', 'Masjid AlKautsar', '{"addr:street":"Pesona Khayangan Junanda Blok W","amenity":"place_of_worship","name":"Masjid AlKautsar","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8379852, -6.3764291), 4326)::geography),
  ('N', 13626678796, 'convenience', 'Indomaret', '{"air_conditioning":"yes","branch":"Fresh Brigif","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","fixme":"Indomaret Fresh","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8027978, -6.3460322), 4326)::geography),
  ('N', 13626678797, 'convenience', 'FamilyMart', '{"branch":"Brigif","brand":"FamilyMart","brand:wikidata":"Q11247682","name":"FamilyMart","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8027666, -6.3461152), 4326)::geography),
  ('N', 13722542613, 'supermarket', 'Warung Abah', '{"name":"Warung Abah","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8166279, -6.3437342), 4326)::geography),
  ('N', 13722543320, 'food', 'Burger Bangor', '{"amenity":"fast_food","cuisine":"burger;sandwich","diet:halal":"yes","name":"Burger Bangor"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8161753, -6.3432623), 4326)::geography),
  ('N', 13724870991, 'worship', 'Masjid Al Kautsar', '{"addr:city":"Depok","addr:district":"Beji","addr:neighbourhood":"Orchid Green Village","addr:province":"Jawa Barat","addr:street":"Palakali","addr:subdistrict":"Tanah Baru","amenity":"place_of_worship","denomination":"sunni","name":"Masjid Al Kautsar","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8044894, -6.3743909), 4326)::geography),
  ('N', 14031560611, 'food', 'Kantin Lembar (daLEM gedung BARu)', '{"amenity":"restaurant","cuisine":"regional","name":"Kantin Lembar (daLEM gedung BARu)"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82781, -6.3702889), 4326)::geography),
  ('N', 14085302374, 'food', 'Warkop BUNDA', '{"air_conditioning":"no","amenity":"cafe","check_date:opening_hours":"2026-08-10","indoor_seating":"yes","name":"Warkop BUNDA","opening_hours:signed":"no","outdoor_seating":"yes","smoking":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8333559, -6.3777807), 4326)::geography),
  ('N', 14136748263, 'bus_stop', 'Jalan Palem', '{"bus":"yes","highway":"bus_stop","name":"Jalan Palem","public_transport":"platform"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8009811, -6.3562581), 4326)::geography),
  ('N', 14276184064, 'food', 'Twin House FISIP UI', '{"addr:city":"Depok, West Java","addr:district":"Beji","addr:housename":"Teras Taman Bhinneka Tunggal Ika FISIP UI","addr:postcode":"16424","addr:province":"Jawa Barat","addr:street":"Jalan Prof. Dr. Selo Soemardjan","addr:subdistrict":"Beji","air_conditioning":"yes","amenity":"cafe","cuisine":"coffee_shop","internet_access":"wlan","internet_access:fee":"customers","name":"Twin House FISIP UI","opening_hours":"Mo-Fr 10:30-19:00","outdoor_seating":"yes","smoking":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8294746, -6.361545), 4326)::geography),
  ('N', 14276184065, 'food', 'Maxx Coffee', '{"amenity":"cafe","branch":"FISIP UI","brand":"Maxx Coffee","brand:wikidata":"Q124651563","cuisine":"coffee_shop","internet_access":"wlan","internet_access:fee":"customers","name":"Maxx Coffee","opening_hours":"Mo-Fr 08:00-19:00","outdoor_seating":"yes","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8300705, -6.3625706), 4326)::geography),
  ('N', 14276184077, 'convenience', 'Lawson', '{"brand":"Lawson","brand:wikidata":"Q1557223","name":"Lawson","operator":"FISIP UI","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8295506, -6.3627459), 4326)::geography),
  ('N', 14276184078, 'food', 'J-Chicken FISIP UI', '{"amenity":"fast_food","cuisine":"chicken","drive_through":"no","internet_access:fee":"customers","name":"J-Chicken FISIP UI","smoking":"no","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8295246, -6.3627459), 4326)::geography),
  ('N', 14276184079, 'food', 'Janji Jiwa', '{"amenity":"cafe","brand":"Janji Jiwa","brand:wikidata":"Q124030785","cuisine":"coffee_shop","internet_access":"wlan","internet_access:fee":"customers","name":"Janji Jiwa","smoking":"no","takeaway":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8294412, -6.3627425), 4326)::geography),
  ('W', 113543019, 'food', 'Kantin Prima', '{"amenity":"food_court","building":"yes","name":"Kantin Prima"}'::jsonb, ST_SetSRID(ST_MakePoint(106.828161, -6.3665673), 4326)::geography),
  ('W', 113545592, 'bus_stop', 'Pool Bis Kuning', '{"amenity":"bus_station","bus":"yes","name":"Pool Bis Kuning","public_transport":"station"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8270507, -6.3676104), 4326)::geography),
  ('W', 119276523, 'food', 'Dermaga One', '{"amenity":"restaurant","backrest":"yes","building":"yes","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:use":"commercial","building:walls":"brick","cuisine":"seafood","internet_access":"wlan","name":"Dermaga One"}'::jsonb, ST_SetSRID(ST_MakePoint(106.825738, -6.369108), 4326)::geography),
  ('W', 119429958, 'food', 'Kantin Kerucut FIB UI', '{"amenity":"food_court","building":"yes","internet_access":"no","internet_access:fee":"no","name":"Kantin Kerucut FIB UI","opening_hours":"Mo-Fr 08:30-20:00","smoking":"yes","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8270844, -6.3638926), 4326)::geography),
  ('W', 119452880, 'worship', 'Masjid Al-Istiqomah', '{"amenity":"place_of_worship","building":"mosque","building:levels":"1","building:roof":"tile","building:structure":"plastered","building:use":"place_of_worship","building:walls":"brick","name":"Masjid Al-Istiqomah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8342982, -6.3569416), 4326)::geography),
  ('W', 119455126, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","building:levels":"1","building:roof":"tile","building:structure":"plastered","building:use":"place_of_worship","building:walls":"brick","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8328571, -6.3749925), 4326)::geography),
  ('W', 119724687, 'atm', 'Bank BCA', '{"amenity":"bank","atm":"yes","building":"yes","building:levels":"1","building:roof":"tile","building:structure":"plastered","building:use":"commercial","building:walls":"brick","name":"Bank BCA","opening_hours":"Mo-Fr 08:00-15:00"}'::jsonb, ST_SetSRID(ST_MakePoint(106.839822, -6.3549416), 4326)::geography),
  ('W', 119724688, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","building":"yes","building:levels":"2","building:roof":"tile","building:structure":"plastered","building:use":"commercial","building:walls":"brick","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","opening_hours":"24/7","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8395311, -6.3547141), 4326)::geography),
  ('W', 119724889, 'convenience', 'Mini Market', '{"building":"yes","building:levels":"2","building:roof":"tile","building:structure":"plastered","building:use":"commercial","building:walls":"brick","name":"Mini Market","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8487963, -6.3549078), 4326)::geography),
  ('W', 120002902, 'worship', 'Masjid Timah Al-Huda', '{"amenity":"place_of_worship","building":"mosque","building:levels":"3","building:roof":"tile","building:structure":"plastered","building:use":"place_of_worship","building:walls":"brick","denomination":"sunni","name":"Masjid Timah Al-Huda","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8487712, -6.3625576), 4326)::geography),
  ('W', 120317722, 'worship', 'Gereja Gideon', '{"amenity":"place_of_worship","building":"church","building:levels":"2","building:roof":"asbestos","building:structure":"unreinforced_masonry","building:use":"place_of_worship","building:walls":"brick","name":"Gereja Gideon","religion":"christian"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8481603, -6.3547904), 4326)::geography),
  ('W', 120628578, 'atm', 'Bank BNI 46', '{"amenity":"bank","atm":"yes","building":"yes","building:levels":"1","building:roof":"tile","building:structure":"plastered","building:use":"commercial","building:walls":"brick","name":"Bank BNI 46"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8486071, -6.3549133), 4326)::geography),
  ('W', 120629571, 'worship', 'Masjid Al-Kohinoor', '{"addr:city":"Depok City","addr:housenumber":"7","addr:street":"Jalan Al Furqon","amenity":"place_of_worship","building":"mosque","building:levels":"2","building:roof":"concrete","building:structure":"reinforced_masonry","building:use":"place_of_worship","building:walls":"brick","name":"Masjid Al-Kohinoor","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8340607, -6.3591056), 4326)::geography),
  ('W', 120629574, 'worship', 'Masjid Jami Al Ikhsan', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Shibi III","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:use":"place_of_worship","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Jami Al Ikhsan","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8336917, -6.3504486), 4326)::geography),
  ('W', 120629594, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","building:levels":"1","building:roof":"tile","building:structure":"unreinforced_masonry","building:use":"place_of_worship","building:walls":"brick","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8326339, -6.3788934), 4326)::geography),
  ('W', 120787798, 'food', 'Kantin FEB UI', '{"amenity":"food_court","building":"university","building:levels":"2","building:roof":"tile","building:structure":"unreinforced_masonry","building:use":"commercial","building:walls":"brick","name":"Kantin FEB UI"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8266051, -6.3616363), 4326)::geography),
  ('W', 151282508, 'food', 'Kantin FT UI', '{"amenity":"food_court","building":"university","building:levels":"2","building:roof":"tile","building:structure":"unreinforced_masonry","building:use":"multipurpose","building:walls":"brick","name":"Kantin FT UI","name:id":"Gedung Pusgiwa Teknik"}'::jsonb, ST_SetSRID(ST_MakePoint(106.824575, -6.3631954), 4326)::geography),
  ('W', 151282633, 'food', 'Gedung E F.Psi / Kantin Lama', '{"amenity":"restaurant","building":"yes","name":"Gedung E F.Psi / Kantin Lama","roof:shape":"pyramidal"}'::jsonb, ST_SetSRID(ST_MakePoint(106.830313, -6.3631711), 4326)::geography),
  ('W', 151290511, 'food', 'Kantin NL-Balsem FISIP UI', '{"amenity":"food_court","building":"yes","cuisine":"daerahregional","diet:halal":"yes","diet:kosher":"yes","internet_access":"wlan","name":"Kantin NL-Balsem FISIP UI","opening_hours":"Mo-Sa 08:00-20:00","smoking":"isolated","takeaway":"yes","wheelchair":"limited"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8298187, -6.3631657), 4326)::geography),
  ('W', 151290534, 'food', 'Kantin F. Psi', '{"amenity":"restaurant","building":"yes","name":"Kantin F. Psi"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8301017, -6.363533), 4326)::geography),
  ('W', 151294669, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8260854, -6.3779681), 4326)::geography),
  ('W', 152054499, 'worship', 'Masjid Nurul Falah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Nurul Falah 2","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Nurul Falah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8244387, -6.3523024), 4326)::geography),
  ('W', 157360703, 'worship', 'Masjid Jami Ayubalwasal', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Batu Belah","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Jami Ayubalwasal","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8086007, -6.3486422), 4326)::geography),
  ('W', 157360705, 'worship', 'Masjid Darusallam', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Persahabatan","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"100-250","evacuation_center":"no","name":"Masjid Darusallam","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.810087, -6.3464528), 4326)::geography),
  ('W', 157361161, 'worship', 'Masjid An Nur', '{"access:roof":"yes","addr:city":"DKI Jakarta","addr:full":"Jalan Muhammad Kahfi II Gang An Nur","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"concrete","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid An Nur","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8152693, -6.3462002), 4326)::geography),
  ('W', 157361177, 'worship', 'Masjid Jami'' Nurul Yaqin', '{"access:roof":"yes","addr:full":"Jalan Raya percabangan UP","amenity":"place_of_worship","building":"mosque","building:levels":"2","building:roof":"tile","building:structure":"reinforced_masonry","building:walls":"brick","name":"Masjid Jami'' Nurul Yaqin","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8325428, -6.3462227), 4326)::geography),
  ('W', 157361773, 'worship', 'Masjid Al Barkah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan H. Jaba","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Al Barkah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8015634, -6.348552), 4326)::geography),
  ('W', 157361774, 'worship', 'Masjid Al Inayah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Moh. Kahfi I","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"100-250","evacuation_center":"no","name":"Masjid Al Inayah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8020854, -6.3622107), 4326)::geography),
  ('W', 157362203, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8202567, -6.3643505), 4326)::geography),
  ('W', 157362224, 'worship', 'Gereja Kristen Oikoumene Indonesia', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Raya Lenteng Agung","amenity":"place_of_worship","backup_generator":"no","building":"church","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"asbestos","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Gereja Kristen Oikoumene Indonesia","religion":"christian","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8351114, -6.3406044), 4326)::geography),
  ('W', 157362230, 'worship', 'Masjid Al Ikhlas', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Masjid","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Al Ikhlas","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.835274, -6.3415433), 4326)::geography),
  ('W', 157362237, 'worship', 'Masjid Nurul Fathon', '{"access:roof":"no","addr:full":"Jalan Camat Gabun RT. 07 / RW. 09","amenity":"place_of_worship","building":"mosque","building:levels":"1","building:roof":"tile","building:structure":"reinforced_masonry","building:walls":"brick","capacity:persons":"50-100","name":"Masjid Nurul Fathon","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.840233, -6.3415709), 4326)::geography),
  ('W', 157362878, 'worship', 'Masjid Baitur Makmur', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Srengseng Sawah RT 01/RW 07","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"100-250","evacuation_center":"no","name":"Masjid Baitur Makmur","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8205976, -6.3460466), 4326)::geography),
  ('W', 157362880, 'worship', 'Masjid Nurul Hidayah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Yonzikon 13","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"asbestos","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Nurul Hidayah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8309714, -6.3434628), 4326)::geography),
  ('W', 157365930, 'worship', 'Masjid Jami Nurul Ihsan', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Nurul Ihsan","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Jami Nurul Ihsan","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8085238, -6.3539854), 4326)::geography),
  ('W', 157365931, 'worship', 'Masjid Nurul Iman', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Nurul Iman","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ground","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Nurul Iman","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8100328, -6.3512481), 4326)::geography),
  ('W', 157366840, 'worship', 'Masjid Al-Barkah', '{"access:roof":"yes","addr:full":"Jl. Wahid Rt. 07/04","amenity":"place_of_worship","building":"mosque","building:levels":"1","building:roof":"tile","building:structure":"reinforced_masonry","building:walls":"brick","name":"Masjid Al-Barkah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8130243, -6.3437387), 4326)::geography),
  ('W', 157366841, 'worship', 'Masjid Jami Al-Hikmah', '{"access:roof":"yes","addr:full":"Jalan Muhammad Kahfi II RT. 01 / RW. 004","amenity":"place_of_worship","building":"mosque","building:levels":"1","building:roof":"tile","building:structure":"reinforced_masonry","building:walls":"brick","name":"Masjid Jami Al-Hikmah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8202914, -6.3401049), 4326)::geography),
  ('W', 157366842, 'worship', 'Masjid Al Mubarakah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Kemenyan","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Al Mubarakah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8107439, -6.3404554), 4326)::geography),
  ('W', 157366849, 'pharmacy', 'Puskesmas Ciganjur', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Kemenyan No. 67 RT. 07 / RW. 05","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","healthcare":"clinic","name":"Puskesmas Ciganjur","operator":"Ministry of Health","operator:en":"Ministry of Health","operator:id":"Kementerian Kesehatan","operator:type":"government","operator:wikidata":"Q12490745","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8071247, -6.3400087), 4326)::geography),
  ('W', 157976900, 'worship', 'Musholla / Masjid', '{"addr:housenumber":"01","addr:postcode":"16451","addr:street":"jalan komjen m jasin","amenity":"place_of_worship","building":"mosque","building:levels":"2","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.848388, -6.3536), 4326)::geography),
  ('W', 159966310, 'worship', 'Masjid Al Muawanah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Gang Amsar","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Al Muawanah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8050531, -6.3473574), 4326)::geography),
  ('W', 173068662, 'food', 'Old House Coffee Shop', '{"amenity":"cafe","internet_access":"yes","internet_access:fee":"yes","name":"Old House Coffee Shop","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8343438, -6.372352), 4326)::geography),
  ('W', 173068663, 'food', 'Sop Iga Betawi', '{"amenity":"fast_food","cuisine":"regional","internet_access":"no","internet_access:fee":"no","name":"Sop Iga Betawi"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8323766, -6.3712263), 4326)::geography),
  ('W', 173253569, 'food', 'KFC', '{"amenity":"fast_food","building":"yes","cuisine":"chicken","delivery":"yes","internet_access":"yes","internet_access:fee":"yes","name":"KFC","opening_hours":"24/7","outdoor_seating":"yes","smoking":"yes","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8328106, -6.374586), 4326)::geography),
  ('W', 173253571, 'worship', 'Masjid Gunadarma', '{"access:roof":"yes","amenity":"place_of_worship","building":"mosque","building:levels":"2","building:roof":"tile","building:structure":"reinforced_masonry","building:walls":"brick","name":"Masjid Gunadarma","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8326468, -6.3681951), 4326)::geography),
  ('W', 173952001, 'worship', 'Masjid Al Hidayah', '{"amenity":"place_of_worship","name":"Masjid Al Hidayah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8382182, -6.3683394), 4326)::geography),
  ('W', 173952018, 'worship', 'Masjid Miftahul Jannah', '{"amenity":"place_of_worship","name":"Masjid Miftahul Jannah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8363953, -6.3661177), 4326)::geography),
  ('W', 195927747, 'worship', 'Musholla Al-Hikmah FISIP UI', '{"amenity":"place_of_worship","building":"mosque","name":"Musholla Al-Hikmah FISIP UI","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8291945, -6.3626038), 4326)::geography),
  ('W', 195939156, 'worship', 'Mushola FIB', '{"amenity":"place_of_worship","building":"mosque","name":"Mushola FIB","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8266884, -6.3633851), 4326)::geography),
  ('W', 195939159, 'food', 'Pusat Studi Jepang', '{"amenity":"restaurant","building":"university","cuisine":"japanese","name":"Pusat Studi Jepang","name:ja":"ひろや","operator":"Hiro (ひろ)","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8280666, -6.3617149), 4326)::geography),
  ('W', 195968996, 'worship', 'Mushola FEB', '{"amenity":"place_of_worship","building":"mosque","name":"Mushola FEB","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8267101, -6.3608854), 4326)::geography),
  ('W', 211034648, 'worship', 'Baitul Barkah', '{"amenity":"place_of_worship","building":"mosque","name":"Baitul Barkah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8170791, -6.376589), 4326)::geography),
  ('W', 211161138, 'atm', 'Bank BRI Beji', '{"amenity":"bank","name":"Bank BRI Beji"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8137651, -6.3752973), 4326)::geography),
  ('W', 211349863, 'worship', 'Baytul Kariim', '{"amenity":"place_of_worship","building":"mosque","name":"Baytul Kariim","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8155856, -6.3790633), 4326)::geography),
  ('W', 240005867, 'worship', 'Baitussalam', '{"amenity":"place_of_worship","building":"mosque","name":"Baitussalam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8168047, -6.375359), 4326)::geography),
  ('W', 270354721, 'worship', 'Mesjid', '{"amenity":"place_of_worship","building":"mosque","denomination":"sunni","name":"Mesjid","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8154634, -6.3634153), 4326)::geography),
  ('W', 270356070, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","building":"commercial","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.815737, -6.3636258), 4326)::geography),
  ('W', 284785726, 'food', 'Mie Ayam Berkat', '{"addr:street":"Jalan Margonda Raya","amenity":"restaurant","building":"yes","name":"Mie Ayam Berkat"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8335997, -6.360859), 4326)::geography),
  ('W', 284785732, 'food', 'Nasi Pecel Mbak Ira', '{"addr:city":"Depok","addr:street":"Jalan Raya Margonda","amenity":"restaurant","building":"yes","cuisine":"indonesian;chicken","diet:halal":"yes","name":"Nasi Pecel Mbak Ira"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833116, -6.360773), 4326)::geography),
  ('W', 284785764, 'food', 'Milan Cafe', '{"amenity":"cafe","building":"yes","name":"Milan Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332163, -6.3594132), 4326)::geography),
  ('W', 284785794, 'food', 'Ayam Penyet WSG', '{"amenity":"restaurant","building":"yes","name":"Ayam Penyet WSG"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8323124, -6.3592911), 4326)::geography),
  ('W', 284785844, 'food', 'Martabak Pizza Orins Margonda', '{"amenity":"restaurant","building":"yes","name":"Martabak Pizza Orins Margonda"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8330975, -6.3591261), 4326)::geography),
  ('W', 284787020, 'food', 'Starbucks - Margonda Raya', '{"amenity":"cafe","building":"yes","name":"Starbucks - Margonda Raya"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332772, -6.3638477), 4326)::geography),
  ('W', 284787021, 'worship', 'Masjid Al-Khairatul Islam', '{"amenity":"place_of_worship","building":"mosque","name":"Masjid Al-Khairatul Islam","religion":"muslim","wheelchair":"limited"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8348921, -6.363121), 4326)::geography),
  ('W', 284787038, 'food', 'MUG Cafee', '{"amenity":"cafe","building":"yes","name":"MUG Cafee"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338242, -6.3620244), 4326)::geography),
  ('W', 284787043, 'food', 'Warteg Bahari Margonda', '{"amenity":"restaurant","building":"house","name":"Warteg Bahari Margonda"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338477, -6.3631811), 4326)::geography),
  ('W', 291853422, 'food', 'Roti Bakar Edy', '{"amenity":"fast_food","building":"yes","name":"Roti Bakar Edy"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8329825, -6.371307), 4326)::geography),
  ('W', 291853427, 'food', 'lawson', '{"amenity":"restaurant","building":"yes","name":"lawson"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8326283, -6.374999), 4326)::geography),
  ('W', 291853454, 'convenience', 'Pertamina', '{"addr:city":"Depok","addr:housenumber":"346","addr:street":"Jalan Raya Margonda","amenity":"fuel","atm":"yes","brand":"Pertamina","brand:wikidata":"Q1641044","brand:wikipedia":"en:Pertamina","building":"roof","cash_withdrawal":"no","fuel:diesel":"yes","fuel:octane_100":"no","fuel:octane_88":"no","fuel:octane_90":"yes","fuel:octane_92":"yes","fuel:octane_98":"yes","name":"Pertamina","operator":"Pertamina","shop":"convenience","shop:name":"\"Bright\""}'::jsonb, ST_SetSRID(ST_MakePoint(106.8329015, -6.3741391), 4326)::geography),
  ('W', 291853461, 'atm', 'BNI', '{"amenity":"atm","brand":"BNI","brand:wikidata":"Q2882611","building":"yes","name":"BNI","official_name":"Bank Negara Indonesia","operator":"BNI","operator:wikidata":"Q2882611"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8326148, -6.3742339), 4326)::geography),
  ('W', 291854924, 'food', 'Sop Duren Lodaya', '{"amenity":"restaurant","building":"yes","name":"Sop Duren Lodaya"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8320312, -6.3774228), 4326)::geography),
  ('W', 293134291, 'worship', 'Masjid Ar-Rahman', '{"amenity":"place_of_worship","name":"Masjid Ar-Rahman","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8065329, -6.3753512), 4326)::geography),
  ('W', 294118778, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8274824, -6.3760063), 4326)::geography),
  ('W', 300523353, 'food', 'Esteh Indonesia - Pondok Cina', '{"amenity":"restaurant","building":"yes","name":"Esteh Indonesia - Pondok Cina"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8333583, -6.3700595), 4326)::geography),
  ('W', 300601937, 'convenience', 'Indomaret', '{"access:roof":"no","addr:full":"Jalan Palakali","air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","building":"retail","building:levels":"1","building:roof":"concrete","building:structure":"unreinforced_masonry","building:walls":"brick","capacity:persons":"50","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8196837, -6.3679361), 4326)::geography),
  ('W', 300601940, 'food', 'Warteg', '{"amenity":"restaurant","building":"yes","cuisine":"asian","name":"Warteg"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8199709, -6.3685778), 4326)::geography),
  ('W', 300652644, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.835727, -6.3792175), 4326)::geography),
  ('W', 300664718, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8319191, -6.3599254), 4326)::geography),
  ('W', 300674707, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8352379, -6.3602012), 4326)::geography),
  ('W', 300674718, 'marketplace', 'Warung Kinasih', '{"amenity":"marketplace","building":"yes","name":"Warung Kinasih"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8359739, -6.3641742), 4326)::geography),
  ('W', 300725248, 'worship', 'Masjid Jami Mardhotillah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Kampung Sawah No. 1","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Jami Mardhotillah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8335789, -6.3541564), 4326)::geography),
  ('W', 300725319, 'worship', 'Mushollah Nurul Iman', '{"alt_name":"Musholla Nurul Iman","amenity":"place_of_worship","building":"mosque","name":"Mushollah Nurul Iman","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8350135, -6.3545718), 4326)::geography),
  ('W', 300731118, 'food', 'Happy Juice Stasiun Pondok Cina', '{"amenity":"restaurant","building":"yes","name":"Happy Juice Stasiun Pondok Cina"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8334727, -6.3697461), 4326)::geography),
  ('W', 300734979, 'pharmacy', 'Rumah Sakit Sofa Marwa', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Bina Warga","amenity":"hospital","backup_generator":"no","building":"hospital","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Rumah Sakit Sofa Marwa","operator:type":"private","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8199834, -6.3555381), 4326)::geography),
  ('W', 300737154, 'food', 'Rumah Kabeda', '{"amenity":"restaurant","building":"yes","internet_access":"no","name":"Rumah Kabeda","outdoor_seating":"yes","smoking":"outside","stars":"1","takeaway":"yes","wheelchair":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8154095, -6.3586465), 4326)::geography),
  ('W', 300742555, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","building":"yes","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.842742, -6.3552455), 4326)::geography),
  ('W', 300742586, 'food', 'Tsuka Ramen', '{"amenity":"restaurant","building":"yes","cuisine":"japanese;asian;noodle;ramen","name":"Tsuka Ramen"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8426142, -6.3550944), 4326)::geography),
  ('W', 301066207, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8086406, -6.3678509), 4326)::geography),
  ('W', 301068070, 'food', 'Bubur Ayam Barito', '{"amenity":"restaurant","building":"yes","name":"Bubur Ayam Barito"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8335208, -6.3647347), 4326)::geography),
  ('W', 301068112, 'food', 'Bamboo Din Sum', '{"amenity":"restaurant","building":"yes","name":"Bamboo Din Sum"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338478, -6.3674546), 4326)::geography),
  ('W', 301068130, 'convenience', 'Shell Shop', '{"brand":"Shell Shop","brand:wikidata":"Q110716465","building":"yes","name":"Shell Shop","operator":"Shell","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8334875, -6.3648692), 4326)::geography),
  ('W', 301073645, 'worship', 'Masjid Al Hidayah', '{"amenity":"place_of_worship","building":"mosque","name":"Masjid Al Hidayah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8004617, -6.3722562), 4326)::geography),
  ('W', 304553332, 'food', 'Warung Makan Restu Ibu', '{"amenity":"restaurant","building":"yes","name":"Warung Makan Restu Ibu"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8349058, -6.3682717), 4326)::geography),
  ('W', 305259330, 'food', 'Kantin Ibu Sugeng', '{"amenity":"restaurant","building":"yes","capacity":"50","cuisine":"regional","name":"Kantin Ibu Sugeng","opening_hours":"08:00-19:00","smoking":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8288139, -6.3707184), 4326)::geography),
  ('W', 305883697, 'pharmacy', 'Puskesmas Beji', '{"amenity":"clinic","building":"yes","healthcare":"clinic","name":"Puskesmas Beji","operator":"Ministry of Health","operator:en":"Ministry of Health","operator:id":"Kementerian Kesehatan","operator:wikidata":"Q12490745"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8216431, -6.3761827), 4326)::geography),
  ('W', 306992495, 'food', 'New Kantin FKM', '{"amenity":"restaurant","building":"yes","capacity":"200","name":"New Kantin FKM","smoking":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8295231, -6.3709003), 4326)::geography),
  ('W', 307996035, 'worship', 'Masjid Bilal ISTN', '{"access:roof":"yes","addr:city":"DKI Jakarta","addr:full":"Jalan Srengseng Sawah","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Bilal ISTN","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8139275, -6.354085), 4326)::geography),
  ('W', 308192336, 'food', 'Warteg Fajar', '{"amenity":"restaurant","building":"yes","name":"Warteg Fajar"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8227826, -6.3578634), 4326)::geography),
  ('W', 308201147, 'worship', 'Musholla Baqiyatussholihah', '{"addr:city":"Depok","addr:neighbourhood":"RT 01/04","addr:postcode":"16425","addr:street":"Jalan Bacang","amenity":"place_of_worship","building":"mosque","denomination":"sunni","name":"Musholla Baqiyatussholihah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8218208, -6.3616672), 4326)::geography),
  ('W', 308392084, 'worship', 'Masjid Jami Al Hidayah', '{"amenity":"place_of_worship","building":"mosque","name":"Masjid Jami Al Hidayah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8280964, -6.3790809), 4326)::geography),
  ('W', 308393341, 'convenience', 'Mini Market', '{"building":"yes","name":"Mini Market","operator":"Alfamart","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8246315, -6.3753806), 4326)::geography),
  ('W', 308404637, 'worship', 'Masjid Jami Al Maghfiroh', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Jami Al Maghfiroh","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8035795, -6.3638895), 4326)::geography),
  ('W', 308408754, 'atm', 'Bank Jatim', '{"amenity":"bank","building":"yes","name":"Bank Jatim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833707, -6.3659481), 4326)::geography),
  ('W', 308408844, 'food', 'What''s Up Cafe', '{"amenity":"cafe","building":"yes","name":"What''s Up Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8337937, -6.3661586), 4326)::geography),
  ('W', 308408848, 'food', 'Ayam Bakar Christina', '{"amenity":"restaurant","building":"yes","name":"Ayam Bakar Christina"}'::jsonb, ST_SetSRID(ST_MakePoint(106.834281, -6.3674817), 4326)::geography),
  ('W', 308408902, 'food', 'What''s Up Cafe', '{"amenity":"cafe","building":"yes","name":"What''s Up Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833769, -6.3660961), 4326)::geography),
  ('W', 308411241, 'food', 'Soerabi Bandung Enhai', '{"amenity":"restaurant","building":"yes","name":"Soerabi Bandung Enhai"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8336439, -6.3645158), 4326)::geography),
  ('W', 308489825, 'food', 'Kedai Kopi Kimung', '{"amenity":"cafe","building":"yes","name":"Kedai Kopi Kimung"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8338141, -6.3668454), 4326)::geography),
  ('W', 309249720, 'food', 'Mile 32', '{"amenity":"cafe","building":"yes","name":"Mile 32"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8412658, -6.3546643), 4326)::geography),
  ('W', 309441782, 'food', 'Kopi Kenangan', '{"amenity":"cafe","branch":"x Chigo x Flip","brand":"Kopi Kenangan","brand:wikidata":"Q97221992","building":"yes","cuisine":"coffee_shop","diet:halal":"only","name":"Kopi Kenangan","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8419275, -6.3550589), 4326)::geography),
  ('W', 309441787, 'supermarket', 'alfa x', '{"building":"yes","name":"alfa x","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8417001, -6.3550841), 4326)::geography),
  ('W', 309445612, 'food', 'Warung Goceng', '{"amenity":"restaurant","building":"yes","cuisine":"burger;chicken;asian;indonesian;pasta;hot_dog;juice","name":"Warung Goceng"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8415644, -6.3602183), 4326)::geography),
  ('W', 309445787, 'convenience', 'Suyamto', '{"building":"retail","name":"Suyamto","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8398024, -6.3605946), 4326)::geography),
  ('W', 310001917, 'worship', 'Masjid Jami'' Al Bayyinah', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Jami'' Al Bayyinah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8027347, -6.3765874), 4326)::geography),
  ('W', 357291861, 'food', 'Kantin Vokasi UI', '{"amenity":"restaurant","building":"university","cuisine":"burger;pizza","name":"Kantin Vokasi UI"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8218007, -6.3688277), 4326)::geography),
  ('W', 436494529, 'convenience', 'Indomaret', '{"air_conditioning":"yes","brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"id:Indomaret","building":"yes","name":"Indomaret","name:en":"Indomaret","name:id":"Indomaret","name:ja":"インドマレット","operator":"PT. Indomarco Prismatama","shop":"convenience","toilets":"yes","toilets:access":"permissive","website":"https://www.klikindomaret.com"}'::jsonb, ST_SetSRID(ST_MakePoint(106.825736, -6.3689281), 4326)::geography),
  ('W', 477979105, 'convenience', 'Alfamidi', '{"brand":"Alfamidi","brand:wikidata":"Q12471462","building":"yes","name":"Alfamidi","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8426771, -6.3556889), 4326)::geography),
  ('W', 477979182, 'food', 'Golden Lamian', '{"amenity":"restaurant","building":"yes","cuisine":"ramen;noodle;chinese","name":"Golden Lamian"}'::jsonb, ST_SetSRID(ST_MakePoint(106.842557, -6.3547489), 4326)::geography),
  ('W', 478011822, 'food', 'Richeese Factory', '{"amenity":"fast_food","building":"yes","cuisine":"chicken","name":"Richeese Factory"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8439258, -6.3546442), 4326)::geography),
  ('W', 478746663, 'food', 'bakalkopi', '{"amenity":"cafe","building":"yes","name":"bakalkopi"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8425484, -6.3618347), 4326)::geography),
  ('W', 478761564, 'worship', 'Masjid Nurul Fikri', '{"addr:city":"Depok","addr:street":"Jalan Situ Indah","amenity":"place_of_worship","building":"yes","building:levels":"2","description":"Masjid Nurul Fikri Kelapa Dua Depok","name":"Masjid Nurul Fikri"}'::jsonb, ST_SetSRID(ST_MakePoint(106.844144, -6.3622359), 4326)::geography),
  ('W', 478761583, 'convenience', 'Alfamidi', '{"brand":"Alfamidi","brand:wikidata":"Q12471462","building":"yes","name":"Alfamidi","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8431738, -6.3617766), 4326)::geography),
  ('W', 478763557, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8429504, -6.3651058), 4326)::geography),
  ('W', 478763773, 'worship', 'Masjid Jami Nurul Huda', '{"amenity":"place_of_worship","building":"mosque","name":"Masjid Jami Nurul Huda","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.842377, -6.368374), 4326)::geography),
  ('W', 479404420, 'food', 'Sadel Street Coffee', '{"amenity":"cafe","building":"yes","name":"Sadel Street Coffee"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8432309, -6.3602562), 4326)::geography),
  ('W', 484154875, 'worship', 'Musholla Al Falah', '{"amenity":"place_of_worship","building":"mosque","name":"Musholla Al Falah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8023973, -6.3429444), 4326)::geography),
  ('W', 486070610, 'food', 'bakmi buncit', '{"amenity":"restaurant","building":"yes","cuisine":"chinesse_food","name":"bakmi buncit","takeaway":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8325469, -6.3732063), 4326)::geography),
  ('W', 486500344, 'food', 'Martabak Bintang', '{"amenity":"cafe","building":"yes","name":"Martabak Bintang"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8332377, -6.3595764), 4326)::geography),
  ('W', 496587035, 'worship', 'Masjid Jami Nurul Muhklis', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Srengseng Sawah","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Jami Nurul Muhklis","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8206177, -6.3483196), 4326)::geography),
  ('W', 496587143, 'worship', 'Masjid Al Baroqah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Masjid Al Baroqah","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Al Baroqah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8244585, -6.3491773), 4326)::geography),
  ('W', 497071015, 'pharmacy', 'Klinik Pratama Desa Putera', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Desa Putera","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","name":"Klinik Pratama Desa Putera","operator:type":"private","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8275472, -6.3402871), 4326)::geography),
  ('W', 497548472, 'pharmacy', 'Posyandu Delima I', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Masjid","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ground","building:levels":"1","building:roof":"asbestos","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Posyandu Delima I","operator:type":"government","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.835134, -6.3414449), 4326)::geography),
  ('W', 497548992, 'worship', 'Gereja Pouk', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Mangga I No.19, RT.12/RW.5","amenity":"place_of_worship","backup_generator":"no","building":"church","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Gereja Pouk","religion":"christian","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8313827, -6.340239), 4326)::geography),
  ('W', 497549001, 'worship', 'Pura Agung Widhya Mandala', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Mangga No. 1 RT 01 / RW 19","amenity":"place_of_worship","backup_generator":"no","building":"temple","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Pura Agung Widhya Mandala","religion":"hindu","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8312829, -6.3403832), 4326)::geography),
  ('W', 497549064, 'worship', 'Masjid At Taqwa', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Lenteng Agung","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid At Taqwa","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833005, -6.3422182), 4326)::geography),
  ('W', 497549065, 'atm', 'BNI', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Lenteng Agung","amenity":"bank","atm":"yes","backup_generator":"no","building":"bank","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"BNI","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8331087, -6.3415741), 4326)::geography),
  ('W', 498793319, 'worship', 'Masjid Nurul Iman', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Srengseng Sawah","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Nurul Iman","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8282138, -6.3444347), 4326)::geography),
  ('W', 499800562, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8353317, -6.3451606), 4326)::geography),
  ('W', 499800563, 'worship', 'Masjid Nurul Jannah', '{"access:roof":"no","addr:city":"DKI Jakarta","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Masjid Nurul Jannah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8349715, -6.3464504), 4326)::geography),
  ('W', 499800568, 'worship', 'Masjid At Taqwa', '{"access:roof":"yes","addr:city":"DKI Jakarta","addr:full":"Jalan Srengseng Sawah No. 1","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid At Taqwa","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8097522, -6.3567494), 4326)::geography),
  ('W', 499800570, 'worship', 'Masjid Jami Al Huda', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Srengseng Sawah","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Jami Al Huda","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8196601, -6.3524253), 4326)::geography),
  ('W', 499800588, 'worship', 'Masjid Nurul Irfan', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan HM Nalim RT 001 / RW 08","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Nurul Irfan","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.814225, -6.3504431), 4326)::geography),
  ('W', 499800650, 'worship', 'Huria Kristen Batak Protestan', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Amalia","amenity":"place_of_worship","backup_generator":"no","building":"church","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Huria Kristen Batak Protestan","religion":"christian","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83195, -6.3441128), 4326)::geography),
  ('W', 499800677, 'worship', 'Masjid Jami Nurul Iman', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Wika RT. 04 / RW. 06","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Jami Nurul Iman","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8247983, -6.3435997), 4326)::geography),
  ('W', 499800732, 'pharmacy', 'Puskesmas Kecamatan Jagakarsa', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Batu RT. 013 / RW. 09","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"100-250","healthcare":"clinic","name":"Puskesmas Kecamatan Jagakarsa","operator":"Ministry of Health","operator:en":"Ministry of Health","operator:id":"Kementerian Kesehatan","operator:type":"government","operator:wikidata":"Q12490745","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8141337, -6.3520263), 4326)::geography),
  ('W', 499800769, 'worship', 'Masjid Al Mu''Aawanah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Masjid Al Mu''Aawanah RT. 008 / RW. 07","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Al Mu''Aawanah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8180687, -6.3555959), 4326)::geography),
  ('W', 500210500, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8430858, -6.3415613), 4326)::geography),
  ('W', 500465944, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8441567, -6.3438064), 4326)::geography),
  ('W', 501421820, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8466987, -6.3471851), 4326)::geography),
  ('W', 502248119, 'worship', 'Raudhatul Jannah', '{"amenity":"place_of_worship","building":"yes","name":"Raudhatul Jannah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8201202, -6.3436382), 4326)::geography),
  ('W', 502390990, 'pharmacy', 'Puskesmas Lenteng Agung II', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Subur","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Puskesmas Lenteng Agung II","operator:type":"government","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8376223, -6.3406921), 4326)::geography),
  ('W', 504492047, 'food', 'Warteg Ibu Lina', '{"amenity":"restaurant","building":"yes","cuisine":"indonesian","name":"Warteg Ibu Lina"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8431971, -6.360631), 4326)::geography),
  ('W', 504492050, 'supermarket', 'Prima Freshmart', '{"building":"yes","name":"Prima Freshmart","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8431701, -6.3611637), 4326)::geography),
  ('W', 504715410, 'pharmacy', 'Posyandu Cempedak', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Dul Djaim","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Posyandu Cempedak","operator:type":"government","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.806788, -6.3609555), 4326)::geography),
  ('W', 504715480, 'worship', 'Masjid Daarul Rahman', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Moh Kahfi II","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Masjid Daarul Rahman","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8056974, -6.3589032), 4326)::geography),
  ('W', 506895844, 'worship', 'Masjid Al Barkah', '{"access:roof":"yes","addr:city":"DKI Jakarta","addr:full":"Jalan Wahid 2","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Al Barkah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8135368, -6.3425657), 4326)::geography),
  ('W', 506895845, 'pharmacy', 'RS Ibu dan Anak Andhika', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Warung Sila","amenity":"hospital","backup_generator":"no","building":"hospital","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"100-250","healthcare":"hospital","name":"RS Ibu dan Anak Andhika","operator:type":"private","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8143056, -6.3442499), 4326)::geography),
  ('W', 506895999, 'pharmacy', 'Posyandu Nangka RW 05', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Kemenyan Indah","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","healthcare":"clinic","name":"Posyandu Nangka RW 05","operator":"Posyandu","operator:type":"private","operator:wikidata":"Q12506263","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8066372, -6.3402283), 4326)::geography),
  ('W', 506896037, 'pharmacy', 'Posyandu Apel', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Kopo","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","healthcare":"clinic","name":"Posyandu Apel","operator":"Posyandu","operator:type":"private","operator:wikidata":"Q12506263","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8047833, -6.3435937), 4326)::geography),
  ('W', 506896139, 'worship', 'Masjid Jami Al Munawaroh', '{"access:roof":"yes","addr:city":"DKI Jakarta","addr:full":"Jalan Munawaroh","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Jami Al Munawaroh","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8099827, -6.3447766), 4326)::geography),
  ('W', 506896171, 'worship', 'Masjid Daarul Iman', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Muhammad Kahfi I No. 48A","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Daarul Iman","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8046786, -6.3422399), 4326)::geography),
  ('W', 509796688, 'worship', 'Masjid Nurul Hidayah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Moh Kahfi I RT. 003 / RW.02","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","name":"Masjid Nurul Hidayah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8028238, -6.3593246), 4326)::geography),
  ('W', 510078829, 'pharmacy', 'Klinik Nurunnisa', '{"amenity":"clinic","building":"yes","healthcare":"clinic","name":"Klinik Nurunnisa"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8354655, -6.3607763), 4326)::geography),
  ('W', 510145228, 'pharmacy', 'Klinik Satelit UI', '{"amenity":"clinic","building":"clinic","healthcare":"clinic","name":"Klinik Satelit UI"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8226055, -6.3611233), 4326)::geography),
  ('W', 510603822, 'food', 'Gubuk Mang Engking', '{"amenity":"restaurant","name":"Gubuk Mang Engking"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8313124, -6.3493971), 4326)::geography),
  ('W', 511013803, 'pharmacy', 'Posyandu Belimbing', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Damai","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","healthcare":"clinic","name":"Posyandu Belimbing","operator":"Posyandu","operator:type":"private","operator:wikidata":"Q12506263","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8017741, -6.3529946), 4326)::geography),
  ('W', 511013855, 'pharmacy', 'Puskesman Keliling', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Warung Sila Cipedak","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","healthcare":"clinic","name":"Puskesman Keliling","operator:type":"government","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.810434, -6.3505514), 4326)::geography),
  ('W', 511013859, 'marketplace', 'Pasar Timbul Ciganjur', '{"addr:full":"Jalan Moh Kahfi I No. 84","amenity":"marketplace","name":"Pasar Timbul Ciganjur","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8014458, -6.3500468), 4326)::geography),
  ('W', 511013864, 'worship', 'Masjid Al Muhajirin', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Purwa II","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Al Muhajirin","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8036312, -6.3550332), 4326)::geography),
  ('W', 511013871, 'worship', 'Masjid Jami Asy Syakirin', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Moh Kahfi I","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","name":"Masjid Jami Asy Syakirin","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.801407, -6.3510536), 4326)::geography),
  ('W', 511013873, 'pharmacy', 'Posyandu Strawberi', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Swadaya","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Posyandu Strawberi","operator:type":"government","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8003966, -6.354394), 4326)::geography),
  ('W', 511013874, 'worship', 'Masjid At Taubah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Timbul IV C","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid At Taubah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8050578, -6.3526832), 4326)::geography),
  ('W', 511013886, 'worship', 'Masjid Jami Abu Hurairah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Radio","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tin","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Jami Abu Hurairah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8124187, -6.3486688), 4326)::geography),
  ('W', 511013887, 'worship', 'Masjid Al Ikhlas', '{"access:roof":"yes","addr:city":"DKI Jakarta","addr:full":"Jalan H. Damong","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Al Ikhlas","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.7999734, -6.35304), 4326)::geography),
  ('W', 511013888, 'worship', 'Masjid Tontowi Syafei', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Kampus Akademi Pemimpin Perusahaan","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","name":"Masjid Tontowi Syafei","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8097065, -6.349607), 4326)::geography),
  ('W', 511013898, 'pharmacy', 'Posyandu Alkesa', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Muamallah VI","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","healthcare":"clinic","name":"Posyandu Alkesa","operator":"Posyandu","operator:type":"private","operator:wikidata":"Q12506263","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8074372, -6.3536267), 4326)::geography),
  ('W', 511013937, 'worship', 'Masjid Ruhul Jihad', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Warung Sila","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Ruhul Jihad","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8125123, -6.3441614), 4326)::geography),
  ('W', 511014018, 'worship', 'Masjid Jami Mahallul Ghufron', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Warung Sila RT. 002 / RW. 04","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"50-100","evacuation_center":"no","name":"Masjid Jami Mahallul Ghufron","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8080852, -6.3452149), 4326)::geography),
  ('W', 511014019, 'worship', 'Masjid Istiqomah', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Moh Kahfi II Gang Bek Misar RT. 006 / RW. 03","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"tile","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","evacuation_center":"no","name":"Masjid Istiqomah","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8077058, -6.3581389), 4326)::geography),
  ('W', 511014020, 'pharmacy', 'RS Ali Sibroh Malisi', '{"addr:city":"DKI Jakarta","addr:full":"Jalan Warung Sila No. 1","amenity":"hospital","healthcare":"hospital","name":"RS Ali Sibroh Malisi","operator:type":"private","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8139234, -6.344684), 4326)::geography),
  ('W', 511604934, 'worship', 'Masjid Jami Al Makmur', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Moh Kahfi I","amenity":"place_of_worship","backup_generator":"no","building":"mosque","building:condition":"good","building:floor":"ceramics","building:levels":"2","building:roof":"concrete","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"100-250","evacuation_center":"no","name":"Masjid Jami Al Makmur","religion":"muslim","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.803233, -6.3454879), 4326)::geography),
  ('W', 513522065, 'pharmacy', 'Posyandu Melon I', '{"access:roof":"no","addr:city":"DKI Jakarta","addr:full":"Jalan Masjid","amenity":"clinic","backup_generator":"no","building":"clinic","building:condition":"good","building:floor":"ceramics","building:levels":"1","building:roof":"asbestos","building:structure":"confined_masonry","building:walls":"brick","capacity:persons":"<50","name":"Posyandu Melon I","operator:type":"government","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8363274, -6.3415438), 4326)::geography),
  ('W', 523566271, 'food', 'Sego Tempong Negoro', '{"amenity":"restaurant","building":"yes","name":"Sego Tempong Negoro"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8010972, -6.3567863), 4326)::geography),
  ('W', 523566272, 'convenience', 'Indomaret M. Kahfi 1 No.69', '{"building":"yes","name":"Indomaret M. Kahfi 1 No.69","not:brand:wikidata":"Q4262825","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8010867, -6.3569059), 4326)::geography),
  ('W', 523566304, 'worship', 'Masjid Jami Arriyadut Taqwa', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Jami Arriyadut Taqwa","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8008219, -6.3563846), 4326)::geography),
  ('W', 556390167, 'worship', 'Masjid Al Fitrah', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Al Fitrah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8500392, -6.3743667), 4326)::geography),
  ('W', 641586613, 'worship', 'Masjid Al Mujahidin', '{"addr:city":"Depok","addr:postcode":"16425","addr:street":"K.H Ahmad Dahlan","amenity":"place_of_worship","building":"yes","name":"Masjid Al Mujahidin","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8151822, -6.3660406), 4326)::geography),
  ('W', 782913320, 'pharmacy', 'RS Ibu Dan Anak Citra Arafiq', '{"addr:city":"Depok","addr:full":"Jalan Perindustrian No.53, Bakti Jaya, Sukmajaya, Kota Depok, Jawa Barat 16418","amenity":"hospital","building":"hospital","name":"RS Ibu Dan Anak Citra Arafiq","operator:type":"private","website":"https://rscitraarafiq.com/"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8438704, -6.3728844), 4326)::geography),
  ('W', 783790968, 'pharmacy', 'Rumah Sakit Bhayangkara Brimob', '{"addr:city":"Kota Depok","addr:district":"Cimanggis","addr:full":"Jalan Komjen.Pol.M.Jasin Kelapa Dua Raya, Pasir Gunung Selatan, Kecamatan Cimanggis","addr:postcode":"16451","addr:street":"Jalan Komjen Polisi M. Jasin","addr:subdistrict":"Pasir Gunung Selatan","amenity":"hospital","contact:email":"rsbhayangkarabrimob@gmail.com","contact:fax":"+62 21 87716060","contact:phone":"+62 21 87704691","name":"Rumah Sakit Bhayangkara Brimob","opening_hours":"24/7"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8494046, -6.3548344), 4326)::geography),
  ('W', 783804650, 'pharmacy', 'RS Ibu dan Anak Graha Permata Ibu', '{"addr:full":"Jalan KH. M. Usman No. 168 Kukusan - Beji Depok","amenity":"hospital","healthcare":"hospital","name":"RS Ibu dan Anak Graha Permata Ibu","operator:type":"private"}'::jsonb, ST_SetSRID(ST_MakePoint(106.814136, -6.3707489), 4326)::geography),
  ('W', 784970696, 'pharmacy', 'RSU Bunda Margonda', '{"addr:full":"Jalan Margonda Raya, Depok, Kec. Beji, Kota Depok, Jawa Barat 16424","amenity":"hospital","emergency":"yes","healthcare":"hospital","name":"RSU Bunda Margonda","operator:type":"private","website":"https://bunda.co.id/rumah-sakit-kami/rsu-bunda-margonda/"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8347555, -6.3653418), 4326)::geography),
  ('W', 816679674, 'worship', 'Masjid Darul Ilmi', '{"addr:city":"Depok, West Java","amenity":"place_of_worship","building":"construction","building:levels":"2","name":"Masjid Darul Ilmi","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8229707, -6.3717778), 4326)::geography),
  ('W', 852620312, 'worship', 'Musholla Fakultas Hukum UI', '{"amenity":"place_of_worship","building":"mosque","name":"Musholla Fakultas Hukum UI","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.830887, -6.3640768), 4326)::geography),
  ('W', 942613560, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8353757, -6.3762634), 4326)::geography),
  ('W', 945014844, 'convenience', 'Indomaret Pondok Duta', '{"brand":"Indomaret","brand:wikidata":"Q4262825","brand:wikipedia":"en:Indomaret","building":"yes","name":"Indomaret Pondok Duta","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8495362, -6.3696897), 4326)::geography),
  ('W', 992614049, 'convenience', 'Alfamidi', '{"brand":"Alfamidi","brand:wikidata":"Q12471462","building":"yes","name":"Alfamidi","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8032807, -6.3460722), 4326)::geography),
  ('W', 1090444046, 'worship', 'Musholla Izzatul Islam', '{"alt_name":"MII","amenity":"place_of_worship","building":"mosque","name":"Musholla Izzatul Islam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8276194, -6.3696834), 4326)::geography),
  ('W', 1150340889, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8328989, -6.3702984), 4326)::geography),
  ('W', 1163670876, 'food', 'Kopi Kenangan', '{"addr:city":"Depok","addr:street":"Jalan Raya Margonda","amenity":"cafe","building":"yes","cuisine":"coffee_shop","name":"Kopi Kenangan","wikidata":"Q97221992","wikipedia":"id:Kopi Kenangan"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8330769, -6.3741239), 4326)::geography),
  ('W', 1163670877, 'convenience', 'Bright Food and Drink', '{"addr:city":"Depok","addr:street":"Jalan Raya Margonda","building":"yes","name":"Bright Food and Drink","operator":"Pertamina","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833067, -6.3742514), 4326)::geography),
  ('W', 1193715302, 'food', 'Kantin Spirit', '{"alt_name":"Kantin Teknik","amenity":"food_court","building":"yes","name":"Kantin Spirit","operator":"Politeknik Negeri Jakarta","short_name":"KANTEK","smoking":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8242142, -6.3720387), 4326)::geography),
  ('W', 1228200873, 'food', 'Kedai Poncol', '{"amenity":"restaurant","building":"yes","name":"Kedai Poncol"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8416213, -6.3603687), 4326)::geography),
  ('W', 1242005032, 'pharmacy', 'Rumah Sakit Universitas Indonesia', '{"addr:city":"Depok","addr:full":"Jl. Prof Bahder Djohan, Kampus UI, Depok","addr:postcode":"16424","addr:street":"Jalan Prof. Bahder Djohan, Kampus UI","amenity":"hospital","contact:phone":"+6221-50829292","emergency":"yes","health_amenity:type":"emergency_department;laboratory","healthcare":"birthing_centre;doctor;hospital;laboratory;pharmacy","healthcare:speciality":"anaesthetics;cardiology;community;dermatology;gynaecology;neurology;neurosurgery;occupational;ophthalmology;orthodontics;orthopaedics;otolaryngology;paediatrics;pharmacology;physiatry;psychiatry;pulmonology;radiology;surgery;urology;vaccination","insurance:health":"private","name":"Rumah Sakit Universitas Indonesia","name:en":"University of Indonesia Hospital","opening_hours":"24/7","operational_status":"operational","operator":"Universitas Indonesia","short_name":"RSUI","url":"http://rs.ui.ac.id/","wheelchair":"yes"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8297733, -6.3730742), 4326)::geography),
  ('W', 1327455238, 'worship', 'Masjid Al-Farouq', '{"amenity":"place_of_worship","building":"mosque","name":"Masjid Al-Farouq","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.822522, -6.3587607), 4326)::geography),
  ('W', 1456015716, 'convenience', 'PNJ Mart', '{"addr:city":"Depok, West Java","building":"yes","name":"PNJ Mart","operator":"Politeknik Negeri Jakarta;Indogrosir","payment:cash":"yes","payment:contactless":"yes","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8238095, -6.3701992), 4326)::geography),
  ('W', 1456015717, 'convenience', 'PNJ Mart', '{"name":"PNJ Mart","operator":"Politeknik Negeri Jakarta;Indogrosir","payment:cash":"yes","payment:contactless":"yes","room":"yes","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8240834, -6.3719775), 4326)::geography),
  ('W', 1456027473, 'convenience', 'Kantin PUT', '{"building":"yes","name":"Kantin PUT","operator":"Poliktenik Negeri Jakarta","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8261121, -6.3731465), 4326)::geography),
  ('W', 1456027478, 'worship', 'Musholla Sipil', '{"amenity":"place_of_worship","building":"yes","name":"Musholla Sipil","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8257312, -6.3728265), 4326)::geography),
  ('W', 1456220197, 'food', 'Kantin Bawah', '{"amenity":"food_court","building":"yes","building:levels":"2","level":"0;-1","name":"Kantin Bawah","operator":"Politeknik Negeri Jakarta","short_name":"KAWAH","smoking":"no"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8228236, -6.3708161), 4326)::geography),
  ('W', 1458425176, 'food', 'Jus Antara', '{"amenity":"fast_food","building":"yes","cuisine":"juice","name":"Jus Antara"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8010578, -6.3570491), 4326)::geography),
  ('W', 1458986236, 'worship', 'Musala Fatahul Khoir', '{"addr:city":"DKI Jakarta","addr:district":"Jagakarsa","addr:housename":"Musala Fatahul Khoir","addr:postcode":"12630","addr:street":"Jalan Batu Belah I","addr:subdistrict":"Cipedak","amenity":"place_of_worship","building":"yes","denomination":"sunni","name":"Musala Fatahul Khoir","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8064976, -6.3490789), 4326)::geography),
  ('W', 1553811820, 'convenience', 'Shell Shop', '{"branch":"Shell SPBU Timbul","brand":"Shell Shop","brand:wikidata":"Q110716465","building":"yes","name":"Shell Shop","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8024439, -6.3487007), 4326)::geography),
  ('W', 1553814481, 'supermarket', 'Super Indo', '{"branch":"Ciganjur","brand":"Super Indo","brand:wikidata":"Q12518060","building":"yes","name":"Super Indo","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8010564, -6.3573071), 4326)::geography),
  ('N', 2087856605, 'atm', 'ATM Bank Nagari Psr. Bandar Buat', '{"amenity":"atm","name":"ATM Bank Nagari Psr. Bandar Buat","operator":"Bank Nagari","source":"survey"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4352196, -0.9488662), 4326)::geography),
  ('N', 2087860221, 'marketplace', 'Pasar Bandar Buat', '{"amenity":"marketplace","description":"Macet tiap Selasa dan Sabtu","name":"Pasar Bandar Buat"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4356589, -0.9492759), 4326)::geography),
  ('N', 2090616809, 'convenience', 'Kurnia Mart', '{"name":"Kurnia Mart","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(100.451121, -0.9476882), 4326)::geography),
  ('N', 3363107936, 'worship', 'Mushala FIB Unand', '{"amenity":"place_of_worship","name":"Mushala FIB Unand","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.461443, -0.9164436), 4326)::geography),
  ('N', 4052751820, 'supermarket', 'Citra Swalayan Sungai Balang', '{"addr:city":"Padang","addr:street":"Jl. Pasar Baru - Bandar Buat","name":"Citra Swalayan Sungai Balang","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4357537, -0.9454644), 4326)::geography),
  ('N', 4052799503, 'pharmacy', 'Puskesmas Lubuk Kilangan', '{"amenity":"clinic","name":"Puskesmas Lubuk Kilangan"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4452855, -0.9495094), 4326)::geography),
  ('N', 4052807989, 'worship', 'Mushalla Al-Ikhlas', '{"amenity":"place_of_worship","denomination":"sunni","name":"Mushalla Al-Ikhlas","place_of_worship":"musalla","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.450933, -0.9460678), 4326)::geography),
  ('N', 4054058596, 'worship', 'Masjid Nurul Huda Simpang Piai', '{"amenity":"place_of_worship","name":"Masjid Nurul Huda Simpang Piai","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4336626, -0.9379493), 4326)::geography),
  ('N', 4099151315, 'food', 'Queen Cafe', '{"amenity":"cafe","internet_access":"wlan","name":"Queen Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4617036, -0.9160585), 4326)::geography),
  ('N', 4883052491, 'worship', 'Masjid Istiqlal', '{"amenity":"place_of_worship","name":"Masjid Istiqlal","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.423369, -0.9312641), 4326)::geography),
  ('N', 4883052970, 'worship', 'Masjid Raya', '{"amenity":"place_of_worship","name":"Masjid Raya","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4257432, -0.9318492), 4326)::geography),
  ('N', 4883055478, 'worship', 'Masjid Ahlussunnah', '{"amenity":"place_of_worship","name":"Masjid Ahlussunnah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4307513, -0.9295475), 4326)::geography),
  ('N', 5239181879, 'supermarket', 'Supermaket zai maju', '{"name":"Supermaket zai maju","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4550747, -0.9137899), 4326)::geography),
  ('N', 13167710492, 'worship', 'Masjid Nurul Hiadayah', '{"amenity":"place_of_worship","name":"Masjid Nurul Hiadayah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4380279, -0.9204932), 4326)::geography),
  ('N', 13670759875, 'food', 'Kedai Ibuk 2', '{"addr:city":"Padang","addr:postcode":"25163","amenity":"cafe","cuisine":"regional","internet_access":"no","name":"Kedai Ibuk 2"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4647619, -0.912453), 4326)::geography),
  ('W', 198688769, 'worship', 'Masjid Baitussalam', '{"amenity":"place_of_worship","name":"Masjid Baitussalam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4518001, -0.9492486), 4326)::geography),
  ('W', 198871565, 'worship', 'Musallah Darussalam', '{"amenity":"place_of_worship","name":"Musallah Darussalam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4568429, -0.9298693), 4326)::geography),
  ('W', 319639528, 'worship', 'Masjid al-Muttaqin Muhammadiyah Pasar Baru', '{"amenity":"place_of_worship","building":"yes","name":"Masjid al-Muttaqin Muhammadiyah Pasar Baru","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4293366, -0.93005), 4326)::geography),
  ('W', 450934623, 'worship', 'Masjid Darul Ulum', '{"addr:full":"Komplek Perumahan Unand RW 001","amenity":"place_of_worship","building":"yes","name":"Masjid Darul Ulum","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4568638, -0.9418949), 4326)::geography),
  ('W', 452206466, 'pharmacy', 'Pustu Ulu Gadut', '{"addr:full":"Jl. Raya Ulu Gadut","amenity":"clinic","building":"yes","name":"Pustu Ulu Gadut","operator:type":"government"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4612405, -0.9431284), 4326)::geography),
  ('W', 452209147, 'worship', 'Masjid Almarhamah', '{"addr:full":"di belakang RSJ","amenity":"place_of_worship","building":"yes","name":"Masjid Almarhamah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4592129, -0.9414046), 4326)::geography),
  ('W', 455193131, 'worship', 'Masjid Assalam', '{"addr:full":"Jl. Komplek Dangau Teduh","amenity":"place_of_worship","building":"yes","name":"Masjid Assalam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4210399, -0.9496213), 4326)::geography),
  ('W', 455448376, 'worship', 'Masjid Istiqomah', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Istiqomah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4291413, -0.9499951), 4326)::geography),
  ('W', 455448399, 'worship', 'Mushollah Baitullah', '{"amenity":"place_of_worship","building":"yes","name":"Mushollah Baitullah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4301196, -0.9488564), 4326)::geography),
  ('W', 496551746, 'worship', 'Masjid Raya Pasar Baru', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Raya Pasar Baru","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4278132, -0.9284621), 4326)::geography),
  ('W', 520243544, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4314154, -0.9325025), 4326)::geography),
  ('W', 521406307, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4236887, -0.9420306), 4326)::geography),
  ('W', 521406403, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4276701, -0.9406881), 4326)::geography),
  ('W', 521484049, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4308838, -0.9391449), 4326)::geography),
  ('W', 521720945, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4312343, -0.9413335), 4326)::geography),
  ('W', 523658340, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4592755, -0.9221738), 4326)::geography),
  ('W', 523658409, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4627053, -0.9202272), 4326)::geography),
  ('W', 537315058, 'worship', 'Masjid Baitussalam', '{"addr:full":"RT 02 RW 10 Bandar Buat","amenity":"place_of_worship","building":"yes","name":"Masjid Baitussalam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4518021, -0.9492254), 4326)::geography),
  ('W', 537315065, 'worship', 'Masjid Al Hidayah', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Al Hidayah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4459913, -0.9471537), 4326)::geography),
  ('W', 537315074, 'pharmacy', 'Puskesmas Lubuk Kilangan', '{"amenity":"clinic","building":"yes","name":"Puskesmas Lubuk Kilangan"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4452742, -0.9495963), 4326)::geography),
  ('W', 537315077, 'worship', 'Masjid Al Kausar', '{"addr:full":"RT 01 RW 05 Bandar Buat","amenity":"place_of_worship","building":"yes","name":"Masjid Al Kausar","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4444966, -0.9497807), 4326)::geography),
  ('W', 537315079, 'worship', 'Masjid Mutatohirin', '{"addr:full":"RT 03 RW 04 Bandar Buat","amenity":"place_of_worship","building":"yes","name":"Masjid Mutatohirin","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4389004, -0.9487922), 4326)::geography),
  ('W', 537315082, 'worship', 'Masjid Ihsan Muhamadiyah', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Ihsan Muhamadiyah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4397556, -0.9496274), 4326)::geography),
  ('W', 537315093, 'worship', 'Masjid Ikhlas', '{"addr:full":"RT 02 RW 03 Bandar Buat","amenity":"place_of_worship","building":"yes","name":"Masjid Ikhlas","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4358349, -0.9484436), 4326)::geography),
  ('W', 537315096, 'marketplace', 'Pasar Bandar Buat', '{"addr:full":"RT 02 RW 03 Bandar Buat","amenity":"marketplace","building":"yes","name":"Pasar Bandar Buat"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4355174, -0.9491287), 4326)::geography),
  ('W', 541852284, 'supermarket', 'rumah zai', '{"name":"rumah zai","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4547916, -0.9136446), 4326)::geography),
  ('W', 542042075, 'atm', 'BNI 46', '{"addr:full":"Jalan Padang Indarung","amenity":"bank","building":"yes","building:levels":"2","building:roof":"concrete","building:structure":"plastered","building:walls":"brick","name":"BNI 46"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4327142, -0.9493999), 4326)::geography),
  ('W', 731846598, 'pharmacy', 'Klinik Kesehatan Unand', '{"amenity":"clinic","building":"yes","healthcare":"clinic","name":"Klinik Kesehatan Unand"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4553528, -0.9198088), 4326)::geography),
  ('W', 1029527817, 'pharmacy', 'Klinik Pratama Medika Andalas', '{"amenity":"clinic","healthcare":"clinic","name":"Klinik Pratama Medika Andalas"}'::jsonb, ST_SetSRID(ST_MakePoint(100.455231, -0.919854), 4326)::geography),
  ('W', 1029529953, 'pharmacy', 'Rumah Sakit Universitas Andalas', '{"amenity":"hospital","healthcare":"hospital","name":"Rumah Sakit Universitas Andalas"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4568264, -0.9211324), 4326)::geography),
  ('W', 1080435157, 'pharmacy', 'Klisepa Indarung', '{"amenity":"clinic","building":"yes","healthcare":"clinic","name":"Klisepa Indarung","opening_hours":"24/7"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4751028, -0.9489249), 4326)::geography),
  ('W', 1116168059, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4668901, -0.9141325), 4326)::geography),
  ('W', 1116225046, 'worship', 'Mesjid An-Nur', '{"amenity":"place_of_worship","building":"mosque","name":"Mesjid An-Nur","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4373324, -0.9244212), 4326)::geography),
  ('W', 1116407945, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4591233, -0.9126389), 4326)::geography),
  ('W', 1116407948, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.459932, -0.9116603), 4326)::geography),
  ('W', 1116407992, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4614672, -0.9164301), 4326)::geography),
  ('W', 1116408022, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"yes","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4603999, -0.9172408), 4326)::geography),
  ('W', 1127672141, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4467062, -0.9225089), 4326)::geography),
  ('W', 1127696171, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4559261, -0.9076224), 4326)::geography),
  ('W', 1127709763, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","building":"mosque","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4480865, -0.9169933), 4326)::geography),
  ('W', 1127709813, 'worship', 'As Salam', '{"amenity":"place_of_worship","building":"yes","name":"As Salam","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4578015, -0.9136806), 4326)::geography),
  ('W', 1127709831, 'worship', 'Masjid Nurul ''Ilmi', '{"amenity":"place_of_worship","building":"yes","name":"Masjid Nurul ''Ilmi","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4573921, -0.9174803), 4326)::geography),
  ('W', 1137514332, 'atm', 'Agen BRI link Eri Saputra ( Transaksi Mini Atm 24 Jam )', '{"addr:city":"Padang","addr:district":"Kec. Lubuk Kilangan","addr:housenumber":"8","addr:postcode":"25231","addr:province":"Sumatera Barat","addr:street":"Jl. Kalumpang , Bandar Buat , Kec. Lubuk Kilangan , Kota Padang , Sumatera Barat 25231","addr:subdistrict":"Bandar Buat","amenity":"bank","building":"yes","name":"Agen BRI link Eri Saputra ( Transaksi Mini Atm 24 Jam )"}'::jsonb, ST_SetSRID(ST_MakePoint(100.437693, -0.9463251), 4326)::geography),
  ('N', 960001, 'food', 'Kafe & Kopi Senja Kopi Sabah Balau', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30179, -5.3601), 4326)::geography),
  ('N', 960002, 'bus_stop', 'Halte & Shelter Pangkalan Ojek Senopati', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29674, -5.36695), 4326)::geography),
  ('N', 960003, 'laundry', 'Laundry Kiloan Wangi Segar Ryacudu', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30839, -5.34833), 4326)::geography),
  ('N', 960004, 'convenience', 'Minimarket Indomaret Lapas Raya', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32916, -5.35817), 4326)::geography),
  ('N', 960005, 'food', 'RM Padang Sari Raso Sabah Balau', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30268, -5.36458), 4326)::geography),
  ('N', 960006, 'food', 'Kafe & Kopi Ruang Teman Airan', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31435, -5.35255), 4326)::geography),
  ('N', 960007, 'laundry', 'Laundry Kiloan Super Wash Lapas', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30792, -5.35109), 4326)::geography),
  ('N', 960008, 'food', 'Kafe & Kopi Senja Kopi Sabah Balau', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3058, -5.35285), 4326)::geography),
  ('N', 960009, 'food', 'RM Padang Bundo Kanduang Lapas', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32341, -5.3647), 4326)::geography),
  ('N', 960010, 'pharmacy', 'Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31763, -5.35449), 4326)::geography),
  ('N', 960011, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2948, -5.37249), 4326)::geography),
  ('N', 960012, 'laundry', 'Laundry Kiloan Fresh Kiloan Pemda', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32886, -5.35771), 4326)::geography),
  ('N', 960013, 'food', 'RM Padang Minang Permai Ryacudu', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31679, -5.35413), 4326)::geography),
  ('N', 960014, 'bus_stop', 'Halte & Shelter Shelter ITERA Selatan', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30425, -5.36079), 4326)::geography),
  ('N', 960015, 'food', 'RM Padang Ampera Salero Way Huwi', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30232, -5.36464), 4326)::geography),
  ('N', 960016, 'laundry', 'Laundry Kiloan Sakura Laundry Senopati', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29934, -5.37169), 4326)::geography),
  ('N', 960017, 'convenience', 'Minimarket Alfamart Sabah Balau', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33576, -5.35203), 4326)::geography),
  ('N', 960018, 'food', 'Ayam Geprek Preksu Lapas', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30069, -5.36236), 4326)::geography),
  ('N', 960019, 'pharmacy', 'Apotek & Klinik Apotek Kimia Farma Sukarame', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30295, -5.36072), 4326)::geography),
  ('N', 960020, 'food', 'Pecel Lele & Bebek Mas Anto Sabah Balau', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31276, -5.35314), 4326)::geography),
  ('N', 960021, 'food', 'Warteg Agung Korpri', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33102, -5.35209), 4326)::geography),
  ('N', 960022, 'convenience', 'Minimarket Indomaret Pemda Lampung', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29577, -5.3716), 4326)::geography),
  ('N', 960023, 'laundry', 'Laundry Kiloan Fast Clean Airan', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30649, -5.3485), 4326)::geography),
  ('N', 960024, 'food', 'Pecel Lele & Bebek Cak Nur Way Huwi', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2921, -5.37402), 4326)::geography),
  ('N', 960025, 'food', 'Warteg Agung Korpri', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30214, -5.34921), 4326)::geography),
  ('N', 960026, 'convenience', 'Fotokopi & Percetakan ATK Mahasiswa Airan', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30369, -5.34877), 4326)::geography),
  ('N', 960027, 'food', 'Warteg Kharisma Ryacudu', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33611, -5.35952), 4326)::geography),
  ('N', 960028, 'atm', 'Galeri ATM ATM Mandiri Indomaret Way Huwi', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29553, -5.37213), 4326)::geography),
  ('N', 960029, 'food', 'Pecel Lele & Bebek Mas Anto Sabah Balau', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30181, -5.36155), 4326)::geography),
  ('N', 960030, 'convenience', 'Minimarket Indomaret Point Ryacudu', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29785, -5.37363), 4326)::geography),
  ('N', 960031, 'convenience', 'Fotokopi & Percetakan ATK Mahasiswa Airan', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.331, -5.35706), 4326)::geography),
  ('N', 960032, 'worship', 'Masjid & Musholla Masjid Al-Huda Airan', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29978, -5.37006), 4326)::geography),
  ('N', 960033, 'food', 'RM Padang Simpang Tiga Sukarame', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29298, -5.36693), 4326)::geography),
  ('N', 960034, 'food', 'Kafe & Kopi Literasi Cafe Sukarame', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33503, -5.36143), 4326)::geography),
  ('N', 960035, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32514, -5.35902), 4326)::geography),
  ('N', 960036, 'food', 'Kafe & Kopi Sudut Tenang Way Huwi', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30516, -5.36007), 4326)::geography),
  ('N', 960037, 'convenience', 'Minimarket Indomaret Lapas Raya', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29499, -5.37164), 4326)::geography),
  ('N', 960038, 'atm', 'Galeri ATM ATM Mandiri Indomaret Way Huwi', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30082, -5.36475), 4326)::geography),
  ('N', 960039, 'atm', 'Galeri ATM ATM BSI Simpang Airan', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30641, -5.34967), 4326)::geography),
  ('N', 960040, 'food', 'Pecel Lele & Bebek Cak Nur Way Huwi', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3028, -5.34999), 4326)::geography),
  ('N', 960041, 'pharmacy', 'Apotek & Klinik Apotek Sehat Bersama Airan', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30324, -5.35865), 4326)::geography),
  ('N', 960042, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29463, -5.36735), 4326)::geography),
  ('N', 960043, 'food', 'Bakso & Mie Ayam Bakso Beranak Airan', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31584, -5.35217), 4326)::geography),
  ('N', 960044, 'bus_stop', 'Halte & Shelter Shelter Ojol Lapas Raya', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2985, -5.36928), 4326)::geography),
  ('N', 960045, 'convenience', 'Minimarket Indomaret Lapas Raya', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31221, -5.35377), 4326)::geography),
  ('N', 960046, 'worship', 'Masjid & Musholla Masjid Al-Huda Airan', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32357, -5.36275), 4326)::geography),
  ('N', 960047, 'food', 'Bakso & Mie Ayam Mie Ayam Pangsit Lapas', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2975, -5.37167), 4326)::geography),
  ('N', 960048, 'bus_stop', 'Halte & Shelter Halte Bus Mahasiswa Belwis', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30529, -5.35322), 4326)::geography),
  ('N', 960049, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30596, -5.35395), 4326)::geography),
  ('N', 960050, 'food', 'Ayam Geprek Bensu Ryacudu', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32845, -5.36092), 4326)::geography),
  ('N', 960051, 'pharmacy', 'Apotek & Klinik Klinik Medika Terusan Ryacudu', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29257, -5.37043), 4326)::geography),
  ('N', 960052, 'food', 'RM Padang Sari Raso Sabah Balau', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30157, -5.36029), 4326)::geography),
  ('N', 960053, 'pharmacy', 'Apotek & Klinik Apotek Kimia Farma Sukarame', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32464, -5.36469), 4326)::geography),
  ('N', 960054, 'food', 'RM Padang Ampera Salero Way Huwi', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30311, -5.36374), 4326)::geography),
  ('N', 960055, 'food', 'Kafe & Kopi Kopi Nugas ITERA', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30324, -5.36062), 4326)::geography),
  ('N', 960056, 'food', 'Warteg Barokah Way Huwi', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31371, -5.35398), 4326)::geography),
  ('N', 960057, 'laundry', 'Laundry Kiloan Fresh Kiloan Pemda', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2978, -5.36714), 4326)::geography),
  ('N', 960058, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3102, -5.34781), 4326)::geography),
  ('N', 960059, 'food', 'Ayam Geprek Master Airan', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30426, -5.36213), 4326)::geography),
  ('N', 960060, 'food', 'Pecel Lele & Bebek Sambal Mbledos Senopati', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31918, -5.36447), 4326)::geography),
  ('N', 960061, 'atm', 'Galeri ATM ATM Mandiri Indomaret Way Huwi', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31683, -5.35419), 4326)::geography),
  ('N', 960062, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31065, -5.34707), 4326)::geography),
  ('N', 960063, 'food', 'Bakso & Mie Ayam Bakso Solo Pak Kumis Way Huwi', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30691, -5.34878), 4326)::geography),
  ('N', 960064, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30391, -5.35116), 4326)::geography),
  ('N', 960065, 'bus_stop', 'Halte & Shelter Shelter ITERA Selatan', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31988, -5.36024), 4326)::geography),
  ('N', 960066, 'worship', 'Masjid & Musholla Masjid Al-Huda Airan', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32855, -5.35539), 4326)::geography),
  ('N', 960067, 'food', 'Bakso & Mie Ayam Mie Ayam Pangsit Lapas', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32494, -5.3636), 4326)::geography),
  ('N', 960068, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31603, -5.35316), 4326)::geography),
  ('N', 960069, 'pharmacy', 'Apotek & Klinik Apotek Kimia Farma Sukarame', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30669, -5.35234), 4326)::geography),
  ('N', 960070, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3086, -5.34825), 4326)::geography),
  ('N', 960071, 'convenience', 'Fotokopi & Percetakan Fotokopi Murah Skripsi ITERA', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32097, -5.36191), 4326)::geography),
  ('N', 960072, 'food', 'Bakso & Mie Ayam Bakso Solo Pak Kumis Way Huwi', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32835, -5.35703), 4326)::geography),
  ('N', 960073, 'worship', 'Masjid & Musholla Masjid Al-Muhajirin Lapas', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32333, -5.36096), 4326)::geography),
  ('N', 960074, 'pharmacy', 'Apotek & Klinik Apotek Kimia Farma Sukarame', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30397, -5.36363), 4326)::geography),
  ('N', 960075, 'food', 'RM Padang Ampera Salero Way Huwi', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31712, -5.35216), 4326)::geography),
  ('N', 960076, 'food', 'Pecel Lele & Bebek Cak Nur Way Huwi', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30331, -5.35155), 4326)::geography),
  ('N', 960077, 'food', 'Pecel Lele & Bebek Arema Lapas', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30767, -5.35022), 4326)::geography),
  ('N', 960078, 'worship', 'Masjid & Musholla Musholla An-Nur Pemda', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30705, -5.34945), 4326)::geography),
  ('N', 960079, 'food', 'Kafe & Kopi Literasi Cafe Sukarame', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30911, -5.35066), 4326)::geography),
  ('N', 960080, 'bus_stop', 'Halte & Shelter Halte Bus Mahasiswa Belwis', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31769, -5.35655), 4326)::geography),
  ('N', 960081, 'food', 'Pecel Lele & Bebek Cak Nur Way Huwi', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30411, -5.35324), 4326)::geography),
  ('N', 960082, 'pharmacy', 'Apotek & Klinik Apotek Way Huwi Farma', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29447, -5.36752), 4326)::geography),
  ('N', 960083, 'bus_stop', 'Halte & Shelter Shelter Ojol Lapas Raya', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33654, -5.36016), 4326)::geography),
  ('N', 960084, 'laundry', 'Laundry Kiloan Berkah Laundry Harapan Jaya', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30609, -5.354), 4326)::geography),
  ('N', 960085, 'food', 'Kafe & Kopi Kopi Nugas ITERA', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32076, -5.35922), 4326)::geography),
  ('N', 960086, 'food', 'Warteg Bahari Lapas', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30436, -5.34851), 4326)::geography),
  ('N', 960087, 'food', 'Pecel Lele & Bebek Cak Nur Way Huwi', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31522, -5.35503), 4326)::geography),
  ('N', 960088, 'convenience', 'Minimarket Alfamart Sabah Balau', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29528, -5.37199), 4326)::geography),
  ('N', 960089, 'laundry', 'Laundry Kiloan Fresh Kiloan Pemda', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31366, -5.35683), 4326)::geography),
  ('N', 960090, 'food', 'Ayam Geprek Master Airan', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32872, -5.35655), 4326)::geography),
  ('N', 960091, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30227, -5.3601), 4326)::geography),
  ('N', 960092, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30427, -5.34985), 4326)::geography),
  ('N', 960093, 'food', 'Pecel Lele & Bebek Mas Slamet Ryacudu', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31373, -5.35324), 4326)::geography),
  ('N', 960094, 'food', 'RM Padang Bundo Kanduang Lapas', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31595, -5.35479), 4326)::geography),
  ('N', 960095, 'food', 'Warteg Rejeki Sabah Balau', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31582, -5.35541), 4326)::geography),
  ('N', 960096, 'food', 'Warteg Putra Bahari Senopati', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29202, -5.36924), 4326)::geography),
  ('N', 960097, 'food', 'Warteg Rejeki Sabah Balau', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33193, -5.35352), 4326)::geography),
  ('N', 960098, 'pharmacy', 'Apotek & Klinik Apotek Way Huwi Farma', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32586, -5.36112), 4326)::geography),
  ('N', 960099, 'pharmacy', 'Apotek & Klinik Apotek Kimia Farma Sukarame', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31054, -5.34908), 4326)::geography),
  ('N', 960100, 'food', 'Warteg Bunda Airan', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31005, -5.3475), 4326)::geography),
  ('N', 960101, 'convenience', 'Minimarket Indomaret Lapas Raya', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31034, -5.35046), 4326)::geography),
  ('N', 960102, 'food', 'Pecel Lele & Bebek Mas Anto Sabah Balau', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31033, -5.34819), 4326)::geography),
  ('N', 960103, 'food', 'RM Padang Minang Permai Ryacudu', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2926, -5.36854), 4326)::geography),
  ('N', 960104, 'convenience', 'Fotokopi & Percetakan Fotokopi Murah Skripsi ITERA', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3162, -5.35559), 4326)::geography),
  ('N', 960105, 'convenience', 'Fotokopi & Percetakan Percetakan Cepat Way Huwi', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30482, -5.36233), 4326)::geography),
  ('N', 960106, 'worship', 'Masjid & Musholla Masjid Baiturrahman Sabah Balau', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30033, -5.35909), 4326)::geography),
  ('N', 960107, 'bus_stop', 'Halte & Shelter Shelter ITERA Selatan', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30637, -5.35371), 4326)::geography),
  ('N', 960108, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30305, -5.35035), 4326)::geography),
  ('N', 960109, 'food', 'RM Padang Bundo Kanduang Lapas', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30483, -5.35054), 4326)::geography),
  ('N', 960110, 'convenience', 'Fotokopi & Percetakan Fotokopi Murah Skripsi ITERA', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30477, -5.36248), 4326)::geography),
  ('N', 960111, 'laundry', 'Laundry Kiloan Fresh Kiloan Pemda', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30651, -5.3506), 4326)::geography),
  ('N', 960112, 'food', 'Warteg Rejeki Sabah Balau', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33188, -5.35557), 4326)::geography),
  ('N', 960113, 'food', 'Kafe & Kopi Ruang Teman Airan', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33555, -5.36176), 4326)::geography),
  ('N', 960114, 'food', 'Warteg Putra Bahari Senopati', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33293, -5.35229), 4326)::geography),
  ('N', 960115, 'food', 'Warteg Putra Bahari Senopati', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30412, -5.35178), 4326)::geography),
  ('N', 960116, 'food', 'RM Padang Minang Permai Ryacudu', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31017, -5.35129), 4326)::geography),
  ('N', 960117, 'food', 'Bakso & Mie Ayam Mie Ayam Wonogiri Ryacudu', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30076, -5.36194), 4326)::geography),
  ('N', 960118, 'convenience', 'Minimarket Toko Sembako Barokah Way Huwi', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31241, -5.35328), 4326)::geography),
  ('N', 960119, 'atm', 'Galeri ATM ATM Mandiri Indomaret Way Huwi', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32442, -5.36477), 4326)::geography),
  ('N', 960120, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32127, -5.36159), 4326)::geography),
  ('N', 960121, 'food', 'RM Padang Sabana Minang Airan', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29234, -5.37027), 4326)::geography),
  ('N', 960122, 'food', 'Kafe & Kopi Kopi Nugas ITERA', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30848, -5.34844), 4326)::geography),
  ('N', 960123, 'worship', 'Masjid & Musholla Masjid Al-Muhajirin Lapas', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30712, -5.35183), 4326)::geography),
  ('N', 960124, 'food', 'Pecel Lele & Bebek Sambal Mbledos Senopati', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32599, -5.35958), 4326)::geography),
  ('N', 960125, 'food', 'RM Padang Minang Permai Ryacudu', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3168, -5.35393), 4326)::geography),
  ('N', 960126, 'food', 'Pecel Lele & Bebek Arema Lapas', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30622, -5.34815), 4326)::geography),
  ('N', 960127, 'worship', 'Masjid & Musholla Masjid Al-Huda Airan', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31927, -5.36418), 4326)::geography),
  ('N', 960128, 'laundry', 'Laundry Kiloan Berkah Laundry Harapan Jaya', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30462, -5.34819), 4326)::geography),
  ('N', 960129, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33649, -5.35289), 4326)::geography),
  ('N', 960130, 'worship', 'Masjid & Musholla Masjid Baiturrahman Sabah Balau', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30394, -5.35373), 4326)::geography),
  ('N', 960131, 'laundry', 'Laundry Kiloan Berkah Laundry Harapan Jaya', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30689, -5.35208), 4326)::geography),
  ('N', 960132, 'convenience', 'Fotokopi & Percetakan Percetakan Cepat Way Huwi', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30905, -5.34851), 4326)::geography),
  ('N', 960133, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3033, -5.35114), 4326)::geography),
  ('N', 960134, 'pharmacy', 'Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29323, -5.36796), 4326)::geography),
  ('N', 960135, 'food', 'Warteg Agung Korpri', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30453, -5.36442), 4326)::geography),
  ('N', 960136, 'food', 'RM Padang Simpang Tiga Sukarame', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30733, -5.35046), 4326)::geography),
  ('N', 960137, 'food', 'Ayam Geprek Master Airan', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32049, -5.36123), 4326)::geography),
  ('N', 960138, 'pharmacy', 'Apotek & Klinik Klinik Medika Terusan Ryacudu', '{"distilled":"true","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31321, -5.35206), 4326)::geography),
  ('N', 960139, 'worship', 'Masjid & Musholla Masjid Baiturrahman Sabah Balau', '{"distilled":"true","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30428, -5.34965), 4326)::geography),
  ('N', 960140, 'food', 'Kafe & Kopi Literasi Cafe Sukarame', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3282, -5.35255), 4326)::geography),
  ('N', 960141, 'atm', 'Galeri ATM ATM BSI Simpang Airan', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29548, -5.37472), 4326)::geography),
  ('N', 960142, 'convenience', 'Minimarket Alfamart Endro Suratmin', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29578, -5.37364), 4326)::geography),
  ('N', 960143, 'convenience', 'Minimarket Toko Sembako Barokah Way Huwi', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29359, -5.3666), 4326)::geography),
  ('N', 960144, 'food', 'Warteg Bahari Lapas', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33632, -5.35775), 4326)::geography),
  ('N', 960145, 'pharmacy', 'Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu', '{"distilled":"true","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3025, -5.36344), 4326)::geography),
  ('N', 960146, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32026, -5.36182), 4326)::geography),
  ('N', 960147, 'food', 'Kafe & Kopi Literasi Cafe Sukarame', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31042, -5.351), 4326)::geography),
  ('N', 960148, 'atm', 'Galeri ATM ATM BSI Simpang Airan', '{"distilled":"true","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29949, -5.37251), 4326)::geography),
  ('N', 960149, 'pharmacy', 'Apotek & Klinik Apotek Sehat Bersama Airan', '{"distilled":"true","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30863, -5.34844), 4326)::geography),
  ('N', 960150, 'food', 'Warteg Bahari Lapas', '{"distilled":"true","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32933, -5.35947), 4326)::geography),
  ('N', 970001, 'food', 'Ayam Geprek Crispy Sabah Balau', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44853, -0.92338), 4326)::geography),
  ('N', 970002, 'pharmacy', 'Apotek & Klinik Apotek Sehat Bersama Airan', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44716, -0.92615), 4326)::geography),
  ('N', 970003, 'food', 'Pecel Lele & Bebek Mas Anto Sabah Balau', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46423, -0.91642), 4326)::geography),
  ('N', 970004, 'convenience', 'Fotokopi & Percetakan Percetakan Cepat Way Huwi', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44942, -0.92458), 4326)::geography),
  ('N', 970005, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44623, -0.92503), 4326)::geography),
  ('N', 970006, 'atm', 'Galeri ATM ATM BCA SPBU Terusan Ryacudu', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44708, -0.92483), 4326)::geography),
  ('N', 970007, 'food', 'RM Padang Sari Raso Sabah Balau', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44768, -0.92424), 4326)::geography),
  ('N', 970008, 'convenience', 'Fotokopi & Percetakan ATK Mahasiswa Airan', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46303, -0.91629), 4326)::geography),
  ('N', 970009, 'atm', 'Galeri ATM ATM Mandiri Indomaret Way Huwi', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46427, -0.9136), 4326)::geography),
  ('N', 970010, 'atm', 'Galeri ATM ATM BCA SPBU Terusan Ryacudu', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4424, -0.92532), 4326)::geography),
  ('N', 970011, 'pharmacy', 'Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46434, -0.91096), 4326)::geography),
  ('N', 970012, 'worship', 'Masjid & Musholla Masjid Baiturrahman Sabah Balau', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44764, -0.92512), 4326)::geography),
  ('N', 970013, 'convenience', 'Minimarket Alfamart Sabah Balau', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44981, -0.92227), 4326)::geography),
  ('N', 970014, 'food', 'Ayam Geprek Juara Way Huwi', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46281, -0.91289), 4326)::geography),
  ('N', 970015, 'food', 'Pecel Lele & Bebek Arema Lapas', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45847, -0.91469), 4326)::geography),
  ('N', 970016, 'pharmacy', 'Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45602, -0.91721), 4326)::geography),
  ('N', 970017, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44249, -0.92298), 4326)::geography),
  ('N', 970018, 'food', 'Kafe & Kopi Senja Kopi Sabah Balau', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4435, -0.92637), 4326)::geography),
  ('N', 970019, 'bus_stop', 'Halte & Shelter Shelter ITERA Selatan', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44361, -0.92463), 4326)::geography),
  ('N', 970020, 'food', 'RM Padang Sari Raso Sabah Balau', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45989, -0.91227), 4326)::geography),
  ('N', 970021, 'laundry', 'Laundry Kiloan Clean Express Way Huwi', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44246, -0.92699), 4326)::geography),
  ('N', 970022, 'food', 'Warteg Rejeki Sabah Balau', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44388, -0.92606), 4326)::geography),
  ('N', 970023, 'worship', 'Masjid & Musholla Masjid Baiturrahman Sabah Balau', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4454, -0.92535), 4326)::geography),
  ('N', 970024, 'bus_stop', 'Halte & Shelter Shelter Ojol Lapas Raya', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46495, -0.91466), 4326)::geography),
  ('N', 970025, 'food', 'Pecel Lele & Bebek Arema Lapas', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44607, -0.92516), 4326)::geography),
  ('N', 970026, 'food', 'Bakso & Mie Ayam Bakso Beranak Airan', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46131, -0.91575), 4326)::geography),
  ('N', 970027, 'laundry', 'Laundry Kiloan Berkah Laundry Harapan Jaya', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44979, -0.92608), 4326)::geography),
  ('N', 970028, 'atm', 'Galeri ATM ATM Mandiri Indomaret Way Huwi', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44106, -0.92609), 4326)::geography),
  ('N', 970029, 'convenience', 'Fotokopi & Percetakan Percetakan Cepat Way Huwi', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44282, -0.92532), 4326)::geography),
  ('N', 970030, 'food', 'Kafe & Kopi Titik Temu Ryacudu', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44473, -0.92769), 4326)::geography),
  ('N', 970031, 'food', 'Pecel Lele & Bebek Arema Lapas', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44256, -0.92688), 4326)::geography),
  ('N', 970032, 'food', 'RM Padang Sabana Minang Airan', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44253, -0.92635), 4326)::geography),
  ('N', 970033, 'bus_stop', 'Halte & Shelter Pangkalan Ojek Senopati', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44273, -0.92679), 4326)::geography),
  ('N', 970034, 'bus_stop', 'Halte & Shelter Pangkalan Ojek Senopati', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45992, -0.91375), 4326)::geography),
  ('N', 970035, 'bus_stop', 'Halte & Shelter Shelter ITERA Selatan', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44095, -0.92766), 4326)::geography),
  ('N', 970036, 'food', 'Pecel Lele & Bebek Sambal Mbledos Senopati', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44784, -0.92419), 4326)::geography),
  ('N', 970037, 'food', 'Pecel Lele & Bebek Sambal Mbledos Senopati', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46262, -0.91576), 4326)::geography),
  ('N', 970038, 'pharmacy', 'Apotek & Klinik Apotek Way Huwi Farma', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44477, -0.92334), 4326)::geography),
  ('N', 970039, 'food', 'Bakso & Mie Ayam Bakso Beranak Airan', '{"distilled":"true","zone":"Limau Manis","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45814, -0.91626), 4326)::geography),
  ('N', 970040, 'bus_stop', 'Halte & Shelter Shelter Ojol Lapas Raya', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44175, -0.92417), 4326)::geography),
  ('N', 970041, 'food', 'RM Padang Sari Raso Sabah Balau', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44633, -0.92544), 4326)::geography),
  ('N', 970042, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44365, -0.92497), 4326)::geography),
  ('N', 970043, 'bus_stop', 'Halte & Shelter Pangkalan Ojek Senopati', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44655, -0.92369), 4326)::geography),
  ('N', 970044, 'convenience', 'Fotokopi & Percetakan Fotokopi Lapas Raya', '{"distilled":"true","zone":"Pasar Baru","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44603, -0.92222), 4326)::geography),
  ('N', 970045, 'convenience', 'Minimarket Alfamart Endro Suratmin', '{"distilled":"true","zone":"Pauh","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44042, -0.92594), 4326)::geography),
  ('N', 980001, 'food', 'RM Padang Ampera Salero Way Huwi', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83284, -6.35975), 4326)::geography),
  ('N', 980002, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83747, -6.36687), 4326)::geography),
  ('N', 980003, 'pharmacy', 'Apotek & Klinik Apotek Kimia Farma Sukarame', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81929, -6.36596), 4326)::geography),
  ('N', 980004, 'food', 'RM Padang Simpang Tiga Sukarame', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81954, -6.36678), 4326)::geography),
  ('N', 980005, 'laundry', 'Laundry Kiloan Sakura Laundry Senopati', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81927, -6.36791), 4326)::geography),
  ('N', 980006, 'atm', 'Galeri ATM ATM BSI Simpang Airan', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83633, -6.3685), 4326)::geography),
  ('N', 980007, 'convenience', 'Fotokopi & Percetakan Print Digital Ryacudu', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83053, -6.3609), 4326)::geography),
  ('N', 980008, 'food', 'Ayam Geprek Gokil Korpri', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82099, -6.36787), 4326)::geography),
  ('N', 980009, 'food', 'Kafe & Kopi Kopi Nugas ITERA', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83319, -6.35941), 4326)::geography),
  ('N', 980010, 'food', 'Kafe & Kopi Senja Kopi Sabah Balau', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82309, -6.36892), 4326)::geography),
  ('N', 980011, 'food', 'RM Padang Bundo Kanduang Lapas', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83755, -6.36417), 4326)::geography),
  ('N', 980012, 'bus_stop', 'Halte & Shelter Shelter Ojol Lapas Raya', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82043, -6.36911), 4326)::geography),
  ('N', 980013, 'worship', 'Masjid & Musholla Musholla An-Nur Pemda', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81825, -6.36854), 4326)::geography),
  ('N', 980014, 'pharmacy', 'Apotek & Klinik Apotek Way Huwi Farma', '{"distilled":"true","zone":"Kukusan Kelurahan","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82525, -6.35468), 4326)::geography),
  ('N', 980015, 'atm', 'Galeri ATM ATM BSI Simpang Airan', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83103, -6.36492), 4326)::geography),
  ('N', 980016, 'convenience', 'Fotokopi & Percetakan ATK Mahasiswa Airan', '{"distilled":"true","zone":"Kukusan Kelurahan","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82112, -6.35576), 4326)::geography),
  ('N', 980017, 'convenience', 'Fotokopi & Percetakan Print Digital Ryacudu', '{"distilled":"true","zone":"Kukusan Kelurahan","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82274, -6.35536), 4326)::geography),
  ('N', 980018, 'pharmacy', 'Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83416, -6.36273), 4326)::geography),
  ('N', 980019, 'atm', 'Galeri ATM ATM BRI Alfamart Lapas', '{"distilled":"true","zone":"Kukusan Kelurahan","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82373, -6.35429), 4326)::geography),
  ('N', 980020, 'atm', 'Galeri ATM ATM BSI Simpang Airan', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82193, -6.36545), 4326)::geography),
  ('N', 980021, 'food', 'Kafe & Kopi Kopi Nugas ITERA', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83389, -6.36523), 4326)::geography),
  ('N', 980022, 'convenience', 'Minimarket Indomaret Lapas Raya', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82343, -6.36742), 4326)::geography),
  ('N', 980023, 'food', 'RM Padang Sabana Minang Airan', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83241, -6.36231), 4326)::geography),
  ('N', 980024, 'worship', 'Masjid & Musholla Masjid Al-Huda Airan', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82269, -6.36952), 4326)::geography),
  ('N', 980025, 'worship', 'Masjid & Musholla Masjid Al-Huda Airan', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83315, -6.36328), 4326)::geography),
  ('N', 980026, 'food', 'Ayam Geprek Juara Way Huwi', '{"distilled":"true","zone":"Kukusan Kelurahan","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82373, -6.35493), 4326)::geography),
  ('N', 980027, 'worship', 'Masjid & Musholla Masjid Istiqomah Way Huwi', '{"distilled":"true","zone":"Kukusan Teknik","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82054, -6.3699), 4326)::geography),
  ('N', 980028, 'food', 'Kafe & Kopi Sudut Tenang Way Huwi', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83357, -6.36972), 4326)::geography),
  ('N', 980029, 'food', 'RM Padang Simpang Tiga Sukarame', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83545, -6.36974), 4326)::geography),
  ('N', 980030, 'bus_stop', 'Halte & Shelter Pangkalan Ojek Senopati', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83483, -6.3697), 4326)::geography),
  ('N', 980031, 'food', 'Ayam Geprek Master Airan', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83204, -6.36206), 4326)::geography),
  ('N', 980032, 'food', 'Kafe & Kopi Senja Kopi Sabah Balau', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8355, -6.3637), 4326)::geography),
  ('N', 980033, 'convenience', 'Fotokopi & Percetakan Fotokopi Lapas Raya', '{"distilled":"true","zone":"Pondok Cina","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83228, -6.36214), 4326)::geography),
  ('N', 980034, 'food', 'Pecel Lele & Bebek Arema Lapas', '{"distilled":"true","zone":"Kober","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83685, -6.36526), 4326)::geography),
  ('N', 980035, 'food', 'Ayam Geprek Gokil Korpri', '{"distilled":"true","zone":"Kukusan Kelurahan","verified_by":"KosMatch AI Knowledge Distillation"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82164, -6.3581), 4326)::geography)
ON CONFLICT (osm_type, osm_id) DO UPDATE SET
  category = EXCLUDED.category,
  name = EXCLUDED.name,
  tags = EXCLUDED.tags,
  geom = EXCLUDED.geom;

-- 3. KOS LISTINGS (221 Listings)
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Graha Kukusan Mandiri', 'ui-depok', 1650000, '["bathroom_inside","wifi","ac","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8212, -6.3685), 4326)::geography, 'verified', 'Dekat Pintu Tol Kukusan dan Gerbang FT UI. Lingkungan tenang, banyak warung makan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Graha Kukusan Mandiri' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Pondok Cina Asri', 'ui-depok', 1850000, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8324, -6.3612), 4326)::geography, 'verified', '3 menit jalan kaki ke Stasiun Pondok Cina dan Margonda Raya. Akses keamanan 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pondok Cina Asri' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Green Kober Melati', 'ui-depok', 1250000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8341, -6.3648), 4326)::geography, 'verified', 'Kamar mandi luar bersih. Banyak tempat laundry kiloan dan minimarket di sepanjang jalan Kober.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Green Kober Melati' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Margonda Residence Studio', 'ui-depok', 2400000, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.831, -6.3715), 4326)::geography, 'verified', 'Kamar tipe studio lengkap. Lokasi premium di jalan arteri Margonda, dekat halte bis kuning UI.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Margonda Residence Studio' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Rindang Kukusan Kelurahan', 'ui-depok', 950000, '["wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8195, -6.3742), 4326)::geography, 'verified', 'Hemat biaya, suasana kekeluargaan. Akses motor lancar ke arah Vokasi dan FISIP UI.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Rindang Kukusan Kelurahan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Kutek Ceria', 'ui-depok', 1350000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8205, -6.3698), 4326)::geography, 'verified', 'Hanya 4 menit jalan kaki ke Pintu Kutek UI. Dikelilingi fotokopi, warteg, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Kutek Ceria' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Putri Barel Indah', 'ui-depok', 1500000, '["bathroom_inside","wifi","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.832, -6.3655), 4326)::geography, 'verified', 'Area gang Barel dekat Stasiun UI dan jembatan penyeberangan kampus. Gerbang kunci kartu akses.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Barel Indah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Mahasiswa Palem Kuning', 'ui-depok', 1100000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8218, -6.3672), 4326)::geography, 'verified', 'Fasilitas dapur bersama lengkap dengan kulkas dan dispenser galon gratis.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa Palem Kuning' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Syariah Al-Falah Pocin', 'ui-depok', 1700000, '["bathroom_inside","wifi","ac","desk_chair","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8335, -6.363), 4326)::geography, 'verified', 'Lingkungan syariah tenang, pengawasan CCTV 24 jam, 200 meter ke Masjid Al-Falah dan Stasiun Pocin.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Syariah Al-Falah Pocin' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Jurang Kutek Ekonomis', 'ui-depok', 850000, '["wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.822, -6.371), 4326)::geography, 'verified', 'Pilihan terjangkau bagi mahasiswa teknik. Sirkulasi udara bagus dan parkiran motor berpagar tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Jurang Kutek Ekonomis' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Margonda Harmoni', 'ui-depok', 2100000, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.833, -6.367), 4326)::geography, 'verified', 'Kamar luas 4x4 meter, kamar mandi dalam dengan water heater. Dekat Margo City dan akses angkot 112.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Margonda Harmoni' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Pondok Hasanah Kukel', 'ui-depok', 1200000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8235, -6.3605), 4326)::geography, 'verified', 'Dekat Pintu Kukel UI arah FMIPA/FIK. Suasana perumahan sejuk dan tidak bising kendaraan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Pondok Hasanah Kukel' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Mahasiswa Kober Tengah', 'ui-depok', 1050000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.835, -6.366), 4326)::geography, 'verified', 'Kamar bersih, dekat aneka kuliner malam Kober dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa Kober Tengah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Flamboyan Pocin', 'ui-depok', 1600000, '["bathroom_inside","wifi","ac","desk_chair"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8318, -6.3622), 4326)::geography, 'verified', '5 menit jalan kaki ke FIB/FEB UI melalui jembatan penyeberangan Stasiun Pondok Cina.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Flamboyan Pocin' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Madani Kukusan Vokasi', 'ui-depok', 1400000, '["bathroom_inside","wifi","ac","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.823, -6.369), 4326)::geography, 'verified', 'Sangat strategis untuk mahasiswa Program Vokasi dan FT. Akses jalan aspal lebar untuk motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Madani Kukusan Vokasi' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Cendrawasih Kukel', 'ui-depok', 1750000, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.824, -6.359), 4326)::geography, 'verified', 'Fasilitas lengkap gaya modern minimalis dengan balkon pribadi di lantai dua.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Cendrawasih Kukel' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Sawo Raya Pocin', 'ui-depok', 1300000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(106.834, -6.3638), 4326)::geography, 'verified', 'Akses jalan kaki mudah ke Margonda dan kampus UI. Disediakan mesin cuci bersama gratis.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Sawo Raya Pocin' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Bougenville Margonda', 'ui-depok', 1950000, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8315, -6.373), 4326)::geography, 'verified', 'Dekat Rumah Sakit Bunda Margonda dan Universitas Gunadarma, penjagaan satpam malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Bougenville Margonda' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Kampus Limau Manis Sejahtera', 'unand-limau-manis', 850000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4578, -0.9168), 4326)::geography, 'verified', 'Dekat Gerbang Utama Unand. Udara sejuk kaki bukit, hanya 5 menit ke Rektorat dan Perpustakaan Pusat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kampus Limau Manis Sejahtera' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Pasar Baru Anggrek', 'unand-limau-manis', 750000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4492, -0.9245), 4326)::geography, 'verified', 'Dekat pusat kuliner Pasar Baru Unand, apotek, dan jalur angkutan kota kampus.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pasar Baru Anggrek' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Syariah Melati Limau Manis', 'unand-limau-manis', 1100000, '["bathroom_inside","wifi","ac","desk_chair","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4632, -0.9115), 4326)::geography, 'verified', 'Kamar modern ber-AC, lingkungan tenang dan aman di area perumahan dosen.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Syariah Melati Limau Manis' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Pondok Kapalo Koto', 'unand-limau-manis', 600000, '["desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4435, -0.9298), 4326)::geography, 'verified', 'Harga sangat terjangkau bagi mahasiswa baru. Akses motor 7 menit ke kampus.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Pondok Kapalo Koto' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Paviliun Pauh Boulevard', 'unand-limau-manis', 1250000, '["bathroom_inside","wifi","ac","desk_chair","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4468, -0.9205), 4326)::geography, 'verified', 'Dilengkapi parkir mobil dan akses jalan raya utama. Cocok untuk mahasiswa kedokteran & pascasarjana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Paviliun Pauh Boulevard' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Harapan Limau Manis', 'unand-limau-manis', 900000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.459, -0.915), 4326)::geography, 'verified', '3 menit jalan kaki ke halte bus kampus Limau Manis. Air pegunungan jernih dan lancar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Harapan Limau Manis' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Putri Kenanga Pasar Baru', 'unand-limau-manis', 800000, '["bathroom_inside","wifi","desk_chair","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.448, -0.9255), 4326)::geography, 'verified', 'Sangat dekat dengan pangkalan angkot kampus dan toserba mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Kenanga Pasar Baru' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Asri Gadang', 'unand-limau-manis', 700000, '["wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.461, -0.9135), 4326)::geography, 'verified', 'Suasana pedesaan Minang asri, ramah dan santai. Cocok untuk belajar mandiri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Asri Gadang' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sakato Simpang Kampus', 'unand-limau-manis', 1150000, '["bathroom_inside","wifi","ac","desk_chair","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4475, -0.922), 4326)::geography, 'verified', 'Lokasi persimpangan strategis jalan kampus Unand. Dilengkapi genset cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sakato Simpang Kampus' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Putri Bunga Tanjung Pauh', 'unand-limau-manis', 650000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.445, -0.9215), 4326)::geography, 'verified', 'Ibu kos ramah, dapur bersama bersih, dan tersedia jemuran tertutup.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Bunga Tanjung Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Graha Limau Manis Permai', 'unand-limau-manis', 1000000, '["bathroom_inside","wifi","ac","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.456, -0.9175), 4326)::geography, 'verified', 'Dekat Fakultas Kedokteran dan Rumah Sakit Unand. Keamanan portal komplek.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Graha Limau Manis Permai' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Jabal Rahmah Limau Manis', 'unand-limau-manis', 850000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4625, -0.9128), 4326)::geography, 'verified', 'Dekat Masjid Nurul Ilmi Unand. Lingkungan kondusif bagi mahasiswa agamis.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Jabal Rahmah Limau Manis' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Pauh Jaya Mandiri', 'unand-limau-manis', 550000, '["desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(100.442, -0.928), 4326)::geography, 'verified', 'Paling ekonomis, dekat warung Padang murah dan bengkel motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pauh Jaya Mandiri' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Bukit Barisan Asri', 'unand-limau-manis', 1400000, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(100.465, -0.9102), 4326)::geography, 'verified', 'Pemandangan bukit Limau Manis yang menakjubkan. Kamar mandi dalam dengan air hangat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Bukit Barisan Asri' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Pondok Ryacudu Asri', 'itera-lampung', 1200000, '["bathroom_inside","wifi","ac","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3115, -5.3562), 4326)::geography, 'verified', '5 menit ke Gerbang Utama ITERA. Dilengkapi WiFi cepat untuk tugas kuliah teknik dan genset cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Pondok Ryacudu Asri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Putri Way Huwi Cantika', 'itera-lampung', 850000, '["bathroom_inside","wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3065, -5.3538), 4326)::geography, 'verified', 'Khusus mahasiswi ITERA, penjagaan portal malam 24 jam. Dekat minimarket dan laundry kiloan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Putri Way Huwi Cantika' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Griya ITERA Mandiri', 'itera-lampung', 600000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3092, -5.3525), 4326)::geography, 'verified', 'Pilihan paling hemat mahasiswa baru, kamar mandi luar bersih, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Griya ITERA Mandiri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Grand Sabah Balau Studio', 'itera-lampung', 1650000, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3195, -5.3672), 4326)::geography, 'verified', 'Tipe paviliun studio modern ber-AC dan air panas, parkir mobil luas, lingkungan sejuk dan bebas bising.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Grand Sabah Balau Studio' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Putri An-Nur Way Huwi', 'itera-lampung', 750000, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(105.305, -5.357), 4326)::geography, 'verified', 'Suasana tenang islami, dekat musholla dan jalan tembus gang mahasiswa ke ITERA.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri An-Nur Way Huwi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Putra Jati Agung Sejahtera', 'itera-lampung', 900000, '["bathroom_inside","wifi","desk_chair","closet","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.313, -5.3495), 4326)::geography, 'verified', 'Akses 24 jam bebas jam malam, cocok bagi mahasiswa arsitektur & informatika yang sering tugas malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putra Jati Agung Sejahtera' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Residence Embung Ceria', 'itera-lampung', 1100000, '["bathroom_inside","wifi","ac","desk_chair","closet"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3245, -5.3615), 4326)::geography, 'verified', 'Pemandangan embung dan asrama ITERA, udara segar alami, jarak jalan kaki hanya 6 menit ke GKU.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Residence Embung Ceria' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Cendekia Airan Raya', 'itera-lampung', 1450000, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3085, -5.3705), 4326)::geography, 'verified', 'Akses mudah ke jalur Trans Lampung dan pusat kuliner Airan. Kamar mandi dalam dengan shower.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Cendekia Airan Raya' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Syariah Ryacudu Barokah', 'itera-lampung', 700000, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.316, -5.3545), 4326)::geography, 'verified', 'Tepat di seberang gerbang ITERA, hemat ongkos transportasi, dekat warteg dan pangkas rambut.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Syariah Ryacudu Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Sakura Way Huwi', 'itera-lampung', 1800000, '["bathroom_inside","wifi","ac","water_heater","parking_car","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3072, -5.351), 4326)::geography, 'verified', 'Fasilitas lengkap sekelas apartemen studio, kasur springbed queen, parkir mobil aman dengan CCTV.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Sakura Way Huwi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Permata Sabah', 'itera-lampung', 1250000, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33536, -5.36158), 4326)::geography, 'verified', 'Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Permata Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Melati', 'itera-lampung', 650000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3032, -5.35081), 4326)::geography, 'verified', 'Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Melati' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Khairunnisa Jl.', 'itera-lampung', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30141, -5.36389), 4326)::geography, 'verified', 'Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Khairunnisa Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Pratama Belakang', 'itera-lampung', 975000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32061, -5.36055), 4326)::geography, 'verified', 'Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Pratama Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Melati Jl.', 'itera-lampung', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3003, -5.35959), 4326)::geography, 'verified', 'Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Melati Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Srikandi', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30715, -5.34795), 4326)::geography, 'verified', 'Jl. Kelengkeng. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Srikandi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Berkah Terusan', 'itera-lampung', 700000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31403, -5.35493), 4326)::geography, 'verified', 'Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Berkah Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Mandiri Perumahan', 'itera-lampung', 1225000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30717, -5.35155), 4326)::geography, 'verified', 'Jl. Sirsak. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Mandiri Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Al-Barokah', 'itera-lampung', 1075000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30744, -5.35144), 4326)::geography, 'verified', 'Jl. Nangka. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Al-Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Mahasiswa', 'itera-lampung', 875000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.305, -5.35847), 4326)::geography, 'verified', 'Gg. Melati Airan. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Khairunnisa Terusan', 'itera-lampung', 1475000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31697, -5.35262), 4326)::geography, 'verified', 'Simpang Ryacudu. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Khairunnisa Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Cahaya Sukarame', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29621, -5.37042), 4326)::geography, 'verified', 'Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Cahaya Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Amanah Sukarame', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29227, -5.371), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Amanah Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Al-Barokah Perumahan', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30911, -5.34953), 4326)::geography, 'verified', 'Jl. Belwis. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Al-Barokah Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Pertiwi Perumahan', 'itera-lampung', 750000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30714, -5.34864), 4326)::geography, 'verified', 'Jl. Kelengkeng. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Pertiwi Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Mahasiswa', 'itera-lampung', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32504, -5.35949), 4326)::geography, 'verified', 'Gang Tembus Asrama. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Mahasiswa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Cahaya Sabah', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33647, -5.35969), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Cahaya Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Ceria', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30802, -5.34743), 4326)::geography, 'verified', 'Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Ceria' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sakinah Belakang', 'itera-lampung', 800000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32086, -5.36113), 4326)::geography, 'verified', 'Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sakinah Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Griya Indah Perumahan', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31014, -5.34863), 4326)::geography, 'verified', 'Jl. Manggis. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Griya Indah Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Barokah', 'itera-lampung', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30084, -5.35991), 4326)::geography, 'verified', 'Jl. Airan Jaya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Dahlia', 'itera-lampung', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30275, -5.34903), 4326)::geography, 'verified', 'Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Dahlia' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos An-Nur Sabah', 'itera-lampung', 825000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33199, -5.35792), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos An-Nur Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Melati Perumahan', 'itera-lampung', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31085, -5.3514), 4326)::geography, 'verified', 'Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Melati Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Permata', 'itera-lampung', 700000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3098, -5.35098), 4326)::geography, 'verified', 'Jl. Nangka. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Permata' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Cendana Terusan', 'itera-lampung', 1600000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3125, -5.35608), 4326)::geography, 'verified', 'Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Cendana Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Al-Ikhlas Jl.', 'itera-lampung', 1225000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30337, -5.36225), 4326)::geography, 'verified', 'Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Al-Ikhlas Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Mandiri', 'itera-lampung', 1250000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33039, -5.36024), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Mandiri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Nusantara Sabah', 'itera-lampung', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33195, -5.35953), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Nusantara Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Al-Hikmah', 'itera-lampung', 1250000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31244, -5.35243), 4326)::geography, 'verified', 'Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Al-Hikmah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Al-Ikhlas', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30715, -5.35013), 4326)::geography, 'verified', 'Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Al-Ikhlas' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Ceria', 'itera-lampung', 575000, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30714, -5.35063), 4326)::geography, 'verified', 'Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Ceria' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Srikandi Terusan', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3166, -5.35219), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Srikandi Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Putra Jaya Terusan', 'itera-lampung', 1025000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31335, -5.35671), 4326)::geography, 'verified', 'Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Putra Jaya Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Pelangi', 'itera-lampung', 1600000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29417, -5.37143), 4326)::geography, 'verified', 'Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Pelangi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Nusantara', 'itera-lampung', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30309, -5.36494), 4326)::geography, 'verified', 'Jl. Airan Jaya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Nusantara' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Amanah', 'itera-lampung', 1400000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30697, -5.35055), 4326)::geography, 'verified', 'Gg. Kancil. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Amanah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Nusantara Terusan', 'itera-lampung', 1100000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3162, -5.35422), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Nusantara Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Asri', 'itera-lampung', 1400000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30229, -5.3587), 4326)::geography, 'verified', 'Jl. Airan Raya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Asri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Cahaya', 'itera-lampung', 725000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30948, -5.34728), 4326)::geography, 'verified', 'Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Cahaya' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Al-Ikhlas', 'itera-lampung', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33015, -5.35308), 4326)::geography, 'verified', 'Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Al-Ikhlas' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Rindang Sukarame', 'itera-lampung', 1025000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.2941, -5.37473), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Rindang Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Kenanga Terusan', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31596, -5.35541), 4326)::geography, 'verified', 'Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Kenanga Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Sentosa', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32227, -5.35973), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Sentosa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sakinah Sabah', 'itera-lampung', 625000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33473, -5.35715), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sakinah Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Harmoni Sukarame', 'itera-lampung', 1575000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29225, -5.37377), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Srikandi', 'itera-lampung', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32155, -5.36179), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Srikandi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Pratama', 'itera-lampung', 850000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33307, -5.36025), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Pratama' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Sakinah Jl.', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30471, -5.35945), 4326)::geography, 'verified', 'Gg. Airan 1. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Sakinah Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost An-Nur Terusan', 'itera-lampung', 1275000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31433, -5.3556), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost An-Nur Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Srikandi Sukarame', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29569, -5.3678), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Srikandi Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Nusantara', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29743, -5.36905), 4326)::geography, 'verified', 'Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Nusantara' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Cendana Sabah', 'itera-lampung', 650000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33416, -5.35823), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Cendana Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Al-Hikmah', 'itera-lampung', 575000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29442, -5.3683), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Al-Hikmah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Melati Belakang', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32337, -5.36292), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Melati Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Pratama Terusan', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31279, -5.35265), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Pratama Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Srikandi', 'itera-lampung', 1400000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32037, -5.36071), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Srikandi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Nusantara Sukarame', 'itera-lampung', 1525000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29638, -5.37395), 4326)::geography, 'verified', 'Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Nusantara Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Mahasiswa Perumahan', 'itera-lampung', 1275000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30793, -5.35069), 4326)::geography, 'verified', 'Jl. Belwis. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Mahasiswa Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Sejahtera', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32372, -5.36136), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Sejahtera' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Khairunnisa', 'itera-lampung', 1125000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3013, -5.36025), 4326)::geography, 'verified', 'Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Khairunnisa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Al-Barokah', 'itera-lampung', 600000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32394, -5.36444), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Al-Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Berkah', 'itera-lampung', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31955, -5.36319), 4326)::geography, 'verified', 'Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Berkah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Anggrek Belakang', 'itera-lampung', 875000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32463, -5.36232), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Anggrek Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Harmoni Jl.', 'itera-lampung', 1575000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30273, -5.36249), 4326)::geography, 'verified', 'Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Harmoni Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Kencana', 'itera-lampung', 1175000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3086, -5.3489), 4326)::geography, 'verified', 'Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Kencana' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Pertiwi Belakang', 'itera-lampung', 800000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32365, -5.36267), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Pertiwi Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Anggrek', 'itera-lampung', 900000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30596, -5.35251), 4326)::geography, 'verified', 'Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Anggrek' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Rindang', 'itera-lampung', 1475000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30496, -5.36215), 4326)::geography, 'verified', 'Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Rindang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Ganesha Sukarame', 'itera-lampung', 1100000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29857, -5.37031), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Ganesha Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Khairunnisa Perumahan', 'itera-lampung', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31069, -5.34726), 4326)::geography, 'verified', 'Jl. Nangka. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Khairunnisa Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Rindang Way', 'itera-lampung', 1450000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30242, -5.34815), 4326)::geography, 'verified', 'Jl. Lapas Jaya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Rindang Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Kencana Way', 'itera-lampung', 1400000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3021, -5.35209), 4326)::geography, 'verified', 'Gg. Kancil. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Kencana Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Khairunnisa Sukarame', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29535, -5.36796), 4326)::geography, 'verified', 'Jl. Korpri Raya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Khairunnisa Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Al-Hikmah', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.306, -5.35946), 4326)::geography, 'verified', 'Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Al-Hikmah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Harmoni Perumahan', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30717, -5.34957), 4326)::geography, 'verified', 'Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Harmoni Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Putra Jaya', 'itera-lampung', 1475000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29825, -5.37473), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Putra Jaya' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sakinah', 'itera-lampung', 700000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32411, -5.36453), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sakinah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Kenanga', 'itera-lampung', 1400000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33245, -5.35727), 4326)::geography, 'verified', 'Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Kenanga' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Kemuning Perumahan', 'itera-lampung', 925000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30931, -5.34776), 4326)::geography, 'verified', 'Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Kemuning Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Cendana', 'itera-lampung', 725000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3191, -5.36432), 4326)::geography, 'verified', 'Gang Tembus Asrama. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Cendana' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Sejahtera', 'itera-lampung', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30463, -5.36128), 4326)::geography, 'verified', 'Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Sejahtera' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Flamboyan', 'itera-lampung', 1100000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32285, -5.36062), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Flamboyan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Dahlia Jl.', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30359, -5.35807), 4326)::geography, 'verified', 'Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Dahlia Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Sejahtera Jl.', 'itera-lampung', 1175000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30245, -5.36422), 4326)::geography, 'verified', 'Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sejahtera Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Sakinah Sabah', 'itera-lampung', 600000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33365, -5.35387), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Sakinah Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Kemuning Perumahan', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30813, -5.35001), 4326)::geography, 'verified', 'Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Kemuning Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Flamboyan Sukarame', 'itera-lampung', 1525000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29457, -5.37069), 4326)::geography, 'verified', 'Jl. Korpri Raya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Flamboyan Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Dahlia', 'itera-lampung', 875000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32887, -5.35618), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Dahlia' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Sakinah', 'itera-lampung', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.3053, -5.36165), 4326)::geography, 'verified', 'Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Sakinah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Anggrek', 'itera-lampung', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33511, -5.35911), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Anggrek' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Kenanga Way', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30634, -5.35005), 4326)::geography, 'verified', 'Jl. Lapas Jaya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kenanga Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Melati', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33652, -5.35778), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Melati' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Putra Jaya Belakang', 'itera-lampung', 950000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32394, -5.36335), 4326)::geography, 'verified', 'Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Putra Jaya Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Ganesha', 'itera-lampung', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29766, -5.36901), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Ganesha' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Barokah', 'itera-lampung', 1700000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29245, -5.36978), 4326)::geography, 'verified', 'Jl. Korpri Raya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Pratama Sabah', 'itera-lampung', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.33512, -5.35753), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Pratama Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Mahasiswa Way', 'itera-lampung', 700000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30638, -5.35089), 4326)::geography, 'verified', 'Jl. Lapas Jaya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Mahasiswa Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Al-Barokah Terusan', 'itera-lampung', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31321, -5.3523), 4326)::geography, 'verified', 'Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Al-Barokah Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Al-Ikhlas Sukarame', 'itera-lampung', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.2976, -5.36785), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Al-Ikhlas Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Putra Jaya', 'itera-lampung', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30263, -5.34824), 4326)::geography, 'verified', 'Jl. Lapas Raya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Putra Jaya' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Ceria Belakang', 'itera-lampung', 1450000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32473, -5.36092), 4326)::geography, 'verified', 'Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Ceria Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Al-Barokah Belakang', 'itera-lampung', 675000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(105.32507, -5.36217), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Al-Barokah Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Berkah Jl.', 'itera-lampung', 1600000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30421, -5.35884), 4326)::geography, 'verified', 'Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Berkah Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Bintang', 'itera-lampung', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30516, -5.36049), 4326)::geography, 'verified', 'Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Bintang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Asri', 'itera-lampung', 1475000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.31798, -5.35573), 4326)::geography, 'verified', 'Gg. Hasan. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Asri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Mawar', 'itera-lampung', 1475000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30173, -5.35866), 4326)::geography, 'verified', 'Gg. Melati Airan. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Mawar' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Griya Indah', 'itera-lampung', 1725000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(105.2978, -5.3695), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Griya Indah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Sentosa Sukarame', 'itera-lampung', 1525000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","access_24h","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(105.29792, -5.3725), 4326)::geography, 'verified', 'Jl. Senopati. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sentosa Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Flamboyan Perumahan', 'itera-lampung', 925000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(105.30909, -5.34773), 4326)::geography, 'verified', 'Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Flamboyan Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Mawar', 'ui-depok', 575000, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82322, -6.36516), 4326)::geography, 'verified', 'Jl. H. Amat. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Mawar' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Asri Kukusan', 'ui-depok', 1425000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82101, -6.36673), 4326)::geography, 'verified', 'Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Asri Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Harmoni Kukusan', 'ui-depok', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82354, -6.35526), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Harmoni Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Cendana Kukusan', 'ui-depok', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82418, -6.35741), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Cendana Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Pelangi Pondok', 'ui-depok', 675000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8331, -6.36351), 4326)::geography, 'verified', 'Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Pelangi Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Ceria Kukusan', 'ui-depok', 1750000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82223, -6.37021), 4326)::geography, 'verified', 'Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Ceria Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Sakinah Kober', 'ui-depok', 1425000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83337, -6.36404), 4326)::geography, 'verified', 'Jl. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Sakinah Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Permata Kober', 'ui-depok', 1250000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83792, -6.36783), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Permata Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Putri Cantika Kukusan', 'ui-depok', 1650000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82289, -6.36941), 4326)::geography, 'verified', 'Jl. Mandor Togog. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Putri Cantika Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Mandiri', 'ui-depok', 750000, '["wifi","desk_chair","closet","parking_motorcycle"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82448, -6.35842), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Mandiri' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Kencana', 'ui-depok', 1850000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82398, -6.36693), 4326)::geography, 'verified', 'Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Kencana' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Amanah', 'ui-depok', 650000, '["wifi","desk_chair","closet","parking_motorcycle"]'::jsonb, ST_SetSRID(ST_MakePoint(106.837, -6.36461), 4326)::geography, 'verified', 'Jl. Sawo. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Amanah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Al-Barokah Kukusan', 'ui-depok', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82336, -6.3577), 4326)::geography, 'verified', 'Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Al-Barokah Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Cendana Kober', 'ui-depok', 1750000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83685, -6.36484), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Cendana Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Rindang', 'ui-depok', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82376, -6.35829), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Rindang' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Pertiwi Pondok', 'ui-depok', 2375000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83481, -6.36381), 4326)::geography, 'verified', 'Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Pertiwi Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Rindang', 'ui-depok', 1650000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83581, -6.36865), 4326)::geography, 'verified', 'Jl. Sawo. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Rindang' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Putri Cantika Kober', 'ui-depok', 1650000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83748, -6.36756), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Putri Cantika Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Anggrek Kukusan', 'ui-depok', 1425000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8254, -6.35667), 4326)::geography, 'verified', 'Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Anggrek Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sentosa Kukusan', 'ui-depok', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82561, -6.35755), 4326)::geography, 'verified', 'Jl. STM Mandiri. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sentosa Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Mawar Kukusan', 'ui-depok', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82275, -6.36804), 4326)::geography, 'verified', 'Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Mawar Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Mandiri Pondok', 'ui-depok', 1650000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83127, -6.36184), 4326)::geography, 'verified', 'Jl. Margonda Raya. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Mandiri Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sentosa Kober', 'ui-depok', 1075000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83391, -6.3693), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sentosa Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Cendana Kukusan', 'ui-depok', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82231, -6.3707), 4326)::geography, 'verified', 'Jl. Mandor Togog. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Cendana Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Mandiri Kukusan', 'ui-depok', 1225000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82202, -6.3557), 4326)::geography, 'verified', 'Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Mandiri Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Putri Cantika Pondok', 'ui-depok', 1800000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83399, -6.36279), 4326)::geography, 'verified', 'Jl. Margonda Raya. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Putri Cantika Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Mandiri Kukusan', 'ui-depok', 1375000, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82154, -6.36641), 4326)::geography, 'verified', 'Jl. H. Amat. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Mandiri Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Pertiwi Pondok', 'ui-depok', 1225000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8318, -6.3635), 4326)::geography, 'verified', 'Jl. Margonda Raya. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Pertiwi Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Putri Cantika Kukusan', 'ui-depok', 700000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82256, -6.36543), 4326)::geography, 'verified', 'Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Putri Cantika Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Sakinah', 'ui-depok', 1575000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83112, -6.36392), 4326)::geography, 'verified', 'Jl. Kancil. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Sakinah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Amanah Kukusan', 'ui-depok', 1525000, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(106.8253, -6.35451), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Amanah Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Amanah Kukusan', 'ui-depok', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82575, -6.35401), 4326)::geography, 'verified', 'Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Amanah Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Sentosa', 'ui-depok', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83639, -6.36628), 4326)::geography, 'verified', 'Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Sentosa' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Melati Pondok', 'ui-depok', 1825000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83029, -6.36024), 4326)::geography, 'verified', 'Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Melati Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Kemuning', 'ui-depok', 1125000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82432, -6.35848), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Kemuning' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Kencana Kukusan', 'ui-depok', 1400000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater"]'::jsonb, ST_SetSRID(ST_MakePoint(106.82128, -6.35582), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Kencana Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Al-Ikhlas', 'ui-depok', 1925000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83054, -6.35901), 4326)::geography, 'verified', 'Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Al-Ikhlas' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Dahlia Kober', 'ui-depok', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(106.83731, -6.36796), 4326)::geography, 'verified', 'Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Dahlia Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Pelangi', 'unand-limau-manis', 1350000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45631, -0.91566), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Pelangi' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Mawar Pasar', 'unand-limau-manis', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44613, -0.92583), 4326)::geography, 'verified', 'Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Mawar Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Cahaya', 'unand-limau-manis', 1250000, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(100.46034, -0.91212), 4326)::geography, 'verified', 'Batu Busuk. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Cahaya' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Pelangi Limau', 'unand-limau-manis', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45889, -0.91518), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Pelangi Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Mawar', 'unand-limau-manis', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44806, -0.92273), 4326)::geography, 'verified', 'Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Mawar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Putra Jaya', 'unand-limau-manis', 950000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44152, -0.92844), 4326)::geography, 'verified', 'Simpang Pisang. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Putra Jaya' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Permata', 'unand-limau-manis', 1325000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45682, -0.91071), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Permata' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Kencana Pasar', 'unand-limau-manis', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44996, -0.92379), 4326)::geography, 'verified', 'Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Kencana Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Sakinah Pasar', 'unand-limau-manis', 575000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44961, -0.9264), 4326)::geography, 'verified', 'Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sakinah Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Srikandi', 'unand-limau-manis', 1275000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45663, -0.91569), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Srikandi' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Pratama', 'unand-limau-manis', 1500000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44778, -0.92224), 4326)::geography, 'verified', 'Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Pratama' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Melati Pauh', 'unand-limau-manis', 700000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44082, -0.92646), 4326)::geography, 'verified', 'Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Melati Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Harmoni', 'unand-limau-manis', 1150000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.4642, -0.91709), 4326)::geography, 'verified', 'Batu Busuk. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Harmoni' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Sentosa Pauh', 'unand-limau-manis', 950000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44375, -0.92485), 4326)::geography, 'verified', 'Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Sentosa Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Putra Jaya Pauh', 'unand-limau-manis', 1450000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44585, -0.92615), 4326)::geography, 'verified', 'Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Putra Jaya Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Asri Limau', 'unand-limau-manis', 1125000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.46065, -0.91637), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Asri Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Al-Hikmah Limau', 'unand-limau-manis', 1000000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.46366, -0.91144), 4326)::geography, 'verified', 'Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Al-Hikmah Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kos Anggrek Limau', 'unand-limau-manis', 1100000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45752, -0.91312), 4326)::geography, 'verified', 'Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Anggrek Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Mandiri Pasar', 'unand-limau-manis', 1050000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44716, -0.92352), 4326)::geography, 'verified', 'Jl. Simpang Kampus. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Mandiri Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Paviliun Kenanga Limau', 'unand-limau-manis', 1225000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45935, -0.91022), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Kenanga Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Wisma Dahlia Limau', 'unand-limau-manis', 1100000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45614, -0.91547), 4326)::geography, 'verified', 'Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Dahlia Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Flamboyan', 'unand-limau-manis', 1550000, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44939, -0.92684), 4326)::geography, 'verified', 'Jl. Simpang Kampus. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Flamboyan' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Asrama Amanah', 'unand-limau-manis', 1250000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44768, -0.92372), 4326)::geography, 'verified', 'Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Amanah' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Griya Ceria', 'unand-limau-manis', 1600000, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen","parking_car"]'::jsonb, ST_SetSRID(ST_MakePoint(100.46273, -0.91564), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Ceria' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Kost Griya Indah Pasar', 'unand-limau-manis', 1300000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44633, -0.92459), 4326)::geography, 'verified', 'Jl. Simpang Kampus. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Griya Indah Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Kemuning', 'unand-limau-manis', 1000000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45834, -0.91305), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Kemuning' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'D''Kost Berkah Pasar', 'unand-limau-manis', 750000, '["wifi","desk_chair","closet","parking_motorcycle"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44606, -0.92641), 4326)::geography, 'verified', 'Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Berkah Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Srikandi Pasar', 'unand-limau-manis', 1125000, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44934, -0.92509), 4326)::geography, 'verified', 'Jl. Simpang Kampus. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Srikandi Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Rumah Kos Ganesha Pauh', 'unand-limau-manis', 725000, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.44022, -0.92392), 4326)::geography, 'verified', 'Pasar Pauh. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Ganesha Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Berkah Limau', 'unand-limau-manis', 1200000, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, ST_SetSRID(ST_MakePoint(100.45997, -0.91645), 4326)::geography, 'verified', 'Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Berkah Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT 'Pondok Dahlia Limau', 'unand-limau-manis', 675000, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, ST_SetSRID(ST_MakePoint(100.46106, -0.91675), 4326)::geography, 'verified', 'Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Dahlia Limau' AND campus_id = 'unand-limau-manis'
);

COMMIT;

-- Finished seeding KosMatch database!
