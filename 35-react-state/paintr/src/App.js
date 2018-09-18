import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color="teal"
          title="Paintr"
          icon="paint brush"
          description="All ur paintings"
        />
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
