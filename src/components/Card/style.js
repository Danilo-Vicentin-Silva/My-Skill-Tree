import styled from "styled-components"

export const CardStyle = styled.section`
	color: white;
    background: #8AA6A3 url(${(props) => props.background}) no-repeat center center;
	background-size: cover;

	display: flex;
	height: 226px;
	width: 156px;
	border-radius: 7px;
	margin: 5px 5px;
	

	h3 {
		background-color: #10403B;
		padding: 5px;
		border-radius: 5px;
		box-shadow: 0px 0px 13px 1px rgba(0,0,0,5);
		align-self: center;
		margin: auto;
		pointer-events: none;
	}

	p {
		display: none; //Desfocar imagem quando interagido
	}
`
