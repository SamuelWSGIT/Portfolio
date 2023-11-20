import CabecalhoIntro from "./CabecalhoIntro";
import Navegacao from "./Navegacao";
import { CabecalhoContainer } from "./styled";

export default function Cabecalho() {
    return (
        <CabecalhoContainer>
            <CabecalhoIntro />
            <Navegacao />
        </CabecalhoContainer>
    )
}