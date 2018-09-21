import React, { Component } from "react";

class StockTicker extends Component {
  constructor() {
    super();
    this.state = {
      stockPrice: 50
    };
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount = () => {
    this.stockInterval = setInterval(
      () => this.setState({ stockPrice: Math.random() * 100 }),
      500
    );
  };

  componentWillUnmount() {
    clearInterval(this.stockInterval);
    console.log("Unmounting", this.__proto__.constructor.name);
  }
  render() {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div>{this.state.stockPrice}</div>
        </div>
      </div>
    );
  }
}

export default StockTicker;
