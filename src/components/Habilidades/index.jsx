import AnimacaoColorida from "../AnimacaoColorida";
import Titulo from "../Titulo";
import { HabilidadesContainer, HabilidadesIcones, HabilidadesLista } from "./styled";

const ListaHabilidades = [
    {
        "icone": "/svg/html.svg",
        "nome": "HTML",
        "key": "0"
    },
    {
        "icone": "/svg/css.svg",
        "nome": "CSS",
        "key": "1"
    },
    {
        "icone": "/svg/js.svg",
        "nome": "Java Script",
        "key": "2"
    },
    {
        "icone": "/svg/react.svg",
        "nome": "REACT",
        "key": "3"
    },
    {
        "icone": "/svg/sass.svg",
        "nome": "SASS",
        "key": "4"
    },
    {
        "icone": "/svg/typescript.svg",
        "nome": "TypeScript",
        "key": "5"
    },
    {
        "icone": "/svg/nextjs.svg",
        "nome": "NextJS",
        "key": "6"
    }
]

const MinhasHabilidades = ListaHabilidades.map(habilidade => (
    <HabilidadesIcones key={habilidade.key} >
        <AnimacaoColorida>
            <p>{habilidade.nome}</p>
            <img src={habilidade.icone} alt="icone" />
        </AnimacaoColorida>
    </HabilidadesIcones>
))

export default function Habilidades() {
    return (
        <HabilidadesContainer>
            <Titulo>
                Minhas habilidades
            </Titulo>
            <HabilidadesLista>
                {MinhasHabilidades}
            </HabilidadesLista>
        </HabilidadesContainer>
    )
}