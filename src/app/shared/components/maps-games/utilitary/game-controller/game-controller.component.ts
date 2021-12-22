import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit {

    constructor() {}

    @Input() gameStatus : GameStatus = GameStatus.PAUSE;
    @Output() gameStatusChange : EventEmitter<GameStatus> = new EventEmitter<GameStatus>();

    isPaused : boolean = true;

    ngOnInit(): void {
    }

    /**
     * Detects input attributes changes and start appropriate attributes onchange function
     * @param changes A change in attributes
     */
    ngOnChanges(changes : SimpleChanges){
        if(changes.gameStatus)this.changeGameStatus(changes.gameStatus.currentValue);
    }

    /**
     * Restart button action
     */
    restartTimer() : void{
        this.changeGameStatus(GameStatus.START);
    }

    /**
     * Give up button action
     */
    giveUp(){
        this.changeGameStatus(GameStatus.LOST);
    }

    /**
     * Pause or unpause the timer
     */
    toggleTimer() : void{
        this.setIsPaused(!this.isPaused);
        this.changeGameStatus(this.isPaused ? GameStatus.PLAYING : GameStatus.PAUSE);
    }

    /**
     * Set the pause status
     * @param isPaused The Pause status, a boolean, true if paused
     */
    setIsPaused(isPaused : boolean) : void{
        this.isPaused = isPaused;
    }

    /**
     * Send an event to parent component with new gameStatus to set
     * @param gameStatus A `GameStatus` instance
     */
    changeGameStatus(gameStatus : GameStatus){
        this.gameStatusChange.emit(gameStatus);
    }
}
