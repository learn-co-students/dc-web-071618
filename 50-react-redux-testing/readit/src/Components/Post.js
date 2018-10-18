import React from "react";

const Post = ({ post }) => {
  return (
    <div className="postComponent">
      <a href={post.url}>
        <h3>{post.title}</h3>
      </a>
      <p> posted_by: {post.author}</p>
    </div>
  );
};

export default Post;
