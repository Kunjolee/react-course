import React, { Component } from "react";

class Clock extends Component {
  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del dom");
  }
  render() {
    return <h3>{this.props.myHour}</h3>;
  }
}
export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.timer = null;
    /* console.log(0, "El componente se inicializa, aún NO está en el DOM"); */
  }

  componentDidMount() {
    /* console.log(1, "El componente se ya encuentra en el DOM"); */
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado ");
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState(() => {
        return {
          hour: new Date().toLocaleTimeString(),
        };
      });
    }, 1000);
  };

  changeVisible = (flag) => {
    this.setState(() => ({
      visible: flag,
    }));
  };

  start = () => {
    this.tictac();
    this.changeVisible(true);
  };

  stop = () => {
    clearInterval(this.timer);
    this.changeVisible(false);
  };

  render() {
    /* console.log(
      4,
      "El componente se dibuja (o redibuja por algun cambio) en el DOM"
    ); */
    return (
      <div>
        <h2>Ciclo Vida</h2>
        {this.state.visible && <Clock myHour={this.state.hour} />}
        <button onClick={this.start}>Iniciar</button>
        <button onClick={this.stop}>Detener</button>
      </div>
    );
  }
}
