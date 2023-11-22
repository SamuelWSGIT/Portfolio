
import { Link } from "react-router-dom";
import { ItemNavegacao, Nave, NavegacaoContainer } from "./styled";

const Paginas = [
    {
        "caminho": "/",
        "nome": "Home",
        "key": "0"
    },
    {
        "caminho": "sobre",
        "nome": "Sobre",
        "key": "1"
    },
    {
        "caminho": "https://www.linkedin.com/in/samuellkq/",
        "nome": "Linkedin",
        "key": "2"
    },
    {
        "caminho": "https://github.com/SamuelWSGIT",
        "nome": "Github",
        "key": "3"
    },
]
const nav = Paginas.map(Pagina =>
    <ItemNavegacao key={Pagina.key} >
        <Link style={{ textDecoration: 'none' }} to={Pagina.caminho}>
            <p>{Pagina.nome}</p>
        </Link>
    </ItemNavegacao>

);


export default function Navegacao() {
    return (
        <NavegacaoContainer>
            <Nave>
                {nav}
            </Nave>
        </NavegacaoContainer>
    )
}