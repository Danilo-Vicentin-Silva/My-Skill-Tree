import styled from "styled-components"

export const ContactStyle = styled.section`
	display: flex;
	justify-content: space-around;

	a {
		color: #10403b;
		text-decoration: underline;

		margin: 10px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	a:hover {
		color: black;
		text-decoration: none;
	}

	.icon {
		text-align: center;
		color: #10403b;
	}
`
