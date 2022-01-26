import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MapsGamesModule } from 'src/app/shared/components/maps-games/maps-games.module';
import { MapsModule } from 'src/app/shared/components/maps/maps.module';
import { TemplatesModule } from 'src/app/shared/components/generic/templates/templates.module';
import { AtomsModule } from 'src/app/shared/components/generic/atoms/atoms.module';

import { StartSceneComponent } from './scenes/start-scene/start-scene.component'
import { WonSceneComponent } from './scenes/won-scene/won-scene.component'
import { LostSceneComponent } from './scenes/lost-scene/lost-scene.component'
import { InputAgainstTimeComponent } from './input-against-time.component';
import { InputAgainstTimeSceneComponent } from './scenes/input-against-time-scene/input-against-time-scene.component';

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
    TemplatesModule,
    MapsModule,
    AtomsModule,
    TemplatesModule
  ]
})
export class InputAgainstTimeModule { }
