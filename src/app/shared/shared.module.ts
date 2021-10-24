import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';

let child_modules : any[] = [
  ComponentsModule,
  DirectivesModule
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
