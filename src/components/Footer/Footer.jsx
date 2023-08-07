import React from "react"

import { FooterStyle, BackOnTop } from "./FooterStyle"
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage."

const Footer = () => {
  const { t } = useTranslation()
  useLanguage()
  const backOnTop = () => window.scrollTo(0, 0)

  return (
    <FooterStyle>
      <BackOnTop>
        <span>
          <VerticalAlignTopIcon onClick={() => backOnTop()} />
        </span>
      </BackOnTop>

      <p>{t("siteDesenvolvidoPor")} Danilo Vicentin da Silva</p>
    </FooterStyle>
  )
}

export default Footer
