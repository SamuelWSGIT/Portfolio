import styled from 'styled-components';

export const BannerContainer = styled.div`
    width: 90%;
    margin: 0 auto; /* Centraliza o conteúdo */
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    padding: 1rem; /* Adiciona um espaçamento interno */
`;

export const BannerImgText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem; /* Espaçamento entre os elementos */
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
    gap: 1rem; /* Espaçamento entre os links */
`;

export const LinkTexto = styled.a`
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: var(--color-primary);
    color: white;
    font-size: large;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    @media screen and (max-width: 900px) {
        font-size: medium;
    }

    &:hover {
        background-color: var(--color-primary-dark);
    }

    @media screen and (max-width: 360px) {
        font-size: small; /* Ajusta o tamanho da fonte para telas menores */
        padding: 0.3rem 0.7rem; /* Ajusta o padding para telas menores */
    }
`;