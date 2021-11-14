import { MapMetadata } from "src/app/shared/services/map-specific/map-meta-data.interface";

export class MapsType {
    
    public static readonly  MAP_UNDEFINED : MapMetadata = {
        map_name :"undefined",
        map_details:"undefined",
        area_identifier:"undefined",
        zone_identifier :"undefined"
    };
    public static readonly  MAP_DEPARTEMENTS_FRANCE : MapMetadata = {
        map_name :"Départements Français",
        map_details:"Avec DotTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région"
    };

    public static readonly MAP_PREFECTURES_JAPON : MapMetadata = MapsType.MAP_UNDEFINED;

    public static readonly LIST_MAPS : MapMetadata[] = [
        MapsType.MAP_UNDEFINED,
        MapsType.MAP_DEPARTEMENTS_FRANCE,
    ];
}