import styled from 'styled-components';

export const CabecalhoIntroContainer = styled.div`
    width: 90vw;
    position: absolute;
    display: flex;
    justify-content: space-between;
    
    .primeiro{
        span:first-child{
        color: var(--color-primary);
        }
    }
    .segundo{
        span:nth-child(2n + 1){
            color: var(--color-secondary);
        }
        span:nth-child(-2n + 2 ){
            color: var(--color-primary);
        }
    }
`;