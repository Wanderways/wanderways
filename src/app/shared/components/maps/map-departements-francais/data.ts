import { Area } from './interfaces/area'

let data : Area[] = [
    {
        "num": "01",
        "name": "Ain",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
        
    },
    {
        "num": "02",
        "name": "Aisne",
        "zone" : {
            "name": "Hauts-de-France"
        }
    },
    {
        "num": "03",
        "name": "Allier",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "04",
        "name": "Alpes-de-Haute-Provence",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        }
    },
    {
        "num": "05",
        "name": "Hautes-Alpes",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        }
    },
    {
        "num": "06",
        "name": "Alpes-Maritimes",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        }
    },
    {
        "num": "07",
        "name": "Ardèche",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "08",
        "name": "Ardennes",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "09",
        "name": "Ariège",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "10",
        "name": "Aube",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "11",
        "name": "Aude",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "12",
        "name": "Aveyron",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "13",
        "name": "Bouches-du-Rhône",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        }
    },
    {
        "num": "14",
        "name": "Calvados",
        "zone" : {
            "name": "Normandie"
        }
    },
    {
        "num": "15",
        "name": "Cantal",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "16",
        "name": "Charente",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "17",
        "name": "Charente-Maritime",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "18",
        "name": "Cher",
        "zone" : {
            "name": "Centre-Val de Loire"
        }
    },
    {
        "num": "19",
        "name": "Corrèze",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "21",
        "name": "Côte-d'Or",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "22",
        "name": "Côtes-d'Armor",
        "zone" : {
            "name": "Bretagne"
        }
    },
    {
        "num": "23",
        "name": "Creuse",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "24",
        "name": "Dordogne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "25",
        "name": "Doubs",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "26",
        "name": "Drôme",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "27",
        "name": "Eure",
        "zone" : {
            "name": "Normandie"
        }
    },
    {
        "num": "28",
        "name": "Eure-et-Loir",
        "zone" : {
            "name": "Centre-Val de Loire"
        }
    },
    {
        "num": "29",
        "name": "Finistère",
        "zone" : {
            "name": "Bretagne"
        }
    },
    {
        "num": "2A",
        "name": "Corse-du-Sud",
        "zone" : {
            "name": "Corse"
        }
    },
    {
        "num": "2B",
        "name": "Haute-Corse",
        "zone" : {
            "name": "Corse"
        }
    },
    {
        "num": "30",
        "name": "Gard",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "31",
        "name": "Haute-Garonne",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "32",
        "name": "Gers",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "33",
        "name": "Gironde",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "34",
        "name": "Hérault",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "35",
        "name": "Ille-et-Vilaine",
        "zone" : {
            "name": "Bretagne"
        }
    },
    {
        "num": "36",
        "name": "Indre",
        "zone" : {
            "name": "Centre-Val de Loire"
        }
    },
    {
        "num": "37",
        "name": "Indre-et-Loire",
        "zone" : {
            "name": "Centre-Val de Loire"
        }
    },
    {
        "num": "38",
        "name": "Isère",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "39",
        "name": "Jura",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "40",
        "name": "Landes",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "41",
        "name": "Loir-et-Cher",
        "zone" : {
            "name": "Centre-Val de Loire"
        }
    },
    {
        "num": "42",
        "name": "Loire",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "43",
        "name": "Haute-Loire",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "44",
        "name": "Loire-Atlantique",
        "zone" : {
            "name": "Pays de la Loire"
        }
    },
    {
        "num": "45",
        "name": "Loiret",
        "zone" : {
            "name": "Centre-Val de Loire"
        }
    },
    {
        "num": "46",
        "name": "Lot",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "47",
        "name": "Lot-et-Garonne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "48",
        "name": "Lozère",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "49",
        "name": "Maine-et-Loire",
        "zone" : {
            "name": "Pays de la Loire"
        }
    },
    {
        "num": "50",
        "name": "Manche",
        "zone" : {
            "name": "Normandie"
        }
    },
    {
        "num": "51",
        "name": "Marne",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "52",
        "name": "Haute-Marne",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "53",
        "name": "Mayenne",
        "zone" : {
            "name": "Pays de la Loire"
        }
    },
    {
        "num": "54",
        "name": "Meurthe-et-Moselle",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "55",
        "name": "Meuse",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "56",
        "name": "Morbihan",
        "zone" : {
            "name": "Bretagne"
        }
    },
    {
        "num": "57",
        "name": "Moselle",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "58",
        "name": "Nièvre",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "59",
        "name": "Nord",
        "zone" : {
            "name": "Hauts-de-France"
        }
    },
    {
        "num": "60",
        "name": "Oise",
        "zone" : {
            "name": "Hauts-de-France"
        }
    },
    {
        "num": "61",
        "name": "Orne",
        "zone" : {
            "name": "Normandie"
        }
    },
    {
        "num": "62",
        "name": "Pas-de-Calais",
        "zone" : {
            "name": "Hauts-de-France"
        }
    },
    {
        "num": "63",
        "name": "Puy-de-Dôme",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "64",
        "name": "Pyrénées-Atlantiques",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "65",
        "name": "Hautes-Pyrénées",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "66",
        "name": "Pyrénées-Orientales",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "67",
        "name": "Bas-Rhin",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "68",
        "name": "Haut-Rhin",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "69",
        "name": "Rhône",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "70",
        "name": "Haute-Saône",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "71",
        "name": "Saône-et-Loire",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "72",
        "name": "Sarthe",
        "zone" : {
            "name": "Pays de la Loire"
        }
    },
    {
        "num": "73",
        "name": "Savoie",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "74",
        "name": "Haute-Savoie",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        }
    },
    {
        "num": "75",
        "name": "Paris",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "76",
        "name": "Seine-Maritime",
        "zone" : {
            "name": "Normandie"
        }
    },
    {
        "num": "77",
        "name": "Seine-et-Marne",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "78",
        "name": "Yvelines",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "79",
        "name": "Deux-Sèvres",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "80",
        "name": "Somme",
        "zone" : {
            "name": "Hauts-de-France"
        }
    },
    {
        "num": "81",
        "name": "Tarn",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "82",
        "name": "Tarn-et-Garonne",
        "zone" : {
            "name": "Occitanie"
        }
    },
    {
        "num": "83",
        "name": "Var",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        }
    },
    {
        "num": "84",
        "name": "Vaucluse",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        }
    },
    {
        "num": "85",
        "name": "Vendée",
        "zone" : {
            "name": "Pays de la Loire"
        }
    },
    {
        "num": "86",
        "name": "Vienne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "87",
        "name": "Haute-Vienne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        }
    },
    {
        "num": "88",
        "name": "Vosges",
        "zone" : {
            "name": "Grand Est"
        }
    },
    {
        "num": "89",
        "name": "Yonne",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "90",
        "name": "Territoire de Belfort",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        }
    },
    {
        "num": "91",
        "name": "Essonne",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "92",
        "name": "Hauts-de-Seine",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "93",
        "name": "Seine-Saint-Denis",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "94",
        "name": "Val-de-Marne",
        "zone" : {
            "name": "Île-de-France"
        }
    },
    {
        "num": "95",
        "name": "Val-d'Oise",
        "zone" : {
            "name": "Île-de-France"
        }
    }
    ,
    {
        "num": "971",
        "name": "Guadeloupe",
        "zone" : {
            "name": "Guadeloupe"
        }
    },
    {
        "num": "972",
        "name": "Martinique",
        "zone" : {
            "name": "Martinique"
        }
    },
    {
        "num": "973",
        "name": "Guyane",
        "zone" : {
            "name": "Guyane"
        }
    },
    {
        "num": "974",
        "name": "La Réunion",
        "zone" : {
            "name": "La Réunion"
        }
    },
    {
        "num": "976",
        "name": "Mayotte",
        "zone" : {
            "name": "Mayotte"
        }
    }
]

export {data};