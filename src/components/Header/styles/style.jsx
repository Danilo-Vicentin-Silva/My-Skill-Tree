import styled from "styled-components"

export const HeaderStyle = styled.header`
	color: #127369;

	display: flex;
	padding: 30px;

	img {
		width: 150px;
		margin-right: 30px;
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

	p > a > span {
		height: 50px;
		margin-left: 10px;
	}

	@media screen and (max-width: 750px) {
		img {
			width: 100px;
		}
		p {
			display: none;
		}
	}
`
