import { useState } from "react";
import { ProjetoContainer } from "./styled";
import { motion } from 'framer-motion'

export default function Projeto() {

    function getApiGitHub() {
        fetch('https://api.github.com/users/SamuelWSGIT/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let listaProjetos = data.map(item => {
                    item.name
                })
                return ({ listaProjetos })
            })
    }

    getApiGitHub()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <ProjetoContainer>Projeto</ProjetoContainer>
        </motion.div>

    )
}