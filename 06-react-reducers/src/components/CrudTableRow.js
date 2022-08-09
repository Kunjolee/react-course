import React from "react";

const CrudTableRow = ({ element, deleteData, setDataToEdit }) => {
  const { name, date, id } = element;
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
