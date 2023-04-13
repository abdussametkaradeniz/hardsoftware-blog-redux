import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";

export const AddBlogPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1>blog ekle</h1>
      <BlogForm
        onSubmit={(blog) => {
          dispatch(addBlog(blog));
          navigate("/blogs");
        }}
      ></BlogForm>
    </div>
  );
};

export default connect()(AddBlogPage);
