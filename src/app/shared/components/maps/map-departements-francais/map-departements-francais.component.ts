import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/map-specific/data-subject.service';
import { MapToolbox } from '../map-toolbox';
import { Area } from '../../../utils/interfaces/map-oriented/area';
import { MapsType } from '../../../utils/types/maps.type';
import { InputSubjectService } from 'src/app/shared/services/game-mode-specific/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/map-specific/node-subject.service';


@Component({
	selector: 'app-map-departements-francais',
	templateUrl: './map-departements-francais.component.html',
	styleUrls: ['./map-departements-francais.component.scss']
})
export class MapDepartementsFrancaisComponent extends MapToolbox  implements OnInit {

	/**
	 * If node selection should be allowed or not
	 */
	 @Input() public  clickArea : boolean = false;
	/**
	 * If color for result should be applied or not
	 */
	 @Input() public displayResult : boolean = false;

	 @Input() public data : Area[] = [];

	 @Input() public finalData : Area[] = [];

	constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService){
		super(inputSubjectService, nodeSubjectService, dataSubjectService);
	}

	ngOnInit(): void {
		super.ngOnInit();
		if(this.clickArea) this.generateOnClickEvent();
	}

	ngAfterViewInit(){
		if(this.displayResult) this.colorResult(this.finalData);
	  }

	ngOnDestroy(){
		Object.keys(this.subscriptions).forEach((key : string) => {
			this.subscriptions[key].unsubscribe();
		});
	}
}
