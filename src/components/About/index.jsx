import { Container, Content, LeftDiv, RightDiv,InovaBackground  } from "./styles";

import { Parallax } from 'react-parallax';

import imgParallax from "../../assets/parallax-img-about.avif"

export function About() {
  return (
    <Container id="about">
      <Parallax strength={600} bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
        <div className="overlay"></div>
        <InovaBackground>
          <img src="https://www.ellitedigital.com.br/front/images/strokes/a-ellite.svg" alt="" />
        </InovaBackground>
        <Content>
          <LeftDiv data-aos="fade-right">
            <h2>Quem somos</h2>
          </LeftDiv>
          <RightDiv data-aos="fade-left">
            <p>
              Somos a agência que faz mais. Trabalhamos com foco em resultados, oferecendo diversas soluções especializadas em desenvolvimento web e marketing.
              Assim, criamos experiências marcantes para conectar serviços à pessoas.
            </p>
            <p>
              Buscamos ser seu parceiro, através de um relacionamento próximo e de confiança para que sempre seja desenvolvido o melhor trabalho para cada caso.
            </p>
            <p>
              Nosso time de especialistas têm conhecimento para fazer a diferença e entregar além do esperado, buscando sempre a conversão.
            </p>
            <p>            
              Ser cliente da Inova é atingir os melhores resultados, estar bem posicionado e conseguir alcançar os seus objetivos.
            </p>
          </RightDiv>
        </Content>
      </Parallax>
    </Container>
  )
};