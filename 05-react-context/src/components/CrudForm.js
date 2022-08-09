import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContext";

const initialData = {
  id: null,
  name: "",
  date: "",
};

const CrudForm = () => {
  const [form, setForm] = useState(initialData);

  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialData);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.date) {
      alert("LLene toda la informacion!");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = () => {
    setForm(initialData);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "UPDATEData" : "ADD"}</h3>
      <form onSubmit={handleSubmit} className="basicForm">
        <input
          type="text"
          placeholder="Name:"
          name="name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          placeholder="Date:"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clean" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
