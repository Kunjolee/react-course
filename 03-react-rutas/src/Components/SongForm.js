import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSave }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      setIsDisabled(true);
      return alert("Llene todos sus datos");
    }

    handleSearch(form);
    setIsDisabled(false);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del artista"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          value={form.song}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
        <input
          type="button"
          value="Agregar cancion"
          onClick={handleSave}
          disabled={isDisabled && "disabled"}
        />
      </form>
    </div>
  );
};

export default SongForm;
