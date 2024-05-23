import AnimacaoColorida from "../../../AnimacaoColorida";
import { BannerTextoContainer, Inicio } from "./styled";

export default function BannerTexto() {
    return (
        <BannerTextoContainer>
            <>
            <ul>
                <Inicio>Olá, eu sou o <AnimacaoColorida forma="ativo">Samuel Almeida</AnimacaoColorida></Inicio>
                <li>Desenvolvedor Front-End especializado em <span>React</span>.</li>
                <li>Com uma base sólida em JavaScript e TypeScript, utilizo React para criar interfaces de usuário dinâmicas e responsivas.</li>
                <li>Meu conhecimento se estende a bibliotecas, ferramentas e frameworks complementares como Next.js na otimização de aplicações, Vite na agilidade e velocidade do desenvolvimento, Redux para gerenciamento de estado, React Router para navegação, e Styled-components ou Tailwind CSS para estilização.</li>
                <li>Estou sempre em busca de aprofundar minhas habilidades e manter-me atualizado com as últimas atualizações e práticas recomendadas do ecossistema React.</li>
            </ul></>
        </BannerTextoContainer>
    )
}