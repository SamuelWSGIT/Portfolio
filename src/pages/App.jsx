import { AppContainer } from "./styled";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Projeto from "./Projeto";
import Rodape from "../components/Rodape";
import Cabecalho from "../components/Cabecalho";


export default function App() {
    return (
        <AppContainer>
            <BrowserRouter>
                <Cabecalho />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='contato' element={<Contato />} />
                    <Route path='projeto' element={<Projeto />} />
                </Routes>
                <Rodape />
            </BrowserRouter>
        </AppContainer>
    )
}