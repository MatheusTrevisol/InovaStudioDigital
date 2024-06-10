import { Container, Content, TextBox } from "./styles";

import { MdKeyboardArrowDown } from "react-icons/md";

export function BannerInova() {
  return (
    <Container>
      <Content data-aos="zoom-in">
        <TextBox>
          <h2>
            Evolua com o seu negócio
            <span> através do digital</span>
          </h2>
        </TextBox>

        <a href="#contact">
          <MdKeyboardArrowDown size={32} />
        </a>
      </Content>
    </Container>
  )
};