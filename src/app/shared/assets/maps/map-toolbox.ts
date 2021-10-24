import { Output, Input, EventEmitter, Component } from "@angular/core";
import { Departement } from "./map-departements-francais/interfaces/departement";


@Component({
    template:``
})
export class MapToolbox {

    /**
     * Point vocabulaire
     *  - Une Area est l'équivalent d'un département, d'une préfecture.
     *  - Une Zone est l'équivalent d'une région, ou d'un regroupement d'area plus généralement.
     *  - Un Country est un ensemble de Zone.  
     */

    name : string = "";
    identifier : string = "";
    data : any[] = [];
    area_identifier : string = ""

    protected _area_input : string = "";
    @Input() 
    public set area_input(area_input : string) { this._area_input = area_input; this.getAreaByName(this._area_input) }
    public get area_input() {return  this._area_input; }

    @Input() zone_input : string = "";
    @Input() country_input : string = "";

    /**
     * Initialiseur de la class parente "MapToolbox"
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
     * Retourne une area
     */
    @Output() foundAreaNode = new EventEmitter<HTMLElement>();
    /**
     * Retourne une array d'areas
     */
    @Output() foundAreasNodes = new EventEmitter<HTMLElement[]>();
    /**
     * Retourne une zone (et ses areas)
     */
    @Output() foundZoneNode = new EventEmitter<HTMLElement>();
    /**
     * Retourne une array de zones (et leurs areas)
     */
    @Output() foundZonesNode = new EventEmitter<HTMLElement[]>();


    /**
     * Lance un message d'erreur.
     * @param message : Le message en question, a une valeur par défaut.
     */
    // throwError(message: string = "An error Occured"){
    //     throw new Error("Map-Toolbox - Error : " + message+".");
        
    // }


    /**
     * Retourne la node associé au numéro donné
     * @param {*} numdep : Le numéro du département 
     * @returns Une node
     */
    getAreaNode(numarea : string) {
        let result = document.getElementById(this.identifier + numarea.toLowerCase());
        if(result == null || result == undefined ){
            // this.throwError("In getAreaNode, area not found for numarea");
        }else{
            this.foundAreaNode.emit(result);
        }
    }

    /**
     * Retourne le démartement associé au numéro donné
     * @param {*} code : Le numéro du département
     * @returns Le département ou undefined
     */
    getAreaInfoByCode(code : string) : HTMLElement | null {
        let result = this.data.find(({ num_dep }) => num_dep == code);
        return result;
    }


    /**
     * Retourne le département si il existe ou retourne undefined
     * @param {*} e : L'évenement 'keypress'
     * @returns Le département ou undefined
     */
    getAreaByName(area_name : string) : Departement {
        let result = this.data.find(({ dep_name }) => this.normalizeString(dep_name) == this.normalizeString(area_name));     
        return result;
    }

    getAreasFromZone(zone_name : string) {
        return this.data.filter((departement) => {
            return ( this.normalizeString(zone_name) ==  this.normalizeString(zone_name));
        })
    }

    /**
     * Permet de retourné une chaine de charactère normalisé pour pouvoir être comparée.
     * Exemple : "Puy-de-Dôme" donne "puydedome"
     * @param str : Le string d'entrée
     * @returns Le string normalisé
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