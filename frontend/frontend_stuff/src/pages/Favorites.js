import React, { Component } from 'react'
import Header from '../layout/Header'; 
import {withRouter} from "react-router-dom";
import Restaurant from './Restaurant';
import Event from './Event';

class Favorites extends Component {

       constructor(props){
           super(props);
            this.state = {
            user: JSON.parse(localStorage.getItem("user")),  
            restaurants: [],
            events: [],
            favorites: []
        };
    }

    componentDidMount = () => {
        let userID = this.state.user.id

        fetch('http://localhost:3000/users/' + userID,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
          })
          .then(res => res.json())
          .then(user => {
            return this.setState({favorites: user.favorites, restaurants: user.restaurants, events: user.events
             })
          })
        }

    render() {
        return (    
        <div className="App">
            <div className="container">

                <Header /> 

                <h1>Restaurants:</h1> {this.state.restaurants.map((restaurant, index) => {
                    return <Restaurant favorites={this.state.favorites.map(favorite => favorite)} restaurant={restaurant} key={index}/>;}
                    )}
                <h1>Events:</h1> {this.state.events.map((event, index) => {
                    return <Event favorites={this.state.favorites.map(favorite => favorite)} event={event} key={index}/>;}
                    )}
                <hr/>
            </div>
        </div>
        )
    }
}
export default withRouter(Favorites);
