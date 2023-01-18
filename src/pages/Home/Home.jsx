import React from "react"

import Header from "/src/components/Header/Header"
import Cards from "/src/components/Cards/Cards"
import Footer from "/src/components/Footer/Footer"
import MobileFooter from "../../components/MobileFooter/MobileFooter"

const Home = () => {
	return (
		<>
			<Header />
			<Cards />
			<Footer />
			<MobileFooter />
		</>
	)
}

export default Home
