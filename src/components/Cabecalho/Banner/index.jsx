import { BannerContainer, BannerImgText, LinkContainer } from "./styled";
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
            <LinkContainer>
                <LinkTexto local="projeto">
                    <AnimacaoColorida>
                        Ver meus projetos
                    </AnimacaoColorida>
                </LinkTexto>
                <LinkTexto local="contato">
                    <AnimacaoColorida>
                        Entre em Contato
                    </AnimacaoColorida>
                </LinkTexto>
                <LinkTexto local="curriculo">
                    <AnimacaoColorida>
                        Baixe Meu Currículo
                    </AnimacaoColorida>
                </LinkTexto>
            </LinkContainer>
        </BannerContainer>
    )
}