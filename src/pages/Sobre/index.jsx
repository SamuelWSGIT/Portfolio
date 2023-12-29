import Habilidades from "../../components/Habilidades";
import Resumo from "../../components/Resumo";
import { SobreContainer } from "./styled";
import { motion } from 'framer-motion'

export default function Sobre() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <SobreContainer>
                <Resumo />
                <Habilidades />
            </SobreContainer>
        </motion.div>
    )
}