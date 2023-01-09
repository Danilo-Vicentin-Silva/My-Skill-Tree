import React from "react"
import Sidebar from "../Sidebar/Sidebar"

import { MainStyle } from "./style"

const Main = () => {
	return (
		<MainStyle>
			<Sidebar />
			<section className="projects" id="sec1">
				<h3>Racing F1</h3>
				<p className="hidden-text">Site informativo da categoria Formula 1</p>
			</section>
			<section className="projects" id="sec2">
				<h3>Task List</h3>
				<p className="hidden-text">Lista de tarefas dinâmica</p>
			</section>
			<section className="projects" id="sec3">
				<h3>Tela Login</h3>
				<p className="hidden-text">Tela de login charmosa</p>
			</section>
			<section className="projects" id="sec4">
				<h3>Cordel Moderno</h3>
				<p className="hidden-text">Cordel brasileiro com efeito paralax</p>
			</section>
			<section className="projects" id="sec5">
				<h3>Site Android</h3>
				<p className="hidden-text">
					Site informativo de uma história da tecnologia
				</p>
			</section>
			<section className="projects" id="sec6">
				<h3>Espaço para mais</h3>
			</section>
		</MainStyle>
	)
}

export default Main
