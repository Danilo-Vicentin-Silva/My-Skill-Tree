import React from "react"
import Contact from "../Contact/Contact"

import SkillBar from "../SkillsBar/SkillBar"
import SkillBar2 from "../SkillsBar/SkillBar2"

import { AboutStyle } from "./AboutMeStyle"

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
					{pegarHora()} Sou Danilo, <br />
					<i> programador em Desenvolvimento Web</i>
				</h2>
				<br />
				<p>
					Programador em desenvolvimento web com experiência em{" "}
					<strong>criar soluções web personalizadas</strong> para empresas de
					todos os tamanhos e setores. Minha especialidade é o desenvolvimento
					de sites e aplicações web, utilizando as mais{" "}
					<strong>recentes tecnologias</strong> e ferramentas disponíveis no
					mercado. Tenho habilidade em linguagens de programação como HTML, CSS,
					JavaScript, Typescript e NodeJS e ReactJS.
				</p>
				<br />
				<p>
					Tenho uma abordagem <strong>centrada no usuário</strong> para o
					desenvolvimento, trabalhando em colaboração com a equipe do cliente
					(ou só o mesmo) para garantir que as soluções entregues atendam às
					necessidades específicas de cada projeto. Estou sempre procurando
					maneiras de <strong>otimizar o desempenho e a eficiência</strong> das
					aplicações que desenvolvo, garantindo uma experiência de usuário de
					alta qualidade e um tempo de resposta rápido.
				</p>
				<br />
				<p>
					Além disso, tenho conhecimento em segurança web e me preocupo em criar
					aplicações que oferecem{" "}
					<strong>segurança e privacidade aos usuários</strong>. Estou sempre
					atualizado com as últimas tendências em desenvolvimento web e
					continuamente buscando aprender novas habilidades e técnicas. Estou
					animado em trabalhar em projetos desafiadores e em ajudar empresas a
					alcançarem seus objetivos através do desenvolvimento web. Se você está
					procurando um programador experiente e apaixonado pelo que faz, entre
					em contato comigo por email para discutir suas necessidades de
					desenvolvimento web.
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
