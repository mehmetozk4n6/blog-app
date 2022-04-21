import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => {
        return <BlogListItem key={blog.id} {...blog} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

// Higher Order Component  (HOC)
export default connect(mapStateToProps)(BlogList);
