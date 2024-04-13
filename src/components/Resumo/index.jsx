import { useState } from "react";
import Titulo from "../Titulo";
import { ResumoContainer, ResumoDivisao, ResumoImagem, ResumoTextos, TextoSobreMim, TituloSobreMim } from "./styled";

export default function Resumo() {

    const [novoTexto, setNovoTexto] = useState([
        {
            "tipoco":["Sobre mim"],
            "frases": ["Olá, sou o Samuel Almeida Ribeiro, residente em Brasília/DF. Desde cedo, minha paixão por tecnologia e inovação me guiou por um caminho empolgante no mundo digital. Atualmente, estou aprimorando minhas habilidades como desenvolvedor web através de cursos intensivos na Alura, focando especialmente em tecnologias front-end."],
            "key": "0",
        }, {
            "tipoco":["Minha Jornada"],
            "frases": ["Minha carreira começou na área de suporte técnico, onde adquiri uma sólida compreensão de hardware e software. Foi nesta posição que descobri o mundo fascinante da programação através de colegas e, desde então, decidi fazer a transição para o desenvolvimento web. Este movimento não apenas refletiu minha paixão por tecnologia, mas também me permitiu explorar mais profundamente minha criatividade e solução de problemas em programação."],
            "key": "1",
        }, {
            "tipoco":["Expertise Técnica"],
            "frases": ["Linguagens e Frameworks: HTML5, CSS3, JavaScript, TypeScript, React, e Next.js. Ferramentas e Bibliotecas: GitHub, Sass, Bootstrap, react-router-dom, styled-components, e Vite."],
            "key": "3",
        }, {
            "frases": ["Estou sempre buscando novas tecnologias e metodologias para melhorar continuamente minhas habilidades e entregar soluções eficazes e inovadoras."],
            "key": "4",
        }, {
            "tipoco":["Filosofia Pessoal"],
            "frases": ["Como um geek apaixonado por jogos e ficção científica, eu trago a mesma paixão e curiosidade para o desenvolvimento web. Acredito que, assim como nos jogos, cada desafio no desenvolvimento é uma oportunidade para evoluir e aperfeiçoar minhas habilidades. Sou um profissional autodidata, com uma comunicação clara e eficaz, e um forte trabalho em equipe."],
            "key": "5",
        }, {
            "tipoco":["Objetivo Profissional"],
            "frases": ["Atualmente, estou em busca de oportunidades que me permitam contribuir e crescer. Estou interessado em posições que me desafiem e permitam que eu faça uso de minha sólida base técnica e minha capacidade de aprender rapidamente."],
            "key": "6",
        }, {
            "frases": ["Se você está procurando por um desenvolvedor front-end que não só traga habilidades técnicas sólidas, mas também uma paixão verdadeira e um drive para inovação, vamos conversar! Estou pronto para enfrentar novos desafios e ansioso para fazer parte de uma equipe que valoriza a progressão e a inovação."],
            "key": "7",
        }
    ])

    const digitarTextos = novoTexto.map(texto =>
        <TextoSobreMim key={texto.key} >
            <TituloSobreMim>
                {texto.tipoco}
            </TituloSobreMim>
            {texto.frases}
        </TextoSobreMim>
    );

    return (
        <ResumoContainer>
            <ResumoDivisao>
                <ResumoImagem>
                    <img src="/img/Samuel-Perfil-About.png" alt="Imagem do Samuel Almeida" />
                </ResumoImagem>
                <ResumoTextos>
                    {digitarTextos}
                </ResumoTextos>
            </ResumoDivisao>
        </ResumoContainer>
    )
}