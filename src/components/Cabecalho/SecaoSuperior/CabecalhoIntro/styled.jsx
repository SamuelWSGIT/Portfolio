import styled from 'styled-components';

export const CabecalhoIntroContainer = styled.div`
    width: fit-content;
    position: absolute;
    
    .diferente1{
        span{
            color: var(--color-primary);
        }
    }
    .diferente2{
        span{
            color: var(--color-secondary);
        }
    }

    span.R{
        color: var(--color-primary);
    }
    span.L{
        color: var(--color-tertiary);
    }
`;