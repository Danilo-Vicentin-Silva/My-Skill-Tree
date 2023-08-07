import styled from "styled-components"
import LoginBackground from "../../assets/images/login-background.jpg"

export const LoginStyled = styled.main`
  background: #127369 url(${LoginBackground}) no-repeat center center;
  background-size: cover;
  color: black;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  overflow: hidden;
  margin: auto;

  @media (min-width: 768px) {
    background: linear-gradient(-45deg, #bfbfbf, #127369, #8aa6a3, #4c5958);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
