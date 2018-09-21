import React, { Component } from "react";

class DigitalClock extends Component {
  constructor() {
    super();
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
  }
  componentWillUnmount() {
    console.log("Unmounting", this.__proto__.constructor.name);
  }

  render() {
    return (
      <div className="app-children">
        <h2 id="digital">11:00 AM</h2>
      </div>
    );
  }
}

export default DigitalClock;
