import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export function Sidebar() {

  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <Container isActive={sidebar}>
      <button onClick={toggleSidebar}>
        <FaBars></FaBars>
      </button>

      {sidebar &&
        (<nav>
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
        </nav>)
        }

    </Container>
  )
}
