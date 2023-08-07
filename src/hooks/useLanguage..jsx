import React from "react"
import { useTranslation } from "react-i18next"

export default function useLanguage() {
  const { i18n } = useTranslation()

  React.useEffect(() => {
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [i18n])

  const setLanguage = (language) => {
    localStorage.setItem("language", language)
    i18n.changeLanguage(language)
  }

  return { setLanguage }
}
