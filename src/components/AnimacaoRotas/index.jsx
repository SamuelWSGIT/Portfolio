import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Projeto from "../../pages/Projeto";

import { AnimatePresence } from 'framer-motion'

export default function AnimacaoRotas() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='projeto' element={<Projeto />} />
            </Routes>
        </AnimatePresence>
    )
}