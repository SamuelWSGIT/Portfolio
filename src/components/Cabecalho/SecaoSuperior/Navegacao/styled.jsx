import styled from 'styled-components';

export const NavegacaoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Nave = styled.ul`
    display: flex;
    gap: 5rem;
`
export const ItemNavegacao = styled.li`
    div{
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        font-size: 1.3rem;
        color: var(--color-text);
    }
`;