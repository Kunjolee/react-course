import {
  DELETE_CRUD,
  INSERT_CRUD,
  NO_DATA,
  READ_CRUD,
  UPDATE_CRUD,
} from "../type";

const initialState = {
  db: [],
};
const crudReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case READ_CRUD:
      return {
        ...state,
        db: actions.payload,
      };

    case INSERT_CRUD:
      return {
        ...state,
        db: [...state.db, actions.payload],
      };

    case UPDATE_CRUD:
      const newData = state.db.map((el) =>
        el.id === actions.payload.id ? actions.payload : el
      );
      return {
        ...state,
        db: newData,
      };

    case DELETE_CRUD:
      const dataToDelete = state.db.filter((el) => el.id !== actions.payload);
      return {
        ...state,
        db: dataToDelete,
      };

    case NO_DATA:
      return initialState;
    default:
      return state;
  }
};

export default crudReducer;
