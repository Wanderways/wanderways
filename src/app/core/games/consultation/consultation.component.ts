import { Component, OnInit } from '@angular/core';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';
import { GameModeFactory } from 'src/app/shared/utils/interfaces/game-oriented/game-mode-factory.interface';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit, GameModeFactory {

  currentStatus: GameStatus = GameStatus.PLAYING;

  constructor() { }

  ngOnInit(): void {
  }
  bindGameStatus(): void {
    throw new Error('Method not implemented.');
  }
  onStart(): void {
    throw new Error('Method not implemented.');
  }
  onPlaying(): void {
    throw new Error('Method not implemented.');
  }
  onPause(): void {
    throw new Error('Method not implemented.');
  }
  onWon(): void {
    throw new Error('Method not implemented.');
  }
  onLost(): void {
    throw new Error('Method not implemented.');
  }
  onError(): void {
    throw new Error('Method not implemented.');
  }
}
