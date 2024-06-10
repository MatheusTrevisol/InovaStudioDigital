import { Container } from "./styles";

import { useEffect } from "react";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Range } from "../../components/Range";
import { BannerInova } from "../../components/BannerInova";
import { Services } from "../../components/Services";
import { Plans } from "../../components/Plans";
import { About } from "../../components/About";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

import { handleWhatsapp } from "../../utils/whatsappMsgs";

/*Aos Animation Library*/
import Aos from "aos";
import "aos/dist/aos.css";

export function Home() {
  useEffect(() => {
    Aos.init({duration: 1000, offset: 250});
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Hero />

        <Services />

        <About />

        <Range />
        
        <Plans />
        
        <BannerInova />

        <Contact />
      </main>

      <WhatsAppButton onClick={handleWhatsapp} />

      <Footer />
    </Container>
  );
};