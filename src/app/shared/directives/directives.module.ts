import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGameDirective } from './input-game.directive';
import { DepartementsFrancaisDirective } from './departements-francais.directive';

let directives : any[] = [
  InputGameDirective
];


@NgModule({
  declarations: [
    ...directives,
    DepartementsFrancaisDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...directives
  ]
})
export class DirectivesModule { }
