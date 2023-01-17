import styled from "styled-components"

export const BigCardStyle = styled.article`
	display: flex;
	flex-flow: column wrap;
	align-content: center;
	align-items: center;
	margin: auto;
	margin-bottom: 20px;

	width: 80vw;

	div {
		display: none;
	}

	p {
		text-align: justify;
		font-size: 1.1em;
		width: 50vw;
		padding: 15px;
	}

	img,
	#site {
		border-radius: 10px;
	}

	#site {
		display: none;
	}

	#site:hover {
		transition: 1s;
		border: 2px solid black;
		box-shadow: 0px 0px 26px 1px rgba(0,0,0,0.75);
	}

	@media screen and (max-width: 750px) {
		img, p {
			word-spacing: 0.4em;
			text-align: left;
			width: 90vw;
		}
	}
`
