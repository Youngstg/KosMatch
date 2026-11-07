-- =====================================================================
-- KosMatch v2: High-Volume Grounded Dataset with Commute Cache
-- Total: 285 Kos Listings | 1004 POIs | 3096 Pre-Cached Commute Routes
-- Campuses: ITERA Lampung (120 Kos), UI Depok (56 Kos), UNAND Padang (45 Kos)
-- =====================================================================

BEGIN;

-- 1. PILOT CAMPUSES
INSERT INTO public.campuses (id, name, short_name, city, geom, is_pilot) VALUES
  ('ui-depok', 'Universitas Indonesia (Depok)', 'UI Depok', 'Depok', ST_SetSRID(ST_MakePoint(106.827, -6.362), 4326)::geography, true),
  ('unand-limau-manis', 'Universitas Andalas (Limau Manis)', 'Unand Padang', 'Padang', ST_SetSRID(ST_MakePoint(100.4602, -0.9143), 4326)::geography, true),
  ('itera-lampung', 'Institut Teknologi Sumatera (ITERA)', 'ITERA Lampung', 'Lampung Selatan', ST_SetSRID(ST_MakePoint(105.3148, -5.3584), 4326)::geography, true),
  ('unila-bandarlampung', 'Universitas Lampung', 'Unila Lampung', 'Bandar Lampung', ST_SetSRID(ST_MakePoint(105.2435, -5.3644), 4326)::geography, true),
  ('unp-padang', 'Universitas Negeri Padang', 'UNP Padang', 'Padang', ST_SetSRID(ST_MakePoint(100.3524, -0.8975), 4326)::geography, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  short_name = EXCLUDED.short_name,
  city = EXCLUDED.city,
  geom = EXCLUDED.geom,
  is_pilot = EXCLUDED.is_pilot;

-- 2. POINTS OF INTEREST (1004 POIs)
INSERT INTO public.pois (osm_type, osm_id, category, name, tags, geom) VALUES
  ('N', 4062837188, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2851902, -5.3616906), 4326)::geography),
  ('N', 4072549501, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.292667, -5.3337713), 4326)::geography),
  ('N', 4072549776, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2920595, -5.3391789), 4326)::geography),
  ('N', 4072549998, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2895462, -5.341717), 4326)::geography),
  ('N', 4072593351, 'worship', 'Musholla / Masjid', '{"amenity":"place_of_worship","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2918375, -5.350041), 4326)::geography),
  ('N', 4601798389, 'worship', 'Masjid baiturohim', '{"amenity":"place_of_worship","name":"Masjid baiturohim","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2994954, -5.366407), 4326)::geography),
  ('N', 5630021722, 'pharmacy', 'Imanuel', '{"amenity":"hospital","name":"Imanuel"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2850738, -5.3836445), 4326)::geography),
  ('N', 5630021723, 'convenience', 'Transmart', '{"name":"Transmart","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2818736, -5.382963), 4326)::geography),
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
  ('N', 5367328440, 'convenience', 'Grocery Outlet', '{"name":"Grocery Outlet","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8493017, -6.3722567), 4326)::geography),
  ('N', 5367337395, 'convenience', 'Grocery Outlet', '{"name":"Grocery Outlet","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8495189, -6.3746971), 4326)::geography),
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
  ('N', 13722542613, 'convenience', 'Warung Abah', '{"name":"Warung Abah","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8166279, -6.3437342), 4326)::geography),
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
  ('W', 300674718, 'food', 'Warung Kinasih', '{"amenity":"marketplace","building":"yes","name":"Warung Kinasih"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8359739, -6.3641742), 4326)::geography),
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
  ('W', 309441787, 'convenience', 'alfa x', '{"building":"yes","name":"alfa x","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8417001, -6.3550841), 4326)::geography),
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
  ('W', 504492050, 'convenience', 'Prima Freshmart', '{"building":"yes","name":"Prima Freshmart","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8431701, -6.3611637), 4326)::geography),
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
  ('W', 511013859, 'food', 'Pasar Timbul Ciganjur', '{"addr:full":"Jalan Moh Kahfi I No. 84","amenity":"marketplace","name":"Pasar Timbul Ciganjur","source":"HOT_InAWARESurvey_2017"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8014458, -6.3500468), 4326)::geography),
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
  ('W', 1553814481, 'convenience', 'Super Indo', '{"branch":"Ciganjur","brand":"Super Indo","brand:wikidata":"Q12518060","building":"yes","name":"Super Indo","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8010564, -6.3573071), 4326)::geography),
  ('N', 2087856605, 'atm', 'ATM Bank Nagari Psr. Bandar Buat', '{"amenity":"atm","name":"ATM Bank Nagari Psr. Bandar Buat","operator":"Bank Nagari","source":"survey"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4352196, -0.9488662), 4326)::geography),
  ('N', 2087860221, 'food', 'Pasar Bandar Buat', '{"amenity":"marketplace","description":"Macet tiap Selasa dan Sabtu","name":"Pasar Bandar Buat"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4356589, -0.9492759), 4326)::geography),
  ('N', 2090616809, 'convenience', 'Kurnia Mart', '{"name":"Kurnia Mart","shop":"convenience"}'::jsonb, ST_SetSRID(ST_MakePoint(100.451121, -0.9476882), 4326)::geography),
  ('N', 3363107936, 'worship', 'Mushala FIB Unand', '{"amenity":"place_of_worship","name":"Mushala FIB Unand","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.461443, -0.9164436), 4326)::geography),
  ('N', 4052751820, 'convenience', 'Citra Swalayan Sungai Balang', '{"addr:city":"Padang","addr:street":"Jl. Pasar Baru - Bandar Buat","name":"Citra Swalayan Sungai Balang","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4357537, -0.9454644), 4326)::geography),
  ('N', 4052799503, 'pharmacy', 'Puskesmas Lubuk Kilangan', '{"amenity":"clinic","name":"Puskesmas Lubuk Kilangan"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4452855, -0.9495094), 4326)::geography),
  ('N', 4052807989, 'worship', 'Mushalla Al-Ikhlas', '{"amenity":"place_of_worship","denomination":"sunni","name":"Mushalla Al-Ikhlas","place_of_worship":"musalla","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.450933, -0.9460678), 4326)::geography),
  ('N', 4054058596, 'worship', 'Masjid Nurul Huda Simpang Piai', '{"amenity":"place_of_worship","name":"Masjid Nurul Huda Simpang Piai","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4336626, -0.9379493), 4326)::geography),
  ('N', 4099151315, 'food', 'Queen Cafe', '{"amenity":"cafe","internet_access":"wlan","name":"Queen Cafe"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4617036, -0.9160585), 4326)::geography),
  ('N', 4883052491, 'worship', 'Masjid Istiqlal', '{"amenity":"place_of_worship","name":"Masjid Istiqlal","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.423369, -0.9312641), 4326)::geography),
  ('N', 4883052970, 'worship', 'Masjid Raya', '{"amenity":"place_of_worship","name":"Masjid Raya","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4257432, -0.9318492), 4326)::geography),
  ('N', 4883055478, 'worship', 'Masjid Ahlussunnah', '{"amenity":"place_of_worship","name":"Masjid Ahlussunnah","religion":"muslim"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4307513, -0.9295475), 4326)::geography),
  ('N', 5239181879, 'convenience', 'Supermaket zai maju', '{"name":"Supermaket zai maju","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4550747, -0.9137899), 4326)::geography),
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
  ('W', 537315096, 'food', 'Pasar Bandar Buat', '{"addr:full":"RT 02 RW 03 Bandar Buat","amenity":"marketplace","building":"yes","name":"Pasar Bandar Buat"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4355174, -0.9491287), 4326)::geography),
  ('W', 541852284, 'convenience', 'rumah zai', '{"name":"rumah zai","shop":"supermarket"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4547916, -0.9136446), 4326)::geography),
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
  ('N', 960001, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31098, -5.34951), 4326)::geography),
  ('N', 960002, 'laundry', 'Laundry Kiloan Express Super Wash Kiloan 1 Day', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33168, -5.35581), 4326)::geography),
  ('N', 960003, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30543, -5.35283), 4326)::geography),
  ('N', 960004, 'food', 'Kafe Nugas & Coworking Sudut Tenang Study Cafe', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31013, -5.34973), 4326)::geography),
  ('N', 960005, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30247, -5.36375), 4326)::geography),
  ('N', 960006, 'laundry', 'Laundry Kiloan Express Super Wash Kiloan 1 Day', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32025, -5.36294), 4326)::geography),
  ('N', 960007, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33279, -5.3568), 4326)::geography),
  ('N', 960008, 'convenience', 'Percetakan & Fotokopi Berkah Fotokopi 24 Jam', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32867, -5.35574), 4326)::geography),
  ('N', 960009, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30085, -5.36182), 4326)::geography),
  ('N', 960010, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31971, -5.36323), 4326)::geography),
  ('N', 960011, 'food', 'Warung Makan & Ampera Bakso Solo & Mie Ayam Wonogiri', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29831, -5.37403), 4326)::geography),
  ('N', 960012, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31675, -5.35367), 4326)::geography),
  ('N', 960013, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30565, -5.36307), 4326)::geography),
  ('N', 960014, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30539, -5.35092), 4326)::geography),
  ('N', 960015, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32245, -5.36016), 4326)::geography),
  ('N', 960016, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29687, -5.37052), 4326)::geography),
  ('N', 960017, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30191, -5.36492), 4326)::geography),
  ('N', 960018, 'food', 'Kafe Nugas & Coworking Sudut Tenang Study Cafe', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30581, -5.36257), 4326)::geography),
  ('N', 960019, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32873, -5.36087), 4326)::geography),
  ('N', 960020, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30743, -5.34903), 4326)::geography),
  ('N', 960021, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32205, -5.35949), 4326)::geography),
  ('N', 960022, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2924, -5.37412), 4326)::geography),
  ('N', 960023, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30599, -5.36044), 4326)::geography),
  ('N', 960024, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32805, -5.35483), 4326)::geography),
  ('N', 960025, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29808, -5.37052), 4326)::geography),
  ('N', 960026, 'food', 'Warung Makan & Ampera Pecel Lele & Bebek Arema', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29242, -5.37377), 4326)::geography),
  ('N', 960027, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33397, -5.35277), 4326)::geography),
  ('N', 960028, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30404, -5.35088), 4326)::geography),
  ('N', 960029, 'convenience', 'Minimarket & Agen Sembako Chandra Supermarket Grosir', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32316, -5.36292), 4326)::geography),
  ('N', 960030, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3095, -5.3494), 4326)::geography),
  ('N', 960031, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30873, -5.35167), 4326)::geography),
  ('N', 960032, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3283, -5.35384), 4326)::geography),
  ('N', 960033, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30821, -5.35114), 4326)::geography),
  ('N', 960034, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31694, -5.355), 4326)::geography),
  ('N', 960035, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32919, -5.36174), 4326)::geography),
  ('N', 960036, 'food', 'Warung Makan & Ampera Nasi Uduk & Pecel Barokah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3062, -5.35094), 4326)::geography),
  ('N', 960037, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33198, -5.36106), 4326)::geography),
  ('N', 960038, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30043, -5.36029), 4326)::geography),
  ('N', 960039, 'convenience', 'Bengkel Motor & Tambal Ban Sinar Jaya Motor & Ganti Oli', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31653, -5.35488), 4326)::geography),
  ('N', 960040, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30682, -5.34941), 4326)::geography),
  ('N', 960041, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30392, -5.36378), 4326)::geography),
  ('N', 960042, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32393, -5.36377), 4326)::geography),
  ('N', 960043, 'convenience', 'Minimarket & Agen Sembako Chandra Supermarket Grosir', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30734, -5.35186), 4326)::geography),
  ('N', 960044, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30705, -5.3492), 4326)::geography),
  ('N', 960045, 'food', 'Warung Makan & Ampera Bakso Solo & Mie Ayam Wonogiri', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29468, -5.36748), 4326)::geography),
  ('N', 960046, 'convenience', 'Bengkel Motor & Tambal Ban Sinar Jaya Motor & Ganti Oli', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30319, -5.35019), 4326)::geography),
  ('N', 960047, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30565, -5.36354), 4326)::geography),
  ('N', 960048, 'convenience', 'Bengkel Motor & Tambal Ban AHASS Honda Motor Rujukan', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31986, -5.3648), 4326)::geography),
  ('N', 960049, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31925, -5.36121), 4326)::geography),
  ('N', 960050, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32115, -5.36367), 4326)::geography),
  ('N', 960051, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33238, -5.35889), 4326)::geography),
  ('N', 960052, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Presisi Tubeless Mahasiswa', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33117, -5.35858), 4326)::geography),
  ('N', 960053, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30388, -5.36446), 4326)::geography),
  ('N', 960054, 'food', 'Warung Makan & Ampera Pecel Lele & Bebek Arema', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3033, -5.3483), 4326)::geography),
  ('N', 960055, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Presisi Tubeless Mahasiswa', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31231, -5.35279), 4326)::geography),
  ('N', 960056, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30132, -5.35954), 4326)::geography),
  ('N', 960057, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3021, -5.35812), 4326)::geography),
  ('N', 960058, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31052, -5.35093), 4326)::geography),
  ('N', 960059, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32909, -5.35715), 4326)::geography),
  ('N', 960060, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30069, -5.36323), 4326)::geography),
  ('N', 960061, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29566, -5.37232), 4326)::geography),
  ('N', 960062, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29817, -5.37234), 4326)::geography),
  ('N', 960063, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30412, -5.35926), 4326)::geography),
  ('N', 960064, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29635, -5.36974), 4326)::geography),
  ('N', 960065, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30395, -5.35033), 4326)::geography),
  ('N', 960066, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30745, -5.35175), 4326)::geography),
  ('N', 960067, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32512, -5.36339), 4326)::geography),
  ('N', 960068, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3134, -5.35684), 4326)::geography),
  ('N', 960069, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32984, -5.36072), 4326)::geography),
  ('N', 960070, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30805, -5.35112), 4326)::geography),
  ('N', 960071, 'convenience', 'Percetakan & Fotokopi Kharisma Grafika & Scan', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30721, -5.35153), 4326)::geography),
  ('N', 960072, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30501, -5.35384), 4326)::geography),
  ('N', 960073, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31354, -5.35301), 4326)::geography),
  ('N', 960074, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33672, -5.35869), 4326)::geography),
  ('N', 960075, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Rawat Inap Pratama Sehat', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30881, -5.34862), 4326)::geography),
  ('N', 960076, 'convenience', 'Percetakan & Fotokopi Mitra Mahasiswa ATK', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29458, -5.37364), 4326)::geography),
  ('N', 960077, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30658, -5.35103), 4326)::geography),
  ('N', 960078, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32391, -5.36158), 4326)::geography),
  ('N', 960079, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32168, -5.3601), 4326)::geography),
  ('N', 960080, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33536, -5.35224), 4326)::geography),
  ('N', 960081, 'food', 'Warung Makan & Ampera Bakso Solo & Mie Ayam Wonogiri', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32914, -5.35335), 4326)::geography),
  ('N', 960082, 'convenience', 'Bengkel Motor & Tambal Ban Sinar Jaya Motor & Ganti Oli', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30408, -5.35386), 4326)::geography),
  ('N', 960083, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32586, -5.3622), 4326)::geography),
  ('N', 960084, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30797, -5.34893), 4326)::geography),
  ('N', 960085, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29942, -5.36656), 4326)::geography),
  ('N', 960086, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30535, -5.36253), 4326)::geography),
  ('N', 960087, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30461, -5.34808), 4326)::geography),
  ('N', 960088, 'food', 'Warung Makan & Ampera Bakso Solo & Mie Ayam Wonogiri', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30721, -5.34744), 4326)::geography),
  ('N', 960089, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Rawat Inap Pratama Sehat', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30726, -5.35038), 4326)::geography),
  ('N', 960090, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31379, -5.35602), 4326)::geography),
  ('N', 960091, 'food', 'Warung Makan & Ampera RM Ampera Salero Minang', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33448, -5.36165), 4326)::geography),
  ('N', 960092, 'convenience', 'Minimarket & Agen Sembako Chandra Supermarket Grosir', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29904, -5.36944), 4326)::geography),
  ('N', 960093, 'food', 'Warung Makan & Ampera Pecel Lele & Bebek Arema', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31603, -5.35247), 4326)::geography),
  ('N', 960094, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3072, -5.3504), 4326)::geography),
  ('N', 960095, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31047, -5.3487), 4326)::geography),
  ('N', 960096, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3281, -5.35487), 4326)::geography),
  ('N', 960097, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31762, -5.35201), 4326)::geography),
  ('N', 960098, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32323, -5.36012), 4326)::geography),
  ('N', 960099, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29825, -5.3685), 4326)::geography),
  ('N', 960100, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33531, -5.35302), 4326)::geography),
  ('N', 960101, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32295, -5.36204), 4326)::geography),
  ('N', 960102, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30275, -5.35962), 4326)::geography),
  ('N', 960103, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30401, -5.3599), 4326)::geography),
  ('N', 960104, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30541, -5.3519), 4326)::geography),
  ('N', 960105, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31062, -5.35097), 4326)::geography),
  ('N', 960106, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31951, -5.36376), 4326)::geography),
  ('N', 960107, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31676, -5.35575), 4326)::geography),
  ('N', 960108, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30089, -5.3627), 4326)::geography),
  ('N', 960109, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3054, -5.35269), 4326)::geography),
  ('N', 960110, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30395, -5.35988), 4326)::geography),
  ('N', 960111, 'convenience', 'Bengkel Motor & Tambal Ban Sinar Jaya Motor & Ganti Oli', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30796, -5.351), 4326)::geography),
  ('N', 960112, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3022, -5.36136), 4326)::geography),
  ('N', 960113, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33112, -5.36119), 4326)::geography),
  ('N', 960114, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3045, -5.36378), 4326)::geography),
  ('N', 960115, 'food', 'Warung Makan & Ampera Nasi Uduk & Pecel Barokah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30296, -5.36029), 4326)::geography),
  ('N', 960116, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30179, -5.36154), 4326)::geography),
  ('N', 960117, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31996, -5.36029), 4326)::geography),
  ('N', 960118, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30382, -5.36348), 4326)::geography),
  ('N', 960119, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32511, -5.36129), 4326)::geography),
  ('N', 960120, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30459, -5.35018), 4326)::geography),
  ('N', 960121, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30491, -5.35008), 4326)::geography),
  ('N', 960122, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30556, -5.34992), 4326)::geography),
  ('N', 960123, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3045, -5.3518), 4326)::geography),
  ('N', 960124, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31003, -5.35156), 4326)::geography),
  ('N', 960125, 'food', 'Warung Makan & Ampera RM Ampera Salero Minang', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30303, -5.34981), 4326)::geography),
  ('N', 960126, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31676, -5.35308), 4326)::geography),
  ('N', 960127, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29483, -5.37303), 4326)::geography),
  ('N', 960128, 'convenience', 'Minimarket & Agen Sembako Chandra Supermarket Grosir', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3173, -5.35578), 4326)::geography),
  ('N', 960129, 'food', 'Warung Makan & Ampera Nasi Uduk & Pecel Barokah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30443, -5.36098), 4326)::geography),
  ('N', 960130, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29616, -5.37114), 4326)::geography),
  ('N', 960131, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33364, -5.35664), 4326)::geography),
  ('N', 960132, 'convenience', 'Percetakan & Fotokopi Mitra Mahasiswa ATK', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30238, -5.34936), 4326)::geography),
  ('N', 960133, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3146, -5.35201), 4326)::geography),
  ('N', 960134, 'convenience', 'Percetakan & Fotokopi Mitra Mahasiswa ATK', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31357, -5.35302), 4326)::geography),
  ('N', 960135, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29566, -5.36795), 4326)::geography),
  ('N', 960136, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30438, -5.35354), 4326)::geography),
  ('N', 960137, 'convenience', 'Percetakan & Fotokopi Berkah Fotokopi 24 Jam', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32915, -5.36187), 4326)::geography),
  ('N', 960138, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31549, -5.35331), 4326)::geography),
  ('N', 960139, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32203, -5.36292), 4326)::geography),
  ('N', 960140, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30526, -5.36499), 4326)::geography),
  ('N', 960141, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32264, -5.35963), 4326)::geography),
  ('N', 960142, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32314, -5.36416), 4326)::geography),
  ('N', 960143, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29599, -5.37416), 4326)::geography),
  ('N', 960144, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30204, -5.35317), 4326)::geography),
  ('N', 960145, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30777, -5.34864), 4326)::geography),
  ('N', 960146, 'food', 'Warung Makan & Ampera Soto Lamongan Mas Bejo', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3087, -5.34993), 4326)::geography),
  ('N', 960147, 'food', 'Kafe Nugas & Coworking Sudut Tenang Study Cafe', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2981, -5.36989), 4326)::geography),
  ('N', 960148, 'food', 'Kafe Nugas & Coworking Warkop Madura 24 Jam Colokan', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30494, -5.35825), 4326)::geography),
  ('N', 960149, 'food', 'Warung Makan & Ampera Soto Lamongan Mas Bejo', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3289, -5.35362), 4326)::geography),
  ('N', 960150, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31274, -5.35641), 4326)::geography),
  ('N', 960151, 'food', 'Warung Makan & Ampera Soto Lamongan Mas Bejo', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Belakang Wisma & Embung ITERA","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32344, -5.36103), 4326)::geography),
  ('N', 960152, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Presisi Tubeless Mahasiswa', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33453, -5.36194), 4326)::geography),
  ('N', 960153, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3026, -5.35074), 4326)::geography),
  ('N', 960154, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Sukarame & Korpri Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29748, -5.36737), 4326)::geography),
  ('N', 960155, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Rawat Inap Pratama Sehat', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Way Huwi / Lapas Raya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30308, -5.35242), 4326)::geography),
  ('N', 960156, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Terusan Ryacudu (Gerbang Utama)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31417, -5.35223), 4326)::geography),
  ('N', 960157, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Sabah Balau & Tanjung Bintang","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33427, -5.36155), 4326)::geography),
  ('N', 960158, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30098, -5.36073), 4326)::geography),
  ('N', 960159, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Perumahan Pemda Way Huwi","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31, -5.34767), 4326)::geography),
  ('N', 960160, 'convenience', 'Percetakan & Fotokopi Mitra Mahasiswa ATK', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Jl. Airan Raya & Airan Jaya","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30052, -5.36446), 4326)::geography),
  ('N', 970001, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44356, -0.92516), 4326)::geography),
  ('N', 970002, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4456, -0.92612), 4326)::geography),
  ('N', 970003, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46316, -0.91785), 4326)::geography),
  ('N', 970004, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45697, -0.91109), 4326)::geography),
  ('N', 970005, 'food', 'Warung Makan & Ampera Soto Lamongan Mas Bejo', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44768, -0.92556), 4326)::geography),
  ('N', 970006, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44816, -0.92331), 4326)::geography),
  ('N', 970007, 'food', 'Warung Makan & Ampera Bakso Solo & Mie Ayam Wonogiri', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45829, -0.91497), 4326)::geography),
  ('N', 970008, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45646, -0.91706), 4326)::geography),
  ('N', 970009, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44957, -0.9269), 4326)::geography),
  ('N', 970010, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4467, -0.92476), 4326)::geography),
  ('N', 970011, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4484, -0.92615), 4326)::geography),
  ('N', 970012, 'food', 'Kafe Nugas & Coworking Warkop Madura 24 Jam Colokan', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44869, -0.92367), 4326)::geography),
  ('N', 970013, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44834, -0.92358), 4326)::geography),
  ('N', 970014, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Rawat Inap Pratama Sehat', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46467, -0.9141), 4326)::geography),
  ('N', 970015, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44772, -0.92506), 4326)::geography),
  ('N', 970016, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45657, -0.91252), 4326)::geography),
  ('N', 970017, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44867, -0.92531), 4326)::geography),
  ('N', 970018, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44401, -0.92613), 4326)::geography),
  ('N', 970019, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44738, -0.92693), 4326)::geography),
  ('N', 970020, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46303, -0.91293), 4326)::geography),
  ('N', 970021, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45994, -0.9158), 4326)::geography),
  ('N', 970022, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45643, -0.91281), 4326)::geography),
  ('N', 970023, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44623, -0.92368), 4326)::geography),
  ('N', 970024, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44022, -0.92643), 4326)::geography),
  ('N', 970025, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44088, -0.92898), 4326)::geography),
  ('N', 970026, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44156, -0.92521), 4326)::geography),
  ('N', 970027, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45618, -0.91616), 4326)::geography),
  ('N', 970028, 'food', 'Warung Makan & Ampera RM Ampera Salero Minang', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44611, -0.9237), 4326)::geography),
  ('N', 970029, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44596, -0.92764), 4326)::geography),
  ('N', 970030, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44989, -0.92575), 4326)::geography),
  ('N', 970031, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44028, -0.92319), 4326)::geography),
  ('N', 970032, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4462, -0.92596), 4326)::geography),
  ('N', 970033, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44031, -0.92816), 4326)::geography),
  ('N', 970034, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Presisi Tubeless Mahasiswa', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44148, -0.92823), 4326)::geography),
  ('N', 970035, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46027, -0.91497), 4326)::geography),
  ('N', 970036, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46482, -0.9112), 4326)::geography),
  ('N', 970037, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44887, -0.92691), 4326)::geography),
  ('N', 970038, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46258, -0.91526), 4326)::geography),
  ('N', 970039, 'food', 'Kafe Nugas & Coworking Sudut Tenang Study Cafe', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46443, -0.91158), 4326)::geography),
  ('N', 970040, 'food', 'Warung Makan & Ampera Pecel Lele & Bebek Arema', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44128, -0.92656), 4326)::geography),
  ('N', 970041, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44926, -0.92368), 4326)::geography),
  ('N', 970042, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44228, -0.92618), 4326)::geography),
  ('N', 970043, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Limau Manis","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46405, -0.91581), 4326)::geography),
  ('N', 970044, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pauh","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4439, -0.92388), 4326)::geography),
  ('N', 970045, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pasar Baru","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44682, -0.92565), 4326)::geography),
  ('N', 980001, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83692, -6.36444), 4326)::geography),
  ('N', 980002, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83422, -6.36998), 4326)::geography),
  ('N', 980003, 'convenience', 'Bengkel Motor & Tambal Ban AHASS Honda Motor Rujukan', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83078, -6.36378), 4326)::geography),
  ('N', 980004, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.835, -6.36566), 4326)::geography),
  ('N', 980005, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81855, -6.36524), 4326)::geography),
  ('N', 980006, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83715, -6.36989), 4326)::geography),
  ('N', 980007, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83659, -6.36497), 4326)::geography),
  ('N', 980008, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82146, -6.35724), 4326)::geography),
  ('N', 980009, 'convenience', 'Percetakan & Fotokopi Mitra Mahasiswa ATK', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82371, -6.36845), 4326)::geography),
  ('N', 980010, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82272, -6.35613), 4326)::geography),
  ('N', 980011, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8204, -6.36757), 4326)::geography),
  ('N', 980012, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83028, -6.35971), 4326)::geography),
  ('N', 980013, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8185, -6.37073), 4326)::geography),
  ('N', 980014, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83732, -6.36335), 4326)::geography),
  ('N', 980015, 'convenience', 'Bengkel Motor & Tambal Ban Sinar Jaya Motor & Ganti Oli', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82055, -6.36671), 4326)::geography),
  ('N', 980016, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Rawat Inap Pratama Sehat', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82397, -6.3574), 4326)::geography),
  ('N', 980017, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83742, -6.36768), 4326)::geography),
  ('N', 980018, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83106, -6.3622), 4326)::geography),
  ('N', 980019, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82395, -6.35757), 4326)::geography),
  ('N', 980020, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83113, -6.36011), 4326)::geography),
  ('N', 980021, 'laundry', 'Laundry Kiloan Express Super Wash Kiloan 1 Day', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81933, -6.36743), 4326)::geography),
  ('N', 980022, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82219, -6.37012), 4326)::geography),
  ('N', 980023, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83405, -6.36458), 4326)::geography),
  ('N', 980024, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83574, -6.36962), 4326)::geography),
  ('N', 980025, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82372, -6.35573), 4326)::geography),
  ('N', 980026, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83432, -6.36919), 4326)::geography),
  ('N', 980027, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82298, -6.35939), 4326)::geography),
  ('N', 980028, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82244, -6.36564), 4326)::geography),
  ('N', 980029, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83208, -6.36322), 4326)::geography),
  ('N', 980030, 'food', 'Warung Makan & Ampera Bakso Solo & Mie Ayam Wonogiri', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83283, -6.36343), 4326)::geography),
  ('N', 980031, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Kukusan Kelurahan","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82495, -6.3592), 4326)::geography),
  ('N', 980032, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83494, -6.3643), 4326)::geography),
  ('N', 980033, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83068, -6.36427), 4326)::geography),
  ('N', 980034, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83491, -6.36281), 4326)::geography),
  ('N', 980035, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83773, -6.36572), 4326)::geography),
  ('N', 980036, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83614, -6.36575), 4326)::geography),
  ('N', 980037, 'convenience', 'Bengkel Motor & Tambal Ban AHASS Honda Motor Rujukan', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Pondok Cina","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83203, -6.36446), 4326)::geography),
  ('N', 980038, 'laundry', 'Laundry Kiloan Express Super Wash Kiloan 1 Day', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82182, -6.37064), 4326)::geography),
  ('N', 980039, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kukusan Teknik","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82152, -6.36827), 4326)::geography),
  ('N', 980040, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Kober","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83547, -6.36578), 4326)::geography),
  ('N', 990001, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.25233, -5.35278), 4326)::geography),
  ('N', 990002, 'food', 'Warung Makan & Ampera RM Ampera Salero Minang', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2321, -5.36419), 4326)::geography),
  ('N', 990003, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24294, -5.37098), 4326)::geography),
  ('N', 990004, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23743, -5.35862), 4326)::geography),
  ('N', 990005, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23809, -5.36729), 4326)::geography),
  ('N', 990006, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24151, -5.3665), 4326)::geography),
  ('N', 990007, 'convenience', 'Percetakan & Fotokopi Berkah Fotokopi 24 Jam', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23334, -5.36619), 4326)::geography),
  ('N', 990008, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23409, -5.35909), 4326)::geography),
  ('N', 990009, 'convenience', 'Minimarket & Agen Sembako Chandra Supermarket Grosir', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24324, -5.34988), 4326)::geography),
  ('N', 990010, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2475, -5.35233), 4326)::geography),
  ('N', 990011, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23475, -5.36592), 4326)::geography),
  ('N', 990012, 'food', 'Warung Makan & Ampera Soto Lamongan Mas Bejo', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24896, -5.35241), 4326)::geography),
  ('N', 990013, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24593, -5.3509), 4326)::geography),
  ('N', 990014, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23749, -5.37036), 4326)::geography),
  ('N', 990015, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24823, -5.35631), 4326)::geography),
  ('N', 990016, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Pratama Medika Bunda', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23198, -5.3647), 4326)::geography),
  ('N', 990017, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23692, -5.3706), 4326)::geography),
  ('N', 990018, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2385, -5.36701), 4326)::geography),
  ('N', 990019, 'convenience', 'Bengkel Motor & Tambal Ban AHASS Honda Motor Rujukan', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24035, -5.36795), 4326)::geography),
  ('N', 990020, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2518, -5.35713), 4326)::geography),
  ('N', 990021, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23114, -5.35858), 4326)::geography),
  ('N', 990022, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2431, -5.35204), 4326)::geography),
  ('N', 990023, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23776, -5.36672), 4326)::geography),
  ('N', 990024, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24751, -5.35264), 4326)::geography),
  ('N', 990025, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24435, -5.34901), 4326)::geography),
  ('N', 990026, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23375, -5.36025), 4326)::geography),
  ('N', 990027, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24569, -5.35284), 4326)::geography),
  ('N', 990028, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24048, -5.36988), 4326)::geography),
  ('N', 990029, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24764, -5.35645), 4326)::geography),
  ('N', 990030, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23721, -5.37053), 4326)::geography),
  ('N', 990031, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24937, -5.35233), 4326)::geography),
  ('N', 990032, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23903, -5.36677), 4326)::geography),
  ('N', 990033, 'convenience', 'Percetakan & Fotokopi Mitra Mahasiswa ATK', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23638, -5.36399), 4326)::geography),
  ('N', 990034, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Klinik Rawat Inap Pratama Sehat', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24677, -5.34836), 4326)::geography),
  ('N', 990035, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23714, -5.36774), 4326)::geography),
  ('N', 990036, 'food', 'Warung Makan & Ampera Warteg Kharisma Bahari Murah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23409, -5.35957), 4326)::geography),
  ('N', 990037, 'convenience', 'Bengkel Motor & Tambal Ban AHASS Honda Motor Rujukan', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Kampung Baru Raya / Nunyai","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24366, -5.35341), 4326)::geography),
  ('N', 990038, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23252, -5.36505), 4326)::geography),
  ('N', 990039, 'laundry', 'Laundry Kiloan Express Wangi Express Laundry Antar-Jemput', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24829, -5.35281), 4326)::geography),
  ('N', 990040, 'convenience', 'Minimarket & Agen Sembako Alfamart Point Kampus', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2321, -5.36539), 4326)::geography),
  ('N', 990041, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23021, -5.36691), 4326)::geography),
  ('N', 990042, 'food', 'Kafe Nugas & Coworking Literasi Space & Roastery', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24271, -5.36814), 4326)::geography),
  ('N', 990043, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Berkah Sehat 24 Jam', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Gedong Meneng (ZA Pagar Alam)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23687, -5.36784), 4326)::geography),
  ('N', 990044, 'food', 'Kafe Nugas & Coworking Point Coffee & Wifi Kencang', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Kampung Baru (Bumi Manti)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24671, -5.35526), 4326)::geography),
  ('N', 990045, 'food', 'Warung Makan & Ampera Nasi Uduk & Pecel Barokah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Rajabasa (Pramuka & Bypass)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23101, -5.3621), 4326)::geography),
  ('N', 995001, 'food', 'Warung Makan & Ampera RM Ampera Salero Minang', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Air Tawar Timur (Prof. Dr. Hamka)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35801, -0.89511), 4326)::geography),
  ('N', 995002, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35253, -0.89033), 4326)::geography),
  ('N', 995003, 'convenience', 'Percetakan & Fotokopi Kharisma Grafika & Scan', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34862, -0.901), 4326)::geography),
  ('N', 995004, 'food', 'Warung Makan & Ampera Nasi Uduk & Pecel Barokah', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34747, -0.89405), 4326)::geography),
  ('N', 995005, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35602, -0.90725), 4326)::geography),
  ('N', 995006, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35184, -0.89674), 4326)::geography),
  ('N', 995007, 'food', 'Kafe Nugas & Coworking Sudut Tenang Study Cafe', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35873, -0.90344), 4326)::geography),
  ('N', 995008, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3482, -0.89667), 4326)::geography),
  ('N', 995009, 'convenience', 'Bengkel Motor & Tambal Ban Bintang Motor & Sparepart', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35344, -0.88883), 4326)::geography),
  ('N', 995010, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34689, -0.89701), 4326)::geography),
  ('N', 995011, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34682, -0.90085), 4326)::geography),
  ('N', 995012, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36278, -0.90734), 4326)::geography),
  ('N', 995013, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36304, -0.90414), 4326)::geography),
  ('N', 995014, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Air Tawar Timur (Prof. Dr. Hamka)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35342, -0.89314), 4326)::geography),
  ('N', 995015, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34764, -0.89635), 4326)::geography),
  ('N', 995016, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34785, -0.8983), 4326)::geography),
  ('N', 995017, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Air Tawar Timur (Prof. Dr. Hamka)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35509, -0.89786), 4326)::geography),
  ('N', 995018, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35874, -0.90777), 4326)::geography),
  ('N', 995019, 'convenience', 'Percetakan & Fotokopi Kharisma Grafika & Scan', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35004, -0.88661), 4326)::geography),
  ('N', 995020, 'food', 'Warung Makan & Ampera RM Ampera Salero Minang', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3538, -0.88647), 4326)::geography),
  ('N', 995021, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34887, -0.90197), 4326)::geography),
  ('N', 995022, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34645, -0.89756), 4326)::geography),
  ('N', 995023, 'convenience', 'Percetakan & Fotokopi Berkah Fotokopi 24 Jam', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35658, -0.90619), 4326)::geography),
  ('N', 995024, 'laundry', 'Laundry Kiloan Express Clean & Fresh Kiloan Kilat', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35522, -0.89171), 4326)::geography),
  ('N', 995025, 'convenience', 'Bengkel Motor & Tambal Ban Bengkel Barokah Tambal Ban 24 Jam', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35798, -0.90524), 4326)::geography),
  ('N', 995026, 'convenience', 'Percetakan & Fotokopi Digital Print & Jilid Kilat', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34939, -0.89949), 4326)::geography),
  ('N', 995027, 'convenience', 'Minimarket & Agen Sembako Indomaret Fresh 24 Jam', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34915, -0.8953), 4326)::geography),
  ('N', 995028, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35644, -0.88798), 4326)::geography),
  ('N', 995029, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34729, -0.89942), 4326)::geography),
  ('N', 995030, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.354, -0.89071), 4326)::geography),
  ('N', 995031, 'convenience', 'Bengkel Motor & Tambal Ban Sinar Jaya Motor & Ganti Oli', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35043, -0.89007), 4326)::geography),
  ('N', 995032, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36282, -0.9034), 4326)::geography),
  ('N', 995033, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Puskesmas Rawat Inap Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3578, -0.88848), 4326)::geography),
  ('N', 995034, 'convenience', 'Bengkel Motor & Tambal Ban Yamaha Service Point', '{"distilled":"true","sub_type":"Bengkel Motor & Tambal Ban","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35639, -0.90672), 4326)::geography),
  ('N', 995035, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35743, -0.89047), 4326)::geography),
  ('N', 995036, 'convenience', 'Minimarket & Agen Sembako Toko Sembako & Agen Galon Aqua', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35979, -0.90647), 4326)::geography),
  ('N', 995037, 'food', 'Warung Makan & Ampera Ayam Geprek Sambal Bawang Juara', '{"distilled":"true","sub_type":"Warung Makan & Ampera","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34632, -0.89766), 4326)::geography),
  ('N', 995038, 'food', 'Kafe Nugas & Coworking Ruang Teman Co-Working Space', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34834, -0.89739), 4326)::geography),
  ('N', 995039, 'convenience', 'Percetakan & Fotokopi Sentosa Print & Jilid Spiral', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Air Tawar Timur (Prof. Dr. Hamka)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35725, -0.89359), 4326)::geography),
  ('N', 995040, 'convenience', 'Minimarket & Agen Sembako Swalayan Beras & Kebutuhan Kos', '{"distilled":"true","sub_type":"Minimarket & Agen Sembako","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34838, -0.89447), 4326)::geography),
  ('N', 995041, 'food', 'Kafe Nugas & Coworking Kopi Dari Hati Kampus', '{"distilled":"true","sub_type":"Kafe Nugas & Coworking","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34837, -0.89911), 4326)::geography),
  ('N', 995042, 'convenience', 'Percetakan & Fotokopi Cepat Murah Skripsi', '{"distilled":"true","sub_type":"Percetakan & Fotokopi","zone":"Tunggul Hitam & DPR","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35461, -0.88527), 4326)::geography),
  ('N', 995043, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek K-24 Jam Dekat Kampus', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Air Tawar Timur (Prof. Dr. Hamka)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35614, -0.89453), 4326)::geography),
  ('N', 995044, 'laundry', 'Laundry Kiloan Express Sakura Kiloan Cuci & Setrika Uap', '{"distilled":"true","sub_type":"Laundry Kiloan Express","zone":"Simpang Tinju & Gajah Mada","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36292, -0.90552), 4326)::geography),
  ('N', 995045, 'pharmacy', 'Klinik & Apotek Rujukan BPJS Apotek Kimia Farma Rujukan BPJS', '{"distilled":"true","sub_type":"Klinik & Apotek Rujukan BPJS","zone":"Air Tawar Barat (Cendrawasih)","verified_by":"KosMatch Extended Campus Infrastructure Pipeline"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34874, -0.90145), 4326)::geography)
ON CONFLICT (osm_type, osm_id) DO UPDATE SET
  category = EXCLUDED.category,
  name = EXCLUDED.name,
  tags = EXCLUDED.tags,
  geom = EXCLUDED.geom;

-- 3. KOS LISTINGS WITH ENRICHED UTILITIES & RULES (285 Listings)
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Graha Kukusan Mandiri', 'ui-depok', 1650000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8212, -6.3685), 4326)::geography, 'verified', 'Dekat Pintu Tol Kukusan dan Gerbang FT UI. Lingkungan tenang, banyak warung makan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Graha Kukusan Mandiri' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Pondok Cina Asri', 'ui-depok', 1850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8324, -6.3612), 4326)::geography, 'verified', '3 menit jalan kaki ke Stasiun Pondok Cina dan Margonda Raya. Akses keamanan 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pondok Cina Asri' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Green Kober Melati', 'ui-depok', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8341, -6.3648), 4326)::geography, 'verified', 'Kamar mandi luar bersih. Banyak tempat laundry kiloan dan minimarket di sepanjang jalan Kober.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Green Kober Melati' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Margonda Residence Studio', 'ui-depok', 2400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.831, -6.3715), 4326)::geography, 'verified', 'Kamar tipe studio lengkap. Lokasi premium di jalan arteri Margonda, dekat halte bis kuning UI.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Margonda Residence Studio' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Rindang Kukusan Kelurahan', 'ui-depok', 950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8195, -6.3742), 4326)::geography, 'verified', 'Hemat biaya, suasana kekeluargaan. Akses motor lancar ke arah Vokasi dan FISIP UI.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Rindang Kukusan Kelurahan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Kutek Ceria', 'ui-depok', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8205, -6.3698), 4326)::geography, 'verified', 'Hanya 4 menit jalan kaki ke Pintu Kutek UI. Dikelilingi fotokopi, warteg, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Kutek Ceria' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putri Barel Indah', 'ui-depok', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.832, -6.3655), 4326)::geography, 'verified', 'Area gang Barel dekat Stasiun UI dan jembatan penyeberangan kampus. Gerbang kunci kartu akses.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Barel Indah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mahasiswa Palem Kuning', 'ui-depok', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8218, -6.3672), 4326)::geography, 'verified', 'Fasilitas dapur bersama lengkap dengan kulkas dan dispenser galon gratis.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa Palem Kuning' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Syariah Al-Falah Pocin', 'ui-depok', 1700000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8335, -6.363), 4326)::geography, 'verified', 'Lingkungan syariah tenang, pengawasan CCTV 24 jam, 200 meter ke Masjid Al-Falah dan Stasiun Pocin.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Syariah Al-Falah Pocin' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Jurang Kutek Ekonomis', 'ui-depok', 850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.822, -6.371), 4326)::geography, 'verified', 'Pilihan terjangkau bagi mahasiswa teknik. Sirkulasi udara bagus dan parkiran motor berpagar tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Jurang Kutek Ekonomis' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Margonda Harmoni', 'ui-depok', 2100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833, -6.367), 4326)::geography, 'verified', 'Kamar luas 4x4 meter, kamar mandi dalam dengan water heater. Dekat Margo City dan akses angkot 112.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Margonda Harmoni' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Pondok Hasanah Kukel', 'ui-depok', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8235, -6.3605), 4326)::geography, 'verified', 'Dekat Pintu Kukel UI arah FMIPA/FIK. Suasana perumahan sejuk dan tidak bising kendaraan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Pondok Hasanah Kukel' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mahasiswa Kober Tengah', 'ui-depok', 1050000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.835, -6.366), 4326)::geography, 'verified', 'Kamar bersih, dekat aneka kuliner malam Kober dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa Kober Tengah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Flamboyan Pocin', 'ui-depok', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8318, -6.3622), 4326)::geography, 'verified', '5 menit jalan kaki ke FIB/FEB UI melalui jembatan penyeberangan Stasiun Pondok Cina.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Flamboyan Pocin' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Madani Kukusan Vokasi', 'ui-depok', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","closet"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.823, -6.369), 4326)::geography, 'verified', 'Sangat strategis untuk mahasiswa Program Vokasi dan FT. Akses jalan aspal lebar untuk motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Madani Kukusan Vokasi' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Cendrawasih Kukel', 'ui-depok', 1750000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.824, -6.359), 4326)::geography, 'verified', 'Fasilitas lengkap gaya modern minimalis dengan balkon pribadi di lantai dua.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Cendrawasih Kukel' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Sawo Raya Pocin', 'ui-depok', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.834, -6.3638), 4326)::geography, 'verified', 'Akses jalan kaki mudah ke Margonda dan kampus UI. Disediakan mesin cuci bersama gratis.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Sawo Raya Pocin' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Bougenville Margonda', 'ui-depok', 1950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8315, -6.373), 4326)::geography, 'verified', 'Dekat Rumah Sakit Bunda Margonda dan Universitas Gunadarma, penjagaan satpam malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Bougenville Margonda' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Kampus Limau Manis Sejahtera', 'unand-limau-manis', 850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4578, -0.9168), 4326)::geography, 'verified', 'Dekat Gerbang Utama Unand. Udara sejuk kaki bukit, hanya 5 menit ke Rektorat dan Perpustakaan Pusat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kampus Limau Manis Sejahtera' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Pasar Baru Anggrek', 'unand-limau-manis', 750000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4492, -0.9245), 4326)::geography, 'verified', 'Dekat pusat kuliner Pasar Baru Unand, apotek, dan jalur angkutan kota kampus.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pasar Baru Anggrek' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Syariah Melati Limau Manis', 'unand-limau-manis', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4632, -0.9115), 4326)::geography, 'verified', 'Kamar modern ber-AC, lingkungan tenang dan aman di area perumahan dosen.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Syariah Melati Limau Manis' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Pondok Kapalo Koto', 'unand-limau-manis', 600000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4435, -0.9298), 4326)::geography, 'verified', 'Harga sangat terjangkau bagi mahasiswa baru. Akses motor 7 menit ke kampus.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Pondok Kapalo Koto' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Paviliun Pauh Boulevard', 'unand-limau-manis', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4468, -0.9205), 4326)::geography, 'verified', 'Dilengkapi parkir mobil dan akses jalan raya utama. Cocok untuk mahasiswa kedokteran & pascasarjana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Paviliun Pauh Boulevard' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Harapan Limau Manis', 'unand-limau-manis', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.459, -0.915), 4326)::geography, 'verified', '3 menit jalan kaki ke halte bus kampus Limau Manis. Air pegunungan jernih dan lancar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Harapan Limau Manis' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putri Kenanga Pasar Baru', 'unand-limau-manis', 800000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.448, -0.9255), 4326)::geography, 'verified', 'Sangat dekat dengan pangkalan angkot kampus dan toserba mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Kenanga Pasar Baru' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Asri Gadang', 'unand-limau-manis', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.461, -0.9135), 4326)::geography, 'verified', 'Suasana pedesaan Minang asri, ramah dan santai. Cocok untuk belajar mandiri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Asri Gadang' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Sakato Simpang Kampus', 'unand-limau-manis', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4475, -0.922), 4326)::geography, 'verified', 'Lokasi persimpangan strategis jalan kampus Unand. Dilengkapi genset cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sakato Simpang Kampus' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putri Bunga Tanjung Pauh', 'unand-limau-manis', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.445, -0.9215), 4326)::geography, 'verified', 'Ibu kos ramah, dapur bersama bersih, dan tersedia jemuran tertutup.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Bunga Tanjung Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Graha Limau Manis Permai', 'unand-limau-manis', 1000000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","ac","closet"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.456, -0.9175), 4326)::geography, 'verified', 'Dekat Fakultas Kedokteran dan Rumah Sakit Unand. Keamanan portal komplek.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Graha Limau Manis Permai' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Jabal Rahmah Limau Manis', 'unand-limau-manis', 850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4625, -0.9128), 4326)::geography, 'verified', 'Dekat Masjid Nurul Ilmi Unand. Lingkungan kondusif bagi mahasiswa agamis.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Jabal Rahmah Limau Manis' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Pauh Jaya Mandiri', 'unand-limau-manis', 550000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.442, -0.928), 4326)::geography, 'verified', 'Paling ekonomis, dekat warung Padang murah dan bengkel motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pauh Jaya Mandiri' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Bukit Barisan Asri', 'unand-limau-manis', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.465, -0.9102), 4326)::geography, 'verified', 'Pemandangan bukit Limau Manis yang menakjubkan. Kamar mandi dalam dengan air hangat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Bukit Barisan Asri' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Pondok Ryacudu Asri', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3115, -5.3562), 4326)::geography, 'verified', '5 menit ke Gerbang Utama ITERA. Dilengkapi WiFi cepat untuk tugas kuliah teknik dan genset cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Pondok Ryacudu Asri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Putri Way Huwi Cantika', 'itera-lampung', 850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3065, -5.3538), 4326)::geography, 'verified', 'Khusus mahasiswi ITERA, penjagaan portal malam 24 jam. Dekat minimarket dan laundry kiloan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Putri Way Huwi Cantika' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Griya ITERA Mandiri', 'itera-lampung', 600000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3092, -5.3525), 4326)::geography, 'verified', 'Pilihan paling hemat mahasiswa baru, kamar mandi luar bersih, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Griya ITERA Mandiri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Grand Sabah Balau Studio', 'itera-lampung', 1650000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3195, -5.3672), 4326)::geography, 'verified', 'Tipe paviliun studio modern ber-AC dan air panas, parkir mobil luas, lingkungan sejuk dan bebas bising.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Grand Sabah Balau Studio' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putri An-Nur Way Huwi', 'itera-lampung', 750000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.305, -5.357), 4326)::geography, 'verified', 'Suasana tenang islami, dekat musholla dan jalan tembus gang mahasiswa ke ITERA.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri An-Nur Way Huwi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putra Jati Agung Sejahtera', 'itera-lampung', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","desk_chair","closet","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.313, -5.3495), 4326)::geography, 'verified', 'Akses 24 jam bebas jam malam, cocok bagi mahasiswa arsitektur & informatika yang sering tugas malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putra Jati Agung Sejahtera' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Residence Embung Ceria', 'itera-lampung', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["bathroom_inside","wifi","ac","desk_chair","closet"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3245, -5.3615), 4326)::geography, 'verified', 'Pemandangan embung dan asrama ITERA, udara segar alami, jarak jalan kaki hanya 6 menit ke GKU.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Residence Embung Ceria' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Cendekia Airan Raya', 'itera-lampung', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3085, -5.3705), 4326)::geography, 'verified', 'Akses mudah ke jalur Trans Lampung dan pusat kuliner Airan. Kamar mandi dalam dengan shower.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Cendekia Airan Raya' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Syariah Ryacudu Barokah', 'itera-lampung', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.316, -5.3545), 4326)::geography, 'verified', 'Tepat di seberang gerbang ITERA, hemat ongkos transportasi, dekat warteg dan pangkas rambut.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Syariah Ryacudu Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Sakura Way Huwi', 'itera-lampung', 1800000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["bathroom_inside","wifi","ac","water_heater","parking_car","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3072, -5.351), 4326)::geography, 'verified', 'Fasilitas lengkap sekelas apartemen studio, kasur springbed queen, parkir mobil aman dengan CCTV.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Sakura Way Huwi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Dahlia Jl.', 'itera-lampung', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30562, -5.36471), 4326)::geography, 'verified', 'Jl. Airan Raya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Dahlia Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Srikandi', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32896, -5.36086), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Srikandi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mandiri Perumahan', 'itera-lampung', 1125000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31024, -5.35003), 4326)::geography, 'verified', 'Jl. Sirsak. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mandiri Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Pratama', 'itera-lampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30664, -5.35376), 4326)::geography, 'verified', 'Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pratama' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Berkah Sukarame', 'itera-lampung', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29985, -5.36616), 4326)::geography, 'verified', 'Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Berkah Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Cahaya', 'itera-lampung', 575000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3333, -5.36133), 4326)::geography, 'verified', 'Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Cahaya' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Pratama Way', 'itera-lampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30368, -5.35161), 4326)::geography, 'verified', 'Jl. Lapas Raya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Pratama Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Putra Jaya Terusan', 'itera-lampung', 1000000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31221, -5.35357), 4326)::geography, 'verified', 'Gg. Raden Saleh. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Putra Jaya Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Khairunnisa', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33338, -5.35495), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Khairunnisa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Cendana', 'itera-lampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30309, -5.36415), 4326)::geography, 'verified', 'Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Cendana' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Pelangi Belakang', 'itera-lampung', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32067, -5.35901), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Pelangi Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Melati', 'itera-lampung', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32493, -5.3613), 4326)::geography, 'verified', 'Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Melati' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Anggrek', 'itera-lampung', 1425000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2995, -5.36782), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Anggrek' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Dahlia Terusan', 'itera-lampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31342, -5.35325), 4326)::geography, 'verified', 'Gg. Hasan. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Dahlia Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Sejahtera Sukarame', 'itera-lampung', 1700000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29537, -5.37211), 4326)::geography, 'verified', 'Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Sejahtera Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Harmoni Perumahan', 'itera-lampung', 1225000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30964, -5.35), 4326)::geography, 'verified', 'Jl. Sirsak. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Permata', 'itera-lampung', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33, -5.35385), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Permata' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Sentosa Sukarame', 'itera-lampung', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29405, -5.36735), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Sentosa Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Asri', 'itera-lampung', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32928, -5.35985), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Asri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Pelangi', 'itera-lampung', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31301, -5.35644), 4326)::geography, 'verified', 'Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Pelangi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Harmoni', 'itera-lampung', 1425000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29597, -5.37282), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Harmoni' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Flamboyan', 'itera-lampung', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31326, -5.3569), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Flamboyan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Permata Way', 'itera-lampung', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30296, -5.35366), 4326)::geography, 'verified', 'Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Permata Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Asri', 'itera-lampung', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30032, -5.36286), 4326)::geography, 'verified', 'Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Asri' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Cahaya Terusan', 'itera-lampung', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31279, -5.35501), 4326)::geography, 'verified', 'Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Cahaya Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Flamboyan', 'itera-lampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30304, -5.34857), 4326)::geography, 'verified', 'Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Flamboyan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Amanah Way', 'itera-lampung', 1025000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30539, -5.35182), 4326)::geography, 'verified', 'Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Amanah Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Flamboyan Sukarame', 'itera-lampung', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29947, -5.37098), 4326)::geography, 'verified', 'Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Flamboyan Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Flamboyan Belakang', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31996, -5.36474), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Flamboyan Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Permata', 'itera-lampung', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31347, -5.35393), 4326)::geography, 'verified', 'Gg. Hasan. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Permata' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Permata', 'itera-lampung', 925000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32318, -5.36415), 4326)::geography, 'verified', 'Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Permata' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Ceria Jl.', 'itera-lampung', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3045, -5.35807), 4326)::geography, 'verified', 'Gg. Airan 1. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Ceria Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Rindang', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30565, -5.35074), 4326)::geography, 'verified', 'Gg. Murai. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Rindang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Al-Ikhlas', 'itera-lampung', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30545, -5.35882), 4326)::geography, 'verified', 'Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Al-Ikhlas' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Nusantara', 'itera-lampung', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3002, -5.36449), 4326)::geography, 'verified', 'Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Nusantara' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Srikandi', 'itera-lampung', 1075000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30722, -5.35071), 4326)::geography, 'verified', 'Jl. Nangka. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Srikandi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Ceria Sabah', 'itera-lampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32857, -5.3591), 4326)::geography, 'verified', 'Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Ceria Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Al-Ikhlas', 'itera-lampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30269, -5.35097), 4326)::geography, 'verified', 'Gg. Murai. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Al-Ikhlas' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Anggrek Jl.', 'itera-lampung', 1325000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3021, -5.36226), 4326)::geography, 'verified', 'Jl. Airan Raya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Anggrek Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Kemuning', 'itera-lampung', 950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32166, -5.3617), 4326)::geography, 'verified', 'Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Kemuning' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Bintang', 'itera-lampung', 975000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30362, -5.35247), 4326)::geography, 'verified', 'Gg. Murai. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Bintang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Dahlia', 'itera-lampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31269, -5.35255), 4326)::geography, 'verified', 'Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Dahlia' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Al-Hikmah Terusan', 'itera-lampung', 1275000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31373, -5.35619), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Al-Hikmah Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Al-Barokah', 'itera-lampung', 850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33272, -5.35775), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Al-Barokah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Ceria', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30978, -5.34748), 4326)::geography, 'verified', 'Jl. Sirsak. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Ceria' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Anggrek Sabah', 'itera-lampung', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33136, -5.36096), 4326)::geography, 'verified', 'Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Anggrek Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Ganesha Belakang', 'itera-lampung', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31993, -5.36364), 4326)::geography, 'verified', 'Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Ganesha Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Amanah', 'itera-lampung', 600000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33377, -5.35528), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Amanah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Srikandi Way', 'itera-lampung', 775000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30568, -5.35399), 4326)::geography, 'verified', 'Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Srikandi Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Sakinah Sabah', 'itera-lampung', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33454, -5.35762), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Sakinah Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Srikandi Jl.', 'itera-lampung', 1375000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30244, -5.36177), 4326)::geography, 'verified', 'Gg. Melati Airan. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Srikandi Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Griya Indah', 'itera-lampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29713, -5.37488), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Griya Indah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Dahlia Sukarame', 'itera-lampung', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29322, -5.37084), 4326)::geography, 'verified', 'Jl. Senopati. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Dahlia Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Mahasiswa', 'itera-lampung', 1375000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31616, -5.35344), 4326)::geography, 'verified', 'Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Mahasiswa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Asri Way', 'itera-lampung', 1025000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30613, -5.35395), 4326)::geography, 'verified', 'Jl. Lapas Jaya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Asri Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Pratama Belakang', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31913, -5.36344), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Pratama Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Cahaya Jl.', 'itera-lampung', 1225000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30288, -5.36119), 4326)::geography, 'verified', 'Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Cahaya Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Dahlia', 'itera-lampung', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3102, -5.34851), 4326)::geography, 'verified', 'Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Dahlia' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Dahlia Sukarame', 'itera-lampung', 925000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29223, -5.37487), 4326)::geography, 'verified', 'Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Dahlia Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Srikandi Terusan', 'itera-lampung', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31774, -5.35617), 4326)::geography, 'verified', 'Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Srikandi Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Ceria Terusan', 'itera-lampung', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31614, -5.35658), 4326)::geography, 'verified', 'Gg. Hasan. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Ceria Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Bintang Terusan', 'itera-lampung', 1175000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31416, -5.35546), 4326)::geography, 'verified', 'Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Bintang Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Cendana Sukarame', 'itera-lampung', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2984, -5.37325), 4326)::geography, 'verified', 'Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Cendana Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Rindang', 'itera-lampung', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29889, -5.3742), 4326)::geography, 'verified', 'Jl. Senopati. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Rindang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma An-Nur', 'itera-lampung', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32823, -5.36141), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma An-Nur' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Cendana', 'itera-lampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30003, -5.36085), 4326)::geography, 'verified', 'Jl. Airan Raya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Cendana' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Sejahtera Sabah', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32819, -5.36136), 4326)::geography, 'verified', 'Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Sejahtera Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Griya Indah', 'itera-lampung', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29437, -5.36903), 4326)::geography, 'verified', 'Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Griya Indah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Khairunnisa', 'itera-lampung', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31486, -5.35428), 4326)::geography, 'verified', 'Gg. Hasan. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Khairunnisa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Pelangi Terusan', 'itera-lampung', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31491, -5.35477), 4326)::geography, 'verified', 'Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Pelangi Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Mandiri Terusan', 'itera-lampung', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31339, -5.35522), 4326)::geography, 'verified', 'Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Mandiri Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Kemuning', 'itera-lampung', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33611, -5.35774), 4326)::geography, 'verified', 'Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kemuning' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Permata Way', 'itera-lampung', 675000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30537, -5.35358), 4326)::geography, 'verified', 'Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Permata Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Dahlia Way', 'itera-lampung', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30464, -5.35065), 4326)::geography, 'verified', 'Gg. Kancil. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Dahlia Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Mawar', 'itera-lampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3099, -5.35097), 4326)::geography, 'verified', 'Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Mawar' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Melati Sukarame', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29975, -5.37213), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Melati Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putri Cantika Terusan', 'itera-lampung', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31656, -5.35245), 4326)::geography, 'verified', 'Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putri Cantika Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Putri Cantika Way', 'itera-lampung', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","parking_car"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30564, -5.35098), 4326)::geography, 'verified', 'Gg. Murai. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Putri Cantika Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Anggrek Sukarame', 'itera-lampung', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29909, -5.37452), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Anggrek Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Rindang Belakang', 'itera-lampung', 1075000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32389, -5.36222), 4326)::geography, 'verified', 'Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Rindang Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Rindang Way', 'itera-lampung', 825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30622, -5.35356), 4326)::geography, 'verified', 'Jl. Lapas Jaya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Rindang Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Mahasiswa', 'itera-lampung', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30504, -5.35097), 4326)::geography, 'verified', 'Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Mahasiswa' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Sakinah Sukarame', 'itera-lampung', 1125000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29303, -5.36841), 4326)::geography, 'verified', 'Jl. Korpri Raya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Sakinah Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Kenanga', 'itera-lampung', 550000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31045, -5.35103), 4326)::geography, 'verified', 'Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Kenanga' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Bintang Belakang', 'itera-lampung', 750000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32579, -5.36238), 4326)::geography, 'verified', 'Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Bintang Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Khairunnisa Sukarame', 'itera-lampung', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29253, -5.37353), 4326)::geography, 'verified', 'Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Khairunnisa Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Kemuning Terusan', 'itera-lampung', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31426, -5.35535), 4326)::geography, 'verified', 'Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Kemuning Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Nusantara Terusan', 'itera-lampung', 1375000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31338, -5.35258), 4326)::geography, 'verified', 'Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Nusantara Terusan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Asri Sabah', 'itera-lampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33421, -5.35446), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Asri Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Al-Hikmah', 'itera-lampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30496, -5.34949), 4326)::geography, 'verified', 'Gg. Kancil. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Al-Hikmah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Cahaya Jl.', 'itera-lampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30217, -5.36197), 4326)::geography, 'verified', 'Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Cahaya Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Griya Indah', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32151, -5.36194), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Griya Indah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Putra Jaya Sabah', 'itera-lampung', 800000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32836, -5.35745), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Putra Jaya Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Bintang Sukarame', 'itera-lampung', 950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29374, -5.37417), 4326)::geography, 'verified', 'Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Bintang Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Kencana Perumahan', 'itera-lampung', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30724, -5.34752), 4326)::geography, 'verified', 'Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kencana Perumahan' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Pertiwi', 'itera-lampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3256, -5.36146), 4326)::geography, 'verified', 'Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Pertiwi' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Sentosa Sukarame', 'itera-lampung', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29945, -5.36771), 4326)::geography, 'verified', 'Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sentosa Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mawar', 'itera-lampung', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32375, -5.35962), 4326)::geography, 'verified', 'Gang Tembus Asrama. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mawar' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Mahasiswa Belakang', 'itera-lampung', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32546, -5.36325), 4326)::geography, 'verified', 'Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Mahasiswa Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Nusantara', 'itera-lampung', 825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30337, -5.34866), 4326)::geography, 'verified', 'Gg. Murai. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Nusantara' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Sejahtera Sukarame', 'itera-lampung', 1175000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29672, -5.36792), 4326)::geography, 'verified', 'Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Sejahtera Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Kencana', 'itera-lampung', 1050000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.31432, -5.35297), 4326)::geography, 'verified', 'Gg. Hasan. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Kencana' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Pelangi Sabah', 'itera-lampung', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.33641, -5.35598), 4326)::geography, 'verified', 'Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Pelangi Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Amanah Way', 'itera-lampung', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3048, -5.35381), 4326)::geography, 'verified', 'Jl. Lapas Raya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Amanah Way' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Amanah', 'itera-lampung', 1175000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29527, -5.36843), 4326)::geography, 'verified', 'Jl. Endro Suratmin. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Amanah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Harmoni Belakang', 'itera-lampung', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.32018, -5.36108), 4326)::geography, 'verified', 'Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni Belakang' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Pratama Sabah', 'itera-lampung', 675000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.3333, -5.35255), 4326)::geography, 'verified', 'Gg. Damai Sabah Balau. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Pratama Sabah' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Al-Ikhlas', 'itera-lampung', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30252, -5.35871), 4326)::geography, 'verified', 'Jl. Airan Raya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Al-Ikhlas' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Asri Jl.', 'itera-lampung', 850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.30267, -5.36407), 4326)::geography, 'verified', 'Jl. Airan Raya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Asri Jl.' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Bintang Sukarame', 'itera-lampung', 1525000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.29398, -5.37072), 4326)::geography, 'verified', 'Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Bintang Sukarame' AND campus_id = 'itera-lampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Pratama Kukusan', 'ui-depok', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82093, -6.36964), 4326)::geography, 'verified', 'Jl. Rawa Maya. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Pratama Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Mandiri Kukusan', 'ui-depok', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82129, -6.35766), 4326)::geography, 'verified', 'Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Mandiri Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Rindang Kukusan', 'ui-depok', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8201, -6.35706), 4326)::geography, 'verified', 'Jl. Palakali. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Rindang Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Putra Jaya Pondok', 'ui-depok', 1825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8305, -6.36252), 4326)::geography, 'verified', 'Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Putra Jaya Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Cendana', 'ui-depok', 1900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83464, -6.3619), 4326)::geography, 'verified', 'Jl. Kancil. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Cendana' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Mandiri Kukusan', 'ui-depok', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82081, -6.36619), 4326)::geography, 'verified', 'Jl. Juragan Sinda. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Mandiri Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Harmoni Pondok', 'ui-depok', 550000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83167, -6.36474), 4326)::geography, 'verified', 'Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Ceria Kukusan', 'ui-depok', 625000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81926, -6.36548), 4326)::geography, 'verified', 'Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Ceria Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Harmoni', 'ui-depok', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82108, -6.36817), 4326)::geography, 'verified', 'Jl. Mandor Togog. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Harmoni' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Al-Hikmah', 'ui-depok', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83569, -6.36556), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Al-Hikmah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Permata Pondok', 'ui-depok', 2175000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83393, -6.36388), 4326)::geography, 'verified', 'Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Permata Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Melati', 'ui-depok', 1225000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81935, -6.36843), 4326)::geography, 'verified', 'Jl. Mandor Togog. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Melati' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Kenanga Kukusan', 'ui-depok', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8211, -6.37098), 4326)::geography, 'verified', 'Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Kenanga Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Anggrek', 'ui-depok', 1800000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82321, -6.36559), 4326)::geography, 'verified', 'Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Anggrek' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Al-Barokah Kukusan', 'ui-depok', 1625000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81877, -6.3697), 4326)::geography, 'verified', 'Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Al-Barokah Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Flamboyan Kober', 'ui-depok', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83576, -6.36408), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Flamboyan Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Berkah', 'ui-depok', 1950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83144, -6.36112), 4326)::geography, 'verified', 'Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Berkah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Khairunnisa Kukusan', 'ui-depok', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82438, -6.35901), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Khairunnisa Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Ganesha Kober', 'ui-depok', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83436, -6.36366), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Ganesha Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Permata Kober', 'ui-depok', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83483, -6.36502), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Permata Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Mandiri Kukusan', 'ui-depok', 1850000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82248, -6.36993), 4326)::geography, 'verified', 'Jl. Rawa Maya. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Mandiri Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Kencana Kukusan', 'ui-depok', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82378, -6.35964), 4326)::geography, 'verified', 'Jl. Palakali. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Kencana Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Berkah Pondok', 'ui-depok', 600000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83196, -6.36413), 4326)::geography, 'verified', 'Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Berkah Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Al-Hikmah Kukusan', 'ui-depok', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82174, -6.35884), 4326)::geography, 'verified', 'Jl. Palakali. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Al-Hikmah Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Putra Jaya Pondok', 'ui-depok', 2125000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83169, -6.36193), 4326)::geography, 'verified', 'Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Putra Jaya Pondok' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Griya Indah Kukusan', 'ui-depok', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82375, -6.36554), 4326)::geography, 'verified', 'Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Griya Indah Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Al-Hikmah', 'ui-depok', 2125000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.833, -6.361), 4326)::geography, 'verified', 'Jl. Kancil. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Al-Hikmah' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Cahaya', 'ui-depok', 1225000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83652, -6.36433), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Cahaya' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Khairunnisa Kukusan', 'ui-depok', 1125000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.82434, -6.35996), 4326)::geography, 'verified', 'Jl. Palakali. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Khairunnisa Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Bintang', 'ui-depok', 2275000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83252, -6.36455), 4326)::geography, 'verified', 'Jl. Kancil. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Bintang' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Flamboyan Kober', 'ui-depok', 1375000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83323, -6.36792), 4326)::geography, 'verified', 'Jl. Sawo. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Flamboyan Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Kemuning Kukusan', 'ui-depok', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.81865, -6.3709), 4326)::geography, 'verified', 'Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Kemuning Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Mawar', 'ui-depok', 1525000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8308, -6.36348), 4326)::geography, 'verified', 'Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Mawar' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Srikandi', 'ui-depok', 1950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83356, -6.35954), 4326)::geography, 'verified', 'Jl. Margonda Raya. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Srikandi' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Cahaya Kober', 'ui-depok', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83459, -6.36833), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Cahaya Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Griya Indah Kober', 'ui-depok', 1050000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83439, -6.36498), 4326)::geography, 'verified', 'Jl. Sawo. Dekat Stasiun UI dan perpustakaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Griya Indah Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Rindang Kukusan', 'ui-depok', 1525000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","access_24h","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.8204, -6.35887), 4326)::geography, 'verified', 'Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Rindang Kukusan' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Pelangi Kober', 'ui-depok', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(106.83396, -6.36726), 4326)::geography, 'verified', 'Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pelangi Kober' AND campus_id = 'ui-depok'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Srikandi Limau', 'unand-limau-manis', 1275000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46233, -0.91522), 4326)::geography, 'verified', 'Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Srikandi Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Harmoni', 'unand-limau-manis', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45836, -0.91717), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Harmoni Limau', 'unand-limau-manis', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46422, -0.91792), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Harmoni Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Pertiwi', 'unand-limau-manis', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44031, -0.92201), 4326)::geography, 'verified', 'Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Pertiwi' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Sakinah Limau', 'unand-limau-manis', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45604, -0.91195), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Sakinah Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Ceria Limau', 'unand-limau-manis', 625000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46289, -0.91761), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Ceria Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Kencana Pasar', 'unand-limau-manis', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44902, -0.92633), 4326)::geography, 'verified', 'Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Kencana Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Flamboyan', 'unand-limau-manis', 750000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44776, -0.92299), 4326)::geography, 'verified', 'Jl. Pasar Baru. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Flamboyan' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Putri Cantika', 'unand-limau-manis', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46111, -0.9175), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Putri Cantika' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Harmoni', 'unand-limau-manis', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4401, -0.92452), 4326)::geography, 'verified', 'Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Harmoni' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Sejahtera', 'unand-limau-manis', 575000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4444, -0.9229), 4326)::geography, 'verified', 'Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Sejahtera' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Mahasiswa Pasar', 'unand-limau-manis', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44838, -0.92299), 4326)::geography, 'verified', 'Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Mahasiswa Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Putra Jaya Pauh', 'unand-limau-manis', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44421, -0.92301), 4326)::geography, 'verified', 'Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Putra Jaya Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Kemuning Pauh', 'unand-limau-manis', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44093, -0.9273), 4326)::geography, 'verified', 'Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Kemuning Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Dahlia', 'unand-limau-manis', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46279, -0.91087), 4326)::geography, 'verified', 'Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Dahlia' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Kencana Limau', 'unand-limau-manis', 825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45658, -0.91517), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Kencana Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Putri Cantika', 'unand-limau-manis', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44209, -0.9269), 4326)::geography, 'verified', 'Jl. Mohammad Hatta. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Putri Cantika' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Harmoni Pauh', 'unand-limau-manis', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44235, -0.92837), 4326)::geography, 'verified', 'Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Harmoni Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Griya Indah Limau', 'unand-limau-manis', 1050000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.45742, -0.91126), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Griya Indah Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Kemuning Pasar', 'unand-limau-manis', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44648, -0.92625), 4326)::geography, 'verified', 'Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kemuning Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mahasiswa Limau', 'unand-limau-manis', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46415, -0.91187), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Rindang', 'unand-limau-manis', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.4584, -0.91328), 4326)::geography, 'verified', 'Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Rindang' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Mahasiswa Pasar', 'unand-limau-manis', 925000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44947, -0.92408), 4326)::geography, 'verified', 'Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Mahasiswa Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Flamboyan Pasar', 'unand-limau-manis', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44896, -0.92306), 4326)::geography, 'verified', 'Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Flamboyan Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Barokah Limau', 'unand-limau-manis', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46325, -0.91522), 4326)::geography, 'verified', 'Batu Busuk. Akses jalan kaki ke gedung perkuliahan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Barokah Limau' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Sentosa', 'unand-limau-manis', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44144, -0.92443), 4326)::geography, 'verified', 'Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Sentosa' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Bintang Pasar', 'unand-limau-manis', 950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44632, -0.92548), 4326)::geography, 'verified', 'Jl. Simpang Kampus. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Bintang Pasar' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mahasiswa', 'unand-limau-manis', 575000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46141, -0.91011), 4326)::geography, 'verified', 'Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Permata', 'unand-limau-manis', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.46469, -0.91295), 4326)::geography, 'verified', 'Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Permata' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Kenanga Pauh', 'unand-limau-manis', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44049, -0.92483), 4326)::geography, 'verified', 'Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Kenanga Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost An-Nur Pauh', 'unand-limau-manis', 925000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.44179, -0.92363), 4326)::geography, 'verified', 'Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost An-Nur Pauh' AND campus_id = 'unand-limau-manis'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Cendana Kampung', 'unila-bandarlampung', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24747, -5.35374), 4326)::geography, 'verified', 'Gg. Kenanga Nunyai. Dekat lapangan olahraga dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Cendana Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Nusantara Kampung', 'unila-bandarlampung', 600000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24374, -5.35088), 4326)::geography, 'verified', 'Gg. Kenanga Nunyai. Dekat lapangan olahraga dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Nusantara Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Dahlia', 'unila-bandarlampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23768, -5.36522), 4326)::geography, 'verified', 'Gg. Damai Rajabasa. Keamanan portal malam 24 jam, dekat klinik pratama rujukan BPJS.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Dahlia' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Asri Rajabasa', 'unila-bandarlampung', 1325000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23288, -5.3596), 4326)::geography, 'verified', 'Gg. Damai Rajabasa. Keamanan portal malam 24 jam, dekat klinik pratama rujukan BPJS.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Asri Rajabasa' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Melati Kampung', 'unila-bandarlampung', 1150000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24749, -5.35148), 4326)::geography, 'verified', 'Gg. Cendana. Lingkungan perumahan asri bebas polusi suara knalpot, sangat nyaman untuk istirahat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Melati Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Ceria Gedong', 'unila-bandarlampung', 1125000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23623, -5.36525), 4326)::geography, 'verified', 'Jl. Prof. Sumantri Brojonegoro. Dekat halte busway Trans Bandar Lampung dan aneka rumah makan modern.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Ceria Gedong' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Amanah', 'unila-bandarlampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23619, -5.35852), 4326)::geography, 'verified', 'Jl. Pramuka. Suasana tenang untuk fokus belajar skripsi, kamar luas dengan sirkulasi udara sejuk.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Amanah' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Nusantara', 'unila-bandarlampung', 1425000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23752, -5.36956), 4326)::geography, 'verified', 'Jl. ZA Pagar Alam. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Nusantara' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Ceria', 'unila-bandarlampung', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24943, -5.35871), 4326)::geography, 'verified', 'Jl. Bumi Manti II. Pusat hunian kos paling ramai dekat FMIPA dan FKIP Unila, jalan kaki ke gerbang belakang.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Ceria' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Sakinah', 'unila-bandarlampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23776, -5.37144), 4326)::geography, 'verified', 'Jl. ZA Pagar Alam. Akses sangat cepat ke Fakultas Hukum, FEB, dan Gedung Rektorat Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sakinah' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Ganesha', 'unila-bandarlampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24791, -5.35301), 4326)::geography, 'verified', 'Jl. Nunyai Raya. Harga sewa sangat hemat bagi mahasiswa baru perantau, pemilik kos ramah dan kekeluargaan.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Ganesha' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Bintang Kampung', 'unila-bandarlampung', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.2485, -5.35602), 4326)::geography, 'verified', 'Gg. Pelita. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Bintang Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Barokah', 'unila-bandarlampung', 600000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24252, -5.35052), 4326)::geography, 'verified', 'Gg. Cendana. Dekat lapangan olahraga dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Barokah' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Permata Kampung', 'unila-bandarlampung', 575000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24716, -5.3506), 4326)::geography, 'verified', 'Gg. Kenanga Nunyai. Lingkungan perumahan asri bebas polusi suara knalpot, sangat nyaman untuk istirahat.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Permata Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Al-Ikhlas Kampung', 'unila-bandarlampung', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.25056, -5.35495), 4326)::geography, 'verified', 'Gg. Mawar Kp. Baru. Kawasan kuliner mahasiswa 24 jam, dekat masjid besar, fotokopi, dan laundry kiloan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Al-Ikhlas Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mahasiswa Kampung', 'unila-bandarlampung', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24432, -5.35177), 4326)::geography, 'verified', 'Gg. Kenanga Nunyai. Dekat lapangan olahraga dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mahasiswa Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Barokah Kampung', 'unila-bandarlampung', 950000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.25238, -5.35258), 4326)::geography, 'verified', 'Gg. Dahlia. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Barokah Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Sentosa', 'unila-bandarlampung', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23787, -5.35883), 4326)::geography, 'verified', 'Jl. Pramuka. Keamanan portal malam 24 jam, dekat klinik pratama rujukan BPJS.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Sentosa' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Sejahtera Gedong', 'unila-bandarlampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.236, -5.37034), 4326)::geography, 'verified', 'Jl. ZA Pagar Alam. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sejahtera Gedong' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Mahasiswa', 'unila-bandarlampung', 1425000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23855, -5.36991), 4326)::geography, 'verified', 'Gg. Haji Said. Dekat halte busway Trans Bandar Lampung dan aneka rumah makan modern.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Mahasiswa' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Ceria Gedong', 'unila-bandarlampung', 1175000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23912, -5.36862), 4326)::geography, 'verified', 'Gg. Haji Said. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Ceria Gedong' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Harmoni Kampung', 'unila-bandarlampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.25254, -5.35257), 4326)::geography, 'verified', 'Gg. Mawar Kp. Baru. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Barokah', 'unila-bandarlampung', 725000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24714, -5.35214), 4326)::geography, 'verified', 'Gg. Mawar Kp. Baru. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Barokah' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Mahasiswa', 'unila-bandarlampung', 1375000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23798, -5.36622), 4326)::geography, 'verified', 'Gg. Haji Said. Akses sangat cepat ke Fakultas Hukum, FEB, dan Gedung Rektorat Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Mahasiswa' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Griya Indah Rajabasa', 'unila-bandarlampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23286, -5.36562), 4326)::geography, 'verified', 'Gg. Damai Rajabasa. Akses strategis ke terminal Rajabasa dan kampus Unila, banyak apotek dan kafe nugas.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Griya Indah Rajabasa' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Barokah', 'unila-bandarlampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23653, -5.3658), 4326)::geography, 'verified', 'Jl. Pramuka. Suasana tenang untuk fokus belajar skripsi, kamar luas dengan sirkulasi udara sejuk.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Barokah' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Asri Kampung', 'unila-bandarlampung', 700000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24948, -5.35342), 4326)::geography, 'verified', 'Gg. Mawar Kp. Baru. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Asri Kampung' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Mawar', 'unila-bandarlampung', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.25153, -5.35888), 4326)::geography, 'verified', 'Jl. Bumi Manti II. Kawasan kuliner mahasiswa 24 jam, dekat masjid besar, fotokopi, dan laundry kiloan murah.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Mawar' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Kenanga', 'unila-bandarlampung', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24659, -5.35008), 4326)::geography, 'verified', 'Gg. Cendana. Dekat lapangan olahraga dan minimarket 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Kenanga' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Bintang Gedong', 'unila-bandarlampung', 1475000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.24116, -5.3679), 4326)::geography, 'verified', 'Jl. ZA Pagar Alam. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Bintang Gedong' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Kenanga Gedong', 'unila-bandarlampung', 575000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(105.23776, -5.36648), 4326)::geography, 'verified', 'Gg. Haji Said. Akses sangat cepat ke Fakultas Hukum, FEB, dan Gedung Rektorat Unila.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Kenanga Gedong' AND campus_id = 'unila-bandarlampung'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Mawar Simpang', 'unp-padang', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35703, -0.90712), 4326)::geography, 'verified', 'Jl. Anggrek Simpang Tinju. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Mawar Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Al-Ikhlas Air', 'unp-padang', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35887, -0.89553), 4326)::geography, 'verified', 'Gg. Melati Air Tawar. Tepat di koridor utama kampus UNP depan Basko Grand Mall, akses transportasi angkot 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Al-Ikhlas Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Sentosa Simpang', 'unp-padang', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35795, -0.90403), 4326)::geography, 'verified', 'Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sentosa Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Cahaya Simpang', 'unp-padang', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35859, -0.90434), 4326)::geography, 'verified', 'Jl. Anggrek Simpang Tinju. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Cahaya Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Kemuning Simpang', 'unp-padang', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35903, -0.9052), 4326)::geography, 'verified', 'Jl. Anggrek Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Kemuning Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Griya Indah Air', 'unp-padang', 825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3501, -0.89641), 4326)::geography, 'verified', 'Jl. Merpati. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Griya Indah Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Pelangi', 'unp-padang', 1350000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3539, -0.88769), 4326)::geography, 'verified', 'Jl. Dakota. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Pelangi' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Sejahtera Tunggul', 'unp-padang', 750000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35234, -0.88814), 4326)::geography, 'verified', 'Gg. Bersama Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Sejahtera Tunggul' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Asri Air', 'unp-padang', 1100000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35892, -0.89353), 4326)::geography, 'verified', 'Jl. Prof. Dr. Hamka. Fasilitas kamar lengkap, WiFi internet stabil, gerbang pagar besi aman terkunci malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Asri Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Cahaya', 'unp-padang', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35414, -0.89011), 4326)::geography, 'verified', 'Jl. DPR Tunggul Hitam. Kawasan hunian tenang dan nyaman di utara kampus UNP, dekat Stasiun KRL Air Tawar.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Cahaya' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Dahlia', 'unp-padang', 775000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35257, -0.8918), 4326)::geography, 'verified', 'Gg. Bersama Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Dahlia' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Sejahtera Air', 'unp-padang', 875000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34696, -0.90152), 4326)::geography, 'verified', 'Jl. Rajawali Air Tawar. Sentra hunian kos legendaris mahasiswa UNP, jalan kaki 3-5 menit tembus gerbang fakultas olahraga & teknik.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Sejahtera Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Sejahtera', 'unp-padang', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35843, -0.89291), 4326)::geography, 'verified', 'Jl. Belibis. Fasilitas kamar lengkap, WiFi internet stabil, gerbang pagar besi aman terkunci malam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Sejahtera' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Paviliun Melati Tunggul', 'unp-padang', 1200000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35005, -0.88918), 4326)::geography, 'verified', 'Jl. Dakota. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Paviliun Melati Tunggul' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Putra Jaya Air', 'unp-padang', 1550000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","parking_car"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35814, -0.8916), 4326)::geography, 'verified', 'Jl. Teratai. Tepat di koridor utama kampus UNP depan Basko Grand Mall, akses transportasi angkot 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Putra Jaya Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mandiri Air', 'unp-padang', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen","parking_car"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35765, -0.89747), 4326)::geography, 'verified', 'Jl. Belibis. Tepat di koridor utama kampus UNP depan Basko Grand Mall, akses transportasi angkot 24 jam.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mandiri Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'D''Kost Putra Jaya', 'unp-padang', 1000000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36105, -0.90221), 4326)::geography, 'verified', 'Jl. Gajah Mada. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'D''Kost Putra Jaya' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Mandiri', 'unp-padang', 1000000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34787, -0.89823), 4326)::geography, 'verified', 'Jl. Cendrawasih. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Mandiri' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Harmoni Tunggul', 'unp-padang', 900000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35503, -0.88927), 4326)::geography, 'verified', 'Jl. DPR Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Harmoni Tunggul' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Barokah', 'unp-padang', 1500000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35557, -0.89095), 4326)::geography, 'verified', 'Jl. DPR Tunggul Hitam. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Barokah' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Mahasiswa Air', 'unp-padang', 1250000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34937, -0.89602), 4326)::geography, 'verified', 'Jl. Rajawali Air Tawar. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Mahasiswa Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Amanah Air', 'unp-padang', 650000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34725, -0.90114), 4326)::geography, 'verified', 'Jl. Merpati. Sentra hunian kos legendaris mahasiswa UNP, jalan kaki 3-5 menit tembus gerbang fakultas olahraga & teknik.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Amanah Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Anggrek', 'unp-padang', 825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3578, -0.89144), 4326)::geography, 'verified', 'Gg. Bersama Tunggul Hitam. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Anggrek' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kost Sakinah Tunggul', 'unp-padang', 625000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35184, -0.88602), 4326)::geography, 'verified', 'Jl. Hercules. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kost Sakinah Tunggul' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Rumah Kos Ceria Simpang', 'unp-padang', 1025000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36328, -0.9067), 4326)::geography, 'verified', 'Jl. Gajah Mada. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Rumah Kos Ceria Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Pondok Kemuning Air', 'unp-padang', 875000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.34684, -0.8964), 4326)::geography, 'verified', 'Jl. Merpati. Dekat pantai Padang dengan hembusan angin sejuk, lingkungan mahasiswa aktif dan guyub.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Pondok Kemuning Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Kemuning Air', 'unp-padang', 825000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35046, -0.89769), 4326)::geography, 'verified', 'Gg. Garuda. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Kemuning Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Cendana Tunggul', 'unp-padang', 1450000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","water_heater","access_24h","shared_kitchen"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35199, -0.88982), 4326)::geography, 'verified', 'Jl. Dakota. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Cendana Tunggul' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Wisma Permata Simpang', 'unp-padang', 750000, '{"electricity":"included","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":true,"pets_allowed":false,"room_size":"3x3 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35671, -0.90625), 4326)::geography, 'verified', 'Jl. Anggrek Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Wisma Permata Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Griya Putri Cantika Tunggul', 'unp-padang', 1600000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.3577, -0.89161), 4326)::geography, 'verified', 'Gg. Bersama Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Griya Putri Cantika Tunggul' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Ganesha Simpang', 'unp-padang', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","ac","water_heater","access_24h"]'::jsonb, '{"curfew":"24_jam_portal_mandiri","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.36049, -0.90748), 4326)::geography, 'verified', 'Jl. Anggrek Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Ganesha Simpang' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Asrama Cahaya Air', 'unp-padang', 1300000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":200000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"22:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3x3.5 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35078, -0.89978), 4326)::geography, 'verified', 'Jl. Rajawali Air Tawar. Sentra hunian kos legendaris mahasiswa UNP, jalan kaki 3-5 menit tembus gerbang fakultas olahraga & teknik.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Asrama Cahaya Air' AND campus_id = 'unp-padang'
);
INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT 'Kos Mawar Air', 'unp-padang', 1400000, '{"electricity":"token_mandiri","water":"included_sumur_bor","wifi":"included","trash_cleaning":"included","deposit":500000}'::jsonb, '["wifi","desk_chair","closet","parking_motorcycle","bathroom_inside","ac","shared_kitchen"]'::jsonb, '{"curfew":"23:00_wib","guest_policy":"tamu_di_ruang_tamu_bersama","opposite_gender_in_room":false,"smoking_allowed":false,"pets_allowed":false,"room_size":"3.5x4 m²"}'::jsonb, ST_SetSRID(ST_MakePoint(100.35063, -0.89891), 4326)::geography, 'verified', 'Jl. Merpati. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = 'Kos Mawar Air' AND campus_id = 'unp-padang'
);

-- 4. PRE-COMPUTED COMMUTE CACHE (3096 Routes)
INSERT INTO public.commute_cache (origin_cell, dest_id, mode, minutes, distance_m, fetched_at) VALUES
  ('-6.369,106.821', 'ui-depok', 'walking', 17, 1208, now()),
  ('-6.369,106.821', 'ui-depok', 'motorcycle', 4, 1256, now()),
  ('-6.369,106.821', 'ui-depok', 'driving-car', 5, 1304, now()),
  ('-6.369,106.821', 'ui-gerbatama', 'walking', 17, 1208, now()),
  ('-6.369,106.821', 'ui-gerbatama', 'motorcycle', 4, 1256, now()),
  ('-6.369,106.821', 'ui-gerbatama', 'driving-car', 5, 1304, now()),
  ('-6.369,106.821', 'ui-kutek', 'walking', 3, 180, now()),
  ('-6.369,106.821', 'ui-kutek', 'motorcycle', 1, 187, now()),
  ('-6.369,106.821', 'ui-kutek', 'driving-car', 2, 194, now()),
  ('-6.369,106.821', 'ui-kukel', 'walking', 22, 1640, now()),
  ('-6.369,106.821', 'ui-kukel', 'motorcycle', 5, 1706, now()),
  ('-6.369,106.821', 'ui-kukel', 'driving-car', 6, 1771, now()),
  ('-6.369,106.821', 'ui-pocin', 'walking', 20, 1494, now()),
  ('-6.369,106.821', 'ui-pocin', 'motorcycle', 4, 1554, now()),
  ('-6.369,106.821', 'ui-pocin', 'driving-car', 6, 1613, now()),
  ('-6.361,106.832', 'ui-depok', 'walking', 11, 754, now()),
  ('-6.361,106.832', 'ui-depok', 'motorcycle', 2, 784, now()),
  ('-6.361,106.832', 'ui-depok', 'driving-car', 3, 814, now()),
  ('-6.361,106.832', 'ui-gerbatama', 'walking', 11, 754, now()),
  ('-6.361,106.832', 'ui-gerbatama', 'motorcycle', 2, 784, now()),
  ('-6.361,106.832', 'ui-gerbatama', 'driving-car', 3, 814, now()),
  ('-6.361,106.832', 'ui-kutek', 'walking', 23, 1703, now()),
  ('-6.361,106.832', 'ui-kutek', 'motorcycle', 5, 1771, now()),
  ('-6.361,106.832', 'ui-kutek', 'driving-car', 7, 1839, now()),
  ('-6.361,106.832', 'ui-kukel', 'walking', 15, 1083, now()),
  ('-6.361,106.832', 'ui-kukel', 'motorcycle', 3, 1126, now()),
  ('-6.361,106.832', 'ui-kukel', 'driving-car', 4, 1169, now()),
  ('-6.361,106.832', 'ui-pocin', 'walking', 13, 946, now()),
  ('-6.361,106.832', 'ui-pocin', 'motorcycle', 3, 984, now()),
  ('-6.361,106.832', 'ui-pocin', 'driving-car', 4, 1022, now()),
  ('-6.365,106.834', 'ui-depok', 'walking', 15, 1055, now()),
  ('-6.365,106.834', 'ui-depok', 'motorcycle', 3, 1097, now()),
  ('-6.365,106.834', 'ui-depok', 'driving-car', 4, 1139, now()),
  ('-6.365,106.834', 'ui-gerbatama', 'walking', 15, 1055, now()),
  ('-6.365,106.834', 'ui-gerbatama', 'motorcycle', 3, 1097, now()),
  ('-6.365,106.834', 'ui-gerbatama', 'driving-car', 4, 1139, now()),
  ('-6.365,106.834', 'ui-kutek', 'walking', 23, 1683, now()),
  ('-6.365,106.834', 'ui-kutek', 'motorcycle', 5, 1750, now()),
  ('-6.365,106.834', 'ui-kutek', 'driving-car', 7, 1817, now()),
  ('-6.365,106.834', 'ui-kukel', 'walking', 21, 1563, now()),
  ('-6.365,106.834', 'ui-kukel', 'motorcycle', 5, 1625, now()),
  ('-6.365,106.834', 'ui-kukel', 'driving-car', 6, 1688, now()),
  ('-6.365,106.834', 'ui-pocin', 'walking', 8, 531, now()),
  ('-6.365,106.834', 'ui-pocin', 'motorcycle', 2, 553, now()),
  ('-6.365,106.834', 'ui-pocin', 'driving-car', 2, 574, now()),
  ('-6.372,106.831', 'ui-depok', 'walking', 20, 1431, now()),
  ('-6.372,106.831', 'ui-depok', 'motorcycle', 4, 1489, now()),
  ('-6.372,106.831', 'ui-depok', 'driving-car', 6, 1546, now()),
  ('-6.372,106.831', 'ui-gerbatama', 'walking', 20, 1431, now()),
  ('-6.372,106.831', 'ui-gerbatama', 'motorcycle', 4, 1489, now()),
  ('-6.372,106.831', 'ui-gerbatama', 'driving-car', 6, 1546, now()),
  ('-6.372,106.831', 'ui-kutek', 'walking', 17, 1246, now()),
  ('-6.372,106.831', 'ui-kutek', 'motorcycle', 4, 1296, now()),
  ('-6.372,106.831', 'ui-kutek', 'driving-car', 5, 1346, now()),
  ('-6.372,106.831', 'ui-kukel', 'walking', 28, 2089, now()),
  ('-6.372,106.831', 'ui-kukel', 'motorcycle', 6, 2172, now()),
  ('-6.372,106.831', 'ui-kukel', 'driving-car', 8, 2256, now()),
  ('-6.372,106.831', 'ui-pocin', 'walking', 7, 506, now()),
  ('-6.372,106.831', 'ui-pocin', 'motorcycle', 2, 527, now()),
  ('-6.372,106.831', 'ui-pocin', 'driving-car', 2, 547, now()),
  ('-6.374,106.820', 'ui-depok', 'walking', 27, 1988, now()),
  ('-6.374,106.820', 'ui-depok', 'motorcycle', 6, 2067, now()),
  ('-6.374,106.820', 'ui-depok', 'driving-car', 8, 2147, now()),
  ('-6.374,106.820', 'ui-gerbatama', 'walking', 27, 1988, now()),
  ('-6.374,106.820', 'ui-gerbatama', 'motorcycle', 6, 2067, now()),
  ('-6.374,106.820', 'ui-gerbatama', 'driving-car', 8, 2147, now()),
  ('-6.374,106.820', 'ui-kutek', 'walking', 12, 894, now()),
  ('-6.374,106.820', 'ui-kutek', 'motorcycle', 3, 930, now()),
  ('-6.374,106.820', 'ui-kutek', 'driving-car', 4, 965, now()),
  ('-6.374,106.820', 'ui-kukel', 'walking', 33, 2465, now()),
  ('-6.374,106.820', 'ui-kukel', 'motorcycle', 7, 2564, now()),
  ('-6.374,106.820', 'ui-kukel', 'driving-car', 9, 2662, now()),
  ('-6.374,106.820', 'ui-pocin', 'walking', 26, 1930, now()),
  ('-6.374,106.820', 'ui-pocin', 'motorcycle', 6, 2007, now()),
  ('-6.374,106.820', 'ui-pocin', 'driving-car', 7, 2084, now()),
  ('-6.370,106.820', 'ui-depok', 'walking', 19, 1408, now()),
  ('-6.370,106.820', 'ui-depok', 'motorcycle', 4, 1464, now()),
  ('-6.370,106.820', 'ui-depok', 'driving-car', 6, 1520, now()),
  ('-6.370,106.820', 'ui-gerbatama', 'walking', 19, 1408, now()),
  ('-6.370,106.820', 'ui-gerbatama', 'motorcycle', 4, 1464, now()),
  ('-6.370,106.820', 'ui-gerbatama', 'driving-car', 6, 1520, now()),
  ('-6.370,106.820', 'ui-kutek', 'walking', 5, 330, now()),
  ('-6.370,106.820', 'ui-kutek', 'motorcycle', 1, 343, now()),
  ('-6.370,106.820', 'ui-kutek', 'driving-car', 2, 356, now()),
  ('-6.370,106.820', 'ui-kukel', 'walking', 25, 1844, now()),
  ('-6.370,106.820', 'ui-kukel', 'motorcycle', 5, 1918, now()),
  ('-6.370,106.820', 'ui-kukel', 'driving-car', 7, 1991, now()),
  ('-6.370,106.820', 'ui-pocin', 'walking', 22, 1609, now()),
  ('-6.370,106.820', 'ui-pocin', 'motorcycle', 5, 1673, now()),
  ('-6.370,106.820', 'ui-pocin', 'driving-car', 6, 1737, now()),
  ('-6.365,106.832', 'ui-depok', 'walking', 12, 845, now()),
  ('-6.365,106.832', 'ui-depok', 'motorcycle', 3, 879, now()),
  ('-6.365,106.832', 'ui-depok', 'driving-car', 4, 913, now()),
  ('-6.365,106.832', 'ui-gerbatama', 'walking', 12, 845, now()),
  ('-6.365,106.832', 'ui-gerbatama', 'motorcycle', 3, 879, now()),
  ('-6.365,106.832', 'ui-gerbatama', 'driving-car', 4, 913, now()),
  ('-6.365,106.832', 'ui-kutek', 'walking', 19, 1378, now()),
  ('-6.365,106.832', 'ui-kutek', 'motorcycle', 4, 1433, now()),
  ('-6.365,106.832', 'ui-kutek', 'driving-car', 5, 1488, now()),
  ('-6.365,106.832', 'ui-kukel', 'walking', 20, 1429, now()),
  ('-6.365,106.832', 'ui-kukel', 'motorcycle', 4, 1486, now()),
  ('-6.365,106.832', 'ui-kukel', 'driving-car', 6, 1543, now()),
  ('-6.365,106.832', 'ui-pocin', 'walking', 5, 348, now()),
  ('-6.365,106.832', 'ui-pocin', 'motorcycle', 1, 361, now()),
  ('-6.365,106.832', 'ui-pocin', 'driving-car', 2, 375, now()),
  ('-6.367,106.822', 'ui-depok', 'walking', 14, 1019, now()),
  ('-6.367,106.822', 'ui-depok', 'motorcycle', 3, 1060, now()),
  ('-6.367,106.822', 'ui-depok', 'driving-car', 4, 1100, now()),
  ('-6.367,106.822', 'ui-gerbatama', 'walking', 14, 1019, now()),
  ('-6.367,106.822', 'ui-gerbatama', 'motorcycle', 3, 1060, now()),
  ('-6.367,106.822', 'ui-gerbatama', 'driving-car', 4, 1100, now()),
  ('-6.367,106.822', 'ui-kutek', 'walking', 3, 205, now()),
  ('-6.367,106.822', 'ui-kutek', 'motorcycle', 1, 213, now()),
  ('-6.367,106.822', 'ui-kutek', 'driving-car', 2, 221, now()),
  ('-6.367,106.822', 'ui-kukel', 'walking', 20, 1441, now()),
  ('-6.367,106.822', 'ui-kukel', 'motorcycle', 4, 1499, now()),
  ('-6.367,106.822', 'ui-kukel', 'driving-car', 6, 1557, now()),
  ('-6.367,106.822', 'ui-pocin', 'walking', 19, 1414, now()),
  ('-6.367,106.822', 'ui-pocin', 'motorcycle', 4, 1470, now()),
  ('-6.367,106.822', 'ui-pocin', 'driving-car', 6, 1527, now()),
  ('-6.363,106.834', 'ui-depok', 'walking', 13, 909, now()),
  ('-6.363,106.834', 'ui-depok', 'motorcycle', 3, 945, now()),
  ('-6.363,106.834', 'ui-depok', 'driving-car', 4, 981, now()),
  ('-6.363,106.834', 'ui-gerbatama', 'walking', 13, 909, now()),
  ('-6.363,106.834', 'ui-gerbatama', 'motorcycle', 3, 945, now()),
  ('-6.363,106.834', 'ui-gerbatama', 'driving-car', 4, 981, now()),
  ('-6.363,106.834', 'ui-kutek', 'walking', 23, 1701, now()),
  ('-6.363,106.834', 'ui-kutek', 'motorcycle', 5, 1769, now()),
  ('-6.363,106.834', 'ui-kutek', 'driving-car', 7, 1837, now()),
  ('-6.363,106.834', 'ui-kukel', 'walking', 18, 1344, now()),
  ('-6.363,106.834', 'ui-kukel', 'motorcycle', 4, 1398, now()),
  ('-6.363,106.834', 'ui-kukel', 'driving-car', 5, 1451, now()),
  ('-6.363,106.834', 'ui-pocin', 'walking', 10, 725, now()),
  ('-6.363,106.834', 'ui-pocin', 'motorcycle', 2, 754, now()),
  ('-6.363,106.834', 'ui-pocin', 'driving-car', 3, 783, now()),
  ('-6.371,106.822', 'ui-depok', 'walking', 20, 1429, now()),
  ('-6.371,106.822', 'ui-depok', 'motorcycle', 4, 1486, now()),
  ('-6.371,106.822', 'ui-depok', 'driving-car', 6, 1543, now()),
  ('-6.371,106.822', 'ui-gerbatama', 'walking', 20, 1429, now()),
  ('-6.371,106.822', 'ui-gerbatama', 'motorcycle', 4, 1486, now()),
  ('-6.371,106.822', 'ui-gerbatama', 'driving-car', 6, 1543, now()),
  ('-6.371,106.822', 'ui-kutek', 'walking', 5, 354, now()),
  ('-6.371,106.822', 'ui-kutek', 'motorcycle', 1, 368, now()),
  ('-6.371,106.822', 'ui-kutek', 'driving-car', 2, 382, now()),
  ('-6.371,106.822', 'ui-kukel', 'walking', 26, 1938, now()),
  ('-6.371,106.822', 'ui-kukel', 'motorcycle', 6, 2015, now()),
  ('-6.371,106.822', 'ui-kukel', 'driving-car', 7, 2093, now()),
  ('-6.371,106.822', 'ui-pocin', 'walking', 20, 1443, now()),
  ('-6.371,106.822', 'ui-pocin', 'motorcycle', 4, 1500, now()),
  ('-6.371,106.822', 'ui-pocin', 'driving-car', 6, 1558, now()),
  ('-6.367,106.833', 'ui-depok', 'walking', 15, 1081, now()),
  ('-6.367,106.833', 'ui-depok', 'motorcycle', 3, 1125, now()),
  ('-6.367,106.833', 'ui-depok', 'driving-car', 4, 1168, now()),
  ('-6.367,106.833', 'ui-gerbatama', 'walking', 15, 1081, now()),
  ('-6.367,106.833', 'ui-gerbatama', 'motorcycle', 3, 1125, now()),
  ('-6.367,106.833', 'ui-gerbatama', 'driving-car', 4, 1168, now()),
  ('-6.367,106.833', 'ui-kutek', 'walking', 20, 1465, now()),
  ('-6.367,106.833', 'ui-kutek', 'motorcycle', 4, 1524, now()),
  ('-6.367,106.833', 'ui-kutek', 'driving-car', 6, 1582, now()),
  ('-6.367,106.833', 'ui-kukel', 'walking', 23, 1679, now()),
  ('-6.367,106.833', 'ui-kukel', 'motorcycle', 5, 1746, now()),
  ('-6.367,106.833', 'ui-kukel', 'driving-car', 7, 1813, now()),
  ('-6.367,106.833', 'ui-pocin', 'walking', 3, 196, now()),
  ('-6.367,106.833', 'ui-pocin', 'motorcycle', 1, 204, now()),
  ('-6.367,106.833', 'ui-pocin', 'driving-car', 2, 212, now()),
  ('-6.361,106.823', 'ui-depok', 'walking', 8, 526, now()),
  ('-6.361,106.823', 'ui-depok', 'motorcycle', 2, 547, now()),
  ('-6.361,106.823', 'ui-depok', 'driving-car', 2, 568, now()),
  ('-6.361,106.823', 'ui-gerbatama', 'walking', 8, 526, now()),
  ('-6.361,106.823', 'ui-gerbatama', 'motorcycle', 2, 547, now()),
  ('-6.361,106.823', 'ui-gerbatama', 'driving-car', 2, 568, now()),
  ('-6.361,106.823', 'ui-kutek', 'walking', 15, 1120, now()),
  ('-6.361,106.823', 'ui-kutek', 'motorcycle', 3, 1165, now()),
  ('-6.361,106.823', 'ui-kutek', 'driving-car', 5, 1210, now()),
  ('-6.361,106.823', 'ui-kukel', 'walking', 7, 500, now()),
  ('-6.361,106.823', 'ui-kukel', 'motorcycle', 2, 520, now()),
  ('-6.361,106.823', 'ui-kukel', 'driving-car', 2, 540, now()),
  ('-6.361,106.823', 'ui-pocin', 'walking', 21, 1570, now()),
  ('-6.361,106.823', 'ui-pocin', 'motorcycle', 5, 1633, now()),
  ('-6.361,106.823', 'ui-pocin', 'driving-car', 6, 1696, now()),
  ('-6.366,106.835', 'ui-depok', 'walking', 17, 1238, now()),
  ('-6.366,106.835', 'ui-depok', 'motorcycle', 4, 1287, now()),
  ('-6.366,106.835', 'ui-depok', 'driving-car', 5, 1337, now()),
  ('-6.366,106.835', 'ui-gerbatama', 'walking', 17, 1238, now()),
  ('-6.366,106.835', 'ui-gerbatama', 'motorcycle', 4, 1287, now()),
  ('-6.366,106.835', 'ui-gerbatama', 'driving-car', 5, 1337, now()),
  ('-6.366,106.835', 'ui-kutek', 'walking', 24, 1761, now()),
  ('-6.366,106.835', 'ui-kutek', 'motorcycle', 5, 1832, now()),
  ('-6.366,106.835', 'ui-kutek', 'driving-car', 7, 1902, now()),
  ('-6.366,106.835', 'ui-kukel', 'walking', 24, 1766, now()),
  ('-6.366,106.835', 'ui-kukel', 'motorcycle', 5, 1837, now()),
  ('-6.366,106.835', 'ui-kukel', 'driving-car', 7, 1908, now()),
  ('-6.366,106.835', 'ui-pocin', 'walking', 7, 499, now()),
  ('-6.366,106.835', 'ui-pocin', 'motorcycle', 2, 519, now()),
  ('-6.366,106.835', 'ui-pocin', 'driving-car', 2, 539, now()),
  ('-6.362,106.832', 'ui-depok', 'walking', 9, 664, now()),
  ('-6.362,106.832', 'ui-depok', 'motorcycle', 2, 690, now()),
  ('-6.362,106.832', 'ui-depok', 'driving-car', 3, 717, now()),
  ('-6.362,106.832', 'ui-gerbatama', 'walking', 9, 664, now()),
  ('-6.362,106.832', 'ui-gerbatama', 'motorcycle', 2, 690, now()),
  ('-6.362,106.832', 'ui-gerbatama', 'driving-car', 3, 717, now()),
  ('-6.362,106.832', 'ui-kutek', 'walking', 21, 1555, now()),
  ('-6.362,106.832', 'ui-kutek', 'motorcycle', 5, 1617, now()),
  ('-6.362,106.832', 'ui-kutek', 'driving-car', 6, 1679, now()),
  ('-6.362,106.832', 'ui-kukel', 'walking', 15, 1089, now()),
  ('-6.362,106.832', 'ui-kukel', 'motorcycle', 3, 1132, now()),
  ('-6.362,106.832', 'ui-kukel', 'driving-car', 4, 1176, now()),
  ('-6.362,106.832', 'ui-pocin', 'walking', 11, 806, now()),
  ('-6.362,106.832', 'ui-pocin', 'motorcycle', 3, 839, now()),
  ('-6.362,106.832', 'ui-pocin', 'driving-car', 3, 871, now()),
  ('-6.369,106.823', 'ui-depok', 'walking', 15, 1119, now()),
  ('-6.369,106.823', 'ui-depok', 'motorcycle', 3, 1164, now()),
  ('-6.369,106.823', 'ui-depok', 'driving-car', 5, 1208, now()),
  ('-6.369,106.823', 'ui-gerbatama', 'walking', 15, 1119, now()),
  ('-6.369,106.823', 'ui-gerbatama', 'motorcycle', 3, 1164, now()),
  ('-6.369,106.823', 'ui-gerbatama', 'driving-car', 5, 1208, now()),
  ('-6.369,106.823', 'ui-kutek', 'walking', 2, 98, now()),
  ('-6.369,106.823', 'ui-kutek', 'motorcycle', 1, 101, now()),
  ('-6.369,106.823', 'ui-kutek', 'driving-car', 2, 105, now()),
  ('-6.369,106.823', 'ui-kukel', 'walking', 22, 1635, now()),
  ('-6.369,106.823', 'ui-kukel', 'motorcycle', 5, 1700, now()),
  ('-6.369,106.823', 'ui-kukel', 'driving-car', 6, 1766, now()),
  ('-6.369,106.823', 'ui-pocin', 'walking', 17, 1251, now()),
  ('-6.369,106.823', 'ui-pocin', 'motorcycle', 4, 1301, now()),
  ('-6.369,106.823', 'ui-pocin', 'driving-car', 5, 1351, now()),
  ('-6.359,106.824', 'ui-depok', 'walking', 8, 588, now()),
  ('-6.359,106.824', 'ui-depok', 'motorcycle', 2, 611, now()),
  ('-6.359,106.824', 'ui-depok', 'driving-car', 3, 635, now()),
  ('-6.359,106.824', 'ui-gerbatama', 'walking', 8, 588, now()),
  ('-6.359,106.824', 'ui-gerbatama', 'motorcycle', 2, 611, now()),
  ('-6.359,106.824', 'ui-gerbatama', 'driving-car', 3, 635, now()),
  ('-6.359,106.824', 'ui-kutek', 'walking', 18, 1336, now()),
  ('-6.359,106.824', 'ui-kutek', 'motorcycle', 4, 1390, now()),
  ('-6.359,106.824', 'ui-kutek', 'driving-car', 5, 1443, now()),
  ('-6.359,106.824', 'ui-kukel', 'walking', 4, 294, now()),
  ('-6.359,106.824', 'ui-kukel', 'motorcycle', 1, 306, now()),
  ('-6.359,106.824', 'ui-kukel', 'driving-car', 2, 317, now()),
  ('-6.359,106.824', 'ui-pocin', 'walking', 23, 1669, now()),
  ('-6.359,106.824', 'ui-pocin', 'motorcycle', 5, 1736, now()),
  ('-6.359,106.824', 'ui-pocin', 'driving-car', 7, 1802, now()),
  ('-6.364,106.834', 'ui-depok', 'walking', 14, 999, now()),
  ('-6.364,106.834', 'ui-depok', 'motorcycle', 3, 1039, now()),
  ('-6.364,106.834', 'ui-depok', 'driving-car', 4, 1079, now()),
  ('-6.364,106.834', 'ui-gerbatama', 'walking', 14, 999, now()),
  ('-6.364,106.834', 'ui-gerbatama', 'motorcycle', 3, 1039, now()),
  ('-6.364,106.834', 'ui-gerbatama', 'driving-car', 4, 1079, now()),
  ('-6.364,106.834', 'ui-kutek', 'walking', 23, 1718, now()),
  ('-6.364,106.834', 'ui-kutek', 'motorcycle', 5, 1786, now()),
  ('-6.364,106.834', 'ui-kutek', 'driving-car', 7, 1855, now()),
  ('-6.364,106.834', 'ui-kukel', 'walking', 20, 1465, now()),
  ('-6.364,106.834', 'ui-kukel', 'motorcycle', 4, 1524, now()),
  ('-6.364,106.834', 'ui-kukel', 'driving-car', 6, 1582, now()),
  ('-6.364,106.834', 'ui-pocin', 'walking', 9, 646, now()),
  ('-6.364,106.834', 'ui-pocin', 'motorcycle', 2, 672, now()),
  ('-6.364,106.834', 'ui-pocin', 'driving-car', 3, 698, now()),
  ('-6.373,106.832', 'ui-depok', 'walking', 22, 1650, now()),
  ('-6.373,106.832', 'ui-depok', 'motorcycle', 5, 1716, now()),
  ('-6.373,106.832', 'ui-depok', 'driving-car', 6, 1782, now()),
  ('-6.373,106.832', 'ui-gerbatama', 'walking', 22, 1650, now()),
  ('-6.373,106.832', 'ui-gerbatama', 'motorcycle', 5, 1716, now()),
  ('-6.373,106.832', 'ui-gerbatama', 'driving-car', 6, 1782, now()),
  ('-6.373,106.832', 'ui-kutek', 'walking', 19, 1391, now()),
  ('-6.373,106.832', 'ui-kutek', 'motorcycle', 4, 1447, now()),
  ('-6.373,106.832', 'ui-kutek', 'driving-car', 6, 1503, now()),
  ('-6.373,106.832', 'ui-kukel', 'walking', 31, 2309, now()),
  ('-6.373,106.832', 'ui-kukel', 'motorcycle', 7, 2401, now()),
  ('-6.373,106.832', 'ui-kukel', 'driving-car', 9, 2493, now()),
  ('-6.373,106.832', 'ui-pocin', 'walking', 10, 699, now()),
  ('-6.373,106.832', 'ui-pocin', 'motorcycle', 2, 727, now()),
  ('-6.373,106.832', 'ui-pocin', 'driving-car', 3, 755, now()),
  ('-0.917,100.458', 'unand-limau-manis', 'walking', 7, 481, now()),
  ('-0.917,100.458', 'unand-limau-manis', 'motorcycle', 2, 501, now()),
  ('-0.917,100.458', 'unand-limau-manis', 'driving-car', 2, 520, now()),
  ('-0.917,100.458', 'unand-gerbang-utama', 'walking', 7, 481, now()),
  ('-0.917,100.458', 'unand-gerbang-utama', 'motorcycle', 2, 501, now()),
  ('-0.917,100.458', 'unand-gerbang-utama', 'driving-car', 2, 520, now()),
  ('-0.917,100.458', 'unand-pasar-baru', 'walking', 44, 3284, now()),
  ('-0.917,100.458', 'unand-pasar-baru', 'motorcycle', 9, 3415, now()),
  ('-0.917,100.458', 'unand-pasar-baru', 'driving-car', 12, 3546, now()),
  ('-0.917,100.458', 'unand-pintu-pauh', 'walking', 30, 2203, now()),
  ('-0.917,100.458', 'unand-pintu-pauh', 'motorcycle', 6, 2291, now()),
  ('-0.917,100.458', 'unand-pintu-pauh', 'driving-car', 8, 2379, now()),
  ('-0.924,100.449', 'unand-limau-manis', 'walking', 28, 2085, now()),
  ('-0.924,100.449', 'unand-limau-manis', 'motorcycle', 6, 2168, now()),
  ('-0.924,100.449', 'unand-limau-manis', 'driving-car', 8, 2252, now()),
  ('-0.924,100.449', 'unand-gerbang-utama', 'walking', 28, 2085, now()),
  ('-0.924,100.449', 'unand-gerbang-utama', 'motorcycle', 6, 2168, now()),
  ('-0.924,100.449', 'unand-gerbang-utama', 'driving-car', 8, 2252, now()),
  ('-0.924,100.449', 'unand-pasar-baru', 'walking', 27, 1985, now()),
  ('-0.924,100.449', 'unand-pasar-baru', 'motorcycle', 6, 2064, now()),
  ('-0.924,100.449', 'unand-pasar-baru', 'driving-car', 8, 2144, now()),
  ('-0.924,100.449', 'unand-pintu-pauh', 'walking', 18, 1349, now()),
  ('-0.924,100.449', 'unand-pintu-pauh', 'motorcycle', 4, 1403, now()),
  ('-0.924,100.449', 'unand-pintu-pauh', 'driving-car', 5, 1457, now()),
  ('-0.911,100.463', 'unand-limau-manis', 'walking', 8, 570, now()),
  ('-0.911,100.463', 'unand-limau-manis', 'motorcycle', 2, 593, now()),
  ('-0.911,100.463', 'unand-limau-manis', 'driving-car', 3, 616, now()),
  ('-0.911,100.463', 'unand-gerbang-utama', 'walking', 8, 570, now()),
  ('-0.911,100.463', 'unand-gerbang-utama', 'motorcycle', 2, 593, now()),
  ('-0.911,100.463', 'unand-gerbang-utama', 'driving-car', 3, 616, now()),
  ('-0.911,100.463', 'unand-pasar-baru', 'walking', 57, 4233, now()),
  ('-0.911,100.463', 'unand-pasar-baru', 'motorcycle', 12, 4402, now()),
  ('-0.911,100.463', 'unand-pasar-baru', 'driving-car', 16, 4571, now()),
  ('-0.911,100.463', 'unand-pintu-pauh', 'walking', 42, 3081, now()),
  ('-0.911,100.463', 'unand-pintu-pauh', 'motorcycle', 9, 3205, now()),
  ('-0.911,100.463', 'unand-pintu-pauh', 'driving-car', 12, 3328, now()),
  ('-0.930,100.444', 'unand-limau-manis', 'walking', 43, 3166, now()),
  ('-0.930,100.444', 'unand-limau-manis', 'motorcycle', 9, 3293, now()),
  ('-0.930,100.444', 'unand-limau-manis', 'driving-car', 12, 3420, now()),
  ('-0.930,100.444', 'unand-gerbang-utama', 'walking', 43, 3166, now()),
  ('-0.930,100.444', 'unand-gerbang-utama', 'motorcycle', 9, 3293, now()),
  ('-0.930,100.444', 'unand-gerbang-utama', 'driving-car', 12, 3420, now()),
  ('-0.930,100.444', 'unand-pasar-baru', 'walking', 21, 1513, now()),
  ('-0.930,100.444', 'unand-pasar-baru', 'motorcycle', 4, 1573, now()),
  ('-0.930,100.444', 'unand-pasar-baru', 'driving-car', 6, 1634, now()),
  ('-0.930,100.444', 'unand-pintu-pauh', 'walking', 23, 1654, now()),
  ('-0.930,100.444', 'unand-pintu-pauh', 'motorcycle', 5, 1720, now()),
  ('-0.930,100.444', 'unand-pintu-pauh', 'driving-car', 6, 1786, now()),
  ('-0.920,100.447', 'unand-limau-manis', 'walking', 28, 2053, now()),
  ('-0.920,100.447', 'unand-limau-manis', 'motorcycle', 6, 2135, now()),
  ('-0.920,100.447', 'unand-limau-manis', 'driving-car', 8, 2217, now()),
  ('-0.920,100.447', 'unand-gerbang-utama', 'walking', 28, 2053, now()),
  ('-0.920,100.447', 'unand-gerbang-utama', 'motorcycle', 6, 2135, now()),
  ('-0.920,100.447', 'unand-gerbang-utama', 'driving-car', 8, 2217, now()),
  ('-0.920,100.447', 'unand-pasar-baru', 'walking', 23, 1676, now()),
  ('-0.920,100.447', 'unand-pasar-baru', 'motorcycle', 5, 1743, now()),
  ('-0.920,100.447', 'unand-pasar-baru', 'driving-car', 7, 1810, now()),
  ('-0.920,100.447', 'unand-pintu-pauh', 'walking', 11, 753, now()),
  ('-0.920,100.447', 'unand-pintu-pauh', 'motorcycle', 2, 783, now()),
  ('-0.920,100.447', 'unand-pintu-pauh', 'driving-car', 3, 813, now()),
  ('-0.915,100.459', 'unand-limau-manis', 'walking', 3, 193, now()),
  ('-0.915,100.459', 'unand-limau-manis', 'motorcycle', 1, 200, now()),
  ('-0.915,100.459', 'unand-limau-manis', 'driving-car', 2, 208, now()),
  ('-0.915,100.459', 'unand-gerbang-utama', 'walking', 3, 193, now()),
  ('-0.915,100.459', 'unand-gerbang-utama', 'motorcycle', 1, 200, now()),
  ('-0.915,100.459', 'unand-gerbang-utama', 'driving-car', 2, 208, now()),
  ('-0.915,100.459', 'unand-pasar-baru', 'walking', 47, 3516, now()),
  ('-0.915,100.459', 'unand-pasar-baru', 'motorcycle', 10, 3657, now()),
  ('-0.915,100.459', 'unand-pasar-baru', 'driving-car', 13, 3798, now()),
  ('-0.915,100.459', 'unand-pintu-pauh', 'walking', 32, 2399, now()),
  ('-0.915,100.459', 'unand-pintu-pauh', 'motorcycle', 7, 2495, now()),
  ('-0.915,100.459', 'unand-pintu-pauh', 'driving-car', 9, 2591, now()),
  ('-0.925,100.448', 'unand-limau-manis', 'walking', 31, 2301, now()),
  ('-0.925,100.448', 'unand-limau-manis', 'motorcycle', 6, 2393, now()),
  ('-0.925,100.448', 'unand-limau-manis', 'driving-car', 9, 2485, now()),
  ('-0.925,100.448', 'unand-gerbang-utama', 'walking', 31, 2301, now()),
  ('-0.925,100.448', 'unand-gerbang-utama', 'motorcycle', 6, 2393, now()),
  ('-0.925,100.448', 'unand-gerbang-utama', 'driving-car', 9, 2485, now()),
  ('-0.925,100.448', 'unand-pasar-baru', 'walking', 25, 1840, now()),
  ('-0.925,100.448', 'unand-pasar-baru', 'motorcycle', 5, 1914, now()),
  ('-0.925,100.448', 'unand-pasar-baru', 'driving-car', 7, 1987, now()),
  ('-0.925,100.448', 'unand-pintu-pauh', 'walking', 18, 1335, now()),
  ('-0.925,100.448', 'unand-pintu-pauh', 'motorcycle', 4, 1388, now()),
  ('-0.925,100.448', 'unand-pintu-pauh', 'driving-car', 5, 1442, now()),
  ('-0.913,100.461', 'unand-limau-manis', 'walking', 3, 158, now()),
  ('-0.913,100.461', 'unand-limau-manis', 'motorcycle', 1, 164, now()),
  ('-0.913,100.461', 'unand-limau-manis', 'driving-car', 2, 170, now()),
  ('-0.913,100.461', 'unand-gerbang-utama', 'walking', 3, 158, now()),
  ('-0.913,100.461', 'unand-gerbang-utama', 'motorcycle', 1, 164, now()),
  ('-0.913,100.461', 'unand-gerbang-utama', 'driving-car', 2, 170, now()),
  ('-0.913,100.461', 'unand-pasar-baru', 'walking', 52, 3848, now()),
  ('-0.913,100.461', 'unand-pasar-baru', 'motorcycle', 11, 4001, now()),
  ('-0.913,100.461', 'unand-pasar-baru', 'driving-car', 14, 4155, now()),
  ('-0.913,100.461', 'unand-pintu-pauh', 'walking', 37, 2714, now()),
  ('-0.913,100.461', 'unand-pintu-pauh', 'motorcycle', 8, 2822, now()),
  ('-0.913,100.461', 'unand-pintu-pauh', 'driving-car', 10, 2931, now()),
  ('-0.922,100.448', 'unand-limau-manis', 'walking', 28, 2064, now()),
  ('-0.922,100.448', 'unand-limau-manis', 'motorcycle', 6, 2146, now()),
  ('-0.922,100.448', 'unand-limau-manis', 'driving-car', 8, 2229, now()),
  ('-0.922,100.448', 'unand-gerbang-utama', 'walking', 28, 2064, now()),
  ('-0.922,100.448', 'unand-gerbang-utama', 'motorcycle', 6, 2146, now()),
  ('-0.922,100.448', 'unand-gerbang-utama', 'driving-car', 8, 2229, now()),
  ('-0.922,100.448', 'unand-pasar-baru', 'walking', 24, 1743, now()),
  ('-0.922,100.448', 'unand-pasar-baru', 'motorcycle', 5, 1812, now()),
  ('-0.922,100.448', 'unand-pasar-baru', 'driving-car', 7, 1882, now()),
  ('-0.922,100.448', 'unand-pintu-pauh', 'walking', 13, 945, now()),
  ('-0.922,100.448', 'unand-pintu-pauh', 'motorcycle', 3, 983, now()),
  ('-0.922,100.448', 'unand-pintu-pauh', 'driving-car', 4, 1021, now()),
  ('-0.921,100.445', 'unand-limau-manis', 'walking', 32, 2338, now()),
  ('-0.921,100.445', 'unand-limau-manis', 'motorcycle', 7, 2431, now()),
  ('-0.921,100.445', 'unand-limau-manis', 'driving-car', 9, 2525, now()),
  ('-0.921,100.445', 'unand-gerbang-utama', 'walking', 32, 2338, now()),
  ('-0.921,100.445', 'unand-gerbang-utama', 'motorcycle', 7, 2431, now()),
  ('-0.921,100.445', 'unand-gerbang-utama', 'driving-car', 9, 2525, now()),
  ('-0.921,100.445', 'unand-pasar-baru', 'walking', 19, 1405, now()),
  ('-0.921,100.445', 'unand-pasar-baru', 'motorcycle', 4, 1461, now()),
  ('-0.921,100.445', 'unand-pasar-baru', 'driving-car', 6, 1517, now()),
  ('-0.921,100.445', 'unand-pintu-pauh', 'walking', 9, 641, now()),
  ('-0.921,100.445', 'unand-pintu-pauh', 'motorcycle', 2, 667, now()),
  ('-0.921,100.445', 'unand-pintu-pauh', 'driving-car', 3, 693, now()),
  ('-0.917,100.456', 'unand-limau-manis', 'walking', 10, 734, now()),
  ('-0.917,100.456', 'unand-limau-manis', 'motorcycle', 2, 763, now()),
  ('-0.917,100.456', 'unand-limau-manis', 'driving-car', 3, 792, now()),
  ('-0.917,100.456', 'unand-gerbang-utama', 'walking', 10, 734, now()),
  ('-0.917,100.456', 'unand-gerbang-utama', 'motorcycle', 2, 763, now()),
  ('-0.917,100.456', 'unand-gerbang-utama', 'driving-car', 3, 792, now()),
  ('-0.917,100.456', 'unand-pasar-baru', 'walking', 41, 3018, now()),
  ('-0.917,100.456', 'unand-pasar-baru', 'motorcycle', 8, 3138, now()),
  ('-0.917,100.456', 'unand-pasar-baru', 'driving-car', 11, 3259, now()),
  ('-0.917,100.456', 'unand-pintu-pauh', 'walking', 26, 1948, now()),
  ('-0.917,100.456', 'unand-pintu-pauh', 'motorcycle', 6, 2025, now()),
  ('-0.917,100.456', 'unand-pintu-pauh', 'driving-car', 8, 2103, now()),
  ('-0.913,100.463', 'unand-limau-manis', 'walking', 6, 381, now()),
  ('-0.913,100.463', 'unand-limau-manis', 'motorcycle', 1, 397, now()),
  ('-0.913,100.463', 'unand-limau-manis', 'driving-car', 2, 412, now()),
  ('-0.913,100.463', 'unand-gerbang-utama', 'walking', 6, 381, now()),
  ('-0.913,100.463', 'unand-gerbang-utama', 'motorcycle', 1, 397, now()),
  ('-0.913,100.463', 'unand-gerbang-utama', 'driving-car', 2, 412, now()),
  ('-0.913,100.463', 'unand-pasar-baru', 'walking', 55, 4076, now()),
  ('-0.913,100.463', 'unand-pasar-baru', 'motorcycle', 11, 4239, now()),
  ('-0.913,100.463', 'unand-pasar-baru', 'driving-car', 15, 4402, now()),
  ('-0.913,100.463', 'unand-pintu-pauh', 'walking', 40, 2939, now()),
  ('-0.913,100.463', 'unand-pintu-pauh', 'motorcycle', 8, 3056, now()),
  ('-0.913,100.463', 'unand-pintu-pauh', 'driving-car', 11, 3174, now()),
  ('-0.928,100.442', 'unand-limau-manis', 'walking', 43, 3166, now()),
  ('-0.928,100.442', 'unand-limau-manis', 'motorcycle', 9, 3293, now()),
  ('-0.928,100.442', 'unand-limau-manis', 'driving-car', 12, 3420, now()),
  ('-0.928,100.442', 'unand-gerbang-utama', 'walking', 43, 3166, now()),
  ('-0.928,100.442', 'unand-gerbang-utama', 'motorcycle', 9, 3293, now()),
  ('-0.928,100.442', 'unand-gerbang-utama', 'driving-car', 12, 3420, now()),
  ('-0.928,100.442', 'unand-pasar-baru', 'walking', 16, 1195, now()),
  ('-0.928,100.442', 'unand-pasar-baru', 'motorcycle', 4, 1243, now()),
  ('-0.928,100.442', 'unand-pasar-baru', 'driving-car', 5, 1291, now()),
  ('-0.928,100.442', 'unand-pintu-pauh', 'walking', 19, 1390, now()),
  ('-0.928,100.442', 'unand-pintu-pauh', 'motorcycle', 4, 1446, now()),
  ('-0.928,100.442', 'unand-pintu-pauh', 'driving-car', 6, 1501, now()),
  ('-0.910,100.465', 'unand-limau-manis', 'walking', 12, 878, now()),
  ('-0.910,100.465', 'unand-limau-manis', 'motorcycle', 3, 913, now()),
  ('-0.910,100.465', 'unand-limau-manis', 'driving-car', 4, 948, now()),
  ('-0.910,100.465', 'unand-gerbang-utama', 'walking', 12, 878, now()),
  ('-0.910,100.465', 'unand-gerbang-utama', 'motorcycle', 3, 913, now()),
  ('-0.910,100.465', 'unand-gerbang-utama', 'driving-car', 4, 948, now()),
  ('-0.910,100.465', 'unand-pasar-baru', 'walking', 61, 4533, now()),
  ('-0.910,100.465', 'unand-pasar-baru', 'motorcycle', 12, 4714, now()),
  ('-0.910,100.465', 'unand-pasar-baru', 'driving-car', 17, 4895, now()),
  ('-0.910,100.465', 'unand-pintu-pauh', 'walking', 45, 3375, now()),
  ('-0.910,100.465', 'unand-pintu-pauh', 'motorcycle', 9, 3510, now()),
  ('-0.910,100.465', 'unand-pintu-pauh', 'driving-car', 13, 3645, now()),
  ('-5.356,105.311', 'itera-lampung', 'walking', 8, 550, now()),
  ('-5.356,105.311', 'itera-lampung', 'motorcycle', 2, 572, now()),
  ('-5.356,105.311', 'itera-lampung', 'driving-car', 2, 594, now()),
  ('-5.356,105.311', 'itera-gerbang-utama', 'walking', 8, 550, now()),
  ('-5.356,105.311', 'itera-gerbang-utama', 'motorcycle', 2, 572, now()),
  ('-5.356,105.311', 'itera-gerbang-utama', 'driving-car', 2, 594, now()),
  ('-5.356,105.311', 'itera-simpang-wayhuwi', 'walking', 7, 513, now()),
  ('-5.356,105.311', 'itera-simpang-wayhuwi', 'motorcycle', 2, 533, now()),
  ('-5.356,105.311', 'itera-simpang-wayhuwi', 'driving-car', 2, 554, now()),
  ('-5.356,105.311', 'itera-akses-sabahbalau', 'walking', 29, 2103, now()),
  ('-5.356,105.311', 'itera-akses-sabahbalau', 'motorcycle', 6, 2187, now()),
  ('-5.356,105.311', 'itera-akses-sabahbalau', 'driving-car', 8, 2271, now()),
  ('-5.354,105.306', 'itera-lampung', 'walking', 18, 1315, now()),
  ('-5.354,105.306', 'itera-lampung', 'motorcycle', 4, 1368, now()),
  ('-5.354,105.306', 'itera-lampung', 'driving-car', 5, 1420, now()),
  ('-5.354,105.306', 'itera-gerbang-utama', 'walking', 18, 1315, now()),
  ('-5.354,105.306', 'itera-gerbang-utama', 'motorcycle', 4, 1368, now()),
  ('-5.354,105.306', 'itera-gerbang-utama', 'driving-car', 5, 1420, now()),
  ('-5.354,105.306', 'itera-simpang-wayhuwi', 'walking', 4, 266, now()),
  ('-5.354,105.306', 'itera-simpang-wayhuwi', 'motorcycle', 1, 277, now()),
  ('-5.354,105.306', 'itera-simpang-wayhuwi', 'driving-car', 2, 288, now()),
  ('-5.354,105.306', 'itera-akses-sabahbalau', 'walking', 38, 2815, now()),
  ('-5.354,105.306', 'itera-akses-sabahbalau', 'motorcycle', 8, 2928, now()),
  ('-5.354,105.306', 'itera-akses-sabahbalau', 'driving-car', 11, 3040, now()),
  ('-5.353,105.309', 'itera-lampung', 'walking', 16, 1129, now()),
  ('-5.353,105.309', 'itera-lampung', 'motorcycle', 3, 1174, now()),
  ('-5.353,105.309', 'itera-lampung', 'driving-car', 5, 1219, now()),
  ('-5.353,105.309', 'itera-gerbang-utama', 'walking', 16, 1129, now()),
  ('-5.353,105.309', 'itera-gerbang-utama', 'motorcycle', 3, 1174, now()),
  ('-5.353,105.309', 'itera-gerbang-utama', 'driving-car', 5, 1219, now()),
  ('-5.353,105.309', 'itera-simpang-wayhuwi', 'walking', 6, 385, now()),
  ('-5.353,105.309', 'itera-simpang-wayhuwi', 'motorcycle', 1, 400, now()),
  ('-5.353,105.309', 'itera-simpang-wayhuwi', 'driving-car', 2, 416, now()),
  ('-5.353,105.309', 'itera-akses-sabahbalau', 'walking', 37, 2704, now()),
  ('-5.353,105.309', 'itera-akses-sabahbalau', 'motorcycle', 8, 2812, now()),
  ('-5.353,105.309', 'itera-akses-sabahbalau', 'driving-car', 10, 2920, now()),
  ('-5.367,105.320', 'itera-lampung', 'walking', 19, 1385, now()),
  ('-5.367,105.320', 'itera-lampung', 'motorcycle', 4, 1440, now()),
  ('-5.367,105.320', 'itera-lampung', 'driving-car', 5, 1496, now()),
  ('-5.367,105.320', 'itera-gerbang-utama', 'walking', 19, 1385, now()),
  ('-5.367,105.320', 'itera-gerbang-utama', 'motorcycle', 4, 1440, now()),
  ('-5.367,105.320', 'itera-gerbang-utama', 'driving-car', 5, 1496, now()),
  ('-5.367,105.320', 'itera-simpang-wayhuwi', 'walking', 31, 2325, now()),
  ('-5.367,105.320', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2418, now()),
  ('-5.367,105.320', 'itera-simpang-wayhuwi', 'driving-car', 9, 2511, now()),
  ('-5.367,105.320', 'itera-akses-sabahbalau', 'walking', 4, 235, now()),
  ('-5.367,105.320', 'itera-akses-sabahbalau', 'motorcycle', 1, 244, now()),
  ('-5.367,105.320', 'itera-akses-sabahbalau', 'driving-car', 2, 254, now()),
  ('-5.357,105.305', 'itera-lampung', 'walking', 19, 1370, now()),
  ('-5.357,105.305', 'itera-lampung', 'motorcycle', 4, 1425, now()),
  ('-5.357,105.305', 'itera-lampung', 'driving-car', 5, 1480, now()),
  ('-5.357,105.305', 'itera-gerbang-utama', 'walking', 19, 1370, now()),
  ('-5.357,105.305', 'itera-gerbang-utama', 'motorcycle', 4, 1425, now()),
  ('-5.357,105.305', 'itera-gerbang-utama', 'driving-car', 5, 1480, now()),
  ('-5.357,105.305', 'itera-simpang-wayhuwi', 'walking', 7, 500, now()),
  ('-5.357,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 2, 520, now()),
  ('-5.357,105.305', 'itera-simpang-wayhuwi', 'driving-car', 2, 540, now()),
  ('-5.357,105.305', 'itera-akses-sabahbalau', 'walking', 36, 2691, now()),
  ('-5.357,105.305', 'itera-akses-sabahbalau', 'motorcycle', 7, 2799, now()),
  ('-5.357,105.305', 'itera-akses-sabahbalau', 'driving-car', 10, 2907, now()),
  ('-5.349,105.313', 'itera-lampung', 'walking', 17, 1261, now()),
  ('-5.349,105.313', 'itera-lampung', 'motorcycle', 4, 1312, now()),
  ('-5.349,105.313', 'itera-lampung', 'driving-car', 5, 1362, now()),
  ('-5.349,105.313', 'itera-gerbang-utama', 'walking', 17, 1261, now()),
  ('-5.349,105.313', 'itera-gerbang-utama', 'motorcycle', 4, 1312, now()),
  ('-5.349,105.313', 'itera-gerbang-utama', 'driving-car', 5, 1362, now()),
  ('-5.349,105.313', 'itera-simpang-wayhuwi', 'walking', 14, 1031, now()),
  ('-5.349,105.313', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1073, now()),
  ('-5.349,105.313', 'itera-simpang-wayhuwi', 'driving-car', 4, 1114, now()),
  ('-5.349,105.313', 'itera-akses-sabahbalau', 'walking', 38, 2800, now()),
  ('-5.349,105.313', 'itera-akses-sabahbalau', 'motorcycle', 8, 2912, now()),
  ('-5.349,105.313', 'itera-akses-sabahbalau', 'driving-car', 11, 3024, now()),
  ('-5.362,105.325', 'itera-lampung', 'walking', 19, 1410, now()),
  ('-5.362,105.325', 'itera-lampung', 'motorcycle', 4, 1466, now()),
  ('-5.362,105.325', 'itera-lampung', 'driving-car', 6, 1523, now()),
  ('-5.362,105.325', 'itera-gerbang-utama', 'walking', 19, 1410, now()),
  ('-5.362,105.325', 'itera-gerbang-utama', 'motorcycle', 4, 1466, now()),
  ('-5.362,105.325', 'itera-gerbang-utama', 'driving-car', 6, 1523, now()),
  ('-5.362,105.325', 'itera-simpang-wayhuwi', 'walking', 33, 2455, now()),
  ('-5.362,105.325', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2553, now()),
  ('-5.362,105.325', 'itera-simpang-wayhuwi', 'driving-car', 9, 2651, now()),
  ('-5.362,105.325', 'itera-akses-sabahbalau', 'walking', 14, 1025, now()),
  ('-5.362,105.325', 'itera-akses-sabahbalau', 'motorcycle', 3, 1066, now()),
  ('-5.362,105.325', 'itera-akses-sabahbalau', 'driving-car', 4, 1107, now()),
  ('-5.370,105.308', 'itera-lampung', 'walking', 26, 1894, now()),
  ('-5.370,105.308', 'itera-lampung', 'motorcycle', 5, 1970, now()),
  ('-5.370,105.308', 'itera-lampung', 'driving-car', 7, 2045, now()),
  ('-5.370,105.308', 'itera-gerbang-utama', 'walking', 26, 1894, now()),
  ('-5.370,105.308', 'itera-gerbang-utama', 'motorcycle', 5, 1970, now()),
  ('-5.370,105.308', 'itera-gerbang-utama', 'driving-car', 7, 2045, now()),
  ('-5.370,105.308', 'itera-simpang-wayhuwi', 'walking', 29, 2155, now()),
  ('-5.370,105.308', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2241, now()),
  ('-5.370,105.308', 'itera-simpang-wayhuwi', 'driving-car', 8, 2327, now()),
  ('-5.370,105.308', 'itera-akses-sabahbalau', 'walking', 24, 1764, now()),
  ('-5.370,105.308', 'itera-akses-sabahbalau', 'motorcycle', 5, 1834, now()),
  ('-5.370,105.308', 'itera-akses-sabahbalau', 'driving-car', 7, 1905, now()),
  ('-5.354,105.316', 'itera-lampung', 'walking', 8, 568, now()),
  ('-5.354,105.316', 'itera-lampung', 'motorcycle', 2, 590, now()),
  ('-5.354,105.316', 'itera-lampung', 'driving-car', 3, 613, now()),
  ('-5.354,105.316', 'itera-gerbang-utama', 'walking', 8, 568, now()),
  ('-5.354,105.316', 'itera-gerbang-utama', 'motorcycle', 2, 590, now()),
  ('-5.354,105.316', 'itera-gerbang-utama', 'driving-car', 3, 613, now()),
  ('-5.354,105.316', 'itera-simpang-wayhuwi', 'walking', 15, 1109, now()),
  ('-5.354,105.316', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1153, now()),
  ('-5.354,105.316', 'itera-simpang-wayhuwi', 'driving-car', 4, 1197, now()),
  ('-5.354,105.316', 'itera-akses-sabahbalau', 'walking', 27, 2000, now()),
  ('-5.354,105.316', 'itera-akses-sabahbalau', 'motorcycle', 6, 2080, now()),
  ('-5.354,105.316', 'itera-akses-sabahbalau', 'driving-car', 8, 2160, now()),
  ('-5.351,105.307', 'itera-lampung', 'walking', 20, 1471, now()),
  ('-5.351,105.307', 'itera-lampung', 'motorcycle', 4, 1530, now()),
  ('-5.351,105.307', 'itera-lampung', 'driving-car', 6, 1589, now()),
  ('-5.351,105.307', 'itera-gerbang-utama', 'walking', 20, 1471, now()),
  ('-5.351,105.307', 'itera-gerbang-utama', 'motorcycle', 4, 1530, now()),
  ('-5.351,105.307', 'itera-gerbang-utama', 'driving-car', 6, 1589, now()),
  ('-5.351,105.307', 'itera-simpang-wayhuwi', 'walking', 8, 568, now()),
  ('-5.351,105.307', 'itera-simpang-wayhuwi', 'motorcycle', 2, 590, now()),
  ('-5.351,105.307', 'itera-simpang-wayhuwi', 'driving-car', 3, 613, now()),
  ('-5.351,105.307', 'itera-akses-sabahbalau', 'walking', 41, 3039, now()),
  ('-5.351,105.307', 'itera-akses-sabahbalau', 'motorcycle', 8, 3160, now()),
  ('-5.351,105.307', 'itera-akses-sabahbalau', 'driving-car', 11, 3282, now()),
  ('-5.365,105.306', 'itera-lampung', 'walking', 21, 1544, now()),
  ('-5.365,105.306', 'itera-lampung', 'motorcycle', 5, 1606, now()),
  ('-5.365,105.306', 'itera-lampung', 'driving-car', 6, 1667, now()),
  ('-5.365,105.306', 'itera-gerbang-utama', 'walking', 21, 1544, now()),
  ('-5.365,105.306', 'itera-gerbang-utama', 'motorcycle', 5, 1606, now()),
  ('-5.365,105.306', 'itera-gerbang-utama', 'driving-car', 6, 1667, now()),
  ('-5.365,105.306', 'itera-simpang-wayhuwi', 'walking', 19, 1389, now()),
  ('-5.365,105.306', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1444, now()),
  ('-5.365,105.306', 'itera-simpang-wayhuwi', 'driving-car', 5, 1500, now()),
  ('-5.365,105.306', 'itera-akses-sabahbalau', 'walking', 30, 2178, now()),
  ('-5.365,105.306', 'itera-akses-sabahbalau', 'motorcycle', 6, 2265, now()),
  ('-5.365,105.306', 'itera-akses-sabahbalau', 'driving-car', 8, 2352, now()),
  ('-5.361,105.329', 'itera-lampung', 'walking', 27, 1989, now()),
  ('-5.361,105.329', 'itera-lampung', 'motorcycle', 6, 2068, now()),
  ('-5.361,105.329', 'itera-lampung', 'driving-car', 8, 2148, now()),
  ('-5.361,105.329', 'itera-gerbang-utama', 'walking', 27, 1989, now()),
  ('-5.361,105.329', 'itera-gerbang-utama', 'motorcycle', 6, 2068, now()),
  ('-5.361,105.329', 'itera-gerbang-utama', 'driving-car', 8, 2148, now()),
  ('-5.361,105.329', 'itera-simpang-wayhuwi', 'walking', 41, 3013, now()),
  ('-5.361,105.329', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3133, now()),
  ('-5.361,105.329', 'itera-simpang-wayhuwi', 'driving-car', 11, 3254, now()),
  ('-5.361,105.329', 'itera-akses-sabahbalau', 'walking', 20, 1483, now()),
  ('-5.361,105.329', 'itera-akses-sabahbalau', 'motorcycle', 4, 1542, now()),
  ('-5.361,105.329', 'itera-akses-sabahbalau', 'driving-car', 6, 1601, now()),
  ('-5.350,105.310', 'itera-lampung', 'walking', 18, 1324, now()),
  ('-5.350,105.310', 'itera-lampung', 'motorcycle', 4, 1377, now()),
  ('-5.350,105.310', 'itera-lampung', 'driving-car', 5, 1430, now()),
  ('-5.350,105.310', 'itera-gerbang-utama', 'walking', 18, 1324, now()),
  ('-5.350,105.310', 'itera-gerbang-utama', 'motorcycle', 4, 1377, now()),
  ('-5.350,105.310', 'itera-gerbang-utama', 'driving-car', 5, 1430, now()),
  ('-5.350,105.310', 'itera-simpang-wayhuwi', 'walking', 11, 758, now()),
  ('-5.350,105.310', 'itera-simpang-wayhuwi', 'motorcycle', 2, 788, now()),
  ('-5.350,105.310', 'itera-simpang-wayhuwi', 'driving-car', 3, 818, now()),
  ('-5.350,105.310', 'itera-akses-sabahbalau', 'walking', 39, 2908, now()),
  ('-5.350,105.310', 'itera-akses-sabahbalau', 'motorcycle', 8, 3024, now()),
  ('-5.350,105.310', 'itera-akses-sabahbalau', 'driving-car', 11, 3140, now()),
  ('-5.354,105.307', 'itera-lampung', 'walking', 18, 1300, now()),
  ('-5.354,105.307', 'itera-lampung', 'motorcycle', 4, 1352, now()),
  ('-5.354,105.307', 'itera-lampung', 'driving-car', 5, 1404, now()),
  ('-5.354,105.307', 'itera-gerbang-utama', 'walking', 18, 1300, now()),
  ('-5.354,105.307', 'itera-gerbang-utama', 'motorcycle', 4, 1352, now()),
  ('-5.354,105.307', 'itera-gerbang-utama', 'driving-car', 5, 1404, now()),
  ('-5.354,105.307', 'itera-simpang-wayhuwi', 'walking', 4, 255, now()),
  ('-5.354,105.307', 'itera-simpang-wayhuwi', 'motorcycle', 1, 265, now()),
  ('-5.354,105.307', 'itera-simpang-wayhuwi', 'driving-car', 2, 275, now()),
  ('-5.354,105.307', 'itera-akses-sabahbalau', 'walking', 38, 2805, now()),
  ('-5.354,105.307', 'itera-akses-sabahbalau', 'motorcycle', 8, 2917, now()),
  ('-5.354,105.307', 'itera-akses-sabahbalau', 'driving-car', 11, 3029, now()),
  ('-5.366,105.300', 'itera-lampung', 'walking', 32, 2334, now()),
  ('-5.366,105.300', 'itera-lampung', 'motorcycle', 7, 2427, now()),
  ('-5.366,105.300', 'itera-lampung', 'driving-car', 9, 2520, now()),
  ('-5.366,105.300', 'itera-gerbang-utama', 'walking', 32, 2334, now()),
  ('-5.366,105.300', 'itera-gerbang-utama', 'motorcycle', 7, 2427, now()),
  ('-5.366,105.300', 'itera-gerbang-utama', 'driving-car', 9, 2520, now()),
  ('-5.366,105.300', 'itera-simpang-wayhuwi', 'walking', 26, 1918, now()),
  ('-5.366,105.300', 'itera-simpang-wayhuwi', 'motorcycle', 5, 1994, now()),
  ('-5.366,105.300', 'itera-simpang-wayhuwi', 'driving-car', 7, 2071, now()),
  ('-5.366,105.300', 'itera-akses-sabahbalau', 'walking', 40, 2938, now()),
  ('-5.366,105.300', 'itera-akses-sabahbalau', 'motorcycle', 8, 3055, now()),
  ('-5.366,105.300', 'itera-akses-sabahbalau', 'driving-car', 11, 3173, now()),
  ('-5.361,105.333', 'itera-lampung', 'walking', 35, 2593, now()),
  ('-5.361,105.333', 'itera-lampung', 'motorcycle', 7, 2696, now()),
  ('-5.361,105.333', 'itera-lampung', 'driving-car', 10, 2800, now()),
  ('-5.361,105.333', 'itera-gerbang-utama', 'walking', 35, 2593, now()),
  ('-5.361,105.333', 'itera-gerbang-utama', 'motorcycle', 7, 2696, now()),
  ('-5.361,105.333', 'itera-gerbang-utama', 'driving-car', 10, 2800, now()),
  ('-5.361,105.333', 'itera-simpang-wayhuwi', 'walking', 49, 3610, now()),
  ('-5.361,105.333', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3754, now()),
  ('-5.361,105.333', 'itera-simpang-wayhuwi', 'driving-car', 13, 3899, now()),
  ('-5.361,105.333', 'itera-akses-sabahbalau', 'walking', 26, 1939, now()),
  ('-5.361,105.333', 'itera-akses-sabahbalau', 'motorcycle', 6, 2016, now()),
  ('-5.361,105.333', 'itera-akses-sabahbalau', 'driving-car', 7, 2094, now()),
  ('-5.352,105.304', 'itera-lampung', 'walking', 25, 1805, now()),
  ('-5.352,105.304', 'itera-lampung', 'motorcycle', 5, 1877, now()),
  ('-5.352,105.304', 'itera-lampung', 'driving-car', 7, 1949, now()),
  ('-5.352,105.304', 'itera-gerbang-utama', 'walking', 25, 1805, now()),
  ('-5.352,105.304', 'itera-gerbang-utama', 'motorcycle', 5, 1877, now()),
  ('-5.352,105.304', 'itera-gerbang-utama', 'driving-car', 7, 1949, now()),
  ('-5.352,105.304', 'itera-simpang-wayhuwi', 'walking', 11, 761, now()),
  ('-5.352,105.304', 'itera-simpang-wayhuwi', 'motorcycle', 2, 792, now()),
  ('-5.352,105.304', 'itera-simpang-wayhuwi', 'driving-car', 3, 822, now()),
  ('-5.352,105.304', 'itera-akses-sabahbalau', 'walking', 45, 3306, now()),
  ('-5.352,105.304', 'itera-akses-sabahbalau', 'motorcycle', 9, 3439, now()),
  ('-5.352,105.304', 'itera-akses-sabahbalau', 'driving-car', 12, 3571, now()),
  ('-5.354,105.312', 'itera-lampung', 'walking', 11, 761, now()),
  ('-5.354,105.312', 'itera-lampung', 'motorcycle', 2, 792, now()),
  ('-5.354,105.312', 'itera-lampung', 'driving-car', 3, 822, now()),
  ('-5.354,105.312', 'itera-gerbang-utama', 'walking', 11, 761, now()),
  ('-5.354,105.312', 'itera-gerbang-utama', 'motorcycle', 2, 792, now()),
  ('-5.354,105.312', 'itera-gerbang-utama', 'driving-car', 3, 822, now()),
  ('-5.354,105.312', 'itera-simpang-wayhuwi', 'walking', 9, 615, now()),
  ('-5.354,105.312', 'itera-simpang-wayhuwi', 'motorcycle', 2, 640, now()),
  ('-5.354,105.312', 'itera-simpang-wayhuwi', 'driving-car', 3, 664, now()),
  ('-5.354,105.312', 'itera-akses-sabahbalau', 'walking', 32, 2346, now()),
  ('-5.354,105.312', 'itera-akses-sabahbalau', 'motorcycle', 7, 2440, now()),
  ('-5.354,105.312', 'itera-akses-sabahbalau', 'driving-car', 9, 2534, now()),
  ('-5.355,105.333', 'itera-lampung', 'walking', 35, 2615, now()),
  ('-5.355,105.333', 'itera-lampung', 'motorcycle', 7, 2720, now()),
  ('-5.355,105.333', 'itera-lampung', 'driving-car', 10, 2824, now()),
  ('-5.355,105.333', 'itera-gerbang-utama', 'walking', 35, 2615, now()),
  ('-5.355,105.333', 'itera-gerbang-utama', 'motorcycle', 7, 2720, now()),
  ('-5.355,105.333', 'itera-gerbang-utama', 'driving-car', 10, 2824, now()),
  ('-5.355,105.333', 'itera-simpang-wayhuwi', 'walking', 47, 3513, now()),
  ('-5.355,105.333', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3653, now()),
  ('-5.355,105.333', 'itera-simpang-wayhuwi', 'driving-car', 13, 3794, now()),
  ('-5.355,105.333', 'itera-akses-sabahbalau', 'walking', 34, 2495, now()),
  ('-5.355,105.333', 'itera-akses-sabahbalau', 'motorcycle', 7, 2595, now()),
  ('-5.355,105.333', 'itera-akses-sabahbalau', 'driving-car', 9, 2695, now()),
  ('-5.364,105.303', 'itera-lampung', 'walking', 25, 1806, now()),
  ('-5.364,105.303', 'itera-lampung', 'motorcycle', 5, 1879, now()),
  ('-5.364,105.303', 'itera-lampung', 'driving-car', 7, 1951, now()),
  ('-5.364,105.303', 'itera-gerbang-utama', 'walking', 25, 1806, now()),
  ('-5.364,105.303', 'itera-gerbang-utama', 'motorcycle', 5, 1879, now()),
  ('-5.364,105.303', 'itera-gerbang-utama', 'driving-car', 7, 1951, now()),
  ('-5.364,105.303', 'itera-simpang-wayhuwi', 'walking', 20, 1443, now()),
  ('-5.364,105.303', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1500, now()),
  ('-5.364,105.303', 'itera-simpang-wayhuwi', 'driving-car', 6, 1558, now()),
  ('-5.364,105.303', 'itera-akses-sabahbalau', 'walking', 34, 2535, now()),
  ('-5.364,105.303', 'itera-akses-sabahbalau', 'motorcycle', 7, 2636, now()),
  ('-5.364,105.303', 'itera-akses-sabahbalau', 'driving-car', 10, 2738, now()),
  ('-5.359,105.321', 'itera-lampung', 'walking', 11, 816, now()),
  ('-5.359,105.321', 'itera-lampung', 'motorcycle', 3, 849, now()),
  ('-5.359,105.321', 'itera-lampung', 'driving-car', 3, 882, now()),
  ('-5.359,105.321', 'itera-gerbang-utama', 'walking', 11, 816, now()),
  ('-5.359,105.321', 'itera-gerbang-utama', 'motorcycle', 3, 849, now()),
  ('-5.359,105.321', 'itera-gerbang-utama', 'driving-car', 3, 882, now()),
  ('-5.359,105.321', 'itera-simpang-wayhuwi', 'walking', 25, 1840, now()),
  ('-5.359,105.321', 'itera-simpang-wayhuwi', 'motorcycle', 5, 1914, now()),
  ('-5.359,105.321', 'itera-simpang-wayhuwi', 'driving-car', 7, 1987, now()),
  ('-5.359,105.321', 'itera-akses-sabahbalau', 'walking', 17, 1250, now()),
  ('-5.359,105.321', 'itera-akses-sabahbalau', 'motorcycle', 4, 1300, now()),
  ('-5.359,105.321', 'itera-akses-sabahbalau', 'driving-car', 5, 1350, now()),
  ('-5.361,105.325', 'itera-lampung', 'walking', 20, 1459, now()),
  ('-5.361,105.325', 'itera-lampung', 'motorcycle', 4, 1517, now()),
  ('-5.361,105.325', 'itera-lampung', 'driving-car', 6, 1575, now()),
  ('-5.361,105.325', 'itera-gerbang-utama', 'walking', 20, 1459, now()),
  ('-5.361,105.325', 'itera-gerbang-utama', 'motorcycle', 4, 1517, now()),
  ('-5.361,105.325', 'itera-gerbang-utama', 'driving-car', 6, 1575, now()),
  ('-5.361,105.325', 'itera-simpang-wayhuwi', 'walking', 34, 2501, now()),
  ('-5.361,105.325', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2601, now()),
  ('-5.361,105.325', 'itera-simpang-wayhuwi', 'driving-car', 10, 2701, now()),
  ('-5.361,105.325', 'itera-akses-sabahbalau', 'walking', 15, 1079, now()),
  ('-5.361,105.325', 'itera-akses-sabahbalau', 'motorcycle', 3, 1122, now()),
  ('-5.361,105.325', 'itera-akses-sabahbalau', 'driving-car', 4, 1165, now()),
  ('-5.368,105.299', 'itera-lampung', 'walking', 34, 2490, now()),
  ('-5.368,105.299', 'itera-lampung', 'motorcycle', 7, 2590, now()),
  ('-5.368,105.299', 'itera-lampung', 'driving-car', 9, 2689, now()),
  ('-5.368,105.299', 'itera-gerbang-utama', 'walking', 34, 2490, now()),
  ('-5.368,105.299', 'itera-gerbang-utama', 'motorcycle', 7, 2590, now()),
  ('-5.368,105.299', 'itera-gerbang-utama', 'driving-car', 9, 2689, now()),
  ('-5.368,105.299', 'itera-simpang-wayhuwi', 'walking', 29, 2135, now()),
  ('-5.368,105.299', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2220, now()),
  ('-5.368,105.299', 'itera-simpang-wayhuwi', 'driving-car', 8, 2306, now()),
  ('-5.368,105.299', 'itera-akses-sabahbalau', 'walking', 40, 2975, now()),
  ('-5.368,105.299', 'itera-akses-sabahbalau', 'motorcycle', 8, 3094, now()),
  ('-5.368,105.299', 'itera-akses-sabahbalau', 'driving-car', 11, 3213, now()),
  ('-5.353,105.313', 'itera-lampung', 'walking', 10, 741, now()),
  ('-5.353,105.313', 'itera-lampung', 'motorcycle', 2, 771, now()),
  ('-5.353,105.313', 'itera-lampung', 'driving-car', 3, 801, now()),
  ('-5.353,105.313', 'itera-gerbang-utama', 'walking', 10, 741, now()),
  ('-5.353,105.313', 'itera-gerbang-utama', 'motorcycle', 2, 771, now()),
  ('-5.353,105.313', 'itera-gerbang-utama', 'driving-car', 3, 801, now()),
  ('-5.353,105.313', 'itera-simpang-wayhuwi', 'walking', 11, 789, now()),
  ('-5.353,105.313', 'itera-simpang-wayhuwi', 'motorcycle', 3, 820, now()),
  ('-5.353,105.313', 'itera-simpang-wayhuwi', 'driving-car', 3, 852, now()),
  ('-5.353,105.313', 'itera-akses-sabahbalau', 'walking', 31, 2303, now()),
  ('-5.353,105.313', 'itera-akses-sabahbalau', 'motorcycle', 6, 2395, now()),
  ('-5.353,105.313', 'itera-akses-sabahbalau', 'driving-car', 9, 2487, now()),
  ('-5.372,105.295', 'itera-lampung', 'walking', 44, 3295, now()),
  ('-5.372,105.295', 'itera-lampung', 'motorcycle', 9, 3427, now()),
  ('-5.372,105.295', 'itera-lampung', 'driving-car', 12, 3559, now()),
  ('-5.372,105.295', 'itera-gerbang-utama', 'walking', 44, 3295, now()),
  ('-5.372,105.295', 'itera-gerbang-utama', 'motorcycle', 9, 3427, now()),
  ('-5.372,105.295', 'itera-gerbang-utama', 'driving-car', 12, 3559, now()),
  ('-5.372,105.295', 'itera-simpang-wayhuwi', 'walking', 40, 2951, now()),
  ('-5.372,105.295', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3069, now()),
  ('-5.372,105.295', 'itera-simpang-wayhuwi', 'driving-car', 11, 3187, now()),
  ('-5.372,105.295', 'itera-akses-sabahbalau', 'walking', 48, 3593, now()),
  ('-5.372,105.295', 'itera-akses-sabahbalau', 'motorcycle', 10, 3736, now()),
  ('-5.372,105.295', 'itera-akses-sabahbalau', 'driving-car', 13, 3880, now()),
  ('-5.354,105.330', 'itera-lampung', 'walking', 30, 2196, now()),
  ('-5.354,105.330', 'itera-lampung', 'motorcycle', 6, 2284, now()),
  ('-5.354,105.330', 'itera-lampung', 'driving-car', 8, 2372, now()),
  ('-5.354,105.330', 'itera-gerbang-utama', 'walking', 30, 2196, now()),
  ('-5.354,105.330', 'itera-gerbang-utama', 'motorcycle', 6, 2284, now()),
  ('-5.354,105.330', 'itera-gerbang-utama', 'driving-car', 8, 2372, now()),
  ('-5.354,105.330', 'itera-simpang-wayhuwi', 'walking', 41, 3049, now()),
  ('-5.354,105.330', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3171, now()),
  ('-5.354,105.330', 'itera-simpang-wayhuwi', 'driving-car', 11, 3293, now()),
  ('-5.354,105.330', 'itera-akses-sabahbalau', 'walking', 32, 2328, now()),
  ('-5.354,105.330', 'itera-akses-sabahbalau', 'motorcycle', 7, 2421, now()),
  ('-5.354,105.330', 'itera-akses-sabahbalau', 'driving-car', 9, 2514, now()),
  ('-5.367,105.294', 'itera-lampung', 'walking', 42, 3130, now()),
  ('-5.367,105.294', 'itera-lampung', 'motorcycle', 9, 3255, now()),
  ('-5.367,105.294', 'itera-lampung', 'driving-car', 12, 3380, now()),
  ('-5.367,105.294', 'itera-gerbang-utama', 'walking', 42, 3130, now()),
  ('-5.367,105.294', 'itera-gerbang-utama', 'motorcycle', 9, 3255, now()),
  ('-5.367,105.294', 'itera-gerbang-utama', 'driving-car', 12, 3380, now()),
  ('-5.367,105.294', 'itera-simpang-wayhuwi', 'walking', 35, 2584, now()),
  ('-5.367,105.294', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2687, now()),
  ('-5.367,105.294', 'itera-simpang-wayhuwi', 'driving-car', 10, 2790, now()),
  ('-5.367,105.294', 'itera-akses-sabahbalau', 'walking', 50, 3730, now()),
  ('-5.367,105.294', 'itera-akses-sabahbalau', 'motorcycle', 10, 3879, now()),
  ('-5.367,105.294', 'itera-akses-sabahbalau', 'driving-car', 14, 4028, now()),
  ('-5.360,105.329', 'itera-lampung', 'walking', 27, 2014, now()),
  ('-5.360,105.329', 'itera-lampung', 'motorcycle', 6, 2094, now()),
  ('-5.360,105.329', 'itera-lampung', 'driving-car', 8, 2175, now()),
  ('-5.360,105.329', 'itera-gerbang-utama', 'walking', 27, 2014, now()),
  ('-5.360,105.329', 'itera-gerbang-utama', 'motorcycle', 6, 2094, now()),
  ('-5.360,105.329', 'itera-gerbang-utama', 'driving-car', 8, 2175, now()),
  ('-5.360,105.329', 'itera-simpang-wayhuwi', 'walking', 41, 3021, now()),
  ('-5.360,105.329', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3142, now()),
  ('-5.360,105.329', 'itera-simpang-wayhuwi', 'driving-car', 11, 3263, now()),
  ('-5.360,105.329', 'itera-akses-sabahbalau', 'walking', 22, 1611, now()),
  ('-5.360,105.329', 'itera-akses-sabahbalau', 'motorcycle', 5, 1676, now()),
  ('-5.360,105.329', 'itera-akses-sabahbalau', 'driving-car', 6, 1740, now()),
  ('-5.356,105.313', 'itera-lampung', 'walking', 5, 369, now()),
  ('-5.356,105.313', 'itera-lampung', 'motorcycle', 1, 384, now()),
  ('-5.356,105.313', 'itera-lampung', 'driving-car', 2, 398, now()),
  ('-5.356,105.313', 'itera-gerbang-utama', 'walking', 5, 369, now()),
  ('-5.356,105.313', 'itera-gerbang-utama', 'motorcycle', 1, 384, now()),
  ('-5.356,105.313', 'itera-gerbang-utama', 'driving-car', 2, 398, now()),
  ('-5.356,105.313', 'itera-simpang-wayhuwi', 'walking', 10, 721, now()),
  ('-5.356,105.313', 'itera-simpang-wayhuwi', 'motorcycle', 2, 750, now()),
  ('-5.356,105.313', 'itera-simpang-wayhuwi', 'driving-car', 3, 779, now()),
  ('-5.356,105.313', 'itera-akses-sabahbalau', 'walking', 26, 1950, now()),
  ('-5.356,105.313', 'itera-akses-sabahbalau', 'motorcycle', 6, 2028, now()),
  ('-5.356,105.313', 'itera-akses-sabahbalau', 'driving-car', 8, 2106, now()),
  ('-5.373,105.296', 'itera-lampung', 'walking', 44, 3288, now()),
  ('-5.373,105.296', 'itera-lampung', 'motorcycle', 9, 3419, now()),
  ('-5.373,105.296', 'itera-lampung', 'driving-car', 12, 3551, now()),
  ('-5.373,105.296', 'itera-gerbang-utama', 'walking', 44, 3288, now()),
  ('-5.373,105.296', 'itera-gerbang-utama', 'motorcycle', 9, 3419, now()),
  ('-5.373,105.296', 'itera-gerbang-utama', 'driving-car', 12, 3551, now()),
  ('-5.373,105.296', 'itera-simpang-wayhuwi', 'walking', 40, 2984, now()),
  ('-5.373,105.296', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3103, now()),
  ('-5.373,105.296', 'itera-simpang-wayhuwi', 'driving-car', 11, 3222, now()),
  ('-5.373,105.296', 'itera-akses-sabahbalau', 'walking', 48, 3528, now()),
  ('-5.373,105.296', 'itera-akses-sabahbalau', 'motorcycle', 10, 3669, now()),
  ('-5.373,105.296', 'itera-akses-sabahbalau', 'driving-car', 13, 3810, now()),
  ('-5.357,105.313', 'itera-lampung', 'walking', 4, 299, now()),
  ('-5.357,105.313', 'itera-lampung', 'motorcycle', 1, 311, now()),
  ('-5.357,105.313', 'itera-lampung', 'driving-car', 2, 323, now()),
  ('-5.357,105.313', 'itera-gerbang-utama', 'walking', 4, 299, now()),
  ('-5.357,105.313', 'itera-gerbang-utama', 'motorcycle', 1, 311, now()),
  ('-5.357,105.313', 'itera-gerbang-utama', 'driving-car', 2, 323, now()),
  ('-5.357,105.313', 'itera-simpang-wayhuwi', 'walking', 11, 774, now()),
  ('-5.357,105.313', 'itera-simpang-wayhuwi', 'motorcycle', 3, 805, now()),
  ('-5.357,105.313', 'itera-simpang-wayhuwi', 'driving-car', 3, 836, now()),
  ('-5.357,105.313', 'itera-akses-sabahbalau', 'walking', 26, 1879, now()),
  ('-5.357,105.313', 'itera-akses-sabahbalau', 'motorcycle', 5, 1954, now()),
  ('-5.357,105.313', 'itera-akses-sabahbalau', 'driving-car', 7, 2029, now()),
  ('-5.354,105.303', 'itera-lampung', 'walking', 24, 1766, now()),
  ('-5.354,105.303', 'itera-lampung', 'motorcycle', 5, 1837, now()),
  ('-5.354,105.303', 'itera-lampung', 'driving-car', 7, 1908, now()),
  ('-5.354,105.303', 'itera-gerbang-utama', 'walking', 24, 1766, now()),
  ('-5.354,105.303', 'itera-gerbang-utama', 'motorcycle', 5, 1837, now()),
  ('-5.354,105.303', 'itera-gerbang-utama', 'driving-car', 7, 1908, now()),
  ('-5.354,105.303', 'itera-simpang-wayhuwi', 'walking', 10, 723, now()),
  ('-5.354,105.303', 'itera-simpang-wayhuwi', 'motorcycle', 2, 751, now()),
  ('-5.354,105.303', 'itera-simpang-wayhuwi', 'driving-car', 3, 780, now()),
  ('-5.354,105.303', 'itera-akses-sabahbalau', 'walking', 43, 3195, now()),
  ('-5.354,105.303', 'itera-akses-sabahbalau', 'motorcycle', 9, 3323, now()),
  ('-5.354,105.303', 'itera-akses-sabahbalau', 'driving-car', 12, 3451, now()),
  ('-5.363,105.300', 'itera-lampung', 'walking', 28, 2098, now()),
  ('-5.363,105.300', 'itera-lampung', 'motorcycle', 6, 2181, now()),
  ('-5.363,105.300', 'itera-lampung', 'driving-car', 8, 2265, now()),
  ('-5.363,105.300', 'itera-gerbang-utama', 'walking', 28, 2098, now()),
  ('-5.363,105.300', 'itera-gerbang-utama', 'motorcycle', 6, 2181, now()),
  ('-5.363,105.300', 'itera-gerbang-utama', 'driving-car', 8, 2265, now()),
  ('-5.363,105.300', 'itera-simpang-wayhuwi', 'walking', 21, 1524, now()),
  ('-5.363,105.300', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1585, now()),
  ('-5.363,105.300', 'itera-simpang-wayhuwi', 'driving-car', 6, 1646, now()),
  ('-5.363,105.300', 'itera-akses-sabahbalau', 'walking', 40, 2950, now()),
  ('-5.363,105.300', 'itera-akses-sabahbalau', 'motorcycle', 8, 3068, now()),
  ('-5.363,105.300', 'itera-akses-sabahbalau', 'driving-car', 11, 3186, now()),
  ('-5.355,105.313', 'itera-lampung', 'walking', 8, 548, now()),
  ('-5.355,105.313', 'itera-lampung', 'motorcycle', 2, 569, now()),
  ('-5.355,105.313', 'itera-lampung', 'driving-car', 2, 591, now()),
  ('-5.355,105.313', 'itera-gerbang-utama', 'walking', 8, 548, now()),
  ('-5.355,105.313', 'itera-gerbang-utama', 'motorcycle', 2, 569, now()),
  ('-5.355,105.313', 'itera-gerbang-utama', 'driving-car', 2, 591, now()),
  ('-5.355,105.313', 'itera-simpang-wayhuwi', 'walking', 9, 663, now()),
  ('-5.355,105.313', 'itera-simpang-wayhuwi', 'motorcycle', 2, 689, now()),
  ('-5.355,105.313', 'itera-simpang-wayhuwi', 'driving-car', 3, 716, now()),
  ('-5.355,105.313', 'itera-akses-sabahbalau', 'walking', 29, 2134, now()),
  ('-5.355,105.313', 'itera-akses-sabahbalau', 'motorcycle', 6, 2219, now()),
  ('-5.355,105.313', 'itera-akses-sabahbalau', 'driving-car', 8, 2304, now()),
  ('-5.349,105.303', 'itera-lampung', 'walking', 29, 2125, now()),
  ('-5.349,105.303', 'itera-lampung', 'motorcycle', 6, 2210, now()),
  ('-5.349,105.303', 'itera-lampung', 'driving-car', 8, 2295, now()),
  ('-5.349,105.303', 'itera-gerbang-utama', 'walking', 29, 2125, now()),
  ('-5.349,105.303', 'itera-gerbang-utama', 'motorcycle', 6, 2210, now()),
  ('-5.349,105.303', 'itera-gerbang-utama', 'driving-car', 8, 2295, now()),
  ('-5.349,105.303', 'itera-simpang-wayhuwi', 'walking', 16, 1128, now()),
  ('-5.349,105.303', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1173, now()),
  ('-5.349,105.303', 'itera-simpang-wayhuwi', 'driving-car', 5, 1218, now()),
  ('-5.349,105.303', 'itera-akses-sabahbalau', 'walking', 49, 3670, now()),
  ('-5.349,105.303', 'itera-akses-sabahbalau', 'motorcycle', 10, 3817, now()),
  ('-5.349,105.303', 'itera-akses-sabahbalau', 'driving-car', 14, 3964, now()),
  ('-5.352,105.305', 'itera-lampung', 'walking', 22, 1591, now()),
  ('-5.352,105.305', 'itera-lampung', 'motorcycle', 5, 1655, now()),
  ('-5.352,105.305', 'itera-lampung', 'driving-car', 6, 1719, now()),
  ('-5.352,105.305', 'itera-gerbang-utama', 'walking', 22, 1591, now()),
  ('-5.352,105.305', 'itera-gerbang-utama', 'motorcycle', 5, 1655, now()),
  ('-5.352,105.305', 'itera-gerbang-utama', 'driving-car', 6, 1719, now()),
  ('-5.352,105.305', 'itera-simpang-wayhuwi', 'walking', 8, 571, now()),
  ('-5.352,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 2, 594, now()),
  ('-5.352,105.305', 'itera-simpang-wayhuwi', 'driving-car', 3, 617, now()),
  ('-5.352,105.305', 'itera-akses-sabahbalau', 'walking', 42, 3119, now()),
  ('-5.352,105.305', 'itera-akses-sabahbalau', 'motorcycle', 9, 3244, now()),
  ('-5.352,105.305', 'itera-akses-sabahbalau', 'driving-car', 12, 3368, now()),
  ('-5.371,105.299', 'itera-lampung', 'walking', 37, 2749, now()),
  ('-5.371,105.299', 'itera-lampung', 'motorcycle', 8, 2859, now()),
  ('-5.371,105.299', 'itera-lampung', 'driving-car', 10, 2969, now()),
  ('-5.371,105.299', 'itera-gerbang-utama', 'walking', 37, 2749, now()),
  ('-5.371,105.299', 'itera-gerbang-utama', 'motorcycle', 8, 2859, now()),
  ('-5.371,105.299', 'itera-gerbang-utama', 'driving-car', 10, 2969, now()),
  ('-5.371,105.299', 'itera-simpang-wayhuwi', 'walking', 34, 2515, now()),
  ('-5.371,105.299', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2616, now()),
  ('-5.371,105.299', 'itera-simpang-wayhuwi', 'driving-car', 10, 2716, now()),
  ('-5.371,105.299', 'itera-akses-sabahbalau', 'walking', 41, 3008, now()),
  ('-5.371,105.299', 'itera-akses-sabahbalau', 'motorcycle', 8, 3128, now()),
  ('-5.371,105.299', 'itera-akses-sabahbalau', 'driving-car', 11, 3248, now()),
  ('-5.365,105.320', 'itera-lampung', 'walking', 16, 1134, now()),
  ('-5.365,105.320', 'itera-lampung', 'motorcycle', 3, 1179, now()),
  ('-5.365,105.320', 'itera-lampung', 'driving-car', 5, 1224, now()),
  ('-5.365,105.320', 'itera-gerbang-utama', 'walking', 16, 1134, now()),
  ('-5.365,105.320', 'itera-gerbang-utama', 'motorcycle', 3, 1179, now()),
  ('-5.365,105.320', 'itera-gerbang-utama', 'driving-car', 5, 1224, now()),
  ('-5.365,105.320', 'itera-simpang-wayhuwi', 'walking', 29, 2139, now()),
  ('-5.365,105.320', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2224, now()),
  ('-5.365,105.320', 'itera-simpang-wayhuwi', 'driving-car', 8, 2310, now()),
  ('-5.365,105.320', 'itera-akses-sabahbalau', 'walking', 7, 475, now()),
  ('-5.365,105.320', 'itera-akses-sabahbalau', 'motorcycle', 2, 494, now()),
  ('-5.365,105.320', 'itera-akses-sabahbalau', 'driving-car', 2, 513, now()),
  ('-5.354,105.313', 'itera-lampung', 'walking', 9, 648, now()),
  ('-5.354,105.313', 'itera-lampung', 'motorcycle', 2, 673, now()),
  ('-5.354,105.313', 'itera-lampung', 'driving-car', 3, 699, now()),
  ('-5.354,105.313', 'itera-gerbang-utama', 'walking', 9, 648, now()),
  ('-5.354,105.313', 'itera-gerbang-utama', 'motorcycle', 2, 673, now()),
  ('-5.354,105.313', 'itera-gerbang-utama', 'driving-car', 3, 699, now()),
  ('-5.354,105.313', 'itera-simpang-wayhuwi', 'walking', 11, 771, now()),
  ('-5.354,105.313', 'itera-simpang-wayhuwi', 'motorcycle', 3, 802, now()),
  ('-5.354,105.313', 'itera-simpang-wayhuwi', 'driving-car', 3, 833, now()),
  ('-5.354,105.313', 'itera-akses-sabahbalau', 'walking', 30, 2216, now()),
  ('-5.354,105.313', 'itera-akses-sabahbalau', 'motorcycle', 6, 2305, now()),
  ('-5.354,105.313', 'itera-akses-sabahbalau', 'driving-car', 8, 2394, now()),
  ('-5.364,105.323', 'itera-lampung', 'walking', 19, 1409, now()),
  ('-5.364,105.323', 'itera-lampung', 'motorcycle', 4, 1465, now()),
  ('-5.364,105.323', 'itera-lampung', 'driving-car', 6, 1521, now()),
  ('-5.364,105.323', 'itera-gerbang-utama', 'walking', 19, 1409, now()),
  ('-5.364,105.323', 'itera-gerbang-utama', 'motorcycle', 4, 1465, now()),
  ('-5.364,105.323', 'itera-gerbang-utama', 'driving-car', 6, 1521, now()),
  ('-5.364,105.323', 'itera-simpang-wayhuwi', 'walking', 33, 2456, now()),
  ('-5.364,105.323', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2555, now()),
  ('-5.364,105.323', 'itera-simpang-wayhuwi', 'driving-car', 9, 2653, now()),
  ('-5.364,105.323', 'itera-akses-sabahbalau', 'walking', 9, 614, now()),
  ('-5.364,105.323', 'itera-akses-sabahbalau', 'motorcycle', 2, 638, now()),
  ('-5.364,105.323', 'itera-akses-sabahbalau', 'driving-car', 3, 663, now()),
  ('-5.358,105.305', 'itera-lampung', 'walking', 20, 1426, now()),
  ('-5.358,105.305', 'itera-lampung', 'motorcycle', 4, 1483, now()),
  ('-5.358,105.305', 'itera-lampung', 'driving-car', 6, 1540, now()),
  ('-5.358,105.305', 'itera-gerbang-utama', 'walking', 20, 1426, now()),
  ('-5.358,105.305', 'itera-gerbang-utama', 'motorcycle', 4, 1483, now()),
  ('-5.358,105.305', 'itera-gerbang-utama', 'driving-car', 6, 1540, now()),
  ('-5.358,105.305', 'itera-simpang-wayhuwi', 'walking', 9, 645, now()),
  ('-5.358,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 2, 671, now()),
  ('-5.358,105.305', 'itera-simpang-wayhuwi', 'driving-car', 3, 697, now()),
  ('-5.358,105.305', 'itera-akses-sabahbalau', 'walking', 36, 2668, now()),
  ('-5.358,105.305', 'itera-akses-sabahbalau', 'motorcycle', 7, 2774, now()),
  ('-5.358,105.305', 'itera-akses-sabahbalau', 'driving-car', 10, 2881, now()),
  ('-5.351,105.306', 'itera-lampung', 'walking', 23, 1654, now()),
  ('-5.351,105.306', 'itera-lampung', 'motorcycle', 5, 1720, now()),
  ('-5.351,105.306', 'itera-lampung', 'driving-car', 6, 1786, now()),
  ('-5.351,105.306', 'itera-gerbang-utama', 'walking', 23, 1654, now()),
  ('-5.351,105.306', 'itera-gerbang-utama', 'motorcycle', 5, 1720, now()),
  ('-5.351,105.306', 'itera-gerbang-utama', 'driving-car', 6, 1786, now()),
  ('-5.351,105.306', 'itera-simpang-wayhuwi', 'walking', 9, 675, now()),
  ('-5.351,105.306', 'itera-simpang-wayhuwi', 'motorcycle', 2, 702, now()),
  ('-5.351,105.306', 'itera-simpang-wayhuwi', 'driving-car', 3, 729, now()),
  ('-5.351,105.306', 'itera-akses-sabahbalau', 'walking', 43, 3204, now()),
  ('-5.351,105.306', 'itera-akses-sabahbalau', 'motorcycle', 9, 3332, now()),
  ('-5.351,105.306', 'itera-akses-sabahbalau', 'driving-car', 12, 3460, now()),
  ('-5.359,105.305', 'itera-lampung', 'walking', 18, 1295, now()),
  ('-5.359,105.305', 'itera-lampung', 'motorcycle', 4, 1347, now()),
  ('-5.359,105.305', 'itera-lampung', 'driving-car', 5, 1399, now()),
  ('-5.359,105.305', 'itera-gerbang-utama', 'walking', 18, 1295, now()),
  ('-5.359,105.305', 'itera-gerbang-utama', 'motorcycle', 4, 1347, now()),
  ('-5.359,105.305', 'itera-gerbang-utama', 'driving-car', 5, 1399, now()),
  ('-5.359,105.305', 'itera-simpang-wayhuwi', 'walking', 9, 638, now()),
  ('-5.359,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 2, 663, now()),
  ('-5.359,105.305', 'itera-simpang-wayhuwi', 'driving-car', 3, 689, now()),
  ('-5.359,105.305', 'itera-akses-sabahbalau', 'walking', 34, 2501, now()),
  ('-5.359,105.305', 'itera-akses-sabahbalau', 'motorcycle', 7, 2601, now()),
  ('-5.359,105.305', 'itera-akses-sabahbalau', 'driving-car', 10, 2701, now()),
  ('-5.364,105.300', 'itera-lampung', 'walking', 30, 2190, now()),
  ('-5.364,105.300', 'itera-lampung', 'motorcycle', 6, 2278, now()),
  ('-5.364,105.300', 'itera-lampung', 'driving-car', 8, 2365, now()),
  ('-5.364,105.300', 'itera-gerbang-utama', 'walking', 30, 2190, now()),
  ('-5.364,105.300', 'itera-gerbang-utama', 'motorcycle', 6, 2278, now()),
  ('-5.364,105.300', 'itera-gerbang-utama', 'driving-car', 8, 2365, now()),
  ('-5.364,105.300', 'itera-simpang-wayhuwi', 'walking', 23, 1705, now()),
  ('-5.364,105.300', 'itera-simpang-wayhuwi', 'motorcycle', 5, 1773, now()),
  ('-5.364,105.300', 'itera-simpang-wayhuwi', 'driving-car', 7, 1841, now()),
  ('-5.364,105.300', 'itera-akses-sabahbalau', 'walking', 39, 2920, now()),
  ('-5.364,105.300', 'itera-akses-sabahbalau', 'motorcycle', 8, 3037, now()),
  ('-5.364,105.300', 'itera-akses-sabahbalau', 'driving-car', 11, 3154, now()),
  ('-5.359,105.329', 'itera-lampung', 'walking', 26, 1908, now()),
  ('-5.359,105.329', 'itera-lampung', 'motorcycle', 5, 1984, now()),
  ('-5.359,105.329', 'itera-lampung', 'driving-car', 7, 2060, now()),
  ('-5.359,105.329', 'itera-gerbang-utama', 'walking', 26, 1908, now()),
  ('-5.359,105.329', 'itera-gerbang-utama', 'motorcycle', 5, 1984, now()),
  ('-5.359,105.329', 'itera-gerbang-utama', 'driving-car', 7, 2060, now()),
  ('-5.359,105.329', 'itera-simpang-wayhuwi', 'walking', 39, 2903, now()),
  ('-5.359,105.329', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3019, now()),
  ('-5.359,105.329', 'itera-simpang-wayhuwi', 'driving-car', 11, 3135, now()),
  ('-5.359,105.329', 'itera-akses-sabahbalau', 'walking', 22, 1621, now()),
  ('-5.359,105.329', 'itera-akses-sabahbalau', 'motorcycle', 5, 1686, now()),
  ('-5.359,105.329', 'itera-akses-sabahbalau', 'driving-car', 6, 1751, now()),
  ('-5.351,105.303', 'itera-lampung', 'walking', 27, 1969, now()),
  ('-5.351,105.303', 'itera-lampung', 'motorcycle', 6, 2048, now()),
  ('-5.351,105.303', 'itera-lampung', 'driving-car', 8, 2126, now()),
  ('-5.351,105.303', 'itera-gerbang-utama', 'walking', 27, 1969, now()),
  ('-5.351,105.303', 'itera-gerbang-utama', 'motorcycle', 6, 2048, now()),
  ('-5.351,105.303', 'itera-gerbang-utama', 'driving-car', 8, 2126, now()),
  ('-5.351,105.303', 'itera-simpang-wayhuwi', 'walking', 13, 924, now()),
  ('-5.351,105.303', 'itera-simpang-wayhuwi', 'motorcycle', 3, 961, now()),
  ('-5.351,105.303', 'itera-simpang-wayhuwi', 'driving-car', 4, 998, now()),
  ('-5.351,105.303', 'itera-akses-sabahbalau', 'walking', 47, 3468, now()),
  ('-5.351,105.303', 'itera-akses-sabahbalau', 'motorcycle', 10, 3606, now()),
  ('-5.351,105.303', 'itera-akses-sabahbalau', 'driving-car', 13, 3745, now()),
  ('-5.362,105.302', 'itera-lampung', 'walking', 25, 1838, now()),
  ('-5.362,105.302', 'itera-lampung', 'motorcycle', 5, 1911, now()),
  ('-5.362,105.302', 'itera-lampung', 'driving-car', 7, 1985, now()),
  ('-5.362,105.302', 'itera-gerbang-utama', 'walking', 25, 1838, now()),
  ('-5.362,105.302', 'itera-gerbang-utama', 'motorcycle', 5, 1911, now()),
  ('-5.362,105.302', 'itera-gerbang-utama', 'driving-car', 7, 1985, now()),
  ('-5.362,105.302', 'itera-simpang-wayhuwi', 'walking', 18, 1298, now()),
  ('-5.362,105.302', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1349, now()),
  ('-5.362,105.302', 'itera-simpang-wayhuwi', 'driving-car', 5, 1401, now()),
  ('-5.362,105.302', 'itera-akses-sabahbalau', 'walking', 37, 2735, now()),
  ('-5.362,105.302', 'itera-akses-sabahbalau', 'motorcycle', 8, 2844, now()),
  ('-5.362,105.302', 'itera-akses-sabahbalau', 'driving-car', 10, 2954, now()),
  ('-5.362,105.322', 'itera-lampung', 'walking', 15, 1054, now()),
  ('-5.362,105.322', 'itera-lampung', 'motorcycle', 3, 1096, now()),
  ('-5.362,105.322', 'itera-lampung', 'driving-car', 4, 1138, now()),
  ('-5.362,105.322', 'itera-gerbang-utama', 'walking', 15, 1054, now()),
  ('-5.362,105.322', 'itera-gerbang-utama', 'motorcycle', 3, 1096, now()),
  ('-5.362,105.322', 'itera-gerbang-utama', 'driving-car', 4, 1138, now()),
  ('-5.362,105.322', 'itera-simpang-wayhuwi', 'walking', 29, 2108, now()),
  ('-5.362,105.322', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2192, now()),
  ('-5.362,105.322', 'itera-simpang-wayhuwi', 'driving-car', 8, 2276, now()),
  ('-5.362,105.322', 'itera-akses-sabahbalau', 'walking', 12, 880, now()),
  ('-5.362,105.322', 'itera-akses-sabahbalau', 'motorcycle', 3, 915, now()),
  ('-5.362,105.322', 'itera-akses-sabahbalau', 'driving-car', 4, 950, now()),
  ('-5.356,105.314', 'itera-lampung', 'walking', 5, 341, now()),
  ('-5.356,105.314', 'itera-lampung', 'motorcycle', 1, 355, now()),
  ('-5.356,105.314', 'itera-lampung', 'driving-car', 2, 369, now()),
  ('-5.356,105.314', 'itera-gerbang-utama', 'walking', 5, 341, now()),
  ('-5.356,105.314', 'itera-gerbang-utama', 'motorcycle', 1, 355, now()),
  ('-5.356,105.314', 'itera-gerbang-utama', 'driving-car', 2, 369, now()),
  ('-5.356,105.314', 'itera-simpang-wayhuwi', 'walking', 11, 810, now()),
  ('-5.356,105.314', 'itera-simpang-wayhuwi', 'motorcycle', 3, 842, now()),
  ('-5.356,105.314', 'itera-simpang-wayhuwi', 'driving-car', 3, 875, now()),
  ('-5.356,105.314', 'itera-akses-sabahbalau', 'walking', 26, 1925, now()),
  ('-5.356,105.314', 'itera-akses-sabahbalau', 'motorcycle', 6, 2002, now()),
  ('-5.356,105.314', 'itera-akses-sabahbalau', 'driving-car', 7, 2079, now()),
  ('-5.358,105.333', 'itera-lampung', 'walking', 34, 2481, now()),
  ('-5.358,105.333', 'itera-lampung', 'motorcycle', 7, 2581, now()),
  ('-5.358,105.333', 'itera-lampung', 'driving-car', 9, 2680, now()),
  ('-5.358,105.333', 'itera-gerbang-utama', 'walking', 34, 2481, now()),
  ('-5.358,105.333', 'itera-gerbang-utama', 'motorcycle', 7, 2581, now()),
  ('-5.358,105.333', 'itera-gerbang-utama', 'driving-car', 9, 2680, now()),
  ('-5.358,105.333', 'itera-simpang-wayhuwi', 'walking', 46, 3443, now()),
  ('-5.358,105.333', 'itera-simpang-wayhuwi', 'motorcycle', 9, 3580, now()),
  ('-5.358,105.333', 'itera-simpang-wayhuwi', 'driving-car', 13, 3718, now()),
  ('-5.358,105.333', 'itera-akses-sabahbalau', 'walking', 29, 2159, now()),
  ('-5.358,105.333', 'itera-akses-sabahbalau', 'motorcycle', 6, 2245, now()),
  ('-5.358,105.333', 'itera-akses-sabahbalau', 'driving-car', 8, 2331, now()),
  ('-5.347,105.310', 'itera-lampung', 'walking', 23, 1669, now()),
  ('-5.347,105.310', 'itera-lampung', 'motorcycle', 5, 1736, now()),
  ('-5.347,105.310', 'itera-lampung', 'driving-car', 7, 1802, now()),
  ('-5.347,105.310', 'itera-gerbang-utama', 'walking', 23, 1669, now()),
  ('-5.347,105.310', 'itera-gerbang-utama', 'motorcycle', 5, 1736, now()),
  ('-5.347,105.310', 'itera-gerbang-utama', 'driving-car', 7, 1802, now()),
  ('-5.347,105.310', 'itera-simpang-wayhuwi', 'walking', 15, 1074, now()),
  ('-5.347,105.310', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1117, now()),
  ('-5.347,105.310', 'itera-simpang-wayhuwi', 'driving-car', 4, 1160, now()),
  ('-5.347,105.310', 'itera-akses-sabahbalau', 'walking', 44, 3248, now()),
  ('-5.347,105.310', 'itera-akses-sabahbalau', 'motorcycle', 9, 3377, now()),
  ('-5.347,105.310', 'itera-akses-sabahbalau', 'driving-car', 12, 3507, now()),
  ('-5.361,105.331', 'itera-lampung', 'walking', 31, 2319, now()),
  ('-5.361,105.331', 'itera-lampung', 'motorcycle', 7, 2412, now()),
  ('-5.361,105.331', 'itera-lampung', 'driving-car', 9, 2504, now()),
  ('-5.361,105.331', 'itera-gerbang-utama', 'walking', 31, 2319, now()),
  ('-5.361,105.331', 'itera-gerbang-utama', 'motorcycle', 7, 2412, now()),
  ('-5.361,105.331', 'itera-gerbang-utama', 'driving-car', 9, 2504, now()),
  ('-5.361,105.331', 'itera-simpang-wayhuwi', 'walking', 45, 3338, now()),
  ('-5.361,105.331', 'itera-simpang-wayhuwi', 'motorcycle', 9, 3471, now()),
  ('-5.361,105.331', 'itera-simpang-wayhuwi', 'driving-car', 13, 3605, now()),
  ('-5.361,105.331', 'itera-akses-sabahbalau', 'walking', 24, 1736, now()),
  ('-5.361,105.331', 'itera-akses-sabahbalau', 'motorcycle', 5, 1806, now()),
  ('-5.361,105.331', 'itera-akses-sabahbalau', 'driving-car', 7, 1875, now()),
  ('-5.364,105.320', 'itera-lampung', 'walking', 14, 1018, now()),
  ('-5.364,105.320', 'itera-lampung', 'motorcycle', 3, 1058, now()),
  ('-5.364,105.320', 'itera-lampung', 'driving-car', 4, 1099, now()),
  ('-5.364,105.320', 'itera-gerbang-utama', 'walking', 14, 1018, now()),
  ('-5.364,105.320', 'itera-gerbang-utama', 'motorcycle', 3, 1058, now()),
  ('-5.364,105.320', 'itera-gerbang-utama', 'driving-car', 4, 1099, now()),
  ('-5.364,105.320', 'itera-simpang-wayhuwi', 'walking', 28, 2041, now()),
  ('-5.364,105.320', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2123, now()),
  ('-5.364,105.320', 'itera-simpang-wayhuwi', 'driving-car', 8, 2205, now()),
  ('-5.364,105.320', 'itera-akses-sabahbalau', 'walking', 9, 624, now()),
  ('-5.364,105.320', 'itera-akses-sabahbalau', 'motorcycle', 2, 649, now()),
  ('-5.364,105.320', 'itera-akses-sabahbalau', 'driving-car', 3, 674, now()),
  ('-5.355,105.334', 'itera-lampung', 'walking', 36, 2661, now()),
  ('-5.355,105.334', 'itera-lampung', 'motorcycle', 7, 2768, now()),
  ('-5.355,105.334', 'itera-lampung', 'driving-car', 10, 2874, now()),
  ('-5.355,105.334', 'itera-gerbang-utama', 'walking', 36, 2661, now()),
  ('-5.355,105.334', 'itera-gerbang-utama', 'motorcycle', 7, 2768, now()),
  ('-5.355,105.334', 'itera-gerbang-utama', 'driving-car', 10, 2874, now()),
  ('-5.355,105.334', 'itera-simpang-wayhuwi', 'walking', 48, 3566, now()),
  ('-5.355,105.334', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3709, now()),
  ('-5.355,105.334', 'itera-simpang-wayhuwi', 'driving-car', 13, 3852, now()),
  ('-5.355,105.334', 'itera-akses-sabahbalau', 'walking', 34, 2500, now()),
  ('-5.355,105.334', 'itera-akses-sabahbalau', 'motorcycle', 7, 2600, now()),
  ('-5.355,105.334', 'itera-akses-sabahbalau', 'driving-car', 9, 2700, now()),
  ('-5.358,105.335', 'itera-lampung', 'walking', 37, 2734, now()),
  ('-5.358,105.335', 'itera-lampung', 'motorcycle', 8, 2843, now()),
  ('-5.358,105.335', 'itera-lampung', 'driving-car', 10, 2952, now()),
  ('-5.358,105.335', 'itera-gerbang-utama', 'walking', 37, 2734, now()),
  ('-5.358,105.335', 'itera-gerbang-utama', 'motorcycle', 8, 2843, now()),
  ('-5.358,105.335', 'itera-gerbang-utama', 'driving-car', 10, 2952, now()),
  ('-5.358,105.335', 'itera-simpang-wayhuwi', 'walking', 50, 3691, now()),
  ('-5.358,105.335', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3839, now()),
  ('-5.358,105.335', 'itera-simpang-wayhuwi', 'driving-car', 14, 3987, now()),
  ('-5.358,105.335', 'itera-akses-sabahbalau', 'walking', 32, 2365, now()),
  ('-5.358,105.335', 'itera-akses-sabahbalau', 'motorcycle', 7, 2460, now()),
  ('-5.358,105.335', 'itera-akses-sabahbalau', 'driving-car', 9, 2554, now()),
  ('-5.375,105.297', 'itera-lampung', 'walking', 45, 3350, now()),
  ('-5.375,105.297', 'itera-lampung', 'motorcycle', 9, 3484, now()),
  ('-5.375,105.297', 'itera-lampung', 'driving-car', 13, 3618, now()),
  ('-5.375,105.297', 'itera-gerbang-utama', 'walking', 45, 3350, now()),
  ('-5.375,105.297', 'itera-gerbang-utama', 'motorcycle', 9, 3484, now()),
  ('-5.375,105.297', 'itera-gerbang-utama', 'driving-car', 13, 3618, now()),
  ('-5.375,105.297', 'itera-simpang-wayhuwi', 'walking', 42, 3146, now()),
  ('-5.375,105.297', 'itera-simpang-wayhuwi', 'motorcycle', 9, 3272, now()),
  ('-5.375,105.297', 'itera-simpang-wayhuwi', 'driving-car', 12, 3398, now()),
  ('-5.375,105.297', 'itera-akses-sabahbalau', 'walking', 46, 3439, now()),
  ('-5.375,105.297', 'itera-akses-sabahbalau', 'motorcycle', 9, 3576, now()),
  ('-5.375,105.297', 'itera-akses-sabahbalau', 'driving-car', 13, 3714, now()),
  ('-5.371,105.293', 'itera-lampung', 'walking', 47, 3451, now()),
  ('-5.371,105.293', 'itera-lampung', 'motorcycle', 9, 3589, now()),
  ('-5.371,105.293', 'itera-lampung', 'driving-car', 13, 3727, now()),
  ('-5.371,105.293', 'itera-gerbang-utama', 'walking', 47, 3451, now()),
  ('-5.371,105.293', 'itera-gerbang-utama', 'motorcycle', 9, 3589, now()),
  ('-5.371,105.293', 'itera-gerbang-utama', 'driving-car', 13, 3727, now()),
  ('-5.371,105.293', 'itera-simpang-wayhuwi', 'walking', 41, 3005, now()),
  ('-5.371,105.293', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3125, now()),
  ('-5.371,105.293', 'itera-simpang-wayhuwi', 'driving-car', 11, 3245, now()),
  ('-5.371,105.293', 'itera-akses-sabahbalau', 'walking', 52, 3865, now()),
  ('-5.371,105.293', 'itera-akses-sabahbalau', 'motorcycle', 11, 4020, now()),
  ('-5.371,105.293', 'itera-akses-sabahbalau', 'driving-car', 14, 4174, now()),
  ('-5.353,105.316', 'itera-lampung', 'walking', 10, 715, now()),
  ('-5.353,105.316', 'itera-lampung', 'motorcycle', 2, 744, now()),
  ('-5.353,105.316', 'itera-lampung', 'driving-car', 3, 772, now()),
  ('-5.353,105.316', 'itera-gerbang-utama', 'walking', 10, 715, now()),
  ('-5.353,105.316', 'itera-gerbang-utama', 'motorcycle', 2, 744, now()),
  ('-5.353,105.316', 'itera-gerbang-utama', 'driving-car', 3, 772, now()),
  ('-5.353,105.316', 'itera-simpang-wayhuwi', 'walking', 16, 1150, now()),
  ('-5.353,105.316', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1196, now()),
  ('-5.353,105.316', 'itera-simpang-wayhuwi', 'driving-car', 5, 1242, now()),
  ('-5.353,105.316', 'itera-akses-sabahbalau', 'walking', 29, 2131, now()),
  ('-5.353,105.316', 'itera-akses-sabahbalau', 'motorcycle', 6, 2217, now()),
  ('-5.353,105.316', 'itera-akses-sabahbalau', 'driving-car', 8, 2302, now()),
  ('-5.363,105.319', 'itera-lampung', 'walking', 13, 921, now()),
  ('-5.363,105.319', 'itera-lampung', 'motorcycle', 3, 958, now()),
  ('-5.363,105.319', 'itera-lampung', 'driving-car', 4, 995, now()),
  ('-5.363,105.319', 'itera-gerbang-utama', 'walking', 13, 921, now()),
  ('-5.363,105.319', 'itera-gerbang-utama', 'motorcycle', 3, 958, now()),
  ('-5.363,105.319', 'itera-gerbang-utama', 'driving-car', 4, 995, now()),
  ('-5.363,105.319', 'itera-simpang-wayhuwi', 'walking', 26, 1936, now()),
  ('-5.363,105.319', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2014, now()),
  ('-5.363,105.319', 'itera-simpang-wayhuwi', 'driving-car', 7, 2091, now()),
  ('-5.363,105.319', 'itera-akses-sabahbalau', 'walking', 10, 685, now()),
  ('-5.363,105.319', 'itera-akses-sabahbalau', 'motorcycle', 2, 712, now()),
  ('-5.363,105.319', 'itera-akses-sabahbalau', 'driving-car', 3, 740, now()),
  ('-5.361,105.303', 'itera-lampung', 'walking', 23, 1695, now()),
  ('-5.361,105.303', 'itera-lampung', 'motorcycle', 5, 1763, now()),
  ('-5.361,105.303', 'itera-lampung', 'driving-car', 7, 1831, now()),
  ('-5.361,105.303', 'itera-gerbang-utama', 'walking', 23, 1695, now()),
  ('-5.361,105.303', 'itera-gerbang-utama', 'motorcycle', 5, 1763, now()),
  ('-5.361,105.303', 'itera-gerbang-utama', 'driving-car', 7, 1831, now()),
  ('-5.361,105.303', 'itera-simpang-wayhuwi', 'walking', 15, 1115, now()),
  ('-5.361,105.303', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1160, now()),
  ('-5.361,105.303', 'itera-simpang-wayhuwi', 'driving-car', 5, 1204, now()),
  ('-5.361,105.303', 'itera-akses-sabahbalau', 'walking', 36, 2680, now()),
  ('-5.361,105.303', 'itera-akses-sabahbalau', 'motorcycle', 7, 2787, now()),
  ('-5.361,105.303', 'itera-akses-sabahbalau', 'driving-car', 10, 2894, now()),
  ('-5.349,105.310', 'itera-lampung', 'walking', 21, 1515, now()),
  ('-5.349,105.310', 'itera-lampung', 'motorcycle', 4, 1576, now()),
  ('-5.349,105.310', 'itera-lampung', 'driving-car', 6, 1636, now()),
  ('-5.349,105.310', 'itera-gerbang-utama', 'walking', 21, 1515, now()),
  ('-5.349,105.310', 'itera-gerbang-utama', 'motorcycle', 4, 1576, now()),
  ('-5.349,105.310', 'itera-gerbang-utama', 'driving-car', 6, 1636, now()),
  ('-5.349,105.310', 'itera-simpang-wayhuwi', 'walking', 13, 953, now()),
  ('-5.349,105.310', 'itera-simpang-wayhuwi', 'motorcycle', 3, 991, now()),
  ('-5.349,105.310', 'itera-simpang-wayhuwi', 'driving-car', 4, 1029, now()),
  ('-5.349,105.310', 'itera-akses-sabahbalau', 'walking', 42, 3094, now()),
  ('-5.349,105.310', 'itera-akses-sabahbalau', 'motorcycle', 9, 3218, now()),
  ('-5.349,105.310', 'itera-akses-sabahbalau', 'driving-car', 12, 3341, now()),
  ('-5.375,105.292', 'itera-lampung', 'walking', 52, 3873, now()),
  ('-5.375,105.292', 'itera-lampung', 'motorcycle', 11, 4027, now()),
  ('-5.375,105.292', 'itera-lampung', 'driving-car', 14, 4182, now()),
  ('-5.375,105.292', 'itera-gerbang-utama', 'walking', 52, 3873, now()),
  ('-5.375,105.292', 'itera-gerbang-utama', 'motorcycle', 11, 4027, now()),
  ('-5.375,105.292', 'itera-gerbang-utama', 'driving-car', 14, 4182, now()),
  ('-5.375,105.292', 'itera-simpang-wayhuwi', 'walking', 47, 3520, now()),
  ('-5.375,105.292', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3661, now()),
  ('-5.375,105.292', 'itera-simpang-wayhuwi', 'driving-car', 13, 3802, now()),
  ('-5.375,105.292', 'itera-akses-sabahbalau', 'walking', 55, 4094, now()),
  ('-5.375,105.292', 'itera-akses-sabahbalau', 'motorcycle', 11, 4258, now()),
  ('-5.375,105.292', 'itera-akses-sabahbalau', 'driving-car', 15, 4421, now()),
  ('-5.356,105.318', 'itera-lampung', 'walking', 7, 511, now()),
  ('-5.356,105.318', 'itera-lampung', 'motorcycle', 2, 532, now()),
  ('-5.356,105.318', 'itera-lampung', 'driving-car', 2, 552, now()),
  ('-5.356,105.318', 'itera-gerbang-utama', 'walking', 7, 511, now()),
  ('-5.356,105.318', 'itera-gerbang-utama', 'motorcycle', 2, 532, now()),
  ('-5.356,105.318', 'itera-gerbang-utama', 'driving-car', 2, 552, now()),
  ('-5.356,105.318', 'itera-simpang-wayhuwi', 'walking', 19, 1358, now()),
  ('-5.356,105.318', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1412, now()),
  ('-5.356,105.318', 'itera-simpang-wayhuwi', 'driving-car', 5, 1466, now()),
  ('-5.356,105.318', 'itera-akses-sabahbalau', 'walking', 23, 1705, now()),
  ('-5.356,105.318', 'itera-akses-sabahbalau', 'motorcycle', 5, 1773, now()),
  ('-5.356,105.318', 'itera-akses-sabahbalau', 'driving-car', 7, 1841, now()),
  ('-5.357,105.316', 'itera-lampung', 'walking', 5, 314, now()),
  ('-5.357,105.316', 'itera-lampung', 'motorcycle', 1, 326, now()),
  ('-5.357,105.316', 'itera-lampung', 'driving-car', 2, 339, now()),
  ('-5.357,105.316', 'itera-gerbang-utama', 'walking', 5, 314, now()),
  ('-5.357,105.316', 'itera-gerbang-utama', 'motorcycle', 1, 326, now()),
  ('-5.357,105.316', 'itera-gerbang-utama', 'driving-car', 2, 339, now()),
  ('-5.357,105.316', 'itera-simpang-wayhuwi', 'walking', 16, 1148, now()),
  ('-5.357,105.316', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1193, now()),
  ('-5.357,105.316', 'itera-simpang-wayhuwi', 'driving-car', 5, 1239, now()),
  ('-5.357,105.316', 'itera-akses-sabahbalau', 'walking', 23, 1724, now()),
  ('-5.357,105.316', 'itera-akses-sabahbalau', 'motorcycle', 5, 1793, now()),
  ('-5.357,105.316', 'itera-akses-sabahbalau', 'driving-car', 7, 1862, now()),
  ('-5.355,105.314', 'itera-lampung', 'walking', 6, 419, now()),
  ('-5.355,105.314', 'itera-lampung', 'motorcycle', 2, 436, now()),
  ('-5.355,105.314', 'itera-lampung', 'driving-car', 2, 452, now()),
  ('-5.355,105.314', 'itera-gerbang-utama', 'walking', 6, 419, now()),
  ('-5.355,105.314', 'itera-gerbang-utama', 'motorcycle', 2, 436, now()),
  ('-5.355,105.314', 'itera-gerbang-utama', 'driving-car', 2, 452, now()),
  ('-5.355,105.314', 'itera-simpang-wayhuwi', 'walking', 12, 855, now()),
  ('-5.355,105.314', 'itera-simpang-wayhuwi', 'motorcycle', 3, 889, now()),
  ('-5.355,105.314', 'itera-simpang-wayhuwi', 'driving-car', 4, 923, now()),
  ('-5.355,105.314', 'itera-akses-sabahbalau', 'walking', 27, 1984, now()),
  ('-5.355,105.314', 'itera-akses-sabahbalau', 'motorcycle', 6, 2063, now()),
  ('-5.355,105.314', 'itera-akses-sabahbalau', 'driving-car', 8, 2142, now()),
  ('-5.373,105.298', 'itera-lampung', 'walking', 41, 3068, now()),
  ('-5.373,105.298', 'itera-lampung', 'motorcycle', 8, 3190, now()),
  ('-5.373,105.298', 'itera-lampung', 'driving-car', 12, 3313, now()),
  ('-5.373,105.298', 'itera-gerbang-utama', 'walking', 41, 3068, now()),
  ('-5.373,105.298', 'itera-gerbang-utama', 'motorcycle', 8, 3190, now()),
  ('-5.373,105.298', 'itera-gerbang-utama', 'driving-car', 12, 3313, now()),
  ('-5.373,105.298', 'itera-simpang-wayhuwi', 'walking', 39, 2864, now()),
  ('-5.373,105.298', 'itera-simpang-wayhuwi', 'motorcycle', 8, 2978, now()),
  ('-5.373,105.298', 'itera-simpang-wayhuwi', 'driving-car', 11, 3093, now()),
  ('-5.373,105.298', 'itera-akses-sabahbalau', 'walking', 43, 3211, now()),
  ('-5.373,105.298', 'itera-akses-sabahbalau', 'motorcycle', 9, 3340, now()),
  ('-5.373,105.298', 'itera-akses-sabahbalau', 'driving-car', 12, 3468, now()),
  ('-5.374,105.299', 'itera-lampung', 'walking', 42, 3110, now()),
  ('-5.374,105.299', 'itera-lampung', 'motorcycle', 9, 3234, now()),
  ('-5.374,105.299', 'itera-lampung', 'driving-car', 12, 3359, now()),
  ('-5.374,105.299', 'itera-gerbang-utama', 'walking', 42, 3110, now()),
  ('-5.374,105.299', 'itera-gerbang-utama', 'motorcycle', 9, 3234, now()),
  ('-5.374,105.299', 'itera-gerbang-utama', 'driving-car', 12, 3359, now()),
  ('-5.374,105.299', 'itera-simpang-wayhuwi', 'walking', 40, 2951, now()),
  ('-5.374,105.299', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3069, now()),
  ('-5.374,105.299', 'itera-simpang-wayhuwi', 'driving-car', 11, 3187, now()),
  ('-5.374,105.299', 'itera-akses-sabahbalau', 'walking', 43, 3179, now()),
  ('-5.374,105.299', 'itera-akses-sabahbalau', 'motorcycle', 9, 3306, now()),
  ('-5.374,105.299', 'itera-akses-sabahbalau', 'driving-car', 12, 3433, now()),
  ('-5.361,105.328', 'itera-lampung', 'walking', 26, 1905, now()),
  ('-5.361,105.328', 'itera-lampung', 'motorcycle', 5, 1981, now()),
  ('-5.361,105.328', 'itera-lampung', 'driving-car', 7, 2057, now()),
  ('-5.361,105.328', 'itera-gerbang-utama', 'walking', 26, 1905, now()),
  ('-5.361,105.328', 'itera-gerbang-utama', 'motorcycle', 5, 1981, now()),
  ('-5.361,105.328', 'itera-gerbang-utama', 'driving-car', 7, 2057, now()),
  ('-5.361,105.328', 'itera-simpang-wayhuwi', 'walking', 40, 2938, now()),
  ('-5.361,105.328', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3055, now()),
  ('-5.361,105.328', 'itera-simpang-wayhuwi', 'driving-car', 11, 3173, now()),
  ('-5.361,105.328', 'itera-akses-sabahbalau', 'walking', 19, 1356, now()),
  ('-5.361,105.328', 'itera-akses-sabahbalau', 'motorcycle', 4, 1411, now()),
  ('-5.361,105.328', 'itera-akses-sabahbalau', 'driving-car', 5, 1465, now()),
  ('-5.361,105.300', 'itera-lampung', 'walking', 28, 2073, now()),
  ('-5.361,105.300', 'itera-lampung', 'motorcycle', 6, 2155, now()),
  ('-5.361,105.300', 'itera-lampung', 'driving-car', 8, 2238, now()),
  ('-5.361,105.300', 'itera-gerbang-utama', 'walking', 28, 2073, now()),
  ('-5.361,105.300', 'itera-gerbang-utama', 'motorcycle', 6, 2155, now()),
  ('-5.361,105.300', 'itera-gerbang-utama', 'driving-car', 8, 2238, now()),
  ('-5.361,105.300', 'itera-simpang-wayhuwi', 'walking', 19, 1370, now()),
  ('-5.361,105.300', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1425, now()),
  ('-5.361,105.300', 'itera-simpang-wayhuwi', 'driving-car', 5, 1480, now()),
  ('-5.361,105.300', 'itera-akses-sabahbalau', 'walking', 41, 3068, now()),
  ('-5.361,105.300', 'itera-akses-sabahbalau', 'motorcycle', 8, 3190, now()),
  ('-5.361,105.300', 'itera-akses-sabahbalau', 'driving-car', 12, 3313, now()),
  ('-5.369,105.294', 'itera-lampung', 'walking', 43, 3190, now()),
  ('-5.369,105.294', 'itera-lampung', 'motorcycle', 9, 3318, now()),
  ('-5.369,105.294', 'itera-lampung', 'driving-car', 12, 3445, now()),
  ('-5.369,105.294', 'itera-gerbang-utama', 'walking', 43, 3190, now()),
  ('-5.369,105.294', 'itera-gerbang-utama', 'motorcycle', 9, 3318, now()),
  ('-5.369,105.294', 'itera-gerbang-utama', 'driving-car', 12, 3445, now()),
  ('-5.369,105.294', 'itera-simpang-wayhuwi', 'walking', 37, 2713, now()),
  ('-5.369,105.294', 'itera-simpang-wayhuwi', 'motorcycle', 8, 2821, now()),
  ('-5.369,105.294', 'itera-simpang-wayhuwi', 'driving-car', 10, 2930, now()),
  ('-5.369,105.294', 'itera-akses-sabahbalau', 'walking', 50, 3688, now()),
  ('-5.369,105.294', 'itera-akses-sabahbalau', 'motorcycle', 10, 3835, now()),
  ('-5.369,105.294', 'itera-akses-sabahbalau', 'driving-car', 14, 3983, now()),
  ('-5.354,105.315', 'itera-lampung', 'walking', 8, 573, now()),
  ('-5.354,105.315', 'itera-lampung', 'motorcycle', 2, 595, now()),
  ('-5.354,105.315', 'itera-lampung', 'driving-car', 3, 618, now()),
  ('-5.354,105.315', 'itera-gerbang-utama', 'walking', 8, 573, now()),
  ('-5.354,105.315', 'itera-gerbang-utama', 'motorcycle', 2, 595, now()),
  ('-5.354,105.315', 'itera-gerbang-utama', 'driving-car', 3, 618, now()),
  ('-5.354,105.315', 'itera-simpang-wayhuwi', 'walking', 13, 955, now()),
  ('-5.354,105.315', 'itera-simpang-wayhuwi', 'motorcycle', 3, 993, now()),
  ('-5.354,105.315', 'itera-simpang-wayhuwi', 'driving-car', 4, 1031, now()),
  ('-5.354,105.315', 'itera-akses-sabahbalau', 'walking', 28, 2088, now()),
  ('-5.354,105.315', 'itera-akses-sabahbalau', 'motorcycle', 6, 2171, now()),
  ('-5.354,105.315', 'itera-akses-sabahbalau', 'driving-car', 8, 2255, now()),
  ('-5.355,105.315', 'itera-lampung', 'walking', 7, 505, now()),
  ('-5.355,105.315', 'itera-lampung', 'motorcycle', 2, 525, now()),
  ('-5.355,105.315', 'itera-lampung', 'driving-car', 2, 545, now()),
  ('-5.355,105.315', 'itera-gerbang-utama', 'walking', 7, 505, now()),
  ('-5.355,105.315', 'itera-gerbang-utama', 'motorcycle', 2, 525, now()),
  ('-5.355,105.315', 'itera-gerbang-utama', 'driving-car', 2, 545, now()),
  ('-5.355,105.315', 'itera-simpang-wayhuwi', 'walking', 13, 956, now()),
  ('-5.355,105.315', 'itera-simpang-wayhuwi', 'motorcycle', 3, 995, now()),
  ('-5.355,105.315', 'itera-simpang-wayhuwi', 'driving-car', 4, 1033, now()),
  ('-5.355,105.315', 'itera-akses-sabahbalau', 'walking', 27, 2023, now()),
  ('-5.355,105.315', 'itera-akses-sabahbalau', 'motorcycle', 6, 2103, now()),
  ('-5.355,105.315', 'itera-akses-sabahbalau', 'driving-car', 8, 2184, now()),
  ('-5.358,105.336', 'itera-lampung', 'walking', 40, 2950, now()),
  ('-5.358,105.336', 'itera-lampung', 'motorcycle', 8, 3068, now()),
  ('-5.358,105.336', 'itera-lampung', 'driving-car', 11, 3186, now()),
  ('-5.358,105.336', 'itera-gerbang-utama', 'walking', 40, 2950, now()),
  ('-5.358,105.336', 'itera-gerbang-utama', 'motorcycle', 8, 3068, now()),
  ('-5.358,105.336', 'itera-gerbang-utama', 'driving-car', 11, 3186, now()),
  ('-5.358,105.336', 'itera-simpang-wayhuwi', 'walking', 53, 3909, now()),
  ('-5.358,105.336', 'itera-simpang-wayhuwi', 'motorcycle', 11, 4065, now()),
  ('-5.358,105.336', 'itera-simpang-wayhuwi', 'driving-car', 15, 4221, now()),
  ('-5.358,105.336', 'itera-akses-sabahbalau', 'walking', 34, 2531, now()),
  ('-5.358,105.336', 'itera-akses-sabahbalau', 'motorcycle', 7, 2633, now()),
  ('-5.358,105.336', 'itera-akses-sabahbalau', 'driving-car', 10, 2734, now()),
  ('-5.354,105.305', 'itera-lampung', 'walking', 20, 1468, now()),
  ('-5.354,105.305', 'itera-lampung', 'motorcycle', 4, 1526, now()),
  ('-5.354,105.305', 'itera-lampung', 'driving-car', 6, 1585, now()),
  ('-5.354,105.305', 'itera-gerbang-utama', 'walking', 20, 1468, now()),
  ('-5.354,105.305', 'itera-gerbang-utama', 'motorcycle', 4, 1526, now()),
  ('-5.354,105.305', 'itera-gerbang-utama', 'driving-car', 6, 1585, now()),
  ('-5.354,105.305', 'itera-simpang-wayhuwi', 'walking', 6, 414, now()),
  ('-5.354,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 2, 430, now()),
  ('-5.354,105.305', 'itera-simpang-wayhuwi', 'driving-car', 2, 447, now()),
  ('-5.354,105.305', 'itera-akses-sabahbalau', 'walking', 40, 2949, now()),
  ('-5.354,105.305', 'itera-akses-sabahbalau', 'motorcycle', 8, 3067, now()),
  ('-5.354,105.305', 'itera-akses-sabahbalau', 'driving-car', 11, 3185, now()),
  ('-5.351,105.305', 'itera-lampung', 'walking', 24, 1771, now()),
  ('-5.351,105.305', 'itera-lampung', 'motorcycle', 5, 1842, now()),
  ('-5.351,105.305', 'itera-lampung', 'driving-car', 7, 1913, now()),
  ('-5.351,105.305', 'itera-gerbang-utama', 'walking', 24, 1771, now()),
  ('-5.351,105.305', 'itera-gerbang-utama', 'motorcycle', 5, 1842, now()),
  ('-5.351,105.305', 'itera-gerbang-utama', 'driving-car', 7, 1913, now()),
  ('-5.351,105.305', 'itera-simpang-wayhuwi', 'walking', 11, 763, now()),
  ('-5.351,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 2, 793, now()),
  ('-5.351,105.305', 'itera-simpang-wayhuwi', 'driving-car', 3, 824, now()),
  ('-5.351,105.305', 'itera-akses-sabahbalau', 'walking', 45, 3308, now()),
  ('-5.351,105.305', 'itera-akses-sabahbalau', 'motorcycle', 9, 3440, now()),
  ('-5.351,105.305', 'itera-akses-sabahbalau', 'driving-car', 12, 3572, now()),
  ('-5.351,105.310', 'itera-lampung', 'walking', 17, 1235, now()),
  ('-5.351,105.310', 'itera-lampung', 'motorcycle', 4, 1284, now()),
  ('-5.351,105.310', 'itera-lampung', 'driving-car', 5, 1334, now()),
  ('-5.351,105.310', 'itera-gerbang-utama', 'walking', 17, 1235, now()),
  ('-5.351,105.310', 'itera-gerbang-utama', 'motorcycle', 4, 1284, now()),
  ('-5.351,105.310', 'itera-gerbang-utama', 'driving-car', 5, 1334, now()),
  ('-5.351,105.310', 'itera-simpang-wayhuwi', 'walking', 9, 619, now()),
  ('-5.351,105.310', 'itera-simpang-wayhuwi', 'motorcycle', 2, 644, now()),
  ('-5.351,105.310', 'itera-simpang-wayhuwi', 'driving-car', 3, 668, now()),
  ('-5.351,105.310', 'itera-akses-sabahbalau', 'walking', 38, 2821, now()),
  ('-5.351,105.310', 'itera-akses-sabahbalau', 'motorcycle', 8, 2934, now()),
  ('-5.351,105.310', 'itera-akses-sabahbalau', 'driving-car', 11, 3047, now()),
  ('-5.372,105.300', 'itera-lampung', 'walking', 38, 2825, now()),
  ('-5.372,105.300', 'itera-lampung', 'motorcycle', 8, 2938, now()),
  ('-5.372,105.300', 'itera-lampung', 'driving-car', 11, 3051, now()),
  ('-5.372,105.300', 'itera-gerbang-utama', 'walking', 38, 2825, now()),
  ('-5.372,105.300', 'itera-gerbang-utama', 'motorcycle', 8, 2938, now()),
  ('-5.372,105.300', 'itera-gerbang-utama', 'driving-car', 11, 3051, now()),
  ('-5.372,105.300', 'itera-simpang-wayhuwi', 'walking', 36, 2640, now()),
  ('-5.372,105.300', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2746, now()),
  ('-5.372,105.300', 'itera-simpang-wayhuwi', 'driving-car', 10, 2851, now()),
  ('-5.372,105.300', 'itera-akses-sabahbalau', 'walking', 40, 2996, now()),
  ('-5.372,105.300', 'itera-akses-sabahbalau', 'motorcycle', 8, 3116, now()),
  ('-5.372,105.300', 'itera-akses-sabahbalau', 'driving-car', 11, 3236, now()),
  ('-5.352,105.317', 'itera-lampung', 'walking', 12, 863, now()),
  ('-5.352,105.317', 'itera-lampung', 'motorcycle', 3, 897, now()),
  ('-5.352,105.317', 'itera-lampung', 'driving-car', 4, 932, now()),
  ('-5.352,105.317', 'itera-gerbang-utama', 'walking', 12, 863, now()),
  ('-5.352,105.317', 'itera-gerbang-utama', 'motorcycle', 3, 897, now()),
  ('-5.352,105.317', 'itera-gerbang-utama', 'driving-car', 4, 932, now()),
  ('-5.352,105.317', 'itera-simpang-wayhuwi', 'walking', 17, 1236, now()),
  ('-5.352,105.317', 'itera-simpang-wayhuwi', 'motorcycle', 4, 1286, now()),
  ('-5.352,105.317', 'itera-simpang-wayhuwi', 'driving-car', 5, 1335, now()),
  ('-5.352,105.317', 'itera-akses-sabahbalau', 'walking', 30, 2248, now()),
  ('-5.352,105.317', 'itera-akses-sabahbalau', 'motorcycle', 6, 2337, now()),
  ('-5.352,105.317', 'itera-akses-sabahbalau', 'driving-car', 9, 2427, now()),
  ('-5.375,105.299', 'itera-lampung', 'walking', 42, 3123, now()),
  ('-5.375,105.299', 'itera-lampung', 'motorcycle', 9, 3247, now()),
  ('-5.375,105.299', 'itera-lampung', 'driving-car', 12, 3372, now()),
  ('-5.375,105.299', 'itera-gerbang-utama', 'walking', 42, 3123, now()),
  ('-5.375,105.299', 'itera-gerbang-utama', 'motorcycle', 9, 3247, now()),
  ('-5.375,105.299', 'itera-gerbang-utama', 'driving-car', 12, 3372, now()),
  ('-5.375,105.299', 'itera-simpang-wayhuwi', 'walking', 40, 2980, now()),
  ('-5.375,105.299', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3099, now()),
  ('-5.375,105.299', 'itera-simpang-wayhuwi', 'driving-car', 11, 3218, now()),
  ('-5.375,105.299', 'itera-akses-sabahbalau', 'walking', 43, 3165, now()),
  ('-5.375,105.299', 'itera-akses-sabahbalau', 'motorcycle', 9, 3292, now()),
  ('-5.375,105.299', 'itera-akses-sabahbalau', 'driving-car', 12, 3418, now()),
  ('-5.362,105.324', 'itera-lampung', 'walking', 19, 1365, now()),
  ('-5.362,105.324', 'itera-lampung', 'motorcycle', 4, 1420, now()),
  ('-5.362,105.324', 'itera-lampung', 'driving-car', 5, 1474, now()),
  ('-5.362,105.324', 'itera-gerbang-utama', 'walking', 19, 1365, now()),
  ('-5.362,105.324', 'itera-gerbang-utama', 'motorcycle', 4, 1420, now()),
  ('-5.362,105.324', 'itera-gerbang-utama', 'driving-car', 5, 1474, now()),
  ('-5.362,105.324', 'itera-simpang-wayhuwi', 'walking', 33, 2418, now()),
  ('-5.362,105.324', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2514, now()),
  ('-5.362,105.324', 'itera-simpang-wayhuwi', 'driving-car', 9, 2611, now()),
  ('-5.362,105.324', 'itera-akses-sabahbalau', 'walking', 12, 898, now()),
  ('-5.362,105.324', 'itera-akses-sabahbalau', 'motorcycle', 3, 933, now()),
  ('-5.362,105.324', 'itera-akses-sabahbalau', 'driving-car', 4, 969, now()),
  ('-5.368,105.293', 'itera-lampung', 'walking', 45, 3319, now()),
  ('-5.368,105.293', 'itera-lampung', 'motorcycle', 9, 3452, now()),
  ('-5.368,105.293', 'itera-lampung', 'driving-car', 12, 3584, now()),
  ('-5.368,105.293', 'itera-gerbang-utama', 'walking', 45, 3319, now()),
  ('-5.368,105.293', 'itera-gerbang-utama', 'motorcycle', 9, 3452, now()),
  ('-5.368,105.293', 'itera-gerbang-utama', 'driving-car', 12, 3584, now()),
  ('-5.368,105.293', 'itera-simpang-wayhuwi', 'walking', 38, 2786, now()),
  ('-5.368,105.293', 'itera-simpang-wayhuwi', 'motorcycle', 8, 2898, now()),
  ('-5.368,105.293', 'itera-simpang-wayhuwi', 'driving-car', 11, 3009, now()),
  ('-5.368,105.293', 'itera-akses-sabahbalau', 'walking', 52, 3871, now()),
  ('-5.368,105.293', 'itera-akses-sabahbalau', 'motorcycle', 11, 4026, now()),
  ('-5.368,105.293', 'itera-akses-sabahbalau', 'driving-car', 14, 4181, now()),
  ('-5.362,105.326', 'itera-lampung', 'walking', 22, 1619, now()),
  ('-5.362,105.326', 'itera-lampung', 'motorcycle', 5, 1684, now()),
  ('-5.362,105.326', 'itera-lampung', 'driving-car', 6, 1748, now()),
  ('-5.362,105.326', 'itera-gerbang-utama', 'walking', 22, 1619, now()),
  ('-5.362,105.326', 'itera-gerbang-utama', 'motorcycle', 5, 1684, now()),
  ('-5.362,105.326', 'itera-gerbang-utama', 'driving-car', 6, 1748, now()),
  ('-5.362,105.326', 'itera-simpang-wayhuwi', 'walking', 36, 2668, now()),
  ('-5.362,105.326', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2774, now()),
  ('-5.362,105.326', 'itera-simpang-wayhuwi', 'driving-car', 10, 2881, now()),
  ('-5.362,105.326', 'itera-akses-sabahbalau', 'walking', 14, 1025, now()),
  ('-5.362,105.326', 'itera-akses-sabahbalau', 'motorcycle', 3, 1066, now()),
  ('-5.362,105.326', 'itera-akses-sabahbalau', 'driving-car', 4, 1107, now()),
  ('-5.374,105.293', 'itera-lampung', 'walking', 50, 3731, now()),
  ('-5.374,105.293', 'itera-lampung', 'motorcycle', 10, 3881, now()),
  ('-5.374,105.293', 'itera-lampung', 'driving-car', 14, 4030, now()),
  ('-5.374,105.293', 'itera-gerbang-utama', 'walking', 50, 3731, now()),
  ('-5.374,105.293', 'itera-gerbang-utama', 'motorcycle', 10, 3881, now()),
  ('-5.374,105.293', 'itera-gerbang-utama', 'driving-car', 14, 4030, now()),
  ('-5.374,105.293', 'itera-simpang-wayhuwi', 'walking', 45, 3349, now()),
  ('-5.374,105.293', 'itera-simpang-wayhuwi', 'motorcycle', 9, 3483, now()),
  ('-5.374,105.293', 'itera-simpang-wayhuwi', 'driving-car', 13, 3617, now()),
  ('-5.374,105.293', 'itera-akses-sabahbalau', 'walking', 54, 4014, now()),
  ('-5.374,105.293', 'itera-akses-sabahbalau', 'motorcycle', 11, 4174, now()),
  ('-5.374,105.293', 'itera-akses-sabahbalau', 'driving-car', 15, 4335, now()),
  ('-5.354,105.334', 'itera-lampung', 'walking', 37, 2741, now()),
  ('-5.354,105.334', 'itera-lampung', 'motorcycle', 8, 2851, now()),
  ('-5.354,105.334', 'itera-lampung', 'driving-car', 10, 2961, now()),
  ('-5.354,105.334', 'itera-gerbang-utama', 'walking', 37, 2741, now()),
  ('-5.354,105.334', 'itera-gerbang-utama', 'motorcycle', 8, 2851, now()),
  ('-5.354,105.334', 'itera-gerbang-utama', 'driving-car', 10, 2961, now()),
  ('-5.354,105.334', 'itera-simpang-wayhuwi', 'walking', 49, 3628, now()),
  ('-5.354,105.334', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3773, now()),
  ('-5.354,105.334', 'itera-simpang-wayhuwi', 'driving-car', 14, 3918, now()),
  ('-5.354,105.334', 'itera-akses-sabahbalau', 'walking', 35, 2624, now()),
  ('-5.354,105.334', 'itera-akses-sabahbalau', 'motorcycle', 7, 2729, now()),
  ('-5.354,105.334', 'itera-akses-sabahbalau', 'driving-car', 10, 2834, now()),
  ('-5.349,105.305', 'itera-lampung', 'walking', 25, 1841, now()),
  ('-5.349,105.305', 'itera-lampung', 'motorcycle', 5, 1915, now()),
  ('-5.349,105.305', 'itera-lampung', 'driving-car', 7, 1989, now()),
  ('-5.349,105.305', 'itera-gerbang-utama', 'walking', 25, 1841, now()),
  ('-5.349,105.305', 'itera-gerbang-utama', 'motorcycle', 5, 1915, now()),
  ('-5.349,105.305', 'itera-gerbang-utama', 'driving-car', 7, 1989, now()),
  ('-5.349,105.305', 'itera-simpang-wayhuwi', 'walking', 12, 874, now()),
  ('-5.349,105.305', 'itera-simpang-wayhuwi', 'motorcycle', 3, 909, now()),
  ('-5.349,105.305', 'itera-simpang-wayhuwi', 'driving-car', 4, 944, now()),
  ('-5.349,105.305', 'itera-akses-sabahbalau', 'walking', 46, 3398, now()),
  ('-5.349,105.305', 'itera-akses-sabahbalau', 'motorcycle', 9, 3533, now()),
  ('-5.349,105.305', 'itera-akses-sabahbalau', 'driving-car', 13, 3669, now()),
  ('-5.357,105.328', 'itera-lampung', 'walking', 26, 1881, now()),
  ('-5.357,105.328', 'itera-lampung', 'motorcycle', 5, 1957, now()),
  ('-5.357,105.328', 'itera-lampung', 'driving-car', 7, 2032, now()),
  ('-5.357,105.328', 'itera-gerbang-utama', 'walking', 26, 1881, now()),
  ('-5.357,105.328', 'itera-gerbang-utama', 'motorcycle', 5, 1957, now()),
  ('-5.357,105.328', 'itera-gerbang-utama', 'driving-car', 7, 2032, now()),
  ('-5.357,105.328', 'itera-simpang-wayhuwi', 'walking', 38, 2838, now()),
  ('-5.357,105.328', 'itera-simpang-wayhuwi', 'motorcycle', 8, 2951, now()),
  ('-5.357,105.328', 'itera-simpang-wayhuwi', 'driving-car', 11, 3065, now()),
  ('-5.357,105.328', 'itera-akses-sabahbalau', 'walking', 24, 1785, now()),
  ('-5.357,105.328', 'itera-akses-sabahbalau', 'motorcycle', 5, 1856, now()),
  ('-5.357,105.328', 'itera-akses-sabahbalau', 'driving-car', 7, 1928, now()),
  ('-5.374,105.294', 'itera-lampung', 'walking', 49, 3646, now()),
  ('-5.374,105.294', 'itera-lampung', 'motorcycle', 10, 3792, now()),
  ('-5.374,105.294', 'itera-lampung', 'driving-car', 14, 3938, now()),
  ('-5.374,105.294', 'itera-gerbang-utama', 'walking', 49, 3646, now()),
  ('-5.374,105.294', 'itera-gerbang-utama', 'motorcycle', 10, 3792, now()),
  ('-5.374,105.294', 'itera-gerbang-utama', 'driving-car', 14, 3938, now()),
  ('-5.374,105.294', 'itera-simpang-wayhuwi', 'walking', 45, 3316, now()),
  ('-5.374,105.294', 'itera-simpang-wayhuwi', 'motorcycle', 9, 3449, now()),
  ('-5.374,105.294', 'itera-simpang-wayhuwi', 'driving-car', 12, 3582, now()),
  ('-5.374,105.294', 'itera-akses-sabahbalau', 'walking', 52, 3869, now()),
  ('-5.374,105.294', 'itera-akses-sabahbalau', 'motorcycle', 11, 4024, now()),
  ('-5.374,105.294', 'itera-akses-sabahbalau', 'driving-car', 14, 4178, now()),
  ('-5.348,105.307', 'itera-lampung', 'walking', 25, 1839, now()),
  ('-5.348,105.307', 'itera-lampung', 'motorcycle', 5, 1912, now()),
  ('-5.348,105.307', 'itera-lampung', 'driving-car', 7, 1986, now()),
  ('-5.348,105.307', 'itera-gerbang-utama', 'walking', 25, 1839, now()),
  ('-5.348,105.307', 'itera-gerbang-utama', 'motorcycle', 5, 1912, now()),
  ('-5.348,105.307', 'itera-gerbang-utama', 'driving-car', 7, 1986, now()),
  ('-5.348,105.307', 'itera-simpang-wayhuwi', 'walking', 14, 1045, now()),
  ('-5.348,105.307', 'itera-simpang-wayhuwi', 'motorcycle', 3, 1087, now()),
  ('-5.348,105.307', 'itera-simpang-wayhuwi', 'driving-car', 4, 1129, now()),
  ('-5.348,105.307', 'itera-akses-sabahbalau', 'walking', 46, 3425, now()),
  ('-5.348,105.307', 'itera-akses-sabahbalau', 'motorcycle', 9, 3562, now()),
  ('-5.348,105.307', 'itera-akses-sabahbalau', 'driving-car', 13, 3699, now()),
  ('-5.361,105.326', 'itera-lampung', 'walking', 21, 1554, now()),
  ('-5.361,105.326', 'itera-lampung', 'motorcycle', 5, 1616, now()),
  ('-5.361,105.326', 'itera-lampung', 'driving-car', 6, 1678, now()),
  ('-5.361,105.326', 'itera-gerbang-utama', 'walking', 21, 1554, now()),
  ('-5.361,105.326', 'itera-gerbang-utama', 'motorcycle', 5, 1616, now()),
  ('-5.361,105.326', 'itera-gerbang-utama', 'driving-car', 6, 1678, now()),
  ('-5.361,105.326', 'itera-simpang-wayhuwi', 'walking', 35, 2596, now()),
  ('-5.361,105.326', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2700, now()),
  ('-5.361,105.326', 'itera-simpang-wayhuwi', 'driving-car', 10, 2804, now()),
  ('-5.361,105.326', 'itera-akses-sabahbalau', 'walking', 15, 1110, now()),
  ('-5.361,105.326', 'itera-akses-sabahbalau', 'motorcycle', 3, 1154, now()),
  ('-5.361,105.326', 'itera-akses-sabahbalau', 'driving-car', 4, 1199, now()),
  ('-5.360,105.324', 'itera-lampung', 'walking', 17, 1250, now()),
  ('-5.360,105.324', 'itera-lampung', 'motorcycle', 4, 1300, now()),
  ('-5.360,105.324', 'itera-lampung', 'driving-car', 5, 1350, now()),
  ('-5.360,105.324', 'itera-gerbang-utama', 'walking', 17, 1250, now()),
  ('-5.360,105.324', 'itera-gerbang-utama', 'motorcycle', 4, 1300, now()),
  ('-5.360,105.324', 'itera-gerbang-utama', 'driving-car', 5, 1350, now()),
  ('-5.360,105.324', 'itera-simpang-wayhuwi', 'walking', 31, 2273, now()),
  ('-5.360,105.324', 'itera-simpang-wayhuwi', 'motorcycle', 6, 2363, now()),
  ('-5.360,105.324', 'itera-simpang-wayhuwi', 'driving-car', 9, 2454, now()),
  ('-5.360,105.324', 'itera-akses-sabahbalau', 'walking', 17, 1225, now()),
  ('-5.360,105.324', 'itera-akses-sabahbalau', 'motorcycle', 4, 1274, now()),
  ('-5.360,105.324', 'itera-akses-sabahbalau', 'driving-car', 5, 1323, now()),
  ('-5.363,105.325', 'itera-lampung', 'walking', 22, 1623, now()),
  ('-5.363,105.325', 'itera-lampung', 'motorcycle', 5, 1687, now()),
  ('-5.363,105.325', 'itera-lampung', 'driving-car', 6, 1752, now()),
  ('-5.363,105.325', 'itera-gerbang-utama', 'walking', 22, 1623, now()),
  ('-5.363,105.325', 'itera-gerbang-utama', 'motorcycle', 5, 1687, now()),
  ('-5.363,105.325', 'itera-gerbang-utama', 'driving-car', 6, 1752, now()),
  ('-5.363,105.325', 'itera-simpang-wayhuwi', 'walking', 36, 2675, now()),
  ('-5.363,105.325', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2782, now()),
  ('-5.363,105.325', 'itera-simpang-wayhuwi', 'driving-car', 10, 2889, now()),
  ('-5.363,105.325', 'itera-akses-sabahbalau', 'walking', 13, 904, now()),
  ('-5.363,105.325', 'itera-akses-sabahbalau', 'motorcycle', 3, 940, now()),
  ('-5.363,105.325', 'itera-akses-sabahbalau', 'driving-car', 4, 976, now()),
  ('-5.368,105.297', 'itera-lampung', 'walking', 38, 2830, now()),
  ('-5.368,105.297', 'itera-lampung', 'motorcycle', 8, 2943, now()),
  ('-5.368,105.297', 'itera-lampung', 'driving-car', 11, 3056, now()),
  ('-5.368,105.297', 'itera-gerbang-utama', 'walking', 38, 2830, now()),
  ('-5.368,105.297', 'itera-gerbang-utama', 'motorcycle', 8, 2943, now()),
  ('-5.368,105.297', 'itera-gerbang-utama', 'driving-car', 11, 3056, now()),
  ('-5.368,105.297', 'itera-simpang-wayhuwi', 'walking', 32, 2380, now()),
  ('-5.368,105.297', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2475, now()),
  ('-5.368,105.297', 'itera-simpang-wayhuwi', 'driving-car', 9, 2570, now()),
  ('-5.368,105.297', 'itera-akses-sabahbalau', 'walking', 45, 3360, now()),
  ('-5.368,105.297', 'itera-akses-sabahbalau', 'motorcycle', 9, 3494, now()),
  ('-5.368,105.297', 'itera-akses-sabahbalau', 'driving-car', 13, 3629, now()),
  ('-5.353,105.314', 'itera-lampung', 'walking', 11, 758, now()),
  ('-5.353,105.314', 'itera-lampung', 'motorcycle', 2, 788, now()),
  ('-5.353,105.314', 'itera-lampung', 'driving-car', 3, 818, now()),
  ('-5.353,105.314', 'itera-gerbang-utama', 'walking', 11, 758, now()),
  ('-5.353,105.314', 'itera-gerbang-utama', 'motorcycle', 2, 788, now()),
  ('-5.353,105.314', 'itera-gerbang-utama', 'driving-car', 3, 818, now()),
  ('-5.353,105.314', 'itera-simpang-wayhuwi', 'walking', 13, 919, now()),
  ('-5.353,105.314', 'itera-simpang-wayhuwi', 'motorcycle', 3, 956, now()),
  ('-5.353,105.314', 'itera-simpang-wayhuwi', 'driving-car', 4, 992, now()),
  ('-5.353,105.314', 'itera-akses-sabahbalau', 'walking', 31, 2285, now()),
  ('-5.353,105.314', 'itera-akses-sabahbalau', 'motorcycle', 6, 2376, now()),
  ('-5.353,105.314', 'itera-akses-sabahbalau', 'driving-car', 9, 2468, now()),
  ('-5.356,105.336', 'itera-lampung', 'walking', 41, 3010, now()),
  ('-5.356,105.336', 'itera-lampung', 'motorcycle', 8, 3130, now()),
  ('-5.356,105.336', 'itera-lampung', 'driving-car', 11, 3251, now()),
  ('-5.356,105.336', 'itera-gerbang-utama', 'walking', 41, 3010, now()),
  ('-5.356,105.336', 'itera-gerbang-utama', 'motorcycle', 8, 3130, now()),
  ('-5.356,105.336', 'itera-gerbang-utama', 'driving-car', 11, 3251, now()),
  ('-5.356,105.336', 'itera-simpang-wayhuwi', 'walking', 53, 3934, now()),
  ('-5.356,105.336', 'itera-simpang-wayhuwi', 'motorcycle', 11, 4091, now()),
  ('-5.356,105.336', 'itera-simpang-wayhuwi', 'driving-car', 15, 4248, now()),
  ('-5.356,105.336', 'itera-akses-sabahbalau', 'walking', 37, 2709, now()),
  ('-5.356,105.336', 'itera-akses-sabahbalau', 'motorcycle', 8, 2817, now()),
  ('-5.356,105.336', 'itera-akses-sabahbalau', 'driving-car', 10, 2925, now()),
  ('-5.368,105.295', 'itera-lampung', 'walking', 41, 3041, now()),
  ('-5.368,105.295', 'itera-lampung', 'motorcycle', 8, 3163, now()),
  ('-5.368,105.295', 'itera-lampung', 'driving-car', 11, 3285, now()),
  ('-5.368,105.295', 'itera-gerbang-utama', 'walking', 41, 3041, now()),
  ('-5.368,105.295', 'itera-gerbang-utama', 'motorcycle', 8, 3163, now()),
  ('-5.368,105.295', 'itera-gerbang-utama', 'driving-car', 11, 3285, now()),
  ('-5.368,105.295', 'itera-simpang-wayhuwi', 'walking', 35, 2566, now()),
  ('-5.368,105.295', 'itera-simpang-wayhuwi', 'motorcycle', 7, 2669, now()),
  ('-5.368,105.295', 'itera-simpang-wayhuwi', 'driving-car', 10, 2772, now()),
  ('-5.368,105.295', 'itera-akses-sabahbalau', 'walking', 48, 3561, now()),
  ('-5.368,105.295', 'itera-akses-sabahbalau', 'motorcycle', 10, 3704, now()),
  ('-5.368,105.295', 'itera-akses-sabahbalau', 'driving-car', 13, 3846, now()),
  ('-5.361,105.320', 'itera-lampung', 'walking', 12, 833, now()),
  ('-5.361,105.320', 'itera-lampung', 'motorcycle', 3, 866, now()),
  ('-5.361,105.320', 'itera-lampung', 'driving-car', 3, 899, now()),
  ('-5.361,105.320', 'itera-gerbang-utama', 'walking', 12, 833, now()),
  ('-5.361,105.320', 'itera-gerbang-utama', 'motorcycle', 3, 866, now()),
  ('-5.361,105.320', 'itera-gerbang-utama', 'driving-car', 3, 899, now()),
  ('-5.361,105.320', 'itera-simpang-wayhuwi', 'walking', 26, 1885, now()),
  ('-5.361,105.320', 'itera-simpang-wayhuwi', 'motorcycle', 5, 1960, now()),
  ('-5.361,105.320', 'itera-simpang-wayhuwi', 'driving-car', 7, 2036, now()),
  ('-5.361,105.320', 'itera-akses-sabahbalau', 'walking', 13, 969, now()),
  ('-5.361,105.320', 'itera-akses-sabahbalau', 'motorcycle', 3, 1008, now()),
  ('-5.361,105.320', 'itera-akses-sabahbalau', 'driving-car', 4, 1046, now()),
  ('-5.353,105.333', 'itera-lampung', 'walking', 36, 2686, now()),
  ('-5.353,105.333', 'itera-lampung', 'motorcycle', 7, 2794, now()),
  ('-5.353,105.333', 'itera-lampung', 'driving-car', 10, 2901, now()),
  ('-5.353,105.333', 'itera-gerbang-utama', 'walking', 36, 2686, now()),
  ('-5.353,105.333', 'itera-gerbang-utama', 'motorcycle', 7, 2794, now()),
  ('-5.353,105.333', 'itera-gerbang-utama', 'driving-car', 10, 2901, now()),
  ('-5.353,105.333', 'itera-simpang-wayhuwi', 'walking', 47, 3518, now()),
  ('-5.353,105.333', 'itera-simpang-wayhuwi', 'motorcycle', 10, 3658, now()),
  ('-5.353,105.333', 'itera-simpang-wayhuwi', 'driving-car', 13, 3799, now()),
  ('-5.353,105.333', 'itera-akses-sabahbalau', 'walking', 37, 2740, now()),
  ('-5.353,105.333', 'itera-akses-sabahbalau', 'motorcycle', 8, 2850, now()),
  ('-5.353,105.333', 'itera-akses-sabahbalau', 'driving-car', 10, 2959, now()),
  ('-5.359,105.303', 'itera-lampung', 'walking', 23, 1700, now()),
  ('-5.359,105.303', 'itera-lampung', 'motorcycle', 5, 1768, now()),
  ('-5.359,105.303', 'itera-lampung', 'driving-car', 7, 1836, now()),
  ('-5.359,105.303', 'itera-gerbang-utama', 'walking', 23, 1700, now()),
  ('-5.359,105.303', 'itera-gerbang-utama', 'motorcycle', 5, 1768, now()),
  ('-5.359,105.303', 'itera-gerbang-utama', 'driving-car', 7, 1836, now()),
  ('-5.359,105.303', 'itera-simpang-wayhuwi', 'walking', 13, 918, now()),
  ('-5.359,105.303', 'itera-simpang-wayhuwi', 'motorcycle', 3, 954, now()),
  ('-5.359,105.303', 'itera-simpang-wayhuwi', 'driving-car', 4, 991, now()),
  ('-5.359,105.303', 'itera-akses-sabahbalau', 'walking', 39, 2865, now()),
  ('-5.359,105.303', 'itera-akses-sabahbalau', 'motorcycle', 8, 2980, now()),
  ('-5.359,105.303', 'itera-akses-sabahbalau', 'driving-car', 11, 3094, now()),
  ('-5.371,105.294', 'itera-lampung', 'walking', 45, 3351, now()),
  ('-5.371,105.294', 'itera-lampung', 'motorcycle', 9, 3485, now()),
  ('-5.371,105.294', 'itera-lampung', 'driving-car', 13, 3619, now()),
  ('-5.371,105.294', 'itera-gerbang-utama', 'walking', 45, 3351, now()),
  ('-5.371,105.294', 'itera-gerbang-utama', 'motorcycle', 9, 3485, now()),
  ('-5.371,105.294', 'itera-gerbang-utama', 'driving-car', 13, 3619, now()),
  ('-5.371,105.294', 'itera-simpang-wayhuwi', 'walking', 39, 2923, now()),
  ('-5.371,105.294', 'itera-simpang-wayhuwi', 'motorcycle', 8, 3039, now()),
  ('-5.371,105.294', 'itera-simpang-wayhuwi', 'driving-car', 11, 3156, now()),
  ('-5.371,105.294', 'itera-akses-sabahbalau', 'walking', 51, 3759, now()),
  ('-5.371,105.294', 'itera-akses-sabahbalau', 'motorcycle', 10, 3909, now()),
  ('-5.371,105.294', 'itera-akses-sabahbalau', 'driving-car', 14, 4059, now()),
  ('-6.370,106.821', 'ui-depok', 'walking', 19, 1353, now()),
  ('-6.370,106.821', 'ui-depok', 'motorcycle', 4, 1407, now()),
  ('-6.370,106.821', 'ui-depok', 'driving-car', 5, 1461, now()),
  ('-6.370,106.821', 'ui-gerbatama', 'walking', 19, 1353, now()),
  ('-6.370,106.821', 'ui-gerbatama', 'motorcycle', 4, 1407, now()),
  ('-6.370,106.821', 'ui-gerbatama', 'driving-car', 5, 1461, now()),
  ('-6.370,106.821', 'ui-kutek', 'walking', 4, 269, now()),
  ('-6.370,106.821', 'ui-kutek', 'motorcycle', 1, 280, now()),
  ('-6.370,106.821', 'ui-kutek', 'driving-car', 2, 290, now()),
  ('-6.370,106.821', 'ui-kukel', 'walking', 25, 1801, now()),
  ('-6.370,106.821', 'ui-kukel', 'motorcycle', 5, 1873, now()),
  ('-6.370,106.821', 'ui-kukel', 'driving-car', 7, 1945, now()),
  ('-6.370,106.821', 'ui-pocin', 'walking', 21, 1546, now()),
  ('-6.370,106.821', 'ui-pocin', 'motorcycle', 5, 1608, now()),
  ('-6.370,106.821', 'ui-pocin', 'driving-car', 6, 1670, now()),
  ('-6.358,106.821', 'ui-depok', 'walking', 14, 993, now()),
  ('-6.358,106.821', 'ui-depok', 'motorcycle', 3, 1032, now()),
  ('-6.358,106.821', 'ui-depok', 'driving-car', 4, 1072, now()),
  ('-6.358,106.821', 'ui-gerbatama', 'walking', 14, 993, now()),
  ('-6.358,106.821', 'ui-gerbatama', 'motorcycle', 3, 1032, now()),
  ('-6.358,106.821', 'ui-gerbatama', 'driving-car', 4, 1072, now()),
  ('-6.358,106.821', 'ui-kutek', 'walking', 21, 1516, now()),
  ('-6.358,106.821', 'ui-kutek', 'motorcycle', 4, 1577, now()),
  ('-6.358,106.821', 'ui-kutek', 'driving-car', 6, 1638, now()),
  ('-6.358,106.821', 'ui-kukel', 'walking', 8, 583, now()),
  ('-6.358,106.821', 'ui-kukel', 'motorcycle', 2, 606, now()),
  ('-6.358,106.821', 'ui-kukel', 'driving-car', 3, 629, now()),
  ('-6.358,106.821', 'ui-pocin', 'walking', 28, 2063, now()),
  ('-6.358,106.821', 'ui-pocin', 'motorcycle', 6, 2145, now()),
  ('-6.358,106.821', 'ui-pocin', 'driving-car', 8, 2228, now()),
  ('-6.357,106.820', 'ui-depok', 'walking', 16, 1175, now()),
  ('-6.357,106.820', 'ui-depok', 'motorcycle', 4, 1222, now()),
  ('-6.357,106.820', 'ui-depok', 'driving-car', 5, 1269, now()),
  ('-6.357,106.820', 'ui-gerbatama', 'walking', 16, 1175, now()),
  ('-6.357,106.820', 'ui-gerbatama', 'motorcycle', 4, 1222, now()),
  ('-6.357,106.820', 'ui-gerbatama', 'driving-car', 5, 1269, now()),
  ('-6.357,106.820', 'ui-kutek', 'walking', 22, 1624, now()),
  ('-6.357,106.820', 'ui-kutek', 'motorcycle', 5, 1689, now()),
  ('-6.357,106.820', 'ui-kutek', 'driving-car', 6, 1754, now()),
  ('-6.357,106.820', 'ui-kukel', 'walking', 10, 749, now()),
  ('-6.357,106.820', 'ui-kukel', 'motorcycle', 2, 779, now()),
  ('-6.357,106.820', 'ui-kukel', 'driving-car', 3, 809, now()),
  ('-6.357,106.820', 'ui-pocin', 'walking', 30, 2239, now()),
  ('-6.357,106.820', 'ui-pocin', 'motorcycle', 6, 2328, now()),
  ('-6.357,106.820', 'ui-pocin', 'driving-car', 9, 2418, now()),
  ('-6.363,106.831', 'ui-depok', 'walking', 7, 489, now()),
  ('-6.363,106.831', 'ui-depok', 'motorcycle', 2, 508, now()),
  ('-6.363,106.831', 'ui-depok', 'driving-car', 2, 528, now()),
  ('-6.363,106.831', 'ui-gerbatama', 'walking', 7, 489, now()),
  ('-6.363,106.831', 'ui-gerbatama', 'motorcycle', 2, 508, now()),
  ('-6.363,106.831', 'ui-gerbatama', 'driving-car', 2, 528, now()),
  ('-6.363,106.831', 'ui-kutek', 'walking', 19, 1383, now()),
  ('-6.363,106.831', 'ui-kutek', 'motorcycle', 4, 1438, now()),
  ('-6.363,106.831', 'ui-kutek', 'driving-car', 5, 1493, now()),
  ('-6.363,106.831', 'ui-kukel', 'walking', 14, 981, now()),
  ('-6.363,106.831', 'ui-kukel', 'motorcycle', 3, 1021, now()),
  ('-6.363,106.831', 'ui-kukel', 'driving-car', 4, 1060, now()),
  ('-6.363,106.831', 'ui-pocin', 'walking', 11, 789, now()),
  ('-6.363,106.831', 'ui-pocin', 'motorcycle', 3, 820, now()),
  ('-6.363,106.831', 'ui-pocin', 'driving-car', 3, 852, now()),
  ('-6.362,106.835', 'ui-depok', 'walking', 15, 1055, now()),
  ('-6.362,106.835', 'ui-depok', 'motorcycle', 3, 1097, now()),
  ('-6.362,106.835', 'ui-depok', 'driving-car', 4, 1139, now()),
  ('-6.362,106.835', 'ui-gerbatama', 'walking', 15, 1055, now()),
  ('-6.362,106.835', 'ui-gerbatama', 'motorcycle', 3, 1097, now()),
  ('-6.362,106.835', 'ui-gerbatama', 'driving-car', 4, 1139, now()),
  ('-6.362,106.835', 'ui-kutek', 'walking', 26, 1911, now()),
  ('-6.362,106.835', 'ui-kutek', 'motorcycle', 5, 1988, now()),
  ('-6.362,106.835', 'ui-kutek', 'driving-car', 7, 2064, now()),
  ('-6.362,106.835', 'ui-kukel', 'walking', 19, 1403, now()),
  ('-6.362,106.835', 'ui-kukel', 'motorcycle', 4, 1459, now()),
  ('-6.362,106.835', 'ui-kukel', 'driving-car', 6, 1515, now()),
  ('-6.362,106.835', 'ui-pocin', 'walking', 13, 923, now()),
  ('-6.362,106.835', 'ui-pocin', 'motorcycle', 3, 959, now()),
  ('-6.362,106.835', 'ui-pocin', 'driving-car', 4, 996, now()),
  ('-6.366,106.821', 'ui-depok', 'walking', 14, 1035, now()),
  ('-6.366,106.821', 'ui-depok', 'motorcycle', 3, 1076, now()),
  ('-6.366,106.821', 'ui-depok', 'driving-car', 4, 1118, now()),
  ('-6.366,106.821', 'ui-gerbatama', 'walking', 14, 1035, now()),
  ('-6.366,106.821', 'ui-gerbatama', 'motorcycle', 3, 1076, now()),
  ('-6.366,106.821', 'ui-gerbatama', 'driving-car', 4, 1118, now()),
  ('-6.366,106.821', 'ui-kutek', 'walking', 6, 398, now()),
  ('-6.366,106.821', 'ui-kutek', 'motorcycle', 2, 413, now()),
  ('-6.366,106.821', 'ui-kutek', 'driving-car', 2, 429, now()),
  ('-6.366,106.821', 'ui-kukel', 'walking', 19, 1371, now()),
  ('-6.366,106.821', 'ui-kukel', 'motorcycle', 4, 1426, now()),
  ('-6.366,106.821', 'ui-kukel', 'driving-car', 5, 1481, now()),
  ('-6.366,106.821', 'ui-pocin', 'walking', 21, 1566, now()),
  ('-6.366,106.821', 'ui-pocin', 'motorcycle', 5, 1629, now()),
  ('-6.366,106.821', 'ui-pocin', 'driving-car', 6, 1692, now()),
  ('-6.365,106.819', 'ui-depok', 'walking', 16, 1174, now()),
  ('-6.365,106.819', 'ui-depok', 'motorcycle', 4, 1221, now()),
  ('-6.365,106.819', 'ui-depok', 'driving-car', 5, 1268, now()),
  ('-6.365,106.819', 'ui-gerbatama', 'walking', 16, 1174, now()),
  ('-6.365,106.819', 'ui-gerbatama', 'motorcycle', 4, 1221, now()),
  ('-6.365,106.819', 'ui-gerbatama', 'driving-car', 5, 1268, now()),
  ('-6.365,106.819', 'ui-kutek', 'walking', 9, 614, now()),
  ('-6.365,106.819', 'ui-kutek', 'motorcycle', 2, 638, now()),
  ('-6.365,106.819', 'ui-kutek', 'driving-car', 3, 663, now()),
  ('-6.365,106.819', 'ui-kukel', 'walking', 19, 1405, now()),
  ('-6.365,106.819', 'ui-kukel', 'motorcycle', 4, 1461, now()),
  ('-6.365,106.819', 'ui-kukel', 'driving-car', 6, 1517, now()),
  ('-6.365,106.819', 'ui-pocin', 'walking', 24, 1795, now()),
  ('-6.365,106.819', 'ui-pocin', 'motorcycle', 5, 1867, now()),
  ('-6.365,106.819', 'ui-pocin', 'driving-car', 7, 1939, now()),
  ('-6.368,106.821', 'ui-depok', 'walking', 16, 1185, now()),
  ('-6.368,106.821', 'ui-depok', 'motorcycle', 4, 1232, now()),
  ('-6.368,106.821', 'ui-depok', 'driving-car', 5, 1280, now()),
  ('-6.368,106.821', 'ui-gerbatama', 'walking', 16, 1185, now()),
  ('-6.368,106.821', 'ui-gerbatama', 'motorcycle', 4, 1232, now()),
  ('-6.368,106.821', 'ui-gerbatama', 'driving-car', 5, 1280, now()),
  ('-6.368,106.821', 'ui-kutek', 'walking', 3, 201, now()),
  ('-6.368,106.821', 'ui-kutek', 'motorcycle', 1, 209, now()),
  ('-6.368,106.821', 'ui-kutek', 'driving-car', 2, 217, now()),
  ('-6.368,106.821', 'ui-kukel', 'walking', 22, 1604, now()),
  ('-6.368,106.821', 'ui-kukel', 'motorcycle', 5, 1668, now()),
  ('-6.368,106.821', 'ui-kukel', 'driving-car', 6, 1732, now()),
  ('-6.368,106.821', 'ui-pocin', 'walking', 21, 1509, now()),
  ('-6.368,106.821', 'ui-pocin', 'motorcycle', 4, 1569, now()),
  ('-6.368,106.821', 'ui-pocin', 'driving-car', 6, 1629, now()),
  ('-6.366,106.836', 'ui-depok', 'walking', 18, 1299, now()),
  ('-6.366,106.836', 'ui-depok', 'motorcycle', 4, 1351, now()),
  ('-6.366,106.836', 'ui-depok', 'driving-car', 5, 1403, now()),
  ('-6.366,106.836', 'ui-gerbatama', 'walking', 18, 1299, now()),
  ('-6.366,106.836', 'ui-gerbatama', 'motorcycle', 4, 1351, now()),
  ('-6.366,106.836', 'ui-gerbatama', 'driving-car', 5, 1403, now()),
  ('-6.366,106.836', 'ui-kutek', 'walking', 25, 1868, now()),
  ('-6.366,106.836', 'ui-kutek', 'motorcycle', 5, 1942, now()),
  ('-6.366,106.836', 'ui-kutek', 'driving-car', 7, 2017, now()),
  ('-6.366,106.836', 'ui-kukel', 'walking', 24, 1799, now()),
  ('-6.366,106.836', 'ui-kukel', 'motorcycle', 5, 1871, now()),
  ('-6.366,106.836', 'ui-kukel', 'driving-car', 7, 1943, now()),
  ('-6.366,106.836', 'ui-pocin', 'walking', 9, 613, now()),
  ('-6.366,106.836', 'ui-pocin', 'motorcycle', 2, 637, now()),
  ('-6.366,106.836', 'ui-pocin', 'driving-car', 3, 662, now()),
  ('-6.368,106.819', 'ui-depok', 'walking', 19, 1384, now()),
  ('-6.368,106.819', 'ui-depok', 'motorcycle', 4, 1439, now()),
  ('-6.368,106.819', 'ui-depok', 'driving-car', 5, 1494, now()),
  ('-6.368,106.819', 'ui-gerbatama', 'walking', 19, 1384, now()),
  ('-6.368,106.819', 'ui-gerbatama', 'motorcycle', 4, 1439, now()),
  ('-6.368,106.819', 'ui-gerbatama', 'driving-car', 5, 1494, now()),
  ('-6.368,106.819', 'ui-kutek', 'walking', 6, 435, now()),
  ('-6.368,106.819', 'ui-kutek', 'motorcycle', 2, 452, now()),
  ('-6.368,106.819', 'ui-kutek', 'driving-car', 2, 470, now()),
  ('-6.368,106.819', 'ui-kukel', 'walking', 24, 1740, now()),
  ('-6.368,106.819', 'ui-kukel', 'motorcycle', 5, 1810, now()),
  ('-6.368,106.819', 'ui-kukel', 'driving-car', 7, 1879, now()),
  ('-6.368,106.819', 'ui-pocin', 'walking', 24, 1749, now()),
  ('-6.368,106.819', 'ui-pocin', 'motorcycle', 5, 1819, now()),
  ('-6.368,106.819', 'ui-pocin', 'driving-car', 7, 1889, now()),
  ('-6.371,106.821', 'ui-depok', 'walking', 20, 1491, now()),
  ('-6.371,106.821', 'ui-depok', 'motorcycle', 4, 1551, now()),
  ('-6.371,106.821', 'ui-depok', 'driving-car', 6, 1611, now()),
  ('-6.371,106.821', 'ui-gerbatama', 'walking', 20, 1491, now()),
  ('-6.371,106.821', 'ui-gerbatama', 'motorcycle', 4, 1551, now()),
  ('-6.371,106.821', 'ui-gerbatama', 'driving-car', 6, 1611, now()),
  ('-6.371,106.821', 'ui-kutek', 'walking', 6, 395, now()),
  ('-6.371,106.821', 'ui-kutek', 'motorcycle', 2, 411, now()),
  ('-6.371,106.821', 'ui-kutek', 'driving-car', 2, 427, now()),
  ('-6.371,106.821', 'ui-kukel', 'walking', 27, 1970, now()),
  ('-6.371,106.821', 'ui-kukel', 'motorcycle', 6, 2049, now()),
  ('-6.371,106.821', 'ui-kukel', 'driving-car', 8, 2128, now()),
  ('-6.371,106.821', 'ui-pocin', 'walking', 21, 1561, now()),
  ('-6.371,106.821', 'ui-pocin', 'motorcycle', 5, 1624, now()),
  ('-6.371,106.821', 'ui-pocin', 'driving-car', 6, 1686, now()),
  ('-6.366,106.823', 'ui-depok', 'walking', 10, 724, now()),
  ('-6.366,106.823', 'ui-depok', 'motorcycle', 2, 753, now()),
  ('-6.366,106.823', 'ui-depok', 'driving-car', 3, 782, now()),
  ('-6.366,106.823', 'ui-gerbatama', 'walking', 10, 724, now()),
  ('-6.366,106.823', 'ui-gerbatama', 'motorcycle', 2, 753, now()),
  ('-6.366,106.823', 'ui-gerbatama', 'driving-car', 3, 782, now()),
  ('-6.366,106.823', 'ui-kutek', 'walking', 6, 416, now()),
  ('-6.366,106.823', 'ui-kutek', 'motorcycle', 2, 433, now()),
  ('-6.366,106.823', 'ui-kutek', 'driving-car', 2, 450, now()),
  ('-6.366,106.823', 'ui-kukel', 'walking', 16, 1168, now()),
  ('-6.366,106.823', 'ui-kukel', 'motorcycle', 4, 1214, now()),
  ('-6.366,106.823', 'ui-kukel', 'driving-car', 5, 1261, now()),
  ('-6.366,106.823', 'ui-pocin', 'walking', 17, 1260, now()),
  ('-6.366,106.823', 'ui-pocin', 'motorcycle', 4, 1310, now()),
  ('-6.366,106.823', 'ui-pocin', 'driving-car', 5, 1361, now()),
  ('-6.370,106.819', 'ui-depok', 'walking', 21, 1561, now()),
  ('-6.370,106.819', 'ui-depok', 'motorcycle', 5, 1624, now()),
  ('-6.370,106.819', 'ui-depok', 'driving-car', 6, 1686, now()),
  ('-6.370,106.819', 'ui-gerbatama', 'walking', 21, 1561, now()),
  ('-6.370,106.819', 'ui-gerbatama', 'motorcycle', 5, 1624, now()),
  ('-6.370,106.819', 'ui-gerbatama', 'driving-car', 6, 1686, now()),
  ('-6.370,106.819', 'ui-kutek', 'walking', 8, 541, now()),
  ('-6.370,106.819', 'ui-kutek', 'motorcycle', 2, 563, now()),
  ('-6.370,106.819', 'ui-kutek', 'driving-car', 2, 585, now()),
  ('-6.370,106.819', 'ui-kukel', 'walking', 26, 1934, now()),
  ('-6.370,106.819', 'ui-kukel', 'motorcycle', 6, 2011, now()),
  ('-6.370,106.819', 'ui-kukel', 'driving-car', 7, 2088, now()),
  ('-6.370,106.819', 'ui-pocin', 'walking', 25, 1843, now()),
  ('-6.370,106.819', 'ui-pocin', 'motorcycle', 5, 1916, now()),
  ('-6.370,106.819', 'ui-pocin', 'driving-car', 7, 1990, now()),
  ('-6.364,106.836', 'ui-depok', 'walking', 17, 1244, now()),
  ('-6.364,106.836', 'ui-depok', 'motorcycle', 4, 1294, now()),
  ('-6.364,106.836', 'ui-depok', 'driving-car', 5, 1343, now()),
  ('-6.364,106.836', 'ui-gerbatama', 'walking', 17, 1244, now()),
  ('-6.364,106.836', 'ui-gerbatama', 'motorcycle', 4, 1294, now()),
  ('-6.364,106.836', 'ui-gerbatama', 'driving-car', 5, 1343, now()),
  ('-6.364,106.836', 'ui-kutek', 'walking', 26, 1933, now()),
  ('-6.364,106.836', 'ui-kutek', 'motorcycle', 6, 2010, now()),
  ('-6.364,106.836', 'ui-kutek', 'driving-car', 7, 2087, now()),
  ('-6.364,106.836', 'ui-kukel', 'walking', 23, 1686, now()),
  ('-6.364,106.836', 'ui-kukel', 'motorcycle', 5, 1754, now()),
  ('-6.364,106.836', 'ui-kukel', 'driving-car', 7, 1821, now()),
  ('-6.364,106.836', 'ui-pocin', 'walking', 11, 753, now()),
  ('-6.364,106.836', 'ui-pocin', 'motorcycle', 2, 783, now()),
  ('-6.364,106.836', 'ui-pocin', 'driving-car', 3, 813, now()),
  ('-6.361,106.831', 'ui-depok', 'walking', 9, 625, now()),
  ('-6.361,106.831', 'ui-depok', 'motorcycle', 2, 650, now()),
  ('-6.361,106.831', 'ui-depok', 'driving-car', 3, 675, now()),
  ('-6.361,106.831', 'ui-gerbatama', 'walking', 9, 625, now()),
  ('-6.361,106.831', 'ui-gerbatama', 'motorcycle', 2, 650, now()),
  ('-6.361,106.831', 'ui-gerbatama', 'driving-car', 3, 675, now()),
  ('-6.361,106.831', 'ui-kutek', 'walking', 22, 1605, now()),
  ('-6.361,106.831', 'ui-kutek', 'motorcycle', 5, 1669, now()),
  ('-6.361,106.831', 'ui-kutek', 'driving-car', 6, 1733, now()),
  ('-6.361,106.831', 'ui-kukel', 'walking', 13, 963, now()),
  ('-6.361,106.831', 'ui-kukel', 'motorcycle', 3, 1001, now()),
  ('-6.361,106.831', 'ui-kukel', 'driving-car', 4, 1040, now()),
  ('-6.361,106.831', 'ui-pocin', 'walking', 13, 960, now()),
  ('-6.361,106.831', 'ui-pocin', 'motorcycle', 3, 998, now()),
  ('-6.361,106.831', 'ui-pocin', 'driving-car', 4, 1037, now()),
  ('-6.365,106.835', 'ui-depok', 'walking', 16, 1160, now()),
  ('-6.365,106.835', 'ui-depok', 'motorcycle', 4, 1206, now()),
  ('-6.365,106.835', 'ui-depok', 'driving-car', 5, 1253, now()),
  ('-6.365,106.835', 'ui-gerbatama', 'walking', 16, 1160, now()),
  ('-6.365,106.835', 'ui-gerbatama', 'motorcycle', 4, 1206, now()),
  ('-6.365,106.835', 'ui-gerbatama', 'driving-car', 5, 1253, now()),
  ('-6.365,106.835', 'ui-kutek', 'walking', 24, 1770, now()),
  ('-6.365,106.835', 'ui-kutek', 'motorcycle', 5, 1841, now()),
  ('-6.365,106.835', 'ui-kutek', 'driving-car', 7, 1912, now()),
  ('-6.365,106.835', 'ui-kukel', 'walking', 23, 1660, now()),
  ('-6.365,106.835', 'ui-kukel', 'motorcycle', 5, 1726, now()),
  ('-6.365,106.835', 'ui-kukel', 'driving-car', 6, 1793, now()),
  ('-6.365,106.835', 'ui-pocin', 'walking', 8, 570, now()),
  ('-6.365,106.835', 'ui-pocin', 'motorcycle', 2, 593, now()),
  ('-6.365,106.835', 'ui-pocin', 'driving-car', 3, 616, now()),
  ('-6.370,106.822', 'ui-depok', 'walking', 17, 1266, now()),
  ('-6.370,106.822', 'ui-depok', 'motorcycle', 4, 1317, now()),
  ('-6.370,106.822', 'ui-depok', 'driving-car', 5, 1368, now()),
  ('-6.370,106.822', 'ui-gerbatama', 'walking', 17, 1266, now()),
  ('-6.370,106.822', 'ui-gerbatama', 'motorcycle', 4, 1317, now()),
  ('-6.370,106.822', 'ui-gerbatama', 'driving-car', 5, 1368, now()),
  ('-6.370,106.822', 'ui-kutek', 'walking', 3, 199, now()),
  ('-6.370,106.822', 'ui-kutek', 'motorcycle', 1, 207, now()),
  ('-6.370,106.822', 'ui-kutek', 'driving-car', 2, 215, now()),
  ('-6.370,106.822', 'ui-kukel', 'walking', 24, 1778, now()),
  ('-6.370,106.822', 'ui-kukel', 'motorcycle', 5, 1849, now()),
  ('-6.370,106.822', 'ui-kukel', 'driving-car', 7, 1920, now()),
  ('-6.370,106.822', 'ui-pocin', 'walking', 18, 1343, now()),
  ('-6.370,106.822', 'ui-pocin', 'motorcycle', 4, 1396, now()),
  ('-6.370,106.822', 'ui-pocin', 'driving-car', 5, 1450, now()),
  ('-6.360,106.824', 'ui-depok', 'walking', 8, 553, now()),
  ('-6.360,106.824', 'ui-depok', 'motorcycle', 2, 575, now()),
  ('-6.360,106.824', 'ui-depok', 'driving-car', 2, 597, now()),
  ('-6.360,106.824', 'ui-gerbatama', 'walking', 8, 553, now()),
  ('-6.360,106.824', 'ui-gerbatama', 'motorcycle', 2, 575, now()),
  ('-6.360,106.824', 'ui-gerbatama', 'driving-car', 2, 597, now()),
  ('-6.360,106.824', 'ui-kutek', 'walking', 17, 1244, now()),
  ('-6.360,106.824', 'ui-kutek', 'motorcycle', 4, 1294, now()),
  ('-6.360,106.824', 'ui-kutek', 'driving-car', 5, 1343, now()),
  ('-6.360,106.824', 'ui-kukel', 'walking', 6, 381, now()),
  ('-6.360,106.824', 'ui-kukel', 'motorcycle', 1, 397, now()),
  ('-6.360,106.824', 'ui-kukel', 'driving-car', 2, 412, now()),
  ('-6.360,106.824', 'ui-pocin', 'walking', 22, 1625, now()),
  ('-6.360,106.824', 'ui-pocin', 'motorcycle', 5, 1690, now()),
  ('-6.360,106.824', 'ui-pocin', 'driving-car', 6, 1755, now()),
  ('-6.364,106.832', 'ui-depok', 'walking', 10, 746, now()),
  ('-6.364,106.832', 'ui-depok', 'motorcycle', 2, 776, now()),
  ('-6.364,106.832', 'ui-depok', 'driving-car', 3, 806, now()),
  ('-6.364,106.832', 'ui-gerbatama', 'walking', 10, 746, now()),
  ('-6.364,106.832', 'ui-gerbatama', 'motorcycle', 2, 776, now()),
  ('-6.364,106.832', 'ui-gerbatama', 'driving-car', 3, 806, now()),
  ('-6.364,106.832', 'ui-kutek', 'walking', 20, 1441, now()),
  ('-6.364,106.832', 'ui-kutek', 'motorcycle', 4, 1499, now()),
  ('-6.364,106.832', 'ui-kutek', 'driving-car', 6, 1557, now()),
  ('-6.364,106.832', 'ui-kukel', 'walking', 18, 1283, now()),
  ('-6.364,106.832', 'ui-kukel', 'motorcycle', 4, 1334, now()),
  ('-6.364,106.832', 'ui-kukel', 'driving-car', 5, 1385, now()),
  ('-6.364,106.832', 'ui-pocin', 'walking', 8, 538, now()),
  ('-6.364,106.832', 'ui-pocin', 'motorcycle', 2, 559, now()),
  ('-6.364,106.832', 'ui-pocin', 'driving-car', 2, 581, now()),
  ('-6.359,106.822', 'ui-depok', 'walking', 12, 849, now()),
  ('-6.359,106.822', 'ui-depok', 'motorcycle', 3, 883, now()),
  ('-6.359,106.822', 'ui-depok', 'driving-car', 4, 917, now()),
  ('-6.359,106.822', 'ui-gerbatama', 'walking', 12, 849, now()),
  ('-6.359,106.822', 'ui-gerbatama', 'motorcycle', 3, 883, now()),
  ('-6.359,106.822', 'ui-gerbatama', 'driving-car', 4, 917, now()),
  ('-6.359,106.822', 'ui-kutek', 'walking', 18, 1346, now()),
  ('-6.359,106.822', 'ui-kutek', 'motorcycle', 4, 1400, now()),
  ('-6.359,106.822', 'ui-kutek', 'driving-car', 5, 1454, now()),
  ('-6.359,106.822', 'ui-kukel', 'walking', 8, 551, now()),
  ('-6.359,106.822', 'ui-kukel', 'motorcycle', 2, 573, now()),
  ('-6.359,106.822', 'ui-kukel', 'driving-car', 2, 595, now()),
  ('-6.359,106.822', 'ui-pocin', 'walking', 26, 1905, now()),
  ('-6.359,106.822', 'ui-pocin', 'motorcycle', 5, 1981, now()),
  ('-6.359,106.822', 'ui-pocin', 'driving-car', 7, 2057, now()),
  ('-6.366,106.824', 'ui-depok', 'walking', 9, 666, now()),
  ('-6.366,106.824', 'ui-depok', 'motorcycle', 2, 693, now()),
  ('-6.366,106.824', 'ui-depok', 'driving-car', 3, 720, now()),
  ('-6.366,106.824', 'ui-gerbatama', 'walking', 9, 666, now()),
  ('-6.366,106.824', 'ui-gerbatama', 'motorcycle', 2, 693, now()),
  ('-6.366,106.824', 'ui-gerbatama', 'driving-car', 3, 720, now()),
  ('-6.366,106.824', 'ui-kutek', 'walking', 6, 446, now()),
  ('-6.366,106.824', 'ui-kutek', 'motorcycle', 2, 464, now()),
  ('-6.366,106.824', 'ui-kutek', 'driving-car', 2, 482, now()),
  ('-6.366,106.824', 'ui-kukel', 'walking', 16, 1144, now()),
  ('-6.366,106.824', 'ui-kukel', 'motorcycle', 3, 1190, now()),
  ('-6.366,106.824', 'ui-kukel', 'driving-car', 5, 1235, now()),
  ('-6.366,106.824', 'ui-pocin', 'walking', 16, 1190, now()),
  ('-6.366,106.824', 'ui-pocin', 'motorcycle', 4, 1238, now()),
  ('-6.366,106.824', 'ui-pocin', 'driving-car', 5, 1285, now()),
  ('-6.361,106.833', 'ui-depok', 'walking', 12, 840, now()),
  ('-6.361,106.833', 'ui-depok', 'motorcycle', 3, 874, now()),
  ('-6.361,106.833', 'ui-depok', 'driving-car', 4, 907, now()),
  ('-6.361,106.833', 'ui-gerbatama', 'walking', 12, 840, now()),
  ('-6.361,106.833', 'ui-gerbatama', 'motorcycle', 3, 874, now()),
  ('-6.361,106.833', 'ui-gerbatama', 'driving-car', 4, 907, now()),
  ('-6.361,106.833', 'ui-kutek', 'walking', 24, 1786, now()),
  ('-6.361,106.833', 'ui-kutek', 'motorcycle', 5, 1858, now()),
  ('-6.361,106.833', 'ui-kutek', 'driving-car', 7, 1929, now()),
  ('-6.361,106.833', 'ui-kukel', 'walking', 16, 1145, now()),
  ('-6.361,106.833', 'ui-kukel', 'motorcycle', 3, 1191, now()),
  ('-6.361,106.833', 'ui-kukel', 'driving-car', 5, 1237, now()),
  ('-6.361,106.833', 'ui-pocin', 'walking', 14, 983, now()),
  ('-6.361,106.833', 'ui-pocin', 'motorcycle', 3, 1022, now()),
  ('-6.361,106.833', 'ui-pocin', 'driving-car', 4, 1061, now()),
  ('-6.364,106.837', 'ui-depok', 'walking', 19, 1354, now()),
  ('-6.364,106.837', 'ui-depok', 'motorcycle', 4, 1408, now()),
  ('-6.364,106.837', 'ui-depok', 'driving-car', 5, 1462, now()),
  ('-6.364,106.837', 'ui-gerbatama', 'walking', 19, 1354, now()),
  ('-6.364,106.837', 'ui-gerbatama', 'motorcycle', 4, 1408, now()),
  ('-6.364,106.837', 'ui-gerbatama', 'driving-car', 5, 1462, now()),
  ('-6.364,106.837', 'ui-kutek', 'walking', 27, 2021, now()),
  ('-6.364,106.837', 'ui-kutek', 'motorcycle', 6, 2102, now()),
  ('-6.364,106.837', 'ui-kutek', 'driving-car', 8, 2183, now()),
  ('-6.364,106.837', 'ui-kukel', 'walking', 24, 1794, now()),
  ('-6.364,106.837', 'ui-kukel', 'motorcycle', 5, 1866, now()),
  ('-6.364,106.837', 'ui-kukel', 'driving-car', 7, 1937, now()),
  ('-6.364,106.837', 'ui-pocin', 'walking', 11, 806, now()),
  ('-6.364,106.837', 'ui-pocin', 'motorcycle', 3, 839, now()),
  ('-6.364,106.837', 'ui-pocin', 'driving-car', 3, 871, now()),
  ('-6.365,106.833', 'ui-depok', 'walking', 12, 841, now()),
  ('-6.365,106.833', 'ui-depok', 'motorcycle', 3, 875, now()),
  ('-6.365,106.833', 'ui-depok', 'driving-car', 4, 909, now()),
  ('-6.365,106.833', 'ui-gerbatama', 'walking', 12, 841, now()),
  ('-6.365,106.833', 'ui-gerbatama', 'motorcycle', 3, 875, now()),
  ('-6.365,106.833', 'ui-gerbatama', 'driving-car', 4, 909, now()),
  ('-6.365,106.833', 'ui-kutek', 'walking', 20, 1489, now()),
  ('-6.365,106.833', 'ui-kutek', 'motorcycle', 4, 1548, now()),
  ('-6.365,106.833', 'ui-kutek', 'driving-car', 6, 1608, now()),
  ('-6.365,106.833', 'ui-kukel', 'walking', 19, 1379, now()),
  ('-6.365,106.833', 'ui-kukel', 'motorcycle', 4, 1434, now()),
  ('-6.365,106.833', 'ui-kukel', 'driving-car', 5, 1489, now()),
  ('-6.365,106.833', 'ui-pocin', 'walking', 7, 485, now()),
  ('-6.365,106.833', 'ui-pocin', 'motorcycle', 2, 504, now()),
  ('-6.365,106.833', 'ui-pocin', 'driving-car', 2, 524, now()),
  ('-6.368,106.833', 'ui-depok', 'walking', 16, 1191, now()),
  ('-6.368,106.833', 'ui-depok', 'motorcycle', 4, 1239, now()),
  ('-6.368,106.833', 'ui-depok', 'driving-car', 5, 1287, now()),
  ('-6.368,106.833', 'ui-gerbatama', 'walking', 16, 1191, now()),
  ('-6.368,106.833', 'ui-gerbatama', 'motorcycle', 4, 1239, now()),
  ('-6.368,106.833', 'ui-gerbatama', 'driving-car', 5, 1287, now()),
  ('-6.368,106.833', 'ui-kutek', 'walking', 20, 1485, now()),
  ('-6.368,106.833', 'ui-kutek', 'motorcycle', 4, 1544, now()),
  ('-6.368,106.833', 'ui-kutek', 'driving-car', 6, 1604, now()),
  ('-6.368,106.833', 'ui-kukel', 'walking', 24, 1800, now()),
  ('-6.368,106.833', 'ui-kukel', 'motorcycle', 5, 1872, now()),
  ('-6.368,106.833', 'ui-kukel', 'driving-car', 7, 1944, now()),
  ('-6.368,106.833', 'ui-pocin', 'walking', 3, 170, now()),
  ('-6.368,106.833', 'ui-pocin', 'motorcycle', 1, 177, now()),
  ('-6.368,106.833', 'ui-pocin', 'driving-car', 2, 184, now()),
  ('-6.371,106.819', 'ui-depok', 'walking', 23, 1691, now()),
  ('-6.371,106.819', 'ui-depok', 'motorcycle', 5, 1759, now()),
  ('-6.371,106.819', 'ui-depok', 'driving-car', 7, 1827, now()),
  ('-6.371,106.819', 'ui-gerbatama', 'walking', 23, 1691, now()),
  ('-6.371,106.819', 'ui-gerbatama', 'motorcycle', 5, 1759, now()),
  ('-6.371,106.819', 'ui-gerbatama', 'driving-car', 7, 1827, now()),
  ('-6.371,106.819', 'ui-kutek', 'walking', 9, 628, now()),
  ('-6.371,106.819', 'ui-kutek', 'motorcycle', 2, 653, now()),
  ('-6.371,106.819', 'ui-kutek', 'driving-car', 3, 678, now()),
  ('-6.371,106.819', 'ui-kukel', 'walking', 28, 2089, now()),
  ('-6.371,106.819', 'ui-kukel', 'motorcycle', 6, 2172, now()),
  ('-6.371,106.819', 'ui-kukel', 'driving-car', 8, 2256, now()),
  ('-6.371,106.819', 'ui-pocin', 'walking', 26, 1888, now()),
  ('-6.371,106.819', 'ui-pocin', 'motorcycle', 5, 1963, now()),
  ('-6.371,106.819', 'ui-pocin', 'driving-car', 7, 2039, now()),
  ('-6.360,106.834', 'ui-depok', 'walking', 13, 969, now()),
  ('-6.360,106.834', 'ui-depok', 'motorcycle', 3, 1008, now()),
  ('-6.360,106.834', 'ui-depok', 'driving-car', 4, 1046, now()),
  ('-6.360,106.834', 'ui-gerbatama', 'walking', 13, 969, now()),
  ('-6.360,106.834', 'ui-gerbatama', 'motorcycle', 3, 1008, now()),
  ('-6.360,106.834', 'ui-gerbatama', 'driving-car', 4, 1046, now()),
  ('-6.360,106.834', 'ui-kutek', 'walking', 27, 1971, now()),
  ('-6.360,106.834', 'ui-kutek', 'motorcycle', 6, 2050, now()),
  ('-6.360,106.834', 'ui-kutek', 'driving-car', 8, 2129, now()),
  ('-6.360,106.834', 'ui-kukel', 'walking', 16, 1149, now()),
  ('-6.360,106.834', 'ui-kukel', 'motorcycle', 3, 1195, now()),
  ('-6.360,106.834', 'ui-kukel', 'driving-car', 5, 1241, now()),
  ('-6.360,106.834', 'ui-pocin', 'walking', 16, 1195, now()),
  ('-6.360,106.834', 'ui-pocin', 'motorcycle', 4, 1243, now()),
  ('-6.360,106.834', 'ui-pocin', 'driving-car', 5, 1291, now()),
  ('-6.368,106.835', 'ui-depok', 'walking', 19, 1369, now()),
  ('-6.368,106.835', 'ui-depok', 'motorcycle', 4, 1424, now()),
  ('-6.368,106.835', 'ui-depok', 'driving-car', 5, 1478, now()),
  ('-6.368,106.835', 'ui-gerbatama', 'walking', 19, 1369, now()),
  ('-6.368,106.835', 'ui-gerbatama', 'motorcycle', 4, 1424, now()),
  ('-6.368,106.835', 'ui-gerbatama', 'driving-car', 5, 1478, now()),
  ('-6.368,106.835', 'ui-kutek', 'walking', 23, 1670, now()),
  ('-6.368,106.835', 'ui-kutek', 'motorcycle', 5, 1737, now()),
  ('-6.368,106.835', 'ui-kutek', 'driving-car', 7, 1804, now()),
  ('-6.368,106.835', 'ui-kukel', 'walking', 27, 1960, now()),
  ('-6.368,106.835', 'ui-kukel', 'motorcycle', 6, 2038, now()),
  ('-6.368,106.835', 'ui-kukel', 'driving-car', 8, 2117, now()),
  ('-6.368,106.835', 'ui-pocin', 'walking', 5, 361, now()),
  ('-6.368,106.835', 'ui-pocin', 'motorcycle', 1, 376, now()),
  ('-6.368,106.835', 'ui-pocin', 'driving-car', 2, 390, now()),
  ('-6.359,106.820', 'ui-depok', 'walking', 14, 1010, now()),
  ('-6.359,106.820', 'ui-depok', 'motorcycle', 3, 1050, now()),
  ('-6.359,106.820', 'ui-depok', 'driving-car', 4, 1091, now()),
  ('-6.359,106.820', 'ui-gerbatama', 'walking', 14, 1010, now()),
  ('-6.359,106.820', 'ui-gerbatama', 'motorcycle', 3, 1050, now()),
  ('-6.359,106.820', 'ui-gerbatama', 'driving-car', 4, 1091, now()),
  ('-6.359,106.820', 'ui-kutek', 'walking', 19, 1370, now()),
  ('-6.359,106.820', 'ui-kutek', 'motorcycle', 4, 1425, now()),
  ('-6.359,106.820', 'ui-kutek', 'driving-car', 5, 1480, now()),
  ('-6.359,106.820', 'ui-kukel', 'walking', 10, 730, now()),
  ('-6.359,106.820', 'ui-kukel', 'motorcycle', 2, 759, now()),
  ('-6.359,106.820', 'ui-kukel', 'driving-car', 3, 788, now()),
  ('-6.359,106.820', 'ui-pocin', 'walking', 28, 2044, now()),
  ('-6.359,106.820', 'ui-pocin', 'motorcycle', 6, 2126, now()),
  ('-6.359,106.820', 'ui-pocin', 'driving-car', 8, 2207, now()),
  ('-6.367,106.834', 'ui-depok', 'walking', 17, 1208, now()),
  ('-6.367,106.834', 'ui-depok', 'motorcycle', 4, 1256, now()),
  ('-6.367,106.834', 'ui-depok', 'driving-car', 5, 1304, now()),
  ('-6.367,106.834', 'ui-gerbatama', 'walking', 17, 1208, now()),
  ('-6.367,106.834', 'ui-gerbatama', 'motorcycle', 4, 1256, now()),
  ('-6.367,106.834', 'ui-gerbatama', 'driving-car', 5, 1304, now()),
  ('-6.367,106.834', 'ui-kutek', 'walking', 22, 1593, now()),
  ('-6.367,106.834', 'ui-kutek', 'motorcycle', 5, 1656, now()),
  ('-6.367,106.834', 'ui-kutek', 'driving-car', 6, 1720, now()),
  ('-6.367,106.834', 'ui-kukel', 'walking', 24, 1790, now()),
  ('-6.367,106.834', 'ui-kukel', 'motorcycle', 5, 1862, now()),
  ('-6.367,106.834', 'ui-kukel', 'driving-car', 7, 1933, now()),
  ('-6.367,106.834', 'ui-pocin', 'walking', 4, 290, now()),
  ('-6.367,106.834', 'ui-pocin', 'motorcycle', 1, 302, now()),
  ('-6.367,106.834', 'ui-pocin', 'driving-car', 2, 313, now()),
  ('-0.915,100.462', 'unand-limau-manis', 'walking', 5, 323, now()),
  ('-0.915,100.462', 'unand-limau-manis', 'motorcycle', 1, 335, now()),
  ('-0.915,100.462', 'unand-limau-manis', 'driving-car', 2, 348, now()),
  ('-0.915,100.462', 'unand-gerbang-utama', 'walking', 5, 323, now()),
  ('-0.915,100.462', 'unand-gerbang-utama', 'motorcycle', 1, 335, now()),
  ('-0.915,100.462', 'unand-gerbang-utama', 'driving-car', 2, 348, now()),
  ('-0.915,100.462', 'unand-pasar-baru', 'walking', 53, 3949, now()),
  ('-0.915,100.462', 'unand-pasar-baru', 'motorcycle', 11, 4107, now()),
  ('-0.915,100.462', 'unand-pasar-baru', 'driving-car', 15, 4265, now()),
  ('-0.915,100.462', 'unand-pintu-pauh', 'walking', 39, 2851, now()),
  ('-0.915,100.462', 'unand-pintu-pauh', 'motorcycle', 8, 2965, now()),
  ('-0.915,100.462', 'unand-pintu-pauh', 'driving-car', 11, 3079, now()),
  ('-0.918,100.464', 'unand-limau-manis', 'walking', 11, 751, now()),
  ('-0.918,100.464', 'unand-limau-manis', 'motorcycle', 2, 781, now()),
  ('-0.918,100.464', 'unand-limau-manis', 'driving-car', 3, 811, now()),
  ('-0.918,100.464', 'unand-gerbang-utama', 'walking', 11, 751, now()),
  ('-0.918,100.464', 'unand-gerbang-utama', 'motorcycle', 2, 781, now()),
  ('-0.918,100.464', 'unand-gerbang-utama', 'driving-car', 3, 811, now()),
  ('-0.918,100.464', 'unand-pasar-baru', 'walking', 55, 4121, now()),
  ('-0.918,100.464', 'unand-pasar-baru', 'motorcycle', 11, 4286, now()),
  ('-0.918,100.464', 'unand-pasar-baru', 'driving-car', 15, 4451, now()),
  ('-0.918,100.464', 'unand-pintu-pauh', 'walking', 42, 3088, now()),
  ('-0.918,100.464', 'unand-pintu-pauh', 'motorcycle', 9, 3211, now()),
  ('-0.918,100.464', 'unand-pintu-pauh', 'driving-car', 12, 3335, now()),
  ('-0.922,100.440', 'unand-limau-manis', 'walking', 40, 2965, now()),
  ('-0.922,100.440', 'unand-limau-manis', 'motorcycle', 8, 3084, now()),
  ('-0.922,100.440', 'unand-limau-manis', 'driving-car', 11, 3202, now()),
  ('-0.922,100.440', 'unand-gerbang-utama', 'walking', 40, 2965, now()),
  ('-0.922,100.440', 'unand-gerbang-utama', 'motorcycle', 8, 3084, now()),
  ('-0.922,100.440', 'unand-gerbang-utama', 'driving-car', 11, 3202, now()),
  ('-0.922,100.440', 'unand-pasar-baru', 'walking', 11, 751, now()),
  ('-0.922,100.440', 'unand-pasar-baru', 'motorcycle', 2, 781, now()),
  ('-0.922,100.440', 'unand-pasar-baru', 'driving-car', 3, 811, now()),
  ('-0.922,100.440', 'unand-pintu-pauh', 'walking', 9, 605, now()),
  ('-0.922,100.440', 'unand-pintu-pauh', 'motorcycle', 2, 629, now()),
  ('-0.922,100.440', 'unand-pintu-pauh', 'driving-car', 3, 653, now()),
  ('-0.912,100.456', 'unand-limau-manis', 'walking', 9, 664, now()),
  ('-0.912,100.456', 'unand-limau-manis', 'motorcycle', 2, 690, now()),
  ('-0.912,100.456', 'unand-limau-manis', 'driving-car', 3, 717, now()),
  ('-0.912,100.456', 'unand-gerbang-utama', 'walking', 9, 664, now()),
  ('-0.912,100.456', 'unand-gerbang-utama', 'motorcycle', 2, 690, now()),
  ('-0.912,100.456', 'unand-gerbang-utama', 'driving-car', 3, 717, now()),
  ('-0.912,100.456', 'unand-pasar-baru', 'walking', 45, 3303, now()),
  ('-0.912,100.456', 'unand-pasar-baru', 'motorcycle', 9, 3435, now()),
  ('-0.912,100.456', 'unand-pasar-baru', 'driving-car', 12, 3567, now()),
  ('-0.912,100.456', 'unand-pintu-pauh', 'walking', 29, 2125, now()),
  ('-0.912,100.456', 'unand-pintu-pauh', 'motorcycle', 6, 2210, now()),
  ('-0.912,100.456', 'unand-pintu-pauh', 'driving-car', 8, 2295, now()),
  ('-0.918,100.463', 'unand-limau-manis', 'walking', 8, 593, now()),
  ('-0.918,100.463', 'unand-limau-manis', 'motorcycle', 2, 616, now()),
  ('-0.918,100.463', 'unand-limau-manis', 'driving-car', 3, 640, now()),
  ('-0.918,100.463', 'unand-gerbang-utama', 'walking', 8, 593, now()),
  ('-0.918,100.463', 'unand-gerbang-utama', 'motorcycle', 2, 616, now()),
  ('-0.918,100.463', 'unand-gerbang-utama', 'driving-car', 3, 640, now()),
  ('-0.918,100.463', 'unand-pasar-baru', 'walking', 53, 3948, now()),
  ('-0.918,100.463', 'unand-pasar-baru', 'motorcycle', 11, 4105, now()),
  ('-0.918,100.463', 'unand-pasar-baru', 'driving-car', 15, 4263, now()),
  ('-0.918,100.463', 'unand-pintu-pauh', 'walking', 39, 2904, now()),
  ('-0.918,100.463', 'unand-pintu-pauh', 'motorcycle', 8, 3020, now()),
  ('-0.918,100.463', 'unand-pintu-pauh', 'driving-car', 11, 3136, now()),
  ('-0.926,100.449', 'unand-limau-manis', 'walking', 31, 2283, now()),
  ('-0.926,100.449', 'unand-limau-manis', 'motorcycle', 6, 2374, now()),
  ('-0.926,100.449', 'unand-limau-manis', 'driving-car', 9, 2465, now()),
  ('-0.926,100.449', 'unand-gerbang-utama', 'walking', 31, 2283, now()),
  ('-0.926,100.449', 'unand-gerbang-utama', 'motorcycle', 6, 2374, now()),
  ('-0.926,100.449', 'unand-gerbang-utama', 'driving-car', 9, 2465, now()),
  ('-0.926,100.449', 'unand-pasar-baru', 'walking', 27, 2003, now()),
  ('-0.926,100.449', 'unand-pasar-baru', 'motorcycle', 6, 2083, now()),
  ('-0.926,100.449', 'unand-pasar-baru', 'driving-car', 8, 2163, now()),
  ('-0.926,100.449', 'unand-pintu-pauh', 'walking', 21, 1514, now()),
  ('-0.926,100.449', 'unand-pintu-pauh', 'motorcycle', 4, 1574, now()),
  ('-0.926,100.449', 'unand-pintu-pauh', 'driving-car', 6, 1635, now()),
  ('-0.923,100.448', 'unand-limau-manis', 'walking', 29, 2109, now()),
  ('-0.923,100.448', 'unand-limau-manis', 'motorcycle', 6, 2193, now()),
  ('-0.923,100.448', 'unand-limau-manis', 'driving-car', 8, 2277, now()),
  ('-0.923,100.448', 'unand-gerbang-utama', 'walking', 29, 2109, now()),
  ('-0.923,100.448', 'unand-gerbang-utama', 'motorcycle', 6, 2193, now()),
  ('-0.923,100.448', 'unand-gerbang-utama', 'driving-car', 8, 2277, now()),
  ('-0.923,100.448', 'unand-pasar-baru', 'walking', 24, 1774, now()),
  ('-0.923,100.448', 'unand-pasar-baru', 'motorcycle', 5, 1845, now()),
  ('-0.923,100.448', 'unand-pasar-baru', 'driving-car', 7, 1916, now()),
  ('-0.923,100.448', 'unand-pintu-pauh', 'walking', 15, 1059, now()),
  ('-0.923,100.448', 'unand-pintu-pauh', 'motorcycle', 3, 1101, now()),
  ('-0.923,100.448', 'unand-pintu-pauh', 'driving-car', 4, 1143, now()),
  ('-0.917,100.461', 'unand-limau-manis', 'walking', 7, 463, now()),
  ('-0.917,100.461', 'unand-limau-manis', 'motorcycle', 2, 481, now()),
  ('-0.917,100.461', 'unand-limau-manis', 'driving-car', 2, 500, now()),
  ('-0.917,100.461', 'unand-gerbang-utama', 'walking', 7, 463, now()),
  ('-0.917,100.461', 'unand-gerbang-utama', 'motorcycle', 2, 481, now()),
  ('-0.917,100.461', 'unand-gerbang-utama', 'driving-car', 2, 500, now()),
  ('-0.917,100.461', 'unand-pasar-baru', 'walking', 50, 3709, now()),
  ('-0.917,100.461', 'unand-pasar-baru', 'motorcycle', 10, 3857, now()),
  ('-0.917,100.461', 'unand-pasar-baru', 'driving-car', 14, 4005, now()),
  ('-0.917,100.461', 'unand-pintu-pauh', 'walking', 36, 2656, now()),
  ('-0.917,100.461', 'unand-pintu-pauh', 'motorcycle', 7, 2763, now()),
  ('-0.917,100.461', 'unand-pintu-pauh', 'driving-car', 10, 2869, now()),
  ('-0.925,100.440', 'unand-limau-manis', 'walking', 42, 3134, now()),
  ('-0.925,100.440', 'unand-limau-manis', 'motorcycle', 9, 3259, now()),
  ('-0.925,100.440', 'unand-limau-manis', 'driving-car', 12, 3384, now()),
  ('-0.925,100.440', 'unand-gerbang-utama', 'walking', 42, 3134, now()),
  ('-0.925,100.440', 'unand-gerbang-utama', 'motorcycle', 9, 3259, now()),
  ('-0.925,100.440', 'unand-gerbang-utama', 'driving-car', 12, 3384, now()),
  ('-0.925,100.440', 'unand-pasar-baru', 'walking', 10, 740, now()),
  ('-0.925,100.440', 'unand-pasar-baru', 'motorcycle', 2, 770, now()),
  ('-0.925,100.440', 'unand-pasar-baru', 'driving-car', 3, 799, now()),
  ('-0.925,100.440', 'unand-pintu-pauh', 'walking', 13, 944, now()),
  ('-0.925,100.440', 'unand-pintu-pauh', 'motorcycle', 3, 982, now()),
  ('-0.925,100.440', 'unand-pintu-pauh', 'driving-car', 4, 1019, now()),
  ('-0.923,100.444', 'unand-limau-manis', 'walking', 34, 2500, now()),
  ('-0.923,100.444', 'unand-limau-manis', 'motorcycle', 7, 2600, now()),
  ('-0.923,100.444', 'unand-limau-manis', 'driving-car', 9, 2700, now()),
  ('-0.923,100.444', 'unand-gerbang-utama', 'walking', 34, 2500, now()),
  ('-0.923,100.444', 'unand-gerbang-utama', 'motorcycle', 7, 2600, now()),
  ('-0.923,100.444', 'unand-gerbang-utama', 'driving-car', 9, 2700, now()),
  ('-0.923,100.444', 'unand-pasar-baru', 'walking', 18, 1306, now()),
  ('-0.923,100.444', 'unand-pasar-baru', 'motorcycle', 4, 1359, now()),
  ('-0.923,100.444', 'unand-pasar-baru', 'driving-car', 5, 1411, now()),
  ('-0.923,100.444', 'unand-pintu-pauh', 'walking', 11, 759, now()),
  ('-0.923,100.444', 'unand-pintu-pauh', 'motorcycle', 2, 789, now()),
  ('-0.923,100.444', 'unand-pintu-pauh', 'driving-car', 3, 819, now()),
  ('-0.927,100.441', 'unand-limau-manis', 'walking', 44, 3231, now()),
  ('-0.927,100.441', 'unand-limau-manis', 'motorcycle', 9, 3361, now()),
  ('-0.927,100.441', 'unand-limau-manis', 'driving-car', 12, 3490, now()),
  ('-0.927,100.441', 'unand-gerbang-utama', 'walking', 44, 3231, now()),
  ('-0.927,100.441', 'unand-gerbang-utama', 'motorcycle', 9, 3361, now()),
  ('-0.927,100.441', 'unand-gerbang-utama', 'driving-car', 12, 3490, now()),
  ('-0.927,100.441', 'unand-pasar-baru', 'walking', 14, 1018, now()),
  ('-0.927,100.441', 'unand-pasar-baru', 'motorcycle', 3, 1058, now()),
  ('-0.927,100.441', 'unand-pasar-baru', 'driving-car', 4, 1099, now()),
  ('-0.927,100.441', 'unand-pintu-pauh', 'walking', 18, 1301, now()),
  ('-0.927,100.441', 'unand-pintu-pauh', 'motorcycle', 4, 1353, now()),
  ('-0.927,100.441', 'unand-pintu-pauh', 'driving-car', 5, 1405, now()),
  ('-0.915,100.457', 'unand-limau-manis', 'walking', 7, 518, now()),
  ('-0.915,100.457', 'unand-limau-manis', 'motorcycle', 2, 538, now()),
  ('-0.915,100.457', 'unand-limau-manis', 'driving-car', 2, 559, now()),
  ('-0.915,100.457', 'unand-gerbang-utama', 'walking', 7, 518, now()),
  ('-0.915,100.457', 'unand-gerbang-utama', 'motorcycle', 2, 538, now()),
  ('-0.915,100.457', 'unand-gerbang-utama', 'driving-car', 2, 559, now()),
  ('-0.915,100.457', 'unand-pasar-baru', 'walking', 43, 3190, now()),
  ('-0.915,100.457', 'unand-pasar-baru', 'motorcycle', 9, 3318, now()),
  ('-0.915,100.457', 'unand-pasar-baru', 'driving-car', 12, 3445, now()),
  ('-0.915,100.457', 'unand-pintu-pauh', 'walking', 28, 2064, now()),
  ('-0.915,100.457', 'unand-pintu-pauh', 'motorcycle', 6, 2146, now()),
  ('-0.915,100.457', 'unand-pintu-pauh', 'driving-car', 8, 2229, now()),
  ('-0.927,100.442', 'unand-limau-manis', 'walking', 41, 3066, now()),
  ('-0.927,100.442', 'unand-limau-manis', 'motorcycle', 8, 3189, now()),
  ('-0.927,100.442', 'unand-limau-manis', 'driving-car', 12, 3312, now()),
  ('-0.927,100.442', 'unand-gerbang-utama', 'walking', 41, 3066, now()),
  ('-0.927,100.442', 'unand-gerbang-utama', 'motorcycle', 8, 3189, now()),
  ('-0.927,100.442', 'unand-gerbang-utama', 'driving-car', 12, 3312, now()),
  ('-0.927,100.442', 'unand-pasar-baru', 'walking', 15, 1125, now()),
  ('-0.927,100.442', 'unand-pasar-baru', 'motorcycle', 3, 1170, now()),
  ('-0.927,100.442', 'unand-pasar-baru', 'driving-car', 5, 1215, now()),
  ('-0.927,100.442', 'unand-pintu-pauh', 'walking', 17, 1238, now()),
  ('-0.927,100.442', 'unand-pintu-pauh', 'motorcycle', 4, 1287, now()),
  ('-0.927,100.442', 'unand-pintu-pauh', 'driving-car', 5, 1337, now()),
  ('-0.911,100.457', 'unand-limau-manis', 'walking', 8, 573, now()),
  ('-0.911,100.457', 'unand-limau-manis', 'motorcycle', 2, 595, now()),
  ('-0.911,100.457', 'unand-limau-manis', 'driving-car', 3, 618, now()),
  ('-0.911,100.457', 'unand-gerbang-utama', 'walking', 8, 573, now()),
  ('-0.911,100.457', 'unand-gerbang-utama', 'motorcycle', 2, 595, now()),
  ('-0.911,100.457', 'unand-gerbang-utama', 'driving-car', 3, 618, now()),
  ('-0.911,100.457', 'unand-pasar-baru', 'walking', 47, 3518, now()),
  ('-0.911,100.457', 'unand-pasar-baru', 'motorcycle', 10, 3658, now()),
  ('-0.911,100.457', 'unand-pasar-baru', 'driving-car', 13, 3799, now()),
  ('-0.911,100.457', 'unand-pintu-pauh', 'walking', 32, 2339, now()),
  ('-0.911,100.457', 'unand-pintu-pauh', 'motorcycle', 7, 2432, now()),
  ('-0.911,100.457', 'unand-pintu-pauh', 'driving-car', 9, 2526, now()),
  ('-0.926,100.446', 'unand-limau-manis', 'walking', 34, 2529, now()),
  ('-0.926,100.446', 'unand-limau-manis', 'motorcycle', 7, 2630, now()),
  ('-0.926,100.446', 'unand-limau-manis', 'driving-car', 10, 2731, now()),
  ('-0.926,100.446', 'unand-gerbang-utama', 'walking', 34, 2529, now()),
  ('-0.926,100.446', 'unand-gerbang-utama', 'motorcycle', 7, 2630, now()),
  ('-0.926,100.446', 'unand-gerbang-utama', 'driving-car', 10, 2731, now()),
  ('-0.926,100.446', 'unand-pasar-baru', 'walking', 23, 1659, now()),
  ('-0.926,100.446', 'unand-pasar-baru', 'motorcycle', 5, 1725, now()),
  ('-0.926,100.446', 'unand-pasar-baru', 'driving-car', 6, 1791, now()),
  ('-0.926,100.446', 'unand-pintu-pauh', 'walking', 18, 1305, now()),
  ('-0.926,100.446', 'unand-pintu-pauh', 'motorcycle', 4, 1357, now()),
  ('-0.926,100.446', 'unand-pintu-pauh', 'driving-car', 5, 1409, now()),
  ('-0.912,100.464', 'unand-limau-manis', 'walking', 9, 645, now()),
  ('-0.912,100.464', 'unand-limau-manis', 'motorcycle', 2, 671, now()),
  ('-0.912,100.464', 'unand-limau-manis', 'driving-car', 3, 697, now()),
  ('-0.912,100.464', 'unand-gerbang-utama', 'walking', 9, 645, now()),
  ('-0.912,100.464', 'unand-gerbang-utama', 'motorcycle', 2, 671, now()),
  ('-0.912,100.464', 'unand-gerbang-utama', 'driving-car', 3, 697, now()),
  ('-0.912,100.464', 'unand-pasar-baru', 'walking', 58, 4336, now()),
  ('-0.912,100.464', 'unand-pasar-baru', 'motorcycle', 12, 4510, now()),
  ('-0.912,100.464', 'unand-pasar-baru', 'driving-car', 16, 4683, now()),
  ('-0.912,100.464', 'unand-pintu-pauh', 'walking', 43, 3194, now()),
  ('-0.912,100.464', 'unand-pintu-pauh', 'motorcycle', 9, 3322, now()),
  ('-0.912,100.464', 'unand-pintu-pauh', 'driving-car', 12, 3449, now()),
  ('-0.913,100.458', 'unand-limau-manis', 'walking', 4, 288, now()),
  ('-0.913,100.458', 'unand-limau-manis', 'motorcycle', 1, 299, now()),
  ('-0.913,100.458', 'unand-limau-manis', 'driving-car', 2, 311, now()),
  ('-0.913,100.458', 'unand-gerbang-utama', 'walking', 4, 288, now()),
  ('-0.913,100.458', 'unand-gerbang-utama', 'motorcycle', 1, 299, now()),
  ('-0.913,100.458', 'unand-gerbang-utama', 'driving-car', 2, 311, now()),
  ('-0.913,100.458', 'unand-pasar-baru', 'walking', 47, 3521, now()),
  ('-0.913,100.458', 'unand-pasar-baru', 'motorcycle', 10, 3662, now()),
  ('-0.913,100.458', 'unand-pasar-baru', 'driving-car', 13, 3803, now()),
  ('-0.913,100.458', 'unand-pintu-pauh', 'walking', 32, 2371, now()),
  ('-0.913,100.458', 'unand-pintu-pauh', 'motorcycle', 7, 2466, now()),
  ('-0.913,100.458', 'unand-pintu-pauh', 'driving-car', 9, 2561, now()),
  ('-0.923,100.449', 'unand-limau-manis', 'walking', 27, 1980, now()),
  ('-0.923,100.449', 'unand-limau-manis', 'motorcycle', 6, 2059, now()),
  ('-0.923,100.449', 'unand-limau-manis', 'driving-car', 8, 2138, now()),
  ('-0.923,100.449', 'unand-gerbang-utama', 'walking', 27, 1980, now()),
  ('-0.923,100.449', 'unand-gerbang-utama', 'motorcycle', 6, 2059, now()),
  ('-0.923,100.449', 'unand-gerbang-utama', 'driving-car', 8, 2138, now()),
  ('-0.923,100.449', 'unand-pasar-baru', 'walking', 26, 1940, now()),
  ('-0.923,100.449', 'unand-pasar-baru', 'motorcycle', 6, 2018, now()),
  ('-0.923,100.449', 'unand-pasar-baru', 'driving-car', 7, 2095, now()),
  ('-0.923,100.449', 'unand-pintu-pauh', 'walking', 16, 1196, now()),
  ('-0.923,100.449', 'unand-pintu-pauh', 'motorcycle', 4, 1244, now()),
  ('-0.923,100.449', 'unand-pintu-pauh', 'driving-car', 5, 1292, now()),
  ('-0.915,100.463', 'unand-limau-manis', 'walking', 6, 443, now()),
  ('-0.915,100.463', 'unand-limau-manis', 'motorcycle', 2, 460, now()),
  ('-0.915,100.463', 'unand-limau-manis', 'driving-car', 2, 478, now()),
  ('-0.915,100.463', 'unand-gerbang-utama', 'walking', 6, 443, now()),
  ('-0.915,100.463', 'unand-gerbang-utama', 'motorcycle', 2, 460, now()),
  ('-0.915,100.463', 'unand-gerbang-utama', 'driving-car', 2, 478, now()),
  ('-0.915,100.463', 'unand-pasar-baru', 'walking', 55, 4073, now()),
  ('-0.915,100.463', 'unand-pasar-baru', 'motorcycle', 11, 4235, now()),
  ('-0.915,100.463', 'unand-pasar-baru', 'driving-car', 15, 4398, now()),
  ('-0.915,100.463', 'unand-pintu-pauh', 'walking', 40, 2979, now()),
  ('-0.915,100.463', 'unand-pintu-pauh', 'motorcycle', 8, 3098, now()),
  ('-0.915,100.463', 'unand-pintu-pauh', 'driving-car', 11, 3217, now()),
  ('-0.924,100.441', 'unand-limau-manis', 'walking', 40, 2963, now()),
  ('-0.924,100.441', 'unand-limau-manis', 'motorcycle', 8, 3081, now()),
  ('-0.924,100.441', 'unand-limau-manis', 'driving-car', 11, 3200, now()),
  ('-0.924,100.441', 'unand-gerbang-utama', 'walking', 40, 2963, now()),
  ('-0.924,100.441', 'unand-gerbang-utama', 'motorcycle', 8, 3081, now()),
  ('-0.924,100.441', 'unand-gerbang-utama', 'driving-car', 11, 3200, now()),
  ('-0.924,100.441', 'unand-pasar-baru', 'walking', 13, 916, now()),
  ('-0.924,100.441', 'unand-pasar-baru', 'motorcycle', 3, 953, now()),
  ('-0.924,100.441', 'unand-pasar-baru', 'driving-car', 4, 990, now()),
  ('-0.924,100.441', 'unand-pintu-pauh', 'walking', 12, 898, now()),
  ('-0.924,100.441', 'unand-pintu-pauh', 'motorcycle', 3, 933, now()),
  ('-0.924,100.441', 'unand-pintu-pauh', 'driving-car', 4, 969, now()),
  ('-0.925,100.446', 'unand-limau-manis', 'walking', 34, 2478, now()),
  ('-0.925,100.446', 'unand-limau-manis', 'motorcycle', 7, 2577, now()),
  ('-0.925,100.446', 'unand-limau-manis', 'driving-car', 9, 2676, now()),
  ('-0.925,100.446', 'unand-gerbang-utama', 'walking', 34, 2478, now()),
  ('-0.925,100.446', 'unand-gerbang-utama', 'motorcycle', 7, 2577, now()),
  ('-0.925,100.446', 'unand-gerbang-utama', 'driving-car', 9, 2676, now()),
  ('-0.925,100.446', 'unand-pasar-baru', 'walking', 22, 1610, now()),
  ('-0.925,100.446', 'unand-pasar-baru', 'motorcycle', 5, 1674, now()),
  ('-0.925,100.446', 'unand-pasar-baru', 'driving-car', 6, 1739, now()),
  ('-0.925,100.446', 'unand-pintu-pauh', 'walking', 16, 1200, now()),
  ('-0.925,100.446', 'unand-pintu-pauh', 'motorcycle', 4, 1248, now()),
  ('-0.925,100.446', 'unand-pintu-pauh', 'driving-car', 5, 1296, now()),
  ('-0.910,100.461', 'unand-limau-manis', 'walking', 9, 606, now()),
  ('-0.910,100.461', 'unand-limau-manis', 'motorcycle', 2, 631, now()),
  ('-0.910,100.461', 'unand-limau-manis', 'driving-car', 3, 655, now()),
  ('-0.910,100.461', 'unand-gerbang-utama', 'walking', 9, 606, now()),
  ('-0.910,100.461', 'unand-gerbang-utama', 'motorcycle', 2, 631, now()),
  ('-0.910,100.461', 'unand-gerbang-utama', 'driving-car', 3, 655, now()),
  ('-0.910,100.461', 'unand-pasar-baru', 'walking', 55, 4084, now()),
  ('-0.910,100.461', 'unand-pasar-baru', 'motorcycle', 11, 4247, now()),
  ('-0.910,100.461', 'unand-pasar-baru', 'driving-car', 15, 4410, now()),
  ('-0.910,100.461', 'unand-pintu-pauh', 'walking', 39, 2913, now()),
  ('-0.910,100.461', 'unand-pintu-pauh', 'motorcycle', 8, 3029, now()),
  ('-0.910,100.461', 'unand-pintu-pauh', 'driving-car', 11, 3146, now()),
  ('-0.913,100.465', 'unand-limau-manis', 'walking', 9, 651, now()),
  ('-0.913,100.465', 'unand-limau-manis', 'motorcycle', 2, 677, now()),
  ('-0.913,100.465', 'unand-limau-manis', 'driving-car', 3, 703, now()),
  ('-0.913,100.465', 'unand-gerbang-utama', 'walking', 9, 651, now()),
  ('-0.913,100.465', 'unand-gerbang-utama', 'motorcycle', 2, 677, now()),
  ('-0.913,100.465', 'unand-gerbang-utama', 'driving-car', 3, 703, now()),
  ('-0.913,100.465', 'unand-pasar-baru', 'walking', 59, 4356, now()),
  ('-0.913,100.465', 'unand-pasar-baru', 'motorcycle', 12, 4531, now()),
  ('-0.913,100.465', 'unand-pasar-baru', 'driving-car', 16, 4705, now()),
  ('-0.913,100.465', 'unand-pintu-pauh', 'walking', 44, 3230, now()),
  ('-0.913,100.465', 'unand-pintu-pauh', 'motorcycle', 9, 3359, now()),
  ('-0.913,100.465', 'unand-pintu-pauh', 'driving-car', 12, 3488, now()),
  ('-0.924,100.442', 'unand-limau-manis', 'walking', 39, 2869, now()),
  ('-0.924,100.442', 'unand-limau-manis', 'motorcycle', 8, 2984, now()),
  ('-0.924,100.442', 'unand-limau-manis', 'driving-car', 11, 3098, now()),
  ('-0.924,100.442', 'unand-gerbang-utama', 'walking', 39, 2869, now()),
  ('-0.924,100.442', 'unand-gerbang-utama', 'motorcycle', 8, 2984, now()),
  ('-0.924,100.442', 'unand-gerbang-utama', 'driving-car', 11, 3098, now()),
  ('-0.924,100.442', 'unand-pasar-baru', 'walking', 13, 948, now()),
  ('-0.924,100.442', 'unand-pasar-baru', 'motorcycle', 3, 985, now()),
  ('-0.924,100.442', 'unand-pasar-baru', 'driving-car', 4, 1023, now()),
  ('-0.924,100.442', 'unand-pintu-pauh', 'walking', 11, 783, now()),
  ('-0.924,100.442', 'unand-pintu-pauh', 'motorcycle', 3, 814, now()),
  ('-0.924,100.442', 'unand-pintu-pauh', 'driving-car', 3, 845, now()),
  ('-5.354,105.247', 'unila-bandarlampung', 'walking', 22, 1580, now()),
  ('-5.354,105.247', 'unila-bandarlampung', 'motorcycle', 5, 1643, now()),
  ('-5.354,105.247', 'unila-bandarlampung', 'driving-car', 6, 1706, now()),
  ('-5.354,105.247', 'unila-gerbang-utama', 'walking', 22, 1580, now()),
  ('-5.354,105.247', 'unila-gerbang-utama', 'motorcycle', 5, 1643, now()),
  ('-5.354,105.247', 'unila-gerbang-utama', 'driving-car', 6, 1706, now()),
  ('-5.354,105.247', 'unila-gerbang-kpbaru', 'walking', 9, 636, now()),
  ('-5.354,105.247', 'unila-gerbang-kpbaru', 'motorcycle', 2, 662, now()),
  ('-5.354,105.247', 'unila-gerbang-kpbaru', 'driving-car', 3, 687, now()),
  ('-5.354,105.247', 'unila-gerbang-gedongmeneng', 'walking', 34, 2485, now()),
  ('-5.354,105.247', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2584, now()),
  ('-5.354,105.247', 'unila-gerbang-gedongmeneng', 'driving-car', 9, 2684, now()),
  ('-5.351,105.244', 'unila-bandarlampung', 'walking', 26, 1880, now()),
  ('-5.351,105.244', 'unila-bandarlampung', 'motorcycle', 5, 1955, now()),
  ('-5.351,105.244', 'unila-bandarlampung', 'driving-car', 7, 2030, now()),
  ('-5.351,105.244', 'unila-gerbang-utama', 'walking', 26, 1880, now()),
  ('-5.351,105.244', 'unila-gerbang-utama', 'motorcycle', 5, 1955, now()),
  ('-5.351,105.244', 'unila-gerbang-utama', 'driving-car', 7, 2030, now()),
  ('-5.351,105.244', 'unila-gerbang-kpbaru', 'walking', 17, 1213, now()),
  ('-5.351,105.244', 'unila-gerbang-kpbaru', 'motorcycle', 4, 1261, now()),
  ('-5.351,105.244', 'unila-gerbang-kpbaru', 'driving-car', 5, 1310, now()),
  ('-5.351,105.244', 'unila-gerbang-gedongmeneng', 'walking', 36, 2670, now()),
  ('-5.351,105.244', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2777, now()),
  ('-5.351,105.244', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2884, now()),
  ('-5.365,105.238', 'unila-bandarlampung', 'walking', 11, 814, now()),
  ('-5.365,105.238', 'unila-bandarlampung', 'motorcycle', 3, 846, now()),
  ('-5.365,105.238', 'unila-bandarlampung', 'driving-car', 3, 879, now()),
  ('-5.365,105.238', 'unila-gerbang-utama', 'walking', 11, 814, now()),
  ('-5.365,105.238', 'unila-gerbang-utama', 'motorcycle', 3, 846, now()),
  ('-5.365,105.238', 'unila-gerbang-utama', 'driving-car', 3, 879, now()),
  ('-5.365,105.238', 'unila-gerbang-kpbaru', 'walking', 24, 1788, now()),
  ('-5.365,105.238', 'unila-gerbang-kpbaru', 'motorcycle', 5, 1859, now()),
  ('-5.365,105.238', 'unila-gerbang-kpbaru', 'driving-car', 7, 1931, now()),
  ('-5.365,105.238', 'unila-gerbang-gedongmeneng', 'walking', 9, 623, now()),
  ('-5.365,105.238', 'unila-gerbang-gedongmeneng', 'motorcycle', 2, 647, now()),
  ('-5.365,105.238', 'unila-gerbang-gedongmeneng', 'driving-car', 3, 672, now()),
  ('-5.360,105.233', 'unila-bandarlampung', 'walking', 22, 1614, now()),
  ('-5.360,105.233', 'unila-bandarlampung', 'motorcycle', 5, 1678, now()),
  ('-5.360,105.233', 'unila-bandarlampung', 'driving-car', 6, 1743, now()),
  ('-5.360,105.233', 'unila-gerbang-utama', 'walking', 22, 1614, now()),
  ('-5.360,105.233', 'unila-gerbang-utama', 'motorcycle', 5, 1678, now()),
  ('-5.360,105.233', 'unila-gerbang-utama', 'driving-car', 6, 1743, now()),
  ('-5.360,105.233', 'unila-gerbang-kpbaru', 'walking', 29, 2170, now()),
  ('-5.360,105.233', 'unila-gerbang-kpbaru', 'motorcycle', 6, 2257, now()),
  ('-5.360,105.233', 'unila-gerbang-kpbaru', 'driving-car', 8, 2344, now()),
  ('-5.360,105.233', 'unila-gerbang-gedongmeneng', 'walking', 22, 1616, now()),
  ('-5.360,105.233', 'unila-gerbang-gedongmeneng', 'motorcycle', 5, 1681, now()),
  ('-5.360,105.233', 'unila-gerbang-gedongmeneng', 'driving-car', 6, 1746, now()),
  ('-5.351,105.247', 'unila-bandarlampung', 'walking', 26, 1879, now()),
  ('-5.351,105.247', 'unila-bandarlampung', 'motorcycle', 5, 1954, now()),
  ('-5.351,105.247', 'unila-bandarlampung', 'driving-car', 7, 2029, now()),
  ('-5.351,105.247', 'unila-gerbang-utama', 'walking', 26, 1879, now()),
  ('-5.351,105.247', 'unila-gerbang-utama', 'motorcycle', 5, 1954, now()),
  ('-5.351,105.247', 'unila-gerbang-utama', 'driving-car', 7, 2029, now()),
  ('-5.351,105.247', 'unila-gerbang-kpbaru', 'walking', 13, 945, now()),
  ('-5.351,105.247', 'unila-gerbang-kpbaru', 'motorcycle', 3, 983, now()),
  ('-5.351,105.247', 'unila-gerbang-kpbaru', 'driving-car', 4, 1021, now()),
  ('-5.351,105.247', 'unila-gerbang-gedongmeneng', 'walking', 37, 2766, now()),
  ('-5.351,105.247', 'unila-gerbang-gedongmeneng', 'motorcycle', 8, 2877, now()),
  ('-5.351,105.247', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2988, now()),
  ('-5.365,105.236', 'unila-bandarlampung', 'walking', 14, 1013, now()),
  ('-5.365,105.236', 'unila-bandarlampung', 'motorcycle', 3, 1053, now()),
  ('-5.365,105.236', 'unila-bandarlampung', 'driving-car', 4, 1094, now()),
  ('-5.365,105.236', 'unila-gerbang-utama', 'walking', 14, 1013, now()),
  ('-5.365,105.236', 'unila-gerbang-utama', 'motorcycle', 3, 1053, now()),
  ('-5.365,105.236', 'unila-gerbang-utama', 'driving-car', 4, 1094, now()),
  ('-5.365,105.236', 'unila-gerbang-kpbaru', 'walking', 27, 1960, now()),
  ('-5.365,105.236', 'unila-gerbang-kpbaru', 'motorcycle', 6, 2038, now()),
  ('-5.365,105.236', 'unila-gerbang-kpbaru', 'driving-car', 8, 2117, now()),
  ('-5.365,105.236', 'unila-gerbang-gedongmeneng', 'walking', 10, 704, now()),
  ('-5.365,105.236', 'unila-gerbang-gedongmeneng', 'motorcycle', 2, 732, now()),
  ('-5.365,105.236', 'unila-gerbang-gedongmeneng', 'driving-car', 3, 760, now()),
  ('-5.359,105.236', 'unila-bandarlampung', 'walking', 18, 1300, now()),
  ('-5.359,105.236', 'unila-bandarlampung', 'motorcycle', 4, 1352, now()),
  ('-5.359,105.236', 'unila-bandarlampung', 'driving-car', 5, 1404, now()),
  ('-5.359,105.236', 'unila-gerbang-utama', 'walking', 18, 1300, now()),
  ('-5.359,105.236', 'unila-gerbang-utama', 'motorcycle', 4, 1352, now()),
  ('-5.359,105.236', 'unila-gerbang-utama', 'driving-car', 5, 1404, now()),
  ('-5.359,105.236', 'unila-gerbang-kpbaru', 'walking', 23, 1704, now()),
  ('-5.359,105.236', 'unila-gerbang-kpbaru', 'motorcycle', 5, 1772, now()),
  ('-5.359,105.236', 'unila-gerbang-kpbaru', 'driving-car', 7, 1840, now()),
  ('-5.359,105.236', 'unila-gerbang-gedongmeneng', 'walking', 21, 1575, now()),
  ('-5.359,105.236', 'unila-gerbang-gedongmeneng', 'motorcycle', 5, 1638, now()),
  ('-5.359,105.236', 'unila-gerbang-gedongmeneng', 'driving-car', 6, 1701, now()),
  ('-5.370,105.238', 'unila-bandarlampung', 'walking', 15, 1095, now()),
  ('-5.370,105.238', 'unila-bandarlampung', 'motorcycle', 3, 1139, now()),
  ('-5.370,105.238', 'unila-bandarlampung', 'driving-car', 4, 1183, now()),
  ('-5.370,105.238', 'unila-gerbang-utama', 'walking', 15, 1095, now()),
  ('-5.370,105.238', 'unila-gerbang-utama', 'motorcycle', 3, 1139, now()),
  ('-5.370,105.238', 'unila-gerbang-utama', 'driving-car', 4, 1183, now()),
  ('-5.370,105.238', 'unila-gerbang-kpbaru', 'walking', 30, 2191, now()),
  ('-5.370,105.238', 'unila-gerbang-kpbaru', 'motorcycle', 6, 2279, now()),
  ('-5.370,105.238', 'unila-gerbang-kpbaru', 'driving-car', 8, 2367, now()),
  ('-5.370,105.238', 'unila-gerbang-gedongmeneng', 'walking', 3, 205, now()),
  ('-5.370,105.238', 'unila-gerbang-gedongmeneng', 'motorcycle', 1, 213, now()),
  ('-5.370,105.238', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 221, now()),
  ('-5.359,105.249', 'unila-bandarlampung', 'walking', 16, 1140, now()),
  ('-5.359,105.249', 'unila-bandarlampung', 'motorcycle', 3, 1186, now()),
  ('-5.359,105.249', 'unila-bandarlampung', 'driving-car', 5, 1231, now()),
  ('-5.359,105.249', 'unila-gerbang-utama', 'walking', 16, 1140, now()),
  ('-5.359,105.249', 'unila-gerbang-utama', 'motorcycle', 3, 1186, now()),
  ('-5.359,105.249', 'unila-gerbang-utama', 'driving-car', 5, 1231, now()),
  ('-5.359,105.249', 'unila-gerbang-kpbaru', 'walking', 2, 148, now()),
  ('-5.359,105.249', 'unila-gerbang-kpbaru', 'motorcycle', 1, 153, now()),
  ('-5.359,105.249', 'unila-gerbang-kpbaru', 'driving-car', 2, 159, now()),
  ('-5.359,105.249', 'unila-gerbang-gedongmeneng', 'walking', 28, 2081, now()),
  ('-5.359,105.249', 'unila-gerbang-gedongmeneng', 'motorcycle', 6, 2165, now()),
  ('-5.359,105.249', 'unila-gerbang-gedongmeneng', 'driving-car', 8, 2248, now()),
  ('-5.371,105.238', 'unila-bandarlampung', 'walking', 17, 1260, now()),
  ('-5.371,105.238', 'unila-bandarlampung', 'motorcycle', 4, 1310, now()),
  ('-5.371,105.238', 'unila-bandarlampung', 'driving-car', 5, 1361, now()),
  ('-5.371,105.238', 'unila-gerbang-utama', 'walking', 17, 1260, now()),
  ('-5.371,105.238', 'unila-gerbang-utama', 'motorcycle', 4, 1310, now()),
  ('-5.371,105.238', 'unila-gerbang-utama', 'driving-car', 5, 1361, now()),
  ('-5.371,105.238', 'unila-gerbang-kpbaru', 'walking', 32, 2365, now()),
  ('-5.371,105.238', 'unila-gerbang-kpbaru', 'motorcycle', 7, 2460, now()),
  ('-5.371,105.238', 'unila-gerbang-kpbaru', 'driving-car', 9, 2554, now()),
  ('-5.371,105.238', 'unila-gerbang-gedongmeneng', 'walking', 5, 320, now()),
  ('-5.371,105.238', 'unila-gerbang-gedongmeneng', 'motorcycle', 1, 333, now()),
  ('-5.371,105.238', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 346, now()),
  ('-5.353,105.248', 'unila-bandarlampung', 'walking', 23, 1696, now()),
  ('-5.353,105.248', 'unila-bandarlampung', 'motorcycle', 5, 1764, now()),
  ('-5.353,105.248', 'unila-bandarlampung', 'driving-car', 7, 1832, now()),
  ('-5.353,105.248', 'unila-gerbang-utama', 'walking', 23, 1696, now()),
  ('-5.353,105.248', 'unila-gerbang-utama', 'motorcycle', 5, 1764, now()),
  ('-5.353,105.248', 'unila-gerbang-utama', 'driving-car', 7, 1832, now()),
  ('-5.353,105.248', 'unila-gerbang-kpbaru', 'walking', 10, 726, now()),
  ('-5.353,105.248', 'unila-gerbang-kpbaru', 'motorcycle', 2, 755, now()),
  ('-5.353,105.248', 'unila-gerbang-kpbaru', 'driving-car', 3, 784, now()),
  ('-5.353,105.248', 'unila-gerbang-gedongmeneng', 'walking', 35, 2603, now()),
  ('-5.353,105.248', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2707, now()),
  ('-5.353,105.248', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2811, now()),
  ('-5.356,105.249', 'unila-bandarlampung', 'walking', 19, 1355, now()),
  ('-5.356,105.249', 'unila-bandarlampung', 'motorcycle', 4, 1409, now()),
  ('-5.356,105.249', 'unila-bandarlampung', 'driving-car', 5, 1463, now()),
  ('-5.356,105.249', 'unila-gerbang-utama', 'walking', 19, 1355, now()),
  ('-5.356,105.249', 'unila-gerbang-utama', 'motorcycle', 4, 1409, now()),
  ('-5.356,105.249', 'unila-gerbang-utama', 'driving-car', 5, 1463, now()),
  ('-5.356,105.249', 'unila-gerbang-kpbaru', 'walking', 5, 303, now()),
  ('-5.356,105.249', 'unila-gerbang-kpbaru', 'motorcycle', 1, 315, now()),
  ('-5.356,105.249', 'unila-gerbang-kpbaru', 'driving-car', 2, 327, now()),
  ('-5.356,105.249', 'unila-gerbang-gedongmeneng', 'walking', 31, 2289, now()),
  ('-5.356,105.249', 'unila-gerbang-gedongmeneng', 'motorcycle', 6, 2380, now()),
  ('-5.356,105.249', 'unila-gerbang-gedongmeneng', 'driving-car', 9, 2472, now()),
  ('-5.351,105.243', 'unila-bandarlampung', 'walking', 26, 1934, now()),
  ('-5.351,105.243', 'unila-bandarlampung', 'motorcycle', 6, 2011, now()),
  ('-5.351,105.243', 'unila-bandarlampung', 'driving-car', 7, 2088, now()),
  ('-5.351,105.243', 'unila-gerbang-utama', 'walking', 26, 1934, now()),
  ('-5.351,105.243', 'unila-gerbang-utama', 'motorcycle', 6, 2011, now()),
  ('-5.351,105.243', 'unila-gerbang-utama', 'driving-car', 7, 2088, now()),
  ('-5.351,105.243', 'unila-gerbang-kpbaru', 'walking', 19, 1351, now()),
  ('-5.351,105.243', 'unila-gerbang-kpbaru', 'motorcycle', 4, 1405, now()),
  ('-5.351,105.243', 'unila-gerbang-kpbaru', 'driving-car', 5, 1459, now()),
  ('-5.351,105.243', 'unila-gerbang-gedongmeneng', 'walking', 36, 2683, now()),
  ('-5.351,105.243', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2790, now()),
  ('-5.351,105.243', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2897, now()),
  ('-5.355,105.251', 'unila-bandarlampung', 'walking', 22, 1638, now()),
  ('-5.355,105.251', 'unila-bandarlampung', 'motorcycle', 5, 1703, now()),
  ('-5.355,105.251', 'unila-bandarlampung', 'driving-car', 6, 1769, now()),
  ('-5.355,105.251', 'unila-gerbang-utama', 'walking', 22, 1638, now()),
  ('-5.355,105.251', 'unila-gerbang-utama', 'motorcycle', 5, 1703, now()),
  ('-5.355,105.251', 'unila-gerbang-utama', 'driving-car', 6, 1769, now()),
  ('-5.355,105.251', 'unila-gerbang-kpbaru', 'walking', 8, 534, now()),
  ('-5.355,105.251', 'unila-gerbang-kpbaru', 'motorcycle', 2, 555, now()),
  ('-5.355,105.251', 'unila-gerbang-kpbaru', 'driving-car', 2, 576, now()),
  ('-5.355,105.251', 'unila-gerbang-gedongmeneng', 'walking', 35, 2579, now()),
  ('-5.355,105.251', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2682, now()),
  ('-5.355,105.251', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2785, now()),
  ('-5.352,105.244', 'unila-bandarlampung', 'walking', 24, 1759, now()),
  ('-5.352,105.244', 'unila-bandarlampung', 'motorcycle', 5, 1829, now()),
  ('-5.352,105.244', 'unila-bandarlampung', 'driving-car', 7, 1899, now()),
  ('-5.352,105.244', 'unila-gerbang-utama', 'walking', 24, 1759, now()),
  ('-5.352,105.244', 'unila-gerbang-utama', 'motorcycle', 5, 1829, now()),
  ('-5.352,105.244', 'unila-gerbang-utama', 'driving-car', 7, 1899, now()),
  ('-5.352,105.244', 'unila-gerbang-kpbaru', 'walking', 15, 1065, now()),
  ('-5.352,105.244', 'unila-gerbang-kpbaru', 'motorcycle', 3, 1108, now()),
  ('-5.352,105.244', 'unila-gerbang-kpbaru', 'driving-car', 4, 1150, now()),
  ('-5.352,105.244', 'unila-gerbang-gedongmeneng', 'walking', 35, 2573, now()),
  ('-5.352,105.244', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2675, now()),
  ('-5.352,105.244', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2778, now()),
  ('-5.353,105.252', 'unila-bandarlampung', 'walking', 28, 2051, now()),
  ('-5.353,105.252', 'unila-bandarlampung', 'motorcycle', 6, 2133, now()),
  ('-5.353,105.252', 'unila-bandarlampung', 'driving-car', 8, 2215, now()),
  ('-5.353,105.252', 'unila-gerbang-utama', 'walking', 28, 2051, now()),
  ('-5.353,105.252', 'unila-gerbang-utama', 'motorcycle', 6, 2133, now()),
  ('-5.353,105.252', 'unila-gerbang-utama', 'driving-car', 8, 2215, now()),
  ('-5.353,105.252', 'unila-gerbang-kpbaru', 'walking', 13, 948, now()),
  ('-5.353,105.252', 'unila-gerbang-kpbaru', 'motorcycle', 3, 985, now()),
  ('-5.353,105.252', 'unila-gerbang-kpbaru', 'driving-car', 4, 1023, now()),
  ('-5.353,105.252', 'unila-gerbang-gedongmeneng', 'walking', 40, 2994, now()),
  ('-5.353,105.252', 'unila-gerbang-gedongmeneng', 'motorcycle', 8, 3114, now()),
  ('-5.353,105.252', 'unila-gerbang-gedongmeneng', 'driving-car', 11, 3233, now()),
  ('-5.359,105.238', 'unila-bandarlampung', 'walking', 15, 1099, now()),
  ('-5.359,105.238', 'unila-bandarlampung', 'motorcycle', 3, 1143, now()),
  ('-5.359,105.238', 'unila-bandarlampung', 'driving-car', 4, 1187, now()),
  ('-5.359,105.238', 'unila-gerbang-utama', 'walking', 15, 1099, now()),
  ('-5.359,105.238', 'unila-gerbang-utama', 'motorcycle', 3, 1143, now()),
  ('-5.359,105.238', 'unila-gerbang-utama', 'driving-car', 4, 1187, now()),
  ('-5.359,105.238', 'unila-gerbang-kpbaru', 'walking', 20, 1474, now()),
  ('-5.359,105.238', 'unila-gerbang-kpbaru', 'motorcycle', 4, 1533, now()),
  ('-5.359,105.238', 'unila-gerbang-kpbaru', 'driving-car', 6, 1592, now()),
  ('-5.359,105.238', 'unila-gerbang-gedongmeneng', 'walking', 20, 1491, now()),
  ('-5.359,105.238', 'unila-gerbang-gedongmeneng', 'motorcycle', 4, 1551, now()),
  ('-5.359,105.238', 'unila-gerbang-gedongmeneng', 'driving-car', 6, 1611, now()),
  ('-5.370,105.236', 'unila-bandarlampung', 'walking', 18, 1326, now()),
  ('-5.370,105.236', 'unila-bandarlampung', 'motorcycle', 4, 1379, now()),
  ('-5.370,105.236', 'unila-bandarlampung', 'driving-car', 5, 1432, now()),
  ('-5.370,105.236', 'unila-gerbang-utama', 'walking', 18, 1326, now()),
  ('-5.370,105.236', 'unila-gerbang-utama', 'motorcycle', 4, 1379, now()),
  ('-5.370,105.236', 'unila-gerbang-utama', 'driving-car', 5, 1432, now()),
  ('-5.370,105.236', 'unila-gerbang-kpbaru', 'walking', 33, 2416, now()),
  ('-5.370,105.236', 'unila-gerbang-kpbaru', 'motorcycle', 7, 2513, now()),
  ('-5.370,105.236', 'unila-gerbang-kpbaru', 'driving-car', 9, 2610, now()),
  ('-5.370,105.236', 'unila-gerbang-gedongmeneng', 'walking', 6, 431, now()),
  ('-5.370,105.236', 'unila-gerbang-gedongmeneng', 'motorcycle', 2, 449, now()),
  ('-5.370,105.236', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 466, now()),
  ('-5.370,105.239', 'unila-bandarlampung', 'walking', 14, 1028, now()),
  ('-5.370,105.239', 'unila-bandarlampung', 'motorcycle', 3, 1069, now()),
  ('-5.370,105.239', 'unila-bandarlampung', 'driving-car', 4, 1110, now()),
  ('-5.370,105.239', 'unila-gerbang-utama', 'walking', 14, 1028, now()),
  ('-5.370,105.239', 'unila-gerbang-utama', 'motorcycle', 3, 1069, now()),
  ('-5.370,105.239', 'unila-gerbang-utama', 'driving-car', 4, 1110, now()),
  ('-5.370,105.239', 'unila-gerbang-kpbaru', 'walking', 29, 2133, now()),
  ('-5.370,105.239', 'unila-gerbang-kpbaru', 'motorcycle', 6, 2218, now()),
  ('-5.370,105.239', 'unila-gerbang-kpbaru', 'driving-car', 8, 2303, now()),
  ('-5.370,105.239', 'unila-gerbang-gedongmeneng', 'walking', 2, 85, now()),
  ('-5.370,105.239', 'unila-gerbang-gedongmeneng', 'motorcycle', 1, 88, now()),
  ('-5.370,105.239', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 92, now()),
  ('-5.369,105.239', 'unila-bandarlampung', 'walking', 12, 844, now()),
  ('-5.369,105.239', 'unila-bandarlampung', 'motorcycle', 3, 878, now()),
  ('-5.369,105.239', 'unila-bandarlampung', 'driving-car', 4, 911, now()),
  ('-5.369,105.239', 'unila-gerbang-utama', 'walking', 12, 844, now()),
  ('-5.369,105.239', 'unila-gerbang-utama', 'motorcycle', 3, 878, now()),
  ('-5.369,105.239', 'unila-gerbang-utama', 'driving-car', 4, 911, now()),
  ('-5.369,105.239', 'unila-gerbang-kpbaru', 'walking', 26, 1945, now()),
  ('-5.369,105.239', 'unila-gerbang-kpbaru', 'motorcycle', 6, 2023, now()),
  ('-5.369,105.239', 'unila-gerbang-kpbaru', 'driving-car', 8, 2101, now()),
  ('-5.369,105.239', 'unila-gerbang-gedongmeneng', 'walking', 2, 124, now()),
  ('-5.369,105.239', 'unila-gerbang-gedongmeneng', 'motorcycle', 1, 129, now()),
  ('-5.369,105.239', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 134, now()),
  ('-5.353,105.253', 'unila-bandarlampung', 'walking', 28, 2066, now()),
  ('-5.353,105.253', 'unila-bandarlampung', 'motorcycle', 6, 2149, now()),
  ('-5.353,105.253', 'unila-bandarlampung', 'driving-car', 8, 2232, now()),
  ('-5.353,105.253', 'unila-gerbang-utama', 'walking', 28, 2066, now()),
  ('-5.353,105.253', 'unila-gerbang-utama', 'motorcycle', 6, 2149, now()),
  ('-5.353,105.253', 'unila-gerbang-utama', 'driving-car', 8, 2232, now()),
  ('-5.353,105.253', 'unila-gerbang-kpbaru', 'walking', 13, 961, now()),
  ('-5.353,105.253', 'unila-gerbang-kpbaru', 'motorcycle', 3, 1000, now()),
  ('-5.353,105.253', 'unila-gerbang-kpbaru', 'driving-car', 4, 1038, now()),
  ('-5.353,105.253', 'unila-gerbang-gedongmeneng', 'walking', 41, 3008, now()),
  ('-5.353,105.253', 'unila-gerbang-gedongmeneng', 'motorcycle', 8, 3128, now()),
  ('-5.353,105.253', 'unila-gerbang-gedongmeneng', 'driving-car', 11, 3248, now()),
  ('-5.352,105.247', 'unila-bandarlampung', 'walking', 24, 1778, now()),
  ('-5.352,105.247', 'unila-bandarlampung', 'motorcycle', 5, 1849, now()),
  ('-5.352,105.247', 'unila-bandarlampung', 'driving-car', 7, 1920, now()),
  ('-5.352,105.247', 'unila-gerbang-utama', 'walking', 24, 1778, now()),
  ('-5.352,105.247', 'unila-gerbang-utama', 'motorcycle', 5, 1849, now()),
  ('-5.352,105.247', 'unila-gerbang-utama', 'driving-car', 7, 1920, now()),
  ('-5.352,105.247', 'unila-gerbang-kpbaru', 'walking', 12, 863, now()),
  ('-5.352,105.247', 'unila-gerbang-kpbaru', 'motorcycle', 3, 897, now()),
  ('-5.352,105.247', 'unila-gerbang-kpbaru', 'driving-car', 4, 932, now()),
  ('-5.352,105.247', 'unila-gerbang-gedongmeneng', 'walking', 36, 2663, now()),
  ('-5.352,105.247', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2769, now()),
  ('-5.352,105.247', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2876, now()),
  ('-5.366,105.238', 'unila-bandarlampung', 'walking', 11, 805, now()),
  ('-5.366,105.238', 'unila-bandarlampung', 'motorcycle', 3, 837, now()),
  ('-5.366,105.238', 'unila-bandarlampung', 'driving-car', 3, 869, now()),
  ('-5.366,105.238', 'unila-gerbang-utama', 'walking', 11, 805, now()),
  ('-5.366,105.238', 'unila-gerbang-utama', 'motorcycle', 3, 837, now()),
  ('-5.366,105.238', 'unila-gerbang-utama', 'driving-car', 3, 869, now()),
  ('-5.366,105.238', 'unila-gerbang-kpbaru', 'walking', 25, 1834, now()),
  ('-5.366,105.238', 'unila-gerbang-kpbaru', 'motorcycle', 5, 1907, now()),
  ('-5.366,105.238', 'unila-gerbang-kpbaru', 'driving-car', 7, 1980, now()),
  ('-5.366,105.238', 'unila-gerbang-gedongmeneng', 'walking', 7, 478, now()),
  ('-5.366,105.238', 'unila-gerbang-gedongmeneng', 'motorcycle', 2, 497, now()),
  ('-5.366,105.238', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 516, now()),
  ('-5.366,105.233', 'unila-bandarlampung', 'walking', 20, 1483, now()),
  ('-5.366,105.233', 'unila-bandarlampung', 'motorcycle', 4, 1542, now()),
  ('-5.366,105.233', 'unila-bandarlampung', 'driving-car', 6, 1601, now()),
  ('-5.366,105.233', 'unila-gerbang-utama', 'walking', 20, 1483, now()),
  ('-5.366,105.233', 'unila-gerbang-utama', 'motorcycle', 4, 1542, now()),
  ('-5.366,105.233', 'unila-gerbang-utama', 'driving-car', 6, 1601, now()),
  ('-5.366,105.233', 'unila-gerbang-kpbaru', 'walking', 32, 2398, now()),
  ('-5.366,105.233', 'unila-gerbang-kpbaru', 'motorcycle', 7, 2493, now()),
  ('-5.366,105.233', 'unila-gerbang-kpbaru', 'driving-car', 9, 2589, now()),
  ('-5.366,105.233', 'unila-gerbang-gedongmeneng', 'walking', 14, 1006, now()),
  ('-5.366,105.233', 'unila-gerbang-gedongmeneng', 'motorcycle', 3, 1047, now()),
  ('-5.366,105.233', 'unila-gerbang-gedongmeneng', 'driving-car', 4, 1087, now()),
  ('-5.366,105.237', 'unila-bandarlampung', 'walking', 14, 984, now()),
  ('-5.366,105.237', 'unila-bandarlampung', 'motorcycle', 3, 1023, now()),
  ('-5.366,105.237', 'unila-bandarlampung', 'driving-car', 4, 1062, now()),
  ('-5.366,105.237', 'unila-gerbang-utama', 'walking', 14, 984, now()),
  ('-5.366,105.237', 'unila-gerbang-utama', 'motorcycle', 3, 1023, now()),
  ('-5.366,105.237', 'unila-gerbang-utama', 'driving-car', 4, 1062, now()),
  ('-5.366,105.237', 'unila-gerbang-kpbaru', 'walking', 27, 1965, now()),
  ('-5.366,105.237', 'unila-gerbang-kpbaru', 'motorcycle', 6, 2044, now()),
  ('-5.366,105.237', 'unila-gerbang-kpbaru', 'driving-car', 8, 2122, now()),
  ('-5.366,105.237', 'unila-gerbang-gedongmeneng', 'walking', 9, 618, now()),
  ('-5.366,105.237', 'unila-gerbang-gedongmeneng', 'motorcycle', 2, 642, now()),
  ('-5.366,105.237', 'unila-gerbang-gedongmeneng', 'driving-car', 3, 667, now()),
  ('-5.353,105.249', 'unila-bandarlampung', 'walking', 24, 1736, now()),
  ('-5.353,105.249', 'unila-bandarlampung', 'motorcycle', 5, 1806, now()),
  ('-5.353,105.249', 'unila-bandarlampung', 'driving-car', 7, 1875, now()),
  ('-5.353,105.249', 'unila-gerbang-utama', 'walking', 24, 1736, now()),
  ('-5.353,105.249', 'unila-gerbang-utama', 'motorcycle', 5, 1806, now()),
  ('-5.353,105.249', 'unila-gerbang-utama', 'driving-car', 7, 1875, now()),
  ('-5.353,105.249', 'unila-gerbang-kpbaru', 'walking', 10, 678, now()),
  ('-5.353,105.249', 'unila-gerbang-kpbaru', 'motorcycle', 2, 705, now()),
  ('-5.353,105.249', 'unila-gerbang-kpbaru', 'driving-car', 3, 732, now()),
  ('-5.353,105.249', 'unila-gerbang-gedongmeneng', 'walking', 36, 2664, now()),
  ('-5.353,105.249', 'unila-gerbang-gedongmeneng', 'motorcycle', 7, 2770, now()),
  ('-5.353,105.249', 'unila-gerbang-gedongmeneng', 'driving-car', 10, 2877, now()),
  ('-5.359,105.252', 'unila-bandarlampung', 'walking', 18, 1350, now()),
  ('-5.359,105.252', 'unila-bandarlampung', 'motorcycle', 4, 1404, now()),
  ('-5.359,105.252', 'unila-bandarlampung', 'driving-car', 5, 1458, now()),
  ('-5.359,105.252', 'unila-gerbang-utama', 'walking', 18, 1350, now()),
  ('-5.359,105.252', 'unila-gerbang-utama', 'motorcycle', 4, 1404, now()),
  ('-5.359,105.252', 'unila-gerbang-utama', 'driving-car', 5, 1458, now()),
  ('-5.359,105.252', 'unila-gerbang-kpbaru', 'walking', 6, 430, now()),
  ('-5.359,105.252', 'unila-gerbang-kpbaru', 'motorcycle', 2, 447, now()),
  ('-5.359,105.252', 'unila-gerbang-kpbaru', 'driving-car', 2, 464, now()),
  ('-5.359,105.252', 'unila-gerbang-gedongmeneng', 'walking', 31, 2278, now()),
  ('-5.359,105.252', 'unila-gerbang-gedongmeneng', 'motorcycle', 6, 2369, now()),
  ('-5.359,105.252', 'unila-gerbang-gedongmeneng', 'driving-car', 9, 2460, now()),
  ('-5.350,105.247', 'unila-bandarlampung', 'walking', 28, 2036, now()),
  ('-5.350,105.247', 'unila-bandarlampung', 'motorcycle', 6, 2118, now()),
  ('-5.350,105.247', 'unila-bandarlampung', 'driving-car', 8, 2199, now()),
  ('-5.350,105.247', 'unila-gerbang-utama', 'walking', 28, 2036, now()),
  ('-5.350,105.247', 'unila-gerbang-utama', 'motorcycle', 6, 2118, now()),
  ('-5.350,105.247', 'unila-gerbang-utama', 'driving-car', 8, 2199, now()),
  ('-5.350,105.247', 'unila-gerbang-kpbaru', 'walking', 16, 1159, now()),
  ('-5.350,105.247', 'unila-gerbang-kpbaru', 'motorcycle', 4, 1205, now()),
  ('-5.350,105.247', 'unila-gerbang-kpbaru', 'driving-car', 5, 1251, now()),
  ('-5.350,105.247', 'unila-gerbang-gedongmeneng', 'walking', 39, 2896, now()),
  ('-5.350,105.247', 'unila-gerbang-gedongmeneng', 'motorcycle', 8, 3012, now()),
  ('-5.350,105.247', 'unila-gerbang-gedongmeneng', 'driving-car', 11, 3128, now()),
  ('-5.368,105.241', 'unila-bandarlampung', 'walking', 8, 585, now()),
  ('-5.368,105.241', 'unila-bandarlampung', 'motorcycle', 2, 608, now()),
  ('-5.368,105.241', 'unila-bandarlampung', 'driving-car', 3, 632, now()),
  ('-5.368,105.241', 'unila-gerbang-utama', 'walking', 8, 585, now()),
  ('-5.368,105.241', 'unila-gerbang-utama', 'motorcycle', 2, 608, now()),
  ('-5.368,105.241', 'unila-gerbang-utama', 'driving-car', 3, 632, now()),
  ('-5.368,105.241', 'unila-gerbang-kpbaru', 'walking', 23, 1688, now()),
  ('-5.368,105.241', 'unila-gerbang-kpbaru', 'motorcycle', 5, 1755, now()),
  ('-5.368,105.241', 'unila-gerbang-kpbaru', 'driving-car', 7, 1823, now()),
  ('-5.368,105.241', 'unila-gerbang-gedongmeneng', 'walking', 5, 373, now()),
  ('-5.368,105.241', 'unila-gerbang-gedongmeneng', 'motorcycle', 1, 387, now()),
  ('-5.368,105.241', 'unila-gerbang-gedongmeneng', 'driving-car', 2, 402, now()),
  ('-0.907,100.357', 'unp-padang', 'walking', 20, 1484, now()),
  ('-0.907,100.357', 'unp-padang', 'motorcycle', 4, 1543, now()),
  ('-0.907,100.357', 'unp-padang', 'driving-car', 6, 1602, now()),
  ('-0.907,100.357', 'unp-gerbang-utama', 'walking', 20, 1484, now()),
  ('-0.907,100.357', 'unp-gerbang-utama', 'motorcycle', 4, 1543, now()),
  ('-0.907,100.357', 'unp-gerbang-utama', 'driving-car', 6, 1602, now()),
  ('-0.907,100.357', 'unp-stasiun-airtawar', 'walking', 28, 2060, now()),
  ('-0.907,100.357', 'unp-stasiun-airtawar', 'motorcycle', 6, 2142, now()),
  ('-0.907,100.357', 'unp-stasiun-airtawar', 'driving-car', 8, 2225, now()),
  ('-0.907,100.357', 'unp-gerbang-cendrawasih', 'walking', 9, 639, now()),
  ('-0.907,100.357', 'unp-gerbang-cendrawasih', 'motorcycle', 2, 664, now()),
  ('-0.907,100.357', 'unp-gerbang-cendrawasih', 'driving-car', 3, 690, now()),
  ('-0.896,100.359', 'unp-padang', 'walking', 13, 940, now()),
  ('-0.896,100.359', 'unp-padang', 'motorcycle', 3, 978, now()),
  ('-0.896,100.359', 'unp-padang', 'driving-car', 4, 1015, now()),
  ('-0.896,100.359', 'unp-gerbang-utama', 'walking', 13, 940, now()),
  ('-0.896,100.359', 'unp-gerbang-utama', 'motorcycle', 3, 978, now()),
  ('-0.896,100.359', 'unp-gerbang-utama', 'driving-car', 4, 1015, now()),
  ('-0.896,100.359', 'unp-stasiun-airtawar', 'walking', 20, 1443, now()),
  ('-0.896,100.359', 'unp-stasiun-airtawar', 'motorcycle', 4, 1500, now()),
  ('-0.896,100.359', 'unp-stasiun-airtawar', 'driving-car', 6, 1558, now()),
  ('-0.896,100.359', 'unp-gerbang-cendrawasih', 'walking', 16, 1169, now()),
  ('-0.896,100.359', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1216, now()),
  ('-0.896,100.359', 'unp-gerbang-cendrawasih', 'driving-car', 5, 1262, now()),
  ('-0.904,100.358', 'unp-padang', 'walking', 16, 1191, now()),
  ('-0.904,100.358', 'unp-padang', 'motorcycle', 4, 1239, now()),
  ('-0.904,100.358', 'unp-padang', 'driving-car', 5, 1287, now()),
  ('-0.904,100.358', 'unp-gerbang-utama', 'walking', 16, 1191, now()),
  ('-0.904,100.358', 'unp-gerbang-utama', 'motorcycle', 4, 1239, now()),
  ('-0.904,100.358', 'unp-gerbang-utama', 'driving-car', 5, 1287, now()),
  ('-0.904,100.358', 'unp-stasiun-airtawar', 'walking', 25, 1816, now()),
  ('-0.904,100.358', 'unp-stasiun-airtawar', 'motorcycle', 5, 1889, now()),
  ('-0.904,100.358', 'unp-stasiun-airtawar', 'driving-car', 7, 1962, now()),
  ('-0.904,100.358', 'unp-gerbang-cendrawasih', 'walking', 6, 434, now()),
  ('-0.904,100.358', 'unp-gerbang-cendrawasih', 'motorcycle', 2, 451, now()),
  ('-0.904,100.358', 'unp-gerbang-cendrawasih', 'driving-car', 2, 468, now()),
  ('-0.904,100.359', 'unp-padang', 'walking', 18, 1283, now()),
  ('-0.904,100.359', 'unp-padang', 'motorcycle', 4, 1334, now()),
  ('-0.904,100.359', 'unp-padang', 'driving-car', 5, 1385, now()),
  ('-0.904,100.359', 'unp-gerbang-utama', 'walking', 18, 1283, now()),
  ('-0.904,100.359', 'unp-gerbang-utama', 'motorcycle', 4, 1334, now()),
  ('-0.904,100.359', 'unp-gerbang-utama', 'driving-car', 5, 1385, now()),
  ('-0.904,100.359', 'unp-stasiun-airtawar', 'walking', 26, 1911, now()),
  ('-0.904,100.359', 'unp-stasiun-airtawar', 'motorcycle', 5, 1988, now()),
  ('-0.904,100.359', 'unp-stasiun-airtawar', 'driving-car', 7, 2064, now()),
  ('-0.904,100.359', 'unp-gerbang-cendrawasih', 'walking', 8, 533, now()),
  ('-0.904,100.359', 'unp-gerbang-cendrawasih', 'motorcycle', 2, 554, now()),
  ('-0.904,100.359', 'unp-gerbang-cendrawasih', 'driving-car', 2, 575, now()),
  ('-0.905,100.359', 'unp-padang', 'walking', 19, 1413, now()),
  ('-0.905,100.359', 'unp-padang', 'motorcycle', 4, 1469, now()),
  ('-0.905,100.359', 'unp-padang', 'driving-car', 6, 1526, now()),
  ('-0.905,100.359', 'unp-gerbang-utama', 'walking', 19, 1413, now()),
  ('-0.905,100.359', 'unp-gerbang-utama', 'motorcycle', 4, 1469, now()),
  ('-0.905,100.359', 'unp-gerbang-utama', 'driving-car', 6, 1526, now()),
  ('-0.905,100.359', 'unp-stasiun-airtawar', 'walking', 28, 2038, now()),
  ('-0.905,100.359', 'unp-stasiun-airtawar', 'motorcycle', 6, 2119, now()),
  ('-0.905,100.359', 'unp-stasiun-airtawar', 'driving-car', 8, 2201, now()),
  ('-0.905,100.359', 'unp-gerbang-cendrawasih', 'walking', 9, 638, now()),
  ('-0.905,100.359', 'unp-gerbang-cendrawasih', 'motorcycle', 2, 663, now()),
  ('-0.905,100.359', 'unp-gerbang-cendrawasih', 'driving-car', 3, 689, now()),
  ('-0.896,100.350', 'unp-padang', 'walking', 5, 354, now()),
  ('-0.896,100.350', 'unp-padang', 'motorcycle', 1, 368, now()),
  ('-0.896,100.350', 'unp-padang', 'driving-car', 2, 382, now()),
  ('-0.896,100.350', 'unp-gerbang-utama', 'walking', 5, 354, now()),
  ('-0.896,100.350', 'unp-gerbang-utama', 'motorcycle', 1, 368, now()),
  ('-0.896,100.350', 'unp-gerbang-utama', 'driving-car', 2, 382, now()),
  ('-0.896,100.350', 'unp-stasiun-airtawar', 'walking', 4, 296, now()),
  ('-0.896,100.350', 'unp-stasiun-airtawar', 'motorcycle', 1, 308, now()),
  ('-0.896,100.350', 'unp-stasiun-airtawar', 'driving-car', 2, 320, now()),
  ('-0.896,100.350', 'unp-gerbang-cendrawasih', 'walking', 16, 1141, now()),
  ('-0.896,100.350', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 1187, now()),
  ('-0.896,100.350', 'unp-gerbang-cendrawasih', 'driving-car', 5, 1233, now()),
  ('-0.888,100.354', 'unp-padang', 'walking', 19, 1379, now()),
  ('-0.888,100.354', 'unp-padang', 'motorcycle', 4, 1434, now()),
  ('-0.888,100.354', 'unp-padang', 'driving-car', 5, 1489, now()),
  ('-0.888,100.354', 'unp-gerbang-utama', 'walking', 19, 1379, now()),
  ('-0.888,100.354', 'unp-gerbang-utama', 'motorcycle', 4, 1434, now()),
  ('-0.888,100.354', 'unp-gerbang-utama', 'driving-car', 5, 1489, now()),
  ('-0.888,100.354', 'unp-stasiun-airtawar', 'walking', 17, 1264, now()),
  ('-0.888,100.354', 'unp-stasiun-airtawar', 'motorcycle', 4, 1314, now()),
  ('-0.888,100.354', 'unp-stasiun-airtawar', 'driving-car', 5, 1365, now()),
  ('-0.888,100.354', 'unp-gerbang-cendrawasih', 'walking', 29, 2134, now()),
  ('-0.888,100.354', 'unp-gerbang-cendrawasih', 'motorcycle', 6, 2219, now()),
  ('-0.888,100.354', 'unp-gerbang-cendrawasih', 'driving-car', 8, 2304, now()),
  ('-0.888,100.352', 'unp-padang', 'walking', 18, 1301, now()),
  ('-0.888,100.352', 'unp-padang', 'motorcycle', 4, 1353, now()),
  ('-0.888,100.352', 'unp-padang', 'driving-car', 5, 1405, now()),
  ('-0.888,100.352', 'unp-gerbang-utama', 'walking', 18, 1301, now()),
  ('-0.888,100.352', 'unp-gerbang-utama', 'motorcycle', 4, 1353, now()),
  ('-0.888,100.352', 'unp-gerbang-utama', 'driving-car', 5, 1405, now()),
  ('-0.888,100.352', 'unp-stasiun-airtawar', 'walking', 15, 1093, now()),
  ('-0.888,100.352', 'unp-stasiun-airtawar', 'motorcycle', 3, 1136, now()),
  ('-0.888,100.352', 'unp-stasiun-airtawar', 'driving-car', 4, 1180, now()),
  ('-0.888,100.352', 'unp-gerbang-cendrawasih', 'walking', 28, 2099, now()),
  ('-0.888,100.352', 'unp-gerbang-cendrawasih', 'motorcycle', 6, 2183, now()),
  ('-0.888,100.352', 'unp-gerbang-cendrawasih', 'driving-car', 8, 2267, now()),
  ('-0.894,100.359', 'unp-padang', 'walking', 15, 1061, now()),
  ('-0.894,100.359', 'unp-padang', 'motorcycle', 3, 1104, now()),
  ('-0.894,100.359', 'unp-padang', 'driving-car', 4, 1146, now()),
  ('-0.894,100.359', 'unp-gerbang-utama', 'walking', 15, 1061, now()),
  ('-0.894,100.359', 'unp-gerbang-utama', 'motorcycle', 3, 1104, now()),
  ('-0.894,100.359', 'unp-gerbang-utama', 'driving-car', 4, 1146, now()),
  ('-0.894,100.359', 'unp-stasiun-airtawar', 'walking', 20, 1463, now()),
  ('-0.894,100.359', 'unp-stasiun-airtawar', 'motorcycle', 4, 1521, now()),
  ('-0.894,100.359', 'unp-stasiun-airtawar', 'driving-car', 6, 1580, now()),
  ('-0.894,100.359', 'unp-gerbang-cendrawasih', 'walking', 19, 1425, now()),
  ('-0.894,100.359', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1482, now()),
  ('-0.894,100.359', 'unp-gerbang-cendrawasih', 'driving-car', 6, 1539, now()),
  ('-0.890,100.354', 'unp-padang', 'walking', 15, 1055, now()),
  ('-0.890,100.354', 'unp-padang', 'motorcycle', 3, 1097, now()),
  ('-0.890,100.354', 'unp-padang', 'driving-car', 4, 1139, now()),
  ('-0.890,100.354', 'unp-gerbang-utama', 'walking', 15, 1055, now()),
  ('-0.890,100.354', 'unp-gerbang-utama', 'motorcycle', 3, 1097, now()),
  ('-0.890,100.354', 'unp-gerbang-utama', 'driving-car', 4, 1139, now()),
  ('-0.890,100.354', 'unp-stasiun-airtawar', 'walking', 14, 1038, now()),
  ('-0.890,100.354', 'unp-stasiun-airtawar', 'motorcycle', 3, 1079, now()),
  ('-0.890,100.354', 'unp-stasiun-airtawar', 'driving-car', 4, 1121, now()),
  ('-0.890,100.354', 'unp-gerbang-cendrawasih', 'walking', 24, 1795, now()),
  ('-0.890,100.354', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1867, now()),
  ('-0.890,100.354', 'unp-gerbang-cendrawasih', 'driving-car', 7, 1939, now()),
  ('-0.892,100.353', 'unp-padang', 'walking', 11, 793, now()),
  ('-0.892,100.353', 'unp-padang', 'motorcycle', 3, 824, now()),
  ('-0.892,100.353', 'unp-padang', 'driving-car', 3, 856, now()),
  ('-0.892,100.353', 'unp-gerbang-utama', 'walking', 11, 793, now()),
  ('-0.892,100.353', 'unp-gerbang-utama', 'motorcycle', 3, 824, now()),
  ('-0.892,100.353', 'unp-gerbang-utama', 'driving-car', 3, 856, now()),
  ('-0.892,100.353', 'unp-stasiun-airtawar', 'walking', 10, 720, now()),
  ('-0.892,100.353', 'unp-stasiun-airtawar', 'motorcycle', 2, 749, now()),
  ('-0.892,100.353', 'unp-stasiun-airtawar', 'driving-car', 3, 778, now()),
  ('-0.892,100.353', 'unp-gerbang-cendrawasih', 'walking', 22, 1593, now()),
  ('-0.892,100.353', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1656, now()),
  ('-0.892,100.353', 'unp-gerbang-cendrawasih', 'driving-car', 6, 1720, now()),
  ('-0.902,100.347', 'unp-padang', 'walking', 13, 940, now()),
  ('-0.902,100.347', 'unp-padang', 'motorcycle', 3, 978, now()),
  ('-0.902,100.347', 'unp-padang', 'driving-car', 4, 1015, now()),
  ('-0.902,100.347', 'unp-gerbang-utama', 'walking', 13, 940, now()),
  ('-0.902,100.347', 'unp-gerbang-utama', 'motorcycle', 3, 978, now()),
  ('-0.902,100.347', 'unp-gerbang-utama', 'driving-car', 4, 1015, now()),
  ('-0.902,100.347', 'unp-stasiun-airtawar', 'walking', 13, 931, now()),
  ('-0.902,100.347', 'unp-stasiun-airtawar', 'motorcycle', 3, 969, now()),
  ('-0.902,100.347', 'unp-stasiun-airtawar', 'driving-car', 4, 1006, now()),
  ('-0.902,100.347', 'unp-gerbang-cendrawasih', 'walking', 16, 1136, now()),
  ('-0.902,100.347', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 1182, now()),
  ('-0.902,100.347', 'unp-gerbang-cendrawasih', 'driving-car', 5, 1227, now()),
  ('-0.893,100.358', 'unp-padang', 'walking', 15, 1054, now()),
  ('-0.893,100.358', 'unp-padang', 'motorcycle', 3, 1096, now()),
  ('-0.893,100.358', 'unp-padang', 'driving-car', 4, 1138, now()),
  ('-0.893,100.358', 'unp-gerbang-utama', 'walking', 15, 1054, now()),
  ('-0.893,100.358', 'unp-gerbang-utama', 'motorcycle', 3, 1096, now()),
  ('-0.893,100.358', 'unp-gerbang-utama', 'driving-car', 4, 1138, now()),
  ('-0.893,100.358', 'unp-stasiun-airtawar', 'walking', 19, 1410, now()),
  ('-0.893,100.358', 'unp-stasiun-airtawar', 'motorcycle', 4, 1466, now()),
  ('-0.893,100.358', 'unp-stasiun-airtawar', 'driving-car', 6, 1523, now()),
  ('-0.893,100.358', 'unp-gerbang-cendrawasih', 'walking', 20, 1481, now()),
  ('-0.893,100.358', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1541, now()),
  ('-0.893,100.358', 'unp-gerbang-cendrawasih', 'driving-car', 6, 1600, now()),
  ('-0.889,100.350', 'unp-padang', 'walking', 17, 1201, now()),
  ('-0.889,100.350', 'unp-padang', 'motorcycle', 4, 1249, now()),
  ('-0.889,100.350', 'unp-padang', 'driving-car', 5, 1297, now()),
  ('-0.889,100.350', 'unp-gerbang-utama', 'walking', 17, 1201, now()),
  ('-0.889,100.350', 'unp-gerbang-utama', 'motorcycle', 4, 1249, now()),
  ('-0.889,100.350', 'unp-gerbang-utama', 'driving-car', 5, 1297, now()),
  ('-0.889,100.350', 'unp-stasiun-airtawar', 'walking', 12, 838, now()),
  ('-0.889,100.350', 'unp-stasiun-airtawar', 'motorcycle', 3, 871, now()),
  ('-0.889,100.350', 'unp-stasiun-airtawar', 'driving-car', 4, 905, now()),
  ('-0.889,100.350', 'unp-gerbang-cendrawasih', 'walking', 28, 2040, now()),
  ('-0.889,100.350', 'unp-gerbang-cendrawasih', 'motorcycle', 6, 2122, now()),
  ('-0.889,100.350', 'unp-gerbang-cendrawasih', 'driving-car', 8, 2203, now()),
  ('-0.892,100.358', 'unp-padang', 'walking', 16, 1144, now()),
  ('-0.892,100.358', 'unp-padang', 'motorcycle', 3, 1190, now()),
  ('-0.892,100.358', 'unp-padang', 'driving-car', 5, 1235, now()),
  ('-0.892,100.358', 'unp-gerbang-utama', 'walking', 16, 1144, now()),
  ('-0.892,100.358', 'unp-gerbang-utama', 'motorcycle', 3, 1190, now()),
  ('-0.892,100.358', 'unp-gerbang-utama', 'driving-car', 5, 1235, now()),
  ('-0.892,100.358', 'unp-stasiun-airtawar', 'walking', 19, 1421, now()),
  ('-0.892,100.358', 'unp-stasiun-airtawar', 'motorcycle', 4, 1478, now()),
  ('-0.892,100.358', 'unp-stasiun-airtawar', 'driving-car', 6, 1535, now()),
  ('-0.892,100.358', 'unp-gerbang-cendrawasih', 'walking', 22, 1644, now()),
  ('-0.892,100.358', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1710, now()),
  ('-0.892,100.358', 'unp-gerbang-cendrawasih', 'driving-car', 6, 1775, now()),
  ('-0.897,100.358', 'unp-padang', 'walking', 10, 730, now()),
  ('-0.897,100.358', 'unp-padang', 'motorcycle', 2, 759, now()),
  ('-0.897,100.358', 'unp-padang', 'driving-car', 3, 788, now()),
  ('-0.897,100.358', 'unp-gerbang-utama', 'walking', 10, 730, now()),
  ('-0.897,100.358', 'unp-gerbang-utama', 'motorcycle', 2, 759, now()),
  ('-0.897,100.358', 'unp-gerbang-utama', 'driving-car', 3, 788, now()),
  ('-0.897,100.358', 'unp-stasiun-airtawar', 'walking', 18, 1318, now()),
  ('-0.897,100.358', 'unp-stasiun-airtawar', 'motorcycle', 4, 1370, now()),
  ('-0.897,100.358', 'unp-stasiun-airtawar', 'driving-car', 5, 1423, now()),
  ('-0.897,100.358', 'unp-gerbang-cendrawasih', 'walking', 12, 853, now()),
  ('-0.897,100.358', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 887, now()),
  ('-0.897,100.358', 'unp-gerbang-cendrawasih', 'driving-car', 4, 921, now()),
  ('-0.902,100.361', 'unp-padang', 'walking', 19, 1369, now()),
  ('-0.902,100.361', 'unp-padang', 'motorcycle', 4, 1424, now()),
  ('-0.902,100.361', 'unp-padang', 'driving-car', 5, 1478, now()),
  ('-0.902,100.361', 'unp-gerbang-utama', 'walking', 19, 1369, now()),
  ('-0.902,100.361', 'unp-gerbang-utama', 'motorcycle', 4, 1424, now()),
  ('-0.902,100.361', 'unp-gerbang-utama', 'driving-car', 5, 1478, now()),
  ('-0.902,100.361', 'unp-stasiun-airtawar', 'walking', 27, 2011, now()),
  ('-0.902,100.361', 'unp-stasiun-airtawar', 'motorcycle', 6, 2092, now()),
  ('-0.902,100.361', 'unp-stasiun-airtawar', 'driving-car', 8, 2172, now()),
  ('-0.902,100.361', 'unp-gerbang-cendrawasih', 'walking', 12, 848, now()),
  ('-0.902,100.361', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 881, now()),
  ('-0.902,100.361', 'unp-gerbang-cendrawasih', 'driving-car', 4, 915, now()),
  ('-0.898,100.348', 'unp-padang', 'walking', 9, 638, now()),
  ('-0.898,100.348', 'unp-padang', 'motorcycle', 2, 663, now()),
  ('-0.898,100.348', 'unp-padang', 'driving-car', 3, 689, now()),
  ('-0.898,100.348', 'unp-gerbang-utama', 'walking', 9, 638, now()),
  ('-0.898,100.348', 'unp-gerbang-utama', 'motorcycle', 2, 663, now()),
  ('-0.898,100.348', 'unp-gerbang-utama', 'driving-car', 3, 689, now()),
  ('-0.898,100.348', 'unp-stasiun-airtawar', 'walking', 7, 458, now()),
  ('-0.898,100.348', 'unp-stasiun-airtawar', 'motorcycle', 2, 476, now()),
  ('-0.898,100.348', 'unp-stasiun-airtawar', 'driving-car', 2, 494, now()),
  ('-0.898,100.348', 'unp-gerbang-cendrawasih', 'walking', 16, 1193, now()),
  ('-0.898,100.348', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1240, now()),
  ('-0.898,100.348', 'unp-gerbang-cendrawasih', 'driving-car', 5, 1288, now()),
  ('-0.889,100.355', 'unp-padang', 'walking', 17, 1201, now()),
  ('-0.889,100.355', 'unp-padang', 'motorcycle', 4, 1249, now()),
  ('-0.889,100.355', 'unp-padang', 'driving-car', 5, 1297, now()),
  ('-0.889,100.355', 'unp-gerbang-utama', 'walking', 17, 1201, now()),
  ('-0.889,100.355', 'unp-gerbang-utama', 'motorcycle', 4, 1249, now()),
  ('-0.889,100.355', 'unp-gerbang-utama', 'driving-car', 5, 1297, now()),
  ('-0.889,100.355', 'unp-stasiun-airtawar', 'walking', 17, 1208, now()),
  ('-0.889,100.355', 'unp-stasiun-airtawar', 'motorcycle', 4, 1256, now()),
  ('-0.889,100.355', 'unp-stasiun-airtawar', 'driving-car', 5, 1304, now()),
  ('-0.889,100.355', 'unp-gerbang-cendrawasih', 'walking', 26, 1909, now()),
  ('-0.889,100.355', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1985, now()),
  ('-0.889,100.355', 'unp-gerbang-cendrawasih', 'driving-car', 7, 2061, now()),
  ('-0.891,100.356', 'unp-padang', 'walking', 14, 1011, now()),
  ('-0.891,100.356', 'unp-padang', 'motorcycle', 3, 1052, now()),
  ('-0.891,100.356', 'unp-padang', 'driving-car', 4, 1092, now()),
  ('-0.891,100.356', 'unp-gerbang-utama', 'walking', 14, 1011, now()),
  ('-0.891,100.356', 'unp-gerbang-utama', 'motorcycle', 3, 1052, now()),
  ('-0.891,100.356', 'unp-gerbang-utama', 'driving-car', 4, 1092, now()),
  ('-0.891,100.356', 'unp-stasiun-airtawar', 'walking', 16, 1133, now()),
  ('-0.891,100.356', 'unp-stasiun-airtawar', 'motorcycle', 3, 1178, now()),
  ('-0.891,100.356', 'unp-stasiun-airtawar', 'driving-car', 5, 1223, now()),
  ('-0.891,100.356', 'unp-gerbang-cendrawasih', 'walking', 23, 1676, now()),
  ('-0.891,100.356', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1743, now()),
  ('-0.891,100.356', 'unp-gerbang-cendrawasih', 'driving-car', 7, 1810, now()),
  ('-0.896,100.349', 'unp-padang', 'walking', 7, 469, now()),
  ('-0.896,100.349', 'unp-padang', 'motorcycle', 2, 488, now()),
  ('-0.896,100.349', 'unp-padang', 'driving-car', 2, 506, now()),
  ('-0.896,100.349', 'unp-gerbang-utama', 'walking', 7, 469, now()),
  ('-0.896,100.349', 'unp-gerbang-utama', 'motorcycle', 2, 488, now()),
  ('-0.896,100.349', 'unp-gerbang-utama', 'driving-car', 2, 506, now()),
  ('-0.896,100.349', 'unp-stasiun-airtawar', 'walking', 3, 186, now()),
  ('-0.896,100.349', 'unp-stasiun-airtawar', 'motorcycle', 1, 194, now()),
  ('-0.896,100.349', 'unp-stasiun-airtawar', 'driving-car', 2, 201, now()),
  ('-0.896,100.349', 'unp-gerbang-cendrawasih', 'walking', 17, 1246, now()),
  ('-0.896,100.349', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1296, now()),
  ('-0.896,100.349', 'unp-gerbang-cendrawasih', 'driving-car', 5, 1346, now()),
  ('-0.901,100.347', 'unp-padang', 'walking', 12, 876, now()),
  ('-0.901,100.347', 'unp-padang', 'motorcycle', 3, 911, now()),
  ('-0.901,100.347', 'unp-padang', 'driving-car', 4, 946, now()),
  ('-0.901,100.347', 'unp-gerbang-utama', 'walking', 12, 876, now()),
  ('-0.901,100.347', 'unp-gerbang-utama', 'motorcycle', 3, 911, now()),
  ('-0.901,100.347', 'unp-gerbang-utama', 'driving-car', 4, 946, now()),
  ('-0.901,100.347', 'unp-stasiun-airtawar', 'walking', 12, 871, now()),
  ('-0.901,100.347', 'unp-stasiun-airtawar', 'motorcycle', 3, 906, now()),
  ('-0.901,100.347', 'unp-stasiun-airtawar', 'driving-car', 4, 941, now()),
  ('-0.901,100.347', 'unp-gerbang-cendrawasih', 'walking', 15, 1108, now()),
  ('-0.901,100.347', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 1152, now()),
  ('-0.901,100.347', 'unp-gerbang-cendrawasih', 'driving-car', 4, 1196, now()),
  ('-0.891,100.358', 'unp-padang', 'walking', 16, 1129, now()),
  ('-0.891,100.358', 'unp-padang', 'motorcycle', 3, 1174, now()),
  ('-0.891,100.358', 'unp-padang', 'driving-car', 5, 1219, now()),
  ('-0.891,100.358', 'unp-gerbang-utama', 'walking', 16, 1129, now()),
  ('-0.891,100.358', 'unp-gerbang-utama', 'motorcycle', 3, 1174, now()),
  ('-0.891,100.358', 'unp-gerbang-utama', 'driving-car', 5, 1219, now()),
  ('-0.891,100.358', 'unp-stasiun-airtawar', 'walking', 19, 1384, now()),
  ('-0.891,100.358', 'unp-stasiun-airtawar', 'motorcycle', 4, 1439, now()),
  ('-0.891,100.358', 'unp-stasiun-airtawar', 'driving-car', 5, 1494, now()),
  ('-0.891,100.358', 'unp-gerbang-cendrawasih', 'walking', 23, 1654, now()),
  ('-0.891,100.358', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1720, now()),
  ('-0.891,100.358', 'unp-gerbang-cendrawasih', 'driving-car', 6, 1786, now()),
  ('-0.886,100.352', 'unp-padang', 'walking', 22, 1598, now()),
  ('-0.886,100.352', 'unp-padang', 'motorcycle', 5, 1661, now()),
  ('-0.886,100.352', 'unp-padang', 'driving-car', 6, 1725, now()),
  ('-0.886,100.352', 'unp-gerbang-utama', 'walking', 22, 1598, now()),
  ('-0.886,100.352', 'unp-gerbang-utama', 'motorcycle', 5, 1661, now()),
  ('-0.886,100.352', 'unp-gerbang-utama', 'driving-car', 6, 1725, now()),
  ('-0.886,100.352', 'unp-stasiun-airtawar', 'walking', 18, 1331, now()),
  ('-0.886,100.352', 'unp-stasiun-airtawar', 'motorcycle', 4, 1385, now()),
  ('-0.886,100.352', 'unp-stasiun-airtawar', 'driving-car', 5, 1438, now()),
  ('-0.886,100.352', 'unp-gerbang-cendrawasih', 'walking', 32, 2400, now()),
  ('-0.886,100.352', 'unp-gerbang-cendrawasih', 'motorcycle', 7, 2496, now()),
  ('-0.886,100.352', 'unp-gerbang-cendrawasih', 'driving-car', 9, 2592, now()),
  ('-0.907,100.363', 'unp-padang', 'walking', 27, 1980, now()),
  ('-0.907,100.363', 'unp-padang', 'motorcycle', 6, 2059, now()),
  ('-0.907,100.363', 'unp-padang', 'driving-car', 8, 2138, now()),
  ('-0.907,100.363', 'unp-gerbang-utama', 'walking', 27, 1980, now()),
  ('-0.907,100.363', 'unp-gerbang-utama', 'motorcycle', 6, 2059, now()),
  ('-0.907,100.363', 'unp-gerbang-utama', 'driving-car', 8, 2138, now()),
  ('-0.907,100.363', 'unp-stasiun-airtawar', 'walking', 35, 2620, now()),
  ('-0.907,100.363', 'unp-stasiun-airtawar', 'motorcycle', 7, 2725, now()),
  ('-0.907,100.363', 'unp-stasiun-airtawar', 'driving-car', 10, 2830, now()),
  ('-0.907,100.363', 'unp-gerbang-cendrawasih', 'walking', 17, 1260, now()),
  ('-0.907,100.363', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1310, now()),
  ('-0.907,100.363', 'unp-gerbang-cendrawasih', 'driving-car', 5, 1361, now()),
  ('-0.896,100.347', 'unp-padang', 'walking', 11, 788, now()),
  ('-0.896,100.347', 'unp-padang', 'motorcycle', 3, 819, now()),
  ('-0.896,100.347', 'unp-padang', 'driving-car', 3, 851, now()),
  ('-0.896,100.347', 'unp-gerbang-utama', 'walking', 11, 788, now()),
  ('-0.896,100.347', 'unp-gerbang-utama', 'motorcycle', 3, 819, now()),
  ('-0.896,100.347', 'unp-gerbang-utama', 'driving-car', 3, 851, now()),
  ('-0.896,100.347', 'unp-stasiun-airtawar', 'walking', 5, 301, now()),
  ('-0.896,100.347', 'unp-stasiun-airtawar', 'motorcycle', 1, 313, now()),
  ('-0.896,100.347', 'unp-stasiun-airtawar', 'driving-car', 2, 325, now()),
  ('-0.896,100.347', 'unp-gerbang-cendrawasih', 'walking', 20, 1459, now()),
  ('-0.896,100.347', 'unp-gerbang-cendrawasih', 'motorcycle', 4, 1517, now()),
  ('-0.896,100.347', 'unp-gerbang-cendrawasih', 'driving-car', 6, 1575, now()),
  ('-0.898,100.350', 'unp-padang', 'walking', 4, 271, now()),
  ('-0.898,100.350', 'unp-padang', 'motorcycle', 1, 282, now()),
  ('-0.898,100.350', 'unp-padang', 'driving-car', 2, 293, now()),
  ('-0.898,100.350', 'unp-gerbang-utama', 'walking', 4, 271, now()),
  ('-0.898,100.350', 'unp-gerbang-utama', 'motorcycle', 1, 282, now()),
  ('-0.898,100.350', 'unp-gerbang-utama', 'driving-car', 2, 293, now()),
  ('-0.898,100.350', 'unp-stasiun-airtawar', 'walking', 7, 463, now()),
  ('-0.898,100.350', 'unp-stasiun-airtawar', 'motorcycle', 2, 481, now()),
  ('-0.898,100.350', 'unp-stasiun-airtawar', 'driving-car', 2, 500, now()),
  ('-0.898,100.350', 'unp-gerbang-cendrawasih', 'walking', 13, 971, now()),
  ('-0.898,100.350', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 1010, now()),
  ('-0.898,100.350', 'unp-gerbang-cendrawasih', 'driving-car', 4, 1049, now()),
  ('-0.890,100.352', 'unp-padang', 'walking', 15, 1069, now()),
  ('-0.890,100.352', 'unp-padang', 'motorcycle', 3, 1112, now()),
  ('-0.890,100.352', 'unp-padang', 'driving-car', 4, 1154, now()),
  ('-0.890,100.352', 'unp-gerbang-utama', 'walking', 15, 1069, now()),
  ('-0.890,100.352', 'unp-gerbang-utama', 'motorcycle', 3, 1112, now()),
  ('-0.890,100.352', 'unp-gerbang-utama', 'driving-car', 4, 1154, now()),
  ('-0.890,100.352', 'unp-stasiun-airtawar', 'walking', 12, 868, now()),
  ('-0.890,100.352', 'unp-stasiun-airtawar', 'motorcycle', 3, 902, now()),
  ('-0.890,100.352', 'unp-stasiun-airtawar', 'driving-car', 4, 937, now()),
  ('-0.890,100.352', 'unp-gerbang-cendrawasih', 'walking', 26, 1879, now()),
  ('-0.890,100.352', 'unp-gerbang-cendrawasih', 'motorcycle', 5, 1954, now()),
  ('-0.890,100.352', 'unp-gerbang-cendrawasih', 'driving-car', 7, 2029, now()),
  ('-0.906,100.357', 'unp-padang', 'walking', 19, 1356, now()),
  ('-0.906,100.357', 'unp-padang', 'motorcycle', 4, 1411, now()),
  ('-0.906,100.357', 'unp-padang', 'driving-car', 5, 1465, now()),
  ('-0.906,100.357', 'unp-gerbang-utama', 'walking', 19, 1356, now()),
  ('-0.906,100.357', 'unp-gerbang-utama', 'motorcycle', 4, 1411, now()),
  ('-0.906,100.357', 'unp-gerbang-utama', 'driving-car', 5, 1465, now()),
  ('-0.906,100.357', 'unp-stasiun-airtawar', 'walking', 26, 1936, now()),
  ('-0.906,100.357', 'unp-stasiun-airtawar', 'motorcycle', 6, 2014, now()),
  ('-0.906,100.357', 'unp-stasiun-airtawar', 'driving-car', 7, 2091, now()),
  ('-0.906,100.357', 'unp-gerbang-cendrawasih', 'walking', 7, 510, now()),
  ('-0.906,100.357', 'unp-gerbang-cendrawasih', 'motorcycle', 2, 530, now()),
  ('-0.906,100.357', 'unp-gerbang-cendrawasih', 'driving-car', 2, 551, now()),
  ('-0.907,100.360', 'unp-padang', 'walking', 24, 1785, now()),
  ('-0.907,100.360', 'unp-padang', 'motorcycle', 5, 1856, now()),
  ('-0.907,100.360', 'unp-padang', 'driving-car', 7, 1928, now()),
  ('-0.907,100.360', 'unp-gerbang-utama', 'walking', 24, 1785, now()),
  ('-0.907,100.360', 'unp-gerbang-utama', 'motorcycle', 5, 1856, now()),
  ('-0.907,100.360', 'unp-gerbang-utama', 'driving-car', 7, 1928, now()),
  ('-0.907,100.360', 'unp-stasiun-airtawar', 'walking', 33, 2405, now()),
  ('-0.907,100.360', 'unp-stasiun-airtawar', 'motorcycle', 7, 2501, now()),
  ('-0.907,100.360', 'unp-stasiun-airtawar', 'driving-car', 9, 2597, now()),
  ('-0.907,100.360', 'unp-gerbang-cendrawasih', 'walking', 14, 985, now()),
  ('-0.907,100.360', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 1024, now()),
  ('-0.907,100.360', 'unp-gerbang-cendrawasih', 'driving-car', 4, 1064, now()),
  ('-0.900,100.351', 'unp-padang', 'walking', 6, 389, now()),
  ('-0.900,100.351', 'unp-padang', 'motorcycle', 2, 404, now()),
  ('-0.900,100.351', 'unp-padang', 'driving-car', 2, 420, now()),
  ('-0.900,100.351', 'unp-gerbang-utama', 'walking', 6, 389, now()),
  ('-0.900,100.351', 'unp-gerbang-utama', 'motorcycle', 2, 404, now()),
  ('-0.900,100.351', 'unp-gerbang-utama', 'driving-car', 2, 420, now()),
  ('-0.900,100.351', 'unp-stasiun-airtawar', 'walking', 10, 736, now()),
  ('-0.900,100.351', 'unp-stasiun-airtawar', 'motorcycle', 2, 766, now()),
  ('-0.900,100.351', 'unp-stasiun-airtawar', 'driving-car', 3, 795, now()),
  ('-0.900,100.351', 'unp-gerbang-cendrawasih', 'walking', 10, 738, now()),
  ('-0.900,100.351', 'unp-gerbang-cendrawasih', 'motorcycle', 2, 767, now()),
  ('-0.900,100.351', 'unp-gerbang-cendrawasih', 'driving-car', 3, 797, now()),
  ('-0.899,100.351', 'unp-padang', 'walking', 5, 315, now()),
  ('-0.899,100.351', 'unp-padang', 'motorcycle', 1, 328, now()),
  ('-0.899,100.351', 'unp-padang', 'driving-car', 2, 340, now()),
  ('-0.899,100.351', 'unp-gerbang-utama', 'walking', 5, 315, now()),
  ('-0.899,100.351', 'unp-gerbang-utama', 'motorcycle', 1, 328, now()),
  ('-0.899,100.351', 'unp-gerbang-utama', 'driving-car', 2, 340, now()),
  ('-0.899,100.351', 'unp-stasiun-airtawar', 'walking', 9, 619, now()),
  ('-0.899,100.351', 'unp-stasiun-airtawar', 'motorcycle', 2, 644, now()),
  ('-0.899,100.351', 'unp-stasiun-airtawar', 'driving-car', 3, 668, now()),
  ('-0.899,100.351', 'unp-gerbang-cendrawasih', 'walking', 12, 833, now()),
  ('-0.899,100.351', 'unp-gerbang-cendrawasih', 'motorcycle', 3, 866, now()),
  ('-0.899,100.351', 'unp-gerbang-cendrawasih', 'driving-car', 3, 899, now())
ON CONFLICT (origin_cell, dest_id, mode) DO UPDATE SET
  minutes = EXCLUDED.minutes,
  distance_m = EXCLUDED.distance_m,
  fetched_at = now();

COMMIT;

-- Finished seeding KosMatch database!
