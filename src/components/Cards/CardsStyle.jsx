import styled from "styled-components"

export const CardStyle = styled.main`
	display: flex;
	flex-wrap: wrap;

	width: 95vw;

	hr {
		margin: 0;
		visibility: hidden;
	}

	@media screen and (max-width: 1024px) {
		justify-content: center;

		hr {
			display: none;
		}
	}
`
