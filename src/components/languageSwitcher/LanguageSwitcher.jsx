import React from "react"
import br from "../../assets/images/brazil-flag.png"
import us from "../../assets/images/us-flag.png"
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

const languageOptions = [
  { name: "Português/BR", value: "ptBR", flag: br },
  { name: "English/US", value: "en", flag: us },
]

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <LanguageSwitcherStyled>
      <section id="welcome">
        <h1>{t("sejaBemVindo")}</h1>
        <h2>{t("selecioneSuaLinguagem")}</h2>
      </section>

      <section id="languages-selection">
        {languageOptions.map(({ name, value, flag }) => (
          <NavLink to="/home" key={value} rel="next">
            <button
              onClick={() => {
                i18n.changeLanguage(value)
                localStorage.setItem("language", value)
              }}
            >
              <img src={flag} alt={name} />
              <span>{name}</span>
            </button>
          </NavLink>
        ))}
      </section>
    </LanguageSwitcherStyled>
  )
}

export default LanguageSwitcher
