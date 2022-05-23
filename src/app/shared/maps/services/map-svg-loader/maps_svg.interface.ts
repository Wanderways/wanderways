export interface MapSvg{
    xlmns : string,
    viewBox : ViewBox,
    contentPath : MapSvgPath[],
    contentGroup : MapSvgGroupe[]
}
interface MapSvgCircle {
    id : string,
    class : string,
    cx:number,
    cy:number,
    r:number
}
interface MapSvgGroupe {
    id : string,
    class : string,
    contentPath : MapSvgPath[]
}
interface MapSvgPath {
    id : string,
    class : string,
    d : string
}


interface ViewBox{
    x:number,
    y:number,
    width:number,
    height:number
}