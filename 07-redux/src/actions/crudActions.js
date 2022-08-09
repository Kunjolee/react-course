import {
  INSERT_CRUD,
  UPDATE_CRUD,
  DELETE_CRUD,
  READ_CRUD,
  NO_DATA,
} from "../type";

export const readData = (res) => ({ type: READ_CRUD, payload: res });
export const insertData = (data) => ({ type: INSERT_CRUD, payload: data });
export const editData = (data) => ({ type: UPDATE_CRUD, payload: data });
export const delData = (data) => ({ type: DELETE_CRUD, payload: data });
export const noData = () => ({ type: NO_DATA });
