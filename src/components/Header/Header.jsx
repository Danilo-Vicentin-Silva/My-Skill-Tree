import React from "react"
import { NavLink } from "react-router-dom"

import logotipo from "./styles/logotipo.png"
import { HeaderStyle } from "./styles/style"

const Header = () => {
	let activeStyle = {
		color: "black",
		textDecoration: "overline",
	}

	return (
		<HeaderStyle>
			<img src={logotipo} alt="logotipo" />
			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/perfil"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							perfil
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projetos"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Projetos
						</NavLink>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	)
}

export default Header
