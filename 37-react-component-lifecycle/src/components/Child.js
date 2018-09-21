import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount() {
    setInterval(() => this.setState({ count: 0 }), 1000);
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update");
  }

  render() {
    console.log(this.__proto__.constructor.name, "render");
    return <div className="app-children">Child</div>;
  }
}

export default Child;
