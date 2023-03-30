import React from "react"

import Header from "../../components/Header/Header"
import AboutMe from "../../components/AboutMe/AboutMe"
import Footer from "../../components/Footer/Footer"
import MobileFooter from "../../components/Footer/MobileFooter"
import { Background } from '../../components/Background/Background'

const Perfil = () => {
	return (
		<Background>
			<Header />
			<AboutMe />
			<Footer />
			<MobileFooter />
		</Background>
	)
}

export default Perfil
