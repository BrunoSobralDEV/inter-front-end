//Seria mesma coisa que criar um App.css, será aplicado para toda a aplicação
//Porque fazer assim? Desse modo já posso usar JavaScript pra linkar com o ${ theme } com templateString
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;  
    background-color: ${({ theme }) => theme.colors.background};
  }
  input, button, textarea, select{
    font-family: 'Roboto', sans-serif;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover{
      filter: opacity(0.8);
    }
  }
`;

export default GlobalStyle;
