import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update");
  }
  render() {
    console.log(this.__proto__.constructor.name, "render");
    return (
      <div className="app-children">
        <h2>Parent</h2>
        <Child />
      </div>
    );
  }
}

export default Parent;
