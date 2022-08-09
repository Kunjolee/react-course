import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";
import Loading from "./Loading";
import { helpHttp } from "../helpers/helpHttp";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";

const CrudApi = () => {
  const [db, setDb] = useState(null);
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
          setDb(res);
          setError(null);
        } else {
          setDb(null);
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
        setDb([...db, res]);
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
        const newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
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
          const newData = db.filter((el) => el.id !== id);
          setDb(newData);
          setError(null);
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <div>
      <Router basename="crud">
        <header>
          <h2>CRUD API con rutas</h2>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"save"}>Save</Link>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              (loading && <Loading />,
              error && (
                <Message
                  color={"#dc3545"}
                  msg={`Error ${error.status}: ${error.statusText}`}
                />
              ),
              db && (
                <CrudTable
                  db={db}
                  deleteData={deleteData}
                  setDataToEdit={setDataToEdit}
                />
              ))
            }
          />
          <Route
            path="save"
            element={
              <CrudForm
                create={createData}
                update={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route
            path="update/:id"
            element={
              <CrudForm
                create={createData}
                update={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default CrudApi;
