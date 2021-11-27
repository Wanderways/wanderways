import { MapMetaData } from "src/app/shared/utils/interfaces/map-meta-data.interface";

export class MapsType {
    
    public static readonly  MAP_UNDEFINED : MapMetaData = {
        map_country : "undefined",
        map_name :"undefined",
        map_details:"undefined",
        area_identifier:"undefined",
        zone_identifier :"undefined"
    };
    public static readonly  MAP_DEPARTEMENTS_FRANCE : MapMetaData = {
        map_country : "France",
        map_name :"Départements",
        map_details:"Avec DomTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région"
    };

    public static readonly MAP_PREFECTURES_JAPON : MapMetaData = {
        map_country : "Japon",
        map_name :"Préfectures",
        map_details:"",
        area_identifier:"Préfecture",
        zone_identifier :"Région"
    };

    public static readonly LIST_MAPS : MapMetaData[] = [
        MapsType.MAP_UNDEFINED,
        MapsType.MAP_DEPARTEMENTS_FRANCE,
    ];
}