import React, { Component } from "react";

class Componente extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    );
  }
}

/* const Componente = (props) => <h1>{props.msg}</h1>; */

/* function Componente(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
      <p>Aprendiendo react en funcion declarada</p>
    </div>
  );
} */

export default Componente;

/* Clase 4 Componente*/

/*
-Datos sobre los componentes: https://jonmircha.com/react

-Un componente de clase por default debe tener el método render.
-Metodo render es el que permite renderizar el código jsx en el componente.

-Desde la versión 17 create react app permite que no se importe React pero en versiones anteriores eso no sucedia. Entonces se considera mala práctica no importar por defecto React. 

-Los componentes pueden ser funciones o clases. En versiones anteriores a react hooks los componentes de clases eran los únicos que podian tener estados.

*/
