import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StateProvider from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { CartProvider } from "react-use-cart";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
