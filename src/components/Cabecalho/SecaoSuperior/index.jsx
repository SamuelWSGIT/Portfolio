import CabecalhoIntro from "./CabecalhoIntro";
import Navegacao from "./Navegacao";
import { SecaoSuperiorContainer } from "./styled";

export default function SecaoSuperior() {
    return (
        <SecaoSuperiorContainer>
            <CabecalhoIntro />
            <Navegacao />
        </SecaoSuperiorContainer>
    )
}