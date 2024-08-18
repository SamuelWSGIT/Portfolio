import React from 'react';
import { LinkTextoContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function LinkTexto({ children, local, icon, download, project, ...props }) {
  const isExternal = local.startsWith('http') && local.endsWith('app') || local.startsWith('https://wa.me/') ;


  if (project) {
    return (
      <LinkTextoContainer>
        <a href={local} className="linkEditadoProjeto"   target="_blank" rel="noopener noreferrer" {...props}>
          {icon && <FontAwesomeIcon size="xl" icon={icon} />}
          {children}
        </a>
      </LinkTextoContainer>
    );
  }
  if (download) {
    return (
      <LinkTextoContainer>
        <a href={local} className="linkEditado"  download={download} {...props}>
          {icon && <FontAwesomeIcon size="xl" icon={icon} />}
          {children}
        </a>
      </LinkTextoContainer>
    );
  }

  if (isExternal) {
    return (
      <LinkTextoContainer>
        <a href={local}   target="_blank" rel="noopener noreferrer" {...props}>
          {icon && <FontAwesomeIcon size="xl" icon={icon} />}
          {children}
        </a>
      </LinkTextoContainer>
    );
  }

  return (
    <LinkTextoContainer>
      <NavLink className="linkEditado" to={local}>
        {icon && <FontAwesomeIcon size="xl" icon={icon} />}
        {children}
      </NavLink>
    </LinkTextoContainer>
  );
}
