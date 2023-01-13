import React from "react"

import Header from "/src/components/Header/Header"
import Cards from "/src/components/Cards/Cards"
import Footer from "/src/components/Footer/Footer"

import { HomeStyle } from "./style"

const Home = () => {
	return (
		<HomeStyle>
			<Header />
			<Cards />
			<Footer />
		</HomeStyle>
	)
}

export default Home
