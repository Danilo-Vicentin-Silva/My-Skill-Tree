import React from "react"
import SkillBar from "../SkillsBar/SkillBar"
import SkillBar2 from "../SkillsBar/SkillBar2"

import { AboutStyle } from "./style"

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
					{pegarHora()} <br /> Sou Danilo, programador Front End em{" "}
					<i>Desenvolvimento Web</i>
				</h2>
				<br />
				<p>
					Com bastante experiência em computadores desde pequeno, eu embarquei
					no mundo da programação em Janeiro de 2021, sem ideia de como as
					'simples' linhas de código binário se transformavam em toda uma
					interface interativa nos computadores.
				</p>
				<br />
				<p>
					Atualmente, depois de um ano estudando, sou programador Front End na
					área de Web Development, disposto a trabalhar em grandes empresas que
					valorizam o bom uso da tecnogia e seus desenvolvedores, que tanto
					trabalham por um sistema eficiente, sem falhas (se possível) e sempre
					usando as tecnologia mais atuais. Ou até trabalhar como Freelancer
					para diversos empreendedores, ainda estudo qual vertente irei seguir.
				</p>
				<br />
				<p>
					Com tudo que aprendi, sempre valorizando a autocrítica para busca de
					uma base mais sólida, busco ajudar uma equipe, ou até trabalhar
					sozinho (se necessário), para construir um site totalmente seguro,
					interativo e eficiente. Ainda não tenho experiência de trabalho, porém
					todos os dias da semana estou estudando ou desenvolvendo algum projeto
					para manter minhas capacidades em dia.
				</p>
			</section>
			<SkillBar />
			<section>
				<p>
					Sempre estudando as documentações oficiais, aprendendo com
					profissionais experientes na área Front End e estudando as melhores
					práticas do mercado, tenho experiência de nível Júnior a Pleno nas
					seguintes tecnologias:
				</p>
				<ul>
					<li>ReactJS</li>
					<li>Javascript</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
				<br />
			</section>
			<SkillBar2 />
			<section>
				<p>
					Também conheço a necessidade de desenvolver, além de capacidades
					técnicas, capacidades emocionais e morais para ajudar a mediá-las e
					fazer valer em um ambiente de trabalho, afim de atingir um outro
					patamar de desenvolvimento e entrega de produto. Sendo assim, me
					considero:
				</p>
				<ul>
					<li>Criativo</li>
					<li>Esforçado</li>
					<li>Focado</li>
					<li>Autodidata</li>
					<li>Organizado</li>
				</ul>
			</section>
		</AboutStyle>
	)
}

export default AboutMe
