import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import data from "./data/data";

import PostsContainer from "./Components/PostsContainer";

import "./App.css";

class App extends Component {
  componentDidMount() {
    return this.props.loadData
      ? this.props.loadData(data)
      : console.log("shallow, just 4 testing!");
  }

  render() {
    return (
      <div className="App">
        <h1>READIT</h1>
        <PostsContainer />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);

export { App };
