import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import BlogList from "./BlogList";

function BlogListPage() {
  const { id } = useParams();
  return !id ? (
    <div>
      <h1>
        <Link to=".">BlogListPage</Link>
      </h1>
      <BlogList />
    </div>
  ) : (
    <Outlet />
  );
}

export default BlogListPage;
