import React from "react"
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"

import { ContactStyle } from "./style"

const Contact = () => {
	return (
		<ContactStyle>
			<p>
				<AiOutlineMail size={"2em"} className="icon" />
				<a href="mailto:Danilovicentindasilva@gmail.com?">
					danilovicentindasilva@gmail.com
				</a>
			</p>
			<p>
				<AiOutlineLinkedin size={"2em"} className="icon" />
				<a
					href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
					rel="external"
					target="_blank"
				>
					danilo-vicentin-da-silva
				</a>
			</p>
		</ContactStyle>
	)
}

export default Contact
