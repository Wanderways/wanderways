import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/shared/services/game-mode-specific/timer.service';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit {

    constructor(private gameStatusService :GameStatusService) {}

    isPaused : boolean = false;

    ngOnInit(): void {
    }

    restartTimer(){
        this.gameStatusService.setGameStatus(GameStatus.START);
    }

    toggleTimer(){
        
        this.isPaused = !this.isPaused;
        this.setIsPaused(this.isPaused);
        this.gameStatusService.setGameStatus(this.isPaused ? GameStatus.PLAYING : GameStatus.PAUSE);
    }

    setIsPaused(isPaused : boolean){
        this.isPaused = isPaused;
    }
}
