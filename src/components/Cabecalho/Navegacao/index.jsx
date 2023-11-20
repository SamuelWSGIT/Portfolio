
import { Link } from "react-router-dom";
import { ItemNavegacao, Nave, NavegacaoContainer } from "./styled";

const Paginas = [
    {
        "caminho": "/",
        "nome": "Home",
        "key": "0"
    },
    {
        "caminho": "projeto",
        "nome": "Projeto",
        "key": "1"
    },
    {
        "caminho": "sobre",
        "nome": "Sobre",
        "key": "2"
    },
    {
        "caminho": "contato",
        "nome": "Contato",
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