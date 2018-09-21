import React, { Component } from "react";
import StockTicker from "./StockTicker";
import DigitalClock from "./DigitalClock";

class WidgetSelector extends Component {
  constructor() {
    super();
    this.state = {
      clicked: "stocks"
    };
  }

  render() {
    return (
      <div className="app-children">
        <button onClick={() => this.setState({ clicked: "stocks" })}>
          stocks
        </button>
        <button onClick={() => this.setState({ clicked: "clocks" })}>
          clocks
        </button>
        {this.state.clicked === "stocks" ? <StockTicker /> : <DigitalClock />}
      </div>
    );
  }
}

export default WidgetSelector;
