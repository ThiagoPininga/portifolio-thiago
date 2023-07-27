import { Container } from "./styles";

import ToDo from "../../../assets/ToDoIndex.png"

export default function ProjetosPage() {
  return (
    <Container>
      <h1>Projetos</h1>
      <div className="projetos">
        <h3>To Do - PHP | MySQL | HTML| CSS</h3>
        <img src={ToDo} alt="" />
        <p>Apresento o meu projeto desenvolvido em PHP e MySQL - um aplicativo To-Do altamente funcional, com recursos de login e registro. A página inicial é uma interface intuitiva e amigável, exibindo uma lista organizada de tarefas. Os usuários podem criar suas contas através da tela de registro, garantindo uma experiência personalizada.
        <br /><br />
        A funcionalidade de adicionar itens permite aos usuários inserir novas tarefas, enquanto a opção de modificar itens permite a edição e atualização das tarefas existentes, alem da exclusão das mesmas. Com a implementação de um banco de dados MySQL, todas as informações são armazenadas com segurança, permitindo aos usuários acessar suas listas de tarefas a qualquer momento e em qualquer dispositivo.
        <br /><br />
        Com um design responsivo e eficiente, esse To-Do App é uma ferramenta essencial para a organização do dia a dia, ajudando os usuários a gerenciar suas tarefas de forma eficaz e otimizada.</p>

        <p className="linkProjeto"><a href="https://todo-pininga.000webhostapp.com">Clique aqui</a> para ir ao site do projeto</p>
      </div>
    </Container>
  )
}
