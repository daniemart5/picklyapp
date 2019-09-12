import React from 'react';

class Restaurant extends React.Component {
  
  state = {
    restaurants: ""
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

  handleUnfav = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let rest_id = this.props.restaurant.id
    let fav = this.props.favorites[0]
    let fav_id = fav.id
    let fav_type = fav.favorite_type
    console.log(user.id, rest_id, fav_id, fav_type,'bob')
    if (fav_id === fav_id && fav_type === "Restaurant"){
        fetch ('http://localhost:3000/favorites/' + fav_id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            id: fav_id,
            favorite_type: "Restaurant"
            })
          })
          .then(res => res.json())
          .then(data => {
            this.setState({restaurant: data.restaurants})})
            
          }
  
  }

  render() {
    return (
     <div className="App">
        <div className="container">
          <img className="pictures" src={this.props.restaurant.website} alt="nice looking restaurant"/>
        <h2>{this.props.restaurant.name} | {this.props.restaurant.kind} </h2>
        <h3>City: {this.props.restaurant.location} | Rating: {this.props.restaurant.rating}</h3>
        <p>{this.props.restaurant.discription}</p>
        <button onClick={this.handleFav} className="form-submit">Favorite ❤️</button>
        <button onClick={this.handleUnfav} className="form-submit">Unfavorite ❤</button>
        </div>
    </div>
      );
    }
  }
  
  export default Restaurant;