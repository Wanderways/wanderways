import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaTableComponent } from './area-table/area-table.component';
import { MaterialModule } from 'src/app/material.module';

let components : any[] = [
  AreaTableComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ...components
  ]
})
export class DataTableModule { }
