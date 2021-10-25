import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() {
    this.sourceDataChange.subscribe((value)=>{
      this.sourceData = value;
      //console.log(this.sourceData);
    });
    this.currentdataChange.subscribe((value)=>{
      console.log("currentdataChange");
      this.currentData = value;
    });
    this.finalDataChange.subscribe((value)=>{
      this.finalData = value;
    });
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
   * Permet d'ajouter un objet à la liste des données actuels.
   * @param obj 
   */
  addDataToFinalData(obj : any){
    console.log(this.finalData)
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
   * Permet de savoir si l'objet donné figure déjà parmis les données trouvées.
   * @param obj : L'objet à vérifier.
   * @returns Vrai si l'objet est dans la liste, faux sinon.
   */
  isInFinalData(obj : any) : boolean{
    
    return this.finalData.find((value)=>{console.log(value); console.log(obj);console.log(value == obj); return value == obj});
  }
}
