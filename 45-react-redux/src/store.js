import { createStore } from "redux";
import reducer from "./reducer";

/* how to update over time */
// 1. What is the shape of our state?
// { count: number, friends: []string, inputText: string, currentUser: { name: string, age: number } }
// 2. initial values
// 3. how the values change

// 1. shape { count: number }
// 2. initial values { count: 0 }
// 3. changes over time (how does it respond to different actions?):
//    increment action => count should go up by 1
//    decrement action => down by 1

const store = createStore(reducer /* other options */);

export default store;
