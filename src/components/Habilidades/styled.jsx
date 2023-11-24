import styled from 'styled-components';

export const HabilidadesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
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
    
    p{
        text-align: center;
        font-size: 1rem;
    }
    img{
        height: 4rem;
    }
    `;