import React from "react";
import { postsReducer } from "./reducers";

describe("postsReducer", () => {
  it("initializes state to empty array", () => {
    let action = { type: "@@INIT" };
    expect(postsReducer(undefined, action)).toEqual([]);
  });

  it("Loads data", () => {
    let posts = [{ title: "testpost 1" }, { title: "testpost2" }];
    let action = { type: "LOAD_DATA", payload: posts };
    expect(postsReducer(action.payload, action.type)).toEqual(posts);
  });
});
