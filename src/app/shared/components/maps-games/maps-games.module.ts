import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAreaComponent } from './find-area/find-area.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms'; 
import { GameControllerComponent } from './utilitary/game-controller/game-controller.component';


let games : any[] = [
  FindAreaComponent,
  GameControllerComponent
];

@NgModule({
  declarations: [
    ...games
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    ...games
  ]
})
export class MapsGamesModule { }
