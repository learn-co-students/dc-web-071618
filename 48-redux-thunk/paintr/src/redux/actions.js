// action creators
const URL = "http://localhost:3000/paintings";

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function paintingUpdated(painting) {
  return { type: "PAINTING_UPDATED", painting };
}

function increaseVotes(paintingId) {
  return function(dispatch, getState) {
    const votes = getState().paintings.find(
      painting => painting.id === paintingId
    ).votes;
    fetch(`${URL}/${paintingId}`, {
      method: "PATCH",
      body: JSON.stringify({
        votes: votes + 1
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(painting => dispatch(paintingUpdated(painting)));
  };
  // return { type: "INCREASE_VOTES", paintingId };
}

// we want this to update our painting on the backend
function updatePainting({ payload, paintingId }) {
  // async, so return a thunk action
  return function(dispatch, getState) {
    // console.log(args);
    // when we start saving, (before sending the fetch)
    // dispatch a 'saving' action
    // patch fetch to the server with the updated info
    // update our store with the response from the server
    const artist = getState().paintings.find(p => p.id === paintingId).artist;
    fetch(`${URL}/${paintingId}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: payload.title,
        artist: {
          ...artist,
          name: payload.name,
          birthday: payload.birthday,
          deathday: payload.deathday
        }
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(painting => dispatch(paintingUpdated(painting)));
  };

  // return {
  //   type: "UPDATE_PAINTING",
  //   payload,
  //   paintingId
  // };
}

function fetchedPaintings(paintings) {
  return { type: "FETCHED_PAINTINGS", paintings };
}

function loadingPaintings() {
  return { type: "FETCHING_PAINTINGS" };
}

function fetchPaintings() {
  return dispatch => {
    dispatch(loadingPaintings());
    fetch(URL)
      .then(res => res.json())
      .then(paintings => dispatch(fetchedPaintings(paintings)));
  };
}

export { changeSearchText, increaseVotes, updatePainting, fetchPaintings };
