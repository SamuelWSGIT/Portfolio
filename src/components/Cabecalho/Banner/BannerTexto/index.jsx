import AnimacaoColorida from "../../../AnimacaoColorida";
import { BannerTextoContainer } from "./styled";

export default function BannerTexto() {
    return (
        <BannerTextoContainer>
            <h1>
                Olá, eu sou o
                <span> <AnimacaoColorida forma="ativo">Samuel Almeida</AnimacaoColorida> </span>
                Desenvolvedor Front-End
            </h1>
        </BannerTextoContainer>
    )
}