import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    
    font-size: 1.6rem;
    font-family: "Bai Jamjuree", sans-serif;
  }

  ul, a {
    list-style: none;
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  button, a, input, label, textarea, p {
    font-family: "Inter", sans-serif;
  }
`;