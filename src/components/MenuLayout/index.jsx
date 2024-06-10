import { Container, Links } from "./styles";

import { IoMdClose } from 'react-icons/io';

export function MenuLayout({ toggleMenu }) {
  return (
    <Container>
      <Links>
        <ul>
          <li><a onClick={() => toggleMenu()} href="#services">serviços</a></li>
          <li><a onClick={() => toggleMenu()} href="#about">sobre</a></li>
          <li><a onClick={() => toggleMenu()} href="#plans">planos</a></li>
          <li><a onClick={() => toggleMenu()} href="#contact">contato</a></li>
        </ul>
      </Links>

      <IoMdClose size={42} onClick={() => toggleMenu()}/>
    </Container>
  );
};