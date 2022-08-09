import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db } = useContext(CrudContext);
  return (
    <div>
      <h3>Grand Thef Auto</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => <CrudTableRow element={el} key={el.id} />)
          ) : (
            <tr>
              <td colSpan={3}>There is no data </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
