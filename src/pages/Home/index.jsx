import Habilidades from "../../components/Habilidades";
import Resumo from "../../components/Resumo";
import { HomeContainer } from "./styled";

export default function Home() {
    return (
        <HomeContainer>
            <Resumo />
            <Habilidades />
        </HomeContainer>
    )
}