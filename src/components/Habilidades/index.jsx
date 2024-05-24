import AnimacaoColorida from "../AnimacaoColorida";
import Revelar from "../Revelar";
import Titulo from "../Titulo";
import { AjusteTexto, DivisãoIcone, HabilidadesContainer, HabilidadesIcones, HabilidadesLista } from "./styled";

const ListaHabilidades = [
    {
        "icone": "/svg/html.svg",
        "nome": "HTML",
        "url": "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        "key": "0"
    }, {
        "icone": "/svg/css.svg",
        "nome": "CSS",
        "url": "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        "key": "1"
    }, {
        "icone": "/svg/js.svg",
        "nome": "Java Script",
        "url": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        "key": "2"
    }, {
        "icone": "/svg/typescript.svg",
        "nome": "TypeScript",
        "url": "https://www.typescriptlang.org/docs/",
        "key": "3"
    }, {
        "icone": "/svg/react.svg",
        "nome": "REACT",
        "url": "https://legacy.reactjs.org/docs/getting-started.html",
        "key": "4"
    }, {
        "icone": "/svg/nextjs.svg",
        "nome": "NextJS",
        "url": "https://nextjs.org/docs",
        "key": "5"
    }, {
        "icone": "/svg/sass.svg",
        "nome": "SASS",
        "url": "https://sass-lang.com/documentation/",
        "key": "6"
    }, {
        "icone": "/svg/tailwindCss.svg",
        "nome": "Tailwind CSS",
        "url": "https://v2.tailwindcss.com/docs",
        "key": "7"
    }, {
        "icone": "/svg/styledComponents.svg",
        "nome": "Styled Comp",
        "url": "https://styled-components.com/docs",
        "key": "8"
    }
]

const MinhasHabilidades = ListaHabilidades.map(habilidade => (
    <Revelar key={habilidade.key}>
        <HabilidadesIcones  >
            <DivisãoIcone href={habilidade.url} target="_blank">
                <AjusteTexto>
                    {habilidade.nome}
                </AjusteTexto>
                <img src={habilidade.icone} alt="icone" />
            </DivisãoIcone>
        </HabilidadesIcones>
    </Revelar>
))

export default function Habilidades() {
    return (
        <HabilidadesContainer>
            <Titulo>
                <h2>Minhas Habilidades</h2>
            </Titulo>
            <HabilidadesLista>
                {MinhasHabilidades}
            </HabilidadesLista>
        </HabilidadesContainer>
    )
}