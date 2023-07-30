import { Container } from "./styles";

import { FaBars } from "react-icons/fa"
import Logo from "../../assets/tp.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../Sidebar";

export function Header(){


  return(
    <Container>
      <img src={Logo} alt="Logo" />

      <Sidebar></Sidebar>

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
    </Container>
  )
}
