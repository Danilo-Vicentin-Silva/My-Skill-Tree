import React from "react"
import { SiCss3, SiJavascript, SiReact, SiHtml5 } from "react-icons/si"

import { BarStyle } from "./style"

const SkillBar = () => {
	return (
		<>
			<h2>Hard Skills</h2>
			<BarStyle>
				<abbr title="Javascript">
					<SiJavascript className="icons" size={"4em"} />
				</abbr>
				<abbr title="ReactJS">
					<SiReact className="icons" size={"4em"} />
				</abbr>
				<abbr title="CSS">
					<SiCss3 className="icons" size={"4em"} />
				</abbr>

				<abbr title="HTML">
					<SiHtml5 className="icons" size={"4em"} />
				</abbr>
			</BarStyle>
			<br />
		</>
	)
}

export default SkillBar
