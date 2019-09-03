import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from './pages/Landing'
import Homepage from './pages/Homepage'
import Account from './pages/Account'
import Search from './pages/Search'
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {Landing}/>
          <Route path = "/home" component = {Homepage}/> 
          <Route path = "/account" component = {Account}/>
          <Route path = "/search" component = {Search}/>    
          <div className="App">
            <div className="container">
              <h2>This is testing the page</h2>
              <h3>Resons  why Danie is awesome</h3>
              <ul>
                <li>Cooks well</li>
                <li>Cooks well</li>
                <li>Cooks well</li>
                <li>Cooks well</li>
                <li>Cooks well</li>
              </ul>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
