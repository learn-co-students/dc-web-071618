import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
  console.log("hogList", hogs);
  return (
    <div className="indexWrapper">{hogs.map(hog => <HogTile hog={hog} />)}</div>
  );
};

export default HogList;
