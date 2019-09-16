import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // I'm pretty sure this is what allows the rest of my application to have access to the store.
// That's why i wrap the whole app component inside of this one so that when i pass the store to the provider then everything else will
// have the prop
import { createStore } from "redux"; // This is what allows me to use the react library to create my store with the two methods
// get state and dispatch
import shoppingListItemReducer from "./reducers/shoppingListItemReducer"; // This is my reduce, that, when called will change the state according
// to what action was specified
import App from "./App";
import "./index.css";
// I set the invocation of createStore = to a variable
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// This is what will allow me to use the chrome extension.

ReactDOM.render(
  // This way my application will have access to the store...which also contains methods inside the store that can change the store itself
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
