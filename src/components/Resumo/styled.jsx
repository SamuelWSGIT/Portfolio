import styled from 'styled-components';

export const ResumoContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5rem;
`;
export const ResumoDivisao = styled.div`
  display: flex;
  align-items: center;
  width: 70rem;
  gap: 5rem;
  justify-content: center;
`;
export const ResumoImagem = styled.div`
  width: 30%;
  img{
    border-bottom: 5px solid var(--color-primary-offset);
    border-radius: 15px;
  }
`;
export const ResumoTextos = styled.div`
  height: 60vh;
  width: 70%;
  h2{
    padding-bottom: 2rem;
  }
  p{
    padding-bottom: 1rem;
  }
`;