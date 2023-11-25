import { LinkTextoContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"


export default function LinkTexto({ children }) {
    return (
        <LinkTextoContainer>
            <FontAwesomeIcon size="xl" icon={faArrowDown} />
            {children}
        </LinkTextoContainer>
    )
}