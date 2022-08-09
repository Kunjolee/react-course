import React, { useState, useEffect, useReducer } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";
import Loading from "./Loading";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import { TYPES } from "../actions/crudActions";

const CrudApi = () => {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "http://localhost:5000/GTA";
  const api = helpHttp();

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          // setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          // setDb(null);
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    const options = {
      body: data,
      headers: {
        "Content-type": "application/json",
      },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`;

    const options = {
      body: data,
      headers: {
        "Content-type": "application/json",
      },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.UPDATE_DATE, payload: data });
        setError(null);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(`Desea eliminar el id '${id}'`);

    if (isDelete) {
      const endpoint = `${url}/${id}`;

      const options = {
        headers: {
          "Content-type": "application/json",
        },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
          setError(null);
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <div>
      <h2>CRUD Api</h2>
      <article className="grid-1-2">
        <CrudForm
          create={createData}
          update={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loading />}
        {error && (
          <Message
            color={"#dc3545"}
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        {db && (
          <CrudTable
            db={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
