import { ListaDeProjetos, Maiores, Menores, ProjetoContainer, Projetos } from "./styled";
import { motion } from 'framer-motion'
import Titulo from "../../components/Titulo";
import { useEffect, useState } from "react";
import Revelar from "../../components/Revelar";

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
                        <ListaDeProjetos>
                            {repositorios.map(repositorio => {
                                if (repositorio.stargazers_count > 0)
                                    return (
                                        <li key={repositorio.id}>
                                            <Maiores>
                                                <h3>{repositorio.name}</h3>
                                                <p>{repositorio.description}</p>
                                            </Maiores>
                                            <Menores>
                                                <p>{repositorio.created_at.slice(0, - 10)}</p>
                                                <a href={repositorio.html_url} target="_blank">Saiba Mais</a>
                                            </Menores>
                                        </li>
                                    )
                            })}
                        </ListaDeProjetos>
                    </Revelar>
                </Projetos>
            </ProjetoContainer>
        </motion.div>

    )
}