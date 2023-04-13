import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";

const EditBlogPage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>edit page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          console.log(blog);
          console.log("bu props parametresi", props);

          props.dispatch(editBlog(props.blog.id, blog));
          navigate("/blogs");
        }}
      ></BlogForm>
    </div>
  );
};

const MapStateToProps = (state, props) => {
  let { id } = useParams();
  return {
    blog: state.blog.find((b) => {
      return b.id === id;
    }),
  };
};

export default connect(MapStateToProps)(EditBlogPage);
