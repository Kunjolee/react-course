import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import Contador from "./components/Contador";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ textAlign: "center" }}>
        <h1>REDUX</h1>
        <hr />
        <CrudApi />
        <hr />
        <ShoppingCart />
        <hr />
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
