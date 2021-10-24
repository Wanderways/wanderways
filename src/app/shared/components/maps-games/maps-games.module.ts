import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAreaComponent } from './find-area/find-area.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms'; 


let games : any[] = [
  FindAreaComponent
];

@NgModule({
  declarations: [
    ...games
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    ...games
  ]
})
export class MapsGamesModule { }
