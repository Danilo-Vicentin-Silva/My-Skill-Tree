import React from "react"
import { SiCss3, SiJavascript, SiReact, SiHtml5 } from "react-icons/si"

import { BarStyle } from "./style"

const SkillBar = () => {
	return (
		<BarStyle>
			<h2>Hard Skills</h2>
			<SiCss3 size={"4em"} />
			<SiJavascript size={"4em"} />
			<SiReact size={"4em"} />
			<SiHtml5 size={"4em"} />
		</BarStyle>
	)
}

export default SkillBar
