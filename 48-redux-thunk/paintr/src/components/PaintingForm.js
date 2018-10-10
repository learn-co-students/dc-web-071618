import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updatePainting } from "../redux/actions";

class PaintingForm extends React.Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    if (props.painting && props.painting.id !== state.id) {
      return {
        id: props.painting.id,
        title: props.painting.title,
        name: props.painting.artist.name,
        birthday: props.painting.artist.birthday,
        deathday: props.painting.artist.deathday
      };
    }
    return null;
  }

  onSave = e => {
    e.preventDefault();
    let payload = {
      title: this.state.title,
      name: this.state.name,
      birthday: this.state.birthday,
      deathday: this.state.deathday
    };
    this.props.updatePaintingInfo({
      paintingId: this.props.painting.id,
      payload
    });
    this.props.history.push("/paintings/" + this.props.painting.id);
  };

  render() {
    if (!this.props.painting) {
      return (
        <div>
          Loading your painting...<div>(Thank you for your patience)</div>
        </div>
      );
    }
    return (
      <div className="ui centered card">
        <div>
          <img
            alt={this.props.painting.title}
            src={this.props.painting.image}
          />
        </div>
        <form className="ui form" onSubmit={this.onSave}>
          <input
            className="ui field"
            name="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            className="ui field"
            name="artists-name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            className="ui field"
            name="birthday"
            value={this.state.birthday}
            onChange={e => this.setState({ birthday: e.target.value })}
          />
          <input
            className="ui field"
            name="deathday"
            value={this.state.deathday}
            onChange={e => this.setState({ deathday: e.target.value })}
          />
          <Link to={`/paintings/${this.props.painting.id}`}>
            <button className="ui button" type="button">
              Cancel
            </button>
          </Link>
          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, propsFromParent) => {
  return {
    painting: state.paintings.find(p => p.id === propsFromParent.paintingId)
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     updatePaintingInfo: ({ paintingId, title, name, birthday, deathday }) =>
//       dispatch(updatePainting({ paintingId, title, name, birthday, deathday }))
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ updatePaintingInfo: updatePainting }, dispatch);
// };

export default connect(
  mapStateToProps,
  { updatePaintingInfo: updatePainting }
)(withRouter(PaintingForm));
