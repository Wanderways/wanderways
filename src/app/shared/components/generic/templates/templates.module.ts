import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { OrganismsModule } from '../organisms/organisms.module';

import { TimerTrackerComponent } from './timer/timer-tracker.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AreaTableComponent } from './area-table/area-table.component'

const components_list : any[] = [
  TimerTrackerComponent,
  ProgressTrackerComponent,
  AreaTableComponent,
  SnackBarComponent
]

@NgModule({
  declarations: [
    ...components_list
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OrganismsModule
  ],
  exports:[
    ...components_list
  ]
})
export class TemplatesModule { }
