import { useReducer } from "react";

const initialState = {
  contador: 0,
};

const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPE.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPE.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPE.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPE.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPE.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar = () => dispatch({ type: TYPE.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPE.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPE.DECREMENT });
  const restar5 = () => dispatch({ type: TYPE.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPE.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <button onClick={sumar5}>+5</button>
      <button onClick={sumar}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;

/* 
  -Funcion reducer se ejecuta cuando se manda a llamar el dispatch   
  -dispatch recibe como parametro el valor de el argumento action de la function reducer
  -la funcion reducer siempre tiene que retornar el nuevo valor del estado
  -el argumento action  de la funcion reducer es un objeto que tiene 2 propiedades: type que es el tipo de accion y payload que es el valor que se utilizara para modificar el estado
  -init: tercer parametro (opcional) funcion que se dispara cuando se monta el componente, transforma el valor inicial del estado y recibe como argumento el valor inicial
*/
