import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";
import Loading from "./Loading";
import { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);
  return (
    <div>
      <h2>CRUD Api</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loading />}
        {error && (
          <Message
            color={"#dc3545"}
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
