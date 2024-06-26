import styled from 'styled-components';

export const HabilidadesContainer = styled.section`
    margin:  2rem 0;
    height: max-content;
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;
export const HabilidadesLista = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: fit-content;
    width: 80vw;
    gap: 1rem;
`;

export const HabilidadesIcones = styled.li`
    box-sizing: border-box;
    border: 1px solid var(--color-text-offset);
    border-radius: 5px;
    height: 8rem;
    width: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 1450px) {
        height: 7rem;
        width: 6rem;
    }

    @media screen and (max-width: 680px) {
        height: 6rem;
        width: 5rem;
    }
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