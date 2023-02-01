import React from "react"

import Sidebar from "../Sidebar/Sidebar"
import Card from "../Card/Card"

import { MainStyle } from "./styles/style"

import MercedesF1 from "./styles/images/mercedes-f1.webp"
import MercedesF1blur from "./styles/images/mercedes-f1-blur.webp"
import TaskList from "./styles/images/task-list.webp"
import TaskListBlur from "./styles/images/task-list-blur.webp"
import TelaLogin from "./styles/images/tela-login.webp"
import TelaLoginBlur from "./styles/images/tela-login-blur.webp"
import Paginas from "./styles/images/paginas.webp"
import PaginasBlur from "./styles/images/paginas-blur.webp"
import Tech from "./styles/images/tech.webp"
import TechBlur from "./styles/images/tech-blur.webp"
import Javascript from "./styles/images/javascript.webp"
import JavascriptBlur from "./styles/images/javascript-blur.webp"
import Page from "./styles/images/page.webp"
import PageBlur from "./styles/images/page-blur.webp"

const Main = () => {
	return (
		<MainStyle>
			<Sidebar />
			<Card
				title={"Racing F1"}
				text={"Site informativo da categoria Formula 1"}
				link={"https://github.com/Danilo-Vicentin-Silva/RacingF1"}
				background={MercedesF1}
				blurBackground={MercedesF1blur}
			/>

			<Card
				title="Lista de tarefas"
				text="Lista de tarefas dinâmica"
				link="https://github.com/Danilo-Vicentin-Silva/Task-list"
				background={TaskList}
				blurBackground={TaskListBlur}
			/>

			<Card
				title={"Tela Login"}
				text={
					"Tela de login charmosa e simples (sem autenticação, apenas estética)"
				}
				link={"https://github.com/Danilo-Vicentin-Silva/Tela-Login"}
				background={TelaLogin}
				blurBackground={TelaLoginBlur}
			/>
			<Card
				title={"Cordel Moderno"}
				text={"Cordel brasileiro com efeito paralax"}
				link={"https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"}
				background={Paginas}
				blurBackground={PaginasBlur}
			/>

			<Card
				title={"Site Android"}
				text={"Site informativo de uma história da tecnologia"}
				link={"https://github.com/Danilo-Vicentin-Silva/Site-Android"}
				background={Tech}
				blurBackground={TechBlur}
			/>

			<hr />
			<Card
				title={"Estudos JS"}
				text={"Estudos avançados de Javascript"}
				link={"https://github.com/Danilo-Vicentin-Silva/Curso-Js"}
				background={Javascript}
				blurBackground={JavascriptBlur}
			/>
			<Card
				title={"Estudos HTML&CSS"}
				text={"Estudos avançados de HTML5&CSS3"}
				link={"https://github.com/Danilo-Vicentin-Silva/Curso-HTML5-CSS3"}
				background={Page}
				blurBackground={PageBlur}
			/>
			<Card
				title={"Espaço para mais"}
				text={"Mais projetos vem por aí..."}
				link={"https://github.com/Danilo-Vicentin-Silva"}
			/>
		</MainStyle>
	)
}

export default Main
