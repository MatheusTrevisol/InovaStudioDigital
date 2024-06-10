import { Container, Content, NavBar, Navigation, LastLine } from "./styles";

import { handleWhatsapp } from "../../utils/whatsappMsgs";
import { Logo } from "../Logo";

import { IoIosArrowUp } from "react-icons/io";

export function Footer() {
  function handleToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>        
      <Content>
        <NavBar>
          <Logo />

          <Navigation>
            <ul>
              <h3><strong>Navegação</strong></h3>
              <li><a href="#about">sobre</a></li>
              <li><a href="#services">serviços</a></li>
              <li><a href="#plans">planos</a></li>
            </ul>
            <ul>
              <h3><strong>Social</strong></h3>
              <li><a href="https://www.instagram.com/inovastudiodigital" target="_blank">instagram</a></li>
              <li><button onClick={handleWhatsapp}>(55) 5499271-7557</button></li>
              <li><a href="mailto:inovastudiodigital@gmail.com">inovastudiodigital@gmail.com</a></li>
            </ul>
          </Navigation>
        </NavBar>
      </Content>

      <LastLine>
        <div>
          <Logo />

          <p>© 2024 by Inova. Todos os direitos reservados.</p>

          <button onClick={handleToTop}>
            <IoIosArrowUp size={28} />
          </button>
        </div>
      </LastLine>
    </Container>
  )
};