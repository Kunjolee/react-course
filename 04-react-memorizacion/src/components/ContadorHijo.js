import { memo, useMemo } from "react";

const styles = {
  border: "thin solid",
  padding: "1rem",
  textAlign: "center",
  marginTop: "1rem",
};

const slowOperation = () => {
  // i created this just for my useMemo test
  let number = 0;
  for (let x = 0; x < 1000000000; x++) {
    number++;
  }

  return number;
};

const ContadorHijo = ({ counter, sumar, restar }) => {
  let superNumber = useMemo(() => {
    return slowOperation();
  }, []);

  console.log("Imprimiendo Hijo");

  return (
    <div style={styles}>
      <h3>Hijo del contador</h3>
      <p>{counter}</p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumber}</h3>
    </div>
  );
};

export default memo(ContadorHijo);

// Cuando se usan datos primitivos en las propiedades la memorizacion sigue funcionando
