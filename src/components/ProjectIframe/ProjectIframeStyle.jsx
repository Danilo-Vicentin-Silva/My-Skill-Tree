import styled from "styled-components"

export const IframeStyle = styled.section`
	text-align: center;

	p {
      color: white;
      background-color: #4C5958;
      text-align: center;

		border: 2px dashed black;
      border-radius: 10px;
      margin-top: 10px;
	}
   a {
      color: darkblue;
   }
   a:hover {
      color: #0000ff;
      text-decoration: overline;
   }

   @media screen and (max-width: 1024px) {
      display: none;
   }
`
