import { Locale_I18n } from "../../utils/locale_i18n.interface";

export interface MapTag{
    id : string,
    tagGroup : string,
    displayName : Locale_I18n,
    info : Locale_I18n
}