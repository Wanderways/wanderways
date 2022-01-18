import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material.module';

import { MapsGamesModule } from 'src/app/shared/components/maps-games/maps-games.module';
import { MapsModule } from 'src/app/shared/components/maps/maps.module';
import { LogoModule } from '../shared/assets/logo/logo.module';
import { TemplatesModule } from '../shared/components/generic/templates/templates.module';

import { MainPageComponent } from './main-page/main-page.component';
import { MapPageComponent } from './map-page/map-page.component';

// Shared components
import { HeaderComponent } from './header/header.component';
import { GamesModule } from './games/games.module';

const shared_components : any[] = [
  HeaderComponent
];
@NgModule({
  declarations: [
    MainPageComponent,
    MapPageComponent,
    ...shared_components,
  ],
  imports: [
    CommonModule,
    MapsGamesModule,
    MapsModule,
    MaterialModule,
    LogoModule,
    RouterModule,
    FormsModule,
    GamesModule,
    TemplatesModule
  ] ,
  exports:[
    shared_components
  ]
})
export class CoreModule { }
