import styled from "styled-components"

export const MainStyle = styled.main`
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

	.projects {
        background-repeat: no-repeat;
        background-size: cover;
		height: 43vh;
		width: 16vw;
		border-radius: 7px;
        flex-wrap: wrap;
	}

	#sec1 {
		background-image: url("/src/styles/images/mercedes-f1.jpg");
        background-position: center right;
	}
`
