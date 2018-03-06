import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Container/Auth/index'
import { initAuth } from "./action/UserAction";
import Full from './Container/Full/index'
import { connect } from 'react-redux';
class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(initAuth())
  }
  render() {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
    console.log(token)
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/login" render={() => token ? <Redirect to="/home" /> : <Login />} />
          <Route exact path="*" component={() => token ? <Full /> : <Redirect to="/login" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App)
