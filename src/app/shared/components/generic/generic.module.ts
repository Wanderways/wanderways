import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GenericModule { }
