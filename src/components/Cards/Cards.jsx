import React from "react"

import Card from "../Card/Card"
import Sidebar from "../Sidebar/Sidebar"
import { MainStyle } from "./style"

const Main = () => {
	return (
		<MainStyle>
			<Sidebar />
			<a
				href="https://github.com/Danilo-Vicentin-Silva/RacingF1"
				rel="external"
				target="_blank"
			>
				<Card
					title="Racing F1"
					text="Site informativo da categoria Formula 1"
					background="../src/styles/images/mercedes-f1.jpg"
					blurBackground="../src/styles/images/mercedes-f1-blur.jpg"
				/>
			</a>
			<a
				href="https://github.com/Danilo-Vicentin-Silva/Task-list"
				rel="external"
				target="_blank"
			>
				<Card
					title="Lista de tarefas"
					text="Lista de tarefas dinâmica"
					background="../src/styles/images/task-list.png"
					blurBackground="/src/styles/images/task-list-blur.jpg"
				/>
			</a>
			<a
				href="https://github.com/Danilo-Vicentin-Silva/Tela-Login"
				rel="external"
				target="_blank"
			>
				<Card
					title="Tela Login"
					text="Tela de login charmosa e simples (sem autenticação, apenas estética)"
					background="../src/styles/images/tela-login.jpeg"
					blurBackground="../src/styles/images/tela-login-blur.jpg"
				/>
			</a>
			<a
				href="https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"
				rel="external"
				target="_blank"
			>
				<Card
					title="Cordel Moderno"
					text="Cordel brasileiro com efeito paralax"
					background="../src/styles/images/paginas.jpg"
					blurBackground="../src/styles/images/paginas-blur.jpg"
				/>
			</a>
			<a
				href="https://github.com/Danilo-Vicentin-Silva/Site-Android"
				rel="external"
				target="_blank"
			>
				<Card
					title="Site Android"
					text="Site informativo de uma história da tecnologia"
					background="../src/styles/images/tech.jpg"
					blurBackground="../src/styles/images/tech-blur.jpg"
				/>
			</a>
			<a
				href="https://github.com/Danilo-Vicentin-Silva"
				rel="external"
				target="_blank"
			>
				<Card title="Espaço para mais" text="Mais projetos vem por aí..." />
			</a>
		</MainStyle>
	)
}

export default Main
