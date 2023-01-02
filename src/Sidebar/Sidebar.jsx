import React from "react"

import './styles/style.css'

const Sidebar = () => {
	return (
		<aside>
			<ul>
				<li>
					<a
						href="https://github.com/Danilo-Vicentin-Silva"
						rel="external"
						target="_blank"
					>
						Github
					</a>
                </li>
                <li>
					<a
						href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
						rel="external"
						target="_blank"
					>
						Linkedin
					</a>
                </li>
                <li>
					<a
						href="https://www.instagram.com/danilo_vicentin_da_silva/"
						rel="external"
						target="_blank"
					>
						Instagram
					</a>
                </li>
                <li>
					<a
                        href="mailto:Danilovicentindasilva@gmail.com?"
						rel="external"
						target="_blank"
					>
						Email
					</a>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar
