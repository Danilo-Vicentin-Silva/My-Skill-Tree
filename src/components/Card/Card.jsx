import React from "react"

import { CardStyle } from "./style"

const Card = (props) => {
	return (
        <CardStyle background={props.background}>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</CardStyle>
    )
}

export default Card
