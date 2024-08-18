import React from 'react';
import { faEnvelope, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import LinkTexto from "../../components/LinkTexto";
import AnimacaoColorida from "../../components/AnimacaoColorida";
import { ContatoContainer } from "./styled";
import { motion } from "framer-motion";

export default function Contato() {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <ContatoContainer>
        {contatos.map((contato, index) => (
          <LinkTexto key={index} local={contato.href} icon={contato.icon}>
            <AnimacaoColorida>
              <p>{contato.text}</p>
            </AnimacaoColorida>
          </LinkTexto>
        ))}
      </ContatoContainer>
    </motion.div>
  );
}
