import React from "react"

import Header from "/src/components/Header/Header"
import Sidebar from "/src/components/Sidebar/Sidebar"
import Cards from "/src/components/Cards/Cards"

import { HomeStyle } from "./style"

const Home = () => {
	return (
		<HomeStyle>
			<Header />
			<Sidebar />
			<Cards />
		</HomeStyle>
	)
}

export default Home
