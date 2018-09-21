import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogList from "./HogList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      greased: false,
      filterType: "name"
    };
  }

  setFilterType = type => {
    this.setState({
      filterType: type
    });
  };

  toggleGreased = () => {
    this.setState({
      greased: !this.state.greased
    });
  };

  filterGreased = hogs => {
    return hogs.filter(hog => {
      return hog.greased;
    });
  };

  sortAllHogs = hogs => {
    if (this.state.greased) {
      return this.filterGreased(hogs);
    } else if (this.state.filterType === "weight") {
      return hogs.sort(
        (a, b) =>
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] -
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
      );
    } else if (this.state.filterType === "name") {
      return hogs.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return hogs;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          setFilterType={this.setFilterType}
          toggleGreased={this.toggleGreased}
        />
        <HogList hogs={this.sortAllHogs(hogs)} />
      </div>
    );
  }
}

export default App;
