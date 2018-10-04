import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = value => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    this.props.dispatch({ type: "INCREMENT", value });
  };

  decrement = value => {
    this.props.dispatch({ type: "DECREMENT", value });
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  // subtractFive = () => {
  //   store.dispatch({ type: "SUBTRACT_FIVE" });
  // };
  //
  // addThree = () => {
  //   store.dispatch({ type: "ADD_THREE" });
  // };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> + 3</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const ConnectedCounter = connect(mapStateToProps)(Counter);

// const UnconnectedCounter = Counter;

// export { UnconnectedCounter };

export default ConnectedCounter;
