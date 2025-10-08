import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // dynamic route parameter
  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This page dynamically renders content for blog post ID {id}.</p>
    </div>
  );
}

export default BlogPost;