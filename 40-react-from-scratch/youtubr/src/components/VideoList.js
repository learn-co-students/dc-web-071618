import React from "react";
import VideoCard from "./VideoCard";

const mockVideos = [
  {
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
  },
  {
    kind: "youtube#searchResult",
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/g46pE2nZQXqOKdcoc1zsgNAptXI"',
    id: {
      kind: "youtube#video",
      videoId: "GMCvGapHk9A"
    },
    snippet: {
      publishedAt: "2018-09-01T15:00:02.000Z",
      channelId: "UCbHvtJxBXUzpB_iXfJLIvjA",
      title:
        "Best Of Cute Golden Retriever Puppies Compilation #92 - Funny Dogs 2018",
      description:
        "Can we hit 300 LIKES on this video? Please share it and SUBSCRIBE! LIFE IS BETTER WITH A GOLDEN RETRIEVER PUPPIES Thanks for watching!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/GMCvGapHk9A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/GMCvGapHk9A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/GMCvGapHk9A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      channelTitle: "Grumpy Dog",
      liveBroadcastContent: "none"
    }
  }
];
const VideoList = props => (
  <ul>{mockVideos.map(video => <VideoCard video={video} />)}</ul>
);

export default VideoList;
