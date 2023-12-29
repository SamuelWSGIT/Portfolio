import styled from 'styled-components';

export const RodapeContainer = styled.footer`
  bottom: 0;
  margin-top: 5rem;
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span:first-child {
    color: var(--color-primary);
    
  }
  span{
    color: var(--color-secondary);
  }
`;