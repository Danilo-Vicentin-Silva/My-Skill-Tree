import styled from "styled-components"

export const MainStyle = styled.main`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;

	.projects {
		background-repeat: no-repeat;
		background-size: cover;
		height: 226px;
		width: 156px;
		border-radius: 7px;
		margin: 5px 5px;
	}

	#sec1 {
		background-image: url("/src/styles/images/mercedes-f1.jpg");
		background-position: center right;
	}
	#sec2 {
		background-image: url("/src/styles/images/task-list.png");
		background-position: center center;
	}
	#sec3 {
		background-image: url("/src/styles/images/tela-login.jpeg");
		background-position: top center;
	}
	#sec4 {
		background-image: url("/src/styles/images/paginas.jpg");
		background-position: center right;
	}
	#sec5 {
		background-image: url("/src/styles/images/tech.jpg");
		background-position: center center;
	}
	#sec6 {
		background-color: #8AA6A3;
		border: 5px dotted black;
	}
`
