import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");

  const urlProvince = "https://apis.datos.gob.ar/georef/api/provincias?";
  const urlMunicipality = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${province}&campos=id,nombre&max=100`;

  return (
    <div>
      <h2>Selects Anidados</h2>
      <SelectList
        title="provincias"
        url={urlProvince}
        handleChange={(e) => {
          setProvince(e.target.value);
          setMunicipality("");
        }}
      />
      {province && (
        <SelectList
          title="municipios"
          url={urlMunicipality}
          handleChange={(e) => setMunicipality(e.target.value)}
        />
      )}
      <pre>
        <code>
          {province || "Provincia"} - {municipality || "Municipalidad"}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
