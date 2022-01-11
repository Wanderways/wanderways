import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerComponent } from './tracker/tracker.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    TrackerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    TrackerComponent
  ]
})
export class OrganismsModule { }
