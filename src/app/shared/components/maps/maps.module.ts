import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapDepartementsFrancaisComponent } from './map-departements-francais/map-departements-francais.component';
import { MapComponent } from './map/map.component';
import { MapsGamesModule } from '../../components/maps-games/maps-games.module';
import { DataTableModule } from '../generic/data-table/data-table.module';

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
    DataTableModule
  ],
  exports:[
    ...maps,
  ]
})
export class MapsModule { }