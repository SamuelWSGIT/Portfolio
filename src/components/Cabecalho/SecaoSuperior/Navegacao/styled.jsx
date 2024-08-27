import styled from 'styled-components';

export const NavegacaoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    width: 100%;
    height: 5rem;
    
    @media (max-width: 800px ) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; /* Alinha o botão e o menu verticalmente em telas pequenas */
        position: relative;
    }
`;

export const Nave = styled.ul`
    z-index: 11;

    display: none;

    display: ${({ $menuAberto }) => ($menuAberto ? "flex" : "none")};
    padding-top: 1rem;
    gap: 1rem;
    border-bottom: 2px solid var;
    flex-direction: column;
    background: var(--color-bg);

    @media (min-width: 802px) {
        display: flex;
        justify-content: center;
        flex-direction: row;
        background: transparent;
        box-shadow: none;
        padding: 0;
        gap: 2rem; /* Ajustado para espaçamento entre os itens em telas grandes */
    }
`;

export const BotaoMobile = styled.button`
z-index: 13;
    height: 2rem;
    display: none;
    right: 5%;

    @media (max-width: 801px ) {
        display: block;
        margin-right: auto; /* Adicionado para ajustar o alinhamento do botão */
    }
`;

export const ItemNavegacao = styled.li`
z-index: 12;
    padding: 0.5rem 1rem;
    list-style: none;
`;
