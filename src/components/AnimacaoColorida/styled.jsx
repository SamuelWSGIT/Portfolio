import styled from 'styled-components';

export const ACContainer = styled.div`
width: max-content;
&&.ativo{
  background:
  -webkit-linear-gradient(225deg, rgb(242, 116, 5), rgb(87, 230, 136), rgb(168, 131, 251)) 0% 0% / 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 2s ease 0s infinite normal none running fontgradient;


@keyframes fontgradient {
  0% {
    background-position: 0% 92%
  }
  50% {
    background-position: 100% 9%
  }
  100% {
    background-position: 0% 92%
  }

  };
}
 &&:hover{
    background:
  -webkit-linear-gradient(225deg, rgb(242, 116, 5), rgb(87, 230, 136), rgb(168, 131, 251)) 0% 0% / 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 2s ease 0s infinite normal none running fontgradient;


@keyframes fontgradient {
  0% {
    background-position: 0% 92%
  }
  50% {
    background-position: 100% 9%
  }
  100% {
    background-position: 0% 92%
  }

  };
  }
`;
