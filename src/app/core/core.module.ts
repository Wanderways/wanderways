import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import {MatRippleModule} from '@angular/material/core';
import { MapsPageComponent } from './maps-page/maps-page.component';
import { RouterModule } from '@angular/router';
import { MapsModule } from '../shared/maps/maps.module';

let components : any[] = [
  HomeComponent,
  MapsPageComponent
]

let matModules : any[]=[
  MatRippleModule
]
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapsModule,
    ...matModules
  ]
})
export class CoreModule { }
