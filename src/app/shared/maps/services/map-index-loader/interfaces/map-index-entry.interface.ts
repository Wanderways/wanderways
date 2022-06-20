import { Locale_I18n } from '../../../utils/locale_i18n.interface';

export interface MapIndexEntry{
        mapIdentifier : string,
        mapFlagUrl : string,
        tagIdList:string[],
        mapDisplayName : Locale_I18n,
        maps:{
                identifier:string,
                mapDisplayName:Locale_I18n
                wiki_url:string
        }[]
}