import { combineReducers } from "redux";
import { LOAD_DATA } from "../actions/types";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
export { postsReducer };
