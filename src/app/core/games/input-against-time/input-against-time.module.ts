import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAgainstTimeComponent } from './input-against-time.component';
import { InputAgainstTimeSceneComponent } from './scenes/input-against-time-scene/input-against-time-scene.component';
import { MaterialModule } from 'src/app/material.module';
import { MapsGamesModule } from 'src/app/shared/components/maps-games/maps-games.module';
import { DataTableModule } from 'src/app/shared/components/generic/data-table/data-table.module';
import { GenericModule } from 'src/app/shared/components/generic/generic.module';
import { MapsModule } from 'src/app/shared/components/maps/maps.module';
import { StartSceneComponent } from './scenes/start-scene/start-scene.component'
import { WonSceneComponent } from './scenes/won-scene/won-scene.component'
import { LostSceneComponent } from './scenes/lost-scene/lost-scene.component'


let components : any[] = [
  InputAgainstTimeComponent,
  InputAgainstTimeSceneComponent,
  StartSceneComponent,
  WonSceneComponent,
  LostSceneComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MapsGamesModule,
    DataTableModule,
    MaterialModule,
    GenericModule,
    MapsModule
  ],exports:[
    ...components
  ]
})
export class InputAgainstTimeModule { }
