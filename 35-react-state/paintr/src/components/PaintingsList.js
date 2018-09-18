import React from "react";
import PaintingListItem from "./PaintingListItem";

const PaintingsList = props => (
  <div className="ui celled list">
    {props.paintings.map(painting => (
      <PaintingListItem
        selectPainting={props.selectPainting}
        painting={painting}
      />
    ))}
  </div>
);

export default PaintingsList;
