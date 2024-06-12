import { Container, Content, LeftDiv, FormDiv, RightDiv, Step } from "./styles";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import emailjs from "@emailjs/browser";

import { Button } from "../Button";

import { LiaStarOfLifeSolid } from "react-icons/lia";
import { IoIosCheckmark } from "react-icons/io";

const contactInovaFormSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  whatsapp: z.string().optional(),
  email: z.string().min(1, "O email é obrigatório").email("Formato de email inválido"),
  company: z.string().optional(),
  message: z.string().min(4, "A mensagem é obrigatória"),
});

export function Contact() {
  const [isLoading, SetIsLoading] = useState(false);
  const [successEmailComponent, SetSuccessEmailComponent] = useState(false);

  async function handleSendEmail() {
    SetIsLoading(true);

    // Send the form after 3sec;      
    const response = await emailjs.sendForm("service_1p0yhdt", "template_bbirrnt", "#form", "FbEgBzLgq_FNiJL-O"); 

    if(response.status === 200) {
      SetIsLoading(false);
      SetSuccessEmailComponent(true);
              
      let nameValue = document.getElementById("name");
      let emailValue = document.getElementById("email");
      let whatsappValue = document.getElementById("whatsapp");
      let companyValue = document.getElementById("company");
      let messageValue = document.getElementById("message");

      /* remove de span success msg and reset the inputs */
      nameValue.value = '';
      emailValue.value = '';
      whatsappValue.value = '';
      companyValue.value = '';
      messageValue.value = '';

      setTimeout(() => {
        SetSuccessEmailComponent(false);
      }, 3000);
    } else {
      SetIsLoading(false);
      alert("Houve um erro ao tentar enviar o email, por favor tente novamente mais tarde");
    }
  }

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactInovaFormSchema)
  });

  return (
    <Container id="contact">
      <Content data-aos="fade-up" data-aos-duration="1000">
        <LeftDiv>
          <div className="text-div">
            <h1>Entre em contato</h1>
            <p>
              Se preferir mande um email, conte com a gente para resolver qualquer dúvida/problema que possa surgir, responderemos em até 24h!
            </p>
          </div>

          <FormDiv id="form" onSubmit={handleSubmit(handleSendEmail)} >
            <div className="input-div">
              <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" {...register("name")} placeholder="Nome*" />
                {errors.name && <span>{errors.name.message}</span>}
              </div>

              <div>
                <label htmlFor="email"></label>
                <input type="email" id="email" {...register("email")} placeholder="Email*" />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div>
                <label htmlFor="whatsapp"></label>
                <input type="text" id="whatsapp" {...register("whatsapp")} placeholder="Whatsapp (opcional)" />
              </div>

              <div>
                <label htmlFor="company"></label>
                <input type="text" id="company" {...register("company")} placeholder="Empresa (opcional)" />
              </div>

              <div className="textarea-div">
                <label htmlFor="message"></label>
                <textarea 
                  {...register("message")}
                  id="message" 
                  rows="8"
                  placeholder="Mensagem*"
                />
                {errors.message && <span>{errors.message.message}</span>}
              </div>
            </div>

            <div className="button-span">
              <Button 
                id="sendButton" 
                type="submit" 
                title="Enviar" 
                isLoading={isLoading} 
                disabled={isSubmitting}
              />
              {
                successEmailComponent &&
                <span><IoIosCheckmark size={24} /> o e-mail foi enviado com sucesso</span>
              }
            </div>
          </FormDiv>
        </LeftDiv>

        <RightDiv>
          <LiaStarOfLifeSolid size={30} />
          
          <h1>O que você precisa saber antes de nos contratar</h1>

          <ul>
            <Step>
              <span>1.</span> 
              <p>Personalizamos nossos serviços para melhor atender suas necessidades.</p>
            </Step>
            <Step>
              <span>2.</span> 
              <p>Cada etapa precisa ser aprovada por você antes de seguirmos para a próxima.</p>
            </Step>
            <Step>
              <span>3.</span> 
              <p>Durante todo o processo e também pós estaremos disponíveis para esclarecer dúvidas, receber sugestões e trocar ideias.</p>
            </Step>
            <Step>
              <span>4.</span> 
              <p>Nosso time é seu time, total transparência e parceria! Seu sucesso é o nosso!</p>
            </Step>
          </ul>
        </RightDiv>
      </Content>
    </Container>
  );
}