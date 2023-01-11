import styled from "styled-components"

export const CardStyle = styled.section`
	color: white;
	background: #8aa6a3 url(${(props) => props.background}) no-repeat center
		center;
	background-size: cover;
	display: flex;
	height: 226px;
	border-radius: 7px;
	margin: 5px 5px;
	width: 156px;

	:hover {
		background-image: url(${(props) => props.blurBackground});
		transition: 0.4s;
		width: 256px;

		h3 {
			display: none;
		}

		p {
			color: black;
			font-weight: bolder;
			background-color: #8aa6a3bf;
			box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);

			display: block;
			border-radius: 5px;
			padding: 2px;
			align-self: center;
			margin: 5px 5px;
			pointer-events: none;
		}
	}

	h3 {
		display: block;
		background-color: #10403b;
		padding: 5px;
		border-radius: 5px;
		box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 5);
		align-self: center;
		margin: auto;
		pointer-events: none;
	}

	p {
		display: none;
	}
`
