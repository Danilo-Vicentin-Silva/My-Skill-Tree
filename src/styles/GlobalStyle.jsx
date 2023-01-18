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
		box-sizing: border-box;
    }

    body {
	    color: black;
	    background-color: var(--cor5);
	    font-family: 'Roboto Condensed', 'Courier New', Courier, monospace;
    }
	ul {
		list-style: none;
	}   
	a {
		text-decoration: none;
	}

	hr {
		border: 1px solid var(--cor2);
		margin: 20px auto;
		width: 100%;
	}
`
