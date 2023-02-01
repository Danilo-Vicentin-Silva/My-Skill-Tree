import styled from "styled-components"

export const SidebarStyle = styled.aside`
	display: flex;
	flex-wrap: wrap;
	width: 55px;
	margin-left: 30px;
	

	span > :first-child {
		color: #127369;

		height: 30px;
		width: 30px;
		border-radius: 25%;
		margin: 15px 0;
	}

	span > :first-child:hover {
		color: black;
		box-shadow: 10px 10px 5px 0px #8aa6a3;
		transition: 0.5s;
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`
