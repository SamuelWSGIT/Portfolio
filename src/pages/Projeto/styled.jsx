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
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--color-bg-offset);
        border: 2px solid var(--color-text-offset);
    }
    h3{
        text-transform: uppercase;
    }
    p{

    }
    a{

    }
`;