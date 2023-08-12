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
          <p>Com habilidades em JavaScript, React e Node.js, sou capaz de criar aplicações web interativas e eficientes. Com o JavaScript como base, posso desenvolver lógica de front-end e back-end, garantindo uma experiência de usuário dinâmica e responsiva. Com o framework React, posso construir interfaces modernas e componentes reutilizáveis, proporcionando uma navegação suave e intuitiva. Além disso, com o Node.js, posso criar servidores robustos e escaláveis, permitindo o processamento de dados em tempo real e a construção de aplicações completas.</p>
        </div>
        <img src={JS} alt="Logo do Javascript" />
      </div>

      <div className="texto">
        <img src={PHP} alt="Logo do PHP" />
        <div>
          <h3>PHP e MySQL:</h3>
          <p>Com proficiência em PHP e MySQL, sou capaz de desenvolver aplicações web dinâmicas e funcionais. Utilizando o PHP como linguagem server-side, posso criar páginas interativas e recursos personalizados, tornando a experiência do usuário mais envolvente. Além disso, com o MySQL, posso gerenciar com eficiência bancos de dados, garantindo o armazenamento e recuperação de informações de forma segura e organizada. Minha habilidade em PHP e MySQL me permite construir sistemas eficazes, desde pequenos sites até aplicações web mais complexas, impulsionando a performance e a efetividade dos projetos que desenvolvo.</p>
        </div>

      </div>

      <div className="texto">
        <div>
          <h3>Blender:</h3>
          <p>Embora o Blender não seja minha área principal de atuação, possuo amplo conhecimento nessa área, sendo um hobby que me apaixona profundamente. Estou comprometido em aprimorar minhas habilidades e transformar esse interesse em uma carreira profissional. Com dedicação e entusiasmo, busco oportunidades para explorar novos desafios e contribuir efetivamente no mundo da modelagem e animação 3D.</p>
        </div>
        <img src={Blender} alt="Logo do blender" />
      </div>
    </Container>
  )
}
