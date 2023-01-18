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
	color: #10403b;
	background: none;

	border: none;
	border-radius: 25%;

	span > :first-child {
		width: 30px;
		height: 30px;
	}
	span > :first-child:hover {
		color: black;
		box-shadow: 10px 10px 5px 0px #8aa6a3;
		transition: 0.5s;
	}

	@media screen and (max-width: 750px) {
		color: white;

		span > :first-child:hover {
			box-shadow: none;
			transition: none;
		}
	}
`
