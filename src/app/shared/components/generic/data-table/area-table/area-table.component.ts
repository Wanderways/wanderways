import { Component, Input, OnInit } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/map-specific/data-subject.service';
import { StringFactory } from 'src/app/shared/utils/factories/string.factory';
import { Area } from '../../../../utils/interfaces/map-oriented/area';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrls: ['./area-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
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

	private subscriptions : {[key: string]: Subscription} = {};

	constructor(private dataSubjectService : DataSubjectService) { }

  	ngOnInit(): void {
		//Quoi qu'il arrive on charge l'ensemble des données dans le tableau
		this.subscriptions.sourceDataChange = this.dataSubjectService.getSourceDataChange().subscribe((value)=> this.processSourceDataChange(value));
		this.subscriptions.currentdataChange = this.dataSubjectService.getCurrentDataChange().subscribe(value=> this.processCurrentDataChange(value));
	}

	ngOnDestroy(){
		// Unsubscribe from all registered subscriptions
		Object.keys(this.subscriptions).forEach((key : string) => {
			this.subscriptions[key].unsubscribe();
		});
	}

	/**
	 * Processes the source data changes. If in game, then hide all. Else display all
	 * @param value : The current data list
	 * @deprecated Shoudl be strenghtened
	 */
	private processSourceDataChange(value : any[]): void{
		this.dataSource=value;
		// We set all elements as visible
		this.dataSource.forEach((value)=>{this.displayedElements.set(value.num, true)});
		//Si on est en mode jeu, alors on cache toutes les données, et on surveille l'avancé du tableau de résultat
		if(this.inGameMode){
			this.hideAllContent();
		}
	}

	/**
	 * Processes the current data changes. Display the data in it.
	 * @param value : An area
	 * @deprecated Shoudl be strenghtened
	 */
	private processCurrentDataChange(value:any): void{
		this.displayByContentId(value.num);
	}

	/**
	 * Gives the row its visibility property
	 * @param rowidentifier : The row identifier
	 * @returns True if element must be displayed, false otherwise
	 */
	isRowVisible( rowidentifier : string ): boolean | undefined{
		return this.displayedElements.get(rowidentifier);
	}

	/**
	 * Gives the row its visibility property
	 * @param rowidentifier : The row identifier
	 * @returns True if element must be displayed, false otherwise
	 */
	isRowColored(rowidentifier : string ): boolean{
		return this.expandedElement?.num == rowidentifier;
	}

	/**
	 * Replace accented char by their ascii equivalent. To lower case and space replaced by hyphen.
	 * @param str : A string to normalise
	 * @returns The normalized string
	 */
	replaceSpecialChars(str : string): string{
		return new StringFactory().replaceSpecialChars(str);
	}

	/**
	 * Hide all content from table, with placeholder
	 */
	hideAllContent(): void{
		this.dataSource.forEach((value)=>{this.displayedElements.set(value.num, false)})
	}
	/**
	 * Display all content from table,
	 */
	displayAllContent(): void{
		this.dataSource.forEach((value)=>{this.displayedElements.set(value.num, true)})
	}

	/**
	 * Hide specific content, with placeholder
	 * @param id : 
	 */
	hideByContentId(id : string): void{
		this.displayedElements.set(id, false)
	}

	/**
	 * Display specific content
	 * @param id : 
	 */
	 displayByContentId(id : string): void{
		this.scrollToElement(id);
		this.displayedElements.set(id, true);
	}

	/**
	 * Makes the table scroll to the specified element of the list
	 * @param id : The id of one of the list elements
	 * @todo use directives to make elements ref self log
	 */
	scrollToElement(id : string): void{
		setTimeout(() => {
			let element = document.getElementById("element-"+id);
			element?.scrollIntoView({block: 'center'});
			element?.click();
		  },200);
	}
}
