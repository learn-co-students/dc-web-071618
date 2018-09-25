import React from "react";

const MoreButton = ({ fourMore }) => {
  return <button onClick={e => fourMore()}>More sushi!</button>;
};

export default MoreButton;
