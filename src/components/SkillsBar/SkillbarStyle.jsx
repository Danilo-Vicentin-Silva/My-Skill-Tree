import styled from "styled-components"

export const BarStyle = styled.article`
  color: #10403b;

  max-width: 50vw;
  padding: 7px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 25px;

  span > :first-child {
    color: black;

    width: 50px;
    height: 50px;
  }
  span > :first-child:hover {
    transition: 1s;
    transform: rotateY(360deg);
  }

  @media screen and (max-width: 750px) {
    max-width: 80vw;

    span > :first-child {
      width: 40px;
    }
  }
`
