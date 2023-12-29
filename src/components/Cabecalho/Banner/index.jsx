import { BannerContainer, BannerImgText } from "./styled";
import BannerImagem from "./BannerImagem";
import BannerTexto from "./BannerTexto";
import LinkTexto from "../../LinkTexto";
import AnimacaoColorida from "../../AnimacaoColorida";
import Revelar from "../../Revelar";

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImgText>
                <Revelar>
                    <BannerTexto />
                </Revelar>
                <BannerImagem />
            </BannerImgText>
            <LinkTexto local="projeto">
                <AnimacaoColorida>
                    Ver meus projetos
                </AnimacaoColorida>
            </LinkTexto>
        </BannerContainer>
    )
}