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
import Javascript from "../../assets/images/javascript.webp"
import JavascriptBlur from "../../assets/images/javascript-blur.webp"
import Page from "../../assets/images/page.webp"
import PageBlur from "../../assets/images/page-blur.webp"
import Typescript from '../../assets/images/typescript.webp'
import TypescriptBlur from '../../assets/images/typescript-blur.webp'

const Main = () => {
	return (
		<CardStyle>
			<Sidebar />
			<h1>Projetos</h1>
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
				title={"Estudos TS"}
				text={"Estudos avançados de TypeScript"}
				link={"https://github.com/Danilo-Vicentin-Silva/curso-ts"}
				background={Typescript}
				blurBackground={TypescriptBlur}
			/>
			<Card
				title={"Espaço para mais"}
				text={"Mais projetos vem por aí..."}
				link={"https://github.com/Danilo-Vicentin-Silva"}
			/>
		</CardStyle>
	)
}

export default Main
