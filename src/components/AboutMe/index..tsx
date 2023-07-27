import { Container } from "./styles";

import Foto from "../../assets/Foto.jpg"

export function AboutMe() {
  return (
    <Container>
      <img src={Foto} alt="" />
      <div className="textoAM">
        <h3>Sobre mim</h3>
        <p>Olá, meu nome é Thiago Pininga e resido em Recife, Pernambuco, como um apaixonado desenvolvedor web completo. Ao estudar Ciência da Computação na Faculdade Uninassau, pretendo melhorar minhas habilidades e compreensão.
          <br />
          <br />

          Fui atraído pela tecnologia e pelo potencial transformador da programação desde muito jovem. Diariamente, o que me inspira e me motiva é encontrar maneiras criativas de resolver problemas digitais. O meu interesse em criar sites e aplicativos interativos e funcionais me levou na estudar linguagens como HTML, CSS, JavaScript e frameworks atuais.

<br />
<br />
Uma parte essencial de meu percurso é a busca constante de novos desafios e oportunidades de aprendizado. Ainda não tenho experiência profissional, mas estou ansioso para lidar com problemas na vida real e mergulhar de cabeça no universo da tecnologia.

<br />
<br />
Meu objetivo é usar o conhecimento que aprendi na faculdade para ajudar as pessoas e a sociedade a fazer coisas boas. Estou confiante de que alcançarei grandes sucessos nessa trajetória como desenvolvedor web se me esforçar e me dedicar. Estou ansioso para oferecer meu entusiasmo e habilidades para projetos inovadores e estou aberto a oportunidades e parcerias.</p>
      </div>
    </Container>
  )
}
