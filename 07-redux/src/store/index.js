import { createStore } from "redux";
import reducer from "../reducers/";

const store = createStore(reducer);

//Evento Subscribe se ejecuta cada que el estado se actualiza
store.subscribe(() => console.log(store));

export default store;
