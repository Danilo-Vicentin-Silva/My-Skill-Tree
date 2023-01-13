import styled from "styled-components"

export const FooterStyle = styled.footer`
	color: #127369;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    p {
        pointer-events: none;
    }

	#icon {
		color: #10403B;
		padding: 3px;
		border-radius: 25%;
	}

	#icon:hover {
		color: black;
		transition: 0.5s;
		box-shadow: 10px 10px 5px 0px #8aa6a3;
	}
`
