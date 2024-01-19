import Banner from "../../components/Cabecalho/Banner";
import Habilidades from "../../components/Habilidades";
import { HomeContainer } from "./styled";
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <HomeContainer>
                <Banner />
                <Habilidades />
            </HomeContainer>
        </motion.div>
    )
}