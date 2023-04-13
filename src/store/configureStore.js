import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../reducers/blogs";

export default configureStore({
  reducer: {
    blog: blogReducer,
  },
});
