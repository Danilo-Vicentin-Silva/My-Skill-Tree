import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enJson from "./translations/en.json"
import frJson from "./translations/fr.json"
import ptBrJson from "./translations/pt-br.json"

i18n.use(initReactI18next).init({
  fallbackLng: "pt-br",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    fr: frJson,
    ptBR: ptBrJson,
  },
})

export default i18n
