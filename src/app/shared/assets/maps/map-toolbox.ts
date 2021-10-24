import { Output, Input, EventEmitter, Component } from "@angular/core";


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
    @Output() areaNode = new EventEmitter<HTMLElement>();
    /**
     * Retourne une array d'areas
     */
    @Output() areasNode = new EventEmitter<HTMLElement[]>();
    /**
     * Retourne une zone (et ses areas)
     */
    @Output() zoneNode = new EventEmitter<HTMLElement>();
    /**
     * Retourne une array de zones (et leurs areas)
     */
    @Output() zonesNode = new EventEmitter<HTMLElement[]>();


    /**
     * Lance un message d'erreur.
     * @param message : Le message en question, a une valeur par défaut.
     */
    throwError(message: string = "An error Occured"){
        throw new Error("Map-Toolbox - Error : " + message+".");
        
    }


    /**
     * Retourne la node associé au numéro donné
     * @param {*} numdep : Le numéro du département 
     * @returns Une node
     */
    getAreaNode(numarea : string) {
        let result = document.getElementById(this.identifier + ('' + (numarea)).toLowerCase());
        if(result == null || result == undefined ){
            this.throwError("In getAreaNode, area not found for numarea");
        }else{
            this.areaNode.emit(result);
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
    getAreaByName(area_name : string) {
        let result = this.data.find(({ dep_name }) => this.replaceSpecialChars(dep_name).toLowerCase().normalize("NFD") == (this.replaceSpecialChars(area_name)).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''));
        console.log(result)
        return result;
    }

    getAreasFromZone(zone_name : string) {
        return this.data.filter((departement) => {
            return (departement.zone_name.replace(/[^a-zA-Z]/g, '')).toLowerCase().normalize("NFD") == (zone_name.replace(/[^a-zA-Z]/g, '')).toLowerCase().normalize("NFD")
        })
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