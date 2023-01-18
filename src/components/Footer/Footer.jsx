import React from "react"
import { BiArrowToTop } from "react-icons/bi"

import { FooterStyle, BackOnTop } from "./style"

const Footer = () => {
	const backOnTop = () => window.scrollTo(0, 0)

	return (
		<FooterStyle>
			<BackOnTop>
				<span>
					<BiArrowToTop onClick={() => backOnTop()} />
				</span>
			</BackOnTop>

			<p>site desenvolvido por Danilo Vicentin da Silva</p>
		</FooterStyle>
	)
}

export default Footer
