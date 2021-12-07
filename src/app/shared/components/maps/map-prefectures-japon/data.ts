import { StringFactory } from 'src/app/shared/utils/factories/string.factory';
import { Area } from '../../../utils/interfaces/map-oriented/area';

let data : Area[] = [
    {
        "iso_3166" : "JP-01",
        "num" : "01",
        "name": "Hokkaidō",
        "zone":{
            "name":"Hokkaidō"
        },
        "city":"Sapporo",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Hokkaido_Prefecture.svg",
			"alt":"Logo de la préfecture Hokkaidō"
		}
    },
    {
        "iso_3166" : "JP-02",
        "num" : "02",
        "name": "Aomori",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Aomori",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Aomori_Prefecture.svg",
			"alt":"Logo de la préfecture Aomori"
		}
    },
    {
        "iso_3166" : "JP-03",
        "num" : "03",
        "name": "Iwate",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Morioka",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Iwate_Prefecture.svg",
			"alt":"Logo de la préfecture Iwate"
		}
    },
    {
        "iso_3166" : "JP-04",
        "num" : "04",
        "name": "Miyagi",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Sendai",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Miyagi_Prefecture.svg",
			"alt":"Logo de la préfecture Miyagi"
		}
    },
    {
        "iso_3166" : "JP-05",
        "num" : "05",
        "name": "Akita",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Akita",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Akita_Prefecture.svg",
			"alt":"Logo de la préfecture Akita"
		}
    },
    {
        "iso_3166" : "JP-06",
        "num" : "06",
        "name": "Yamagata",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Yamagata",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/a/a1/Flag_of_Yamagata_Prefecture.svg",
			"alt":"Logo de la préfecture Yamagata"
		}
    },
    {
        "iso_3166" : "JP-07",
        "num" : "07",
        "name": "Fukushima",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Fukushima",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Fukushima_Prefecture.svg",
			"alt":"Logo de la préfecture Fukushima"
		}
    },
    {
        "iso_3166" : "JP-08",
        "num" : "08",
        "name": "Ibaraki",
        "zone":{
            "name":"Kantō"
        },
        "city":"Mito",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_Ibaraki_Prefecture.svg",
			"alt":"Logo de la préfecture Ibaraki"
		}
    },
    {
        "iso_3166" : "JP-09",
        "num" : "09",
        "name": "Tochigi",
        "zone":{
            "name":"Kantō"
        },
        "city":"Utsunomiya",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/d/d5/Flag_of_Tochigi_Prefecture.svg",
			"alt":"Logo de la préfecture Tochigi"
		}
    },
    {
        "iso_3166" : "JP-10",
        "num" : "10",
        "name": "Gunma",
        "zone":{
            "name":"Kantō"
        },
        "city":"Maebashi",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Gunma_Prefecture.svg",
			"alt":"Logo de la préfecture Gunma"
		}
    },
    {
        "iso_3166" : "JP-11",
        "num" : "11",
        "name": "Saitama",
        "zone":{
            "name":"Kantō"
        },
        "city":"Saitama",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Saitama_Prefecture.svg",
			"alt":"Logo de la préfecture Saitama"
		}
    },
    {
        "iso_3166" : "JP-12",
        "num" : "12",
        "name": "Chiba",
        "zone":{
            "name":"Kantō"
        },
        "city":"Chiba",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Chiba_Prefecture.svg",
			"alt":"Logo de la préfecture Chiba"
		}
    },
    {
        "iso_3166" : "JP-13",
        "num" : "13",
        "name": "Tokyo",
        "zone":{
            "name":"Kantō"
        },
        "city":"Tokyo",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Tokyo_Metropolis.svg",
			"alt":"Logo de la préfecture Tokyo"
		}
    },
    {
        "iso_3166" : "JP-14",
        "num" : "14",
        "name": "Kanagawa",
        "zone":{
            "name":"Kantō"
        },
        "city":"Yokohama",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_Kanagawa_Prefecture.svg",
			"alt":"Logo de la préfecture Kanagawa"
		}
    },
    {
        "iso_3166" : "JP-15",
        "num" : "15",
        "name": "Niigata",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Niigata",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Niigata_Prefecture.svg",
			"alt":"Logo de la préfecture Niigata"
		}
    },
    {
        "iso_3166" : "JP-16",
        "num" : "16",
        "name": "Toyama",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Toyama",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_Toyama_Prefecture.svg",
			"alt":"Logo de la préfecture Toyama"
		}
    },
    {
        "iso_3166" : "JP-17",
        "num" : "17",
        "name": "Ishikawa",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Kanazawa",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Ishikawa_Prefecture.svg",
			"alt":"Logo de la préfecture Ishikawa"
		}
    },
    {
        "iso_3166" : "JP-18",
        "num" : "18",
        "name": "Fukui",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Fukui",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Fukui_Prefecture.svg",
			"alt":"Logo de la préfecture Fukui"
		}
    },
    {
        "iso_3166" : "JP-19",
        "num" : "19",
        "name": "Yamanashi",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Kōfu",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Yamanashi_Prefecture.svg",
			"alt":"Logo de la préfecture Yamanashi"
		}
    },
    {
        "iso_3166" : "JP-20",
        "num" : "20",
        "name": "Nagano",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Nagano",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Nagano_Prefecture.svg",
			"alt":"Logo de la préfecture Nagano"
		}
    },
    {
        "iso_3166" : "JP-21",
        "num" : "21",
        "name": "Gifu",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Gifu",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_Gifu_Prefecture.svg",
			"alt":"Logo de la préfecture Gifu"
		}
    },
    {
        "iso_3166" : "JP-22",
        "num" : "22",
        "name": "Shizuoka",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Shizuoka",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Shizuoka_Prefecture.svg",
			"alt":"Logo de la préfecture Shizuoka"
		}
    },
    {
        "iso_3166" : "JP-23",
        "num" : "23",
        "name": "Aichi",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Nagoya",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Aichi_Prefecture.svg",
			"alt":"Logo de la préfecture Aichi"
		}
    },
    {
        "iso_3166" : "JP-24",
        "num" : "24",
        "name": "Mie",
        "zone":{
            "name":"Kansai"
        },
        "city":"Tsu",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Mie_Prefecture.svg",
			"alt":"Logo de la préfecture Mie"
		}
    },
    {
        "iso_3166" : "JP-25",
        "num" : "25",
        "name": "Shiga",
        "zone":{
            "name":"Kansai"
        },
        "city":"Ōtsu",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Shiga_Prefecture.svg",
			"alt":"Logo de la préfecture Shiga"
		}
    },
    {
        "iso_3166" : "JP-26",
        "num" : "26",
        "name": "Kyoto",
        "zone":{
            "name":"Kansai"
        },
        "city":"Kyoto",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Kyoto_Prefecture.svg",
			"alt":"Logo de la préfecture Kyoto"
		}
    },
    {
        "iso_3166" : "JP-27",
        "num" : "27",
        "name": "Osaka",
        "zone":{
            "name":"Kansai"
        },
        "city":"Ōsaka",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Osaka_Prefecture.svg",
			"alt":"Logo de la préfecture Osaka"
		}
    },
    {
        "iso_3166" : "JP-28",
        "num" : "28",
        "name": "Hyōgo",
        "zone":{
            "name":"Kansai"
        },
        "city":"Kōbe",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Hyogo_Prefecture.svg",
			"alt":"Logo de la préfecture Hyōgo"
		}
    },
    {
        "iso_3166" : "JP-29",
        "num" : "29",
        "name": "Nara",
        "zone":{
            "name":"Kansai"
        },
        "city":"Nara",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Nara_Prefecture.svg",
			"alt":"Logo de la préfecture Nara"
		}
    },
    {
        "iso_3166" : "JP-30",
        "num" : "30",
        "name": "Wakayama",
        "zone":{
            "name":"Kansai"
        },
        "city":"Wakayama",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Wakayama_Prefecture.svg",
			"alt":"Logo de la préfecture Wakayama"
		}
    },
    {
        "iso_3166" : "JP-31",
        "num" : "31",
        "name": "Tottori",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Tottori",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Tottori_Prefecture.svg",
			"alt":"Logo de la préfecture Tottori"
		}
    },
    {
        "iso_3166" : "JP-32",
        "num" : "32",
        "name": "Shimane",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Matsue",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Shimane_Prefecture.svg",
			"alt":"Logo de la préfecture Shimane"
		}
    },
    {
        "iso_3166" : "JP-33",
        "num" : "33",
        "name": "Okayama",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Okayama",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/3/33/Flag_of_Okayama_Prefecture.svg",
			"alt":"Logo de la préfecture Okayama"
		}
    },
    {
        "iso_3166" : "JP-34",
        "num" : "34",
        "name": "Hiroshima",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Hiroshima",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Hiroshima_Prefecture.svg",
			"alt":"Logo de la préfecture Hiroshima"
		}
    },
    {
        "iso_3166" : "JP-35",
        "num" : "35",
        "name": "Yamaguchi",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Yamaguchi",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Yamaguchi_Prefecture.svg",
			"alt":"Logo de la préfecture Yamaguchi"
		}
    },
    {
        "iso_3166" : "JP-36",
        "num" : "36",
        "name": "Tokushima",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Tokushima",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Tokushima_Prefecture.svg",
			"alt":"Logo de la préfecture Tokushima"
		}
    },
    {
        "iso_3166" : "JP-37",
        "num" : "37",
        "name": "Kagawa",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Takamatsu",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Kagawa_Prefecture.svg",
			"alt":"Logo de la préfecture Kagawa"
		}
    },
    {
        "iso_3166" : "JP-38",
        "num" : "38",
        "name": "Ehime",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Matsuyama",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_Ehime_Prefecture.svg",
			"alt":"Logo de la préfecture Ehime"
		}
    },
    {
        "iso_3166" : "JP-39",
        "num" : "39",
        "name": "Kōchi",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Kōchi",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Kochi_Prefecture.svg",
			"alt":"Logo de la préfecture Kōchi"
		}
    },
    {
        "iso_3166" : "JP-40",
        "num" : "40",
        "name": "Fukuoka",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Fukuoka",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Fukuoka_Prefecture.svg",
			"alt":"Logo de la préfecture Fukuoka"
		}
    },
    {
        "iso_3166" : "JP-41",
        "num" : "41",
        "name": "Saga",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Saga",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_Saga_Prefecture.svg",
			"alt":"Logo de la préfecture Saga"
		}
    },
    {
        "iso_3166" : "JP-42",
        "num" : "42",
        "name": "Nagasaki",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Nagasaki",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Nagasaki_Prefecture.svg",
			"alt":"Logo de la préfecture Nagasaki"
		}
    },
    {
        "iso_3166" : "JP-43",
        "num" : "43",
        "name": "Kumamoto",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Kumamoto",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Kumamoto_Prefecture.svg",
			"alt":"Logo de la préfecture Kumamoto"
		}
    },
    {
        "iso_3166" : "JP-44",
        "num" : "44",
        "name": "Ōita",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Ōita",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Oita_Prefecture.svg",
			"alt":"Logo de la préfecture Ōita"
		}
    },
    {
        "iso_3166" : "JP-45",
        "num" : "45",
        "name": "Miyazaki",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Miyazaki",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Miyazaki_Prefecture.svg",
			"alt":"Logo de la préfecture Miyazaki"
		}
    },
    {
        "iso_3166" : "JP-46",
        "num" : "46",
        "name": "Kagoshima",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Kagoshima",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/c/c5/Flag_of_Kagoshima_Prefecture.svg",
			"alt":"Logo de la préfecture Kagoshima"
		}
    },
    {
        "iso_3166" : "JP-47",
        "num" : "47",
        "name": "Okinawa",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Naha",
		"logo":{
			"url":"https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Okinawa_Prefecture.svg",
			"alt":"Logo de la préfecture Okinawa"
		}
    },
];

export { data };