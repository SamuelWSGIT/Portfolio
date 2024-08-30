import React from 'react';
import { faEnvelope, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import LinkTexto from "../../components/LinkTexto";
import AnimacaoColorida from "../../components/AnimacaoColorida";
import { RodapeContainer, ContatoContainer, RodapeInfo } from "./styled";

export default function Rodape() {
  const contatos = [
    {
      href: "mailto:mail.samuel.contato@gmail.com",
      text: "mail.samuel.contato@gmail.com",
      icon: faEnvelope // Ícone para o e-mail
    },
    {
      href: "https://wa.me/55061981015267",
      text: "+55 (061) 98101-5267",
      icon: faMobileAndroid // Ícone para o telefone
    }
  ];

  return (
    <RodapeContainer>
        <h3>Contatos</h3>
      <ContatoContainer>
        {contatos.map((contato, index) => (
          <LinkTexto key={index} local={contato.href} icon={contato.icon}>
            <AnimacaoColorida>
              {contato.text}
            </AnimacaoColorida>
          </LinkTexto>
        ))}
      </ContatoContainer>
      <RodapeInfo>
      <p>Samuel Almeida &#40; <span>Desenvolvedor</span> &#41; <span>&#123;</span> Front-End <span>&#125;</span>;</p>
      <p>&#124; &#169; Copyright 2023</p>
      </RodapeInfo>
  </RodapeContainer>
  );
}


