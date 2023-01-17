import styled from "styled-components"

export const MobileFooterStyle = styled.footer`
    display: none;

    @media screen and (max-width: 750px) {
        background-color: #10403B;

        height: 30px;
        width: 100%;
        padding: 7px;
        box-shadow: 0px -8px 19px -2px rgba(0,0,0,0.75);


        display: flex;
        justify-content: space-around;
        align-items: center;
        
        position: fixed;
        bottom: 0;

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