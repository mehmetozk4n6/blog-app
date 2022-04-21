import React from "react";

function BlogDetailsItem({ id, title, description }) {
  return (
    <div>
      <p>blog id : {id}</p>
      <p>blog title : {title}</p>
      <p>blog description : {description}</p>
    </div>
  );
}

export default BlogDetailsItem;
