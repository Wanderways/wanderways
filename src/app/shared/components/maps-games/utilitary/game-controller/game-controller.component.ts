import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/shared/services/game-mode-specific/timer.service';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit {

    constructor(private timerService : TimerService) {}

    ngOnInit(): void {
    }

    restartTimer(){
        this.timerService.resetTimer();
    }
    pauseTimer(){
        this.timerService.pauseTimer();
    }

    startTimer(){
        this.timerService.startTimer();
    }

}
