import styled from 'styled-components';

export const ResumoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70rem;
  gap: 5rem;
`;
export const ResumoImagem = styled.div`
  width: 30%;
  img{
    border-bottom: 5px solid var(--color-primary-offset);
    border-radius: 15px;
  }
`;
export const ResumoTextos = styled.div`
  width: 70%;
  p{
    padding: 1rem 0;
  }
`;