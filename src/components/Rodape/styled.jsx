import styled from 'styled-components';

export const RodapeContainer = styled.footer`
  bottom: 0;
  margin-top: 5rem;
  height: fit-content;
  width: 90%;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 95vw;
      p{
        font-size: small;
      }
    }
    @media screen and (max-width: 400px) {
    flex-direction: column;
    }
  
  span:first-child {
    color: var(--color-primary);
    
  }
  span{
    color: var(--color-secondary);
  }
`;


export const RodapeInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ContatoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;