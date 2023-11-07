import { Container } from "./styles";

import Foto from "../../assets/Foto.jpg"

export function AboutMe() {
  return (
    <Container>
      <img src={Foto} alt="" />
      <div className="textoAM">
        <h3>Sobre mim</h3>
        <p>Olá, meu nome é Thiago Pininga e resido em Recife, Pernambuco, como um apaixonado desenvolvedor full stack. Ao estudar Ciência da Computação na Faculdade Uninassau, pretendo melhorar minhas habilidades e compreensão.
          <br />
          <br />
          Fui atraído pela tecnologia e pelo potencial transformador da programação desde muito jovem. Diariamente, o que me inspira e me motiva é encontrar maneiras criativas de resolver problemas digitais. O meu interesse em criar sites e aplicativos interativos e funcionais me levou na estudar linguagens como HTML, CSS, JavaScript e frameworks atuais.

<br />
<br />
Durante minha jornada, estou constantemente em busca de novos desafios e oportunidades de aprendizado. Atualmente, sou estagiário na Compass UOL, onde atuo como engenheiro de dados AWS, onde tenho aprendido muito no pouco tempo que estou.
<br />
<br />
Meu objetivo é usar o conhecimento que aprendi com a programação para ajudar o máximo de pessoas que eu conseguir. Estou confiante de que alcançarei grandes sucessos nessa trajetória com a tecnologia se me esforçar e me dedicar. Estou ansioso para oferecer meu entusiasmo e habilidades para projetos inovadores e estou aberto a oportunidades e parcerias.</p>
      </div>
    </Container>
  )
}
