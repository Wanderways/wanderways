import { MapMetaData } from "src/app/shared/utils/interfaces/map-meta-data.interface";

export class MapsType {
    
    public static readonly  MAP_UNDEFINED : MapMetaData = {
        map_identifier : "MAP_UNDEFINED",
        map_country : "undefined",
        map_name :"undefined",
        map_details:"undefined",
        area_identifier:"undefined",
        zone_identifier :"undefined"
    };
    public static readonly  MAP_DEPARTEMENTS_FRANCE : MapMetaData = {
        map_identifier : "MAP_DEPARTEMENTS_FRANCE",
        map_country : "France",
        map_name :"Départements",
        map_details:"Avec DomTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région"
    };

    public static readonly MAP_PREFECTURES_JAPON : MapMetaData = {
        map_identifier : "MAP_PREFECTURES_JAPON",
        map_country : "Japon",
        map_name :"Préfectures",
        map_details:"",
        area_identifier:"Préfecture",
        zone_identifier :"Région"
    };

    public static readonly MAPS_LIST : MapMetaData[] = [
        MapsType.MAP_UNDEFINED,
        MapsType.MAP_DEPARTEMENTS_FRANCE,
        MapsType.MAP_PREFECTURES_JAPON
    ];

    public static isValidType(map_identifier : string) : boolean{
        return MapsType.MAPS_LIST.find(value => value.map_identifier == map_identifier) != undefined;
    }
}