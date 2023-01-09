import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	:root {
	    --cor1: #10403B;
	    --cor2: #4C5958;
	    --cor3: #127369;
	    --cor4: #8AA6A3;
	    --cor5: #BFBFBF;
	        }

    * {
	    margin: 0;
	    padding: 0;
    }

    body {
	    background-color: var(--cor5);
	    color: black;
	    font-family: 'Roboto Condensed', sans-serif;
    }
	ul {
		list-style: none;
	}   
	a {
		text-decoration: none;
	}
`
