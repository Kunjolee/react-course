/* Cuando NO se agrega ninguna dependencia en el segundo parametro del useEfect "[]" cuando se retorna una function: actuara como un componentWillUnmount (como el ejemplo del useEffect en el Reloj component)*/

/* Cuandoi SI se agrega una dependencia en el segundo parametro del useEffect "[myState]" y se retorna una funcion: esa function que se retorna tambien se ejecutara cuando ese estado se actualize */

import React, { useState, useEffect } from "react";

function Reloj() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("La hora cambio");
  }, [hour]);

  useEffect(() => {
    let timer = null;

    console.log("montando");

    timer = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
      console.log("Interval");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Desmontando");
    };
  }, []);

  return <h3>{hour}</h3>;
}
export default function RelojHooks() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </div>
  );
}
