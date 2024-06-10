import { Container, ButtonWhats } from "./styles";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton({ onClick }) {
  return (
    <Container>
      <div>
        <span>Fale com a gente agora!</span>
      </div>
      <ButtonWhats type="button" onClick={onClick} >       
        <FaWhatsapp size={35} />
      </ButtonWhats>
    </Container>
  )
};