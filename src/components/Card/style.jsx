import styled from "styled-components"

export const CardStyle = styled.section`
	color: white;
	background: #8aa6a3 url(${(props) => props.background}) no-repeat center
		center;
	background-size: cover;

	display: flex;
	height: 226px;
	width: 156px;
	border-radius: 7px;
	margin: 5px 5px;

	transition: 2s;

	:hover {
		background-image: url(${(props) => props.blurBackground});
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
		background-color: #10403b;
		box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 5);

		display: block;
		padding: 5px;
		border-radius: 5px;
		align-self: center;
		margin: auto;
		pointer-events: none;
	}

	p,
	a {
		display: none;
		text-decoration: none;
	}

	@media screen and (max-width: 750px) {
		font-size: 0.8em;
		width: 130px;
		height: 200px;
		pointer-events: none;
	}
`
