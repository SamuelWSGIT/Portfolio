import { ACContainer } from "./styled";

export default function AnimacaoColorida({ children, forma }) {
    return (
        <ACContainer className={forma}>
            {children}
        </ACContainer>
    )
}