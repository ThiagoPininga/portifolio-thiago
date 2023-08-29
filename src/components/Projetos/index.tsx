import { Container } from "./styles";

interface ProjetosProps{
  titulo: string;
  img: string;
  descricao: string;
  adicional?: string;
}

export function Projetos({titulo, img, descricao, adicional}:ProjetosProps){
  return (
    <Container>
      <h3>{titulo}</h3>
      <img src={img} alt="" />
      <p className="description-with-line-breaks linkProjeto">{descricao}</p>
      {adicional && <p className="linkProjeto"><a href={adicional}>Clique aqui</a> para ir ao site do projeto</p>}
    </Container>
  )
}
