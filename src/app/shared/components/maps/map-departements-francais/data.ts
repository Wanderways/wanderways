import { Area } from '../../../utils/interfaces/area'

let data : Area[] = [
    {
        "num": "01",
        "name": "Ain",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Bourg-en-Bresse"
    },
    {
        "num": "02",
        "name": "Aisne",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Laon"
    },
    {
        "num": "03",
        "name": "Allier",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Moulins"
    },
    {
        "num": "04",
        "name": "Alpes-de-Haute-Provence",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Digne-les-Bains"
    },
    {
        "num": "05",
        "name": "Hautes-Alpes",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Gap"
    },
    {
        "num": "06",
        "name": "Alpes-Maritimes",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Nice"
    },
    {
        "num": "07",
        "name": "Ardèche",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Privas"
    },
    {
        "num": "08",
        "name": "Ardennes",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Charleville-Mézières"
    },
    {
        "num": "09",
        "name": "Ariège",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Foix"
    },
    {
        "num": "10",
        "name": "Aube",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Troyes"
    },
    {
        "num": "11",
        "name": "Aude",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Carcassonne"
    },
    {
        "num": "12",
        "name": "Aveyron",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Rodez"
    },
    {
        "num": "13",
        "name": "Bouches-du-Rhône",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Marseille"
    },
    {
        "num": "14",
        "name": "Calvados",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Caen"
    },
    {
        "num": "15",
        "name": "Cantal",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Aurillac"
    },
    {
        "num": "16",
        "name": "Charente",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Angoulême"
    },
    {
        "num": "17",
        "name": "Charente-Maritime",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "La Rochelle"
    },
    {
        "num": "18",
        "name": "Cher",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Bourges"
    },
    {
        "num": "19",
        "name": "Corrèze",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Tulle"
    },
    {
        "num": "21",
        "name": "Côte-d'Or",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Dijon"
    },
    {
        "num": "22",
        "name": "Côtes-d'Armor",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Saint-Brieuc"
    },
    {
        "num": "23",
        "name": "Creuse",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Guéret"
    },
    {
        "num": "24",
        "name": "Dordogne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Périgueux"
    },
    {
        "num": "25",
        "name": "Doubs",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Besançon"
    },
    {
        "num": "26",
        "name": "Drôme",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Valence"
    },
    {
        "num": "27",
        "name": "Eure",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Évreux"
    },
    {
        "num": "28",
        "name": "Eure-et-Loir",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Chartres"
    },
    {
        "num": "29",
        "name": "Finistère",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Quimper"
    },
    {
        "num": "2A",
        "name": "Corse-du-Sud",
        "zone" : {
            "name": "Corse"
        },
		"city" : "Ajaccio"
    },
    {
        "num": "2B",
        "name": "Haute-Corse",
        "zone" : {
            "name": "Corse"
        },
		"city" : "Bastia"
    },
    {
        "num": "30",
        "name": "Gard",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Nîmes"
    },
    {
        "num": "31",
        "name": "Haute-Garonne",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Toulouse"
    },
    {
        "num": "32",
        "name": "Gers",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Auch"
    },
    {
        "num": "33",
        "name": "Gironde",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Bordeaux"
    },
    {
        "num": "34",
        "name": "Hérault",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Montpellier"
    },
    {
        "num": "35",
        "name": "Ille-et-Vilaine",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Rennes"
    },
    {
        "num": "36",
        "name": "Indre",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Châteauroux"
    },
    {
        "num": "37",
        "name": "Indre-et-Loire",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Tours"
    },
    {
        "num": "38",
        "name": "Isère",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Grenoble"
    },
    {
        "num": "39",
        "name": "Jura",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Lons-le-Saunier"
    },
    {
        "num": "40",
        "name": "Landes",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Mont-de-Marsan"
    },
    {
        "num": "41",
        "name": "Loir-et-Cher",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Blois"
    },
    {
        "num": "42",
        "name": "Loire",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Saint-Étienne"
    },
    {
        "num": "43",
        "name": "Haute-Loire",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Le Puy-en-Velay"
    },
    {
        "num": "44",
        "name": "Loire-Atlantique",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Nantes"
    },
    {
        "num": "45",
        "name": "Loiret",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Orléans"
    },
    {
        "num": "46",
        "name": "Lot",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Cahors"
    },
    {
        "num": "47",
        "name": "Lot-et-Garonne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Agen"
    },
    {
        "num": "48",
        "name": "Lozère",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Mende"
    },
    {
        "num": "49",
        "name": "Maine-et-Loire",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Angers"
    },
    {
        "num": "50",
        "name": "Manche",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Saint-Lô"
    },
    {
        "num": "51",
        "name": "Marne",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Châlons-en-Champagne"
    },
    {
        "num": "52",
        "name": "Haute-Marne",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Chaumont"
    },
    {
        "num": "53",
        "name": "Mayenne",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Laval"
    },
    {
        "num": "54",
        "name": "Meurthe-et-Moselle",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Nancy"
    },
    {
        "num": "55",
        "name": "Meuse",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Bar-le-Duc"
    },
    {
        "num": "56",
        "name": "Morbihan",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Vannes"
    },
    {
        "num": "57",
        "name": "Moselle",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Metz"
    },
    {
        "num": "58",
        "name": "Nièvre",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Nevers"
    },
    {
        "num": "59",
        "name": "Nord",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Lille"
    },
    {
        "num": "60",
        "name": "Oise",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Beauvais"
    },
    {
        "num": "61",
        "name": "Orne",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Alençon"
    },
    {
        "num": "62",
        "name": "Pas-de-Calais",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Arras"
    },
    {
        "num": "63",
        "name": "Puy-de-Dôme",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Clermont-Ferrand"
    },
    {
        "num": "64",
        "name": "Pyrénées-Atlantiques",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Pau"
    },
    {
        "num": "65",
        "name": "Hautes-Pyrénées",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Tarbes"
    },
    {
        "num": "66",
        "name": "Pyrénées-Orientales",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Perpignan"
    },
    {
        "num": "67",
        "name": "Bas-Rhin",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Strasbourg"
    },
    {
        "num": "68",
        "name": "Haut-Rhin",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Colmar"
    },
    {
        "num": "69",
        "name": "Rhône",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Lyon"
    },
    {
        "num": "70",
        "name": "Haute-Saône",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Vesoul"
    },
    {
        "num": "71",
        "name": "Saône-et-Loire",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Mâcon"
    },
    {
        "num": "72",
        "name": "Sarthe",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Le Mans"
    },
    {
        "num": "73",
        "name": "Savoie",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Chambéry"
    },
    {
        "num": "74",
        "name": "Haute-Savoie",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Annecy"
    },
    {
        "num": "75",
        "name": "Paris",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Paris"
    },
    {
        "num": "76",
        "name": "Seine-Maritime",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Rouen"
    },
    {
        "num": "77",
        "name": "Seine-et-Marne",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Melun"
    },
    {
        "num": "78",
        "name": "Yvelines",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Versailles"
    },
    {
        "num": "79",
        "name": "Deux-Sèvres",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Niort"
    },
    {
        "num": "80",
        "name": "Somme",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Amiens"
    },
    {
        "num": "81",
        "name": "Tarn",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Albi"
    },
    {
        "num": "82",
        "name": "Tarn-et-Garonne",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Montauban"
    },
    {
        "num": "83",
        "name": "Var",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Toulon"
    },
    {
        "num": "84",
        "name": "Vaucluse",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Avignon"
    },
    {
        "num": "85",
        "name": "Vendée",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "La Roche-sur-Yon"
    },
    {
        "num": "86",
        "name": "Vienne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Poitiers"
    },
    {
        "num": "87",
        "name": "Haute-Vienne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Limoges"
    },
    {
        "num": "88",
        "name": "Vosges",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Épinal"
    },
    {
        "num": "89",
        "name": "Yonne",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Auxerre"
    },
    {
        "num": "90",
        "name": "Territoire de Belfort",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Belfort"
    },
    {
        "num": "91",
        "name": "Essonne",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Évry-Courcouronnes"
    },
    {
        "num": "92",
        "name": "Hauts-de-Seine",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Nanterre"
    },
    {
        "num": "93",
        "name": "Seine-Saint-Denis",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Bobigny"
    },
    {
        "num": "94",
        "name": "Val-de-Marne",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Créteil"
    },
    {
        "num": "95",
        "name": "Val-d'Oise",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Cergy"
    }
    ,
    {
        "num": "971",
        "name": "Guadeloupe",
        "zone" : {
            "name": "Guadeloupe"
        },
		"city" : "Basse-Terre"
    },
    {
        "num": "972",
        "name": "Martinique",
        "zone" : {
            "name": "Martinique"
        },
		"city" : "Fort-de-France"
    },
    {
        "num": "973",
        "name": "Guyane",
        "zone" : {
            "name": "Guyane"
        },
		"city" : "Cayenne"
    },
    {
        "num": "974",
        "name": "La Réunion",
        "zone" : {
            "name": "La Réunion"
        },
		"city" : "Saint-Denis"
    },
    {
        "num": "976",
        "name": "Mayotte",
        "zone" : {
            "name": "Mayotte"
        },
		"city" : "Dzaoudzi"
    }
]

export {data};