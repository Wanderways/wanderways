import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports : [
    MainPageComponent
  ]
})
export class MainPageModule { }
