import { MapMetadata } from "src/app/shared/services/map-specific/map-meta-data.interface";

export class MapsType {
    public static readonly  MAP_DEPARTEMENTS_FRANCE : MapMetadata = {
        map_name :"Départements Français",
        map_details:"Avec DotTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région"
    };

    public static readonly LIST_MAPS : MapMetadata[] = [
        MapsType.MAP_DEPARTEMENTS_FRANCE
    ];
}