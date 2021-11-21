import { MapMetaData } from "../interfaces/map-meta-data.interface";

export class MapsTypes {
    MAP_UNDEFINED : MapMetaData = {
        map_name : "undefined",
        map_details:"undefined",
        area_identifier:"undefined",
        zone_identifier :"undefined"
    };
    MAP_DEPARTEMENTS_FRANCE : MapMetaData = {
        map_name :"Départements Français",
        map_details:"Avec DomTom, hors Collectivité d'outre-mer française",
        area_identifier:"Département",
        zone_identifier :"Région"
    };
}