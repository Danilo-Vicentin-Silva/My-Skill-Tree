import styled from "@emotion/styled"

export const LanguageSwitcherStyled = styled.section`
  #welcome {
    display: flex;
    flex-flow: column wrap;
    gap: 30px;
  }

  h1 {
    font-size: 2em;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 1em;
  }

  #languages-selection {
    text-align: center;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  #languages-selection button {
    color: black;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3em;
      letter-spacing: 0.15em;

      overflow: hidden;
      border-right: 0.15em solid black;
      white-space: nowrap;
      margin: 0 auto;

      animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
    }

    h2,
    #languages-selection {
      font-size: 2em;
      animation: text-focus-in 1s 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
    }

    #languages-selection button img:hover {
      animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      outline: 1px solid #00000071;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }

  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes shadow-drop-2-center {
    0% {
      transform: translateZ(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateZ(50px);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
`
