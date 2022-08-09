import { createContext } from "react";
import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
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

  const data = {
    db,
    dataToEdit,
    setDataToEdit,
    loading,
    error,
    createData,
    updateData,
    deleteData,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
