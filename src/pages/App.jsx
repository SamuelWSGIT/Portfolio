import { AppContainer } from "./styled";
import { BrowserRouter } from 'react-router-dom'
import Rodape from "../components/Rodape";
import Cabecalho from "../components/Cabecalho";
import AnimacaoRotas from "../components/AnimacaoRotas";


export default function App() {
    return (
        <AppContainer>
            <BrowserRouter>
                <Cabecalho />
                <AnimacaoRotas />
                <Rodape />
            </BrowserRouter>
        </AppContainer>
    )
}