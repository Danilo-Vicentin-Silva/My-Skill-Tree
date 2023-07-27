import br from "../../assets/images/brazil-flag.png"
import us from "../../assets/images/us-flag.png"
import fr from "../../assets/images/fr-flag.png"
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled"
import { useTranslation } from "react-i18next"

const languageOptions = [
  { name: "Português/BR", value: "ptBR", flag: br },
  { name: "English/US", value: "en", flag: us },
  { name: "Français", value: "fr", flag: fr },
]

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <LanguageSwitcherStyled>
      <section id="welcome">
        <h1>SEJA BEM VINDO!</h1>
        <h2>{t("Escolha sua linguagem")}</h2>
      </section>

      <section id="languages-selection">
        {languageOptions.map(({ name, value, flag }) => (
          <button
            onClick={() => {
              i18n.changeLanguage(value)
            }}
            key={value}
          >
            <img src={flag} alt={name} />
            <span>{name}</span>
          </button>
        ))}
      </section>
    </LanguageSwitcherStyled>
  )
}

export default LanguageSwitcher
