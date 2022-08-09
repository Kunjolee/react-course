import React from "react";
import { Link, Outlet } from "react-router-dom";
// Concepto de rutas anidadas
// Outlet sera reemplazado por mis componentes declarados en las rutas hijos
const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <nav>
        <Link to={"jsx"}>JSX</Link>
        <Link to={"props"}>PROPS</Link>
        <Link to={"state"}>STATE</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default ReactTopics;
