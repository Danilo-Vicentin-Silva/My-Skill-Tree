import React from "react"
import { BsGithub, BsInstagram } from "react-icons/bs"
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

import { SidebarStyle } from "./style"

const Sidebar = () => {
	return (
		<SidebarStyle>
				<ul>
					<li>
						<a
							href="https://github.com/Danilo-Vicentin-Silva"
							rel="external"
							target="_blank"
						>
							<BsGithub className="icons" color="#127369" size={"2em"} />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
							rel="external"
							target="_blank"
						>
							<AiFillLinkedin className="icons" color="#127369" size={"2em"} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/danilo_vicentin_da_silva/"
							rel="external"
							target="_blank"
						>
							<BsInstagram className="icons" color="#127369" size={"2em"} />
						</a>
					</li>
					<li>
						<a
							href="mailto:Danilovicentindasilva@gmail.com?"
							rel="external"
							target="_blank"
						>
							<AiOutlineMail className="icons" color="#127369" size={"2em"} />
						</a>
					</li>
				</ul>
		</SidebarStyle>
	)
}

export default Sidebar
