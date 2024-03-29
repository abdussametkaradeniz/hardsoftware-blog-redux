import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ id, title, description }) => {
  return (
    <>
      <li key={id}>
        {title} - <Link to={`/blogs/${id}`}>Details</Link> -{" "}
        <Link to={`/edit/${id}`}>Edit</Link>
      </li>
    </>
  );
};

export default BlogListItem;
