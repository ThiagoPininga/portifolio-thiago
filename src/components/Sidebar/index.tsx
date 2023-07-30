import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); 

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container isActive={sidebar} ref={sidebarRef}>
      <button onClick={toggleSidebar}>
        <FaBars />
      </button>

      {sidebar && (
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
      )}
    </Container>
  );
}
