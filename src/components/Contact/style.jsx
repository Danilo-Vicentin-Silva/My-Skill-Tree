import styled from "styled-components"

export const ContactStyle = styled.section`
	display: flex;
	justify-content: space-around;

	p {
		font-size: 0.8em;
		margin: 10px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	a {
		color: #10403b;
		text-decoration: underline;
	}

	a:hover {
		color: black;
		text-decoration: none;
	}

	.icon {
		text-align: center;
		color: #10403b;
	}

	@media screen and (max-width: 750px) {
		a {
			font-size: 0.8em;
			margin-bottom: 50px;
		}
	}
`
