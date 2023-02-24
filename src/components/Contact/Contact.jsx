import React from "react"
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"

import { ContactStyle } from './ContactStyle'

const Contact = () => {
	return (
		<ContactStyle>
			<p>
				<span>
					<AiOutlineMail />
				</span>
				<a href="mailto:Danilovicentindasilva@gmail.com?">
					danilovicentindasilva@gmail.com
				</a>
			</p>
			<p>
				<span>
					<AiOutlineLinkedin />
				</span>
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
