import { StringFactory } from 'src/app/shared/utils/factories/string.factory';
import { Area } from '../../../utils/interfaces/map-oriented/area'

let data : Area[] = [
    {
        "iso_3166" : "FR-01",
        "num": "01",
        "name": "Ain",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Bourg-en-Bresse",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "	FR-02",
        "num": "02",
        "name": "Aisne",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Laon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-03",
        "num": "03",
        "name": "Allier",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Moulins",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-04",
        "num": "04",
        "name": "Alpes-de-Haute-Provence",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Digne-les-Bains",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-04",
        "num": "05",
        "name": "Hautes-Alpes",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Gap",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-06",
        "num": "06",
        "name": "Alpes-Maritimes",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Nice",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-07",
        "num": "07",
        "name": "Ardèche",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Privas",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-08",
        "num": "08",
        "name": "Ardennes",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Charleville-Mézières",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-09",
        "num": "09",
        "name": "Ariège",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Foix",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-10",
        "num": "10",
        "name": "Aube",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Troyes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-11",
        "num": "11",
        "name": "Aude",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Carcassonne",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-12",
        "num": "12",
        "name": "Aveyron",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Rodez",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-13",
        "num": "13",
        "name": "Bouches-du-Rhône",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Marseille",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-14",
        "num": "14",
        "name": "Calvados",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Caen",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-15",
        "num": "15",
        "name": "Cantal",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Aurillac",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-16",
        "num": "16",
        "name": "Charente",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Angoulême",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-17",
        "num": "17",
        "name": "Charente-Maritime",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "La Rochelle",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-18",
        "num": "18",
        "name": "Cher",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Bourges",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-19",
        "num": "19",
        "name": "Corrèze",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Tulle",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-21",
        "num": "21",
        "name": "Côte-d'Or",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Dijon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-22",
        "num": "22",
        "name": "Côtes-d'Armor",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Saint-Brieuc",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-23",
        "num": "23",
        "name": "Creuse",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Guéret",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-24",
        "num": "24",
        "name": "Dordogne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Périgueux",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-25",
        "num": "25",
        "name": "Doubs",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Besançon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-26",
        "num": "26",
        "name": "Drôme",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Valence",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-27",
        "num": "27",
        "name": "Eure",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Évreux",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-28",
        "num": "28",
        "name": "Eure-et-Loir",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Chartres",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-29",
        "num": "29",
        "name": "Finistère",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Quimper",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-2A",
        "num": "2A",
        "name": "Corse-du-Sud",
        "zone" : {
            "name": "Corse"
        },
		"city" : "Ajaccio",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-2B",
        "num": "2B",
        "name": "Haute-Corse",
        "zone" : {
            "name": "Corse"
        },
		"city" : "Bastia",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-30",
        "num": "30",
        "name": "Gard",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Nîmes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-31",
        "num": "31",
        "name": "Haute-Garonne",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Toulouse",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-32",
        "num": "32",
        "name": "Gers",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Auch",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-33",
        "num": "33",
        "name": "Gironde",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Bordeaux",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-34",
        "num": "34",
        "name": "Hérault",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Montpellier",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-35",
        "num": "35",
        "name": "Ille-et-Vilaine",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Rennes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-36",
        "num": "36",
        "name": "Indre",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Châteauroux",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-37",
        "num": "37",
        "name": "Indre-et-Loire",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Tours",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-38",
        "num": "38",
        "name": "Isère",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Grenoble",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-39",
        "num": "39",
        "name": "Jura",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Lons-le-Saunier",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-40",
        "num": "40",
        "name": "Landes",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Mont-de-Marsan",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-41",
        "num": "41",
        "name": "Loir-et-Cher",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Blois",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-42",
        "num": "42",
        "name": "Loire",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Saint-Étienne",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-43",
        "num": "43",
        "name": "Haute-Loire",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Le Puy-en-Velay",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-44",
        "num": "44",
        "name": "Loire-Atlantique",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Nantes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-45",
        "num": "45",
        "name": "Loiret",
        "zone" : {
            "name": "Centre-Val de Loire"
        },
		"city" : "Orléans",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-46",
        "num": "46",
        "name": "Lot",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Cahors",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-47",
        "num": "47",
        "name": "Lot-et-Garonne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Agen",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-48",
        "num": "48",
        "name": "Lozère",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Mende",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-49",
        "num": "49",
        "name": "Maine-et-Loire",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Angers",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-50",
        "num": "50",
        "name": "Manche",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Saint-Lô",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-51",
        "num": "51",
        "name": "Marne",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Châlons-en-Champagne",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-52",
        "num": "52",
        "name": "Haute-Marne",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Chaumont",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-53",
        "num": "53",
        "name": "Mayenne",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Laval",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-54",
        "num": "54",
        "name": "Meurthe-et-Moselle",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Nancy",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-55",
        "num": "55",
        "name": "Meuse",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Bar-le-Duc",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-56",
        "num": "56",
        "name": "Morbihan",
        "zone" : {
            "name": "Bretagne"
        },
		"city" : "Vannes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-57",
        "num": "57",
        "name": "Moselle",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Metz",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-58",
        "num": "58",
        "name": "Nièvre",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Nevers",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-59",
        "num": "59",
        "name": "Nord",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Lille",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-60",
        "num": "60",
        "name": "Oise",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Beauvais",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-61",
        "num": "61",
        "name": "Orne",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Alençon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-62",
        "num": "62",
        "name": "Pas-de-Calais",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Arras",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-63",
        "num": "63",
        "name": "Puy-de-Dôme",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Clermont-Ferrand",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-64",
        "num": "64",
        "name": "Pyrénées-Atlantiques",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Pau",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-65",
        "num": "65",
        "name": "Hautes-Pyrénées",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Tarbes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-66",
        "num": "66",
        "name": "Pyrénées-Orientales",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Perpignan",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-67",
        "num": "67",
        "name": "Bas-Rhin",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Strasbourg",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-68",
        "num": "68",
        "name": "Haut-Rhin",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Colmar",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-69",
        "num": "69",
        "name": "Rhône",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Lyon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-70",
        "num": "70",
        "name": "Haute-Saône",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Vesoul",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-71",
        "num": "71",
        "name": "Saône-et-Loire",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Mâcon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-72",
        "num": "72",
        "name": "Sarthe",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "Le Mans",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-73",
        "num": "73",
        "name": "Savoie",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Chambéry",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-74",
        "num": "74",
        "name": "Haute-Savoie",
        "zone" : {
            "name": "Auvergne-Rhône-Alpes"
        },
		"city" : "Annecy",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-75",
        "num": "75",
        "name": "Paris",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Paris",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-76",
        "num": "76",
        "name": "Seine-Maritime",
        "zone" : {
            "name": "Normandie"
        },
		"city" : "Rouen",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-77",
        "num": "77",
        "name": "Seine-et-Marne",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Melun",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-78",
        "num": "78",
        "name": "Yvelines",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Versailles",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-79",
        "num": "79",
        "name": "Deux-Sèvres",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Niort",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-80",
        "num": "80",
        "name": "Somme",
        "zone" : {
            "name": "Hauts-de-France"
        },
		"city" : "Amiens",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-81",
        "num": "81",
        "name": "Tarn",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Albi",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-82",
        "num": "82",
        "name": "Tarn-et-Garonne",
        "zone" : {
            "name": "Occitanie"
        },
		"city" : "Montauban",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-83",
        "num": "83",
        "name": "Var",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Toulon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-84",
        "num": "84",
        "name": "Vaucluse",
        "zone" : {
            "name": "Provence-Alpes-Côte d'Azur"
        },
		"city" : "Avignon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-85",
        "num": "85",
        "name": "Vendée",
        "zone" : {
            "name": "Pays de la Loire"
        },
		"city" : "La Roche-sur-Yon",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-86",
        "num": "86",
        "name": "Vienne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Poitiers",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-87",
        "num": "87",
        "name": "Haute-Vienne",
        "zone" : {
            "name": "Nouvelle-Aquitaine"
        },
		"city" : "Limoges",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-88",
        "num": "88",
        "name": "Vosges",
        "zone" : {
            "name": "Grand Est"
        },
		"city" : "Épinal",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-89",
        "num": "89",
        "name": "Yonne",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Auxerre",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-90",
        "num": "90",
        "name": "Territoire de Belfort",
        "zone" : {
            "name": "Bourgogne-Franche-Comté"
        },
		"city" : "Belfort",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-91",
        "num": "91",
        "name": "Essonne",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Évry-Courcouronnes",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-92",
        "num": "92",
        "name": "Hauts-de-Seine",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Nanterre",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-93",
        "num": "93",
        "name": "Seine-Saint-Denis",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Bobigny",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-94",
        "num": "94",
        "name": "Val-de-Marne",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Créteil",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-95",
        "num": "95",
        "name": "Val-d'Oise",
        "zone" : {
            "name": "Île-de-France"
        },
		"city" : "Cergy",
		"logo":{
			"url":"",
			"alt":""
		}
    }
    ,
    {
        "iso_3166" : "FR-971",
        "num": "971",
        "name": "Guadeloupe",
        "zone" : {
            "name": "Guadeloupe"
        },
		"city" : "Basse-Terre",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-972",
        "num": "972",
        "name": "Martinique",
        "zone" : {
            "name": "Martinique"
        },
		"city" : "Fort-de-France",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-973",
        "num": "973",
        "name": "Guyane",
        "zone" : {
            "name": "Guyane"
        },
		"city" : "Cayenne",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-974",
        "num": "974",
        "name": "La Réunion",
        "zone" : {
            "name": "La Réunion"
        },
		"city" : "Saint-Denis",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "FR-976",
        "num": "976",
        "name": "Mayotte",
        "zone" : {
            "name": "Mayotte"
        },
		"city" : "Dzaoudzi",
		"logo":{
			"url":"",
			"alt":""
		}
    }
]

data.forEach(element => {
    element.logo.url = "https://www.regions-et-departements.fr/images/logos-departements/thumbs/"+element.num+"-logo-"+new StringFactory().replaceSpecialChars(element.name)+".png";
    element.logo.alt = "Logo de "+element.name;
});

export {data};