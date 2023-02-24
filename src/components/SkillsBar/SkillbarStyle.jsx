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

	span > :first-child {
		color: black;

		width: 50px;
		height: 50px;
		margin-right: 30px;
	}
	span > :first-child:hover {
		transition: 1s;
		transform: rotateY(360deg);
	}

	@media screen and (max-width: 750px) {
		padding: 20px;
		width: 80vw;

		span > :first-child {
			margin: auto 10px;
			width: 50px;
		}
	}
`
