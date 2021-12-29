import { createStore } from "./create-store.js";
import { ActionType, updateStore } from "./reducer.js";

const initialState = {
  edit     : true,
  messages : [],
  results  : []
};

const store = createStore(updateStore, initialState);

export { store, ActionType }