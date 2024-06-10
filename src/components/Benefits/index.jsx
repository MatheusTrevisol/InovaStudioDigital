import { Container, Content, UpBenefits, LogoBenefits, BottomBenefits } from "./styles";

import { useEffect } from "react";

import massage from "../../assets/massage.png";
import logo from "../../assets/logo.jpg";

export function Benefits() {
  useEffect(() => {
    const text = document.querySelector(".textdiv p");
    text.innerHTML = text.innerText.split("").map((char, i) =>
    `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
  ).join("")
  }, []);

  return (
    <Container>        
      <Content>
        <UpBenefits>
          <div className="benefit-squares">
            <div className="background-image">
              <img src={massage} alt="Massagem" />
            </div>

            <h3>Alívio de dores</h3>
            <p>
              Alivie as dores
            </p>
          </div>

          <div className="benefit-squares">
            <div className="background-image">
              <img src={massage} alt="Massagem" />
            </div>

            <h3>Relaxamento Muscular</h3>
            <p>
              Livre-se do stress e das dores causadas por ele
            </p>
          </div>

          <div className="benefit-squares">
            <div className="background-image">
              <img src={massage} alt="Massagem" />
            </div>

            <h3>Massagem Terapêutica</h3>
            <p>
              Melhor qualidade de vida no dia-a-dia
            </p>
          </div>
        </UpBenefits>

        <LogoBenefits>
          <img src={logo} alt="Logo" />
          <div className="textdiv">
            <p>Spadium - Spa - Massage -</p>
          </div>
        </LogoBenefits>

        <BottomBenefits>
          <div className="benefit-squares">
            <div className="background-image">
              <img src={massage} alt="Massagem" />
            </div>

            <h3>Massagem Terapêutica</h3>
            <p>
              Indicada para tratamento de tendinites, bursites, contraturas musculares, limitações do movimento, câimbras, dores nas articulações, lombalgia, ciatalgia e cervicalgia.
            </p>
          </div>

          <div className="benefit-squares">
            <div className="background-image">
              <img src={massage} alt="Massagem" />
            </div>

            <h3>Drenagem Linfática</h3>
            <p>
              Combate a retenção de líquidos acumulados, reduz hematomas, melhora a circulação sanguínea, elimina toxinas, relaxa o corpo,  evita a formação de celulites, relaxa cansaço de membros superiores e inferiores e indicado para gestantes após o 3º mês de gravidez.
            </p>
          </div>

          <div className="benefit-squares">
            <div className="background-image">
              <img src={massage} alt="Massagem" />
            </div>

            <h3>Hydro Therapy</h3>
            <p>Relieve discomfort and promote physical well-being</p>
          </div>
        </BottomBenefits>
      </Content>
    </Container>
  )
};