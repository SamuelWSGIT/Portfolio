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
    
    `;
export const DivisãoIcone = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
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