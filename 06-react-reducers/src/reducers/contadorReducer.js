import { TYPE } from "../actions/contadorActions";

export const contadorInitialState = {
  contador: 0,
};

export const contadorInit = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPE.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPE.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPE.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPE.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPE.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}
