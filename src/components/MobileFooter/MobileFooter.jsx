import React from "react"
import { MdEmail } from "react-icons/md"
import { VscGithub } from "react-icons/vsc"
import { BiArrowToTop } from "react-icons/bi"

import { MobileFooterStyle } from "./style"
import { BackOnTop } from "../Footer/style"

const MobileFooter = () => {
	return (
		<MobileFooterStyle>
			<p>
				<a
					href="mailto:Danilovicentindasilva@gmail.com?"
					rel="external"
					target="_blank"
				>
					<MdEmail size={"1em"} />
					Contato
				</a>
			</p>
			<p>
				<a
					href="https://github.com/Danilo-Vicentin-Silva"
					rel="external"
					target="_blank"
				>
					<VscGithub size={"1em"} />
					Veja mais
				</a>
			</p>
			<BackOnTop>
				<BiArrowToTop size={"2em"} onClick={() => window.scrollTo(0, 0)} />
			</BackOnTop>
		</MobileFooterStyle>
	)
}

export default MobileFooter
