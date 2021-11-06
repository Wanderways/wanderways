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
        private stringFactoryService : StringFactoryService,
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
        //this.inputSubjectService.setInputValue(value);
        
        if(this.dataSubjectService.isValidData(value)){
            console.log("inputChanged : isValidData - Data est dans la liste des valeurs");
            console.log(value);
            
            if(!this.dataSubjectService.isInFinalData(value)){
                this.inputSubjectService.setInputValue(value);

                // @TODO ajouter la valeur 
                this.dataSubjectService.addDataToFinalDataFromName(value);
            }else{ 
                // Si il existe un nom allant plus loin mais prenant la même base, alors on ne fait rien
    
                // Sinon on annonce au joueur qu'il a déjà trouvé l'area
                console.log(value);
                
                let snackMessage = "Vous avez déjà trouvé : "+value;
                this._snackBar.openFromComponent(
                    SnackBarComponent,
                     {
                         data : {message:snackMessage ,action:"Okay..."}, // Message et message du bouton
                         duration: 2000 // Durée de deux secondes
                  })
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
