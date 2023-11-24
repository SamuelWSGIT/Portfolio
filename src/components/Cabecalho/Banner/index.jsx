import { Link } from "react-router-dom";
import BannerImagem from "./BannerImagem";
import BannerTexto from "./BannerTexto";
import { BannerContainer, BannerImgText } from "./styled";
import LinkTexto from "../../LinkTexto";
import AnimacaoColorida from "../../AnimacaoColorida";

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImgText>
                <BannerTexto />
                <BannerImagem />
            </BannerImgText>
            <Link to="projeto">
                <LinkTexto>
                    <AnimacaoColorida>
                        Ver meus projetos
                    </AnimacaoColorida>
                </LinkTexto>
            </Link>
        </BannerContainer>
    )
}