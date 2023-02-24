import React from "react"
import { NavLink } from "react-router-dom"
import { BiHomeAlt } from "react-icons/bi"
import { BsCodeSlash } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { GrReactjs } from "react-icons/gr"

import { HeaderStyle } from './HeaderStyle'
import logotipo from '../../assets/images/logotipo.webp'

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
			<p>
				Desenvolvido em{" "}
				<a href="https://pt-br.reactjs.org/" rel="external" target={"_blank"}>
					<span>
						<GrReactjs />
					</span>
				</a>
			</p>
		</HeaderStyle>
	)
}

export default Header
