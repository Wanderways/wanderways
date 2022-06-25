import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGamemodeDialogComponent } from './select-gamemode-dialog/select-gamemode-dialog.component';
import { MapsModule } from '../../maps/maps.module';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
@NgModule({
  declarations: [
    SelectGamemodeDialogComponent
  ],
  imports: [
    CommonModule,
    MapsModule,
    MatSelectModule, 
    MatRippleModule,
    ReactiveFormsModule
  ],
  exports: [
    SelectGamemodeDialogComponent
  ]
})
export class DialogsModule { }
