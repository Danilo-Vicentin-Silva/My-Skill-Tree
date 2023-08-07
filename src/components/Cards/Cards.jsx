import React from "react"

import Sidebar from "../Sidebar/Sidebar"
import Card from "../Card/Card"

import { CardStyle } from "./CardsStyle"

import MercedesF1 from "../../assets/images/mercedes-f1.webp"
import MercedesF1blur from "../../assets/images/mercedes-f1-blur.webp"
import TaskList from "../../assets/images/task-list.webp"
import TaskListBlur from "../../assets/images/task-list-blur.webp"
import TelaLogin from "../../assets/images/tela-login.webp"
import TelaLoginBlur from "../../assets/images/tela-login-blur.webp"
import Paginas from "../../assets/images/paginas.webp"
import PaginasBlur from "../../assets/images/paginas-blur.webp"
import Tech from "../../assets/images/tech.webp"
import TechBlur from "../../assets/images/tech-blur.webp"
import useLanguage from "../../hooks/useLanguage."
import { useTranslation } from "react-i18next"

const Main = () => {
  const { t } = useTranslation()

  useLanguage()

  return (
    <CardStyle>
      <Sidebar />
      <h1>Projetos</h1>
      <Card
        title={"Racing F1"}
        text={t("racingF1Card")}
        link={"https://github.com/Danilo-Vicentin-Silva/RacingF1"}
        background={MercedesF1}
        blurBackground={MercedesF1blur}
      />

      <Card
        title={t("listaDeTarefas")}
        text={t("listaDeTarefasCard")}
        link="https://github.com/Danilo-Vicentin-Silva/Task-list"
        background={TaskList}
        blurBackground={TaskListBlur}
      />

      <Card
        title={t("telaLogin")}
        text={t("telaLoginCard")}
        link={"https://github.com/Danilo-Vicentin-Silva/Tela-Login"}
        background={TelaLogin}
        blurBackground={TelaLoginBlur}
      />
      <Card
        title={t("cordelModerno")}
        text={t("cordelModernoCard")}
        link={"https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"}
        background={Paginas}
        blurBackground={PaginasBlur}
      />

      <Card
        title={t("siteAndroid")}
        text={t("siteAndroidCard")}
        link={"https://github.com/Danilo-Vicentin-Silva/Site-Android"}
        background={Tech}
        blurBackground={TechBlur}
      />
      <Card
        title={t("espaçoParaMais")}
        text={t("espaçoParaMais")}
        link={"https://github.com/Danilo-Vicentin-Silva"}
      />
    </CardStyle>
  )
}

export default Main
