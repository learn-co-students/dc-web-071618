import React from "react";

class PaintingDetail extends React.PureComponent {
  render() {
    // this.props // { painting: {}, vote: () => , edit: () => }
    // destructuring assignment
    let { painting, vote, edit } = this.props;
    let {
      title,
      image,
      votes,
      id,
      artist: { name, birthday, deathday }
    } = painting;
    // let { name, birthday, deathday } = artist;
    return (
      <div>
        <img alt={title} src={image} />
        <h3>{title}</h3>
        <h4>
          {name} {birthday}-{deathday}
        </h4>
        <button onClick={edit} className="ui button">
          Edit
        </button>
        <button
          className="ui button"
          onClick={() => {
            vote(id);
          }}
        >
          Vote! {votes}
        </button>
      </div>
    );
  }
}

PaintingDetail.defaultProps = {
  edit: () => {},
  vote: () => {},
  painting: {
    artist: {}
  }
};

export default PaintingDetail;
