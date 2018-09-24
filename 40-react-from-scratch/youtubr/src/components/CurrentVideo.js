import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDetails from "./VideoDetails";

const mockVideo = {
  kind: "youtube#searchResult",
  etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/AzYbaP5XJbbc7Pm33Yuy84eQwPE"',
  id: {
    kind: "youtube#video",
    videoId: "4sEV1lMn64k"
  },
  snippet: {
    publishedAt: "2018-01-01T07:33:18.000Z",
    channelId: "UCZjpAMIiwyNv5GGzrOI2NRQ",
    title: "Funny And Cute Husky Puppies Compilation #7",
    description:
      "Funny And Cute Husky Puppies Compilation #7 ------------------------------------------------------------------------------------------------ ☆Don't forget to subscribe my channel ...",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/4sEV1lMn64k/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/4sEV1lMn64k/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/4sEV1lMn64k/hqdefault.jpg",
        width: 480,
        height: 360
      }
    },
    channelTitle: "Puppies Lover",
    liveBroadcastContent: "none"
  }
};

const CurrentVideo = props => (
  <div>
    <VideoPlayer video={mockVideo} />
    <VideoDetails video={mockVideo} />
  </div>
);

export default CurrentVideo;
