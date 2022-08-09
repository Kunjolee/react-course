import React, { useState } from "react";

const initialData = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) return alert("Llene todos sus datos");

    handleSearch(form);
    setForm(initialData);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artist:"
          name="artist"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Song:"
          name="song"
          value={form.song}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
