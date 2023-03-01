import { Locale_I18n } from "../interfaces/locale_i18n.interface";

export const GameIndex: GameIndexEntry[] = [
  {
    id: "time-trial",
    displayName: {
      "en-US": ["Time trial"],
      "fr-FR": ["Contre la montre"],
      "de-DE": ["Zeitfahren"],
      "es-ES": ["Contrarreloj"],
      "pt-PT": ["Contra-relógio"]
    },
    gameUrl: "/time-trial",
    iconUrl: "./assets/icons/keyboard.svg",
    available: true
  },
  {
    id: "flag",
    displayName: {
      "en-US": ["Flag"],
      "fr-FR": ["Drapeau"],
      "de-DE": ["Flagge"],
      "es-ES": ["Bandera"],
      "pt-PT": ["Bandeira"]
    },
    gameUrl: "/flag",
    iconUrl: "./assets/icons/flag.svg",
    available: false
  },
  {
    id: "custom",
    displayName: {
      "en-US": ["Custom"],
      "fr-FR": ["Customisé"],
      "de-DE": ["Benutzerdefinierte"],
      "es-ES": ["Personalizado"],
      "pt-PT": ["Personalizado"]
    },
    gameUrl: "/custom",
    iconUrl: "./assets/icons/custom.svg",
    available: false
  }
]

export interface GameIndexEntry {
  id: string,
  displayName: Locale_I18n,
  gameUrl: string,
  iconUrl: string,
  available: boolean
}
