import styled from 'styled-components';

export const RodapeContainer = styled.footer`
  bottom: 0;
  margin-top: 5rem;
  height: 2rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
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