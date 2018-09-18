import React from "react";

class PaintingDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: ""
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Votes - Currently: {this.state.count}
        </button>
        <input
          value={this.state.value}
          onChange={e =>
            this.setState({
              value: e.target.value,
              count: this.state.count * 2
            })
          }
        />
      </div>
    );
  }
}

export default PaintingDetail;
