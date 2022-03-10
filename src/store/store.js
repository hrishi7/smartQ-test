import { createStore, applyMiddleware, compose } from "redux";
import root from "../reducers/index";
import thunk from "redux-thunk";
import { encryptData, decryptData } from "./util";

function saveToLocalStorage(state) {
  try {
    const serializedState = encryptData(JSON.stringify(state));
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = decryptData(localStorage.getItem("state"));
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const store = createStore(
  root,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
