import React from "react"
import { SiCss3, SiJavascript, SiReact, SiHtml5 } from "react-icons/si"
import { BsSearch } from "react-icons/bs"
import { FiDatabase } from "react-icons/fi"

import { BarStyle } from "./style"

const SkillBar = () => {
	return (
		<>
			<h2>Hard Skills</h2>
			<BarStyle>
				<abbr title="Javascript">
					<span>
						<SiJavascript />
					</span>
				</abbr>
				<abbr title="ReactJS">
					<span>
						<SiReact />
					</span>
				</abbr>
				<abbr title="CSS">
					<span>
						<SiCss3 />
					</span>
				</abbr>

				<abbr title="HTML">
					<span>
						<SiHtml5 />
					</span>
				</abbr>
				<abbr title="SEO">
					<span>
						<BsSearch />
					</span>
				</abbr>
				<abbr title="Estrutura de dados">
					<span>
						<FiDatabase />
					</span>
				</abbr>
			</BarStyle>
			<br />
		</>
	)
}

export default SkillBar
