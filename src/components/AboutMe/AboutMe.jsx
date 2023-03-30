import React from "react"
import Contact from "../Contact/Contact"

import SkillBar from "../SkillsBar/SkillBar"
import SkillBar2 from "../SkillsBar/SkillBar2"

import { AboutStyle } from './AboutMeStyle'

const AboutMe = () => {
	function pegarHora() {
		const data = new Date()
		const hora = data.getHours()
		if (hora >= 6 && hora <= 11) {
			return "Bom dia!"
		} else if (hora <= 17) {
			return "Boa tarde!"
		} else {
			return "Boa noite!"
		}
	}

	return (
		<AboutStyle>
			<section>
				<h2>
					{pegarHora()} Sou Danilo, <i>Desenvolvedor Web (Front End)</i>
				</h2>
				<br />
				<p>
					Com grande experiência em computadores, comecei meus estudos de
					programação em Janeiro de 2021, com o objetivo de se tornar um
					programador <strong>Full Stack em desenvolvimento web</strong>. Tudo
					começou com Javascript e Python, onde explorei como funcionava a
					lógica de programação com eles. Preferi ficar apenas com o{" "}
					<strong>JS, HTML e CSS</strong> no começo, onde explorei, com
					documentações e videoaulas, como funcionava o{" "}
					<i>desenvolvimento web</i>.
				</p>
				<br />
				<p>
					Passado um ano estudando quase todos os dias, me tornei um
					desenvolvedor de sites na Front End, com conhecimentos aprofundados na
					área (SEO, Web Design, UI&UX, Lógica de Programação, Estrutura de
					Dados com Javascript, entre outros) já desenvolvi diversos projetos
					pessoais afim de fixar esses conhecimentos, aprimorar meu "repertório"
					e melhorar minha <strong>eficiência de trabalho</strong>.
				</p>
				<br />
				<p>
					Com tudo que aprendi, sou capaz de desenvolver sites eficientes,
					interativos, semânticos, de fácil manutenção e diversos outros
					atributos que qualquer site de sucesso deve ter (pelo menos na
					
					<strong> Frontend</strong>).
				</p>
			</section>
			<SkillBar />
			<section>
				<p>
					Sempre estudando as documentações oficiais, seguindo newsletters,
					assistindo videoaulas e estudando muito, prezo por estar sempre
					evoluindo em minha área, e sempre utilizando as melhores tecnologias
					do mercado de programação, sendo elas:
				</p>
				<ul>
					<li>ReactJS</li>
					<li>Javascript</li>
					<li>Typescript</li>
					<li>Estruturas de dados</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>SEO</li>
				</ul>
				<br />
			</section>
			<SkillBar2 />
			<section>
				<p>
					Também conheço a necessidade de desenvolver, além de capacidades
					técnicas, capacidades emocionais e morais para ajudar a mediá-las e
					fazer valer em um ambiente de trabalho, afim de atingir um{" "}
					<strong>outro patamar</strong> de desenvolvimento e entrega de
					produto. Sendo assim, me considero:
				</p>
				<ul>
					<li>Marketing Digital</li>
					<li>Criativo</li>
					<li>Esforçado</li>
					<li>Focado</li>
					<li>Autodidata</li>
					<li>Organizado</li>
				</ul>
			</section>
			<h2>Interessado em meu trabalho?</h2>
			<Contact />
		</AboutStyle>
	)
}

export default AboutMe
