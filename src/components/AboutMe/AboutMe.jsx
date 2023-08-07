import React from "react"
import Contact from "../Contact/Contact"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage."

import SkillBar from "../SkillsBar/SkillBar"
import SkillBar2 from "../SkillsBar/SkillBar2"

import { AboutStyle } from "./AboutMeStyle"

const AboutMe = () => {
  const { t } = useTranslation()
  useLanguage()

  function pegarHora() {
    const data = new Date()
    const hora = data.getHours()
    if (hora >= 6 && hora <= 11) {
      return t("bomDia")
    } else if (hora <= 17) {
      return t("boaTarde")
    } else {
      return t("boaTarde")
    }
  }

  return (
    <AboutStyle>
      <section>
        <h2>
          {pegarHora()}, {t("sou")} Danilo, <br />
          <i>{t("desenvolvedorWeb")}</i>
        </h2>
        <br />
        <p>{t("sobreMim")}</p>
        <br />
        <p>{t("sobreMim2")}</p>
        <br />
        <p>{t("sobreMim3")}</p>
      </section>
      <SkillBar />
      <section>
        <p>{t("minhasHabilidades")}</p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>SEO</li>
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <br />
      </section>
      <h2>{t("contatos")}</h2>
      <Contact />
    </AboutStyle>
  )
}

export default AboutMe
