import { useReducer } from "react";
import { TYPE } from "../actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const sumar = () => dispatch({ type: TYPE.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPE.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPE.DECREMENT });
  const restar5 = () => dispatch({ type: TYPE.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPE.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer Mejorado</h2>
      <button onClick={sumar5}>+5</button>
      <button onClick={sumar}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContadorMejorado;
