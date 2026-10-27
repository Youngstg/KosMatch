export type PilotCampusPoiId = "ui-depok" | "unand-limau-manis" | "itera-lampung";

export interface PilotPoi {
  readonly id: string;
  readonly campusId: PilotCampusPoiId;
  readonly category: "food" | "laundry" | "convenience" | "pharmacy" | "worship" | "bus_stop" | "atm";
  readonly name: string;
  readonly coordinates: { readonly latitude: number; readonly longitude: number };
  readonly description?: string;
}

export const POI_CATEGORY_CONFIG: Record<
  string,
  { label: string; color: string; bgLight: string; iconSymbol: string }
> = {
  food: {
    label: "Warung & Cafe",
    color: "#F97316", // Vibrant Warm Orange
    bgLight: "rgba(249, 115, 22, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>`,
  },
  laundry: {
    label: "Laundry Kiloan",
    color: "#06B6D4", // Electric Cyan
    bgLight: "rgba(6, 182, 212, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
  },
  convenience: {
    label: "Minimarket",
    color: "#10B981", // Emerald Green
    bgLight: "rgba(16, 185, 129, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>`,
  },
  pharmacy: {
    label: "Apotek & Klinik",
    color: "#F43F5E", // Rose Red
    bgLight: "rgba(244, 63, 94, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
  },
  worship: {
    label: "Tempat Ibadah",
    color: "#8B5CF6", // Royal Violet
    bgLight: "rgba(139, 92, 246, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  },
  bus_stop: {
    label: "Halte & Angkot",
    color: "#EAB308", // Sun Gold
    bgLight: "rgba(234, 179, 8, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>`,
  },
  atm: {
    label: "ATM & Bank",
    color: "#3B82F6", // Electric Blue
    bgLight: "rgba(59, 130, 246, 0.18)",
    iconSymbol: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  },
};

/**
 * Total Scraped & Distilled POIs: 899
 */
export const PILOT_POIS: readonly PilotPoi[] = [
  {
    "id": "poi-itera-lampung-n-4062837188",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -5.3616906,
      "longitude": 105.2851902
    }
  },
  {
    "id": "poi-itera-lampung-n-4072549501",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -5.3337713,
      "longitude": 105.292667
    }
  },
  {
    "id": "poi-itera-lampung-n-4072549776",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -5.3391789,
      "longitude": 105.2920595
    }
  },
  {
    "id": "poi-itera-lampung-n-4072549998",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -5.341717,
      "longitude": 105.2895462
    }
  },
  {
    "id": "poi-itera-lampung-n-4072593351",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -5.350041,
      "longitude": 105.2918375
    }
  },
  {
    "id": "poi-itera-lampung-n-4601798389",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid baiturohim",
    "coordinates": {
      "latitude": -5.366407,
      "longitude": 105.2994954
    }
  },
  {
    "id": "poi-itera-lampung-n-5630021722",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Imanuel",
    "coordinates": {
      "latitude": -5.3836445,
      "longitude": 105.2850738
    }
  },
  {
    "id": "poi-itera-lampung-n-5630021723",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Transmart",
    "coordinates": {
      "latitude": -5.382963,
      "longitude": 105.2818736
    }
  },
  {
    "id": "poi-itera-lampung-n-9479321617",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Barokah",
    "coordinates": {
      "latitude": -5.3845705,
      "longitude": 105.2888938
    }
  },
  {
    "id": "poi-itera-lampung-n-9771393157",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Teman Sebangku Coffee",
    "coordinates": {
      "latitude": -5.3863851,
      "longitude": 105.2926918
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-n-9771628427",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Yanto Lamongan 3",
    "coordinates": {
      "latitude": -5.3839821,
      "longitude": 105.2814005
    }
  },
  {
    "id": "poi-itera-lampung-n-9771688496",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Mbok Wito",
    "coordinates": {
      "latitude": -5.3866239,
      "longitude": 105.2814846
    }
  },
  {
    "id": "poi-itera-lampung-n-9771688737",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "ARCH Eatery",
    "coordinates": {
      "latitude": -5.3889497,
      "longitude": 105.2814353
    }
  },
  {
    "id": "poi-itera-lampung-n-9782036851",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rumah Makan Kusumo Ayu II",
    "coordinates": {
      "latitude": -5.3879839,
      "longitude": 105.2878314
    }
  },
  {
    "id": "poi-itera-lampung-n-9782038411",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rumah Makan Sarang Seafood",
    "coordinates": {
      "latitude": -5.3872012,
      "longitude": 105.2915851
    },
    "description": "Kuliner: seafood"
  },
  {
    "id": "poi-itera-lampung-n-9782054947",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warung Makan Ni Os",
    "coordinates": {
      "latitude": -5.3850155,
      "longitude": 105.2871554
    }
  },
  {
    "id": "poi-itera-lampung-n-9782060220",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Permata",
    "coordinates": {
      "latitude": -5.3874802,
      "longitude": 105.2921631
    }
  },
  {
    "id": "poi-itera-lampung-n-9782064714",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mama Eyi Kitchen",
    "coordinates": {
      "latitude": -5.3852459,
      "longitude": 105.2898697
    }
  },
  {
    "id": "poi-itera-lampung-n-9782071214",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rukila Cafe",
    "coordinates": {
      "latitude": -5.3892541,
      "longitude": 105.2888433
    }
  },
  {
    "id": "poi-itera-lampung-n-9782072459",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Gereja Baptis Indonesia Karunia Tuhan",
    "coordinates": {
      "latitude": -5.3865299,
      "longitude": 105.2877561
    }
  },
  {
    "id": "poi-itera-lampung-n-9782072599",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kedai Kopi Lampung SR",
    "coordinates": {
      "latitude": -5.3846544,
      "longitude": 105.2900038
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-n-9782072788",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warung Sate Madura",
    "coordinates": {
      "latitude": -5.3899697,
      "longitude": 105.2878576
    }
  },
  {
    "id": "poi-itera-lampung-n-9782072796",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BCA",
    "coordinates": {
      "latitude": -5.3886571,
      "longitude": 105.2882412
    }
  },
  {
    "id": "poi-itera-lampung-n-9782073883",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rumah Makan Abah Roh",
    "coordinates": {
      "latitude": -5.3861859,
      "longitude": 105.2897999
    }
  },
  {
    "id": "poi-itera-lampung-n-9782076319",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kopi Ketje Sukarame",
    "coordinates": {
      "latitude": -5.3886205,
      "longitude": 105.289662
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-n-9782080247",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kopi De Cinta",
    "coordinates": {
      "latitude": -5.3845038,
      "longitude": 105.2912079
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-n-9782082076",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Bank Mandiri",
    "coordinates": {
      "latitude": -5.386096,
      "longitude": 105.2880552
    }
  },
  {
    "id": "poi-itera-lampung-n-9782082081",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mi Jablay Shelin",
    "coordinates": {
      "latitude": -5.3855205,
      "longitude": 105.2899529
    }
  },
  {
    "id": "poi-itera-lampung-n-9782085880",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Food Coury Sukarame",
    "coordinates": {
      "latitude": -5.3854698,
      "longitude": 105.2903083
    }
  },
  {
    "id": "poi-itera-lampung-n-9782086071",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Taratak Jaya",
    "coordinates": {
      "latitude": -5.3811468,
      "longitude": 105.2862465
    }
  },
  {
    "id": "poi-itera-lampung-n-9782087911",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mie Ayam 22",
    "coordinates": {
      "latitude": -5.380023,
      "longitude": 105.2909587
    }
  },
  {
    "id": "poi-itera-lampung-n-9782102008",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Falma",
    "coordinates": {
      "latitude": -5.3805557,
      "longitude": 105.2890973
    }
  },
  {
    "id": "poi-itera-lampung-n-9782102310",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele Mas Fahri",
    "coordinates": {
      "latitude": -5.3853616,
      "longitude": 105.2901165
    }
  },
  {
    "id": "poi-itera-lampung-n-9782103062",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Arvanda Medika",
    "coordinates": {
      "latitude": -5.3777701,
      "longitude": 105.2942074
    }
  },
  {
    "id": "poi-itera-lampung-n-9782112470",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nasi Liwet Kang Emil",
    "coordinates": {
      "latitude": -5.3803848,
      "longitude": 105.2869944
    }
  },
  {
    "id": "poi-itera-lampung-n-9782112926",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BCA",
    "coordinates": {
      "latitude": -5.3858187,
      "longitude": 105.2876112
    }
  },
  {
    "id": "poi-itera-lampung-n-9782113278",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Anshar",
    "coordinates": {
      "latitude": -5.380768,
      "longitude": 105.2877562
    }
  },
  {
    "id": "poi-itera-lampung-n-9782113764",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warung Tania",
    "coordinates": {
      "latitude": -5.3808187,
      "longitude": 105.2860044
    }
  },
  {
    "id": "poi-itera-lampung-n-9782115977",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Saung Opo Yoo",
    "coordinates": {
      "latitude": -5.3805023,
      "longitude": 105.2894594
    }
  },
  {
    "id": "poi-itera-lampung-n-9782121427",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "What's Up Cafe",
    "coordinates": {
      "latitude": -5.3813151,
      "longitude": 105.2861594
    }
  },
  {
    "id": "poi-itera-lampung-n-9782123808",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warung Cemil",
    "coordinates": {
      "latitude": -5.3810908,
      "longitude": 105.2863632
    }
  },
  {
    "id": "poi-itera-lampung-n-9782125602",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Sate Taican Bams",
    "coordinates": {
      "latitude": -5.3806452,
      "longitude": 105.2874142
    }
  },
  {
    "id": "poi-itera-lampung-n-9782128583",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nasi Kuning Cah Umbul",
    "coordinates": {
      "latitude": -5.3803688,
      "longitude": 105.2873055
    }
  },
  {
    "id": "poi-itera-lampung-n-9782134333",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kubo Coffee",
    "coordinates": {
      "latitude": -5.3805944,
      "longitude": 105.2886279
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-n-9782134520",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Saudara Jaya",
    "coordinates": {
      "latitude": -5.3803314,
      "longitude": 105.2874423
    }
  },
  {
    "id": "poi-itera-lampung-n-9782134521",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Towns Coffee",
    "coordinates": {
      "latitude": -5.3806412,
      "longitude": 105.2875577
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-n-9782134702",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Gambreng Ryacudu",
    "coordinates": {
      "latitude": -5.378362,
      "longitude": 105.293429
    }
  },
  {
    "id": "poi-itera-lampung-n-9782137999",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pak Mantep",
    "coordinates": {
      "latitude": -5.3804476,
      "longitude": 105.2900159
    }
  },
  {
    "id": "poi-itera-lampung-n-9782138254",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mie Aceh Asia",
    "coordinates": {
      "latitude": -5.3799348,
      "longitude": 105.2913624
    }
  },
  {
    "id": "poi-itera-lampung-n-9782138628",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rya Chicken",
    "coordinates": {
      "latitude": -5.3804649,
      "longitude": 105.2895599
    },
    "description": "Kuliner: chicken"
  },
  {
    "id": "poi-itera-lampung-n-9782141614",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Slara",
    "coordinates": {
      "latitude": -5.3800964,
      "longitude": 105.2900132
    }
  },
  {
    "id": "poi-itera-lampung-n-9782142829",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mie Ayam Balung",
    "coordinates": {
      "latitude": -5.3803528,
      "longitude": 105.2909319
    }
  },
  {
    "id": "poi-itera-lampung-n-9782144043",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM taliwang Lombok Ijo 2",
    "coordinates": {
      "latitude": -5.3756311,
      "longitude": 105.2953799
    }
  },
  {
    "id": "poi-itera-lampung-n-9782144271",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele Hj Ayu",
    "coordinates": {
      "latitude": -5.3755323,
      "longitude": 105.2954711
    }
  },
  {
    "id": "poi-itera-lampung-n-9782149469",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Mutiara",
    "coordinates": {
      "latitude": -5.3802299,
      "longitude": 105.2919015
    }
  },
  {
    "id": "poi-itera-lampung-n-9782150850",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Angkringan Syafaat",
    "coordinates": {
      "latitude": -5.3793954,
      "longitude": 105.2924675
    }
  },
  {
    "id": "poi-itera-lampung-n-9782172993",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Avia",
    "coordinates": {
      "latitude": -5.3746791,
      "longitude": 105.2952927
    }
  },
  {
    "id": "poi-itera-lampung-n-9782173008",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Town's Kebab",
    "coordinates": {
      "latitude": -5.3736096,
      "longitude": 105.2966821
    },
    "description": "Kuliner: kebab"
  },
  {
    "id": "poi-itera-lampung-n-9782184294",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Lontong Kambing Cuputo 2",
    "coordinates": {
      "latitude": -5.3742171,
      "longitude": 105.2962757
    }
  },
  {
    "id": "poi-itera-lampung-n-9782236940",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Hikmah",
    "coordinates": {
      "latitude": -5.3760996,
      "longitude": 105.2842906
    }
  },
  {
    "id": "poi-itera-lampung-n-9782242980",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warkop Nadila",
    "coordinates": {
      "latitude": -5.330137,
      "longitude": 105.2824148
    }
  },
  {
    "id": "poi-itera-lampung-n-9782242981",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Es Oyen Bu Mini",
    "coordinates": {
      "latitude": -5.3303159,
      "longitude": 105.2823558
    },
    "description": "Kuliner: juice"
  },
  {
    "id": "poi-itera-lampung-n-9782242991",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Darusalam",
    "coordinates": {
      "latitude": -5.3315738,
      "longitude": 105.2813741
    }
  },
  {
    "id": "poi-itera-lampung-n-9782258955",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warung Kami",
    "coordinates": {
      "latitude": -5.3305256,
      "longitude": 105.2825865
    }
  },
  {
    "id": "poi-itera-lampung-n-9782267204",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "MixMax Kitchen",
    "coordinates": {
      "latitude": -5.3308421,
      "longitude": 105.2827005
    }
  },
  {
    "id": "poi-itera-lampung-n-9794652187",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rumah Makan Padang",
    "coordinates": {
      "latitude": -5.3603952,
      "longitude": 105.2822193
    }
  },
  {
    "id": "poi-itera-lampung-n-9794652195",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Bunda",
    "coordinates": {
      "latitude": -5.3593918,
      "longitude": 105.2841111
    }
  },
  {
    "id": "poi-itera-lampung-n-9794662278",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3613953,
      "longitude": 105.2809053
    }
  },
  {
    "id": "poi-itera-lampung-n-9794669606",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Olbiyami",
    "coordinates": {
      "latitude": -5.3594505,
      "longitude": 105.282058
    }
  },
  {
    "id": "poi-itera-lampung-n-9794669616",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Omah Joglo Way Kandis",
    "coordinates": {
      "latitude": -5.3574414,
      "longitude": 105.2862943
    }
  },
  {
    "id": "poi-itera-lampung-n-9794684869",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nasi Goreng Mas Heri",
    "coordinates": {
      "latitude": -5.3559892,
      "longitude": 105.2881717
    }
  },
  {
    "id": "poi-itera-lampung-n-9794698920",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nasi Uduk Mbak Nur",
    "coordinates": {
      "latitude": -5.3582459,
      "longitude": 105.285288
    }
  },
  {
    "id": "poi-itera-lampung-n-9794698960",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Jajanan Yuyun",
    "coordinates": {
      "latitude": -5.3576721,
      "longitude": 105.2867335
    }
  },
  {
    "id": "poi-itera-lampung-n-9794712650",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3606868,
      "longitude": 105.2824565
    }
  },
  {
    "id": "poi-itera-lampung-n-9794712652",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Arafarma",
    "coordinates": {
      "latitude": -5.359032,
      "longitude": 105.2841111
    }
  },
  {
    "id": "poi-itera-lampung-n-9794718568",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3576794,
      "longitude": 105.28607
    }
  },
  {
    "id": "poi-itera-lampung-n-9794718909",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kedai OAS",
    "coordinates": {
      "latitude": -5.3556424,
      "longitude": 105.288231
    }
  },
  {
    "id": "poi-itera-lampung-n-9794718910",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele Zaqila",
    "coordinates": {
      "latitude": -5.3532629,
      "longitude": 105.2903446
    }
  },
  {
    "id": "poi-itera-lampung-n-9794726145",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Ogan 3",
    "coordinates": {
      "latitude": -5.3545472,
      "longitude": 105.2896533
    }
  },
  {
    "id": "poi-itera-lampung-n-9794726474",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Street Food",
    "coordinates": {
      "latitude": -5.3602882,
      "longitude": 105.2828864
    }
  },
  {
    "id": "poi-itera-lampung-n-9794727198",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Abdul Rahman Ibnu Auf",
    "coordinates": {
      "latitude": -5.3574433,
      "longitude": 105.2870912
    }
  },
  {
    "id": "poi-itera-lampung-n-9794727829",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Sate Jogja Tresno",
    "coordinates": {
      "latitude": -5.3594158,
      "longitude": 105.2834977
    }
  },
  {
    "id": "poi-itera-lampung-n-9794728122",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Babana Tagedoom",
    "coordinates": {
      "latitude": -5.3579784,
      "longitude": 105.2858847
    }
  },
  {
    "id": "poi-itera-lampung-n-9794730271",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Klinik Husada Way Kandis",
    "coordinates": {
      "latitude": -5.3582625,
      "longitude": 105.2861294
    }
  },
  {
    "id": "poi-itera-lampung-n-9794733653",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Putra Mandiri GTC",
    "coordinates": {
      "latitude": -5.346932,
      "longitude": 105.2949315
    }
  },
  {
    "id": "poi-itera-lampung-n-9794733654",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Depot Jamur",
    "coordinates": {
      "latitude": -5.3465205,
      "longitude": 105.2953707
    }
  },
  {
    "id": "poi-itera-lampung-n-9794736219",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kedai Baby Boss",
    "coordinates": {
      "latitude": -5.3568639,
      "longitude": 105.2869151
    }
  },
  {
    "id": "poi-itera-lampung-n-9794737051",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "MI Tektek Berkah",
    "coordinates": {
      "latitude": -5.3579618,
      "longitude": 105.2853454
    }
  },
  {
    "id": "poi-itera-lampung-n-9794737075",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Floop Eatery",
    "coordinates": {
      "latitude": -5.3482033,
      "longitude": 105.2941272
    }
  },
  {
    "id": "poi-itera-lampung-n-9794737140",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Master Fried Chicken",
    "coordinates": {
      "latitude": -5.3555279,
      "longitude": 105.2883403
    },
    "description": "Kuliner: chicken"
  },
  {
    "id": "poi-itera-lampung-n-9794737141",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rumah Makan Uda Heri",
    "coordinates": {
      "latitude": -5.3529049,
      "longitude": 105.2908561
    }
  },
  {
    "id": "poi-itera-lampung-n-9794737275",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Solo Kandis",
    "coordinates": {
      "latitude": -5.3554265,
      "longitude": 105.2888352
    }
  },
  {
    "id": "poi-itera-lampung-n-9794754411",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Martabak Bangka 333",
    "coordinates": {
      "latitude": -5.3436567,
      "longitude": 105.2949964
    }
  },
  {
    "id": "poi-itera-lampung-n-9794758674",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mojito Moctail",
    "coordinates": {
      "latitude": -5.3576278,
      "longitude": 105.2861924
    }
  },
  {
    "id": "poi-itera-lampung-n-9794758683",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek Pasar Way Kandis",
    "coordinates": {
      "latitude": -5.351414,
      "longitude": 105.2920774
    }
  },
  {
    "id": "poi-itera-lampung-n-9794758954",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Siomay Ocan",
    "coordinates": {
      "latitude": -5.3500375,
      "longitude": 105.2930727
    }
  },
  {
    "id": "poi-itera-lampung-n-9794759082",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel lele Jenaka",
    "coordinates": {
      "latitude": -5.3460813,
      "longitude": 105.2959323
    }
  },
  {
    "id": "poi-itera-lampung-n-9794759224",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Nurul Iman",
    "coordinates": {
      "latitude": -5.3567753,
      "longitude": 105.2860534
    }
  },
  {
    "id": "poi-itera-lampung-n-9794759229",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Cipto Roso 2",
    "coordinates": {
      "latitude": -5.3491296,
      "longitude": 105.293397
    }
  },
  {
    "id": "poi-itera-lampung-n-9794760336",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Seblak Jebret",
    "coordinates": {
      "latitude": -5.3562882,
      "longitude": 105.2875619
    }
  },
  {
    "id": "poi-itera-lampung-n-9794760534",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Lapo Tuak dan Daging",
    "coordinates": {
      "latitude": -5.3505209,
      "longitude": 105.2928132
    }
  },
  {
    "id": "poi-itera-lampung-n-9794760846",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BNI",
    "coordinates": {
      "latitude": -5.3419978,
      "longitude": 105.2950205
    }
  },
  {
    "id": "poi-itera-lampung-n-9794761360",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Mak Datuk",
    "coordinates": {
      "latitude": -5.3458267,
      "longitude": 105.2962807
    }
  },
  {
    "id": "poi-itera-lampung-n-9794761609",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Tiga Ameh",
    "coordinates": {
      "latitude": -5.3496574,
      "longitude": 105.293043
    }
  },
  {
    "id": "poi-itera-lampung-n-9794761624",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "GBK Street Food",
    "coordinates": {
      "latitude": -5.3550417,
      "longitude": 105.2888064
    }
  },
  {
    "id": "poi-itera-lampung-n-9794762676",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Mie Ayam Ali",
    "coordinates": {
      "latitude": -5.3520026,
      "longitude": 105.2915622
    }
  },
  {
    "id": "poi-itera-lampung-n-9794762759",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pempek Raffa",
    "coordinates": {
      "latitude": -5.3472604,
      "longitude": 105.2950687
    }
  },
  {
    "id": "poi-itera-lampung-n-9794762784",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BCA",
    "coordinates": {
      "latitude": -5.3456182,
      "longitude": 105.2966273
    }
  },
  {
    "id": "poi-itera-lampung-n-9794766044",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Pustu Way Kandis",
    "coordinates": {
      "latitude": -5.3488492,
      "longitude": 105.293612
    }
  },
  {
    "id": "poi-itera-lampung-n-9794767058",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nasi Liwet Ayam Polos",
    "coordinates": {
      "latitude": -5.3470981,
      "longitude": 105.2948277
    }
  },
  {
    "id": "poi-itera-lampung-n-9794767339",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Klinik Pratama",
    "coordinates": {
      "latitude": -5.3540342,
      "longitude": 105.290593
    }
  },
  {
    "id": "poi-itera-lampung-n-9794768432",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3526577,
      "longitude": 105.2907579
    }
  },
  {
    "id": "poi-itera-lampung-n-9794772317",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3511668,
      "longitude": 105.2919218
    }
  },
  {
    "id": "poi-itera-lampung-n-9794772839",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Sate Luwes",
    "coordinates": {
      "latitude": -5.3400917,
      "longitude": 105.2937454
    }
  },
  {
    "id": "poi-itera-lampung-n-9794774597",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Minimo Cafe",
    "coordinates": {
      "latitude": -5.3446144,
      "longitude": 105.2956561
    }
  },
  {
    "id": "poi-itera-lampung-n-9794774955",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Son Haji Jati Mulyo",
    "coordinates": {
      "latitude": -5.3437803,
      "longitude": 105.2955246
    }
  },
  {
    "id": "poi-itera-lampung-n-9794774957",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ikan Bakar Khas Lampung",
    "coordinates": {
      "latitude": -5.3411453,
      "longitude": 105.2942384
    }
  },
  {
    "id": "poi-itera-lampung-n-9794783864",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Maarif",
    "coordinates": {
      "latitude": -5.3451107,
      "longitude": 105.2957377
    }
  },
  {
    "id": "poi-itera-lampung-n-9794785818",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Bakar Bandung",
    "coordinates": {
      "latitude": -5.3435607,
      "longitude": 105.2953096
    }
  },
  {
    "id": "poi-itera-lampung-n-9794786832",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Ali Jati Mulyo",
    "coordinates": {
      "latitude": -5.3452528,
      "longitude": 105.2963975
    }
  },
  {
    "id": "poi-itera-lampung-n-9794788297",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Bakar Kang Asep",
    "coordinates": {
      "latitude": -5.3410604,
      "longitude": 105.2940846
    }
  },
  {
    "id": "poi-itera-lampung-n-9794794691",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Martabak Cahaya",
    "coordinates": {
      "latitude": -5.3435128,
      "longitude": 105.2949
    }
  },
  {
    "id": "poi-itera-lampung-n-9794797881",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Mushola Darul Amanah",
    "coordinates": {
      "latitude": -5.3428688,
      "longitude": 105.2952299
    }
  },
  {
    "id": "poi-itera-lampung-n-9794797909",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Minang Mimbau",
    "coordinates": {
      "latitude": -5.3415162,
      "longitude": 105.294003
    }
  },
  {
    "id": "poi-itera-lampung-n-9794810739",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3411656,
      "longitude": 105.293877
    }
  },
  {
    "id": "poi-itera-lampung-n-9794815422",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Rumah Makan Putra Jaya",
    "coordinates": {
      "latitude": -5.3388997,
      "longitude": 105.2933321
    }
  },
  {
    "id": "poi-itera-lampung-n-9794815795",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Martabak Cempaka",
    "coordinates": {
      "latitude": -5.3348069,
      "longitude": 105.2933154
    }
  },
  {
    "id": "poi-itera-lampung-n-9794817073",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3395234,
      "longitude": 105.2935768
    }
  },
  {
    "id": "poi-itera-lampung-n-9794825323",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nasi Goreng Wingsiwuluh",
    "coordinates": {
      "latitude": -5.339874,
      "longitude": 105.2934507
    }
  },
  {
    "id": "poi-itera-lampung-n-9794825792",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Bank BMT Hasannah",
    "coordinates": {
      "latitude": -5.3369142,
      "longitude": 105.2928206
    }
  },
  {
    "id": "poi-itera-lampung-n-9794826291",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Tekwan Model",
    "coordinates": {
      "latitude": -5.3300916,
      "longitude": 105.2907478
    }
  },
  {
    "id": "poi-itera-lampung-n-9794832263",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -5.3386709,
      "longitude": 105.2929429
    }
  },
  {
    "id": "poi-itera-lampung-n-9794833282",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele Mas Sapto",
    "coordinates": {
      "latitude": -5.3384033,
      "longitude": 105.2938992
    }
  },
  {
    "id": "poi-itera-lampung-n-9794835358",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Ali",
    "coordinates": {
      "latitude": -5.3343105,
      "longitude": 105.2930319
    }
  },
  {
    "id": "poi-itera-lampung-n-9794836999",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Dapur Teh Opi",
    "coordinates": {
      "latitude": -5.3365949,
      "longitude": 105.2935508
    }
  },
  {
    "id": "poi-itera-lampung-n-9794837123",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Pagi Sore",
    "coordinates": {
      "latitude": -5.3371817,
      "longitude": 105.2927335
    }
  },
  {
    "id": "poi-itera-lampung-n-9794837204",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Yay Drinks",
    "coordinates": {
      "latitude": -5.3307909,
      "longitude": 105.2922453
    }
  },
  {
    "id": "poi-itera-lampung-n-9794837991",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Ayam Bakar Ojo Gelo",
    "coordinates": {
      "latitude": -5.3346168,
      "longitude": 105.2929503
    }
  },
  {
    "id": "poi-itera-lampung-n-9794839026",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kedai Mimih Yudha",
    "coordinates": {
      "latitude": -5.3354656,
      "longitude": 105.2932654
    }
  },
  {
    "id": "poi-itera-lampung-n-9794842105",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Wr Serbu Bella",
    "coordinates": {
      "latitude": -5.3370193,
      "longitude": 105.2930134
    }
  },
  {
    "id": "poi-itera-lampung-n-9794850890",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kenz Takoyaki Sosis",
    "coordinates": {
      "latitude": -5.3340634,
      "longitude": 105.2930054
    }
  },
  {
    "id": "poi-itera-lampung-n-9794853363",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Ikhlas",
    "coordinates": {
      "latitude": -5.3337754,
      "longitude": 105.2926279
    }
  },
  {
    "id": "poi-itera-lampung-n-9794868233",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Selingkuh",
    "coordinates": {
      "latitude": -5.3333744,
      "longitude": 105.2929879
    }
  },
  {
    "id": "poi-itera-lampung-n-10160497767",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al-Walidain",
    "coordinates": {
      "latitude": -5.3613238,
      "longitude": 105.3068502
    }
  },
  {
    "id": "poi-itera-lampung-n-11738149017",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Zoey Kitchen",
    "coordinates": {
      "latitude": -5.3466811,
      "longitude": 105.2861468
    },
    "description": "Kuliner: indonesian"
  },
  {
    "id": "poi-itera-lampung-n-13261326993",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "masjid at tanwir",
    "coordinates": {
      "latitude": -5.356796,
      "longitude": 105.3187448
    }
  },
  {
    "id": "poi-itera-lampung-w-405026523",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -5.3359198,
      "longitude": 105.2814604
    }
  },
  {
    "id": "poi-itera-lampung-w-522762868",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Miftahul Huda",
    "coordinates": {
      "latitude": -5.3638666,
      "longitude": 105.2961435
    }
  },
  {
    "id": "poi-itera-lampung-w-523201691",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Abdurrahman Ibnu Auf",
    "coordinates": {
      "latitude": -5.3574736,
      "longitude": 105.2870822
    }
  },
  {
    "id": "poi-itera-lampung-w-868684994",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Poliklinik ITERA",
    "coordinates": {
      "latitude": -5.357734,
      "longitude": 105.3158735
    }
  },
  {
    "id": "poi-itera-lampung-w-868684998",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Mushola",
    "coordinates": {
      "latitude": -5.3577109,
      "longitude": 105.316088
    }
  },
  {
    "id": "poi-itera-lampung-w-868684999",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bukit Kiara Lestari",
    "coordinates": {
      "latitude": -5.3577134,
      "longitude": 105.3163251
    }
  },
  {
    "id": "poi-itera-lampung-w-868685000",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Galeri ITERA",
    "coordinates": {
      "latitude": -5.3579983,
      "longitude": 105.3154124
    }
  },
  {
    "id": "poi-itera-lampung-w-1023233218",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Hikmah GMZ",
    "coordinates": {
      "latitude": -5.3668964,
      "longitude": 105.2930731
    }
  },
  {
    "id": "poi-itera-lampung-w-1024455808",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Baitul Ilmi ITERA",
    "coordinates": {
      "latitude": -5.3590521,
      "longitude": 105.3126078
    }
  },
  {
    "id": "poi-itera-lampung-w-1063830802",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Waroenk Tropical",
    "coordinates": {
      "latitude": -5.3899247,
      "longitude": 105.2937821
    }
  },
  {
    "id": "poi-itera-lampung-w-1063831071",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Nuju Coffee",
    "coordinates": {
      "latitude": -5.3883552,
      "longitude": 105.2929259
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-w-1063831256",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid Al Huda",
    "coordinates": {
      "latitude": -5.3866011,
      "longitude": 105.2918915
    }
  },
  {
    "id": "poi-itera-lampung-w-1063833538",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Inspirasi Coffee",
    "coordinates": {
      "latitude": -5.3831067,
      "longitude": 105.2966848
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-w-1063878558",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Yellow Kichen",
    "coordinates": {
      "latitude": -5.3897014,
      "longitude": 105.2816574
    }
  },
  {
    "id": "poi-itera-lampung-w-1063878594",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso Basuki",
    "coordinates": {
      "latitude": -5.3894185,
      "longitude": 105.2816933
    }
  },
  {
    "id": "poi-itera-lampung-w-1063878757",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso TM 2",
    "coordinates": {
      "latitude": -5.3893384,
      "longitude": 105.281439
    }
  },
  {
    "id": "poi-itera-lampung-w-1063879682",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ketoprak Amigos",
    "coordinates": {
      "latitude": -5.3890192,
      "longitude": 105.2818049
    }
  },
  {
    "id": "poi-itera-lampung-w-1063879952",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warkok BTN3",
    "coordinates": {
      "latitude": -5.3887766,
      "longitude": 105.2819117
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-w-1063879978",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bun Coffee Way Halim",
    "coordinates": {
      "latitude": -5.3884566,
      "longitude": 105.2818372
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-w-1063888827",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Trailmen Cafe",
    "coordinates": {
      "latitude": -5.3882291,
      "longitude": 105.2815447
    }
  },
  {
    "id": "poi-itera-lampung-w-1063895645",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Ibu Gendut",
    "coordinates": {
      "latitude": -5.3879635,
      "longitude": 105.2818163
    }
  },
  {
    "id": "poi-itera-lampung-w-1063895874",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Klinik Kimia Farma",
    "coordinates": {
      "latitude": -5.3874413,
      "longitude": 105.2819004
    }
  },
  {
    "id": "poi-itera-lampung-w-1063896310",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kedai Kopi Kini",
    "coordinates": {
      "latitude": -5.3868302,
      "longitude": 105.2819087
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-itera-lampung-w-1063896968",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Mie Aceh",
    "coordinates": {
      "latitude": -5.3824803,
      "longitude": 105.2814777
    }
  },
  {
    "id": "poi-itera-lampung-w-1063897255",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Oops Pujasera",
    "coordinates": {
      "latitude": -5.383114,
      "longitude": 105.2812283
    }
  },
  {
    "id": "poi-itera-lampung-w-1110202582",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "RS Imanuel",
    "coordinates": {
      "latitude": -5.3857061,
      "longitude": 105.2878587
    }
  },
  {
    "id": "poi-itera-lampung-w-1340905500",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid At Tanwir",
    "coordinates": {
      "latitude": -5.3568283,
      "longitude": 105.3187281
    }
  },
  {
    "id": "poi-itera-lampung-w-1445398250",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "masjid biru",
    "coordinates": {
      "latitude": -5.3588563,
      "longitude": 105.3049288
    }
  },
  {
    "id": "poi-ui-depok-n-1323706980",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Marugame Udon",
    "coordinates": {
      "latitude": -6.3728137,
      "longitude": 106.8333305
    },
    "description": "Kuliner: noodle"
  },
  {
    "id": "poi-ui-depok-n-1352175440",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "HSBC",
    "coordinates": {
      "latitude": -6.3709118,
      "longitude": 106.8331357
    }
  },
  {
    "id": "poi-ui-depok-n-1538010467",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Takarajima",
    "coordinates": {
      "latitude": -6.3609294,
      "longitude": 106.8332271
    },
    "description": "Kuliner: japanese"
  },
  {
    "id": "poi-ui-depok-n-1538010710",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfa Midi",
    "coordinates": {
      "latitude": -6.3662823,
      "longitude": 106.8342198
    }
  },
  {
    "id": "poi-ui-depok-n-1538010827",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3616013,
      "longitude": 106.8334152
    }
  },
  {
    "id": "poi-ui-depok-n-1840967972",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Bebek Tiktok",
    "coordinates": {
      "latitude": -6.3612849,
      "longitude": 106.8337431
    }
  },
  {
    "id": "poi-ui-depok-n-1840967973",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Es Pocong",
    "coordinates": {
      "latitude": -6.3611638,
      "longitude": 106.833277
    }
  },
  {
    "id": "poi-ui-depok-n-1840967975",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3608311,
      "longitude": 106.8336688
    }
  },
  {
    "id": "poi-ui-depok-n-1840967976",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Mie Ayam Fajar",
    "coordinates": {
      "latitude": -6.3618419,
      "longitude": 106.8333779
    }
  },
  {
    "id": "poi-ui-depok-n-1840967977",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pecel Lele Lela",
    "coordinates": {
      "latitude": -6.3634229,
      "longitude": 106.8335068
    }
  },
  {
    "id": "poi-ui-depok-n-1840967978",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pizza Hut Delivery",
    "coordinates": {
      "latitude": -6.3638049,
      "longitude": 106.8340892
    },
    "description": "Kuliner: pizza"
  },
  {
    "id": "poi-ui-depok-n-1840967979",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Sate Gajah",
    "coordinates": {
      "latitude": -6.3663551,
      "longitude": 106.8334878
    }
  },
  {
    "id": "poi-ui-depok-n-1846516832",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3697064,
      "longitude": 106.8495106
    }
  },
  {
    "id": "poi-ui-depok-n-1846516987",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3723785,
      "longitude": 106.8463122
    }
  },
  {
    "id": "poi-ui-depok-n-1846989439",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3680892,
      "longitude": 106.8342782
    }
  },
  {
    "id": "poi-ui-depok-n-1846989440",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Apotek",
    "coordinates": {
      "latitude": -6.3682794,
      "longitude": 106.8345754
    }
  },
  {
    "id": "poi-ui-depok-n-1846989442",
    "campusId": "ui-depok",
    "category": "food",
    "name": "DIM SUM",
    "coordinates": {
      "latitude": -6.3680324,
      "longitude": 106.8338964
    },
    "description": "Kuliner: chinese"
  },
  {
    "id": "poi-ui-depok-n-1846989451",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kuliner Sore Gang Pinang",
    "coordinates": {
      "latitude": -6.3672807,
      "longitude": 106.8352577
    }
  },
  {
    "id": "poi-ui-depok-n-1846989483",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mushola Al Ikhlas",
    "coordinates": {
      "latitude": -6.3677259,
      "longitude": 106.8352962
    }
  },
  {
    "id": "poi-ui-depok-n-1846989487",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Rumah Makan Bude",
    "coordinates": {
      "latitude": -6.3679445,
      "longitude": 106.8342609
    },
    "description": "Kuliner: regional"
  },
  {
    "id": "poi-ui-depok-n-1846989494",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Rumah Makan Padang Sederhana",
    "coordinates": {
      "latitude": -6.3674045,
      "longitude": 106.8351249
    },
    "description": "Kuliner: regional"
  },
  {
    "id": "poi-ui-depok-n-2063493247",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Asrama UI",
    "coordinates": {
      "latitude": -6.3483498,
      "longitude": 106.8297711
    }
  },
  {
    "id": "poi-ui-depok-n-2063493252",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Balairung",
    "coordinates": {
      "latitude": -6.3681218,
      "longitude": 106.8315993
    }
  },
  {
    "id": "poi-ui-depok-n-2063493256",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ekonomi dan Bisnis",
    "coordinates": {
      "latitude": -6.3594526,
      "longitude": 106.8258186
    }
  },
  {
    "id": "poi-ui-depok-n-2063493261",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ekonomi dan Bisnis",
    "coordinates": {
      "latitude": -6.3596138,
      "longitude": 106.8256942
    }
  },
  {
    "id": "poi-ui-depok-n-2063493265",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Hukum",
    "coordinates": {
      "latitude": -6.3648982,
      "longitude": 106.8322269
    }
  },
  {
    "id": "poi-ui-depok-n-2063493269",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ilmu Pengetahuan Budaya",
    "coordinates": {
      "latitude": -6.361182,
      "longitude": 106.8294626
    }
  },
  {
    "id": "poi-ui-depok-n-2063493272",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Kesehatan Masyarakat",
    "coordinates": {
      "latitude": -6.3717018,
      "longitude": 106.8293622
    }
  },
  {
    "id": "poi-ui-depok-n-2063493277",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ilmu Sosial dan Ilmu Politik",
    "coordinates": {
      "latitude": -6.3618297,
      "longitude": 106.8301695
    }
  },
  {
    "id": "poi-ui-depok-n-2063493281",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Kesehatan Masyarakat",
    "coordinates": {
      "latitude": -6.3714557,
      "longitude": 106.8291036
    }
  },
  {
    "id": "poi-ui-depok-n-2063493284",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Matematika dan IPA",
    "coordinates": {
      "latitude": -6.3696727,
      "longitude": 106.8259729
    }
  },
  {
    "id": "poi-ui-depok-n-2063493288",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Matematika dan IPA",
    "coordinates": {
      "latitude": -6.3698443,
      "longitude": 106.8257566
    }
  },
  {
    "id": "poi-ui-depok-n-2063493292",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Psikologi",
    "coordinates": {
      "latitude": -6.3629161,
      "longitude": 106.8312015
    }
  },
  {
    "id": "poi-ui-depok-n-2063493295",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Teknik",
    "coordinates": {
      "latitude": -6.361283,
      "longitude": 106.8233114
    }
  },
  {
    "id": "poi-ui-depok-n-2063493299",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Universitas Indonesia",
    "coordinates": {
      "latitude": -6.3535289,
      "longitude": 106.8318182
    }
  },
  {
    "id": "poi-ui-depok-n-2063493308",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Masjid UI",
    "coordinates": {
      "latitude": -6.3655978,
      "longitude": 106.8320129
    }
  },
  {
    "id": "poi-ui-depok-n-2063493312",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pusgiwa",
    "coordinates": {
      "latitude": -6.3667604,
      "longitude": 106.8240206
    }
  },
  {
    "id": "poi-ui-depok-n-2063493316",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3682275,
      "longitude": 106.8317943
    }
  },
  {
    "id": "poi-ui-depok-n-2063493320",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Program Vokasi",
    "coordinates": {
      "latitude": -6.3659523,
      "longitude": 106.8218006
    }
  },
  {
    "id": "poi-ui-depok-n-2063493325",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Program Vokasi",
    "coordinates": {
      "latitude": -6.3661131,
      "longitude": 106.8216544
    }
  },
  {
    "id": "poi-ui-depok-n-2063493332",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Stasiun KRL Universitas Indonesia",
    "coordinates": {
      "latitude": -6.3610642,
      "longitude": 106.8317204
    }
  },
  {
    "id": "poi-ui-depok-n-2141270983",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Sinar Garut Bogasari 3",
    "coordinates": {
      "latitude": -6.364559,
      "longitude": 106.833206
    }
  },
  {
    "id": "poi-ui-depok-n-2687994892",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "ATM BNI FMIPA",
    "coordinates": {
      "latitude": -6.3698821,
      "longitude": 106.8262092
    }
  },
  {
    "id": "poi-ui-depok-n-2995287614",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SOR",
    "coordinates": {
      "latitude": -6.3670147,
      "longitude": 106.8244835
    }
  },
  {
    "id": "poi-ui-depok-n-3004047175",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "BNI",
    "coordinates": {
      "latitude": -6.368409,
      "longitude": 106.8308926
    }
  },
  {
    "id": "poi-ui-depok-n-3009762892",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Ukhuwah Islamiyah",
    "coordinates": {
      "latitude": -6.3658093,
      "longitude": 106.8311115
    }
  },
  {
    "id": "poi-ui-depok-n-3009804634",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Prima",
    "coordinates": {
      "latitude": -6.3665657,
      "longitude": 106.8281579
    }
  },
  {
    "id": "poi-ui-depok-n-3048454238",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3562234,
      "longitude": 106.8425685
    }
  },
  {
    "id": "poi-ui-depok-n-3171797951",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Takigawa Resto",
    "coordinates": {
      "latitude": -6.3737018,
      "longitude": 106.8355764
    }
  },
  {
    "id": "poi-ui-depok-n-3296490974",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Darul Istiqomah",
    "coordinates": {
      "latitude": -6.3699651,
      "longitude": 106.806432
    }
  },
  {
    "id": "poi-ui-depok-n-3502666028",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Asy-Syuhada",
    "coordinates": {
      "latitude": -6.356499,
      "longitude": 106.8487012
    }
  },
  {
    "id": "poi-ui-depok-n-3506697607",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Mu'awannah",
    "coordinates": {
      "latitude": -6.3737167,
      "longitude": 106.8467232
    }
  },
  {
    "id": "poi-ui-depok-n-3645488439",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamidi",
    "coordinates": {
      "latitude": -6.3449789,
      "longitude": 106.8156451
    }
  },
  {
    "id": "poi-ui-depok-n-4152527761",
    "campusId": "ui-depok",
    "category": "food",
    "name": "KFC",
    "coordinates": {
      "latitude": -6.3451209,
      "longitude": 106.833799
    },
    "description": "Kuliner: chicken"
  },
  {
    "id": "poi-ui-depok-n-4152535995",
    "campusId": "ui-depok",
    "category": "food",
    "name": "McDonald's",
    "coordinates": {
      "latitude": -6.35484,
      "longitude": 106.8444156
    },
    "description": "Kuliner: burger"
  },
  {
    "id": "poi-ui-depok-n-4152818555",
    "campusId": "ui-depok",
    "category": "food",
    "name": "KFC Margonda",
    "coordinates": {
      "latitude": -6.374415,
      "longitude": 106.832578
    }
  },
  {
    "id": "poi-ui-depok-n-4242618989",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pizza Hut",
    "coordinates": {
      "latitude": -6.3730083,
      "longitude": 106.833266
    },
    "description": "Kuliner: pizza"
  },
  {
    "id": "poi-ui-depok-n-4343829982",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "ATM Mandiri FMIPA",
    "coordinates": {
      "latitude": -6.3698697,
      "longitude": 106.8261987
    }
  },
  {
    "id": "poi-ui-depok-n-4343909154",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Bikun Coffee",
    "coordinates": {
      "latitude": -6.3649986,
      "longitude": 106.831092
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-n-4343949731",
    "campusId": "ui-depok",
    "category": "food",
    "name": "AH Burger",
    "coordinates": {
      "latitude": -6.3619396,
      "longitude": 106.8263437
    },
    "description": "Kuliner: burger"
  },
  {
    "id": "poi-ui-depok-n-4343949732",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Mini Pique Nique",
    "coordinates": {
      "latitude": -6.361233,
      "longitude": 106.8253511
    },
    "description": "Kuliner: international"
  },
  {
    "id": "poi-ui-depok-n-4343998651",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Java Aroma Perpustakaan Universitas Indoenesia",
    "coordinates": {
      "latitude": -6.365361,
      "longitude": 106.8297431
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-n-4346713571",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "ATM Mandiri",
    "coordinates": {
      "latitude": -6.3611611,
      "longitude": 106.8253149
    }
  },
  {
    "id": "poi-ui-depok-n-4399084448",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3580859,
      "longitude": 106.8327845
    }
  },
  {
    "id": "poi-ui-depok-n-4442088168",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3596156,
      "longitude": 106.8170608
    }
  },
  {
    "id": "poi-ui-depok-n-4442091451",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3596833,
      "longitude": 106.8170262
    }
  },
  {
    "id": "poi-ui-depok-n-4559501192",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Waroeng steak and shake",
    "coordinates": {
      "latitude": -6.3553966,
      "longitude": 106.8485253
    }
  },
  {
    "id": "poi-ui-depok-n-4780848423",
    "campusId": "ui-depok",
    "category": "food",
    "name": "RM Padang Sederhana",
    "coordinates": {
      "latitude": -6.3665593,
      "longitude": 106.8343005
    },
    "description": "Kuliner: indonesian"
  },
  {
    "id": "poi-ui-depok-n-4965326082",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Bindu",
    "coordinates": {
      "latitude": -6.3426199,
      "longitude": 106.8154113
    }
  },
  {
    "id": "poi-ui-depok-n-4965326230",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Semangka I",
    "coordinates": {
      "latitude": -6.3455,
      "longitude": 106.8106082
    }
  },
  {
    "id": "poi-ui-depok-n-4992176766",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3751773,
      "longitude": 106.8251029
    }
  },
  {
    "id": "poi-ui-depok-n-5367286073",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Bakso Kuah & Bakar Moro Seneng",
    "coordinates": {
      "latitude": -6.3753782,
      "longitude": 106.8495719
    },
    "description": "Kuliner: regional;Bakso"
  },
  {
    "id": "poi-ui-depok-n-5367303996",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Edi",
    "coordinates": {
      "latitude": -6.3723747,
      "longitude": 106.8494116
    }
  },
  {
    "id": "poi-ui-depok-n-5367304032",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Soesoe",
    "coordinates": {
      "latitude": -6.3724866,
      "longitude": 106.8494184
    }
  },
  {
    "id": "poi-ui-depok-n-5367304886",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Nasi Goreng Jangkung",
    "coordinates": {
      "latitude": -6.3724187,
      "longitude": 106.8494157
    }
  },
  {
    "id": "poi-ui-depok-n-5367310256",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Roti Bakar Jangkung",
    "coordinates": {
      "latitude": -6.372448,
      "longitude": 106.8494157
    }
  },
  {
    "id": "poi-ui-depok-n-5367328327",
    "campusId": "ui-depok",
    "category": "laundry",
    "name": "Laundry Kiloan",
    "coordinates": {
      "latitude": -6.3753172,
      "longitude": 106.8495713
    }
  },
  {
    "id": "poi-ui-depok-n-5367328440",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Grocery Outlet",
    "coordinates": {
      "latitude": -6.3722567,
      "longitude": 106.8493017
    }
  },
  {
    "id": "poi-ui-depok-n-5367337395",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Grocery Outlet",
    "coordinates": {
      "latitude": -6.3746971,
      "longitude": 106.8495189
    }
  },
  {
    "id": "poi-ui-depok-n-5367354622",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Nasi Goreng Ojolali",
    "coordinates": {
      "latitude": -6.3723396,
      "longitude": 106.8492967
    }
  },
  {
    "id": "poi-ui-depok-n-5430187332",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Tomorro Coffee FISIP UI",
    "coordinates": {
      "latitude": -6.3633089,
      "longitude": 106.8287276
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-n-5617927323",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ice Only",
    "coordinates": {
      "latitude": -6.360147,
      "longitude": 106.8165614
    },
    "description": "Kuliner: sandwich;ice_cream;arab"
  },
  {
    "id": "poi-ui-depok-n-5636838059",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Green T Cafe",
    "coordinates": {
      "latitude": -6.3653117,
      "longitude": 106.8298142
    },
    "description": "Kuliner: food & beverage"
  },
  {
    "id": "poi-ui-depok-n-5938230387",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Bakso Boedjangan",
    "coordinates": {
      "latitude": -6.3667391,
      "longitude": 106.8341952
    }
  },
  {
    "id": "poi-ui-depok-n-6072311185",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3634828,
      "longitude": 106.8312928
    }
  },
  {
    "id": "poi-ui-depok-n-6073681182",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "BRI",
    "coordinates": {
      "latitude": -6.3634801,
      "longitude": 106.8312032
    }
  },
  {
    "id": "poi-ui-depok-n-6424661688",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3525689,
      "longitude": 106.8188577
    }
  },
  {
    "id": "poi-ui-depok-n-7132599222",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pos Pengamanan Utama FISIP UI",
    "coordinates": {
      "latitude": -6.3626401,
      "longitude": 106.8286244
    }
  },
  {
    "id": "poi-ui-depok-n-7452513532",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Apotek PharmaPlus",
    "coordinates": {
      "latitude": -6.3677544,
      "longitude": 106.8342418
    }
  },
  {
    "id": "poi-ui-depok-n-8581687617",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Sekolah Perguruan Rakyat 1",
    "coordinates": {
      "latitude": -6.3446602,
      "longitude": 106.8262122
    }
  },
  {
    "id": "poi-ui-depok-n-8581687717",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Seberang TK Kartika VIII - 13",
    "coordinates": {
      "latitude": -6.3452761,
      "longitude": 106.8274004
    }
  },
  {
    "id": "poi-ui-depok-n-8581687718",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Universitas Pancasila",
    "coordinates": {
      "latitude": -6.3421821,
      "longitude": 106.8333149
    }
  },
  {
    "id": "poi-ui-depok-n-8581687817",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Cempaka Srengseng Sawah",
    "coordinates": {
      "latitude": -6.3446024,
      "longitude": 106.828222
    }
  },
  {
    "id": "poi-ui-depok-n-8581687917",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SDN Srengseng Sawah 07",
    "coordinates": {
      "latitude": -6.3451062,
      "longitude": 106.8309779
    }
  },
  {
    "id": "poi-ui-depok-n-8586780617",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pool JakLingko JAK.46 + JAK.47",
    "coordinates": {
      "latitude": -6.3617236,
      "longitude": 106.8071289
    }
  },
  {
    "id": "poi-ui-depok-n-8589272219",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Warung Sila",
    "coordinates": {
      "latitude": -6.3451249,
      "longitude": 106.8157549
    }
  },
  {
    "id": "poi-ui-depok-n-8589272220",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pertigaan Warungsila Rindang",
    "coordinates": {
      "latitude": -6.3459577,
      "longitude": 106.8116014
    }
  },
  {
    "id": "poi-ui-depok-n-8589272221",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Persahabatan",
    "coordinates": {
      "latitude": -6.3461081,
      "longitude": 106.8104497
    }
  },
  {
    "id": "poi-ui-depok-n-8589272320",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SMP SMA Bakti 17",
    "coordinates": {
      "latitude": -6.3479452,
      "longitude": 106.8096978
    }
  },
  {
    "id": "poi-ui-depok-n-8589272321",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pom Bensin Kahfi",
    "coordinates": {
      "latitude": -6.3426777,
      "longitude": 106.8178673
    }
  },
  {
    "id": "poi-ui-depok-n-8589275318",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "RS Ali Sibroh Malisi",
    "coordinates": {
      "latitude": -6.3444081,
      "longitude": 106.8141397
    }
  },
  {
    "id": "poi-ui-depok-n-8589275417",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SMP SMK Bakti 17",
    "coordinates": {
      "latitude": -6.3481104,
      "longitude": 106.8095761
    }
  },
  {
    "id": "poi-ui-depok-n-8589289917",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SDN Cipedak 04 & 03",
    "coordinates": {
      "latitude": -6.3488794,
      "longitude": 106.8093181
    }
  },
  {
    "id": "poi-ui-depok-n-8589289918",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SDN Cipedak 04 & 03",
    "coordinates": {
      "latitude": -6.3489654,
      "longitude": 106.8093699
    }
  },
  {
    "id": "poi-ui-depok-n-8589290117",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Perempatan Persahabatan Timbul",
    "coordinates": {
      "latitude": -6.3508883,
      "longitude": 106.8077442
    }
  },
  {
    "id": "poi-ui-depok-n-8589330018",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Masjid Darussalam",
    "coordinates": {
      "latitude": -6.3467091,
      "longitude": 106.8101078
    }
  },
  {
    "id": "poi-ui-depok-n-8589337817",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pool JAK.46, JAK.47",
    "coordinates": {
      "latitude": -6.3617213,
      "longitude": 106.8071299
    }
  },
  {
    "id": "poi-ui-depok-n-8589338117",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Dul Djaim",
    "coordinates": {
      "latitude": -6.3616279,
      "longitude": 106.8071737
    }
  },
  {
    "id": "poi-ui-depok-n-8589338118",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3517924,
      "longitude": 106.8071411
    }
  },
  {
    "id": "poi-ui-depok-n-8589338217",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Dul Djaim",
    "coordinates": {
      "latitude": -6.3617464,
      "longitude": 106.8072354
    }
  },
  {
    "id": "poi-ui-depok-n-8589338218",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Persahabatan Timbul Raya",
    "coordinates": {
      "latitude": -6.3508388,
      "longitude": 106.8077215
    }
  },
  {
    "id": "poi-ui-depok-n-8594395818",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Masjid Jami Asy Syakirin",
    "coordinates": {
      "latitude": -6.3512171,
      "longitude": 106.8015233
    }
  },
  {
    "id": "poi-ui-depok-n-8594395819",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Haji Aselih",
    "coordinates": {
      "latitude": -6.3518407,
      "longitude": 106.8015658
    }
  },
  {
    "id": "poi-ui-depok-n-8594395820",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SDN 05 Cipedak",
    "coordinates": {
      "latitude": -6.3548415,
      "longitude": 106.801156
    }
  },
  {
    "id": "poi-ui-depok-n-8594395821",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SMPN 131",
    "coordinates": {
      "latitude": -6.3621938,
      "longitude": 106.8017391
    }
  },
  {
    "id": "poi-ui-depok-n-8594395823",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Madrasah Aliyah Citra Cendekia",
    "coordinates": {
      "latitude": -6.3574933,
      "longitude": 106.8006811
    }
  },
  {
    "id": "poi-ui-depok-n-8594395824",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Haji Amsar",
    "coordinates": {
      "latitude": -6.3454183,
      "longitude": 106.8036677
    }
  },
  {
    "id": "poi-ui-depok-n-8594395917",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Yayasan Islam Al Makmur",
    "coordinates": {
      "latitude": -6.3403889,
      "longitude": 106.8047559
    }
  },
  {
    "id": "poi-ui-depok-n-8594395918",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamidi",
    "coordinates": {
      "latitude": -6.3636206,
      "longitude": 106.8053195
    }
  },
  {
    "id": "poi-ui-depok-n-8594395919",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3628192,
      "longitude": 106.8023198
    }
  },
  {
    "id": "poi-ui-depok-n-8594395921",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Yayasan Islam Al Makmur",
    "coordinates": {
      "latitude": -6.3402459,
      "longitude": 106.8046845
    }
  },
  {
    "id": "poi-ui-depok-n-8594396117",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Masjid Daarul Iman",
    "coordinates": {
      "latitude": -6.3417326,
      "longitude": 106.8046231
    }
  },
  {
    "id": "poi-ui-depok-n-8594396217",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pertigaan Brigif Warungsila",
    "coordinates": {
      "latitude": -6.3447508,
      "longitude": 106.8040179
    }
  },
  {
    "id": "poi-ui-depok-n-8594396218",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pom Bensin Kahfi 1",
    "coordinates": {
      "latitude": -6.3500482,
      "longitude": 106.8017905
    }
  },
  {
    "id": "poi-ui-depok-n-8594396219",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Masjid Jami Al Makmur",
    "coordinates": {
      "latitude": -6.3456264,
      "longitude": 106.8035113
    }
  },
  {
    "id": "poi-ui-depok-n-8594396417",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pertigaan Kahfi Raya Timbul Raya",
    "coordinates": {
      "latitude": -6.3501475,
      "longitude": 106.8016966
    }
  },
  {
    "id": "poi-ui-depok-n-8594396517",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Seberang Madrasah Aliyah Citra Cendekia",
    "coordinates": {
      "latitude": -6.3575198,
      "longitude": 106.8007801
    }
  },
  {
    "id": "poi-ui-depok-n-8594398717",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Kramat",
    "coordinates": {
      "latitude": -6.3635802,
      "longitude": 106.8032727
    }
  },
  {
    "id": "poi-ui-depok-n-8594398718",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Manggar 2",
    "coordinates": {
      "latitude": -6.3632398,
      "longitude": 106.8027624
    }
  },
  {
    "id": "poi-ui-depok-n-8594398719",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3630747,
      "longitude": 106.8021587
    }
  },
  {
    "id": "poi-ui-depok-n-8594398720",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SMPN 131",
    "coordinates": {
      "latitude": -6.3622938,
      "longitude": 106.8017112
    }
  },
  {
    "id": "poi-ui-depok-n-8594398721",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SDN 05 Cipedak",
    "coordinates": {
      "latitude": -6.3544245,
      "longitude": 106.8012175
    }
  },
  {
    "id": "poi-ui-depok-n-8594398722",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Haji Aselih",
    "coordinates": {
      "latitude": -6.352172,
      "longitude": 106.801499
    }
  },
  {
    "id": "poi-ui-depok-n-8594398723",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Simpang Brigif",
    "coordinates": {
      "latitude": -6.3431171,
      "longitude": 106.8042832
    }
  },
  {
    "id": "poi-ui-depok-n-8594515619",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Tanah Baru",
    "coordinates": {
      "latitude": -6.3634426,
      "longitude": 106.8069589
    }
  },
  {
    "id": "poi-ui-depok-n-8594515620",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3633908,
      "longitude": 106.8068879
    }
  },
  {
    "id": "poi-ui-depok-n-8620519219",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Timbul Raya",
    "coordinates": {
      "latitude": -6.350278,
      "longitude": 106.803039
    }
  },
  {
    "id": "poi-ui-depok-n-8620753817",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Rindang Warung Sila",
    "coordinates": {
      "latitude": -6.3454231,
      "longitude": 106.8116899
    }
  },
  {
    "id": "poi-ui-depok-n-8620753820",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Sadar Raya",
    "coordinates": {
      "latitude": -6.3427803,
      "longitude": 106.8126035
    }
  },
  {
    "id": "poi-ui-depok-n-8620753821",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Timbul Raya",
    "coordinates": {
      "latitude": -6.3503891,
      "longitude": 106.8032543
    }
  },
  {
    "id": "poi-ui-depok-n-8620753917",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Sadar Raya",
    "coordinates": {
      "latitude": -6.3428944,
      "longitude": 106.8125395
    }
  },
  {
    "id": "poi-ui-depok-n-8659380228",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pool 9H Transjakarta - Cipedak",
    "coordinates": {
      "latitude": -6.3564874,
      "longitude": 106.8094385
    }
  },
  {
    "id": "poi-ui-depok-n-9037081023",
    "campusId": "ui-depok",
    "category": "food",
    "name": "SIXTY NINE BISTRO & LOUNGE",
    "coordinates": {
      "latitude": -6.3445249,
      "longitude": 106.8338005
    }
  },
  {
    "id": "poi-ui-depok-n-9037081024",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Chatime",
    "coordinates": {
      "latitude": -6.3445867,
      "longitude": 106.8339455
    },
    "description": "Kuliner: bubble_tea"
  },
  {
    "id": "poi-ui-depok-n-9233335607",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Hikam",
    "coordinates": {
      "latitude": -6.3596351,
      "longitude": 106.8210325
    }
  },
  {
    "id": "poi-ui-depok-n-9441757217",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Halte Pondok Cina",
    "coordinates": {
      "latitude": -6.3705416,
      "longitude": 106.8336046
    }
  },
  {
    "id": "poi-ui-depok-n-9555589833",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Huda",
    "coordinates": {
      "latitude": -6.3733918,
      "longitude": 106.8404463
    }
  },
  {
    "id": "poi-ui-depok-n-9559774317",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Margo City",
    "coordinates": {
      "latitude": -6.3723049,
      "longitude": 106.8332051
    }
  },
  {
    "id": "poi-ui-depok-n-9559774417",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Evecio Apartemen",
    "coordinates": {
      "latitude": -6.3599844,
      "longitude": 106.8332346
    }
  },
  {
    "id": "poi-ui-depok-n-9559774418",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Apartemen Melati",
    "coordinates": {
      "latitude": -6.3601087,
      "longitude": 106.8330527
    }
  },
  {
    "id": "poi-ui-depok-n-9560068818",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Srengseng Sawah 1",
    "coordinates": {
      "latitude": -6.3449796,
      "longitude": 106.8315074
    }
  },
  {
    "id": "poi-ui-depok-n-9560069017",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3451497,
      "longitude": 106.8294402
    }
  },
  {
    "id": "poi-ui-depok-n-9560069117",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3448256,
      "longitude": 106.8286433
    }
  },
  {
    "id": "poi-ui-depok-n-9560069118",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SMAN 109",
    "coordinates": {
      "latitude": -6.3447979,
      "longitude": 106.8335245
    }
  },
  {
    "id": "poi-ui-depok-n-9560069119",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Halte Universitas Indonesia",
    "coordinates": {
      "latitude": -6.3524436,
      "longitude": 106.832433
    }
  },
  {
    "id": "poi-ui-depok-n-9560069217",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Berdikari",
    "coordinates": {
      "latitude": -6.3435997,
      "longitude": 106.8331285
    }
  },
  {
    "id": "poi-ui-depok-n-9560069917",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Syibi",
    "coordinates": {
      "latitude": -6.3503717,
      "longitude": 106.832765
    }
  },
  {
    "id": "poi-ui-depok-n-9684620445",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kopi Kotak Margonda Depok - Pondok Cina",
    "coordinates": {
      "latitude": -6.3617588,
      "longitude": 106.8336924
    }
  },
  {
    "id": "poi-ui-depok-n-9684696265",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Oi Coffee Eatery - Tugu",
    "coordinates": {
      "latitude": -6.3542183,
      "longitude": 106.8367235
    }
  },
  {
    "id": "poi-ui-depok-n-9694087637",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Burger King",
    "coordinates": {
      "latitude": -6.3712522,
      "longitude": 106.8348285
    },
    "description": "Kuliner: burger"
  },
  {
    "id": "poi-ui-depok-n-9702253017",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Sawo",
    "coordinates": {
      "latitude": -6.3409388,
      "longitude": 106.8340478
    }
  },
  {
    "id": "poi-ui-depok-n-10214301688",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Roomy Kitchen",
    "coordinates": {
      "latitude": -6.3684358,
      "longitude": 106.8352991
    },
    "description": "Kuliner: coffee_shop;asian"
  },
  {
    "id": "poi-ui-depok-n-10291295323",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Kemuning",
    "coordinates": {
      "latitude": -6.3606592,
      "longitude": 106.8358948
    },
    "description": "Kuliner: indonesian"
  },
  {
    "id": "poi-ui-depok-n-10293554542",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Kirani",
    "coordinates": {
      "latitude": -6.3608504,
      "longitude": 106.8349494
    },
    "description": "Kuliner: indonesian;chicken"
  },
  {
    "id": "poi-ui-depok-n-10293554543",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Kuy",
    "coordinates": {
      "latitude": -6.3608567,
      "longitude": 106.8348973
    },
    "description": "Kuliner: indonesian;chicken"
  },
  {
    "id": "poi-ui-depok-n-10542804048",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Djamal Caffe",
    "coordinates": {
      "latitude": -6.3603893,
      "longitude": 106.8366518
    },
    "description": "Kuliner: indonesian"
  },
  {
    "id": "poi-ui-depok-n-10542804049",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warkop Jois Barokah",
    "coordinates": {
      "latitude": -6.3602805,
      "longitude": 106.8364579
    },
    "description": "Kuliner: indonesian"
  },
  {
    "id": "poi-ui-depok-n-10570205942",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3686412,
      "longitude": 106.8338098
    }
  },
  {
    "id": "poi-ui-depok-n-10570509610",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul 'Ilmi - Kampus E Universitas Gunadarma",
    "coordinates": {
      "latitude": -6.3539704,
      "longitude": 106.8405425
    }
  },
  {
    "id": "poi-ui-depok-n-10700668896",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "musholla al-barokah",
    "coordinates": {
      "latitude": -6.3698195,
      "longitude": 106.836582
    }
  },
  {
    "id": "poi-ui-depok-n-10740641168",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Bank Syariah Indonesia",
    "coordinates": {
      "latitude": -6.369774,
      "longitude": 106.8264618
    }
  },
  {
    "id": "poi-ui-depok-n-10740688710",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "BNI",
    "coordinates": {
      "latitude": -6.3655839,
      "longitude": 106.829411
    }
  },
  {
    "id": "poi-ui-depok-n-11080505688",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "ATM Bank BSI PNJ",
    "coordinates": {
      "latitude": -6.3713291,
      "longitude": 106.8244822
    }
  },
  {
    "id": "poi-ui-depok-n-11080505689",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "ATM Bank Mandiri PNJ",
    "coordinates": {
      "latitude": -6.3712934,
      "longitude": 106.8244794
    }
  },
  {
    "id": "poi-ui-depok-n-11688425924",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Saminten",
    "coordinates": {
      "latitude": -6.379459,
      "longitude": 106.8492309
    }
  },
  {
    "id": "poi-ui-depok-n-11688425926",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Seberang Gang Saminten",
    "coordinates": {
      "latitude": -6.3792046,
      "longitude": 106.8490384
    }
  },
  {
    "id": "poi-ui-depok-n-11688425930",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Seberang Pesona Square",
    "coordinates": {
      "latitude": -6.379614,
      "longitude": 106.844166
    }
  },
  {
    "id": "poi-ui-depok-n-11688425931",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pesona Square",
    "coordinates": {
      "latitude": -6.379612,
      "longitude": 106.8431333
    }
  },
  {
    "id": "poi-ui-depok-n-11688425933",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Moch Yusuf Raya 2",
    "coordinates": {
      "latitude": -6.3796915,
      "longitude": 106.8414414
    }
  },
  {
    "id": "poi-ui-depok-n-11688425934",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Moch Yusuf Raya 1",
    "coordinates": {
      "latitude": -6.3795751,
      "longitude": 106.84099
    }
  },
  {
    "id": "poi-ui-depok-n-11688425936",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "STIAMI 1",
    "coordinates": {
      "latitude": -6.3773808,
      "longitude": 106.8332857
    }
  },
  {
    "id": "poi-ui-depok-n-11688425938",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "STIAMI 2",
    "coordinates": {
      "latitude": -6.3773147,
      "longitude": 106.8326739
    }
  },
  {
    "id": "poi-ui-depok-n-11733087512",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Rumpun Ilmu Kesehatan",
    "coordinates": {
      "latitude": -6.3700605,
      "longitude": 106.8308629
    }
  },
  {
    "id": "poi-ui-depok-n-11733087513",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Rumpun Ilmu Kesehatan",
    "coordinates": {
      "latitude": -6.3701292,
      "longitude": 106.8310607
    }
  },
  {
    "id": "poi-ui-depok-n-11733087527",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Hukum",
    "coordinates": {
      "latitude": -6.3647912,
      "longitude": 106.8320505
    }
  },
  {
    "id": "poi-ui-depok-n-11733087530",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Stasiun KRL Universitas Indonesia",
    "coordinates": {
      "latitude": -6.3609966,
      "longitude": 106.8314946
    }
  },
  {
    "id": "poi-ui-depok-n-11733087534",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Resimen Mahasiswa",
    "coordinates": {
      "latitude": -6.3534679,
      "longitude": 106.8316609
    }
  },
  {
    "id": "poi-ui-depok-n-11733087536",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Resimen Mahasiswa",
    "coordinates": {
      "latitude": -6.3534666,
      "longitude": 106.8318164
    }
  },
  {
    "id": "poi-ui-depok-n-11733783105",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ilmu Keperawatan",
    "coordinates": {
      "latitude": -6.3709535,
      "longitude": 106.8271387
    }
  },
  {
    "id": "poi-ui-depok-n-11733783106",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ilmu Keperawatan",
    "coordinates": {
      "latitude": -6.3711028,
      "longitude": 106.8269643
    }
  },
  {
    "id": "poi-ui-depok-n-11733891622",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Ilmu Pengetahuan Budaya",
    "coordinates": {
      "latitude": -6.3611205,
      "longitude": 106.8297189
    }
  },
  {
    "id": "poi-ui-depok-n-11733891637",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Fakultas Teknik",
    "coordinates": {
      "latitude": -6.3610546,
      "longitude": 106.8231918
    }
  },
  {
    "id": "poi-ui-depok-n-11879062582",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "RS ALI SIBROH MALISI",
    "coordinates": {
      "latitude": -6.3448144,
      "longitude": 106.8138523
    }
  },
  {
    "id": "poi-ui-depok-n-11909092670",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla RIK",
    "coordinates": {
      "latitude": -6.3699922,
      "longitude": 106.8294924
    }
  },
  {
    "id": "poi-ui-depok-n-11921837462",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Datuk",
    "coordinates": {
      "latitude": -6.3416044,
      "longitude": 106.8193988
    }
  },
  {
    "id": "poi-ui-depok-n-11921837464",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Perikanan",
    "coordinates": {
      "latitude": -6.3448049,
      "longitude": 106.8160311
    }
  },
  {
    "id": "poi-ui-depok-n-11921837466",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Haji Mohammed Nalim",
    "coordinates": {
      "latitude": -6.348726,
      "longitude": 106.8132712
    }
  },
  {
    "id": "poi-ui-depok-n-11921837468",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Moch. Kahfi II",
    "coordinates": {
      "latitude": -6.3548703,
      "longitude": 106.8105416
    }
  },
  {
    "id": "poi-ui-depok-n-11921871870",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Seberang Jalan Cipedak Raya",
    "coordinates": {
      "latitude": -6.3573731,
      "longitude": 106.810281
    }
  },
  {
    "id": "poi-ui-depok-n-11921871872",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Haji Benih Srengseng Sawah",
    "coordinates": {
      "latitude": -6.3562816,
      "longitude": 106.8127087
    }
  },
  {
    "id": "poi-ui-depok-n-11921871874",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Haji Lele",
    "coordinates": {
      "latitude": -6.3523492,
      "longitude": 106.8158389
    }
  },
  {
    "id": "poi-ui-depok-n-11921871876",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "SMP PGRI 3 Jakarta",
    "coordinates": {
      "latitude": -6.3522734,
      "longitude": 106.8175596
    }
  },
  {
    "id": "poi-ui-depok-n-11921871878",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "TPU Srengseng Sawah",
    "coordinates": {
      "latitude": -6.3501588,
      "longitude": 106.8198064
    }
  },
  {
    "id": "poi-ui-depok-n-11921871880",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Masjid Baitul Ma'mur",
    "coordinates": {
      "latitude": -6.3457919,
      "longitude": 106.8209203
    }
  },
  {
    "id": "poi-ui-depok-n-11921871882",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Gang Damai Srengseng Sawah",
    "coordinates": {
      "latitude": -6.3462239,
      "longitude": 106.824856
    }
  },
  {
    "id": "poi-ui-depok-n-12145101615",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3441501,
      "longitude": 106.8016654
    }
  },
  {
    "id": "poi-ui-depok-n-12145101616",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamart",
    "coordinates": {
      "latitude": -6.3440936,
      "longitude": 106.8021641
    }
  },
  {
    "id": "poi-ui-depok-n-12662590203",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mushalla",
    "coordinates": {
      "latitude": -6.3773109,
      "longitude": 106.8072633
    }
  },
  {
    "id": "poi-ui-depok-n-12662611820",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mushalla",
    "coordinates": {
      "latitude": -6.3773108,
      "longitude": 106.8072662
    }
  },
  {
    "id": "poi-ui-depok-n-13530660059",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid AlKautsar",
    "coordinates": {
      "latitude": -6.3764291,
      "longitude": 106.8379852
    }
  },
  {
    "id": "poi-ui-depok-n-13626678796",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3460322,
      "longitude": 106.8027978
    }
  },
  {
    "id": "poi-ui-depok-n-13626678797",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "FamilyMart",
    "coordinates": {
      "latitude": -6.3461152,
      "longitude": 106.8027666
    }
  },
  {
    "id": "poi-ui-depok-n-13722542613",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Warung Abah",
    "coordinates": {
      "latitude": -6.3437342,
      "longitude": 106.8166279
    }
  },
  {
    "id": "poi-ui-depok-n-13722543320",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Burger Bangor",
    "coordinates": {
      "latitude": -6.3432623,
      "longitude": 106.8161753
    },
    "description": "Kuliner: burger;sandwich"
  },
  {
    "id": "poi-ui-depok-n-13724870991",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Kautsar",
    "coordinates": {
      "latitude": -6.3743909,
      "longitude": 106.8044894
    }
  },
  {
    "id": "poi-ui-depok-n-14031560611",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Lembar (daLEM gedung BARu)",
    "coordinates": {
      "latitude": -6.3702889,
      "longitude": 106.82781
    },
    "description": "Kuliner: regional"
  },
  {
    "id": "poi-ui-depok-n-14085302374",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warkop BUNDA",
    "coordinates": {
      "latitude": -6.3777807,
      "longitude": 106.8333559
    }
  },
  {
    "id": "poi-ui-depok-n-14136748263",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Jalan Palem",
    "coordinates": {
      "latitude": -6.3562581,
      "longitude": 106.8009811
    }
  },
  {
    "id": "poi-ui-depok-n-14276184064",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Twin House FISIP UI",
    "coordinates": {
      "latitude": -6.361545,
      "longitude": 106.8294746
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-n-14276184065",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Maxx Coffee",
    "coordinates": {
      "latitude": -6.3625706,
      "longitude": 106.8300705
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-n-14276184077",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Lawson",
    "coordinates": {
      "latitude": -6.3627459,
      "longitude": 106.8295506
    }
  },
  {
    "id": "poi-ui-depok-n-14276184078",
    "campusId": "ui-depok",
    "category": "food",
    "name": "J-Chicken FISIP UI",
    "coordinates": {
      "latitude": -6.3627459,
      "longitude": 106.8295246
    },
    "description": "Kuliner: chicken"
  },
  {
    "id": "poi-ui-depok-n-14276184079",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Janji Jiwa",
    "coordinates": {
      "latitude": -6.3627425,
      "longitude": 106.8294412
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-w-113543019",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Prima",
    "coordinates": {
      "latitude": -6.3665673,
      "longitude": 106.828161
    }
  },
  {
    "id": "poi-ui-depok-w-113545592",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Pool Bis Kuning",
    "coordinates": {
      "latitude": -6.3676104,
      "longitude": 106.8270507
    }
  },
  {
    "id": "poi-ui-depok-w-119276523",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Dermaga One",
    "coordinates": {
      "latitude": -6.369108,
      "longitude": 106.825738
    },
    "description": "Kuliner: seafood"
  },
  {
    "id": "poi-ui-depok-w-119429958",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Kerucut FIB UI",
    "coordinates": {
      "latitude": -6.3638926,
      "longitude": 106.8270844
    }
  },
  {
    "id": "poi-ui-depok-w-119452880",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al-Istiqomah",
    "coordinates": {
      "latitude": -6.3569416,
      "longitude": 106.8342982
    }
  },
  {
    "id": "poi-ui-depok-w-119455126",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3749925,
      "longitude": 106.8328571
    }
  },
  {
    "id": "poi-ui-depok-w-119724687",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Bank BCA",
    "coordinates": {
      "latitude": -6.3549416,
      "longitude": 106.839822
    }
  },
  {
    "id": "poi-ui-depok-w-119724688",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3547141,
      "longitude": 106.8395311
    }
  },
  {
    "id": "poi-ui-depok-w-119724889",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Mini Market",
    "coordinates": {
      "latitude": -6.3549078,
      "longitude": 106.8487963
    }
  },
  {
    "id": "poi-ui-depok-w-120002902",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Timah Al-Huda",
    "coordinates": {
      "latitude": -6.3625576,
      "longitude": 106.8487712
    }
  },
  {
    "id": "poi-ui-depok-w-120317722",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Gereja Gideon",
    "coordinates": {
      "latitude": -6.3547904,
      "longitude": 106.8481603
    }
  },
  {
    "id": "poi-ui-depok-w-120628578",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Bank BNI 46",
    "coordinates": {
      "latitude": -6.3549133,
      "longitude": 106.8486071
    }
  },
  {
    "id": "poi-ui-depok-w-120629571",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al-Kohinoor",
    "coordinates": {
      "latitude": -6.3591056,
      "longitude": 106.8340607
    }
  },
  {
    "id": "poi-ui-depok-w-120629574",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al Ikhsan",
    "coordinates": {
      "latitude": -6.3504486,
      "longitude": 106.8336917
    }
  },
  {
    "id": "poi-ui-depok-w-120629594",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3788934,
      "longitude": 106.8326339
    }
  },
  {
    "id": "poi-ui-depok-w-120787798",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin FEB UI",
    "coordinates": {
      "latitude": -6.3616363,
      "longitude": 106.8266051
    }
  },
  {
    "id": "poi-ui-depok-w-151282508",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin FT UI",
    "coordinates": {
      "latitude": -6.3631954,
      "longitude": 106.824575
    }
  },
  {
    "id": "poi-ui-depok-w-151282633",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Gedung E F.Psi / Kantin Lama",
    "coordinates": {
      "latitude": -6.3631711,
      "longitude": 106.830313
    }
  },
  {
    "id": "poi-ui-depok-w-151290511",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin NL-Balsem FISIP UI",
    "coordinates": {
      "latitude": -6.3631657,
      "longitude": 106.8298187
    },
    "description": "Kuliner: daerahregional"
  },
  {
    "id": "poi-ui-depok-w-151290534",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin F. Psi",
    "coordinates": {
      "latitude": -6.363533,
      "longitude": 106.8301017
    }
  },
  {
    "id": "poi-ui-depok-w-151294669",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3779681,
      "longitude": 106.8260854
    }
  },
  {
    "id": "poi-ui-depok-w-152054499",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Falah",
    "coordinates": {
      "latitude": -6.3523024,
      "longitude": 106.8244387
    }
  },
  {
    "id": "poi-ui-depok-w-157360703",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Ayubalwasal",
    "coordinates": {
      "latitude": -6.3486422,
      "longitude": 106.8086007
    }
  },
  {
    "id": "poi-ui-depok-w-157360705",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Darusallam",
    "coordinates": {
      "latitude": -6.3464528,
      "longitude": 106.810087
    }
  },
  {
    "id": "poi-ui-depok-w-157361161",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid An Nur",
    "coordinates": {
      "latitude": -6.3462002,
      "longitude": 106.8152693
    }
  },
  {
    "id": "poi-ui-depok-w-157361177",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami' Nurul Yaqin",
    "coordinates": {
      "latitude": -6.3462227,
      "longitude": 106.8325428
    }
  },
  {
    "id": "poi-ui-depok-w-157361773",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Barkah",
    "coordinates": {
      "latitude": -6.348552,
      "longitude": 106.8015634
    }
  },
  {
    "id": "poi-ui-depok-w-157361774",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Inayah",
    "coordinates": {
      "latitude": -6.3622107,
      "longitude": 106.8020854
    }
  },
  {
    "id": "poi-ui-depok-w-157362203",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3643505,
      "longitude": 106.8202567
    }
  },
  {
    "id": "poi-ui-depok-w-157362224",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Gereja Kristen Oikoumene Indonesia",
    "coordinates": {
      "latitude": -6.3406044,
      "longitude": 106.8351114
    }
  },
  {
    "id": "poi-ui-depok-w-157362230",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Ikhlas",
    "coordinates": {
      "latitude": -6.3415433,
      "longitude": 106.835274
    }
  },
  {
    "id": "poi-ui-depok-w-157362237",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Fathon",
    "coordinates": {
      "latitude": -6.3415709,
      "longitude": 106.840233
    }
  },
  {
    "id": "poi-ui-depok-w-157362878",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Baitur Makmur",
    "coordinates": {
      "latitude": -6.3460466,
      "longitude": 106.8205976
    }
  },
  {
    "id": "poi-ui-depok-w-157362880",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Hidayah",
    "coordinates": {
      "latitude": -6.3434628,
      "longitude": 106.8309714
    }
  },
  {
    "id": "poi-ui-depok-w-157365930",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Nurul Ihsan",
    "coordinates": {
      "latitude": -6.3539854,
      "longitude": 106.8085238
    }
  },
  {
    "id": "poi-ui-depok-w-157365931",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Iman",
    "coordinates": {
      "latitude": -6.3512481,
      "longitude": 106.8100328
    }
  },
  {
    "id": "poi-ui-depok-w-157366840",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al-Barkah",
    "coordinates": {
      "latitude": -6.3437387,
      "longitude": 106.8130243
    }
  },
  {
    "id": "poi-ui-depok-w-157366841",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al-Hikmah",
    "coordinates": {
      "latitude": -6.3401049,
      "longitude": 106.8202914
    }
  },
  {
    "id": "poi-ui-depok-w-157366842",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Mubarakah",
    "coordinates": {
      "latitude": -6.3404554,
      "longitude": 106.8107439
    }
  },
  {
    "id": "poi-ui-depok-w-157366849",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Puskesmas Ciganjur",
    "coordinates": {
      "latitude": -6.3400087,
      "longitude": 106.8071247
    }
  },
  {
    "id": "poi-ui-depok-w-157976900",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3536,
      "longitude": 106.848388
    }
  },
  {
    "id": "poi-ui-depok-w-159966310",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Muawanah",
    "coordinates": {
      "latitude": -6.3473574,
      "longitude": 106.8050531
    }
  },
  {
    "id": "poi-ui-depok-w-173068662",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Old House Coffee Shop",
    "coordinates": {
      "latitude": -6.372352,
      "longitude": 106.8343438
    }
  },
  {
    "id": "poi-ui-depok-w-173068663",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Sop Iga Betawi",
    "coordinates": {
      "latitude": -6.3712263,
      "longitude": 106.8323766
    },
    "description": "Kuliner: regional"
  },
  {
    "id": "poi-ui-depok-w-173253569",
    "campusId": "ui-depok",
    "category": "food",
    "name": "KFC",
    "coordinates": {
      "latitude": -6.374586,
      "longitude": 106.8328106
    },
    "description": "Kuliner: chicken"
  },
  {
    "id": "poi-ui-depok-w-173253571",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Gunadarma",
    "coordinates": {
      "latitude": -6.3681951,
      "longitude": 106.8326468
    }
  },
  {
    "id": "poi-ui-depok-w-173952001",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Hidayah",
    "coordinates": {
      "latitude": -6.3683394,
      "longitude": 106.8382182
    }
  },
  {
    "id": "poi-ui-depok-w-173952018",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Miftahul Jannah",
    "coordinates": {
      "latitude": -6.3661177,
      "longitude": 106.8363953
    }
  },
  {
    "id": "poi-ui-depok-w-195927747",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla Al-Hikmah FISIP UI",
    "coordinates": {
      "latitude": -6.3626038,
      "longitude": 106.8291945
    }
  },
  {
    "id": "poi-ui-depok-w-195939156",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mushola FIB",
    "coordinates": {
      "latitude": -6.3633851,
      "longitude": 106.8266884
    }
  },
  {
    "id": "poi-ui-depok-w-195939159",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pusat Studi Jepang",
    "coordinates": {
      "latitude": -6.3617149,
      "longitude": 106.8280666
    },
    "description": "Kuliner: japanese"
  },
  {
    "id": "poi-ui-depok-w-195968996",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mushola FEB",
    "coordinates": {
      "latitude": -6.3608854,
      "longitude": 106.8267101
    }
  },
  {
    "id": "poi-ui-depok-w-211034648",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Baitul Barkah",
    "coordinates": {
      "latitude": -6.376589,
      "longitude": 106.8170791
    }
  },
  {
    "id": "poi-ui-depok-w-211161138",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Bank BRI Beji",
    "coordinates": {
      "latitude": -6.3752973,
      "longitude": 106.8137651
    }
  },
  {
    "id": "poi-ui-depok-w-211349863",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Baytul Kariim",
    "coordinates": {
      "latitude": -6.3790633,
      "longitude": 106.8155856
    }
  },
  {
    "id": "poi-ui-depok-w-240005867",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Baitussalam",
    "coordinates": {
      "latitude": -6.375359,
      "longitude": 106.8168047
    }
  },
  {
    "id": "poi-ui-depok-w-270354721",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mesjid",
    "coordinates": {
      "latitude": -6.3634153,
      "longitude": 106.8154634
    }
  },
  {
    "id": "poi-ui-depok-w-270356070",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3636258,
      "longitude": 106.815737
    }
  },
  {
    "id": "poi-ui-depok-w-284785726",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Mie Ayam Berkat",
    "coordinates": {
      "latitude": -6.360859,
      "longitude": 106.8335997
    }
  },
  {
    "id": "poi-ui-depok-w-284785732",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Nasi Pecel Mbak Ira",
    "coordinates": {
      "latitude": -6.360773,
      "longitude": 106.833116
    },
    "description": "Kuliner: indonesian;chicken"
  },
  {
    "id": "poi-ui-depok-w-284785764",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Milan Cafe",
    "coordinates": {
      "latitude": -6.3594132,
      "longitude": 106.8332163
    }
  },
  {
    "id": "poi-ui-depok-w-284785794",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ayam Penyet WSG",
    "coordinates": {
      "latitude": -6.3592911,
      "longitude": 106.8323124
    }
  },
  {
    "id": "poi-ui-depok-w-284785844",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Martabak Pizza Orins Margonda",
    "coordinates": {
      "latitude": -6.3591261,
      "longitude": 106.8330975
    }
  },
  {
    "id": "poi-ui-depok-w-284787020",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Starbucks - Margonda Raya",
    "coordinates": {
      "latitude": -6.3638477,
      "longitude": 106.8332772
    }
  },
  {
    "id": "poi-ui-depok-w-284787021",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al-Khairatul Islam",
    "coordinates": {
      "latitude": -6.363121,
      "longitude": 106.8348921
    }
  },
  {
    "id": "poi-ui-depok-w-284787038",
    "campusId": "ui-depok",
    "category": "food",
    "name": "MUG Cafee",
    "coordinates": {
      "latitude": -6.3620244,
      "longitude": 106.8338242
    }
  },
  {
    "id": "poi-ui-depok-w-284787043",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warteg Bahari Margonda",
    "coordinates": {
      "latitude": -6.3631811,
      "longitude": 106.8338477
    }
  },
  {
    "id": "poi-ui-depok-w-291853422",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Roti Bakar Edy",
    "coordinates": {
      "latitude": -6.371307,
      "longitude": 106.8329825
    }
  },
  {
    "id": "poi-ui-depok-w-291853427",
    "campusId": "ui-depok",
    "category": "food",
    "name": "lawson",
    "coordinates": {
      "latitude": -6.374999,
      "longitude": 106.8326283
    }
  },
  {
    "id": "poi-ui-depok-w-291853454",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Pertamina",
    "coordinates": {
      "latitude": -6.3741391,
      "longitude": 106.8329015
    }
  },
  {
    "id": "poi-ui-depok-w-291853461",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "BNI",
    "coordinates": {
      "latitude": -6.3742339,
      "longitude": 106.8326148
    }
  },
  {
    "id": "poi-ui-depok-w-291854924",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Sop Duren Lodaya",
    "coordinates": {
      "latitude": -6.3774228,
      "longitude": 106.8320312
    }
  },
  {
    "id": "poi-ui-depok-w-293134291",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Ar-Rahman",
    "coordinates": {
      "latitude": -6.3753512,
      "longitude": 106.8065329
    }
  },
  {
    "id": "poi-ui-depok-w-294118778",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3760063,
      "longitude": 106.8274824
    }
  },
  {
    "id": "poi-ui-depok-w-300523353",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Esteh Indonesia - Pondok Cina",
    "coordinates": {
      "latitude": -6.3700595,
      "longitude": 106.8333583
    }
  },
  {
    "id": "poi-ui-depok-w-300601937",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3679361,
      "longitude": 106.8196837
    }
  },
  {
    "id": "poi-ui-depok-w-300601940",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warteg",
    "coordinates": {
      "latitude": -6.3685778,
      "longitude": 106.8199709
    },
    "description": "Kuliner: asian"
  },
  {
    "id": "poi-ui-depok-w-300652644",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3792175,
      "longitude": 106.835727
    }
  },
  {
    "id": "poi-ui-depok-w-300664718",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3599254,
      "longitude": 106.8319191
    }
  },
  {
    "id": "poi-ui-depok-w-300674707",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3602012,
      "longitude": 106.8352379
    }
  },
  {
    "id": "poi-ui-depok-w-300674718",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Kinasih",
    "coordinates": {
      "latitude": -6.3641742,
      "longitude": 106.8359739
    }
  },
  {
    "id": "poi-ui-depok-w-300725248",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Mardhotillah",
    "coordinates": {
      "latitude": -6.3541564,
      "longitude": 106.8335789
    }
  },
  {
    "id": "poi-ui-depok-w-300725319",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Mushollah Nurul Iman",
    "coordinates": {
      "latitude": -6.3545718,
      "longitude": 106.8350135
    }
  },
  {
    "id": "poi-ui-depok-w-300731118",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Happy Juice Stasiun Pondok Cina",
    "coordinates": {
      "latitude": -6.3697461,
      "longitude": 106.8334727
    }
  },
  {
    "id": "poi-ui-depok-w-300734979",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Rumah Sakit Sofa Marwa",
    "coordinates": {
      "latitude": -6.3555381,
      "longitude": 106.8199834
    }
  },
  {
    "id": "poi-ui-depok-w-300737154",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Rumah Kabeda",
    "coordinates": {
      "latitude": -6.3586465,
      "longitude": 106.8154095
    }
  },
  {
    "id": "poi-ui-depok-w-300742555",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3552455,
      "longitude": 106.842742
    }
  },
  {
    "id": "poi-ui-depok-w-300742586",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Tsuka Ramen",
    "coordinates": {
      "latitude": -6.3550944,
      "longitude": 106.8426142
    },
    "description": "Kuliner: japanese;asian;noodle;ramen"
  },
  {
    "id": "poi-ui-depok-w-301066207",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3678509,
      "longitude": 106.8086406
    }
  },
  {
    "id": "poi-ui-depok-w-301068070",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Bubur Ayam Barito",
    "coordinates": {
      "latitude": -6.3647347,
      "longitude": 106.8335208
    }
  },
  {
    "id": "poi-ui-depok-w-301068112",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Bamboo Din Sum",
    "coordinates": {
      "latitude": -6.3674546,
      "longitude": 106.8338478
    }
  },
  {
    "id": "poi-ui-depok-w-301068130",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Shell Shop",
    "coordinates": {
      "latitude": -6.3648692,
      "longitude": 106.8334875
    }
  },
  {
    "id": "poi-ui-depok-w-301073645",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Hidayah",
    "coordinates": {
      "latitude": -6.3722562,
      "longitude": 106.8004617
    }
  },
  {
    "id": "poi-ui-depok-w-304553332",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Makan Restu Ibu",
    "coordinates": {
      "latitude": -6.3682717,
      "longitude": 106.8349058
    }
  },
  {
    "id": "poi-ui-depok-w-305259330",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Ibu Sugeng",
    "coordinates": {
      "latitude": -6.3707184,
      "longitude": 106.8288139
    },
    "description": "Kuliner: regional"
  },
  {
    "id": "poi-ui-depok-w-305883697",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Puskesmas Beji",
    "coordinates": {
      "latitude": -6.3761827,
      "longitude": 106.8216431
    }
  },
  {
    "id": "poi-ui-depok-w-306992495",
    "campusId": "ui-depok",
    "category": "food",
    "name": "New Kantin FKM",
    "coordinates": {
      "latitude": -6.3709003,
      "longitude": 106.8295231
    }
  },
  {
    "id": "poi-ui-depok-w-307996035",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Bilal ISTN",
    "coordinates": {
      "latitude": -6.354085,
      "longitude": 106.8139275
    }
  },
  {
    "id": "poi-ui-depok-w-308192336",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warteg Fajar",
    "coordinates": {
      "latitude": -6.3578634,
      "longitude": 106.8227826
    }
  },
  {
    "id": "poi-ui-depok-w-308201147",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla Baqiyatussholihah",
    "coordinates": {
      "latitude": -6.3616672,
      "longitude": 106.8218208
    }
  },
  {
    "id": "poi-ui-depok-w-308392084",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al Hidayah",
    "coordinates": {
      "latitude": -6.3790809,
      "longitude": 106.8280964
    }
  },
  {
    "id": "poi-ui-depok-w-308393341",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Mini Market",
    "coordinates": {
      "latitude": -6.3753806,
      "longitude": 106.8246315
    }
  },
  {
    "id": "poi-ui-depok-w-308404637",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al Maghfiroh",
    "coordinates": {
      "latitude": -6.3638895,
      "longitude": 106.8035795
    }
  },
  {
    "id": "poi-ui-depok-w-308408754",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Bank Jatim",
    "coordinates": {
      "latitude": -6.3659481,
      "longitude": 106.833707
    }
  },
  {
    "id": "poi-ui-depok-w-308408844",
    "campusId": "ui-depok",
    "category": "food",
    "name": "What's Up Cafe",
    "coordinates": {
      "latitude": -6.3661586,
      "longitude": 106.8337937
    }
  },
  {
    "id": "poi-ui-depok-w-308408848",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ayam Bakar Christina",
    "coordinates": {
      "latitude": -6.3674817,
      "longitude": 106.834281
    }
  },
  {
    "id": "poi-ui-depok-w-308408902",
    "campusId": "ui-depok",
    "category": "food",
    "name": "What's Up Cafe",
    "coordinates": {
      "latitude": -6.3660961,
      "longitude": 106.833769
    }
  },
  {
    "id": "poi-ui-depok-w-308411241",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Soerabi Bandung Enhai",
    "coordinates": {
      "latitude": -6.3645158,
      "longitude": 106.8336439
    }
  },
  {
    "id": "poi-ui-depok-w-308489825",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kedai Kopi Kimung",
    "coordinates": {
      "latitude": -6.3668454,
      "longitude": 106.8338141
    }
  },
  {
    "id": "poi-ui-depok-w-309249720",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Mile 32",
    "coordinates": {
      "latitude": -6.3546643,
      "longitude": 106.8412658
    }
  },
  {
    "id": "poi-ui-depok-w-309441782",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kopi Kenangan",
    "coordinates": {
      "latitude": -6.3550589,
      "longitude": 106.8419275
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-w-309441787",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "alfa x",
    "coordinates": {
      "latitude": -6.3550841,
      "longitude": 106.8417001
    }
  },
  {
    "id": "poi-ui-depok-w-309445612",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warung Goceng",
    "coordinates": {
      "latitude": -6.3602183,
      "longitude": 106.8415644
    },
    "description": "Kuliner: burger;chicken;asian;indonesian;pasta;hot_dog;juice"
  },
  {
    "id": "poi-ui-depok-w-309445787",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Suyamto",
    "coordinates": {
      "latitude": -6.3605946,
      "longitude": 106.8398024
    }
  },
  {
    "id": "poi-ui-depok-w-310001917",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami' Al Bayyinah",
    "coordinates": {
      "latitude": -6.3765874,
      "longitude": 106.8027347
    }
  },
  {
    "id": "poi-ui-depok-w-357291861",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Vokasi UI",
    "coordinates": {
      "latitude": -6.3688277,
      "longitude": 106.8218007
    },
    "description": "Kuliner: burger;pizza"
  },
  {
    "id": "poi-ui-depok-w-436494529",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret",
    "coordinates": {
      "latitude": -6.3689281,
      "longitude": 106.825736
    }
  },
  {
    "id": "poi-ui-depok-w-477979105",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamidi",
    "coordinates": {
      "latitude": -6.3556889,
      "longitude": 106.8426771
    }
  },
  {
    "id": "poi-ui-depok-w-477979182",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Golden Lamian",
    "coordinates": {
      "latitude": -6.3547489,
      "longitude": 106.842557
    },
    "description": "Kuliner: ramen;noodle;chinese"
  },
  {
    "id": "poi-ui-depok-w-478011822",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Richeese Factory",
    "coordinates": {
      "latitude": -6.3546442,
      "longitude": 106.8439258
    },
    "description": "Kuliner: chicken"
  },
  {
    "id": "poi-ui-depok-w-478746663",
    "campusId": "ui-depok",
    "category": "food",
    "name": "bakalkopi",
    "coordinates": {
      "latitude": -6.3618347,
      "longitude": 106.8425484
    }
  },
  {
    "id": "poi-ui-depok-w-478761564",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Fikri",
    "coordinates": {
      "latitude": -6.3622359,
      "longitude": 106.844144
    }
  },
  {
    "id": "poi-ui-depok-w-478761583",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamidi",
    "coordinates": {
      "latitude": -6.3617766,
      "longitude": 106.8431738
    }
  },
  {
    "id": "poi-ui-depok-w-478763557",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3651058,
      "longitude": 106.8429504
    }
  },
  {
    "id": "poi-ui-depok-w-478763773",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Nurul Huda",
    "coordinates": {
      "latitude": -6.368374,
      "longitude": 106.842377
    }
  },
  {
    "id": "poi-ui-depok-w-479404420",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Sadel Street Coffee",
    "coordinates": {
      "latitude": -6.3602562,
      "longitude": 106.8432309
    }
  },
  {
    "id": "poi-ui-depok-w-484154875",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla Al Falah",
    "coordinates": {
      "latitude": -6.3429444,
      "longitude": 106.8023973
    }
  },
  {
    "id": "poi-ui-depok-w-486070610",
    "campusId": "ui-depok",
    "category": "food",
    "name": "bakmi buncit",
    "coordinates": {
      "latitude": -6.3732063,
      "longitude": 106.8325469
    },
    "description": "Kuliner: chinesse_food"
  },
  {
    "id": "poi-ui-depok-w-486500344",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Martabak Bintang",
    "coordinates": {
      "latitude": -6.3595764,
      "longitude": 106.8332377
    }
  },
  {
    "id": "poi-ui-depok-w-496587035",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Nurul Muhklis",
    "coordinates": {
      "latitude": -6.3483196,
      "longitude": 106.8206177
    }
  },
  {
    "id": "poi-ui-depok-w-496587143",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Baroqah",
    "coordinates": {
      "latitude": -6.3491773,
      "longitude": 106.8244585
    }
  },
  {
    "id": "poi-ui-depok-w-497071015",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Klinik Pratama Desa Putera",
    "coordinates": {
      "latitude": -6.3402871,
      "longitude": 106.8275472
    }
  },
  {
    "id": "poi-ui-depok-w-497548472",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Delima I",
    "coordinates": {
      "latitude": -6.3414449,
      "longitude": 106.835134
    }
  },
  {
    "id": "poi-ui-depok-w-497548992",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Gereja Pouk",
    "coordinates": {
      "latitude": -6.340239,
      "longitude": 106.8313827
    }
  },
  {
    "id": "poi-ui-depok-w-497549001",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Pura Agung Widhya Mandala",
    "coordinates": {
      "latitude": -6.3403832,
      "longitude": 106.8312829
    }
  },
  {
    "id": "poi-ui-depok-w-497549064",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid At Taqwa",
    "coordinates": {
      "latitude": -6.3422182,
      "longitude": 106.833005
    }
  },
  {
    "id": "poi-ui-depok-w-497549065",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "BNI",
    "coordinates": {
      "latitude": -6.3415741,
      "longitude": 106.8331087
    }
  },
  {
    "id": "poi-ui-depok-w-498793319",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Iman",
    "coordinates": {
      "latitude": -6.3444347,
      "longitude": 106.8282138
    }
  },
  {
    "id": "poi-ui-depok-w-499800562",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3451606,
      "longitude": 106.8353317
    }
  },
  {
    "id": "poi-ui-depok-w-499800563",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Jannah",
    "coordinates": {
      "latitude": -6.3464504,
      "longitude": 106.8349715
    }
  },
  {
    "id": "poi-ui-depok-w-499800568",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid At Taqwa",
    "coordinates": {
      "latitude": -6.3567494,
      "longitude": 106.8097522
    }
  },
  {
    "id": "poi-ui-depok-w-499800570",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al Huda",
    "coordinates": {
      "latitude": -6.3524253,
      "longitude": 106.8196601
    }
  },
  {
    "id": "poi-ui-depok-w-499800588",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Irfan",
    "coordinates": {
      "latitude": -6.3504431,
      "longitude": 106.814225
    }
  },
  {
    "id": "poi-ui-depok-w-499800650",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Huria Kristen Batak Protestan",
    "coordinates": {
      "latitude": -6.3441128,
      "longitude": 106.83195
    }
  },
  {
    "id": "poi-ui-depok-w-499800677",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Nurul Iman",
    "coordinates": {
      "latitude": -6.3435997,
      "longitude": 106.8247983
    }
  },
  {
    "id": "poi-ui-depok-w-499800732",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Puskesmas Kecamatan Jagakarsa",
    "coordinates": {
      "latitude": -6.3520263,
      "longitude": 106.8141337
    }
  },
  {
    "id": "poi-ui-depok-w-499800769",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Mu'Aawanah",
    "coordinates": {
      "latitude": -6.3555959,
      "longitude": 106.8180687
    }
  },
  {
    "id": "poi-ui-depok-w-500210500",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3415613,
      "longitude": 106.8430858
    }
  },
  {
    "id": "poi-ui-depok-w-500465944",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3438064,
      "longitude": 106.8441567
    }
  },
  {
    "id": "poi-ui-depok-w-501421820",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3471851,
      "longitude": 106.8466987
    }
  },
  {
    "id": "poi-ui-depok-w-502248119",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Raudhatul Jannah",
    "coordinates": {
      "latitude": -6.3436382,
      "longitude": 106.8201202
    }
  },
  {
    "id": "poi-ui-depok-w-502390990",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Puskesmas Lenteng Agung II",
    "coordinates": {
      "latitude": -6.3406921,
      "longitude": 106.8376223
    }
  },
  {
    "id": "poi-ui-depok-w-504492047",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Warteg Ibu Lina",
    "coordinates": {
      "latitude": -6.360631,
      "longitude": 106.8431971
    },
    "description": "Kuliner: indonesian"
  },
  {
    "id": "poi-ui-depok-w-504492050",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Prima Freshmart",
    "coordinates": {
      "latitude": -6.3611637,
      "longitude": 106.8431701
    }
  },
  {
    "id": "poi-ui-depok-w-504715410",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Cempedak",
    "coordinates": {
      "latitude": -6.3609555,
      "longitude": 106.806788
    }
  },
  {
    "id": "poi-ui-depok-w-504715480",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Daarul Rahman",
    "coordinates": {
      "latitude": -6.3589032,
      "longitude": 106.8056974
    }
  },
  {
    "id": "poi-ui-depok-w-506895844",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Barkah",
    "coordinates": {
      "latitude": -6.3425657,
      "longitude": 106.8135368
    }
  },
  {
    "id": "poi-ui-depok-w-506895845",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "RS Ibu dan Anak Andhika",
    "coordinates": {
      "latitude": -6.3442499,
      "longitude": 106.8143056
    }
  },
  {
    "id": "poi-ui-depok-w-506895999",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Nangka RW 05",
    "coordinates": {
      "latitude": -6.3402283,
      "longitude": 106.8066372
    }
  },
  {
    "id": "poi-ui-depok-w-506896037",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Apel",
    "coordinates": {
      "latitude": -6.3435937,
      "longitude": 106.8047833
    }
  },
  {
    "id": "poi-ui-depok-w-506896139",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al Munawaroh",
    "coordinates": {
      "latitude": -6.3447766,
      "longitude": 106.8099827
    }
  },
  {
    "id": "poi-ui-depok-w-506896171",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Daarul Iman",
    "coordinates": {
      "latitude": -6.3422399,
      "longitude": 106.8046786
    }
  },
  {
    "id": "poi-ui-depok-w-509796688",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Nurul Hidayah",
    "coordinates": {
      "latitude": -6.3593246,
      "longitude": 106.8028238
    }
  },
  {
    "id": "poi-ui-depok-w-510078829",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Klinik Nurunnisa",
    "coordinates": {
      "latitude": -6.3607763,
      "longitude": 106.8354655
    }
  },
  {
    "id": "poi-ui-depok-w-510145228",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Klinik Satelit UI",
    "coordinates": {
      "latitude": -6.3611233,
      "longitude": 106.8226055
    }
  },
  {
    "id": "poi-ui-depok-w-510603822",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Gubuk Mang Engking",
    "coordinates": {
      "latitude": -6.3493971,
      "longitude": 106.8313124
    }
  },
  {
    "id": "poi-ui-depok-w-511013803",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Belimbing",
    "coordinates": {
      "latitude": -6.3529946,
      "longitude": 106.8017741
    }
  },
  {
    "id": "poi-ui-depok-w-511013855",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Puskesman Keliling",
    "coordinates": {
      "latitude": -6.3505514,
      "longitude": 106.810434
    }
  },
  {
    "id": "poi-ui-depok-w-511013859",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pasar Timbul Ciganjur",
    "coordinates": {
      "latitude": -6.3500468,
      "longitude": 106.8014458
    }
  },
  {
    "id": "poi-ui-depok-w-511013864",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Muhajirin",
    "coordinates": {
      "latitude": -6.3550332,
      "longitude": 106.8036312
    }
  },
  {
    "id": "poi-ui-depok-w-511013871",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Asy Syakirin",
    "coordinates": {
      "latitude": -6.3510536,
      "longitude": 106.801407
    }
  },
  {
    "id": "poi-ui-depok-w-511013873",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Strawberi",
    "coordinates": {
      "latitude": -6.354394,
      "longitude": 106.8003966
    }
  },
  {
    "id": "poi-ui-depok-w-511013874",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid At Taubah",
    "coordinates": {
      "latitude": -6.3526832,
      "longitude": 106.8050578
    }
  },
  {
    "id": "poi-ui-depok-w-511013886",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Abu Hurairah",
    "coordinates": {
      "latitude": -6.3486688,
      "longitude": 106.8124187
    }
  },
  {
    "id": "poi-ui-depok-w-511013887",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Ikhlas",
    "coordinates": {
      "latitude": -6.35304,
      "longitude": 106.7999734
    }
  },
  {
    "id": "poi-ui-depok-w-511013888",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Tontowi Syafei",
    "coordinates": {
      "latitude": -6.349607,
      "longitude": 106.8097065
    }
  },
  {
    "id": "poi-ui-depok-w-511013898",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Alkesa",
    "coordinates": {
      "latitude": -6.3536267,
      "longitude": 106.8074372
    }
  },
  {
    "id": "poi-ui-depok-w-511013937",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Ruhul Jihad",
    "coordinates": {
      "latitude": -6.3441614,
      "longitude": 106.8125123
    }
  },
  {
    "id": "poi-ui-depok-w-511014018",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Mahallul Ghufron",
    "coordinates": {
      "latitude": -6.3452149,
      "longitude": 106.8080852
    }
  },
  {
    "id": "poi-ui-depok-w-511014019",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Istiqomah",
    "coordinates": {
      "latitude": -6.3581389,
      "longitude": 106.8077058
    }
  },
  {
    "id": "poi-ui-depok-w-511014020",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "RS Ali Sibroh Malisi",
    "coordinates": {
      "latitude": -6.344684,
      "longitude": 106.8139234
    }
  },
  {
    "id": "poi-ui-depok-w-511604934",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Al Makmur",
    "coordinates": {
      "latitude": -6.3454879,
      "longitude": 106.803233
    }
  },
  {
    "id": "poi-ui-depok-w-513522065",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Posyandu Melon I",
    "coordinates": {
      "latitude": -6.3415438,
      "longitude": 106.8363274
    }
  },
  {
    "id": "poi-ui-depok-w-523566271",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Sego Tempong Negoro",
    "coordinates": {
      "latitude": -6.3567863,
      "longitude": 106.8010972
    }
  },
  {
    "id": "poi-ui-depok-w-523566272",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret M. Kahfi 1 No.69",
    "coordinates": {
      "latitude": -6.3569059,
      "longitude": 106.8010867
    }
  },
  {
    "id": "poi-ui-depok-w-523566304",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Jami Arriyadut Taqwa",
    "coordinates": {
      "latitude": -6.3563846,
      "longitude": 106.8008219
    }
  },
  {
    "id": "poi-ui-depok-w-556390167",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Fitrah",
    "coordinates": {
      "latitude": -6.3743667,
      "longitude": 106.8500392
    }
  },
  {
    "id": "poi-ui-depok-w-641586613",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al Mujahidin",
    "coordinates": {
      "latitude": -6.3660406,
      "longitude": 106.8151822
    }
  },
  {
    "id": "poi-ui-depok-w-782913320",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "RS Ibu Dan Anak Citra Arafiq",
    "coordinates": {
      "latitude": -6.3728844,
      "longitude": 106.8438704
    }
  },
  {
    "id": "poi-ui-depok-w-783790968",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Rumah Sakit Bhayangkara Brimob",
    "coordinates": {
      "latitude": -6.3548344,
      "longitude": 106.8494046
    }
  },
  {
    "id": "poi-ui-depok-w-783804650",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "RS Ibu dan Anak Graha Permata Ibu",
    "coordinates": {
      "latitude": -6.3707489,
      "longitude": 106.814136
    }
  },
  {
    "id": "poi-ui-depok-w-784970696",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "RSU Bunda Margonda",
    "coordinates": {
      "latitude": -6.3653418,
      "longitude": 106.8347555
    }
  },
  {
    "id": "poi-ui-depok-w-816679674",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Darul Ilmi",
    "coordinates": {
      "latitude": -6.3717778,
      "longitude": 106.8229707
    }
  },
  {
    "id": "poi-ui-depok-w-852620312",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla Fakultas Hukum UI",
    "coordinates": {
      "latitude": -6.3640768,
      "longitude": 106.830887
    }
  },
  {
    "id": "poi-ui-depok-w-942613560",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3762634,
      "longitude": 106.8353757
    }
  },
  {
    "id": "poi-ui-depok-w-945014844",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Indomaret Pondok Duta",
    "coordinates": {
      "latitude": -6.3696897,
      "longitude": 106.8495362
    }
  },
  {
    "id": "poi-ui-depok-w-992614049",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Alfamidi",
    "coordinates": {
      "latitude": -6.3460722,
      "longitude": 106.8032807
    }
  },
  {
    "id": "poi-ui-depok-w-1090444046",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla Izzatul Islam",
    "coordinates": {
      "latitude": -6.3696834,
      "longitude": 106.8276194
    }
  },
  {
    "id": "poi-ui-depok-w-1150340889",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -6.3702984,
      "longitude": 106.8328989
    }
  },
  {
    "id": "poi-ui-depok-w-1163670876",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kopi Kenangan",
    "coordinates": {
      "latitude": -6.3741239,
      "longitude": 106.8330769
    },
    "description": "Kuliner: coffee_shop"
  },
  {
    "id": "poi-ui-depok-w-1163670877",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Bright Food and Drink",
    "coordinates": {
      "latitude": -6.3742514,
      "longitude": 106.833067
    }
  },
  {
    "id": "poi-ui-depok-w-1193715302",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Spirit",
    "coordinates": {
      "latitude": -6.3720387,
      "longitude": 106.8242142
    }
  },
  {
    "id": "poi-ui-depok-w-1228200873",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kedai Poncol",
    "coordinates": {
      "latitude": -6.3603687,
      "longitude": 106.8416213
    }
  },
  {
    "id": "poi-ui-depok-w-1242005032",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Rumah Sakit Universitas Indonesia",
    "coordinates": {
      "latitude": -6.3730742,
      "longitude": 106.8297733
    }
  },
  {
    "id": "poi-ui-depok-w-1327455238",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid Al-Farouq",
    "coordinates": {
      "latitude": -6.3587607,
      "longitude": 106.822522
    }
  },
  {
    "id": "poi-ui-depok-w-1456015716",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "PNJ Mart",
    "coordinates": {
      "latitude": -6.3701992,
      "longitude": 106.8238095
    }
  },
  {
    "id": "poi-ui-depok-w-1456015717",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "PNJ Mart",
    "coordinates": {
      "latitude": -6.3719775,
      "longitude": 106.8240834
    }
  },
  {
    "id": "poi-ui-depok-w-1456027473",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Kantin PUT",
    "coordinates": {
      "latitude": -6.3731465,
      "longitude": 106.8261121
    }
  },
  {
    "id": "poi-ui-depok-w-1456027478",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musholla Sipil",
    "coordinates": {
      "latitude": -6.3728265,
      "longitude": 106.8257312
    }
  },
  {
    "id": "poi-ui-depok-w-1456220197",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kantin Bawah",
    "coordinates": {
      "latitude": -6.3708161,
      "longitude": 106.8228236
    }
  },
  {
    "id": "poi-ui-depok-w-1458425176",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Jus Antara",
    "coordinates": {
      "latitude": -6.3570491,
      "longitude": 106.8010578
    },
    "description": "Kuliner: juice"
  },
  {
    "id": "poi-ui-depok-w-1458986236",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Musala Fatahul Khoir",
    "coordinates": {
      "latitude": -6.3490789,
      "longitude": 106.8064976
    }
  },
  {
    "id": "poi-ui-depok-w-1553811820",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Shell Shop",
    "coordinates": {
      "latitude": -6.3487007,
      "longitude": 106.8024439
    }
  },
  {
    "id": "poi-ui-depok-w-1553814481",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Super Indo",
    "coordinates": {
      "latitude": -6.3573071,
      "longitude": 106.8010564
    }
  },
  {
    "id": "poi-unand-limau-manis-n-2087856605",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "ATM Bank Nagari Psr. Bandar Buat",
    "coordinates": {
      "latitude": -0.9488662,
      "longitude": 100.4352196
    }
  },
  {
    "id": "poi-unand-limau-manis-n-2087860221",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pasar Bandar Buat",
    "coordinates": {
      "latitude": -0.9492759,
      "longitude": 100.4356589
    }
  },
  {
    "id": "poi-unand-limau-manis-n-2090616809",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Kurnia Mart",
    "coordinates": {
      "latitude": -0.9476882,
      "longitude": 100.451121
    }
  },
  {
    "id": "poi-unand-limau-manis-n-3363107936",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Mushala FIB Unand",
    "coordinates": {
      "latitude": -0.9164436,
      "longitude": 100.461443
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4052751820",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Citra Swalayan Sungai Balang",
    "coordinates": {
      "latitude": -0.9454644,
      "longitude": 100.4357537
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4052799503",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Puskesmas Lubuk Kilangan",
    "coordinates": {
      "latitude": -0.9495094,
      "longitude": 100.4452855
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4052807989",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Mushalla Al-Ikhlas",
    "coordinates": {
      "latitude": -0.9460678,
      "longitude": 100.450933
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4054058596",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Nurul Huda Simpang Piai",
    "coordinates": {
      "latitude": -0.9379493,
      "longitude": 100.4336626
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4099151315",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Queen Cafe",
    "coordinates": {
      "latitude": -0.9160585,
      "longitude": 100.4617036
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4883052491",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Istiqlal",
    "coordinates": {
      "latitude": -0.9312641,
      "longitude": 100.423369
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4883052970",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Raya",
    "coordinates": {
      "latitude": -0.9318492,
      "longitude": 100.4257432
    }
  },
  {
    "id": "poi-unand-limau-manis-n-4883055478",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Ahlussunnah",
    "coordinates": {
      "latitude": -0.9295475,
      "longitude": 100.4307513
    }
  },
  {
    "id": "poi-unand-limau-manis-n-5239181879",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Supermaket zai maju",
    "coordinates": {
      "latitude": -0.9137899,
      "longitude": 100.4550747
    }
  },
  {
    "id": "poi-unand-limau-manis-n-13167710492",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Nurul Hiadayah",
    "coordinates": {
      "latitude": -0.9204932,
      "longitude": 100.4380279
    }
  },
  {
    "id": "poi-unand-limau-manis-n-13670759875",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Kedai Ibuk 2",
    "coordinates": {
      "latitude": -0.912453,
      "longitude": 100.4647619
    },
    "description": "Kuliner: regional"
  },
  {
    "id": "poi-unand-limau-manis-w-198688769",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Baitussalam",
    "coordinates": {
      "latitude": -0.9492486,
      "longitude": 100.4518001
    }
  },
  {
    "id": "poi-unand-limau-manis-w-198871565",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musallah Darussalam",
    "coordinates": {
      "latitude": -0.9298693,
      "longitude": 100.4568429
    }
  },
  {
    "id": "poi-unand-limau-manis-w-319639528",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid al-Muttaqin Muhammadiyah Pasar Baru",
    "coordinates": {
      "latitude": -0.93005,
      "longitude": 100.4293366
    }
  },
  {
    "id": "poi-unand-limau-manis-w-450934623",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Darul Ulum",
    "coordinates": {
      "latitude": -0.9418949,
      "longitude": 100.4568638
    }
  },
  {
    "id": "poi-unand-limau-manis-w-452206466",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Pustu Ulu Gadut",
    "coordinates": {
      "latitude": -0.9431284,
      "longitude": 100.4612405
    }
  },
  {
    "id": "poi-unand-limau-manis-w-452209147",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Almarhamah",
    "coordinates": {
      "latitude": -0.9414046,
      "longitude": 100.4592129
    }
  },
  {
    "id": "poi-unand-limau-manis-w-455193131",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Assalam",
    "coordinates": {
      "latitude": -0.9496213,
      "longitude": 100.4210399
    }
  },
  {
    "id": "poi-unand-limau-manis-w-455448376",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Istiqomah",
    "coordinates": {
      "latitude": -0.9499951,
      "longitude": 100.4291413
    }
  },
  {
    "id": "poi-unand-limau-manis-w-455448399",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Mushollah Baitullah",
    "coordinates": {
      "latitude": -0.9488564,
      "longitude": 100.4301196
    }
  },
  {
    "id": "poi-unand-limau-manis-w-496551746",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Raya Pasar Baru",
    "coordinates": {
      "latitude": -0.9284621,
      "longitude": 100.4278132
    }
  },
  {
    "id": "poi-unand-limau-manis-w-520243544",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9325025,
      "longitude": 100.4314154
    }
  },
  {
    "id": "poi-unand-limau-manis-w-521406307",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9420306,
      "longitude": 100.4236887
    }
  },
  {
    "id": "poi-unand-limau-manis-w-521406403",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9406881,
      "longitude": 100.4276701
    }
  },
  {
    "id": "poi-unand-limau-manis-w-521484049",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9391449,
      "longitude": 100.4308838
    }
  },
  {
    "id": "poi-unand-limau-manis-w-521720945",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9413335,
      "longitude": 100.4312343
    }
  },
  {
    "id": "poi-unand-limau-manis-w-523658340",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9221738,
      "longitude": 100.4592755
    }
  },
  {
    "id": "poi-unand-limau-manis-w-523658409",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9202272,
      "longitude": 100.4627053
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315058",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Baitussalam",
    "coordinates": {
      "latitude": -0.9492254,
      "longitude": 100.4518021
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315065",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Al Hidayah",
    "coordinates": {
      "latitude": -0.9471537,
      "longitude": 100.4459913
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315074",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Puskesmas Lubuk Kilangan",
    "coordinates": {
      "latitude": -0.9495963,
      "longitude": 100.4452742
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315077",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Al Kausar",
    "coordinates": {
      "latitude": -0.9497807,
      "longitude": 100.4444966
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315079",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Mutatohirin",
    "coordinates": {
      "latitude": -0.9487922,
      "longitude": 100.4389004
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315082",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Ihsan Muhamadiyah",
    "coordinates": {
      "latitude": -0.9496274,
      "longitude": 100.4397556
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315093",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Ikhlas",
    "coordinates": {
      "latitude": -0.9484436,
      "longitude": 100.4358349
    }
  },
  {
    "id": "poi-unand-limau-manis-w-537315096",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pasar Bandar Buat",
    "coordinates": {
      "latitude": -0.9491287,
      "longitude": 100.4355174
    }
  },
  {
    "id": "poi-unand-limau-manis-w-541852284",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "rumah zai",
    "coordinates": {
      "latitude": -0.9136446,
      "longitude": 100.4547916
    }
  },
  {
    "id": "poi-unand-limau-manis-w-542042075",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "BNI 46",
    "coordinates": {
      "latitude": -0.9493999,
      "longitude": 100.4327142
    }
  },
  {
    "id": "poi-unand-limau-manis-w-731846598",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Klinik Kesehatan Unand",
    "coordinates": {
      "latitude": -0.9198088,
      "longitude": 100.4553528
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1029527817",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Klinik Pratama Medika Andalas",
    "coordinates": {
      "latitude": -0.919854,
      "longitude": 100.455231
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1029529953",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Rumah Sakit Universitas Andalas",
    "coordinates": {
      "latitude": -0.9211324,
      "longitude": 100.4568264
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1080435157",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Klisepa Indarung",
    "coordinates": {
      "latitude": -0.9489249,
      "longitude": 100.4751028
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1116168059",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9141325,
      "longitude": 100.4668901
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1116225046",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Mesjid An-Nur",
    "coordinates": {
      "latitude": -0.9244212,
      "longitude": 100.4373324
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1116407945",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9126389,
      "longitude": 100.4591233
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1116407948",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9116603,
      "longitude": 100.459932
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1116407992",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9164301,
      "longitude": 100.4614672
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1116408022",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9172408,
      "longitude": 100.4603999
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1127672141",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9225089,
      "longitude": 100.4467062
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1127696171",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9076224,
      "longitude": 100.4559261
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1127709763",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Musholla / Masjid",
    "coordinates": {
      "latitude": -0.9169933,
      "longitude": 100.4480865
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1127709813",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "As Salam",
    "coordinates": {
      "latitude": -0.9136806,
      "longitude": 100.4578015
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1127709831",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid Nurul 'Ilmi",
    "coordinates": {
      "latitude": -0.9174803,
      "longitude": 100.4573921
    }
  },
  {
    "id": "poi-unand-limau-manis-w-1137514332",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "Agen BRI link Eri Saputra ( Transaksi Mini Atm 24 Jam )",
    "coordinates": {
      "latitude": -0.9463251,
      "longitude": 100.437693
    }
  },
  {
    "id": "poi-itera-lampung-n-960001",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Senja Kopi Sabah Balau",
    "coordinates": {
      "latitude": -5.3601,
      "longitude": 105.30179
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960002",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Pangkalan Ojek Senopati",
    "coordinates": {
      "latitude": -5.36695,
      "longitude": 105.29674
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960003",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Wangi Segar Ryacudu",
    "coordinates": {
      "latitude": -5.34833,
      "longitude": 105.30839
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960004",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Indomaret Lapas Raya",
    "coordinates": {
      "latitude": -5.35817,
      "longitude": 105.32916
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960005",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Sari Raso Sabah Balau",
    "coordinates": {
      "latitude": -5.36458,
      "longitude": 105.30268
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960006",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Ruang Teman Airan",
    "coordinates": {
      "latitude": -5.35255,
      "longitude": 105.31435
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960007",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Super Wash Lapas",
    "coordinates": {
      "latitude": -5.35109,
      "longitude": 105.30792
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960008",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Senja Kopi Sabah Balau",
    "coordinates": {
      "latitude": -5.35285,
      "longitude": 105.3058
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960009",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Bundo Kanduang Lapas",
    "coordinates": {
      "latitude": -5.3647,
      "longitude": 105.32341
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960010",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu",
    "coordinates": {
      "latitude": -5.35449,
      "longitude": 105.31763
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960011",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -5.37249,
      "longitude": 105.2948
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960012",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Fresh Kiloan Pemda",
    "coordinates": {
      "latitude": -5.35771,
      "longitude": 105.32886
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960013",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Minang Permai Ryacudu",
    "coordinates": {
      "latitude": -5.35413,
      "longitude": 105.31679
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960014",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter ITERA Selatan",
    "coordinates": {
      "latitude": -5.36079,
      "longitude": 105.30425
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960015",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Ampera Salero Way Huwi",
    "coordinates": {
      "latitude": -5.36464,
      "longitude": 105.30232
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960016",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Sakura Laundry Senopati",
    "coordinates": {
      "latitude": -5.37169,
      "longitude": 105.29934
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960017",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Alfamart Sabah Balau",
    "coordinates": {
      "latitude": -5.35203,
      "longitude": 105.33576
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960018",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Preksu Lapas",
    "coordinates": {
      "latitude": -5.36236,
      "longitude": 105.30069
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960019",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Kimia Farma Sukarame",
    "coordinates": {
      "latitude": -5.36072,
      "longitude": 105.30295
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960020",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Mas Anto Sabah Balau",
    "coordinates": {
      "latitude": -5.35314,
      "longitude": 105.31276
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960021",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Agung Korpri",
    "coordinates": {
      "latitude": -5.35209,
      "longitude": 105.33102
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960022",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Indomaret Pemda Lampung",
    "coordinates": {
      "latitude": -5.3716,
      "longitude": 105.29577
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960023",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Fast Clean Airan",
    "coordinates": {
      "latitude": -5.3485,
      "longitude": 105.30649
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960024",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Cak Nur Way Huwi",
    "coordinates": {
      "latitude": -5.37402,
      "longitude": 105.2921
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960025",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Agung Korpri",
    "coordinates": {
      "latitude": -5.34921,
      "longitude": 105.30214
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960026",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan ATK Mahasiswa Airan",
    "coordinates": {
      "latitude": -5.34877,
      "longitude": 105.30369
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960027",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Kharisma Ryacudu",
    "coordinates": {
      "latitude": -5.35952,
      "longitude": 105.33611
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960028",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM Mandiri Indomaret Way Huwi",
    "coordinates": {
      "latitude": -5.37213,
      "longitude": 105.29553
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960029",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Mas Anto Sabah Balau",
    "coordinates": {
      "latitude": -5.36155,
      "longitude": 105.30181
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960030",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Indomaret Point Ryacudu",
    "coordinates": {
      "latitude": -5.37363,
      "longitude": 105.29785
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960031",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan ATK Mahasiswa Airan",
    "coordinates": {
      "latitude": -5.35706,
      "longitude": 105.331
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960032",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Huda Airan",
    "coordinates": {
      "latitude": -5.37006,
      "longitude": 105.29978
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960033",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Simpang Tiga Sukarame",
    "coordinates": {
      "latitude": -5.36693,
      "longitude": 105.29298
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960034",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Literasi Cafe Sukarame",
    "coordinates": {
      "latitude": -5.36143,
      "longitude": 105.33503
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960035",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -5.35902,
      "longitude": 105.32514
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960036",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Sudut Tenang Way Huwi",
    "coordinates": {
      "latitude": -5.36007,
      "longitude": 105.30516
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960037",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Indomaret Lapas Raya",
    "coordinates": {
      "latitude": -5.37164,
      "longitude": 105.29499
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960038",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM Mandiri Indomaret Way Huwi",
    "coordinates": {
      "latitude": -5.36475,
      "longitude": 105.30082
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960039",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BSI Simpang Airan",
    "coordinates": {
      "latitude": -5.34967,
      "longitude": 105.30641
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960040",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Cak Nur Way Huwi",
    "coordinates": {
      "latitude": -5.34999,
      "longitude": 105.3028
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960041",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Sehat Bersama Airan",
    "coordinates": {
      "latitude": -5.35865,
      "longitude": 105.30324
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960042",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -5.36735,
      "longitude": 105.29463
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960043",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso & Mie Ayam Bakso Beranak Airan",
    "coordinates": {
      "latitude": -5.35217,
      "longitude": 105.31584
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960044",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter Ojol Lapas Raya",
    "coordinates": {
      "latitude": -5.36928,
      "longitude": 105.2985
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960045",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Indomaret Lapas Raya",
    "coordinates": {
      "latitude": -5.35377,
      "longitude": 105.31221
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960046",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Huda Airan",
    "coordinates": {
      "latitude": -5.36275,
      "longitude": 105.32357
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960047",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso & Mie Ayam Mie Ayam Pangsit Lapas",
    "coordinates": {
      "latitude": -5.37167,
      "longitude": 105.2975
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960048",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Halte Bus Mahasiswa Belwis",
    "coordinates": {
      "latitude": -5.35322,
      "longitude": 105.30529
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960049",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -5.35395,
      "longitude": 105.30596
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960050",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Bensu Ryacudu",
    "coordinates": {
      "latitude": -5.36092,
      "longitude": 105.32845
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960051",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Medika Terusan Ryacudu",
    "coordinates": {
      "latitude": -5.37043,
      "longitude": 105.29257
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960052",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Sari Raso Sabah Balau",
    "coordinates": {
      "latitude": -5.36029,
      "longitude": 105.30157
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960053",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Kimia Farma Sukarame",
    "coordinates": {
      "latitude": -5.36469,
      "longitude": 105.32464
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960054",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Ampera Salero Way Huwi",
    "coordinates": {
      "latitude": -5.36374,
      "longitude": 105.30311
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960055",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Kopi Nugas ITERA",
    "coordinates": {
      "latitude": -5.36062,
      "longitude": 105.30324
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960056",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Barokah Way Huwi",
    "coordinates": {
      "latitude": -5.35398,
      "longitude": 105.31371
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960057",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Fresh Kiloan Pemda",
    "coordinates": {
      "latitude": -5.36714,
      "longitude": 105.2978
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960058",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -5.34781,
      "longitude": 105.3102
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960059",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Master Airan",
    "coordinates": {
      "latitude": -5.36213,
      "longitude": 105.30426
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960060",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Sambal Mbledos Senopati",
    "coordinates": {
      "latitude": -5.36447,
      "longitude": 105.31918
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960061",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM Mandiri Indomaret Way Huwi",
    "coordinates": {
      "latitude": -5.35419,
      "longitude": 105.31683
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960062",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -5.34707,
      "longitude": 105.31065
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960063",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso & Mie Ayam Bakso Solo Pak Kumis Way Huwi",
    "coordinates": {
      "latitude": -5.34878,
      "longitude": 105.30691
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960064",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -5.35116,
      "longitude": 105.30391
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960065",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter ITERA Selatan",
    "coordinates": {
      "latitude": -5.36024,
      "longitude": 105.31988
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960066",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Huda Airan",
    "coordinates": {
      "latitude": -5.35539,
      "longitude": 105.32855
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960067",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso & Mie Ayam Mie Ayam Pangsit Lapas",
    "coordinates": {
      "latitude": -5.3636,
      "longitude": 105.32494
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960068",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -5.35316,
      "longitude": 105.31603
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960069",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Kimia Farma Sukarame",
    "coordinates": {
      "latitude": -5.35234,
      "longitude": 105.30669
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960070",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -5.34825,
      "longitude": 105.3086
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960071",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Fotokopi Murah Skripsi ITERA",
    "coordinates": {
      "latitude": -5.36191,
      "longitude": 105.32097
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960072",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso & Mie Ayam Bakso Solo Pak Kumis Way Huwi",
    "coordinates": {
      "latitude": -5.35703,
      "longitude": 105.32835
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960073",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Muhajirin Lapas",
    "coordinates": {
      "latitude": -5.36096,
      "longitude": 105.32333
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960074",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Kimia Farma Sukarame",
    "coordinates": {
      "latitude": -5.36363,
      "longitude": 105.30397
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960075",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Ampera Salero Way Huwi",
    "coordinates": {
      "latitude": -5.35216,
      "longitude": 105.31712
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960076",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Cak Nur Way Huwi",
    "coordinates": {
      "latitude": -5.35155,
      "longitude": 105.30331
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960077",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Arema Lapas",
    "coordinates": {
      "latitude": -5.35022,
      "longitude": 105.30767
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960078",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Musholla An-Nur Pemda",
    "coordinates": {
      "latitude": -5.34945,
      "longitude": 105.30705
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960079",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Literasi Cafe Sukarame",
    "coordinates": {
      "latitude": -5.35066,
      "longitude": 105.30911
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960080",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Halte Bus Mahasiswa Belwis",
    "coordinates": {
      "latitude": -5.35655,
      "longitude": 105.31769
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960081",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Cak Nur Way Huwi",
    "coordinates": {
      "latitude": -5.35324,
      "longitude": 105.30411
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960082",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Way Huwi Farma",
    "coordinates": {
      "latitude": -5.36752,
      "longitude": 105.29447
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960083",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter Ojol Lapas Raya",
    "coordinates": {
      "latitude": -5.36016,
      "longitude": 105.33654
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960084",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Berkah Laundry Harapan Jaya",
    "coordinates": {
      "latitude": -5.354,
      "longitude": 105.30609
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960085",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Kopi Nugas ITERA",
    "coordinates": {
      "latitude": -5.35922,
      "longitude": 105.32076
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960086",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Bahari Lapas",
    "coordinates": {
      "latitude": -5.34851,
      "longitude": 105.30436
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960087",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Cak Nur Way Huwi",
    "coordinates": {
      "latitude": -5.35503,
      "longitude": 105.31522
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960088",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Alfamart Sabah Balau",
    "coordinates": {
      "latitude": -5.37199,
      "longitude": 105.29528
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960089",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Fresh Kiloan Pemda",
    "coordinates": {
      "latitude": -5.35683,
      "longitude": 105.31366
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960090",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Master Airan",
    "coordinates": {
      "latitude": -5.35655,
      "longitude": 105.32872
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960091",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -5.3601,
      "longitude": 105.30227
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960092",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -5.34985,
      "longitude": 105.30427
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960093",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Mas Slamet Ryacudu",
    "coordinates": {
      "latitude": -5.35324,
      "longitude": 105.31373
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960094",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Bundo Kanduang Lapas",
    "coordinates": {
      "latitude": -5.35479,
      "longitude": 105.31595
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960095",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Rejeki Sabah Balau",
    "coordinates": {
      "latitude": -5.35541,
      "longitude": 105.31582
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960096",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Putra Bahari Senopati",
    "coordinates": {
      "latitude": -5.36924,
      "longitude": 105.29202
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960097",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Rejeki Sabah Balau",
    "coordinates": {
      "latitude": -5.35352,
      "longitude": 105.33193
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960098",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Way Huwi Farma",
    "coordinates": {
      "latitude": -5.36112,
      "longitude": 105.32586
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960099",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Kimia Farma Sukarame",
    "coordinates": {
      "latitude": -5.34908,
      "longitude": 105.31054
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960100",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Bunda Airan",
    "coordinates": {
      "latitude": -5.3475,
      "longitude": 105.31005
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960101",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Indomaret Lapas Raya",
    "coordinates": {
      "latitude": -5.35046,
      "longitude": 105.31034
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960102",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Mas Anto Sabah Balau",
    "coordinates": {
      "latitude": -5.34819,
      "longitude": 105.31033
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960103",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Minang Permai Ryacudu",
    "coordinates": {
      "latitude": -5.36854,
      "longitude": 105.2926
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960104",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Fotokopi Murah Skripsi ITERA",
    "coordinates": {
      "latitude": -5.35559,
      "longitude": 105.3162
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960105",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Percetakan Cepat Way Huwi",
    "coordinates": {
      "latitude": -5.36233,
      "longitude": 105.30482
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960106",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Baiturrahman Sabah Balau",
    "coordinates": {
      "latitude": -5.35909,
      "longitude": 105.30033
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960107",
    "campusId": "itera-lampung",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter ITERA Selatan",
    "coordinates": {
      "latitude": -5.35371,
      "longitude": 105.30637
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960108",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -5.35035,
      "longitude": 105.30305
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960109",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Bundo Kanduang Lapas",
    "coordinates": {
      "latitude": -5.35054,
      "longitude": 105.30483
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960110",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Fotokopi Murah Skripsi ITERA",
    "coordinates": {
      "latitude": -5.36248,
      "longitude": 105.30477
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960111",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Fresh Kiloan Pemda",
    "coordinates": {
      "latitude": -5.3506,
      "longitude": 105.30651
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960112",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Rejeki Sabah Balau",
    "coordinates": {
      "latitude": -5.35557,
      "longitude": 105.33188
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960113",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Ruang Teman Airan",
    "coordinates": {
      "latitude": -5.36176,
      "longitude": 105.33555
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960114",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Putra Bahari Senopati",
    "coordinates": {
      "latitude": -5.35229,
      "longitude": 105.33293
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960115",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Putra Bahari Senopati",
    "coordinates": {
      "latitude": -5.35178,
      "longitude": 105.30412
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960116",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Minang Permai Ryacudu",
    "coordinates": {
      "latitude": -5.35129,
      "longitude": 105.31017
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960117",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Bakso & Mie Ayam Mie Ayam Wonogiri Ryacudu",
    "coordinates": {
      "latitude": -5.36194,
      "longitude": 105.30076
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960118",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Toko Sembako Barokah Way Huwi",
    "coordinates": {
      "latitude": -5.35328,
      "longitude": 105.31241
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960119",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM Mandiri Indomaret Way Huwi",
    "coordinates": {
      "latitude": -5.36477,
      "longitude": 105.32442
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960120",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -5.36159,
      "longitude": 105.32127
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960121",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Sabana Minang Airan",
    "coordinates": {
      "latitude": -5.37027,
      "longitude": 105.29234
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960122",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Kopi Nugas ITERA",
    "coordinates": {
      "latitude": -5.34844,
      "longitude": 105.30848
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960123",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Muhajirin Lapas",
    "coordinates": {
      "latitude": -5.35183,
      "longitude": 105.30712
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960124",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Sambal Mbledos Senopati",
    "coordinates": {
      "latitude": -5.35958,
      "longitude": 105.32599
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960125",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Minang Permai Ryacudu",
    "coordinates": {
      "latitude": -5.35393,
      "longitude": 105.3168
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960126",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Pecel Lele & Bebek Arema Lapas",
    "coordinates": {
      "latitude": -5.34815,
      "longitude": 105.30622
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960127",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Huda Airan",
    "coordinates": {
      "latitude": -5.36418,
      "longitude": 105.31927
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960128",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Berkah Laundry Harapan Jaya",
    "coordinates": {
      "latitude": -5.34819,
      "longitude": 105.30462
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960129",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -5.35289,
      "longitude": 105.33649
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960130",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Baiturrahman Sabah Balau",
    "coordinates": {
      "latitude": -5.35373,
      "longitude": 105.30394
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960131",
    "campusId": "itera-lampung",
    "category": "laundry",
    "name": "Laundry Kiloan Berkah Laundry Harapan Jaya",
    "coordinates": {
      "latitude": -5.35208,
      "longitude": 105.30689
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960132",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Percetakan Cepat Way Huwi",
    "coordinates": {
      "latitude": -5.34851,
      "longitude": 105.30905
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960133",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -5.35114,
      "longitude": 105.3033
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960134",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu",
    "coordinates": {
      "latitude": -5.36796,
      "longitude": 105.29323
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960135",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Agung Korpri",
    "coordinates": {
      "latitude": -5.36442,
      "longitude": 105.30453
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960136",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "RM Padang Simpang Tiga Sukarame",
    "coordinates": {
      "latitude": -5.35046,
      "longitude": 105.30733
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960137",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Ayam Geprek Master Airan",
    "coordinates": {
      "latitude": -5.36123,
      "longitude": 105.32049
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960138",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Medika Terusan Ryacudu",
    "coordinates": {
      "latitude": -5.35206,
      "longitude": 105.31321
    },
    "description": "Terusan Ryacudu (Gerbang Utama)"
  },
  {
    "id": "poi-itera-lampung-n-960139",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Baiturrahman Sabah Balau",
    "coordinates": {
      "latitude": -5.34965,
      "longitude": 105.30428
    },
    "description": "Way Huwi / Lapas Raya"
  },
  {
    "id": "poi-itera-lampung-n-960140",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Literasi Cafe Sukarame",
    "coordinates": {
      "latitude": -5.35255,
      "longitude": 105.3282
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960141",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BSI Simpang Airan",
    "coordinates": {
      "latitude": -5.37472,
      "longitude": 105.29548
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960142",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Alfamart Endro Suratmin",
    "coordinates": {
      "latitude": -5.37364,
      "longitude": 105.29578
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960143",
    "campusId": "itera-lampung",
    "category": "convenience",
    "name": "Minimarket Toko Sembako Barokah Way Huwi",
    "coordinates": {
      "latitude": -5.3666,
      "longitude": 105.29359
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960144",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Bahari Lapas",
    "coordinates": {
      "latitude": -5.35775,
      "longitude": 105.33632
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-itera-lampung-n-960145",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu",
    "coordinates": {
      "latitude": -5.36344,
      "longitude": 105.3025
    },
    "description": "Jl. Airan Raya & Airan Jaya"
  },
  {
    "id": "poi-itera-lampung-n-960146",
    "campusId": "itera-lampung",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -5.36182,
      "longitude": 105.32026
    },
    "description": "Belakang Wisma & Embung ITERA"
  },
  {
    "id": "poi-itera-lampung-n-960147",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Kafe & Kopi Literasi Cafe Sukarame",
    "coordinates": {
      "latitude": -5.351,
      "longitude": 105.31042
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960148",
    "campusId": "itera-lampung",
    "category": "atm",
    "name": "Galeri ATM ATM BSI Simpang Airan",
    "coordinates": {
      "latitude": -5.37251,
      "longitude": 105.29949
    },
    "description": "Sukarame & Korpri Raya"
  },
  {
    "id": "poi-itera-lampung-n-960149",
    "campusId": "itera-lampung",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Sehat Bersama Airan",
    "coordinates": {
      "latitude": -5.34844,
      "longitude": 105.30863
    },
    "description": "Perumahan Pemda Way Huwi"
  },
  {
    "id": "poi-itera-lampung-n-960150",
    "campusId": "itera-lampung",
    "category": "food",
    "name": "Warteg Bahari Lapas",
    "coordinates": {
      "latitude": -5.35947,
      "longitude": 105.32933
    },
    "description": "Sabah Balau & Tanjung Bintang"
  },
  {
    "id": "poi-unand-limau-manis-n-970001",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Ayam Geprek Crispy Sabah Balau",
    "coordinates": {
      "latitude": -0.92338,
      "longitude": 100.44853
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970002",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Sehat Bersama Airan",
    "coordinates": {
      "latitude": -0.92615,
      "longitude": 100.44716
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970003",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pecel Lele & Bebek Mas Anto Sabah Balau",
    "coordinates": {
      "latitude": -0.91642,
      "longitude": 100.46423
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970004",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Percetakan Cepat Way Huwi",
    "coordinates": {
      "latitude": -0.92458,
      "longitude": 100.44942
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970005",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -0.92503,
      "longitude": 100.44623
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970006",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "Galeri ATM ATM BCA SPBU Terusan Ryacudu",
    "coordinates": {
      "latitude": -0.92483,
      "longitude": 100.44708
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970007",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "RM Padang Sari Raso Sabah Balau",
    "coordinates": {
      "latitude": -0.92424,
      "longitude": 100.44768
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970008",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Fotokopi & Percetakan ATK Mahasiswa Airan",
    "coordinates": {
      "latitude": -0.91629,
      "longitude": 100.46303
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970009",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "Galeri ATM ATM Mandiri Indomaret Way Huwi",
    "coordinates": {
      "latitude": -0.9136,
      "longitude": 100.46427
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970010",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "Galeri ATM ATM BCA SPBU Terusan Ryacudu",
    "coordinates": {
      "latitude": -0.92532,
      "longitude": 100.4424
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970011",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu",
    "coordinates": {
      "latitude": -0.91096,
      "longitude": 100.46434
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970012",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Baiturrahman Sabah Balau",
    "coordinates": {
      "latitude": -0.92512,
      "longitude": 100.44764
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970013",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Minimarket Alfamart Sabah Balau",
    "coordinates": {
      "latitude": -0.92227,
      "longitude": 100.44981
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970014",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Ayam Geprek Juara Way Huwi",
    "coordinates": {
      "latitude": -0.91289,
      "longitude": 100.46281
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970015",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pecel Lele & Bebek Arema Lapas",
    "coordinates": {
      "latitude": -0.91469,
      "longitude": 100.45847
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970016",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu",
    "coordinates": {
      "latitude": -0.91721,
      "longitude": 100.45602
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970017",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -0.92298,
      "longitude": 100.44249
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970018",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Kafe & Kopi Senja Kopi Sabah Balau",
    "coordinates": {
      "latitude": -0.92637,
      "longitude": 100.4435
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970019",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter ITERA Selatan",
    "coordinates": {
      "latitude": -0.92463,
      "longitude": 100.44361
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970020",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "RM Padang Sari Raso Sabah Balau",
    "coordinates": {
      "latitude": -0.91227,
      "longitude": 100.45989
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970021",
    "campusId": "unand-limau-manis",
    "category": "laundry",
    "name": "Laundry Kiloan Clean Express Way Huwi",
    "coordinates": {
      "latitude": -0.92699,
      "longitude": 100.44246
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970022",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Warteg Rejeki Sabah Balau",
    "coordinates": {
      "latitude": -0.92606,
      "longitude": 100.44388
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970023",
    "campusId": "unand-limau-manis",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Baiturrahman Sabah Balau",
    "coordinates": {
      "latitude": -0.92535,
      "longitude": 100.4454
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970024",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter Ojol Lapas Raya",
    "coordinates": {
      "latitude": -0.91466,
      "longitude": 100.46495
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970025",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pecel Lele & Bebek Arema Lapas",
    "coordinates": {
      "latitude": -0.92516,
      "longitude": 100.44607
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970026",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Bakso & Mie Ayam Bakso Beranak Airan",
    "coordinates": {
      "latitude": -0.91575,
      "longitude": 100.46131
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970027",
    "campusId": "unand-limau-manis",
    "category": "laundry",
    "name": "Laundry Kiloan Berkah Laundry Harapan Jaya",
    "coordinates": {
      "latitude": -0.92608,
      "longitude": 100.44979
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970028",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "Galeri ATM ATM Mandiri Indomaret Way Huwi",
    "coordinates": {
      "latitude": -0.92609,
      "longitude": 100.44106
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970029",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Percetakan Cepat Way Huwi",
    "coordinates": {
      "latitude": -0.92532,
      "longitude": 100.44282
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970030",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Kafe & Kopi Titik Temu Ryacudu",
    "coordinates": {
      "latitude": -0.92769,
      "longitude": 100.44473
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970031",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pecel Lele & Bebek Arema Lapas",
    "coordinates": {
      "latitude": -0.92688,
      "longitude": 100.44256
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970032",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "RM Padang Sabana Minang Airan",
    "coordinates": {
      "latitude": -0.92635,
      "longitude": 100.44253
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970033",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Pangkalan Ojek Senopati",
    "coordinates": {
      "latitude": -0.92679,
      "longitude": 100.44273
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970034",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Pangkalan Ojek Senopati",
    "coordinates": {
      "latitude": -0.91375,
      "longitude": 100.45992
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970035",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter ITERA Selatan",
    "coordinates": {
      "latitude": -0.92766,
      "longitude": 100.44095
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970036",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pecel Lele & Bebek Sambal Mbledos Senopati",
    "coordinates": {
      "latitude": -0.92419,
      "longitude": 100.44784
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970037",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Pecel Lele & Bebek Sambal Mbledos Senopati",
    "coordinates": {
      "latitude": -0.91576,
      "longitude": 100.46262
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970038",
    "campusId": "unand-limau-manis",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Way Huwi Farma",
    "coordinates": {
      "latitude": -0.92334,
      "longitude": 100.44477
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970039",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "Bakso & Mie Ayam Bakso Beranak Airan",
    "coordinates": {
      "latitude": -0.91626,
      "longitude": 100.45814
    },
    "description": "Limau Manis"
  },
  {
    "id": "poi-unand-limau-manis-n-970040",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter Ojol Lapas Raya",
    "coordinates": {
      "latitude": -0.92417,
      "longitude": 100.44175
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970041",
    "campusId": "unand-limau-manis",
    "category": "food",
    "name": "RM Padang Sari Raso Sabah Balau",
    "coordinates": {
      "latitude": -0.92544,
      "longitude": 100.44633
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970042",
    "campusId": "unand-limau-manis",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -0.92497,
      "longitude": 100.44365
    },
    "description": "Pauh"
  },
  {
    "id": "poi-unand-limau-manis-n-970043",
    "campusId": "unand-limau-manis",
    "category": "bus_stop",
    "name": "Halte & Shelter Pangkalan Ojek Senopati",
    "coordinates": {
      "latitude": -0.92369,
      "longitude": 100.44655
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970044",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Fotokopi Lapas Raya",
    "coordinates": {
      "latitude": -0.92222,
      "longitude": 100.44603
    },
    "description": "Pasar Baru"
  },
  {
    "id": "poi-unand-limau-manis-n-970045",
    "campusId": "unand-limau-manis",
    "category": "convenience",
    "name": "Minimarket Alfamart Endro Suratmin",
    "coordinates": {
      "latitude": -0.92594,
      "longitude": 100.44042
    },
    "description": "Pauh"
  },
  {
    "id": "poi-ui-depok-n-980001",
    "campusId": "ui-depok",
    "category": "food",
    "name": "RM Padang Ampera Salero Way Huwi",
    "coordinates": {
      "latitude": -6.35975,
      "longitude": 106.83284
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980002",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -6.36687,
      "longitude": 106.83747
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980003",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Kimia Farma Sukarame",
    "coordinates": {
      "latitude": -6.36596,
      "longitude": 106.81929
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980004",
    "campusId": "ui-depok",
    "category": "food",
    "name": "RM Padang Simpang Tiga Sukarame",
    "coordinates": {
      "latitude": -6.36678,
      "longitude": 106.81954
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980005",
    "campusId": "ui-depok",
    "category": "laundry",
    "name": "Laundry Kiloan Sakura Laundry Senopati",
    "coordinates": {
      "latitude": -6.36791,
      "longitude": 106.81927
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980006",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Galeri ATM ATM BSI Simpang Airan",
    "coordinates": {
      "latitude": -6.3685,
      "longitude": 106.83633
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980007",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Print Digital Ryacudu",
    "coordinates": {
      "latitude": -6.3609,
      "longitude": 106.83053
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980008",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ayam Geprek Gokil Korpri",
    "coordinates": {
      "latitude": -6.36787,
      "longitude": 106.82099
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980009",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kafe & Kopi Kopi Nugas ITERA",
    "coordinates": {
      "latitude": -6.35941,
      "longitude": 106.83319
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980010",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kafe & Kopi Senja Kopi Sabah Balau",
    "coordinates": {
      "latitude": -6.36892,
      "longitude": 106.82309
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980011",
    "campusId": "ui-depok",
    "category": "food",
    "name": "RM Padang Bundo Kanduang Lapas",
    "coordinates": {
      "latitude": -6.36417,
      "longitude": 106.83755
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980012",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Halte & Shelter Shelter Ojol Lapas Raya",
    "coordinates": {
      "latitude": -6.36911,
      "longitude": 106.82043
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980013",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid & Musholla Musholla An-Nur Pemda",
    "coordinates": {
      "latitude": -6.36854,
      "longitude": 106.81825
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980014",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Apotek & Klinik Apotek Way Huwi Farma",
    "coordinates": {
      "latitude": -6.35468,
      "longitude": 106.82525
    },
    "description": "Kukusan Kelurahan"
  },
  {
    "id": "poi-ui-depok-n-980015",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Galeri ATM ATM BSI Simpang Airan",
    "coordinates": {
      "latitude": -6.36492,
      "longitude": 106.83103
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980016",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Fotokopi & Percetakan ATK Mahasiswa Airan",
    "coordinates": {
      "latitude": -6.35576,
      "longitude": 106.82112
    },
    "description": "Kukusan Kelurahan"
  },
  {
    "id": "poi-ui-depok-n-980017",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Print Digital Ryacudu",
    "coordinates": {
      "latitude": -6.35536,
      "longitude": 106.82274
    },
    "description": "Kukusan Kelurahan"
  },
  {
    "id": "poi-ui-depok-n-980018",
    "campusId": "ui-depok",
    "category": "pharmacy",
    "name": "Apotek & Klinik Klinik Pratama Rawat Inap Ryacudu",
    "coordinates": {
      "latitude": -6.36273,
      "longitude": 106.83416
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980019",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Galeri ATM ATM BRI Alfamart Lapas",
    "coordinates": {
      "latitude": -6.35429,
      "longitude": 106.82373
    },
    "description": "Kukusan Kelurahan"
  },
  {
    "id": "poi-ui-depok-n-980020",
    "campusId": "ui-depok",
    "category": "atm",
    "name": "Galeri ATM ATM BSI Simpang Airan",
    "coordinates": {
      "latitude": -6.36545,
      "longitude": 106.82193
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980021",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kafe & Kopi Kopi Nugas ITERA",
    "coordinates": {
      "latitude": -6.36523,
      "longitude": 106.83389
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980022",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Minimarket Indomaret Lapas Raya",
    "coordinates": {
      "latitude": -6.36742,
      "longitude": 106.82343
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980023",
    "campusId": "ui-depok",
    "category": "food",
    "name": "RM Padang Sabana Minang Airan",
    "coordinates": {
      "latitude": -6.36231,
      "longitude": 106.83241
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980024",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Huda Airan",
    "coordinates": {
      "latitude": -6.36952,
      "longitude": 106.82269
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980025",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Al-Huda Airan",
    "coordinates": {
      "latitude": -6.36328,
      "longitude": 106.83315
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980026",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ayam Geprek Juara Way Huwi",
    "coordinates": {
      "latitude": -6.35493,
      "longitude": 106.82373
    },
    "description": "Kukusan Kelurahan"
  },
  {
    "id": "poi-ui-depok-n-980027",
    "campusId": "ui-depok",
    "category": "worship",
    "name": "Masjid & Musholla Masjid Istiqomah Way Huwi",
    "coordinates": {
      "latitude": -6.3699,
      "longitude": 106.82054
    },
    "description": "Kukusan Teknik"
  },
  {
    "id": "poi-ui-depok-n-980028",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kafe & Kopi Sudut Tenang Way Huwi",
    "coordinates": {
      "latitude": -6.36972,
      "longitude": 106.83357
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980029",
    "campusId": "ui-depok",
    "category": "food",
    "name": "RM Padang Simpang Tiga Sukarame",
    "coordinates": {
      "latitude": -6.36974,
      "longitude": 106.83545
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980030",
    "campusId": "ui-depok",
    "category": "bus_stop",
    "name": "Halte & Shelter Pangkalan Ojek Senopati",
    "coordinates": {
      "latitude": -6.3697,
      "longitude": 106.83483
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980031",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ayam Geprek Master Airan",
    "coordinates": {
      "latitude": -6.36206,
      "longitude": 106.83204
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980032",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Kafe & Kopi Senja Kopi Sabah Balau",
    "coordinates": {
      "latitude": -6.3637,
      "longitude": 106.8355
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980033",
    "campusId": "ui-depok",
    "category": "convenience",
    "name": "Fotokopi & Percetakan Fotokopi Lapas Raya",
    "coordinates": {
      "latitude": -6.36214,
      "longitude": 106.83228
    },
    "description": "Pondok Cina"
  },
  {
    "id": "poi-ui-depok-n-980034",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Pecel Lele & Bebek Arema Lapas",
    "coordinates": {
      "latitude": -6.36526,
      "longitude": 106.83685
    },
    "description": "Kober"
  },
  {
    "id": "poi-ui-depok-n-980035",
    "campusId": "ui-depok",
    "category": "food",
    "name": "Ayam Geprek Gokil Korpri",
    "coordinates": {
      "latitude": -6.3581,
      "longitude": 106.82164
    },
    "description": "Kukusan Kelurahan"
  }
];

export function getPoisByCampus(campusId: string): readonly PilotPoi[] {
  return PILOT_POIS.filter((poi) => poi.campusId === campusId);
}
