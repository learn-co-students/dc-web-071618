import * as actions from ".";
import * as types from "./types";

describe("Actions index", () => {
  it("should create an action to load data", () => {
    const post = { title: "Im a post" };
    const expectedAction = {
      type: "LOAD_DATA",
      payload: post
    };
    expect(actions.loadData(post)).toEqual(expectedAction);
  });
});
