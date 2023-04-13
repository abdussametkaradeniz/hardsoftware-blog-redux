import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

const BlogList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.blogs.map((blogs) => {
        return <BlogListItem {...blogs}></BlogListItem>;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blog,
  };
};

export default connect(mapStateToProps)(BlogList);

/*

    burada mapstatetoprops yardımıyla blogs isimli değişkene
    bizim state ile gelen blogları attık
    daha sonra connect ile fonksiyonu bağlayıp
    hangi component ile ilişkilendirdiğimizi yazdık

*/
