import React, { Component } from "react";
import Parent from "./Parent";

class Grandparent extends Component {
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
        <h1>Grandparent</h1>
        <Parent />
      </div>
    );
  }
}

export default Grandparent;
