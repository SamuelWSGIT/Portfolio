import { NavLink } from "react-router-dom";
import { ItemNavegacao, Nave, NavegacaoContainer } from "./styled";
import AnimacaoColorida from "../../../AnimacaoColorida";
import { LinkTextoContainer } from "../../../LinkTexto/styled";

const Paginas = [
    {
        caminho: "/",
        nome: "Home",
        key: "0"
    },
    {
        caminho: "sobre",
        nome: "Sobre",
        key: "1"
    },
    {
        caminho: "projeto",
        nome: "Projetos",
        key: "2"
    },
    {
        caminho: "contato",
        nome: "Contato",
        key: "3"
    },
    {
        caminho: "https://www.linkedin.com/in/samuellkq/",
        nome: "Linkedin",
        key: "4"
    },
    {
        caminho: "https://github.com/SamuelWSGIT",
        nome: "Github",
        key: "5"
    }
];

const nav = Paginas.map(Pagina => {
    const isExternal = Pagina.caminho.startsWith("http");

    return (
        <ItemNavegacao key={Pagina.key}>
            <LinkTextoContainer>
                {isExternal ? (
                    <a href={Pagina.caminho} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <AnimacaoColorida>
                            {Pagina.nome}
                        </AnimacaoColorida>
                    </a>
                ) : (
                    <NavLink className="linkEditado" style={{ textDecoration: 'none' }} to={Pagina.caminho}>
                        <AnimacaoColorida>
                            {Pagina.nome}
                        </AnimacaoColorida>
                    </NavLink>
                )}
            </LinkTextoContainer>
        </ItemNavegacao>
    );
});

export default function Navegacao() {
    return (
        <NavegacaoContainer>
            <Nave>
                {nav}
            </Nave>
        </NavegacaoContainer>
    );
}
