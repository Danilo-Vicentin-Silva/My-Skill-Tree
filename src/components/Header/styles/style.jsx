import styled from "styled-components"

export const HeaderStyle = styled.header`
	font-size: 2.4em;

	display: grid;
	grid-template-columns: 35vh auto;

	img {
		height: 34vh;
	}

	nav,
	ul {
		display: flex;
		align-items: center;
		justify-self: flex-start;
	}
	li {
		margin-right: 3vw;
	}

	span > :first-child {
		color: #127369;
	}
	span > :first-child:hover {
		color: black;
	}

	@media screen and (max-width: 750px) {
		grid-template-columns: 30vh auto;
	}
`
