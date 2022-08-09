import React, { useState, useEffect } from "react";

const initialData = {
  id: null,
  name: "",
  date: "",
};

const CrudForm = ({ create, update, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialData);

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
      create(form);
    } else {
      update(form);
    }
    handleReset();
  };
  const handleReset = () => {
    setForm(initialData);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "UPDATE" : "ADD"}</h3>
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
