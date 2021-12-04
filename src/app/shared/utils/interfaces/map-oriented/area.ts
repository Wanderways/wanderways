import { Zone } from "./zone";
export interface Area{
    iso_3166 : string,
    num : string;
    name : string;
    zone : Zone;
    city : String;
    logo : logo;
}

interface logo{
    url:string;
    alt:string;
}