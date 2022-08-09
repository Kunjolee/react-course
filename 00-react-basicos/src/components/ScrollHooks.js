import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    /* Cuando se declara el segundo parametro que es un array y tiene como valor un estado, se comportara como la fase de actualizacion componentDidUpdate (Solo cuando el estado dentro del array cambie de valor se actualizara) */
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, [scrollY]);

  useEffect(() => {
    /* Cuando el segundo parametro que es un array no tiene valor, el useEffect se comportara como la fase de montaje: componentDidMount */
    /* console.log("Montaje"); */
  }, []);

  useEffect(() => {
    /* Cuando no se declara el segundo parametro, el useEffect se comportara como la fase de actualizacion: componentDidUpdate (Cada que se renderiza el documento se actualizara) */
    /* console.log("Actualizacion"); */
  });

  useEffect(() => {
    /* Cuando se retorna una funcion el useEffect se comportara como la fase de desmontaje (se usa para evitar aumento de memoria y recursos innecesarios, es decir limpiar mi efecto)*/

    return () => {
      /* console.log("Desmontaje"); */
    };
  });

  return (
    <div>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Distancia {scrollY}</p>
    </div>
  );
}
