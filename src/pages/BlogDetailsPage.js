import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetailsItem from "../components/BlogDetailsItem";

const BlogDetailsPage = (props) => {
  return <BlogDetailsItem {...props.blog}></BlogDetailsItem>;
};

const MapStateToProps = (state, props) => {
  let { id } = useParams();
  return {
    blog: state.blog.find((blog) => {
      return blog.id === id;
    }),
  };
};

export default connect(MapStateToProps)(BlogDetailsPage);

/*

  burda props parametresi de lazım çünkü idye göre 
  filtreleme yapacağım

*/
