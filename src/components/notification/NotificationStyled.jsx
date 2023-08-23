import styled from "styled-components";

export const NotificationStyled = styled.section`
  color: white;
  background-color: #10403b;

  padding: 10px;
  border-radius: 7px;
  box-shadow: 10px 10px 5px 0px #00000031;

  position: absolute;
  top: 40%;
  left: 40%;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  a {
    color: lightblue;
  }

  animation: scale-in-center 0.5s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes shadow-drop-center {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;
