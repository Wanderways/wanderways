import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagDisplayerComponent } from './tag-displayer/tag-displayer.component';
import { MapsModule } from '../../maps/maps.module';
import { MatRippleModule } from '@angular/material/core';

const components : any[] =[
  TagDisplayerComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MapsModule,
    MatRippleModule
  ],
  exports:[
    ...components
  ]
})
export class OrganismsModule { }
