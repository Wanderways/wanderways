import { Component, OnInit } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { StringFactoryService } from 'src/app/shared/services/utilitary/string-factory.service';
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

  constructor(private dataSubjectService : DataSubjectService, private stringFactoryService : StringFactoryService) { }

  ngOnInit(): void {
    this.dataSubjectService.sourceDataChange.subscribe((value)=>{
    });
  }

  /**
   * Replace accented char by their ascii equivalent. To lower case and space replaced by hyphen.
   * @param str : A string to normalise
   * @returns The normalized string
   */
  replaceSpecialChars(str : string){
    return this.stringFactoryService.replaceSpecialChars(str);
  }

  /**
   * Hide all content from table, no placeholder
   */
  hideAll(){

  }
  /**
   * Display all content from table, 
   */
  displayAll(){
    
  }
  /**
   * Hide all content from table, with placeholder
   */
  hideContentAll(){
  
  }
  /**
   * Display all content from table, 
   */
  displayContentAll(){

  }

  /**
   * Hide specific content, with placeholder
   * @param id : 
   */
  hideByContentId(id : string){

  }
}