import styled from "styled-components"

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