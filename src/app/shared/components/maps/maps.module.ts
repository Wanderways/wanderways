import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';


// Maps relative
import { MapComponent } from './map/map.component';
import { MapsGamesModule } from '../../components/maps-games/maps-games.module';
// Maps
import { MapDepartementsFrancaisComponent } from './map-departements-francais/map-departements-francais.component';
import { MapPrefecturesJaponComponent } from './map-prefectures-japon/map-prefectures-japon.component';
import { TemplatesModule } from '../generic/templates/templates.module';

let maps : any[] = [
    MapComponent,
    MapDepartementsFrancaisComponent,
    MapPrefecturesJaponComponent
]


@NgModule({
  declarations: [
    ...maps
  ],
  imports: [
    CommonModule,
    MapsGamesModule,
    MaterialModule,
    TemplatesModule
  ],
  exports:[
    ...maps
  ]
})
export class MapsModule { }
