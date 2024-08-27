import styled from 'styled-components';

export const CabecalhoIntroContainer = styled.div`
    position: absolute;
    width: 90%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .primeiro {
        span:first-child {
            color: var(--color-primary);
        }
    }

    .segundo {
        span:nth-child(2n + 1) {
            color: var(--color-secondary);
        }
        span:nth-child(-2n + 2) {
            color: var(--color-primary);
        }
    }
`;

export const CabecalhoTextoLogo = styled.div`

@media screen and (max-width: 1050px) {
        display: none;
    }
    gap: 0.3rem;
    display: flex;
    flex-direction: column;
`;