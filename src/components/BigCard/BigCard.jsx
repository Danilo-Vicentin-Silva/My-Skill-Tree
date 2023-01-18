import React from "react"
import { BiLinkExternal } from "react-icons/bi"

import ProjectIframe from "../ProjectIframe/ProjectIframe"

import { BigCardStyle } from "./style"

const BigCard = ({ title, image, text, iframeLink, link }) => {
	return (
		<BigCardStyle>
			<img src={image} title={title} alt={title} />
			<p>{text}</p>
			<p>
				<a href={link} rel="external" target={"_blank"}>
					Acesse{" "}
					<span>
						<BiLinkExternal />
					</span>
				</a>
			</p>
			<ProjectIframe iframeLink={iframeLink} link={link} />
			<hr />
		</BigCardStyle>
	)
}

export default BigCard
