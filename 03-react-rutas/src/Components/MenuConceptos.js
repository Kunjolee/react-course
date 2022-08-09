import React from "react";
import { Link, NavLink } from "react-router-dom";

const styleLink = {
  color: "#0f0",
  textDecoration: "none",
};

const ConceptosMenu = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTMl (No recomendado)</span>
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
        </li>
        <li>
          <span>Componente Link</span>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <span>Componente NavLink</span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? styleLink : undefined)}
          >
            About
          </NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to={"users/josue"}>Ir al perfil de Josue</Link>
          <Link to={"users/kunjo"}>Ir al perfil de Kunjo</Link>
        </li>
        <li>
          <span>Parametros de consulta</span>
          <Link to={"productos"}>Productos</Link>
        </li>
        <li>
          <span>Redirecciones</span>
          <Link to={"acerca"}>Acerca</Link>
          <Link to={"contacto"}>Contacto</Link>
        </li>
        <li>
          <span>Rutas anidadas (Nested Routes)</span>
          <Link to={"react"}>React topics</Link>
        </li>
        <li>
          <span>Rutas privadas</span>
          <Link to={"login"}>Login</Link>
          <Link to={"dashboard"}>Dash Board</Link>
        </li>
      </ol>
    </nav>
  );
};

export default ConceptosMenu;
