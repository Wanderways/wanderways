import { Locale_I18n } from '../../../utils/locale_i18n.interface';

export interface MapGroup {
        mapIdentifier: string,
        mapFlagUrl: string,
        tagIdList: string[],
        mapDisplayName: Locale_I18n,
        available: boolean,
        maps: SpecificMap[]
}

export interface SpecificMap {
        identifier: string,
        displayName: Locale_I18n
        wiki_url: string
}