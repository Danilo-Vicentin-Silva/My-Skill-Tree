import styled from "styled-components"

export const HeaderStyle = styled.header`
	font-size: 1.2em;
	display: grid;
	grid-template-columns: 250px auto;

	img {
		height: 250px;
	}

	nav,
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	li {
		margin-right: 3vw;
	}

	.icon {
		color: #127369;
	}
	.icon:hover {
		color: black;
	}

	@media screen and (max-width: 750px) {
		grid-template-columns: 25vh auto;
		img {
			height: 25vh;
		}
		nav {
			justify-self: flex-start;
		}

		:hover {
			color: black;
		}
	}
`
