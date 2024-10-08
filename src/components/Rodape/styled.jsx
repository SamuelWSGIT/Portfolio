import styled from 'styled-components';

export const RodapeContainer = styled.footer`
  bottom: 0;
  height: fit-content;
  width: 100vw;
  margin: .5rem;
  gap: .7rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3{
    width: 100vw;
    text-align: center;
    padding-bottom: .5rem;
    border-bottom: 1px solid var(--color-text-offset);
  }
  @media screen and (max-width: 600px) {
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
  width: 98%;
  justify-content: space-between;
`

export const ContatoContainer = styled.div`
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .5rem;
    @media screen and (max-width: 600px) {
      h1,h2,h3,p{
        font-size: small;
      }
    }
`;