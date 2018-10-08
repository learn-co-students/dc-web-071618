import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";

import { fetchPaintings } from "../redux/actions";

class PaintingsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPaintings();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            render={data => {
              return <PaintingForm paintingId={data.match.params.paintingId} />;
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

export default connect(
  null,
  { fetchPaintings }
)(PaintingsContainer);
