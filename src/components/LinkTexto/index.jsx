import React from 'react';
import { LinkTextoContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";


export default function LinkTexto({ children, local, ...props }) {
  const isExternal = local.endsWith('app') || local.endsWith('app');

  if (isExternal) {
    return (
      <LinkTextoContainer>
        <a href={local} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      </LinkTextoContainer>
    );
  }

  return (
    <LinkTextoContainer>
      <NavLink className="linkEditado" to={local} >
        <FontAwesomeIcon size="xl" icon={faArrowDown} />
        {children}
      </NavLink>
    </LinkTextoContainer>
  )
}