import { useEffect, useState } from "react";
import Titulo from "../Titulo";
import { ResumoContainer, ResumoDivisao, ResumoImagem, ResumoTextos } from "./styled";
import Typewriter from 'typewriter-effect';

export default function Resumo() {

    const [novoTexto, setNovoTexto] = useState([
        {
            "frases": ["Desde criança, sempre fui apaixonado por tecnologias e inovações providas pelas novas tecnologias. Atualmente, estou estudando desenvolvimento web na Alura, me dedico diariamente a superar desafios para uma evolução constante. além disso sou geek, amo jogos e sci-fi."],
            "key": "0",
        }
    ])

    const [textoAntigo, setTextoAntigo] = useState([
        {
            "frases": ["Atualmente, estou estudando desenvolvimento web na Alura, me dedico diariamente a superar desafios para uma evolução constante. além disso sou geek, amo jogos e sci-fi."],
            "key": "1",
        }, {
            "frases": ["Residente em Brasilia/DF, fiz diversos cursos focados em front-end como HTML5, CSS3, JavaScript, TypeScript, React, NextJs e utilizo diversas ferramentas como Github, Sass, bootstrap, react-router-dom, styled-components, Vite e muitos outros dos quais ja tenho uma boa base e continuo aprofundando meu conhecimento."],
            "key": "2",
        }, {
            "frases": ["Tenho experiência profissional como suporte tecnico N1, aonde aprendi muito sobre hardware e software, tambem foi onde atraves de networking conheci o mundo da programação e apos isso optei por fazer a transição para o Desenvolvimento Web."],
            "key": "3",
        }, {
            "frases": ["Estou em busca de uma nova proposta de trabalho para quaisquer cargos da área que se enquadre ao meu perfil."],
            "key": "4",
        }, {
            "frases": ["Profissional autodidata com facilidade de comunicação e trabalho em equipe, uma boa lógica de programação e facilidade em aprender, estou aberto a novos desafios que encaro sem medo de errar."],
            "key": "5",
        }
    ])

    useEffect(() => {
        localStorage.setItem('novoTexto', JSON.stringify(novoTexto))
    }, [novoTexto])


    function AdicionarTexto(texto) {
        return (
            setNovoTexto[{ ...novoTexto }, texto]
        )
        console.log(feito)
    }

    if (novoTexto.length < textoAntigo.length) {
        const digitarTextos = novoTexto.map(texto =>
            <div key={texto.key} >
                <Typewriter
                    options={{
                        strings: texto.frases,
                        autoStart: true,
                        loop: false,
                        cursor: '_',
                    }}
                />
            </div>
        );
        return (
            <ResumoContainer>
                <ResumoDivisao>
                    <ResumoImagem>
                        <img src="/img/Samuel-Perfil-About.png" alt="Imagem do Samuel Almeida" />
                    </ResumoImagem>
                    <ResumoTextos>
                        <Titulo>
                            Sobre mim
                        </Titulo>
                        {digitarTextos}
                    </ResumoTextos>
                </ResumoDivisao>
            </ResumoContainer>
        )
    }
}