# Youtubr

Let's build out a youtube frontend with React!

1. Component Hierarchy

App
  Searchbar
    SearchInput
    SearchButton
? VideoContainer
    CurrentVideo
      VideoPlayer
        - how does this work?
        - display, controls
        (for today, we'll embed with an iframe)
      VideoDetails
      (Comments)
    VideoList
      VideoCard
? SearchResults
    VideoList
      VideoCard


2. Static Version

phew

3. State

search input
selected video
search results
recommended videos


User actions => app state
  - type into the search bar
    - update the search input
  - click the search button
    - update the search results
    - set selected video to null
  - click a video in the list
    - take away the search results
    - sets the selected video

state => what gets rendered
  - what shows the current video?
    - if there is a selected video, show the VideoContainer
  - what shows the search results?
    - if there is no selected video, show the SearchResults

4. Whitherto State?

find the parent in common of components that need to access / change some piece of state

search input - App
selected video - App
  recommended videos - Video Container
search results - App
  
App
  Searchbar
    SearchInput - search value (search results)
    SearchButton - search results, selected video
  VideoContainer
    CurrentVideo - video info
      VideoPlayer - video info
        - how does this work?
        - display, controls
        (for today, we'll embed with an iframe)
      VideoDetails - video info
      (Comments)
    VideoList - recommended
      VideoCard - video info, selected video
 SearchResults
    VideoList - []video info - search results
      VideoCard - video info, selected video

5. Build

Features:
- Start with blank search bar, with no videos
- Search as we type in the searchbar
  - But not every character
- See a list of search results
- All results => Video List
- Select Result => Video Detail
- See a list of recommended videos next to it
- When we click a video in the list, select that video (show it in the detail view)

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
