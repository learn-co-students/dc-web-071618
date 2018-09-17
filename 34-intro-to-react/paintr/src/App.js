import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingDetail from "./components/PaintingDetail";

const mockPainting = {
  name: "Portrait of a Carthusian",
  artist: {
    name: "Petrus Christus",
    birth: "1410",
    death: "1475"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color="teal"
          title="Paintr"
          icon="paint brush"
          description="All ur paintings"
          link="google.com"
        >
          <span>Inside of navbar</span>
        </Navbar>
        <PaintingDetail painting={mockPainting}>
          <div>
            I am a child of PaintingDetail
            <div>grandchild</div>
          </div>
        </PaintingDetail>
      </div>
    );
  }
}

export default App;
