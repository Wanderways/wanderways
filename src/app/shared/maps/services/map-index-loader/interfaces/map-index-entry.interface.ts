import { Locale_I18n } from '../../../utils/locale_i18n.interface';

export interface MapIndexEntry{
        mapIdentifier : string,
        mapFlagUrl : string,
        relatedSvg : string,
        mapDisplayName : Locale_I18n,
        map_type: string,
        tagIdList:string[],
        wiki_url:string,
        available:boolean
}