import React from "react"
import { Background } from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import BigCard from "../../components/BigCard/BigCard"
import Footer from "../../components/Footer/Footer"
import MobileFooter from "../../components/Footer/MobileFooter"

import RacingF1 from "../../assets/images/racing-f1.webp"
import ListaTarefas from "../../assets/images/lista-de-tarefas.webp"
import TelaLogin from "../../assets/images/tela-login-apresentacao.webp"
import CordelModerno from "../../assets/images/cordel-moderno.webp"
import SiteAndroid from "../../assets/images/site-android.webp"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage."

const Projetos = () => {
  const { t } = useTranslation()
  useLanguage()

  return (
    <Background>
      <Header />
      <main>
        <BigCard
          title={"RacingF1"}
          image={RacingF1}
          text={t("racingF1Descricao")}
          iframeLink={"https://danilo-vicentin-silva.github.io/RacingF1/"}
          link={"https://github.com/Danilo-Vicentin-Silva/RacingF1"}
        />
        <BigCard
          title={"Lista de Tarefas"}
          image={ListaTarefas}
          text={t("listaDeTarefasDescricao")}
          iframeLink={"https://danilotasklist.netlify.app/"}
          link={"https://github.com/Danilo-Vicentin-Silva/Task-list"}
        />
        <BigCard
          title="Tela Login"
          image={TelaLogin}
          text={t("telaDeLoginDescricao")}
          iframeLink={"https://danilo-vicentin-silva.github.io/Tela-Login/"}
          link={"https://github.com/Danilo-Vicentin-Silva/Tela-Login"}
        />
        <BigCard
          title={"Cordel Moderno"}
          image={CordelModerno}
          text={t("cordelModernoDescricao")}
          iframeLink={"https://danilo-vicentin-silva.github.io/Cordel-Moderno/"}
          link={"https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"}
        />
        <BigCard
          title={"Site Android"}
          image={SiteAndroid}
          text={t("siteAndroidDescricao")}
          iframeLink={"https://danilo-vicentin-silva.github.io/Site-Android/"}
          link={"https://github.com/Danilo-Vicentin-Silva/Site-Android"}
        />
      </main>
      <Footer />
      <MobileFooter />
    </Background>
  )
}

export default Projetos
