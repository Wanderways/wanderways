import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { ErrorModule } from  './error/error.module';
import { MapsGamesModule } from './maps-games/maps-games.module';
import { TemplatesModule } from './generic/templates/templates.module';

let child_modules : any[] = [
  ErrorModule,
  MapsGamesModule,
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    ...child_modules
  ],
  exports : [
    ...child_modules
  ]
})
export class ComponentsModule { }