import React from "react"

import { CardStyle } from "./style"

const Card = (props) => {
	return (
		<a href={props.link} rel="external" target="_blank">
			<CardStyle
				background={props.background}
				blurBackground={props.blurBackground}
			>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</CardStyle>
		</a>
	)
}

export default Card
