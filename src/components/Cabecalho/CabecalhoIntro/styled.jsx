import styled from 'styled-components';

export const CabecalhoIntroContainer = styled.div`
    width: 20vw;
    position: absolute;
    
    .diferente1{
        &:hover{
            span{
                color: var(--color-primary);
            }
        }
        span{
            color: var(--color-primary-offset);
        }
    }
    .diferente2{
        &:hover{
            span{
                color: var(--color-secondary);
            }
        }
        span{
            color: var(--color-secondary-offset);
        }
    }
`;