import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './consultation.component';
import { MaterialModule } from 'src/app/material.module';
import { MapsGamesModule } from 'src/app/shared/components/maps-games/maps-games.module';
import { MapsModule } from 'src/app/shared/components/maps/maps.module';
import { TemplatesModule } from 'src/app/shared/components/generic/templates/templates.module';

let components : any[] = [
  ConsultationComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MapsGamesModule,
    MaterialModule,
    TemplatesModule,
    MapsModule
  ],
  exports:[
    ...components
  ]
})
export class ConsultationModule { }
