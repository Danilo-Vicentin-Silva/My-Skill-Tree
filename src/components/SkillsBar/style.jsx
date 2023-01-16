import styled from "styled-components"

export const BarStyle = styled.article`
	color: #10403b;
	background-color: #8aa6a3;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	max-width: 500px;
	
	border: 2px dashed #10403b;
	border-radius: 5px;
	padding: 40px;

	.icons {
		color: black;
		margin-right: 30px;
	}
	.icons:hover {
		transition: 1s;
		transform: rotateY(360deg);
	}
`
