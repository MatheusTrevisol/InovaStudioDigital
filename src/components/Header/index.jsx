import { Container, Content, Navbar } from "./styles";

import { useEffect, useState } from 'react';

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { MenuLayout } from "../../components/MenuLayout";

import { HiOutlineMenuAlt3  } from 'react-icons/hi';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function toggleMenu() {
    setMenuIsVisible(!menuIsVisible)
  };
  
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);   
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);
  
  return (
    <Container id="/">
      <Content>
        <Logo />

        <Navbar>
          {
            /* MENU HAMBURGUER < 800PX */
            screenWidth < 800 &&
            <Button type="button" onClick={toggleMenu} icon={HiOutlineMenuAlt3} />
          }
          {
            /* MENU HAMBURGUER LAYOUT */
            menuIsVisible &&
            <MenuLayout toggleMenu={toggleMenu} />
          }
          {
            /* MENU > 800PX */
            screenWidth >= 800 &&
            <ul>
              <li><a href="#services">serviços</a></li>
              <li><a href="#about">sobre</a></li>
              <li><a href="#plans">planos</a></li>
              <li><a href="#contact">contato</a></li>
            </ul>
          }
        </Navbar>
      </Content>
    </Container>
  )
}