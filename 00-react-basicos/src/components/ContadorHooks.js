import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [count, setCount] = useState(0);

  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);

  return (
    <div>
      <h2>Hooks - useState</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <h3>{count}</h3>
    </div>
  );
}
