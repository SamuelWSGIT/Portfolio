import { ProjetoContainer } from "./styled";
import { motion } from 'framer-motion'

export default function Projeto() {
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