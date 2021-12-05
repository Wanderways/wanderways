import { Component, OnInit } from "@angular/core";
import { DataSubjectService } from "../../services/map-specific/data-subject.service";
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { Area } from "../../utils/interfaces/map-oriented/area";
import { NodeSubjectService } from "../../services/map-specific/node-subject.service";
import { InputSubjectService } from "../../services/game-mode-specific/input-subject.service";
import { StringFactory } from "../../utils/factories/string.factory";



@Component({
    template:``
})
export class MapToolbox implements OnInit {

    /**
     * Point vocabulaire :
     *  - Une Area est l'équivalent d'un département, d'une préfecture.
     *  - Une Zone est l'équivalent d'une région, ou d'un regroupement d'area plus généralement.
     *  - Un Country est un ensemble de Zone.  
     */
    name : string = "";
    identifier : string = "";
    data : any[] = [];
    area_identifier : string = ""

    /**
     * Initialisation des services.
     */
    constructor(protected inputSubjectService :InputSubjectService,
                protected nodeSubjectService : NodeSubjectService,
                protected dataSubjectService : DataSubjectService,
                protected mapMetaDataService : MapMetaDataService){
        this.inputSubjectService = inputSubjectService;
        this.nodeSubjectService = nodeSubjectService;
        this.dataSubjectService = dataSubjectService;
        this.mapMetaDataService = mapMetaDataService;
    }

    /**
     * Set data binding
     */
    ngOnInit(){
        // On surveille la liste des valeur mise en zone input
        this.inputSubjectService.getInputChange().subscribe((value : string)=>this.processInputChange(value));
        this.dataSubjectService.getSourceDataChange().subscribe((value : any[]) =>this.processSourceDataChange(value));
    }

    processInputChange(value : string){
        // Si la valeur en input correspond à une zone/area, alors on récupère la node associé
        let area = this.getAreaByName(value);
        if (area){
            this.getAreaNode(area.num);
        }
    }

    processSourceDataChange(data : any[]){
        console.log(data);
        
        this.data = data;
    }

    /**
     * Envoie la node trouvé au service
     * @param {*} numarea : Le numéro du département
     */
    getAreaNode(area : string) {
        let result = document.getElementById("area-" + area.toLowerCase());
        if(result){// Si on a bien une valeur
            this.nodeSubjectService.setNodeValue(result)
        }
    }

    /**
     * Retourne le démartement associé au numéro donné
     * @param {*} code : Le numéro du département
     * @returns Le département ou undefined
     */
    getAreaInfoByCode(code : string) : HTMLElement | null {
        let result = this.data.find(({ num_area }) => num_area == code);
        return result;
    }

    /**
     * Retourne le département si il existe ou retourne undefined
     * @param area_name : Le nom de l'area
     * @returns Le département ou undefined
     */
    getAreaByName(input_area_name : string) : Area {
        let stringFactory = new StringFactory();
        let result = this.data.find(({ name }) => stringFactory.replaceSpecialChars(input_area_name) == stringFactory.replaceSpecialChars(name));
        if(result){// Si on a bien une valeur.
            this.dataSubjectService.setCurrentdataValue(result);
        }    
        return result;
    }

    /**
     * Retourne les areas inféodées à une zone
     * @param zone_name 
     * @returns 
     */
    getAreasFromZone(zone_name : string) {
        let stringFactory = new StringFactory();
        return this.data.filter(({ name }) => {
            ( stringFactory.replaceSpecialChars(name) ==  stringFactory.replaceSpecialChars(zone_name));
        })
    }
}