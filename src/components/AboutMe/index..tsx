import { Container } from "./styles";

import Foto from "../../assets/Foto.jpg"

export function AboutMe() {
  return (
    <Container>
      <img src={Foto} alt="" />
      <div className="textoAM">
        <h3>Sobre mim</h3>
        <p>Olá! Meu nome é Thiago Pininga, e sou um entusiasta desenvolvedor web full stack com sede em Recife, Pernambuco. Atualmente, estou embarcando na emocionante jornada acadêmica na Faculdade Uninassau, onde estou cursando Ciência da Computação para aprimorar ainda mais minhas habilidades e conhecimentos.
          <br />
          <br />

Desde muito jovem, fui cativado pela tecnologia e pelo potencial transformador da programação. Encontrar soluções criativas para desafios digitais é o que me motiva e inspira diariamente. A paixão pela criação de sites interativos e aplicativos funcionais me levou a explorar linguagens como HTML, CSS, JavaScript e frameworks modernos.

<br />
<br />
A busca constante por aprendizado é uma parte fundamental do meu percurso, e estou sempre em busca de novas oportunidades para aprimorar meu conjunto de habilidades. Embora ainda não possua experiência profissional, estou ansioso para enfrentar desafios no mundo real e mergulhar de cabeça no universo da tecnologia.

<br />
<br />
Meu objetivo é aplicar o conhecimento adquirido na faculdade e, eventualmente, colaborar em projetos empolgantes que tragam um impacto positivo para as pessoas e a sociedade. Com determinação e dedicação, estou confiante de que alcançarei grandes conquistas nessa trajetória como desenvolvedor web. Estou aberto a oportunidades e parcerias, ansioso para contribuir com meu entusiasmo e habilidades para projetos inovadores. </p>
      </div>
    </Container>
  )
}
