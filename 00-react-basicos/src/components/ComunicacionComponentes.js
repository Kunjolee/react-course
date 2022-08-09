import React, { Component } from "react";

/*
 Padres a hijos: A traves de props 

 Hijos afectando comportamientos de padres: A traves de eventos personalizados donde el hijo reciba una propiedad, ejecute una funcion que afecte a un estado del padre

 Componentes no relacionados: Se toca en este video a nivel teorico (minuto 15:45) , en el articulo de jonmircha puedes leer mas de eso. Tambien se hablan de diferentes metodologias y de los portales en react js (todo a nivel teorico), pero el tema se retomara en redux y en los hooks */

export default class Padre extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = (e) => {
    this.setState((actualState) => {
      return {
        counter: actualState.counter + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Comunicacion entre componentes</h2>
        <p>
          Contador <b>{this.state.counter}</b>
        </p>
        <Hijo
          myIncrementCounter={this.incrementCounter}
          mensaje={"Mensaje para el hijo"}
        />
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.myIncrementCounter}>
        Modificar el estado del padre
      </button>
    </>
  );
}
