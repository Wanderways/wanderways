import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { ErrorModule } from  './error/error.module';
import { GenericModule } from './generic/generic.module'
import { MapsGamesModule } from './maps-games/maps-games.module';

let child_modules : any[] = [
  ErrorModule,
  GenericModule,
  MapsGamesModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...child_modules
  ],
  exports : [
    ...child_modules
  ]
})
export class ComponentsModule { }
