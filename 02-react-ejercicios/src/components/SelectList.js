import React from "react";
import Message from "./Message";
import Loading from "./Loading";

import { useFetch } from "../hooks/useFetch";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  let capitalTitle = title.charAt(0).toUpperCase() + title.slice(1);

  if (error) {
    return (
      <Message
        msg={`"${capitalTitle}" Error ${error.status}: ${error.statusText}`}
        color="red"
      />
    );
  }

  if (!data) return null;

  let options = data[title];
  let selectName = `select-${title}`;

  return (
    <>
      <label htmlFor={title}>{capitalTitle}</label>
      {loading && <Loading />}
      <select name={selectName} id={title} onChange={handleChange}>
        <option value="">---</option>
        {options.map((el) => {
          const { id, nombre } = el;

          return (
            <option key={id} value={nombre}>
              {nombre}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectList;
