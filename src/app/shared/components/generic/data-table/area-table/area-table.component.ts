import { Component, Input, OnInit } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { StringFactoryService } from 'src/app/shared/services/utilitary/string-factory.service';
import { Area } from '../../../maps/map-departements-francais/interfaces/area';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrls: ['./area-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', backgroundColor:'unset' })),
      state('expanded', style({height: '*',backgroundColor: '#c2d7e0'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AreaTableComponent implements OnInit {

	@Input() inGameMode : boolean = false;

	dataSource : Area[] = []; 
	displayedColumns : string[]=['numero', 'departement'];
	expandedElement: Area | null = null;
	displayedElements : Map<string, boolean> = new Map<string,boolean>();

	constructor(private dataSubjectService : DataSubjectService, private stringFactoryService : StringFactoryService) { }

  	ngOnInit(): void {
		//Quoi qu'il arrive on charge l'ensemble des données dans le tableau
		this.dataSubjectService.sourceDataChange.subscribe((value)=>{
			this.dataSource=value;
			this.dataSource.forEach((value)=>{this.displayedElements.set(value.num, true)});
			//Si on est en mode jeu, alors on cache toutes les données, et on surveille l'avancé du tableau de résultat
			if(this.inGameMode){
				this.hideAllContent();
			}
		});
		this.dataSubjectService.currentdataChange.subscribe((value)=>{
			console.log(value);
			
			this.displayByContentId(value.num);
		});
	}

	/**
	 * Gives the row its visibility property
	 * @param rowidentifier : The row identifier
	 * @returns True if element must be displayed, false otherwise
	 */
	isRowVisible( rowidentifier : string ){
		return this.displayedElements.get(rowidentifier);
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
	 * Hide all content from table, with placeholder
	 */
	hideAllContent(){
		this.dataSource.forEach((value)=>{this.displayedElements.set(value.num, false)})
	}
	/**
	 * Display all content from table,
	 */
	displayAllContent(){
		this.dataSource.forEach((value)=>{this.displayedElements.set(value.num, true)})
	}

	/**
	 * Hide specific content, with placeholder
	 * @param id : 
	 */
	hideByContentId(id : string){
		this.displayedElements.set(id, false)
	}

	/**
	 * Display specific content
	 * @param id : 
	 */
	 displayByContentId(id : string){
		this.displayedElements.set(id, true)
	}
}