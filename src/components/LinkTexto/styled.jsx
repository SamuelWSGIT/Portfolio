import styled from 'styled-components';

export const LinkTextoContainer = styled.div`
 .linkEditado.active{
  div{
    color: var(--color-secondary);

  }
 }
  display: flex;
  gap: 1rem;
  color: var(--color-text);
  a{
    display: flex;
    text-decoration: none;
    gap: 1rem;
  }
  .linkEditado{
    display: flex;
    gap: 1rem;
    position: relative;
  }
  .linkEditado:after{
      content: '';
      width: 0;
      height: 3px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translate(-50%);
      background: var(--color-text);
      transition: width 0.3s;
    }
  .linkEditado:hover:after{
      content: '';
      width: 50%;
      height: 3px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      background: white;
    }
`;