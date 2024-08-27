import styled from 'styled-components';

export const BannerTextoContainer = styled.div`
    width: 90%;
    max-width: 50rem;
    color: var(--color-text);
    font-size: x-large;
    line-height: 1;
    margin-bottom: 2rem;
    @media screen and (max-width: 700px) {
        width: 100%;
        font-size: x-large; /* Ajuste de fonte para telas menores */
    }
    @media screen and (max-width: 450px) {
        font-size: large; /* Ajuste de fonte para telas menores */
        line-height: .9; /* Ajuste de espaçamento entre linhas */
        width: 100%;
    }
    

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: .5rem 0; /* Aumentando o espaçamento entre os itens */
    }
`;

export const Inicio = styled.div`
    display: flex;
    gap: .5rem;
    display: flex;
    align-items: center;
`;