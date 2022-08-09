import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.framework.web} rel="noreferrer" target="_blank">
        {props.framework.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((season, index) => (
            <li key={index}>{season}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend Javascript</h3>
        <ul>
          {data.frameworks.map((framework) => (
            <ElementoLista key={framework.id} framework={framework} />
          ))}
        </ul>
      </div>
    );
  }
}

/* Los listItem de JSX tienen que tiener un atributo especial de react llamado key (esta debe ser UNICA) */
/* Con este el virtual dom puede tener una referencia del listItem de JSX y saber de una forma mas rapida cual listItem JSX se actualizó  */
/* Cuando lo que se desea renderizar es un listItem de JSX se agrega el atributo key a ese mismo listItem.
Pero cuando lo que se desea renderizar es un componente, el key se agrega al componente (no a los LIST que retorna el componente) */
