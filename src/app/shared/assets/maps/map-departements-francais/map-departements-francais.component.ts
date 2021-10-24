import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MapToolbox } from '../map-toolbox';
import { data } from './data';
import { Departement } from './interfaces/departement';
import { Region } from './interfaces/region';


@Component({
  selector: 'app-map-departements-francais',
  templateUrl: './map-departements-francais.component.html',
  styleUrls: ['./map-departements-francais.component.scss']
})
export class MapDepartementsFrancaisComponent extends MapToolbox  implements OnInit {

  data : Departement[] = data;

  

  ngOnChanges( changes: SimpleChanges){
    if(changes.item){
      this.getAreaByName(changes.item.currentValue);
    }
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.initialize("Départements Français (avec DotTom, hors Collectivité d'outre-mer française)", "departement-", data, "region");
  }
}
