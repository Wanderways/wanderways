import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionContainerComponent } from './accordion-container/accordion-container.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { MaterialModule } from 'src/app/material.module';
import { AccordionItemHeaderComponent } from './accordion-item-header/accordion-item-header.component';
import { AccordionItemBodyComponent } from './accordion-item-body/accordion-item-body.component';


let components : any[] = [
  AccordionContainerComponent,
  AccordionItemComponent,
  AccordionItemHeaderComponent,
  AccordionItemBodyComponent,
]
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ...components
  ]
})
export class AtomsModule { }
