import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio") || 1);
  let end = parseInt(query.get("final") || LIMIT);

  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&final=${end + LIMIT}`);
  };

  const handlePrev = () => {
    navigate({ search: `inicio=${start - LIMIT}&final=${end - LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos de la pagina {start}-{end}
      </p>
      {start !== 1 && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Productos;
