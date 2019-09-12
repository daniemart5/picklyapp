import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';
import Account from './pages/Account';
import Search from './pages/Search';
import Login from './layout/Login';
import Favorites from './pages/Favorites';
import Register from './layout/Register';

import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: {
      name: "",
      username: "",
      city: "",
      bio: "",
      age: "",
      favorites: ""
      },
      search: ""
      
    }
  }

  updateSearch = (ev) => {
    this.setState({search: ev.target.value.substr(0, 20)});
  }

   
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact render={props => 
            <Landing {...props} user={this.state.user} handleLoginUser={this.handleLoginUser} handleCreateUser={this.handleCreateUser} />
          }/>
          <Route path = "/home" component = {Homepage}/> 
          <Route path = "/favorites" component = {Favorites}/>
          <Route path = "/account" component = {Account}/>
          <Route path = "/search" render={props =>
            <Search {...props} updateSearch={this.updateSearch} search={this.state.search}/>
           }/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/register" component = {Register}/>    
          <div className="App">
            <div className="container">
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
