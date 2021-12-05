import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { TimerService } from 'src/app/shared/services/game-mode-specific/timer.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { InputAgainstTimeComponent } from '../../input-against-time.component';

@Component({
  selector: 'app-input-against-time-scene',
  templateUrl: './input-against-time-scene.component.html',
  styleUrls: ['./input-against-time-scene.component.scss']
})
export class InputAgainstTimeSceneComponent extends InputAgainstTimeComponent implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected gameModeMetaDataService : GameModeMetaDataService,
    protected mapMetaDataService : MapMetaDataService,
    protected gameStatusService : GameStatusService,
    protected timerService : TimerService) {
      super(route, router, gameModeMetaDataService, mapMetaDataService,gameStatusService, timerService);
  }

  ngOnInit(): void {
  }

}
