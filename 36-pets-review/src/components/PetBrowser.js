import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.petProps.map(pet => <Pet key={pet.id} petProp={pet} />)}
      </div>
    );
  }
}

export default PetBrowser;
