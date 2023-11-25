import AnimacaoColorida from "../../../AnimacaoColorida";
import AnimacaoDigitacao from "../../../AnimacaoDigitacao";
import { CabecalhoIntroContainer } from "./styled";

export default function CabecalhoIntro() {
    const palavras = ['Eat', 'Sleep', 'Code', 'Repeat!']
    return (
        <CabecalhoIntroContainer>
            <div>
                <p className="primeiro">
                    Samuel Almeida &#40; <span className="noted1">Desenvolvedor</span> &#41;
                </p>
                <p className="segundo">
                    <span className="noted2">&#123;</span> <span>Desenvolvedor</span>.Front-End <span className="noted2">&#125;</span>;
                </p>
            </div>
            <div>
                <p>Life is simple</p>
                <AnimacaoDigitacao>
                    {palavras}
                </AnimacaoDigitacao>
            </div>
        </CabecalhoIntroContainer >
    )
}
