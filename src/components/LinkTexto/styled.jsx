import styled from 'styled-components';

export const LinkTextoContainer = styled.div`
 .linkEditado.active, .linkEditadoProjeto.active{
  div{
    color: var(--color-secondary);
  }
 }
  display: flex;
  gap: .5rem;
  color: var(--color-text);
  a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }
  .linkEditadoProjeto{
    gap: 0rem;
    display: flex;
    flex-direction: column;
  }
  .linkEditado{
    display: flex;
    flex-direction: row;
    gap: .5rem;
    position: relative;
    a{
      display: flex;
    }
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