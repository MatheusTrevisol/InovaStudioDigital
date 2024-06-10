import { Container } from "./styles";

import x from "../../assets/INOVA_fundobranco.png"
import inovaLogo from "../../assets/INOVA_fundopreto.png"

export function Logo() {  
  return (
    <Container>
      <img src={inovaLogo} alt="" />
    </Container>
  )
};