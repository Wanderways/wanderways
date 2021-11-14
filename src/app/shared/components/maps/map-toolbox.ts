import { Component, OnInit } from "@angular/core";
import { DataSubjectService } from "../../services/utilitary/data-subject.service";
import { InputSubjectService } from "../../services/utilitary/input-subject.service";
import { NodeSubjectService } from "../../services/utilitary/node-subject.service";
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { Area } from "./map-departements-francais/interfaces/area";



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
    private inputSubjectService :InputSubjectService;
    private nodeSubjectService : NodeSubjectService;
    private dataSubjectService : DataSubjectService;
    protected mapMetaDataService : MapMetaDataService;

    constructor( inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService, mapMetaDataService : MapMetaDataService){
        this.inputSubjectService = inputSubjectService;
        this.nodeSubjectService = nodeSubjectService;
        this.dataSubjectService = dataSubjectService;
        this.mapMetaDataService = mapMetaDataService;
    }

    /**
     * Mise en place de la surveillance des données.
     */
    ngOnInit(){
        // On surveille la liste des valeur mise en zone input
        this.inputSubjectService.getInputChange().subscribe((value)=>{
            // Si la valeur en input correspond à une zone/area, alors on récupère la node associé
            let area = this.getAreaByName(value);
            if (area){
                this.getAreaNode(area.num);
            }
        });
        this.dataSubjectService.setsourceDataValue(this.data);
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
        console.log(input_area_name);
        
        let result = this.data.find(({ name }) => this.normalizeString(input_area_name) == this.normalizeString(name)); 
        console.log("C'est une réussite")
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
        return this.data.filter(({ name }) => {
            ( this.normalizeString(name) ==  this.normalizeString(zone_name));
        })
    }

    /**
     * Permet de retourner une chaine de charactère normalisé pour pouvoir être comparée
     * Exemple : "Puy-de-Dôme" donne "puydedome"
     * @param str : Le string d'entrée
     * @returns Le string normalisé
     */
    normalizeString(str : string) : string{
        return this.replaceSpecialChars(str).toLowerCase().normalize("NFD");
    }

    /**
     * Permet de remplacer des char ayant des accents par leurs équivalent sans accent
     * @param str : La chaîne de charactères dont on veut remplacer ceux accentuées
     * @returns Le string sans les accents
     */
    replaceSpecialChars(str : string){
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
            .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
            .replace(/(^-+|-+$)/, ''); // Remove extra hyphens from beginning or end of the string
    }
}