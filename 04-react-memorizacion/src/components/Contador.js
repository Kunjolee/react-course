import { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const sumar = useCallback(() => setCounter(counter + 1), [counter]);
  const restar = useCallback(() => setCounter(counter - 1), [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <p>{counter}</p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <input type="text" onChange={handleChange} value={input} />
      <ContadorHijo counter={counter} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
