import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


let components : any[] = [
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...components
  ]
})
export class AtomsModule { }
