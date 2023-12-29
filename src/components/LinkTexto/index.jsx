import { LinkTextoContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";


export default function LinkTexto({ children, local }) {
    return (
        <LinkTextoContainer>
            <FontAwesomeIcon size="xl" icon={faArrowDown} />
            <NavLink className="linkEditado" to={local} >
                {children}
            </NavLink>
        </LinkTextoContainer>
    )
}