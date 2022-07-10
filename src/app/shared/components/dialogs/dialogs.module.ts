import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGamemodeDialogComponent } from './select-gamemode-dialog/select-gamemode-dialog.component';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SelectGamemodeDialogComponent
  ],
  imports: [
    PipesModule,
    CommonModule,
    MatSelectModule, 
    MatRippleModule,
    ReactiveFormsModule
  ],
  exports: [
    SelectGamemodeDialogComponent
  ]
})
export class DialogsModule { }
