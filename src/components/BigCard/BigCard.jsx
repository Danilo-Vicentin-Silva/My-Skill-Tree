import React from "react"
import ProjectIframe from "../ProjectIframe/ProjectIframe"

import { BigCardStyle } from "./BigCardStyle"
import LaunchIcon from '@mui/icons-material/Launch';

const BigCard = ({ title, image, text, iframeLink, link }) => {
	return (
		<BigCardStyle>
			<img src={image} title={title} alt={title} />
			<p>{text}</p>
			<p>
				<a href={link} rel="external" target={"_blank"}>
					Acesse{" "}
					<span>
						<LaunchIcon />
					</span>
				</a>
			</p>
			{iframeLink && <ProjectIframe iframeLink={iframeLink} link={link} />}
			<hr />
		</BigCardStyle>
	)
}

export default BigCard
