import React, { Component } from "react";

class HogTile extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  getHogImg = () => {
    let sluggedName = this.props.hog.name
      .split(" ")
      .join("_")
      .toLowerCase();

    let hogUrl = require(`../hog-imgs/${sluggedName}.jpg`);
    return hogUrl;
  };

  onHogClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    const hog = this.props.hog;
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    const medal = "highest medal achieved";
    return (
      <div className="pigTile">
        <img src={this.getHogImg()} />
        <h2>{hog.name}</h2>
        <button onClick={this.onHogClick}>
          {this.state.clicked ? "GET THIS HOG AWAY FROM ME" : "TELL ME MORE"}
        </button>
        {this.state.clicked ? (
          <div>
            <p>{hog.specialty}</p>
            <p>{hog[weight]} units of hog weight</p>
            <p>{hog[medal]}</p>{" "}
          </div>
        ) : null}
      </div>
    );
  }
}

export default HogTile;
