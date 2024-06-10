import { Container, Content, TextBox, ServicesBox, Service } from './styles';

import { FaGear, FaRankingStar } from "react-icons/fa6";
import { TiImage } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { IoVolumeMediumSharp } from "react-icons/io5";

export function Services() {
  return (
    <Container id="services">
      <Content data-aos="fade-up">
        <TextBox>
          <h2>SERVIÇOS</h2>
          <h4>que trazem soluções</h4>
        </TextBox>

        <ServicesBox  >
          <Service >
            <span>1</span>
            <FaGear size={50} />
            <h3>Branding</h3>
            <p>
              Buscamos aprimorar a identidade de sua marca, elevando-a a um patamar mais profissional, admirável e confiável aos olhos de seus futuros clientes. Nosso objetivo é construir uma imagem sólida e positiva que destaque seus valores e atraia confiança, consolidando sua presença de forma impactante no mercado.
            </p>
          </Service>
          <Service>
            <span>2</span>
            <FaRankingStar size={50} />
            <h3>Site e Estratégia SEO</h3>
            <p>
              Criamos e otimizamos o seu site para que se torne autoridade e referência, personalizamos cada detalhe para que sua marca se destaque com personalidade e profissionalismo, visando um melhor posicionamento para seu tráfego orgânico. Nosso objetivo é não apenas criar um site, mas construir uma presença online que transmita credibilidade e confiança ao seus futuros clientes;
            </p>
          </Service>
          <Service>
            <span>3</span>
            <FaCamera size={50} />
            <h3>Fotografia</h3>
            <p>
              Fotografias profissionais para sua marca. Encante seu público com imagens deslumbrantes do seu negócio, transmitindo credibilidade e confiança na sua empresa. Deixe-nos capturar a essência única do seu empreendimento e destacar seus pontos fortes de maneira visualmente impactante
            </p>
          </Service>         
          <Service>
            <span>4</span>
            <GiPaintBrush size={50} />
            <h3>Design</h3>
            <p>
              Procuramos capturar a essência da sua empresa através de conversas e pesquisas e criamos soluções conforme a sua necessidade.Nosso processo é 
              colaborativo, garantindo que cada detalhe seja refinado com base no seu feedback, para que você tenha uma identidade visual que se destaque no mundo digital;
            </p>
          </Service>
          <Service>
            <span>5</span>
            <TiImage size={58} />
            <h3>Social Media</h3>
            <p>             
              Nosso trabalho consiste em gerenciar e aprimorar sua presença online, visando construir maior autoridade e credibilidade em relação aos serviços que você oferece. Mantemos uma presença consistente e relevante para a sua marca no ambiente digital, fortalecendo sua posição no mercado e atraindo um público mais engajado.
            </p>       
          </Service>
          <Service>
            <span>6</span>
            <IoVolumeMediumSharp size={50} />

            <h3>Gestão de Tráfego Pago</h3>
            <p>
              Analisamos demandas específicas do seu negócio, desenvolvendo campanhas publicitárias eficazes tanto no 
              Google Ads quanto no Facebook Ads. Conectamos seus serviços com necessidades, o resultado é uma estratégia que não apenas aumenta a visibilidade da sua 
              empresa, mas também converte essas conexões em resultados tangíveis;
            </p>
          </Service>
        </ServicesBox>
      </Content>
    </Container>
  )
};