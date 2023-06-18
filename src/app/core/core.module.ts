import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import {MatRippleModule} from '@angular/material/core';
import { MapsPageComponent } from './maps-page/maps-page.component';
import { RouterModule } from '@angular/router';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { ComponentsModule } from '../shared/components/components.module';
import { TimeTrialComponent } from './games/time-trial/time-trial.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { EndGameComponent } from './games/end-game/end-game.component';
import { MapTileComponent } from '../shared/components/map-tile/map-tile.component';

let components : any[] = [
  HomeComponent,
  MapsPageComponent,
  SightseeingComponent,
  TimeTrialComponent
]

let matModules : any[]=[
  MatRippleModule
]
@NgModule({
  declarations: [
    ...components,
    EndGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MapTileComponent,
    ...matModules
  ]
})
export class CoreModule { }
