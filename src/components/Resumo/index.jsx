import Habilidades from "../Habilidades";
import Titulo from "../Titulo";
import { ResumoContainer, ResumoImagem, ResumoTextos } from "./styled";

export default function Resumo() {
    return (
        <>
            <ResumoContainer>
                <ResumoImagem>
                    <img src="/img/Samuel-Perfil-About.png" alt="Imagem do Samuel Almeida" />
                </ResumoImagem>
                <ResumoTextos>
                    <Titulo>
                        Sobre mim
                    </Titulo>
                    <p>Desde criança, sempre fui apaixonado por tecnologias e inovações providas pelas novas tecnologias.</p>
                    <p>Atualmente, estou estudando desenvolvimento web na Alura, me dedico diariamente a superar desafios para uma evolução constante. além disso sou geek, amo jogos e sci-fi.</p>
                    <p>Residente em Brasilia/DF, fiz diversos cursos focados em front-end como HTML5, CSS3, JavaScript, TypeScript, React, NextJs e utilizo diversas ferramentas como Github, Sass, bootstrap, react-router-dom, styled-components, Vite e muitos outros dos quais ja tenho uma boa base e continuo aprofundando meu conhecimento.</p>
                    <p>Tenho experiência profissional como suporte tecnico N1, aonde aprendi muito sobre hardware e software, tambem foi onde atraves de networking conheci o mundo da programação e apos isso optei por fazer a transição para o Desenvolvimento Web.</p>
                    <p>Estou em busca de uma nova proposta de trabalho para quaisquer cargos da área que se enquadre ao meu perfil.</p>
                    <p>Profissional autodidata com facilidade de comunicação e trabalho em equipe, uma boa lógica de programação e facilidade em aprender, estou aberto a novos desafios que encaro sem medo de errar.</p>
                </ResumoTextos>

            </ResumoContainer>
            <Habilidades />
        </>
    )
}