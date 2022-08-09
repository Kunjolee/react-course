import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyle from "./Estilos.module.css";

export default function Estilos() {
  let myStyle = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <div className="estilos">
      <h2>Estilos CSS</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en linea (Atributo style)
      </h3>
      <h3 className="bg-react" style={myStyle}>
        Estilos en linea
      </h3>
      <h3 className="bg-react">
        Agregando Normalize (Caracteristica de create-react-app)
        <br />
        <code>@import-normalize; </code>
      </h3>
      <h3 className={moduleStyle.error}>Estilos con Modulos</h3>
      <h3 className={moduleStyle.success}>Estilos con modulos</h3>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </div>
  );
}
