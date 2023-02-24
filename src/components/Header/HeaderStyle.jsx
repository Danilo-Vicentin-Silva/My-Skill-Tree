import styled from "styled-components"

export const HeaderStyle = styled.header`
	color: #127369;

	display: flex;
	padding: 30px;

	img {
		width: 150px;
		margin-right: 15px;
	}

	nav,
	ul,
	p {
		display: flex;
		align-items: center;
	}
	li {
		margin-right: 3vw;
	}

	span > :first-child {
		color: #127369;
		width: 40px;
		height: 40px;
	}
	span > :first-child:hover {
		color: black;
	}

	p {
		font-size: 1em;
		padding: 15px;
	}

	
	@media screen and (max-width: 1024px) {
		img {
			width: 100px;
		}
		p {
			display: none;
		}
	}
`
