import AnimacaoColorida from "../AnimacaoColorida";
import Revelar from "../Revelar";
import Titulo from "../Titulo";
import { AjusteTexto, DivisãoIcone, HabilidadesContainer, HabilidadesIcones, HabilidadesLista } from "./styled";

const ListaHabilidades = [
    {
        "icone": "/svg/html.svg",
        "nome": "HTML",
        "key": "0"
    }, {
        "icone": "/svg/css.svg",
        "nome": "CSS",
        "key": "1"
    }, {
        "icone": "/svg/js.svg",
        "nome": "Java Script",
        "key": "2"
    }, {
        "icone": "/svg/typescript.svg",
        "nome": "TypeScript",
        "key": "3"
    }, {
        "icone": "/svg/react.svg",
        "nome": "REACT",
        "key": "4"
    }, {
        "icone": "/svg/nextjs.svg",
        "nome": "NextJS",
        "key": "5"
    }, {
        "icone": "/svg/sass.svg",
        "nome": "SASS",
        "key": "6"
    }, {
        "icone": "/svg/tailwindCss.svg",
        "nome": "Tailwind CSS",
        "key": "7"
    }, {
        "icone": "/svg/styledComponents.svg",
        "nome": "Styled Components",
        "key": "8"
    }
]


const MinhasHabilidades = ListaHabilidades.map(habilidade => (
    <Revelar key={habilidade.key}>
        <HabilidadesIcones  >
            <DivisãoIcone>
                <AjusteTexto>
                    <AnimacaoColorida>
                        {habilidade.nome}
                    </AnimacaoColorida>
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
                Minhas habilidades
            </Titulo>
            <HabilidadesLista>
                {MinhasHabilidades}
            </HabilidadesLista>
        </HabilidadesContainer>
    )
}