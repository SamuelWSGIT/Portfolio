import styled from 'styled-components';

export const ResumoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 3rem;
  width: 80vw;
  @media screen and (max-width: 1460px) {
        width: 95vw;
    }
`;

export const ResumoImagem = styled.div`
  margin-top: 2rem;
  width: 30%;
  @media screen and (max-width: 1460px) {
        display: none;
    }
  img {
    border-bottom: 5px solid var(--color-primary-offset);
    border-radius: 15px;
    max-width: 100%;
    height: auto;
  }
`;

export const TextoSobreMim = styled.div`
  padding-bottom: 0.5rem;
  font-size: large;
  line-height: 1.5;
`;

export const TituloSobreMim = styled.div`
  padding: 0.5rem 0;
  font-size: x-large;
`;

export const ResumoTextos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  width: 70%;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    width: 95%;
  }
`;