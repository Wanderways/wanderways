import { AreaCommons } from "./areaCommons.interface"

export interface iso3166_1 extends AreaCommons{
    alpha_2:string,
    alpha_3:string,
    numeric_code:string,
    independant:boolean
}