import { StringFactory } from 'src/app/shared/utils/factories/string.factory';
import { Area } from '../../../utils/interfaces/map-oriented/area';

let data : Area[] = [
    {
        "iso_3166" : "JP-01",
        "num" : "01",
        "name": " Hokkaidō",
        "zone":{
            "name":"Hokkaidō"
        },
        "city":"Sapporo",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-02",
        "num" : "02",
        "name": " Aomori",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Aomori",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-03",
        "num" : "03",
        "name": " Iwate",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Morioka",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-04",
        "num" : "04",
        "name": " Miyagi",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Sendai",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-05",
        "num" : "05",
        "name": " Akita",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Akita",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-06",
        "num" : "06",
        "name": " Yamagata",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Yamagata",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-07",
        "num" : "07",
        "name": " Fukushima",
        "zone":{
            "name":"Tōhoku"
        },
        "city":"Fukushima",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-08",
        "num" : "08",
        "name": " Ibaraki",
        "zone":{
            "name":"Kantō"
        },
        "city":"Mito",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-09",
        "num" : "09",
        "name": " Tochigi",
        "zone":{
            "name":"Kantō"
        },
        "city":"Utsunomiya",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-10",
        "num" : "10",
        "name": " Gunma",
        "zone":{
            "name":"Kantō"
        },
        "city":"Maebashi",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-11",
        "num" : "11",
        "name": " Saitama",
        "zone":{
            "name":"Kantō"
        },
        "city":"Saitama",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-12",
        "num" : "12",
        "name": " Chiba",
        "zone":{
            "name":"Kantō"
        },
        "city":"Chiba",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-13",
        "num" : "13",
        "name": " Tokyo",
        "zone":{
            "name":"Kantō"
        },
        "city":"Tokyo",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-14",
        "num" : "14",
        "name": " Kanagawa",
        "zone":{
            "name":"Kantō"
        },
        "city":"Yokohama",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-15",
        "num" : "15",
        "name": " Niigata",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Niigata",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-16",
        "num" : "16",
        "name": " Toyama",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Toyama",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-17",
        "num" : "17",
        "name": " Ishikawa",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Kanazawa",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-18",
        "num" : "18",
        "name": " Fukui",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Fukui",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-19",
        "num" : "19",
        "name": " Yamanashi",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Kōfu",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-20",
        "num" : "20",
        "name": " Nagano",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Nagano",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-21",
        "num" : "21",
        "name": " Gifu",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Gifu",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-22",
        "num" : "22",
        "name": " Shizuoka",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Shizuoka",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-23",
        "num" : "23",
        "name": " Aichi",
        "zone":{
            "name":"Chūbu"
        },
        "city":"Nagoya",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-24",
        "num" : "24",
        "name": " Mie",
        "zone":{
            "name":"Kansai"
        },
        "city":"Tsu",
		"logo":{
			"url":"",
			"alt":""
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
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-26",
        "num" : "26",
        "name": " Kyoto",
        "zone":{
            "name":"Kansai"
        },
        "city":"Kyoto",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-27",
        "num" : "27",
        "name": " Osaka",
        "zone":{
            "name":"Kansai"
        },
        "city":"Ōsaka",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-28",
        "num" : "28",
        "name": " Hyōgo",
        "zone":{
            "name":"Kansai"
        },
        "city":"Kōbe",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-29",
        "num" : "29",
        "name": " Nara",
        "zone":{
            "name":"Kansai"
        },
        "city":"Nara",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-30",
        "num" : "30",
        "name": " Wakayama",
        "zone":{
            "name":"Kansai"
        },
        "city":"Wakayama",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-31",
        "num" : "31",
        "name": " Tottori",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Tottori",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-32",
        "num" : "32",
        "name": " Shimane",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Matsue",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-33",
        "num" : "33",
        "name": " Okayama",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Okayama",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-34",
        "num" : "34",
        "name": " Hiroshima",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Hiroshima",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-35",
        "num" : "35",
        "name": " Yamaguchi",
        "zone":{
            "name":"Chūgoku"
        },
        "city":"Yamaguchi",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-36",
        "num" : "36",
        "name": " Tokushima",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Tokushima",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-37",
        "num" : "37",
        "name": " Kagawa",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Takamatsu",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-38",
        "num" : "38",
        "name": " Ehime",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Matsuyama",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-39",
        "num" : "39",
        "name": " Kōchi",
        "zone":{
            "name":"Shikoku"
        },
        "city":"Kōchi",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-40",
        "num" : "40",
        "name": " Fukuoka",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Fukuoka",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-41",
        "num" : "41",
        "name": " Saga",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Saga",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-42",
        "num" : "42",
        "name": " Nagasaki",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Nagasaki",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-43",
        "num" : "43",
        "name": " Kumamoto",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Kumamoto",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-44",
        "num" : "44",
        "name": " Ōita",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Ōita",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-45",
        "num" : "45",
        "name": " Miyazaki",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Miyazaki",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-46",
        "num" : "46",
        "name": " Kagoshima",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Kagoshima",
		"logo":{
			"url":"",
			"alt":""
		}
    },
    {
        "iso_3166" : "JP-47",
        "num" : "47",
        "name": " Okinawa",
        "zone":{
            "name":"Kyūshū"
        },
        "city":"Naha",
		"logo":{
			"url":"",
			"alt":""
		}
    },
];

data.forEach(element => {
    element.logo.url = "https://www.regions-et-departements.fr/images/logos-departements/thumbs/"+element.num+"-logo-"+new StringFactory().replaceSpecialChars(element.name)+".png";
    element.logo.alt = "Logo de "+element.name;
});

export { data };