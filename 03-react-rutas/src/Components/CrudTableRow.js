import React from "react";
import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ element, deleteData, setDataToEdit }) => {
  const { name, date, id } = element;
  const navigate = useNavigate();

  const handleUpdate = () => {
    setDataToEdit(element);
    navigate(`update/${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
