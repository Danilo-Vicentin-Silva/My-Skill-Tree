import React, { useState } from "react"
import Iframe from "react-iframe"
import { Button } from "@mui/material"

import { IframeStyle } from "./ProjectIframeStyle"
import useLanguage from "../../hooks/useLanguage."
import { useTranslation } from "react-i18next"

const ProjectIframe = ({ title, iframeLink, link }) => {
  const [isIframeOn, setIframe] = useState(false)
  const { t } = useTranslation()
  useLanguage()

  const verify = () => {
    if (isIframeOn == true) {
      return false
    } else {
      return true
    }
  }

  return (
    <IframeStyle>
      <Button color="secondary" onClick={() => setIframe(verify)}>
        {isIframeOn ? t("fecharProjeto") : t("cliqueAquiRenderizar")}
      </Button>
      {isIframeOn ? (
        <Iframe
          title={title}
          url={iframeLink}
          height="500px"
          width="100%"
          id="site"
        >
          [navegador não compatível]{" "}
          <a href={iframeLink} target={"_blank"} rel="external">
            {t("acesse")}
          </a>
        </Iframe>
      ) : (
        <></>
      )}
    </IframeStyle>
  )
}

export default ProjectIframe
