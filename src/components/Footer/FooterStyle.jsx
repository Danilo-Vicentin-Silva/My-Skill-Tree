import styled from "styled-components"

export const FooterStyle = styled.footer`
	color: #127369;

	padding: 10px;
	display: flex;
	justify-content: space-between;

	p {
		pointer-events: none;
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`

export const BackOnTop = styled.button`
	color: #10403b;
	background: none;

	border: none;
	border-radius: 25%;

	span > :first-child {
		width: 30px;
		height: 30px;
	}
	span > :first-child:hover {
		color: black;
		box-shadow: 10px 10px 5px 0px #8aa6a3;
		transition: 0.5s;
	}

	@media screen and (max-width: 1024px) {
		color: white;

		span > :first-child:hover {
			box-shadow: none;
			transition: none;
		}
	}
`

export const MobileFooterStyle = styled.footer`
    display: none;

    @media screen and (max-width: 1024px) {
        background-color: #10403B;
        box-shadow: 0px -8px 19px -2px rgba(0,0,0,0.75);

        height: 35px;
        width: 100%;
        
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
            color: white;
        }

        a:hover {
            color: gray;
            box-shadow: none;
			transition: none;
        }
    }
`
