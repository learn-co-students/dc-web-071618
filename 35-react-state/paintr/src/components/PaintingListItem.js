import React from "react";

const PaintingListItem = props => (
  <div className="item" onClick={() => props.selectPainting(props.painting.id)}>
    <strong>{props.painting.title}</strong> ·
    <em>{props.painting.date}</em>
  </div>
);

export default PaintingListItem;
