import styled from "styled-components"

export const FooterStyle = styled.footer`
	color: #127369;
	padding: 10px;
	display: flex;
	justify-content: space-between;

	p {
		pointer-events: none;
	}

	@media screen and (max-width: 750px) {
		display: none;
	}
`

export const BackOnTop = styled.button`
	background: none;
	border: none;
	color: #10403b;
	padding: 3px;
	border-radius: 25%;

	:hover {
		color: black;
		transition: 0.5s;
		box-shadow: 10px 10px 5px 0px #8aa6a3;
	}

	@media screen and (max-width: 750px) {
		color: white;

		:hover {
			color: gray;
			box-shadow: none;
			transition: none;
		}
	}
`
