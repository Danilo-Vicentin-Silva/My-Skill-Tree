import React from "react"

import logotipo from "./styles/logotipo.png"
import { HeaderStyle } from "./styles/style"

const Header = () => {
	return (
		<HeaderStyle>
			<img src={logotipo} alt="logotipo" />
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/perfil">Perfil</a>
					</li>
					<li>
						<a href="/projetos">Projetos</a>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	)
}

export default Header
