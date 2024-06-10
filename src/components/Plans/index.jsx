import { Container, Content, TextDiv, PlansDiv, Plan } from "./styles";

import { useEffect, useRef, useState } from 'react';

import { SwiperButtons } from "../SwiperButtons";
import { Button } from "../Button";

import { handleWhatsapp } from "../../utils/whatsappMsgs";

import { FaBaby } from "react-icons/fa";
import { GiFallingLeaf } from "react-icons/gi";
import { IoIosRocket, IoIosCheckmark } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

import { Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Plans() {
  const swiperContainerRef = useRef(null);
  const [ slidesPerViews, setSlidesPerViews ] = useState(1);

  useEffect(() => {
    function deviceWidth() {
      if(window.innerWidth < 600) {
        setSlidesPerViews(1);
      }

      if(window.innerWidth >= 600) {
        setSlidesPerViews(2);
      }

      if(window.innerWidth >= 1000) {
        setSlidesPerViews(3);
      }
    }
    
    deviceWidth();

    window.addEventListener("resize", deviceWidth);
  }, []);

  return (
    <Container id="plans">
      <Content>
        <TextDiv>
          <div className="text-div">
            <h1>Escolha os serviços ideais para o seu negócio</h1>
            <p>
              Também é possível solicitar qualquer um dos serviços, conte com a gente para encontrarmos juntos a melhor solução para o seu caso
            </p>
          </div>
          {
            <SwiperButtons swiperContainerRef={swiperContainerRef} />
          }
        </TextDiv>
        <PlansDiv>
          <Swiper
            modules={[ Pagination, Scrollbar, A11y ]}
            ref={swiperContainerRef}
            spaceBetween={50}
            slidesPerView={slidesPerViews}
            navigation={false}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
            }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Plan>
                <FaBaby size={45} />
                <h3>Design</h3>
                <ul>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Arquitetura do site
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Design Visual do site
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Imagens / Edições
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="buttons-div">
                  <Button icon={FaWhatsapp} title="Converse conosco" onClick={handleWhatsapp} />
                  <Button />
                </div>
              </Plan>
            </SwiperSlide>
            <SwiperSlide>
              <Plan>
                <GiFallingLeaf size={45} />
                <h3>Site + Otimização SEO</h3>
                <ul>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Configuração completa
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Palavras chaves
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Links entre site/palavras
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Site de conversão eficaz
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Suporte desenvolvimento
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="buttons-div">
                  <Button icon={FaWhatsapp} title="Converse conosco" onClick={handleWhatsapp} />
                  <Button />
                </div>
              </Plan>
            </SwiperSlide>
            <SwiperSlide>
              <Plan>
                <IoIosRocket size={45} />
                <h3>Fotografia</h3>
                <ul>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        +50 Imagens profissionais
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Edição de imagens
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Suporte fotográfico
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="buttons-div">
                  <Button icon={FaWhatsapp} title="Converse conosco" onClick={handleWhatsapp} />
                  <Button />
                </div>
              </Plan>
            </SwiperSlide>
            <SwiperSlide>
              <Plan>
                <IoIosRocket size={45} />
                <h3>Social Media</h3>
                <ul>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Estratégias de Mídia 
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Criação de conteúdo
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        20 Posts mensais
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="buttons-div">
                  <Button icon={FaWhatsapp} title="Converse conosco" onClick={handleWhatsapp} />
                  <Button />
                </div>
              </Plan>
            </SwiperSlide>
            <SwiperSlide>
              <Plan>
                <IoIosRocket size={45} />
                <h3>Tráfego Pago</h3>
                <ul>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Criação dos anúncios
                      </p>
                    </div>
                  </li>                
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Estratégia dos anúncios
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Análise de métricas
                      </p>
                    </div>
                  </li>                
                  <li>
                    <div>
                      <IoIosCheckmark size={22} />
                      <p>
                        Otimização contínua
                      </p>
                    </div>
                  </li>           
                </ul>
                <div className="buttons-div">
                  <Button icon={FaWhatsapp} title="Converse conosco" onClick={handleWhatsapp} />
                  <Button />
                </div>
              </Plan>
            </SwiperSlide>
          </Swiper>
        </PlansDiv>
      </Content>
    </Container>
  );
}