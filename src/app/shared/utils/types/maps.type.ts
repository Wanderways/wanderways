import { MapMetaData } from "src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface";
import { france_data } from "../../components/maps/map-departements-francais/france_data";
import { japan_data } from "../../components/maps/map-prefectures-japon/japan_data";

export class MapsType {
    
    public static readonly  MAP_UNDEFINED : MapMetaData = {
        map_identifier : "MAP_UNDEFINED",
        map_country : "undefined",
        map_name :"undefined",
        map_details:"undefined",
        area_identifier:"undefined",
        zone_identifier :"undefined",
        data:[]
    };
    public static readonly  MAP_DEPARTEMENTS_FRANCE : MapMetaData = {
        map_identifier : "MAP_DEPARTEMENTS_FRANCE",
        map_country : "France",
        map_name :"Départements",
        map_details:"Avec DomTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région",
        data : france_data
    };

    public static readonly MAP_PREFECTURES_JAPON : MapMetaData = {
        map_identifier : "MAP_PREFECTURES_JAPON",
        map_country : "Japon",
        map_name :"Préfectures",
        map_details:"",
        area_identifier:"Préfecture",
        zone_identifier :"Région",
        data:japan_data
    };

    public static readonly MAPS_LIST : MapMetaData[] = [
        MapsType.MAP_DEPARTEMENTS_FRANCE,
        MapsType.MAP_PREFECTURES_JAPON
    ];

    public static isValidType(map_identifier : string) : boolean{
        return MapsType.MAPS_LIST.find(value => value.map_identifier == map_identifier) != undefined;
    }

    /**
     * Allows to get the valid instance of final data from the type identifier
     * @param type_identifier : The type identifier
     * @returns The corresponding type
     */
    public static getTypeFromIdentifier(map_identifier : string) : MapMetaData | undefined {
        return MapsType.MAPS_LIST.find(value => value.map_identifier == map_identifier);
    }
}