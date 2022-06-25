import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGamemodeDialogComponent } from './select-gamemode-dialog/select-gamemode-dialog.component';
import { MapsModule } from '../maps/maps.module';



@NgModule({
  declarations: [
    SelectGamemodeDialogComponent
  ],
  imports: [
    CommonModule,
    MapsModule
  ],
  exports:[
    SelectGamemodeDialogComponent
  ]
})
export class DialogsModule { }
