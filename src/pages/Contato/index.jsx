import AnimacaoColorida from "../../components/AnimacaoColorida";
import Titulo from "../../components/Titulo";
import { ContatoContainer } from "./styled";
import { motion } from "framer-motion";

export default function Contato() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <ContatoContainer>
        <Titulo>Contatos</Titulo>
        <div className="contact-info">
          <AnimacaoColorida>
            <p>
              E-mail:{" "}
              <a href="mailto:mail.samuel.contato@gmail.com">
                mail.samuel.contato@gmail.com
              </a>
            </p>
          </AnimacaoColorida>
          <AnimacaoColorida>
            <p>
              Telefone: <a href="tel:+5561981015267">+55 61 98101-5267</a>
            </p>
          </AnimacaoColorida>
        </div>
      </ContatoContainer>
    </motion.div>
  );
}
