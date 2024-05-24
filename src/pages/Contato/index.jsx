import { ContatoContainer } from "./styled";
import { motion } from 'framer-motion'

export default function Contato() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <ContatoContainer>
                
            </ContatoContainer>
        </motion.div>
    )
}