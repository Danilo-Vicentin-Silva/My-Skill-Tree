import React from "react"

import { ContactStyle } from "./style"
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"

const Contact = () => {
	return (
		<ContactStyle>
			<a href="mailto:Danilovicentindasilva@gmail.com?">
				<AiOutlineMail size={"2em"} className="icon" /> <br />
				danilovicentindasilva@gmail.com
			</a>
			<a
				href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
				rel="external"
				target="_blank"
			>
				<AiOutlineLinkedin size={"2em"} className="icon" /> <br />
				danilo-vicentin-da-silva
			</a>
		</ContactStyle>
	)
}

export default Contact
