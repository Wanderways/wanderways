import { MapData } from "./MapData.interface"

export interface iso3166_1 extends MapData{
    alpha_2:string,
    alpha_3:string,
    numeric_code:string,
    independant:boolean
}