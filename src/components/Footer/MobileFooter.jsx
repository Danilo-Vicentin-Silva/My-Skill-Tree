import React from "react"
import { MdEmail } from "react-icons/md"
import { VscGithub } from "react-icons/vsc"
import { BiArrowToTop } from "react-icons/bi"

import { MobileFooterStyle } from './FooterStyle'
import { BackOnTop } from './FooterStyle'

const MobileFooter = () => {
	const backOnTop = () => window.scrollTo(0, 0)

	return (
		<MobileFooterStyle>
			<p>
				<a
					href="mailto:Danilovicentindasilva@gmail.com?"
					rel="external"
					target="_blank"
				>
					<span>
						<MdEmail />
					</span>
					Contato
				</a>
			</p>
			<p>
				<a
					href="https://github.com/Danilo-Vicentin-Silva"
					rel="external"
					target="_blank"
				>
					<span>
						<VscGithub />
					</span>
					Veja mais
				</a>
			</p>
			<BackOnTop>
				<span>
					<BiArrowToTop onClick={() => backOnTop()} />
				</span>
			</BackOnTop>
		</MobileFooterStyle>
	)
}

export default MobileFooter
