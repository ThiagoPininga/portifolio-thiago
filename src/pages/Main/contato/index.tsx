import { Container } from "./styles";
import Curriculo from "../../../assets/Curriculo.png"

export default function Contato () {
  return (
    <Container>
      <div className="contact">
        <p><b>Email:</b> thiagopininga@hotmail.com</p>
        <p><b>Telefone:</b> (81) 9 96744205</p>
        <p><b>Linkedin:</b> <a href="https://www.linkedin.com/in/thiago-pininga">https://www.linkedin.com/in/thiago-pininga</a></p>
      </div>

      <div className="curriculo">
        <img src={Curriculo} alt="" />
      </div>
    </Container>
  )
}
