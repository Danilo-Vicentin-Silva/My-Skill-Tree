import React from "react"

import Header from "/src/components/Header/Header"
import Sidebar from "/src/components/Sidebar/Sidebar"
import Cards from "/src/components/Cards/Cards"

import './styles/style.css'

const Home = () => {
	return (
		<div>
			<Header />
			<Sidebar />
			<Cards />
		</div>
	)
}

export default Home
