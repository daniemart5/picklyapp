import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
        <div className="App">
            <div className="container">
            <img className="pictures" src={restaurant.website} alt="nice looking restaurant"/>
            <h2>{this.props.restaurant.name} | {restaurant.kind} </h2>
            <h3>City: {restaurant.location}</h3> 
            <p>{restaurant.discription}</p>
            <p>Rating: {restaurant.rating} | Likes: {restaurant.like}</p>
            </div>
        </div>
        )
    }
}
