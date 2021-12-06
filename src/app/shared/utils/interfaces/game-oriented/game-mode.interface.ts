/**
 * Class that must be implemented by all game modes.
 * Force the developer to explicitly implement the behaviour of the game mode throughout the game
 */
export interface GameMode{

    /**
     * Function that should implement a basic binding between the gameStatus and the GameStatusService
     */
    bindGameStatus():void;

    /**
     * Implements the behaviour for when the game is ready to be launch
     */
    onStart():void;
    /**
     * Implements the behaviour for when the game is launched
     */
    onPlaying():void;
    /**
     * Implements the behaviour for when the game is on pause
     */
    onPause():void;
    /**
     * Implements the behaviour for when the player won
     */
    onWon():void;
    /**
     * Implements the behaviour for when the player lost
     */
    onLost():void;
    /**
     * Implements the behaviour for when an error occured
     */
    onError():void;
}