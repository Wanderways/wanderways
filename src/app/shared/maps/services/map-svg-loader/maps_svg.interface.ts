export interface Svg{
    xlmns : string,
    viewBox : string,
    content : Path[]
}

interface Path {
    id : string,
    class : string,
    d : string
}