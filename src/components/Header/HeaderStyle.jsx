import styled from "styled-components"

export const HeaderStyle = styled.header`
  color: black;

  display: flex;
  padding: 30px;

  img {
    width: 100px;
    margin-right: 15px;
  }

  nav,
  ul,
  p {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 3vw;
  }

  span > :first-child {
    color: black;
    width: 40px;
    height: 40px;
  }
  span > :first-child:hover {
    color: #343434;
  }

  a:hover {
    color: black;
  }

  p {
    font-size: 1.1em;
    padding: 15px;
  }

  p > a {
    color: #0b443e;
    margin-left: 5px;
  }

  @media screen and (max-width: 1024px) {
    img {
      width: 80px;
    }
    p {
      display: none;
    }
    span > :first-child {
      width: 35px;
    }
  }
`
