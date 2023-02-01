import styled from "styled-components"

export const AboutStyle = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	section {
		font-size: 1.2em;
		width: 50vw;
	}

	h2 {
		margin: 20px auto;
	}

	ul {
		margin-top: 10px;
		color: #10403b;
		list-style: circle;
		list-style-position: inside;
		columns: 2;
	}

	@media screen and (max-width: 1024px) {
		h2 {
			font-size: 1em;
		}
		section {
			width: 80vw;
		}
	}
`
