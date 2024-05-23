import styled from 'styled-components';

export const ListaDeProjetos = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: minmax(100px, auto);
    gap: 2rem;
    padding: 1rem;
    box-sizing: border-box;

    li {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 1rem;
        background-color: var(--color-bg-offset);
        border: 2px solid var(--color-text-offset);
        overflow: hidden;

        img {
            
            width: 100%;
            max-width: 100%;
            height: auto;
            opacity: 50%;
            object-fit: cover;
        }

        img:hover {
            opacity: 100%;
        }
    }

    h3 {
        text-transform: uppercase;
        font-size: 1rem;
        text-align: center;
        padding: .5rem 0;
    }

    p {
        font-size: 1rem;
    }
`;

export const Datas = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: .2rem .5rem;
  p{
    font-size: .7rem;
  }
`;
