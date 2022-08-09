import React from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import FormContact from "./components/FormContact";
import Modals from "./components/Modals";
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

const App = () => {
  return (
    <div>
      <h1>React Exercises</h1>
      <Modals />
      <hr />
      <FormContact />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </div>
  );
};

export default App;
