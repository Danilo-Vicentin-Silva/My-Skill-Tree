import React, { useState } from "react"
import Iframe from "react-iframe"
import { Button } from "@mui/material"

import { IframeStyle } from "./style"

const ProjectIframe = ({ title, iframeLink, link }) => {
	const [isIframeOn, setIframe] = useState(false)

	const verify = () => {
		if (isIframeOn == true) {
			return false
		} else {
			return true
		}
	}

	return (
		<IframeStyle>
			<Button color="secondary" onClick={() => setIframe(verify)}>
				Clique aqui para{" "}
				{isIframeOn ? "fechar o projeto" : "renderizar o projeto aqui mesmo"}
			</Button>
			{isIframeOn ? (
				<>
					<Iframe
						title={title}
						url={iframeLink}
						height="500px"
						width="100%"
						id="site"
					>
						Seu navegador não suporta esse recurso
					</Iframe>
					<p>
						Gostou do projeto? Contribua, compartilhe ou{" "}
						<a href={link} rel="external" target={"_blank"}>
							acesse-o
						</a>
					</p>
				</>
			) : (
				<p>Campo de renderização</p>
			)}
		</IframeStyle>
	)
}

export default ProjectIframe
