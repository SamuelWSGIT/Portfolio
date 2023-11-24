import styled from 'styled-components';

export const ResumoContainer = styled.div`
  display: flex;
  width: 70rem;
  gap: 9rem;
`;
export const ResumoImagem = styled.div`
  width: 30%;
  border-bottom: 5px solid var(--color-primary-offset);
  border-radius: 100% 15px 15px 15px;
`;
export const ResumoTextos = styled.div`
  width: 70%;
  p{
    padding: 1rem 0;
  }
`;