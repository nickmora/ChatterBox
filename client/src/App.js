import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './Pages/SignIn';
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {SignIn} />
          <Route exact path = "/signUp" component = {SignUp} />
          <Route exact path = "/home" component = {Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
