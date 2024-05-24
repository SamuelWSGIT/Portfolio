import styled from 'styled-components';

export const NavegacaoContainer = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Nave = styled.ul`
    display: flex;
    gap: 2rem; /* Reduzido de 5rem para 2rem para telas menores */

    @media screen and (max-width: 550px) {
        gap: 1rem; /* Ajuste adicional para telas menores */
    }
    @media screen and (max-width: 400px) {
        gap: .5rem; /* Ajuste adicional para telas menores */
    }
`;

export const ItemNavegacao = styled.li`
    /* Adicione os estilos necessários aqui conforme necessário */
`;