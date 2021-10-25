import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges} from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { InputSubjectService } from 'src/app/shared/services/utilitary/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/utilitary/node-subject.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../generic/snack-bar/snack-bar.component';
@Component({
    selector: 'app-find-area',
    templateUrl: './find-area.component.html',
    styleUrls: ['./find-area.component.scss']
})
export class FindAreaComponent implements OnInit {

    @Input() input_message : string = "";
    @Input() fill_color : string = "";
    @Input() area_input : string = "";

    value : any = '';
    current_data : any = {};

    constructor(private inputSubjectService :InputSubjectService,
		private nodeSubjectService : NodeSubjectService,
		private dataSubjectService : DataSubjectService,
		private _snackBar: MatSnackBar) {}

	/**
	 * Lance la subscription aux différents services.
	 */
    ngOnInit(){
		this.dataSubjectService.currentdataChange.subscribe((value)=>{this.current_data = value;});
		this.nodeSubjectService.nodeChange.subscribe((value)=>{this.colorArea(value);});
		this.dataSubjectService.currentdataChange.subscribe((value)=>{
			console.log("yeah")
			if(!this.dataSubjectService.isInFinalData(value)){
				this.dataSubjectService.addDataToFinalData(value);
			}else{
                this._snackBar.openFromComponent(
                    SnackBarComponent,
                     {
                         data : {message:"Vous avez déjà trouvé : "+value.dep_name,action:"Okay..."},
                         duration: 2000
                  })
			}
		});
    }


	/**
	 * Permet de vider le champs d'input.
	 */
    clearInput(){
        this.value = "";
    }

    /**
     * Permet de mettre à jour le inputSubjectService avec la dernière valeur de l'input.
     * @param value : La valeur de l'input.
     */
    inputChanged(value : string){
        this.inputSubjectService.setInputValue(value);
    }

    /**
     * Permet de colorer une area donné.
     * @param area : Une area à colorer.
     */
    colorArea(area : HTMLElement){
            this.clearInput();
            area!.style.fill = this.fill_color;
    }
}
