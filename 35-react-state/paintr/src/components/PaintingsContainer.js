import React from "react";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPaintingId: null,
      paintings: paintingsData.paintings,
      editing: false
    };
  }

  selectPainting = id => {
    this.setState({ selectedPaintingId: id });
  };

  voteForPainting = id => {
    // make an exact copy
    // except for the things we are changing
    let updatePaintings = this.state.paintings.map(painting => {
      if (painting.id === id) {
        // update the votes
        let newPainting = {
          ...painting,
          votes: painting.votes + 1
        };
        return newPainting;
      } else {
        return painting;
      }
    });
    this.setState({ paintings: updatePaintings });
  };

  edit = () => {
    this.setState({ editing: true });
  };

  cancel = () => {
    this.setState({ editing: false });
  };

  render() {
    let selectedPainting = this.state.paintings.find(
      painting => painting.id === this.state.selectedPaintingId
    );
    let paintingToShow = this.state.editing ? (
      <PaintingForm cancel={this.cancel} painting={selectedPainting} />
    ) : (
      <PaintingDetail
        edit={this.edit}
        vote={this.voteForPainting}
        painting={selectedPainting}
      />
    );
    return (
      <div>
        {this.state.selectedPaintingId ? paintingToShow : null}
        <PaintingsList
          selectPainting={this.selectPainting}
          paintings={this.state.paintings}
        />
      </div>
    );
  }
}

export default PaintingsContainer;
