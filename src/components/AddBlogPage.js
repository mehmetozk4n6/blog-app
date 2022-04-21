import React from "react";
import { addBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddBlogPage({ dispatch }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>AddBlogPage</h1>
      <BlogForm
        onSubmi={(blog) => {
          dispatch(addBlog(blog));
          navigate("/blogs");
        }}
      />
    </div>
  );
}

export default connect()(AddBlogPage);
