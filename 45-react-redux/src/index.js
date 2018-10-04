import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import Header from "./Header";
import Counter from "./Counter";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Counter />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
