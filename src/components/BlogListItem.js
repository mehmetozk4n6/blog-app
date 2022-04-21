import React from "react";
import { Link } from "react-router-dom";

function BlogListItem({ id, title }) {
  return (
    <>
      <li>
        {title} - <Link to={id}>Details</Link> -{" "}
        <Link to={`/edit/${id}`}>Edit</Link>
      </li>
    </>
  );
}

export default BlogListItem;
