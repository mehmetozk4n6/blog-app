import React from "react";
import { useParams } from "react-router-dom";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editBlog, removeBlog } from "../actions/blogs";

function EditBlogPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = props.blogs.find((blog1) => blog1.id === id);
  return (
    <div>
      <h1>Edit Page</h1>
      <BlogForm
        blog={blog}
        onSubmi={(blog4) => {
          props.dispatch(editBlog(blog.id, blog4));
          navigate("/blogs");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBlog({ id: blog.id }));
          navigate("/blogs");
        }}
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps)(EditBlogPage);
