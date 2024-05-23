import { ProjetoContainer, Projetos } from "./styled";
import { motion } from 'framer-motion'
import Titulo from "../../components/Titulo";
import { useEffect, useState } from "react";
import Revelar from "../../components/Revelar";
import NetlifyData from "../../components/Netlify/index"

export default function Projeto() {

    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/SamuelWSGIT/repos')
            .then(Response => Response.json())
            .then(data => setRepositorios(data))
        console.log(repositorios)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <ProjetoContainer>
                <Titulo>Projetos</Titulo>
                <Projetos>
                    <Revelar>
                        <NetlifyData/>    
                    </Revelar>
                </Projetos>
            </ProjetoContainer>
        </motion.div>

    )
}