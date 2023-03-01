import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGamemodeDialogComponent } from './select-gamemode-dialog/select-gamemode-dialog.component';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { I18nPipe } from '../../pipes/i18n.pipe';

@NgModule({
  declarations: [
    SelectGamemodeDialogComponent
  ],
  imports: [
    I18nPipe,
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
