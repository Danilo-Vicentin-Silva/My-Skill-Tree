import React from "react"

import Header from "/src/components/Header/Header"
import Cards from "/src/components/Cards/Cards"

import { HomeStyle } from "./style"

const Home = () => {
	return (
		<HomeStyle>
			<Header />
			<Cards />
		</HomeStyle>
	)
}

export default Home
