import { Locale_I18n } from "src/app/shared/interfaces/locale_i18n.interface";

export interface MapGroup {
        mapGroupId: string,
        mapFlagUrl: string,
        tagIdList: string[],
        mapDisplayName: Locale_I18n,
        available: boolean
}

