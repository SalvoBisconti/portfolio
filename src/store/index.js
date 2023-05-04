import { mainReducer } from "./reducer";
const redux = require("redux");
const createStore = redux.createStore;

export const initialState = { iconSelected: "Home" };
export const SET_SELECTED_ICON = "SELECTED_ICON";

export function selectIcon(pageName) {
  return { type: SET_SELECTED_ICON, payload: pageName };
}

export const store = createStore(mainReducer);
