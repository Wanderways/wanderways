import { Locale_I18n } from "src/app/shared/interfaces/locale_i18n.interface";

export interface MapData{
    id : string,
    numeric_code:string,
    name: Locale_I18n,
    group:string,
    flag_url:string
}