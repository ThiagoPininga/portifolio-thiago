import { Container } from "./styles";

import Logo from "../../assets/tp.png"
import { NavLink } from "react-router-dom";

export function Header(){
  return(
    <Container>
      <header>
        <img src={Logo} alt="Logo" />

        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="hard-skills">Habilidades</NavLink>
            </li>
            <li>
              <NavLink to="soft-skills">Qualidades</NavLink>
            </li>
            <li>
              <NavLink to="projetos">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="contato">Contato</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  )
}
