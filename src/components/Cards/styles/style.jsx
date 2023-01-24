import styled from "styled-components"

export const MainStyle = styled.main`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;

	max-width: 97vw;

	@media screen and (max-width: 750px) {
		justify-content: center;
	}
	`