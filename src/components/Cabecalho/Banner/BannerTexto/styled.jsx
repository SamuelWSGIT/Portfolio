import styled from 'styled-components';

export const BannerTextoContainer = styled.div`
    width: 90%;
    max-width: 50rem;
    color: var(--color-text);
    font-size: x-large;
    line-height: 1;
    margin-bottom: 2rem;
    @media screen and (max-width: 700px) {
        font-size: large; /* Ajuste de fonte para telas menores */
    }
    @media screen and (max-width: 450px) {
        font-size: medium; /* Ajuste de fonte para telas menores */
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
    font-size: x-large;
    display: flex;
    align-items: center;
    @media screen and (max-width: 700px) {
        font-size: large; /* Ajuste de fonte para telas menores */
    }
    @media screen and (max-width: 450px) {
        font-size: medium; /* Ajuste de fonte para telas menores */
    }

    span {
        font-size: x-large;
        font-weight: bold; /* Realçando o nome */
        @media screen and (max-width: 700px) {
        font-size: large; /* Ajuste de fonte para telas menores */
    }
    @media screen and (max-width: 450px) {
        font-size: small; /* Ajuste de fonte para telas menores */
    }
    }

    .noted1, .noted2 {
        font-size: medium; /* Ajuste de fonte para telas menores */
    }
`;