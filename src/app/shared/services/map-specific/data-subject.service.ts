import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StringFactory } from 'src/app/shared/utils/factories/string.factory';
import { GameStatus } from '../../utils/enums/GameStatus.enum';
import { GameStatusService } from '../game-mode-specific/game-status.service';

@Injectable({
    providedIn: 'root'
})
export class DataSubjectService {

    private sourceData : any[] = [];
    private currentData : any = {};
    private finalData : any[] = [];

    private sourceDataChange : Subject<any[]> = new Subject<any[]>();
    private currentDataChange : Subject<any> = new Subject<any>();
    private finalDataChange : Subject<any[]> = new Subject<any[]>();

    constructor(private gameStatusService : GameStatusService) {
        this.sourceDataChange.subscribe((value)=>{this.sourceData = value;});
        this.currentDataChange.subscribe((value)=>{this.currentData = value;});
        this.finalDataChange.subscribe((value)=>{this.finalData = value;});
        this.gameStatusService.getGameStatusChange().subscribe((value)=>{this.processGameStatusChange(value)});
    }

    /**
     * If the game status is not PLAYING or PAUSE than the current data must be erased
     * @param gameStatus The current game status
     */
    private processGameStatusChange(gameStatus : GameStatus) : void{
        if(![GameStatus.PLAYING, GameStatus.PAUSE].includes(gameStatus)){
            this.removeAllDataFromFinalData();
        }
    }

    /**
     * Return the Subject object of the source data
     * @returns The sourceDataChange object to subscribe to
     */
    public getSourceDataChange() : Subject<any[]>{
        return this.sourceDataChange;
    }
    /**
     * Return the Subject object of the final data
     * @returns The finalDataChange object to subscribe to
     */
    public getFinalDataChange() : Subject<any[]>{
        return this.finalDataChange;
    }
    /**
     * Return the Subject object of the current data
     * @returns The currentDataChange object to subscribe to
     */
    public getCurrentdataChange() : Subject<any>{
        return this.currentDataChange;
    }

    /**
     * Permet de mettre en place la source de données.
     * @param array : La liste de données source.
     */
     public setsourceDataValue(array : any[]) : void{
        this.sourceDataChange.next(array);
    }
    /**
     * Permet d'indiquer l'objet en cours de traitement.
     * @param obj : L'objet en cours de traitement.
     */
     public setCurrentdataValue(obj : any) : void{
        this.currentDataChange.next(obj);
    }
    /**
   * Permet d'ajouter un objet à la liste des données actuels à partir du nom de celui-ci
   * Also check if all the data has been found, if so, then set the game status to "WON"
   * @param obj 
   */
     public addDataToFinalDataFromName(name : string) : void{
        let stringFactory = new StringFactory()
        let result = this.sourceData.find((value) => stringFactory.replaceSpecialChars(name) == stringFactory.replaceSpecialChars(value.name)); 
        this.addDataToFinalData(result);
    }
    /**
     * Permet d'ajouter un objet à la liste des données actuels.
     * @param obj 
     */
    /**
     * Add an object to the found data list. Also check if the player won.
     * @param obj 
     */
     public addDataToFinalData(obj : any) : void{
        this.finalData.push(obj);
        this.finalDataChange.next(this.finalData);
        // If the player won, then we change the current game status
        if(this.checkIfAllDataFound()){
            this.gameStatusService.setGameStatus(GameStatus.WON);
        }
    }

    /**
     * Permet d'ajouter un objet à la liste des données actuels.
     * @param obj 
     */
     public removeDataFromFinalData(obj : any) : void{
        this.finalData.splice(this.finalData.indexOf(obj), 1);
        this.finalDataChange.next(this.finalData);
    }

    /**
     * Permet d'ajouter un objet à la liste des données actuels.
     * @param obj 
     */
     public removeAllDataFromFinalData() : void{
        this.finalData = [];
        this.finalDataChange.next(this.finalData);
    }

    /**
     * Permet de mettre en place la liste actuel de données (dans le cadre d'un jeu).
     * @param array : La liste actuel de données trouvées
     */
     public setFinalDataValue(array : any[]) : void{
        this.finalDataChange.next(array);
    }
    /**
     * Permet de savoir si l'objet donné fait partie des valeur de la liste de base
     * @param obj : Le nom à vérifier.
     * @returns Vrai si l'objet est dans la liste, faux sinon.
     */
     public isValidData(name : string) : boolean{
        return this.sourceData.find((value)=>{return new StringFactory().compareNormalizedStrings(value.name , name)});
    }
    /**
     * Permet de savoir si l'objet donné figure déjà parmis les données trouvées.
     * @param obj : Le nom à vérifier.
     * @returns Vrai si l'objet est dans la liste, faux sinon.
     */
     public isInFinalData(name : string) : boolean{
        return this.finalData.find((value)=>{
            return new StringFactory().compareNormalizedStrings(value.name , name)
        });
    }

    /**
     * Allows to know if an area which could be considered as an extension of an already found area exists.
     * E.g : "Loire" and "Loiret"
     * @param name : A name, of anything
     * @returns True if one or more exists
     */
     public extendedNameExist(name : string) : boolean{
        let stringFactory = new StringFactory()
        var regex = new RegExp('^'+stringFactory.replaceSpecialChars(name)+'.+');
        return this.sourceData.find((value)=>{
            return stringFactory.replaceSpecialChars(value.name).match(regex);
        });
    }

    /**
     * Returns the source data lenght
     * @returns The source data length
     */
    public getSourceDataLength() : number {
        return this.sourceData.length;
    }

    /**
     * Check if all the data has been found
     * @returns 
     */
    public checkIfAllDataFound() : boolean{
        return this.sourceData.length == this.finalData.length;
    }

    /**
     * Set the currents data to null
     */
    public clear() : void {
        this.setCurrentdataValue({});
        this.setsourceDataValue([]);
        this.setFinalDataValue([]);
    }
}