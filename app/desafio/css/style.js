import styled from "styled-components";

export const Tabuleiro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Peca = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.black === "true") {
      if (props.blue === "true") {
        return "blue";
      } else if (props.green === "true") {
        return "green";
      } else {
        return "transparent";
      }
    } else {
      return "white";
    }
  }}; 
  @media (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const Casa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => (props.black === "true" ? "black" : "white")};
  @media (max-width: 480px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: row;
`;
