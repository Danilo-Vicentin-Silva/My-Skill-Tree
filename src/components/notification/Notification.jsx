import React from "react";
import { NotificationStyled } from "./NotificationStyled";
import { Button } from "@mui/material";
import { BlurBackground } from "../../styles/effects/BlurBackground";
import { useTranslation } from "react-i18next";
import useLanguage from "../../hooks/useLanguage.";

const Notification = () => {
  const { t } = useTranslation();
  useLanguage();

  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [isVisible]);

  return isVisible ? (
    <>
      <BlurBackground />
      <NotificationStyled>
        <h1>{t("newSiteWarming")}</h1>
        <p>{t("acesseNovoPortfolio")}</p>
        <Button variant="outlined" color="info">
          <a
            href="https://danilovicentinsilva.netlify.app/"
            rel="nofollow"
            target={"_self"}
          >
            {t("acesse")}
          </a>
        </Button>
      </NotificationStyled>
    </>
  ) : null;
};

export default Notification;
