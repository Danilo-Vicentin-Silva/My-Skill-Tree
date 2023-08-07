import React from "react"
import ProjectIframe from "../ProjectIframe/ProjectIframe"

import { BigCardStyle } from "./BigCardStyle"
import LaunchIcon from "@mui/icons-material/Launch"
import useLanguage from "../../hooks/useLanguage."
import { useTranslation } from "react-i18next"

const BigCard = ({ title, image, text, iframeLink, link }) => {
  const { t } = useTranslation()
  useLanguage()

  return (
    <BigCardStyle>
      <img src={image} title={title} alt={title} />
      <p>{text}</p>
      <p>
        <a href={link} rel="external" target={"_blank"}>
          {t("acesse")}
          <span>
            <LaunchIcon />
          </span>
        </a>
      </p>
      {iframeLink && <ProjectIframe iframeLink={iframeLink} link={link} />}
      <hr />
    </BigCardStyle>
  )
}

export default BigCard
