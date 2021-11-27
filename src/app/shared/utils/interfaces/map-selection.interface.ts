import { GameModeType } from "../types/game-mode.type";
import { MapsType } from "../types/maps.type";

export interface MapSelection{
    map : MapsType,
    game : GameModeType
}