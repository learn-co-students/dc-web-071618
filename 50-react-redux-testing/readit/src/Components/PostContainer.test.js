import React from "react";
import { shallow } from "enzyme";

import Post from "./Post";
import { PostsContainer } from "./PostsContainer";
import App from "../App";

//test for rendering

describe("PostsContaier", () => {
  it("Renders correctly", () => {
    let wrapper = shallow(<PostsContainer />);
    expect(wrapper.find(".postsContainer").length).toEqual(1);
  });
  it("matches its snapshot when it receives posts as a prop", () => {
    let posts = [
      { data: { id: 1, title: "post1", author: "me" } },
      { data: { id: 2, title: "post2", author: "you" } },
      { data: { id: 3, title: "post3", author: "bob" } }
    ];
    let wrapper = shallow(<PostsContainer posts={posts} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("matches its snapshot when it receives no props", () => {
    let wrapper = shallow(<PostsContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
