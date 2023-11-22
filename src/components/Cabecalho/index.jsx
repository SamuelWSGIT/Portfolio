import Banner from "./Banner";
import SecaoSuperior from "./SecaoSuperior";
import { CabecalhoContainer } from "./styled";

export default function Cabecalho() {
    return (
        <CabecalhoContainer>
            <SecaoSuperior />
            <Banner />
        </CabecalhoContainer>
    )
}