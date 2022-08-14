import { Locale_I18n } from "../interfaces/locale_i18n.interface";

export const GameIndex : GameIndexEntry[] = [
    {
        identifier: "time-trial",
        displayName : {
            en_US:["Time trial"],
            fr_FR:["Contre la montre"],
            de_DE:["Zeitfahren"],
            es_ES:["Contrarreloj"],
            pt_PT:["Contra-relógio"]
        },
        gameUrl : "/time-trial",
        iconUrl: "./assets/icons/keyboard.svg",
        available:true
    },
    {
        identifier: "flag",
        displayName : {
            en_US:["Flag"],
            fr_FR:["Drapeau"],
            de_DE:["Flagge"],
            es_ES:["Bandera"],
            pt_PT:["Bandeira"]
        },
        gameUrl : "/flag",
        iconUrl: "./assets/icons/flag.svg",
        available:false
    },
    {
        identifier: "custom",
        displayName : {
            en_US:["Custom"],
            fr_FR:["Customisé"],
            de_DE:["Benutzerdefinierte"],
            es_ES:["Personalizado"],
            pt_PT:["Personalizado"]
        },
        gameUrl : "/custom",
        iconUrl: "./assets/icons/custom.svg",
        available:false
    }
]

export interface GameIndexEntry{
    identifier : string,
    displayName : Locale_I18n,
    gameUrl : string,
    iconUrl : string,
    available:boolean
}
