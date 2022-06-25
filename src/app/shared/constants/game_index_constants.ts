import { Locale_I18n } from "../maps/utils/locale_i18n.interface";

export const GameIndex : GameIndexEntry[] = [
    {
        identifier: "inputVsTime",
        displayName : {
            en_US:["Input vs time"],
            fr_FR:["Saisie clavier - Contre la montre"],
            de_DE:["Tastatureingabe - Gegen die Zeit"],
            es_ES:["Teclado - Contrarreloj"],
            pt_PT:["Teclado - Time trial"]
        },
        gameUrl : "/input-vs-time",
        iconUrl: "./assets/icons/keyboard.svg"
    },
    {
        identifier: "inputVsTim",
        displayName : {
            en_US:["Input vs time"],
            fr_FR:["Saisie clavier - Contre la montre"],
            de_DE:["Tastatureingabe - Gegen die Zeit"],
            es_ES:["Teclado - Contrarreloj"],
            pt_PT:["Teclado - Time trial"]
        },
        gameUrl : "/input-vs-time",
        iconUrl: "./assets/icons/keyboard.svg"
    }
]

export interface GameIndexEntry{
    identifier : string,
    displayName : Locale_I18n,
    gameUrl : string,
    iconUrl : string
}