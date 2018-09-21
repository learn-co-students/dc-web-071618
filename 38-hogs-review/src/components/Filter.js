import React from "react";

const Filter = ({ setFilterType, toggleGreased }) => {
  return (
    <div>
      <label>Choose Sort Type</label>
      <select onChange={e => setFilterType(e.target.value)}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <span>Show greased only? </span>
      <input type="checkbox" onClick={toggleGreased} />
    </div>
  );
};

export default Filter;
