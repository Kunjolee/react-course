import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";
import Loading from "./Loading";
import { helpHttp } from "../helpers/helpHttp";
import { useSelector, useDispatch } from "react-redux";
import {
  delData,
  editData,
  insertData,
  readData,
} from "../actions/crudActions";
import { NO_DATA } from "../type";

const CrudApi = () => {
  const state = useSelector((state) => state);
  const { db } = state.crud;
  const dispatch = useDispatch();

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
          dispatch(readData(res));
          setError(null);
        } else {
          dispatch({ type: NO_DATA });
          setError(res);
        }

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

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
        // setDb([...db, res]);
        dispatch(insertData(res));
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
        dispatch(editData(res));
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
          // setDb(newData);
          dispatch(delData(id));
          setError(null);
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <div style={{ textAlign: "left" }}>
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
        <CrudTable
          db={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};

export default CrudApi;
