import React from "react"

import ProjectIframe from "../ProjectIframe/ProjectIframe"

import { BigCardStyle } from "./style"

const BigCard = ({ title, image, text, iframeLink, link }) => {
	return (
		<BigCardStyle>
			<img src={image} title={title} alt={title} width="700px" />
			<p>{text}</p>
			<ProjectIframe iframeLink={iframeLink} link={link} />
			<hr />
		</BigCardStyle>
	)
}

export default BigCard
