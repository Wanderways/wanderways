import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import {MatRippleModule} from '@angular/material/core';
import { MapsPageComponent } from './maps-page/maps-page.component';
import { RouterModule } from '@angular/router';
import { MapsModule } from '../shared/maps/maps.module';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { ComponentsModule } from '../shared/components/components.module';

let components : any[] = [
  HomeComponent,
  MapsPageComponent,
  SightseeingComponent
]

let matModules : any[]=[
  MatRippleModule
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapsModule,
    ComponentsModule,
    ...matModules
  ]
})
export class CoreModule { }
