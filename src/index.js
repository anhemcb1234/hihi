import React from "react";
import ReactDOM from "react-dom/client";

import store from "./ulti/store";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Cart from "./page/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
