import { Link } from "react-router-dom";
import BannerImagem from "./BannerImagem";
import BannerTexto from "./BannerTexto";
import { BannerContainer, BannerImgText } from "./styled";
import LinkTexto from "../../LinkTexto";

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImgText>
                <BannerTexto />
                <BannerImagem />
            </BannerImgText>
            <Link to="projeto">
                <LinkTexto>
                    Ver meus projetos
                </LinkTexto>
            </Link>
        </BannerContainer>
    )
}