/* 
  Cuando se trabaja con class components se usa createRef() 
  con hooks se usa useRef
  Son para dar ordenes imperativas a los nodos del DOM, en vez de usar querySelector() o getElementById() se usa una referencia. 
  Es decir a un elemento JSX se agrega el atributo ref={AquiVaMiUseRef} asi le decimos a react que la referencia que tendra ese useRef sera ese atributo JSX  y devolvera un objeto con el atributo current, que tendra el nodo del DOM del JSX que se agrego el ref  
*/

import React, { useRef } from "react";

export default function Referencias() {
  let refBtn = useRef();

  let refMenu = useRef();

  const handleOpenMenu = (e) => {
    if (refBtn.current.textContent === "Abrir") {
      refBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refBtn.current.textContent = "Abrir";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <div>
      <h2>Referencias</h2>
      <button ref={refBtn} onClick={handleOpenMenu}>
        Abrir
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#a">Section 1</a>
        <br />
        <a href="#b">Section 2</a>
        <br />
        <a href="#c">Section 3</a>
        <br />
        <a href="#d">Section 4</a>
      </nav>
    </div>
  );
}
