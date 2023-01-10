import React from "react"
import Card from "../Card/Card"
import Sidebar from "../Sidebar/Sidebar"

import { MainStyle } from "./style"

const Main = () => {
	return (
		<MainStyle>
			<Sidebar />
			<Card
				title="Racing F1"
				text="Site informativo da categoria Formula 1"
				background="/src/styles/images/mercedes-f1.jpg"
			/>
			<Card
				title="Task List"
				text="Lista de tarefas dinâmica"
				background="/src/styles/images/task-list.png"
			/>
			<Card
				title="Tela Login"
				text="Tela de login charmosa e simples (sem autenticação, apenas estética)"
				background="/src/styles/images/tela-login.jpeg"
			/>
			<Card
				title="Cordel Moderno"
				text="Cordel brasileiro com efeito paralax"
				background="/src/styles/images/paginas.jpg"
			/>
			<Card
				title="Site Android"
				text="Site informativo de uma história da tecnologia"
				background="/src/styles/images/tech.jpg"
			/>
			<Card title="Espaço para mais" />
		</MainStyle>
	)
}

export default Main
