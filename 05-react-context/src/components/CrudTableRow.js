import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ element }) => {
  const { name, date, id } = element;
  const { deleteData, setDataToEdit } = useContext(CrudContext);
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>
        <button onClick={() => setDataToEdit(element)}>Update</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
