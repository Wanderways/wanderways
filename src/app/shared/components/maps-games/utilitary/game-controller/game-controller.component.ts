import { Component, OnInit } from '@angular/core';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit {

    constructor(private gameStatusService : GameStatusService ) {}

    isPaused : boolean = false;

    ngOnInit(): void {
        this.isPaused = ( this.gameStatusService.getGameStatus() == GameStatus.PLAYING );
        this.gameStatusService.getGameStatusChange().subscribe((value)=>{ this.processGameStatusChange(value) })
    }

    /**
     * Process the game status changes, and make the timer act as supposed to
     * @param gameStatus The current game status
     */
    processGameStatusChange(gameStatus : GameStatus) : void{
        this.isPaused = ( gameStatus == GameStatus.PLAYING );
    }

    /**
     * Restart button action
     */
    restartTimer() : void{
        this.gameStatusService.setGameStatus(GameStatus.START);
    }

    /**
     * Pause or unpause the timer
     */
    toggleTimer() : void{
        this.setIsPaused(!this.isPaused);
        this.gameStatusService.setGameStatus(this.isPaused ? GameStatus.PLAYING : GameStatus.PAUSE);
    }

    /**
     * Set the pause status
     * @param isPaused The Pause status, a boolean, true if paused
     */
    setIsPaused(isPaused : boolean) : void{
        this.isPaused = isPaused;
    }
}
