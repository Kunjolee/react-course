import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    /* La buena practica recomienda bindear tus metodos en el constructor para reutilizarlos */
    this.sumaClick = this.operacion.bind(this, true);
    this.restaClick = this.operacion.bind(this, false);
  }

  operacion(flag) {
    this.setState((actualState) => {
      return {
        counter: flag ? actualState.counter + 1 : actualState.counter - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos ES6</h2>
        <button onClick={this.sumaClick}>+</button>
        <button onClick={this.restaClick}>-</button>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    counter: 0,
  };
  saludo = "holaaa";
  saludarClick = this.saludar.bind(this);

  sumar = () => {
    console.log("Sumando");
    this.setState(() => ({
      counter: this.state.counter + 1,
    }));
  };

  restar = () => {
    console.log("Restando");
    this.setState(() => {
      return {
        counter: this.state.counter - 1,
      };
    });
  };

  saludar() {
    console.log(this.saludo);
  }

  render() {
    return (
      <div>
        <h2>Eventos ES7</h2>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
        <button onClick={this.saludarClick}>👋</button>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

/* 
  Eventos Sinteticos de React: Una capa nueva que tiene algunos de los eventos nativos en JS pero con compatibilidad en los navegadores que soportan React

  Acceder al evento nativo en js

  Paso de parametros a una funcion manejadora de evento

  Eventos personalizados: Utilizar eventos en componentes
   para realizar un evento personalizado se debe crear una prop en el componente y a esa prop asignarle la accion que queremos que realize el evento (en una funcion), luego dentro del componente en la etiqueta JSX asignarle esa prop al evento que queremos usar (por eso la prop debe ser una funcion, porque los eventos solo aceptan funciones)
   
  Forma incorrecta de utilizar eventos en componentes:
    <Button
      onClick={(e) => {
        this.handleClick(e, "Paso de parametros desde un componente");
      }}
    />           
*/

/* function Button(props) {
  return <button onClick={props.myOnClick}>Boton Componente</button>;
} */

/* const Button = (props) => (
  <button onClick={props.myOnClick}>Boton Componente</button>
); */

const Button = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton Componente</button>
);

export class MasSobreEventos extends Component {
  handleClick(e, mensaje) {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  }
  render() {
    return (
      <div>
        <h2>Más sobre Eventos</h2>
        <button
          onClick={(e) => {
            this.handleClick(e, "Paso de parametros desde un elemento JSX");
          }}
        >
          Saludar
        </button>
        <Button
          myOnClick={(e) => {
            this.handleClick(e, "Paso de parametros desde un Componente");
          }}
        />
      </div>
    );
  }
}
