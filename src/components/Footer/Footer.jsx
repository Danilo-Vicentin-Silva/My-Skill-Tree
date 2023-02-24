import React from "react"

import { FooterStyle, BackOnTop } from './FooterStyle'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

const Footer = () => {
	const backOnTop = () => window.scrollTo(0, 0)

	return (
		<FooterStyle>
			<BackOnTop>
				<span>
					<VerticalAlignTopIcon onClick={() => backOnTop()} />
				</span>
			</BackOnTop>

			<p>site desenvolvido por Danilo Vicentin da Silva</p>
		</FooterStyle>
	)
}

export default Footer
