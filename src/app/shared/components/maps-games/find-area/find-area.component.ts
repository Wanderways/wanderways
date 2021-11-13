import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges} from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { InputSubjectService } from 'src/app/shared/services/utilitary/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/utilitary/node-subject.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../generic/snack-bar/snack-bar.component';
import { StringFactoryService } from 'src/app/shared/services/utilitary/string-factory.service';
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
        // On surveille si une node est à colorer
		this.nodeSubjectService.nodeChange.subscribe((value)=>{
            this.colorArea(value);
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
        if(this.dataSubjectService.isValidData(value)){
            if(!this.dataSubjectService.isInFinalData(value)){
                this.inputSubjectService.setInputValue(value);
                this.dataSubjectService.addDataToFinalDataFromName(value);
                // @TODO REFA, possible duplicata
                this.clearInput();
            }else{ 
                // Si il n'existe pas un nom allant plus loin en prenant la même base, alors on affiche au joueur qu'il a déjà trouvé cette valeur.
                if(!this.dataSubjectService.extendedNameExist(value)){
                    let snackMessage = "Vous avez déjà trouvé : "+value;
                    this.clearInput();
                    this._snackBar.openFromComponent(
                        SnackBarComponent,
                        {
                            data : {message:snackMessage ,action:"Okay..."}, // Message et message du bouton
                            duration: 2000 // Durée de deux secondes
                    });
                }
            }
        }  
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