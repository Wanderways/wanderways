import { GameModeType } from "../types/game-mode.type";
import { MapsTypes } from "../types/maps.types";

export interface MapSelection{
    map : MapsTypes,
    game : GameModeType
}