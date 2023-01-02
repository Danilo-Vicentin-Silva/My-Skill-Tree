import React from "react"
import Nav from "../Nav/Nav"

import logotipo from "./styles/logotipo.png"

const Header = () => {
	return (
		<header>
            <img src={logotipo} height={"250px"} alt="logotipo" />
            <Nav />
		</header>
	)
}

export default Header
