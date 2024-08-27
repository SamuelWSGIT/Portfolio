import { BannerContainer, BannerImgText, LinkContainer } from "./styled";
import BannerImagem from "./BannerImagem";
import BannerTexto from "./BannerTexto";
import LinkTexto from "../../LinkTexto";
import AnimacaoColorida from "../../AnimacaoColorida";
import Revelar from "../../Revelar";
import { faProjectDiagram, faFileDownload, faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
    const links = [
        { local: "projeto", text: "Ver meus projetos", icon: faProjectDiagram },
        { local: "sobre", text: "Saiba mais em Sobre", icon: faAddressBook },
        { local: "/curriculo.pdf", text: "Baixe Meu Currículo", icon: faFileDownload, download: "curriculo.pdf" }
    ];

    return (
        <BannerContainer>
            <BannerImgText>
                <Revelar>
                    <BannerTexto />
                </Revelar>
                <Revelar>
                    <BannerImagem />
                </Revelar>
            </BannerImgText>
            <LinkContainer>
                {links.map((link, index) => (
                    <LinkTexto key={index} local={link.local} icon={link.icon} download={link.download}>
                        <AnimacaoColorida>
                            {link.text}
                        </AnimacaoColorida>
                    </LinkTexto>
                ))}
            </LinkContainer>
        </BannerContainer>
    );
}
