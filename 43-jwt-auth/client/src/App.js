import React, { Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Profile from "./components/profile";
import LoginForm from "./components/loginForm";
import Nav from "./components/nav";
import NotFound from "./components/notFound";
import "./App.css";

class App extends React.Component {
  state = {
    userInfo: null
  };

  updateUserInfo = userInfo => this.setState({ userInfo });

  componentDidMount() {
    const url = "http://localhost:3000/api/v1/profile";
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(response => {
          this.updateUserInfo(response.user);
          this.props.history.push("/profile");
        });
    }
  }

  logout = () => {
    localStorage.clear();
    this.setState({ userInfo: null });
  };

  render() {
    return (
      <Fragment>
        <Nav loggedIn={!!this.state.userInfo} logout={this.logout} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route
            exact
            path="/profile"
            render={() =>
              this.state.userInfo ? (
                <Profile {...this.state.userInfo} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            exact
            path="/login"
            render={() => <LoginForm updateUserInfo={this.updateUserInfo} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
