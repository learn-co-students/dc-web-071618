import React from "react";
import { Card } from "semantic-ui-react";

const VideoCard = props => {
  let { title, description, publishedAt, channelTitle } = props.video.snippet;
  return (
    <Card>
      <h5>{title}</h5>
      <p>{description}</p>
      <em>{publishedAt}</em>
      <strong>{channelTitle}</strong>
    </Card>
  );
};

export default VideoCard;
