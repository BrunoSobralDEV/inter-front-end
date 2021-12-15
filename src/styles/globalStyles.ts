//Seria mesma coisa que criar um App.css, será aplicado para toda a aplicação
//Porque fazer assim? Desse modo já posso usar JavaScript pra linkar com o ${ theme } com templateString
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
      background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
