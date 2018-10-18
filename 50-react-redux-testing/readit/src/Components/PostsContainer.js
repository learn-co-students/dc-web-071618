import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const PostsContainer = ({ posts }) => {
  ///EXPECT TO MATCH SNAPSHOT
  return (
    <div className="postsContainer">
      {posts ? posts.map(p => <Post post={p.data} key={p.data.id} />) : null}
      <p>hello</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostsContainer);
export { PostsContainer };
