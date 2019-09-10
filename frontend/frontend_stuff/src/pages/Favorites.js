import React, { Component } from 'react'
import Header from '../layout/Header'; 
import {withRouter} from "react-router-dom";


class Favorites extends Component {

    state = {
        user: JSON.parse(localStorage.getItem("user")),  
        restaurants: [],
        events: ""
      };

    componentDidMount = () => {
        let userID = this.state.user.id

        fetch('http://localhost:3000/users/' + userID,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
          })
          .then(res => res.json())
          .then(user => {this.setState({restaurants: user.restaurants, events: user.events})})
        }

    
    render() {
        return (
        <div className="App">
    
            <Header /> 

            <h2>HERE ARE YOUR FAVORITES</h2>
            <h1>BOB</h1>        
            <img className="pictures" alt="Catcus logo for pickly"/>
            <button className="form-submit">Unfavorite 🖤</button>
            <hr/>
        </div>
        )
    }
}
export default withRouter(Favorites);
