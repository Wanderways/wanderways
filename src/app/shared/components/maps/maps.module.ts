import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapDepartementsFrancaisComponent } from './map-departements-francais/map-departements-francais.component';
import { MapComponent } from './map/map.component';
import { MapsGamesModule } from '../../components/maps-games/maps-games.module';
import { DataTableModule } from '../generic/data-table/data-table.module';
import { MaterialModule } from 'src/app/material.module';
import { GenericModule } from '../generic/generic.module';

let maps : any[] = [
    MapComponent,
    MapDepartementsFrancaisComponent
]


@NgModule({
  declarations: [
    ...maps,
    MapComponent,
  ],
  imports: [
    CommonModule,
    MapsGamesModule,
    DataTableModule,
    MaterialModule,
    GenericModule
  ],
  exports:[
    ...maps,
  ]
})
export class MapsModule { }
