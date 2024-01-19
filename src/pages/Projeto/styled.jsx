import styled from 'styled-components';

export const ProjetoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
`;

export const Projetos = styled.div`
    height: 100%;
`;

export const ListaDeProjetos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    li{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 6rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--color-bg-offset);
        border: 2px solid var(--color-text-offset);
    }
    h3{
        text-transform: uppercase;
    }
    a{

    }
`;

export const Maiores = styled.div`
    display: flex;
    flex-direction: column;
    top: 0;
`;
export const Menores = styled.div`
    display: flex;
    justify-content: space-between;
    bottom: 0;
    p{
     font-size: 1rem;
    }
    a{
     font-size: 1rem;
    }
`;