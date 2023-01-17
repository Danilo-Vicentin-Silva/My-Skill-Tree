import React from "react"

import Header from "/src/components/Header/Header"
import BigCard from "/src/components/BigCard/BigCard"
import Footer from "/src/components/Footer/Footer"
import MobileFooter from "../../components/MobileFooter/MobileFooter"

import RacingF1 from "./styles/images/Racing f1.webp"
import ListaTarefas from "./styles/images/lista-de-tarefas.webp"
import TelaLogin from "./styles/images/tela-login.webp"
import CordelModerno from "./styles/images/cordel-moderno.webp"
import SiteAndroid from "./styles/images/site-android.webp"

const Projetos = () => {
	return (
		<>
			<Header />
			<main>
				<BigCard
					title="RacingF1"
					image={RacingF1}
					text="RacingF1 é um site informativo da categoria máxima do automobilismo, dando uma breve introdução as premissas do esporte, esse projeto pessoal foi total ideia minha, afim de fixar meus conhecimentos em HTML e CSS, e um pouco de Javascript. Esse projeto oferece um belo exemplo das minhas capacidades em construir layouts de sites desse gênero mais “jornalístico”."
					iframeLink="https://danilo-vicentin-silva.github.io/RacingF1/"
					link="https://github.com/Danilo-Vicentin-Silva/RacingF1"
				/>
				<BigCard
					title="Lista de Tarefas"
					image={ListaTarefas}
					text="Completamente desenvolvido em React, Task List é um website feito para fins didáticos, representando minha introdução ao ReactJS, onde eu aprendi diversos termos e ferramentas presentes nessa fantástica biblioteca. Como é um projeto bem iniciante, ainda não foi aprimorado para as mais novas features, e não ilustra mais meu nível de domínio de ReactJS, do qual está bem mais amplo atualmente."
					iframeLink="https://danilotasklist.netlify.app/"
					link="https://github.com/Danilo-Vicentin-Silva/Task-list"
				/>
				<BigCard
					title="Tela Login"
					image={TelaLogin}
					text="Sendo um dos meus primeiros projetos pessoais para Front End, Tela Login foi desenvolvido somente utilizando HTML e CSS. Também para fins didáticos, representou a fixação do conteúdo de Media Queries de CSS (tecnologia para tornar uma página responsiva a diferentes tamanhos de tela)."
					iframeLink="https://danilo-vicentin-silva.github.io/Tela-Login/"
					link="https://github.com/Danilo-Vicentin-Silva/Tela-Login"
				/>
				<BigCard
					title="Cordel Moderno"
					image={CordelModerno}
					text="Também representando um dos meus projetos pessoais iniciantes, esta proposta didática visa fixar e demostrar meus conhecimentos em CSS, mais especificadamente em efeito Paralax e disposição de imagens, como elas afetam o tempo de carregamento de uma página e como otimizar seu uso para propostas de design. Cordel Moderno também é uma releitura dos antigos cordéis brasileiros, agora representado em uma página web responsiva."
					iframeLink="https://danilo-vicentin-silva.github.io/Cordel-Moderno/"
					link="https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"
				/>
				<BigCard
					title="Site Android"
					image={SiteAndroid}
					text="Site que marcou o fim de uma longa jornada de estudas em HTML, CSS e Javascript básico, este conta, brevemente, a história da criação do famoso Bugdroid do sistema operacional Android. Com tecnologias como Media Query, Iframes, Navlinks, refatoração, teoria das cores, estilização de listas, organização em tags semânticas (SEO), layout responsivo, otimização... emfim, vários tópicos primordiais para se construir uma boa base de aprendizado em Web Development estão presentes neste projeto pessoal como prova do meu conhecimento, de nível Dev Júnior a Pleno, em programação de sites na parte Front End."
					iframeLink="https://danilo-vicentin-silva.github.io/Site-Android/"
					link="https://github.com/Danilo-Vicentin-Silva/Site-Android"
				/>
			</main>
			<Footer />
			<MobileFooter />
		</>
	)
}

export default Projetos
