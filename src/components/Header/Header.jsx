import React from "react"
import { NavLink } from "react-router-dom"
import { BiHomeAlt } from "react-icons/bi"
import { BsCodeSlash } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"

import { HeaderStyle } from "./styles/style"
import logotipo from "./styles/logotipo.png"

const Header = () => {
	return (
		<HeaderStyle>
			<img src={logotipo} alt="logotipo" />
			<nav>
				<ul>
					<li>
						<abbr title="Home">
							<NavLink to="/">
								<span>
									<BiHomeAlt />
								</span>
							</NavLink>
						</abbr>
					</li>

					<li>
						<abbr title="Projetos">
							<NavLink to="/projetos">
								<span>
									<BsCodeSlash />
								</span>
							</NavLink>
						</abbr>
					</li>

					<li>
						<abbr title="Sobre mim">
							<NavLink to="/perfil">
								<span>
									<IoPersonOutline />
								</span>
							</NavLink>
						</abbr>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	)
}

export default Header
