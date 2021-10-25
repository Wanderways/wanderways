import { Component, OnInit } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { data } from '../../../maps/map-departements-francais/data';
import { Area } from '../../../maps/map-departements-francais/interfaces/area';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrls: ['./area-table.component.scss']
})
export class AreaTableComponent implements OnInit {

  dataSource : Area[] = data; 
  displayedColumns : string[]=["numero", "region", "departement", "logo"];

  constructor(private dataSubjectService : DataSubjectService) { }

  ngOnInit(): void {
    this.dataSubjectService.sourceDataChange.subscribe((value)=>{
    });
  }

  replaceSpecialChars(str : string){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
        .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
        .replace(/(^-+|-+$)/, '').toLowerCase(); // Remove extra hyphens from beginning or end of the string
  }
}