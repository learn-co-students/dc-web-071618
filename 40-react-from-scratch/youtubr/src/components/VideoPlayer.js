import React from "react";

const VideoPlayer = props => (
  <div>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </div>
);

export default VideoPlayer;
