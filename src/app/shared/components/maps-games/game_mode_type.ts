import { GameModeMetadata } from  "../../services/game-specific/game-mode-meta-data.interface";

export class GameModeType{
    
    public static readonly CONSULT_GAME : GameModeMetadata = {
        game_mode_name : "Consultation",
        game_mode_rules : "Consultez librement les données de la carte."
    }
    public static readonly INPUT_GAME : GameModeMetadata = {
        game_mode_name : "Saisie clavier - Contre la montre",
        game_mode_rules : "Tapez l'ensemble des valeurs avant la fin du temps !"
    }

    public static readonly GAME_LISTE : GameModeMetadata[] = [
        GameModeType.CONSULT_GAME,
        GameModeType.INPUT_GAME
    ];
}