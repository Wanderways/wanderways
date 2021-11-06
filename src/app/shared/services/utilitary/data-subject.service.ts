import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StringFactoryService } from 'src/app/shared/services/utilitary/string-factory.service';

@Injectable({
    providedIn: 'root'
})
export class DataSubjectService {

    sourceData : any[] = [];
    currentData : any = {};
    finalData : any[] = [];

    sourceDataChange : Subject<any[]> = new Subject<any[]>();
    currentdataChange : Subject<any> = new Subject<any>();
    finalDataChange : Subject<any[]> = new Subject<any[]>();

    constructor(private stringFactoryService : StringFactoryService) {
        this.sourceDataChange.subscribe((value)=>{this.sourceData = value;});
        this.currentdataChange.subscribe((value)=>{this.currentData = value;});
        this.finalDataChange.subscribe((value)=>{this.finalData = value;});
    }

    /**
     * Permet de mettre en place la source de données.
     * @param array : La liste de données source.
     */
    setsourceDataValue(array : any[]){
        this.sourceDataChange.next(array);
    }
    /**
     * Permet d'indiquer l'objet en cours de traitement.
     * @param obj : L'objet en cours de traitement.
     */
    setCurrentdataValue(obj : any){
        this.currentdataChange.next(obj);
    }
    /**
   * Permet d'ajouter un objet à la liste des données actuels à partir du nom de celui-ci
   * @param obj 
   */
     addDataToFinalDataFromName(name : string){
      let result = this.sourceData.find((value) => this.stringFactoryService.replaceSpecialChars(name) == this.stringFactoryService.replaceSpecialChars(value.name)); 
      this.addDataToFinalData(result);
    }
    /**
     * Permet d'ajouter un objet à la liste des données actuels.
     * @param obj 
     */
    addDataToFinalData(obj : any){
        this.finalData.push(obj);
        this.finalDataChange.next(this.finalData);
    }
    /**
     * Permet de mettre en place la liste actuel de données (dans le cadre d'un jeu).
     * @param array : La liste actuel de données trouvées
     */
    setFinalDataValue(array : any[]){
        this.finalDataChange.next(array);
    }
    /**
     * Permet de savoir si l'objet donné fait partie des valeur de la liste de base
     * @param obj : Le nom à vérifier.
     * @returns Vrai si l'objet est dans la liste, faux sinon.
     */
    isValidData(name : string) : boolean{
        return this.sourceData.find((value)=>{return this.stringFactoryService.compareNormalizedStrings(value.name , name)});
    }
    /**
     * Permet de savoir si l'objet donné figure déjà parmis les données trouvées.
     * @param obj : Le nom à vérifier.
     * @returns Vrai si l'objet est dans la liste, faux sinon.
     */
    isInFinalData(name : string) : boolean{
        return this.finalData.find((value)=>{
            return this.stringFactoryService.compareNormalizedStrings(value.name , name)
        });
    }

    extendedNameExist(name : string){
        var regex = new RegExp(this.stringFactoryService.replaceSpecialChars(name)+'.+');
        return this.sourceData.find((value)=>{
            return this.stringFactoryService.replaceSpecialChars(value.name).match(regex);
        });
    }
}