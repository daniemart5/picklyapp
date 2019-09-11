import React from 'react';

class Restaurant extends React.Component {
  
  state = {
    restaurants: "",
    favorited: false
  }

  handleFav = () => {
    let user = JSON.parse(localStorage.getItem("user"))

    fetch ('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({            
        user_id: user.id,
        favorite_id: this.props.restaurant.id,
        favorite_type: 'Restaurant'})
      })
      .then(res => res.json())
      .then(data => {
        this.setState({restaurants: data.restaurants})})
     
  }

  deleteFav = () => {
    let user = JSON.parse(localStorage.getItem("user"))

    fetch ('http://localhost:3000/favorites', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({            
        user_id: user.id,
        favorite_id: this.props.restaurant.id,
        favorite_type: 'Restaurant'})
      })
      
     
  }

  render() {
    const label = this.state.favorited ? 'Favorite ' : 'Unfavorite'
    return (
     <div className="App">
        <div className="container">
          <img className="pictures" src={this.props.restaurant.website} alt="nice looking restaurant"/>
        <h2>{this.props.restaurant.name} | {this.props.restaurant.kind} </h2>
        <h3>City: {this.props.restaurant.location} | Rating: {this.props.restaurant.rating}</h3>
        <p>{this.props.restaurant.discription}</p>
        <button onClick={this.handleFav} className="form-submit">{label}</button>
        </div>
    </div>
      );
    }
  }
  
  export default Restaurant;