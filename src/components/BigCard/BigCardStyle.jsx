import styled from "styled-components"

export const BigCardStyle = styled.article`
	display: flex;
	flex-flow: column wrap;
	align-content: center;
	align-items: center;

	margin: auto;
	margin-bottom: 20px;

	width: 80vw;

	p {
		text-align: justify;
		font-size: 1.1em;

		width: 50vw;
		padding: 15px;
	}

	img,
	#site {
		border-radius: 10px;
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
	}

	#site {
		display: none;
	}

	#site:hover {
		box-shadow: 0px 0px 26px 1px rgba(0, 0, 0, 0.75);

		transition: 1s;
		border: 2px solid black;
	}

	@media screen and (max-width: 1024px) {
		img,
		p {
			word-spacing: 0.4em;
			text-align: left;
			width: 90vw;
		}
	}
`
