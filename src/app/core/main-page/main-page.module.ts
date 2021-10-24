import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { MainPageComponent } from './main-page.component';

import { MapsModule } from 'src/app/shared/assets/maps/maps.module';
import { MapsGamesModule } from 'src/app/shared/components/maps-games/maps-games.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MapsModule,
    MapsGamesModule
  ],
  exports : [
    MainPageComponent
  ]
})
export class MainPageModule { }
