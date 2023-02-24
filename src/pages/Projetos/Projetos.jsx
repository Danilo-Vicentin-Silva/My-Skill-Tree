import React from "react"
import Header from "../../components/Header/Header"
import BigCard from "../../components/BigCard/BigCard"
import Footer from "../../components/Footer/Footer"
import MobileFooter from "../../components/Footer/MobileFooter"

import { ProjetosStyle } from "./ProjetosStyle"
import RacingF1 from "../../assets/images/racing-f1.webp"
import ListaTarefas from "../../assets/images/lista-de-tarefas.webp"
import TelaLogin from "../../assets/images/tela-login-apresentacao.webp"
import CordelModerno from "../../assets/images/cordel-moderno.webp"
import SiteAndroid from "../../assets/images/site-android.webp"
import CursoJavascript from "../../assets/images/curso-javascript.webp"
import CursoHtmlCss from "../../assets/images/curso-html-css.webp"
import CursoTsApresentacao from "../../assets/images/curso-ts-apresentacao.webp"

const Projetos = () => {
	return (
		<ProjetosStyle>
			<Header />
			<main>
				<BigCard
					title={"RacingF1"}
					image={RacingF1}
					text={
						"RacingF1 é um site informativo da categoria máxima do automobilismo, dando uma breve introdução as premissas do esporte, esse projeto pessoal foi total ideia minha, afim de fixar meus conhecimentos em HTML e CSS, e um pouco de Javascript. Esse projeto oferece um belo exemplo das minhas capacidades em construir layouts de sites desse gênero mais “jornalístico”."
					}
					iframeLink={"https://danilo-vicentin-silva.github.io/RacingF1/"}
					link={"https://github.com/Danilo-Vicentin-Silva/RacingF1"}
				/>
				<BigCard
					title={"Lista de Tarefas"}
					image={ListaTarefas}
					text={
						"Completamente desenvolvido em React, Task List é um website feito para fins didáticos, representando minha introdução ao ReactJS, onde eu aprendi diversos termos e ferramentas presentes nessa fantástica biblioteca. Como é um projeto bem iniciante, ainda não foi aprimorado para as mais novas features, e não ilustra mais meu nível de domínio de ReactJS, do qual está bem mais amplo atualmente."
					}
					iframeLink={"https://danilotasklist.netlify.app/"}
					link={"https://github.com/Danilo-Vicentin-Silva/Task-list"}
				/>
				<BigCard
					title="Tela Login"
					image={TelaLogin}
					text="Sendo um dos meus primeiros projetos pessoais para Front End, Tela Login foi desenvolvido somente utilizando HTML e CSS. Também para fins didáticos, representou a fixação do conteúdo de Media Queries de CSS (tecnologia para tornar uma página responsiva a diferentes tamanhos de tela)."
					iframeLink={"https://danilo-vicentin-silva.github.io/Tela-Login/"}
					link={"https://github.com/Danilo-Vicentin-Silva/Tela-Login"}
				/>
				<BigCard
					title={"Cordel Moderno"}
					image={CordelModerno}
					text={
						"Também representando um dos meus projetos pessoais iniciantes, esta proposta didática visa fixar e demostrar meus conhecimentos em CSS, mais especificadamente em efeito Paralax e disposição de imagens, como elas afetam o tempo de carregamento de uma página e como otimizar seu uso para propostas de design. Cordel Moderno também é uma releitura dos antigos cordéis brasileiros, agora representado em uma página web responsiva."
					}
					iframeLink={"https://danilo-vicentin-silva.github.io/Cordel-Moderno/"}
					link={"https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"}
				/>
				<BigCard
					title={"Site Android"}
					image={SiteAndroid}
					text={
						"Site que marcou o fim de uma longa jornada de estudas em HTML, CSS e Javascript básico, este conta, brevemente, a história da criação do famoso Bugdroid do sistema operacional Android. Com tecnologias como Media Query, Iframes, Navlinks, refatoração, teoria das cores, estilização de listas, organização em tags semânticas (SEO), layout responsivo, otimização... emfim, vários tópicos primordiais para se construir uma boa base de aprendizado em Web Development estão presentes neste projeto pessoal como prova do meu conhecimento, de nível Dev Júnior a Pleno, em programação de sites na parte Front End."
					}
					iframeLink={"https://danilo-vicentin-silva.github.io/Site-Android/"}
					link={"https://github.com/Danilo-Vicentin-Silva/Site-Android"}
				/>
				<BigCard
					title={"Estudos Javascript"}
					image={CursoJavascript}
					text={
						"Meu mais avançado projeto (no quesito técnico) é o meu 'curso' de JS que realizei estudando a documentação oficial (ECMANScript), lendo livros, assistindo tutoriais e mais outras técnicas que me ajudaram a evoluir mais e mais nessa incrível linguagem de programação. Aqui é um repositório de que tenho muito orgulho de dizer que existem milhares de práticas que estudei ao longo do tempo envolvendo JS. Os códigos vão do básico de JS, até o mais avançado (como estruturas de dados e algoritmos de busca)"
					}
					link={"https://github.com/Danilo-Vicentin-Silva/Curso-Js"}
				/>
				<BigCard
					title={"Estudos HTML e CSS"}
					image={CursoHtmlCss}
					text={
						"Outro repositório bem 'educativo' por assim dizer, este projeto comprova meus anos estudando HTML&CSS, em, principalmente, documentações como Mozila Web Docs e W3schools, e vídeos-tutoriais de ótimos canais de tecnologia. Esse estudo começou, do entendimento de como a internet funciona, até estudos de segurança na mesma. E, obviamente, muitas coisas sobre HTML5 (formulários, semântica, tags e etc) e também muito sobre CSS3 (Media Query, responsividade, layouts, teoria das cores e etc)"
					}
					link={"https://github.com/Danilo-Vicentin-Silva/Curso-HTML5-CSS3"}
				/>
				<BigCard
					title={"Estudos Typescript"}
					image={CursoTsApresentacao}
					text={
						"Repositório onde eu estudo a fundo a linguagem de programação typescript, testando códigos, fixando conhecimentos, e lendo a documentação oficial. Nesse estudo eu observo o contraste  do TS com o JS, que não é tão pequeno quanto aparenta ser. Minha primeira linguagem de programação com forte tipagem e mais parecida com as convencionais (Java, C#, entre outros) viso aumentar meu nível com essa incrível linguagem."
					}
					link={"https://github.com/Danilo-Vicentin-Silva/curso-ts"}
				/>
			</main>
			<Footer />
			<MobileFooter />
		</ProjetosStyle>
	)
}

export default Projetos
