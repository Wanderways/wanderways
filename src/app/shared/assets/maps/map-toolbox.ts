import { Component, OnInit } from "@angular/core";
import { DataSubjectService } from "../../services/utilitary/data-subject.service";
import { InputSubjectService } from "../../services/utilitary/input-subject.service";
import { NodeSubjectService } from "../../services/utilitary/node-subject.service";
import { Departement } from "./map-departements-francais/interfaces/departement";


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

    /**
     * Données de base.
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

    constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService ){
        this.inputSubjectService = inputSubjectService;
        this.nodeSubjectService = nodeSubjectService;
        this.dataSubjectService = dataSubjectService;
    }

    /**
     * Mise en place de la surveillance des données.
     */
    ngOnInit(){
        this.inputSubjectService.inputChange.subscribe((value)=>{
            let area = this.getAreaByName(value);
            if (area){
                this.getAreaNode(area.num_dep);
            }
        });
        this.dataSubjectService.setsourceDataValue(this.data);
    }

    /**
     * Initialiseur de la class parente "MapToolbox".
     * @param name : Le nom de la carte.
     * @param identifier : Le préfixe d'identification de chaque zone du découpage.
     * @param area : Le Json contenant toutes les informations relatives à la carte.
     * @param area_identifier : Le préfixe d'identification des regroupemenrs de zones.
     */
    initialize(name : string, identifier : string, data : any[], area_identifier : string, maxheight : string = ''){
        this.name = name;
        this.identifier = identifier
        this.data = data;
        this.area_identifier = area_identifier;
    }


    /**
     * Envoie la node trouvé au service.
     * @param {*} numdep : Le numéro du département .
     */
    getAreaNode(area : string) {
        let result = document.getElementById(this.identifier + area.toLowerCase());
        if(result){// Si on a bien une valeur.
            this.nodeSubjectService.setNodeValue(result)
        }
    }

    /**
     * Retourne le démartement associé au numéro donné.
     * @param {*} code : Le numéro du département.
     * @returns Le département ou undefined.
     */
    getAreaInfoByCode(code : string) : HTMLElement | null {
        let result = this.data.find(({ num_dep }) => num_dep == code);
        return result;
    }

    /**
     * Retourne le département si il existe ou retourne undefined.
     * @param area_name : Le nom de l'area.
     * @returns Le département ou undefined.
     */
    getAreaByName(area_name : string) : Departement {
        let result = this.data.find(({ dep_name }) => this.normalizeString(dep_name) == this.normalizeString(area_name)); 
        console.log("C'est une réussite")
        if(result){// Si on a bien une valeur.
            this.dataSubjectService.setCurrentdataValue(result);
        }    
        return result;
    }

    /**
     * Retourne les areas inféodées à une zone.
     * @param zone_name 
     * @returns 
     */
    getAreasFromZone(zone_name : string) {
        return this.data.filter(({ dep_name }) => {
            ( this.normalizeString(dep_name) ==  this.normalizeString(zone_name));
        })
    }

    /**
     * Permet de retourné une chaine de charactère normalisé pour pouvoir être comparée.
     * Exemple : "Puy-de-Dôme" donne "puydedome".
     * @param str : Le string d'entrée.
     * @returns Le string normalisé.
     */
    normalizeString(str : string) : string{
        return this.replaceSpecialChars(str).toLowerCase().normalize("NFD");
    }

    /**
     * Permet de remplacer des char ayant des accents par leurs équivalent sans accent.
     * @param str : La chaîne de charactères dont on veut remplacer ceux accentuées.
     * @returns Le string sans les accents.
     */
    replaceSpecialChars(str : string){
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
            .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
            .replace(/(^-+|-+$)/, ''); // Remove extra hyphens from beginning or end of the string
    }
}