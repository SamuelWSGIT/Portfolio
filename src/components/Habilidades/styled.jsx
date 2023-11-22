import styled from 'styled-components';

export const HabilidadesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;
export const HabilidadesLista = styled.ul`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

export const HabilidadesIcones = styled.li`
    width: 6rem;
    height: 6rem;
    display: flex;
    flex-direction: column;
    
  background: -webkit-linear-gradient(225deg, rgb(242, 116, 5), rgb(87, 230, 136), rgb(168, 131, 251)) 0% 0% / 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 2s ease 0s infinite normal none running fontgradient;
  @-webkit-keyframes fontgradient {
  0% {
    background-position: 0% 92%
  }
  50% {
    background-position: 100% 9%
  }
  100% {
    background-position: 0% 92%
  }
}

@-moz-keyframes fontgradient {
  0% {
    background-position: 0% 92%
  }
  50% {
    background-position: 100% 9%
  }
  100% {
    background-position: 0% 92%
  }
}

@keyframes fontgradient {
  0% {
    background-position: 0% 92%
  }
  50% {
    background-position: 100% 9%
  }
  100% {
    background-position: 0% 92%
  }

    }
    
    p{
        text-align: center;
        font-size: 1rem;
    }
    img{
        height: 4rem;
    }
    `;