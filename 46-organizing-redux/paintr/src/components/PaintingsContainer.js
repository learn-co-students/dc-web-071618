import React from "react";
import { Route, Switch } from "react-router-dom";

import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";

class PaintingsContainer extends React.Component {
  voteForPainting = id => {
    let updatePaintings = this.state.paintings.map(painting => {
      if (painting.id === id) {
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

  updatePaintingInfo = (paintingId, info) => {
    let newPaintingsArray = this.state.paintings.map(painting => {
      if (painting.id === paintingId) {
        return {
          ...painting,
          title: info.title,
          artist: {
            name: info.name,
            birthday: info.birthday,
            deathday: info.deathday
          }
        };
      } else {
        return painting;
      }
    });

    this.setState({ paintings: newPaintingsArray, editing: false });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            render={data => {
              return (
                <PaintingForm
                  paintingId={data.match.params.paintingId}
                  updatePaintingInfo={this.updatePaintingInfo}
                />
              );
            }}
          />
          <Route
            path="/paintings/:paintingId"
            render={data => {
              return (
                <PaintingDetail paintingId={data.match.params.paintingId} />
              );
            }}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar />
                <PaintingsList />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
