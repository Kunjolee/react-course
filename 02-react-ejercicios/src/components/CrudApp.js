import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "GTA 3",
    date: "2001",
  },
  {
    id: 2,
    name: "Vice City",
    date: "2002",
  },
  {
    id: 3,
    name: "San Andreas",
    date: "2004",
  },
  {
    id: 4,
    name: "GTA 4",
    date: "2008",
  },
  {
    id: 5,
    name: "GTA 5",
    date: "2013",
  },
];
const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    const newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(`Desea eliminar el id '${id}'`);
    if (isDelete) {
      const newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
  };
  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          create={createData}
          update={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          db={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};

export default CrudApp;
