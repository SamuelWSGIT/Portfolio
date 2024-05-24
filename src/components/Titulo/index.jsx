import { TituloContainer } from "./styled";

export default function Titulo({ children }) {
    return (
        <TituloContainer>
            {children}
        </TituloContainer>
    )
}