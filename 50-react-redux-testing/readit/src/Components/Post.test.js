import React from "react";
import { shallow } from "enzyme";

import Post from "./Post";

let dummyPost = {
  title: "Im a dummy",
  author: "A real dummy",
  url: "www.google.com"
};

describe("Post", () => {
  it("matches its snapshot", () => {
    let wrapper = shallow(<Post post={dummyPost} />);
    expect(wrapper).toMatchSnapshot();
  });
});
