import React, { Component } from 'react';
import './App.css';
import NetlogAdmin from './NetlogAdmin';
import Netlog from './Netlog';
import { Switch, Route }from 'react-router-dom';

const PNF= () => <h1>Page not found.</h1>

class App extends Component {
  render() {
    return (
      
              <Switch >
              <Route  exact path="/" component={Netlog} />
              <Route path="/admin" component={NetlogAdmin} />
              <Route  component = {PNF} />
             </Switch>

    );
  }
}

export default App;
