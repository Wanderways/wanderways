import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapGenericComponent } from './map-generic/map-generic.component';
import { I18nPipe } from './utils/i18n.pipe';

const components : any[] = [
  MapGenericComponent
]
const pipes : any[]=[
  I18nPipe
]

@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...components,
    ...pipes
  ]
})
export class MapsModule { }
