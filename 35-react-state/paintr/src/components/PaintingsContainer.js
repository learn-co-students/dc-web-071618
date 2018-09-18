import React from "react";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPaintingId: null,
      paintings: paintingsData.paintings
    };
  }

  selectPainting = id => {
    this.setState({ selectedPaintingId: id });
  };

  render() {
    let selectedPainting = this.state.paintings.find(
      painting => painting.id === this.state.selectedPaintingId
    );
    return (
      <div>
        {this.state.selectedPaintingId ? (
          <PaintingDetail painting={selectedPainting} />
        ) : null}
        <PaintingsList
          selectPainting={this.selectPainting}
          paintings={this.state.paintings}
        />
      </div>
    );
  }
}

export default PaintingsContainer;
