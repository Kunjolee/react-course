import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";

const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador</h2>
      <button onClick={() => dispatch(sumar())}>Sumar</button>
      <button onClick={() => dispatch(sumar5())}>Sumar5</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(restar())}>Restar</button>
      <button onClick={() => dispatch(restar5())}>Restar5</button>
      <h3>{state.contador}</h3>
    </div>
  );
};
export default Contador;
