import React from 'react';
import Header from '../layout/Header';
import {withRouter} from "react-router-dom";


class Homepage extends React.Component {
      
  state = {
    user: JSON.parse(localStorage.getItem("user")),
    userData: {
      favorites: [],
      restaurants: [],
      events: []
    }
  };

  componentDidMount = () => {
    let userID = this.state.user.id
    fetch('http://localhost:3000/users/' + userID)
    .then(res => res.json())
    .then(user => {
      return this.setState({userData: {favorites: user.favorites, restaurants: user.restaurants, events: user.events}})
      });
    } 

    render() {
        
      return (    
      
      <div className="App">
          <div className="container">

              <Header /> 
              <hr/>
          </div>
      </div>
      )
    }   
}       
export default withRouter(Homepage);
  