import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    console.log("header is getting props", this.props);
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

// goal: pass the count from the store into the Header
// nice: count was a prop to Header

// withRouter
// pass in a component
// get back a new component
// new component is same as the old one, but passes in the Route props (match, location, history) to the old component

// render() {
//    this.props.match // this.props.history // this.props.location
// }

// ConnectedNavbar = withRouter(Navbar)

// Higher Order Component
// Exercise: write a function 'withBlue' that takes in a component, returns a component that also gets in a color: 'blue' prop

// function withBlue(ComponentToWrap) {
//   class WrappedComponent extends React.Component {
//     render() {
//       return <ComponentToWrap color="blue" {...this.props} />;
//     }
//   }
//
//   return WrappedComponent;
// }

// const BlueNavbar = withBlue(Navbar);
// const ConnectedNavbar = withRouter(Navbar);
// App
// somewhere in render
// <BlueNavbar title="Paintr" />;

// const BlueHeader = withBlue(Header);

// const withCount = (ComponentToWrap) => {
//   return WrappedComponent // have the count from the store
// }

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// const withCount = connect(mapStateToProps);

// const ConnectedHeader = withCount(Header);

export default connect(mapStateToProps)(Header);
