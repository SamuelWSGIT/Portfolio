import styled from 'styled-components';

export const AppContainer = styled.div`
    box-sizing: border-box;
    color: var(--color-text-offset);
    background-color: var(--color-bg);
    background-image: url('/img/Background.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;
    background-size: 100%;
    background-repeat: repeat-y;
    background-position: 0 -25rem;
    min-height: 100vh;
`;