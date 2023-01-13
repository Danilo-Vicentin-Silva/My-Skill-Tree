import React from "react"

import { FooterStyle } from "./style"
import { BiArrowToTop } from "react-icons/bi"

const Footer = () => {
	return (
		<FooterStyle>
			<BiArrowToTop
				id="icon"
				size={"2em"}
				onClick={() => window.scrollTo(0, 0)}
			/>
			<p>site desenvolvido por Danilo Vicentin da Silva</p>
		</FooterStyle>
	)
}

export default Footer
