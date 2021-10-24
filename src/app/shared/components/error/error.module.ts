import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error.component';
import { LogoModule } from '../../assets/logo/logo.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    RouterModule,
    MaterialModule
  ]
})
export class ErrorModule { }
