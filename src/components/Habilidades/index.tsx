import Blender from "../../assets/blender.png"
import JS from "../../assets/js.png"
import PHP from "../../assets/php.png"

import { Container } from "./styles";

export function HardSkills(){
  return(
    <Container>
      <h1>Habilidades</h1>
      <div className="texto">
        <div>
          <h3>Javascript, ReactJS e NodeJS:</h3>
          <p>Sou capaz de desenvolver aplicações web interativas e eficientes usando habilidades em JavaScript, React e Node.js. Posso criar lógica de front-end e back-end usando JavaScript como base, garantindo uma experiência de usuário dinâmica e responsiva. Ao usar o framework React, tenho a capacidade de criar interfaces contemporâneas e componentes reutilizáveis que ofereçam uma navegação fácil. Além disso, posso criar servidores robustos e escaláveis com o Node.js, que permite o processamento de dados em tempo real e a construção de aplicações completas.</p>
        </div>
        <img src={JS} alt="Logo do Javascript" />
      </div>

      <div className="texto">
        <img src={PHP} alt="Logo do PHP" />
        <div>
          <h3>PHP e MySQL:</h3>
          <p>Sou capaz de criar aplicações web dinâmicas e funcionais com proficiência em PHP e MySQL. Posso criar páginas interativas e recursos personalizados usando o PHP como linguagem server-side, tornando a experiência do usuário mais interativa. Além disso, posso administrar bancos de dados com sucesso com o MySQL, que garante o armazenamento e recuperação seguras de dados. Ao desenvolver habilidades em PHP e MySQL, posso criar sistemas eficazes, desde pequenos sites até aplicações web mais complexas, aumentando na eficiência e a performance dos projetos que desenvolvo.</p>
        </div>

      </div>

      <div className="texto">
        <div>
          <h3>Blender:</h3>
          <p>Embora o Blender não seja minha área principal de atuação, tenho um grande conhecimento dele como hobby e o amo muito. Estou comprometido a desenvolver minhas habilidades e transformar esse interesse em uma carreira profissional. Busco oportunidades para enfrentar novos desafios e fazer uma contribuição significativa no mundo da modelagem e animação 3D com entusiasmo e dedicação.</p>
        </div>
        <img src={Blender} alt="Logo do blender" />
      </div>
    </Container>
  )
}
