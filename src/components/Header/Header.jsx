import React from "react"
import { NavLink } from "react-router-dom"
import { BiHomeAlt } from "react-icons/bi"
import { BsCodeSlash } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"

import logotipo from "./styles/logotipo.png"
import { HeaderStyle } from "./styles/style"

const Header = () => {
	return (
		<HeaderStyle>
			<img src={logotipo} alt="logotipo" />
			<nav>
				<ul>
					<li>
						<abbr title="Home">
							<NavLink to="/">
								<BiHomeAlt size={"1.8em"} className="icon" />
							</NavLink>
						</abbr>
					</li>

					<li>
						<abbr title="Projetos">
							<NavLink to="/projetos">
								<BsCodeSlash size={"1.8em"} className="icon" />
							</NavLink>
						</abbr>
					</li>

					<li>
						<abbr title="Sobre mim">
							<NavLink to="/perfil">
								<IoPersonOutline size={"1.8em"} className="icon" />
							</NavLink>
						</abbr>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	)
}

export default Header
