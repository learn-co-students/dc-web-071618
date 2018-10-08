import { combineReducers } from "redux";
import paintingsData from "../paintings.json";

// const initialState = {
//   paintings: paintingsData.paintings,
//   searchText: ""
// };

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

// voteForPainting = id => {
//     let updatePaintings = this.state.paintings.map(painting => {
//       if (painting.id === id) {
//         let newPainting = {
//           ...painting,
//           votes: painting.votes + 1
//         };
//         return newPainting;
//       } else {
//         return painting;
//       }
//     });
//     this.setState({ paintings: updatePaintings });
//   };
//
//   updatePaintingInfo = (paintingId, info) => {
//     let newPaintingsArray = this.state.paintings.map(painting => {
//       if (painting.id === paintingId) {
//         return {
//           ...painting,
//           title: info.title,
//           artist: {
//             name: info.name,
//             birthday: info.birthday,
//             deathday: info.deathday
//           }
//         };
//       } else {
//         return painting;
//       }
//     });
//
//     this.setState({ paintings: newPaintingsArray, editing: false });
//   };
//

const paintingsReducer = (state = paintingsData.paintings, action) => {
  switch (action.type) {
    case "INCREASE_VOTES":
      return state.map(painting => {
        if (painting.id === action.paintingId) {
          return {
            ...painting,
            votes: painting.votes + 1
          };
        } else {
          return painting;
        }
      });
    case "UPDATE_PAINTING":
      // return an updated array of paintings
      // with the selected painting updated to have the new title, artist's name, birthday, deathday
      // { type: "UPDATE_PAINTING", payload: { title, name, birthday, deathday }, paintingId }
      return state.map(painting => {
        if (painting.id === action.paintingId) {
          return {
            ...painting,
            title: action.payload.title,
            artist: {
              ...painting.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          };
        } else {
          return painting;
        }
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
});

export default rootReducer;
