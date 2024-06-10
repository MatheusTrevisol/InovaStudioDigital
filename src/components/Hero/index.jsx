import { Container, Content, CenterDiv } from "./styles";

import { handleWhatsapp } from "../../utils/whatsappMsgs";

import { Button } from "../Button";

import { FaWhatsapp } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";

export function Hero() {
  return (
    <Container>
      <div className="black-gradient"></div>
      <Content>
        <CenterDiv>
          <h4 className="concept-conversion">do <span className="concept">conceito</span> à <span className="conversion">conversão</span></h4>
          <div className="spans">
            <span>Seja visto,</span>
            <span>Seja notado,</span>
            <span>Seja lembrado,</span>
            <span>Seja <span className="lucrative">lucrativo.</span></span>
          </div>
          <p>
            Cuidamos de cada detalhe para dar vida à sua presença online.
          </p>
          <div className="buttons-div">
            <a href="#plans">Conheça nossos planos</a> 
            <div className="line-div">
              <hr className="line-buttons line-left" />
              <span>OU</span>
              <hr className="line-buttons line-right" />
            </div>
            <Button title="Fale conosco agora!" icon={FaWhatsapp} onClick={handleWhatsapp} />
          </div>

          <span className="scroll-down">
            <LuMouse size={32} />
            scrollDown()
          </span>
        </CenterDiv>
      </Content>
    </Container>
  )
}