// Pq ts e n css?
import styled from "styled-components";

//componentes com nome MAIÚSCULO
export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

//componente de background. tipando a propriedade
export const Background = styled.div<{ image: any }>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 50vh;
  background: url(${({ image }) => image});
  background-size: contain; //preencher todo o conteúdo
  z-index: 1; //sempre ficar atrás
`;

//dar um espaço entre os inputs
export const InputContainer = styled.div`
  margin-top: 67px;
  width: 90%;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  /*todo filho desse ButtonContainer*/
  p{
      font-family: 'Robot', sans-serif;
      font-size: 0.75rem; /*medida relativa para responsividade*/
      font-weight: 400;
      color: ${({theme}) => theme.colors.secondary};

      a{
        font-family: 'Robot', sans-serif;  
        font-size: 1rem;
          font-weight: 700; /*negrito*/
      }
  }
`;
