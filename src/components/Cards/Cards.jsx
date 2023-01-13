import React from "react"

import Card from "../Card/Card"
import Sidebar from "../Sidebar/Sidebar"

import { MainStyle } from "./styles/style"
// Imagens dos Cards
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

const Main = () => {
	return (
		<MainStyle>
			<Sidebar />
			<Card
				title="Racing F1"
				text="Site informativo da categoria Formula 1"
				link="https://github.com/Danilo-Vicentin-Silva/RacingF1"
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
				title="Tela Login"
				text="Tela de login charmosa e simples (sem autenticação, apenas estética)"
				link="https://github.com/Danilo-Vicentin-Silva/Tela-Login"
				background={TelaLogin}
				blurBackground={TelaLoginBlur}
			/>

			<Card
				title="Cordel Moderno"
				text="Cordel brasileiro com efeito paralax"
				link="https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"
				background={Paginas}
				blurBackground={PaginasBlur}
			/>

			<Card
				title="Site Android"
				text="Site informativo de uma história da tecnologia"
				link="https://github.com/Danilo-Vicentin-Silva/Site-Android"
				background={Tech}
				blurBackground={TechBlur}
			/>

			<Card
				title="Espaço para mais"
				text="Mais projetos vem por aí..."
				link="https://github.com/Danilo-Vicentin-Silva"
			/>
		</MainStyle>
	)
}

export default Main
