import React from "react"

import Header from "/src/components/Header/Header"
import Sidebar from "/src/components/Sidebar/Sidebar"

function pegarHora() {
	const data = new Date()
	const hora = data.getHours()
	if (hora >= 6 && hora <= 11) {
		return 'Bom dia!'
	} else if (hora <= 17) {
		return 'Boa tarde!' 
	} else {
		return 'Boa noite!'
	}
}

const Perfil = () => {
	return (
		<div>
			<Header />
			<Sidebar />
			<section>
				<h1>
					{pegarHora()} sou Danilo, programador Front End de desenvolvimento na
					Web
				</h1>
				<p>
					Com bastante experiência em computadores desde pequeno, eu embarquei
					no mundo da programação em Janeiro de 2021, sem ideia de como as
					'simples' linhas de código binário se transformavam em toda uma
					interface interativa nos computadores.
				</p>
				<p>Atualmente, depois de um  ano estudando, sou programador Front End na área de Web Development, disposto a trabalhar em grandes empresas que valorizam o bom uso da tecnogia e seus desenvolvedores, que tanto trabalham por um sistema eficiente, sem falhas (se possível) e sempre usando as tecnologia mais atuais</p>
				<p>Com tudo que aprendi, sempre valorizando a autocrítica para busca de uma base mais sólida, busco ajudar uma equipe, ou até trabalhar sozinho (se necessário), para construir um site totalmente seguro, interativo e eficiente.</p>
			</section>
		</div>
	)
}

export default Perfil
