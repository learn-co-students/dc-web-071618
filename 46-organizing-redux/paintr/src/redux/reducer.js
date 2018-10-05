import { combineReducers } from "redux";
import paintingsData from "../paintings.json";

const initialState = {
  paintings: paintingsData.paintings,
  searchText: ""
};

const searchTextReducer = (state = "", action) => {
  console.log("searchTextReducer", state, action);
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

const paintingsReducer = (state = paintingsData.paintings, action) => {
  return state;
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_SEARCH_TEXT":
//       return { ...state, searchText: action.value };
//     default:
//       return state;
//   }
// };

// const rootReducer = (state, action) => {
//   return {
//     searchText: searchTextReducer(state.searchText, action),
//     paintings: paintingsReducer(state.paintings, action)
//   };
// };

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
});

export default rootReducer;
