import React, { Component } from "react";

function EstadoAHijo(props) {
  return <h3>{props.childCounter}</h3>;
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    /* setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000); */
  }

  render() {
    return (
      <div>
        <h2>Estado</h2>
        <p>{this.state.counter}</p>
        <EstadoAHijo childCounter={this.state.counter} />
      </div>
    );
  }
}

/* Cuando el estado o las props cambian se renderiza de nuevo la app */
/* El estado de un componente padre se puede pasar como propiedad a la prop de un componente hijo */
