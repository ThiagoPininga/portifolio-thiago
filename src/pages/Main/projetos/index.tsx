import { Container } from "./styles";

import ToDo from "../../../assets/ToDoIndex.png"
import Harpoa from "../../../assets/FormHarpoa.png"
import DearBane from "../../../assets/DeerBaneLogin.png"
import FoodCommerce from "../../../assets/FoodCommerce.png"
import Austria from "../../../assets/Austria.png"


import { Projetos } from "../../../components/Projetos";


const projetos = [
  {
    titulo: "To Do - PHP | MySQL | HTML| CSS",
    img: ToDo,
    descricao: "Apresento o meu projeto desenvolvido em PHP e MySQL - um aplicativo To-Do altamente funcional, com recursos de login e registro. A página inicial é uma interface intuitiva e amigável, exibindo uma lista organizada de tarefas. Os usuários podem criar suas contas através da tela de registro, garantindo uma experiência personalizada. \n\n A funcionalidade de adicionar itens permite aos usuários inserir novas tarefas, enquanto a opção de modificar itens permite a edição e atualização das tarefas existentes, alem da exclusão das mesmas. Com a implementação de um banco de dados MySQL, todas as informações são armazenadas com segurança, permitindo aos usuários acessar suas listas de tarefas a qualquer momento e em qualquer dispositivo.\n\n  Com um design responsivo e eficiente, esse To-Do App é uma ferramenta essencial para a organização do dia a dia, ajudando os usuários a gerenciar suas tarefas de forma eficaz e otimizada.", adicional: "https://todo-pininga.000webhostapp.com"
  },
  {
    titulo: "Food Commerce - TypeScript | ReactJS ",
    img: FoodCommerce,
    descricao: "Agora eu quero mostrar o meu projeto pessoal: um Food Commerce que oferece uma experiência de compra de alimentos online incrivel. A interface é cuidadosamente projetada para ser funcional e intuitiva, proporcionando aos usuários uma jornada de compra sem esforço.\n\nA página principal apresenta um design atraente, com uma barra lateral que permite uma navegação fluida entre os produtos disponíveis. A listagem de produtos é organizada de maneira clara, facilitando a visualização e seleção. Cada produto pode ser facilmente adicionado ao carrinho, e um toast pop-up discreto no canto superior direito confirma a adição, mantendo o usuário informado.\n\nO carrinho de compras é um destaque, com uma lista detalhada dos itens selecionados. Os botões de adicionar, decrescer e remover produtos proporcionam controle total sobre a seleção. O subtotal e o total da compra são exibidos de forma proeminente, auxiliando na tomada de decisões. A funcionalidade do carrinho é simplificada e acessível, tornando o processo de finalização de compra tranquilo.\n\nEm resumo, meu projeto de Food Commerce apresenta uma abordagem fácil para a compra de alimentos online, com uma interface bem projetada que combina estética e usabilidade. Desde a navegação até o gerenciamento do carrinho, cada etapa é cuidadosamente projetada para oferecer aos usuários uma experiência de compra agradável e eficiente."
  },
  {
    titulo: "Listagem e Controle de clientes - PHP | MySQL | HTML| CSS",
    img: Harpoa,
    descricao: "Esse é o meu projeto de sistema de gestão de clientes e estoque para uma pequena empresa. Desenvolvi uma plataforma eficiente que oferece uma visão clara e organizada dos clientes, suas compras, status de pagamento e preferências. \n \nNo módulo de clientes, é possível visualizar uma lista completa dos clientes, incluindo seus nomes, valores totais de compras e o status de pagamento de cada transação. A atualização do estoque e tipos de itens é simplificada através de uma interface intuitiva, permitindo o gerenciamento contínuo dos produtos disponíveis.\n \n    A cereja do bolo é o formulário de cadastro de compras, onde os detalhes do cliente são registrados junto com informações sobre a compra, como tamanho da camisa e quantidade. Além disso, o sistema oferece a opção de indicar se o pagamento está pendente ou concluído, garantindo um controle eficaz das transações."
  },
  {
    titulo: "DeerBane - HTML | CSS | Javascript",
    img: DearBane,
    descricao: "Mostro aqui a minha criação de tela de login e registro, desenvolvida como um exercício para aprimorar minhas habilidades em HTML, CSS e JavaScript. Este design moderno e amigável oferece uma experiência de usuário envolvente, com campos de entrada elegantes e transições suaves. Uma abordagem única para a criação de contas e login. "
  },{
    titulo: "Portifolio 3D - Blender",
    img: Austria,
    descricao: "Aqui eu irei mostrar o mue portifólio 3D desenvolvido no Blender, onde a minha paixão pelo 3D pode ser mostrada. Veja o projeto de cima e diversos outros que eu desenvolvi.",
    adicional: "https://www.artstation.com/artwork/LRJ0kK"
  }

]
{/* <div className="projetos">
        <h3>To Do - PHP | MySQL | HTML| CSS</h3>
        <img src={ToDo} alt="" />
        <p>Apresento o meu projeto desenvolvido em PHP e MySQL - um aplicativo To-Do altamente funcional, com recursos de login e registro. A página inicial é uma interface intuitiva e amigável, exibindo uma lista organizada de tarefas. Os usuários podem criar suas contas através da tela de registro, garantindo uma experiência personalizada.
        <br /><br />
        A funcionalidade de adicionar itens permite aos usuários inserir novas tarefas, enquanto a opção de modificar itens permite a edição e atualização das tarefas existentes, alem da exclusão das mesmas. Com a implementação de um banco de dados MySQL, todas as informações são armazenadas com segurança, permitindo aos usuários acessar suas listas de tarefas a qualquer momento e em qualquer dispositivo.
        <br /><br />
        Com um design responsivo e eficiente, esse To-Do App é uma ferramenta essencial para a organização do dia a dia, ajudando os usuários a gerenciar suas tarefas de forma eficaz e otimizada.</p>

        <p className="linkProjeto"><a href="https://todo-pininga.000webhostapp.com">Clique aqui</a> para ir ao site do projeto</p>
      </div> */}

export default function ProjetosPage() {
  return (
    <Container>
      <h1>Projetos</h1>

      {projetos.map((projeto, index) => (
        <Projetos key={index} titulo={projeto.titulo} img={projeto.img} descricao={projeto.descricao} adicional={projeto.adicional}></Projetos>
      ))}
    </Container>
  )
}
