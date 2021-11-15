import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { DataTableModule } from './data-table/data-table.module';
import { MaterialModule } from 'src/app/material.module';
import { TimerComponent } from './timer/timer.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';

let components : any[]= [
  SnackBarComponent,
  TimerComponent,
  ProgressTrackerComponent
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    DataTableModule,
    MaterialModule
  ],
  exports : [
    components
  ]
})
export class GenericModule { }
