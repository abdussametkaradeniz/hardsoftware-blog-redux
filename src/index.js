import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../src/routers/AppRouter";
import "./App.css";
import { addBlog } from "./actions/blogs";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";

const store = configureStore;
store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({
    title: "deneme - 1",
    description: "deneme 1 aciklama",
    dateAdded: Date.now(),
  })
);

const blog2 = store.dispatch(
  addBlog({
    title: "deneme - 2",
    description: "deneme2 aciklama",
    dateAdded: Date.now(),
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore}>
    <RouterProvider router={AppRouter}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
