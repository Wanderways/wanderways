import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { GenericModule } from '../generic/generic.module';


// Maps relative
import { MapComponent } from './map/map.component';
import { MapsGamesModule } from '../../components/maps-games/maps-games.module';
import { DataTableModule } from '../generic/data-table/data-table.module';
// Maps
import { MapDepartementsFrancaisComponent } from './map-departements-francais/map-departements-francais.component';
import { MapPrefecturesJaponComponent } from './map-prefectures-japon/map-prefectures-japon.component';

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
    DataTableModule,
    MaterialModule,
    GenericModule
  ],
  exports:[
    ...maps
  ]
})
export class MapsModule { }
