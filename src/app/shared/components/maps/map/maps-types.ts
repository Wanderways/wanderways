import { MapMetaData } from "src/app/shared/utils/interfaces/map-meta-data.interface";

export class MapsTypes {
    
    public static readonly  MAP_UNDEFINED : MapMetaData = {
        map_name :"undefined",
        map_details:"undefined",
        area_identifier:"undefined",
        zone_identifier :"undefined"
    };
    public static readonly  MAP_DEPARTEMENTS_FRANCE : MapMetaData = {
        map_name :"Départements Français",
        map_details:"Avec DomTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région"
    };

    public static readonly MAP_PREFECTURES_JAPON : MapMetaData = MapsTypes.MAP_UNDEFINED;

    public static readonly LIST_MAPS : MapMetaData[] = [
        MapsTypes.MAP_UNDEFINED,
        MapsTypes.MAP_DEPARTEMENTS_FRANCE,
    ];
}