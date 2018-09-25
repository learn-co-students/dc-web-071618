import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from "./components/SushiWallet";

// Endpoint!
const API = "http://localhost:3001/sushis";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    bill: 0,
    balance: 100,
    displayPos: 0
  };

  fetchSushis = () => {
    fetch(API)
      .then(res => res.json())
      .then(json => this.setState({ sushis: json }));
  };

  componentDidMount() {
    this.fetchSushis();
  }

  displayFour = () => {
    return this.state.sushis.slice(
      this.state.displayPos,
      this.state.displayPos + 4
    );
  };

  displayFourMore = () => {
    this.setState({
      displayPos: this.state.displayPos + 4
    });
  };

  eat = sushi => {
    //set state to reflect when the sushi has beebn clicked
    const newBill = this.state.bill + sushi.price;
    if (this.state.balance > sushi.price && !this.state.eaten.includes(sushi)) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        bill: newBill,
        balance: this.state.balance - sushi.price
      });
    }
  };

  addSushiBucks = e => {
    e.preventDefault();
    let formVal = parseInt(e.target[0].value);
    this.setState({
      balance: this.state.balance + formVal
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displayFour()}
          fourMore={this.displayFourMore}
          eat={this.eat}
          eaten={this.state.eaten}
        />
        <SushiWallet
          balance={this.state.balance}
          addBucks={this.addSushiBucks}
        />
        <Table balance={this.state.balance} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
