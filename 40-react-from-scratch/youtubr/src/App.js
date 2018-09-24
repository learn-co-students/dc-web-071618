import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Searchbar from "./components/Searchbar";
import SearchResults from "./components/SearchResults";
import VideoContainer from "./components/VideoContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <VideoContainer />
        <SearchResults />
      </div>
    );
  }
}

export default App;
