import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // grab post ID from the URL

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamic blog post page. You can display post content here.</p>
    </div>
  );
};

export default BlogPost;