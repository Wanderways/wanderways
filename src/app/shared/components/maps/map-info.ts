export class MapInfo{
    name : string = "";
    identifier : string = "";
    area : any[] = [];
    area_identifier : string = ";"

    /**
     * Constructeur de la class parente "MapToolbox"
     * @param name : Le nom de la carte.
     * @param identifier : Le préfixe d'identification de chaque zone du découpage.
     * @param area : Le Json contenant toutes les informations relatives à la carte.
     * @param area_identifier : Le préfixe d'identification des regroupemenrs de zones.
     */
     constructor(name : string, identifier : string, area : any[], area_identifier : string, maxheight : string = '', ){
        this.name = name;
        this.identifier = identifier
        this.area = area;
        this.area_identifier = area_identifier;
    }

}