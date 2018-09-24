import React from "react";
import CurrentVideo from "./CurrentVideo";
import VideoList from "./VideoList";

const VideoContainer = props => (
  <div>
    <CurrentVideo />
    <VideoList />
  </div>
);

export default VideoContainer;
