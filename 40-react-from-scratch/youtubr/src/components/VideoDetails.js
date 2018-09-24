import React from "react";

const VideoDetails = props => {
  let { title, description, publishedAt, channelTitle } = props.video.snippet;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <em>{publishedAt}</em>
      <strong>{channelTitle}</strong>
    </div>
  );
};

export default VideoDetails;
