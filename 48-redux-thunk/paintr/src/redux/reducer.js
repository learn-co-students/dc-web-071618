import { combineReducers } from "redux";
// import paintingsData from "../paintings.json";

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case "PAINTING_UPDATED":
      return state.map(painting => {
        if (painting.id === action.painting.id) {
          return action.painting;
        } else {
          return painting;
        }
      });
    case "FETCHED_PAINTINGS":
      return action.paintings;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCHING_PAINTINGS":
      return true;
    case "FETCHED_PAINTINGS":
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer,
  loading: loadingReducer
});

export default rootReducer;
