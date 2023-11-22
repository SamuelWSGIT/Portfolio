import { TituloContainer } from "./styled";

export default function Titulo({ children }) {
    return (
        <TituloContainer>
            <h2>{children}</h2>
        </TituloContainer>
    )
}