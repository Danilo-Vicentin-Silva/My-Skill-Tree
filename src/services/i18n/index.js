import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enJson from "./translations/en.json"
import ptBrJson from "./translations/pt-br.json"

i18n.use(initReactI18next).init({
  fallbackLng: "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    ptBR: ptBrJson,
  },
})

export default i18n
