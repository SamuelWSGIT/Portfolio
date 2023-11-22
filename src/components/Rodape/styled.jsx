import styled from 'styled-components';

export const RodapeContainer = styled.footer`
bottom: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span:first-child {
    color: var(--color-primary-offset);
    
  }
  span{
    color: var(--color-secondary-offset);
  }
  .diferente1:hover{
    span:first-child{
            color: var(--color-primary);
        }
    span{
        color: var(--color-secondary);
    }
  }
`;