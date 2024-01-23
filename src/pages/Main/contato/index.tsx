import { Container } from "./styles";
import Curriculo from "../../../assets/Curriculo.png"
import Curriculo2 from "../../../assets/Curriculo2.png"

export default function Contato () {
  return (
    <Container>
      <div className="contact">
        <p><b>Email:</b> piningadev@hotmail.com</p>
        <p><b>Telefone:</b> (81) 9 9674-4205</p>
        <p><b>Linkedin:</b> <a href="https://www.linkedin.com/in/thiago-pininga">https://www.linkedin.com/in/thiago-pininga</a></p>
      
        <div className="curriculo">
          <img src={Curriculo} alt="" />
          <img src={Curriculo2} alt="" />
        </div>
      </div>

      
    </Container>
  )
}
