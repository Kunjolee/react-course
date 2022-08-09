import React from "react";
import ConceptosBasicos from "./Components/ConceptosBasicos";
import CrudApi from "./Components/CrudApi";
import SongSearch from "./Components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/docs/en/v6"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      {/* <SongSearch /> */}
      <hr />
      {/* <CrudApi /> */}
      <ConceptosBasicos />
    </div>
  );
}

export default App;
