import styled from 'styled-components';

export const HabilidadesContainer = styled.section`
    height: 70vh;
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;
export const HabilidadesLista = styled.ul`
    display: flex;
    justify-content: start;
    height: 8rem;
    gap: 1rem;
`;

export const HabilidadesIcones = styled.li`
    box-sizing: border-box;
    background-color: var(--color-bg-offset);
    border: 1px solid var(--color-text-offset);
    border-radius: 5px;
    height: 8rem;
    width: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    div{
        font-size: 1rem;
    }
    &&:hover{
        
  background:
  -webkit-linear-gradient(225deg, rgb(242, 116, 5), rgb(87, 230, 136), rgb(168, 131, 251)) 0% 0% / 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 2s ease 0s infinite normal none running fontgradient;


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

  };
}
 &&:hover{
    background:
  -webkit-linear-gradient(225deg, rgb(242, 116, 5), rgb(87, 230, 136), rgb(168, 131, 251)) 0% 0% / 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 2s ease 0s infinite normal none running fontgradient;


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

  };
    }

`;
export const DivisãoIcone = styled.a`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    text-decoration: none;
    img{
        width: 70%;
        height: 70%;
        padding: .5rem;
    }
`;
export const AjusteTexto = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;