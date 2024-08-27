import styled from 'styled-components';

export const NavegacaoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const NaveStatica = styled.ul`
    display: flex;
    padding-top: 1rem;
    gap: 1rem;
    border-bottom: 2px solid var;
    flex-direction: row;
    background: transparent;
    @media (max-width: 801px ) {
        display: none;
        margin-right: auto; /* Adicionado para ajustar o alinhamento do botão */
    }
`;
export const Nave = styled.ul`
    z-index: 10;
    display: none;
    display: ${({ $menuAberto }) => ($menuAberto ? "flex" : "none")};
    padding-top: 1rem;
    position: fixed;
    height: 100%;
    right: 0px;
    bottom: -80px;
    padding-top: 150px;
    gap: 1rem;
    border-bottom: 2px solid var;
    flex-direction: column;
    background: var(--color-bg);

    @media (min-width: 802px) {
        display: none;
    }
`;

export const BotaoMobile = styled.button`
    z-index: 11;
    height: 2rem;
    display: block;
    position: fixed;
    right: 5%;
    
    @media (min-width: 801px ) {
        display: none;
        margin-right: auto; /* Adicionado para ajustar o alinhamento do botão */
    }
`;

export const ItemNavegacao = styled.li`
z-index: 12;
    padding: 0.5rem 1rem;
    list-style: none;
`;
