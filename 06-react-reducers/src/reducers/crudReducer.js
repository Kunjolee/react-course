import { TYPES } from "../actions/crudActions";

export const crudInitialState = {
  db: null,
};

export const crudReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CREATE_DATA:
      return {
        ...state,
        db: [...state.db, action.payload],
      };

    case TYPES.READ_ALL_DATA:
      return {
        ...state,
        db: action.payload,
      };

    case TYPES.UPDATE_DATE:
      return {
        ...state,
        db: state.db.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case TYPES.DELETE_DATA:
      return {
        ...state,
        db: state.db.filter((el) => el.id !== action.payload),
      };
    case TYPES.NO_DATA:
      return crudInitialState;

    default:
      return state;
  }
};
