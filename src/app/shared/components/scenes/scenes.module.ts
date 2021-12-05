import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartSceneComponent } from './generic/start-scene/start-scene.component';
import { WonSceneComponent } from './generic/won-scene/won-scene.component';
import { LostSceneComponent } from './generic/lost-scene/lost-scene.component';
import { MaterialModule } from 'src/app/material.module';

let components : any[] = [
  StartSceneComponent,
  WonSceneComponent,
  LostSceneComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],exports: [
    ...components
  ]
})
export class ScenesModule { }
