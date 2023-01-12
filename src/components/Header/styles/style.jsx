import styled from "styled-components"

export const HeaderStyle = styled.header`
	font-size: 1.2em;
	display: grid;
	grid-template-columns: 250px auto;

	img {
		height: 250px;
	}

	nav,
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	li {
		margin-right: 3vw;
	}
    a {
        color: #10403B;
    }
    a:hover {
        color: #000000e5;
    }

`
