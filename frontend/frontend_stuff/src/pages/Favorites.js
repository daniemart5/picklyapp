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
            events: []
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
            return this.setState({restaurants: user.restaurants, events: user.events})}
            )
        }

        renderFav = (restaurants, events) => {
            console.log(restaurants, events, 'bob')
        }

    render() {
        
        return (
            
        <div className="App">
            <div className="container">
                <Header /> 
                <h1>Restaurants:</h1> {this.state.restaurants.map(restaurant => {
                    return <Restaurant restaurant={restaurant} />;}
                    )}
                <h1>Events:</h1> {this.state.events.map(event => {
                    return <Event event={event} />;}
                    )}
                <img className="pictures"  alt="nice looking restaurant"/>
                <hr/>
            </div>
        </div>
        )
    }
}
export default withRouter(Favorites);
