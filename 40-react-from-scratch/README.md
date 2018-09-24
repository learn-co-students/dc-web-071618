# Youtubr

Let's build out a youtube frontend with React!

1. Component Hierarchy
2. Static Version
3. State
4. Whitherto State?
5. Build

Features:
- Search as we type in the searchbar
  - But not every character
- Select Result => Video Detail
- All results => Video List
- When we click a video in the list, select that video (show it in the detail view)
- Dropdown menu

## Sample Api Response

```js
`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
```

Sample Response
```json
{
 "kind": "youtube#searchListResponse",
 "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/mo7IkLJmZN7tcX9jjGY0l3foTSM\"",
 "nextPageToken": "CAUQAA",
 "regionCode": "US",
 "pageInfo": {
  "totalResults": 1000000,
  "resultsPerPage": 5
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/AzYbaP5XJbbc7Pm33Yuy84eQwPE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "4sEV1lMn64k"
   },
   "snippet": {
    "publishedAt": "2018-01-01T07:33:18.000Z",
    "channelId": "UCZjpAMIiwyNv5GGzrOI2NRQ",
    "title": "Funny And Cute Husky Puppies Compilation #7",
    "description": "Funny And Cute Husky Puppies Compilation #7 ------------------------------------------------------------------------------------------------ ☆Don't forget to subscribe my channel ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/4sEV1lMn64k/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/4sEV1lMn64k/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/4sEV1lMn64k/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Puppies Lover",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/g46pE2nZQXqOKdcoc1zsgNAptXI\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "GMCvGapHk9A"
   },
   "snippet": {
    "publishedAt": "2018-09-01T15:00:02.000Z",
    "channelId": "UCbHvtJxBXUzpB_iXfJLIvjA",
    "title": "Best Of Cute Golden Retriever Puppies Compilation #92 - Funny Dogs 2018",
    "description": "Can we hit 300 LIKES on this video? Please share it and SUBSCRIBE! LIFE IS BETTER WITH A GOLDEN RETRIEVER PUPPIES Thanks for watching!",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/GMCvGapHk9A/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/GMCvGapHk9A/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/GMCvGapHk9A/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Grumpy Dog",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/kn8HkmUVEHZjIq7X17rppwrJy5M\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "eq7BLw_Z9Ic"
   },
   "snippet": {
    "publishedAt": "2018-09-14T13:00:06.000Z",
    "channelId": "UCZjpAMIiwyNv5GGzrOI2NRQ",
    "title": "Labrador Retriever Puppies Funny and Cute Videos Compilation #12",
    "description": "Labrador Retriever Puppies Funny and Cute Videos Compilation #12 ------------------------------------------------------------------------------------------------ ☆Don't forget to ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/eq7BLw_Z9Ic/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/eq7BLw_Z9Ic/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/eq7BLw_Z9Ic/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Puppies Lover",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/KrDGta3jfdOxytFmjrsJGHPF58M\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "QU5sNR16zc0"
   },
   "snippet": {
    "publishedAt": "2018-09-19T15:00:04.000Z",
    "channelId": "UCbHvtJxBXUzpB_iXfJLIvjA",
    "title": "Best Of Cute Labrador Puppies #59 - Funny Puppy Videos 2018",
    "description": "Can we hit 300 LIKES on this video? Please share it and SUBSCRIBE! LIFE IS BETTER WITH A LABRADOR RETRIEVER PUPPIES ♥ ♥ ♥ Dog from thumbnail ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/QU5sNR16zc0/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/QU5sNR16zc0/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/QU5sNR16zc0/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Grumpy Dog",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ep76OXcvz2QyExHRQc4aoQciI7s\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "mRf3-JkwqfU"
   },
   "snippet": {
    "publishedAt": "2016-08-31T17:34:50.000Z",
    "channelId": "UCCLFxVP-PFDk7yZj208aAgg",
    "title": "Funny Puppies And Cute Puppy Videos Compilation 2016 [BEST OF]",
    "description": "Check out these cute puppies in this compilation of funny puppy videos. Puppies are the cutest. Pug puppies, bulldog puppies, labrador puppies, and more, they ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/mRf3-JkwqfU/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "MashupZone",
    "liveBroadcastContent": "none"
   }
  }
 ]
}
```
