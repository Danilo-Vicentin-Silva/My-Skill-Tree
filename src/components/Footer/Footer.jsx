import React from "react"
import { BiArrowToTop } from "react-icons/bi"

import { FooterStyle } from "./style"
import { BackOnTop } from "./style"

const Footer = () => {
	return (
		<FooterStyle>
			<BackOnTop>
				<BiArrowToTop size={"2em"} onClick={() => window.scrollTo(0, 0)} />
			</BackOnTop>
			<p>site desenvolvido por Danilo Vicentin da Silva</p>
		</FooterStyle>
	)
}

export default Footer
