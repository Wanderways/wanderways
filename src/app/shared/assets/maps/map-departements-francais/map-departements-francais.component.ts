import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { InputSubjectService } from 'src/app/shared/services/utilitary/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/utilitary/node-subject.service';
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

  constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService){
    super(inputSubjectService, nodeSubjectService, dataSubjectService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    super.initialize("Départements Français (avec DotTom, hors Collectivité d'outre-mer française)", "departement-", data, "region");
  }
}
