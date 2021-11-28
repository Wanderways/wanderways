import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';

let child_modules : any[] = [
  ComponentsModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...child_modules
  ],
  exports :[
    ...child_modules
  ]
})
export class SharedModule { }
