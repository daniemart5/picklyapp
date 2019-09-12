import React from 'react';

class Event extends React.Component {

  state =  {
    events: ""
  }
 
  handleFav = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let userID = user.id
    fetch ('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  
        user_id: userID,          
        favorite_id: this.props.event.id,
        favorite_type: 'Event'})
      })
      .then(res => res.json())
      .then(data =>  {
        this.setState({events: data.events})})
    
  }

  handleUnfav = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let eve_id = this.props.event.id
    let fav = this.props.favorites[0]
    let fav_id = fav.id
    let fav_type = fav.favorite_type
    console.log(user.id, eve_id, fav_type, fav_id, 'bob')
    if (fav_id === fav_id && fav_type === "Event"){
        fetch ('http://localhost:3000/favorites/' + fav_id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            id: eve_id,
            favorite_type: "Event"
            })
          })
          .then(res => res.json())
          .then(data => {
            this.setState({event: data.events})})
    }
  }

    render() {
      return (
       <div className="App">
        <div className="container">
         <img className="pictures" src={this.props.event.website} alt="nice looking event"/>
        <h2>{this.props.event.name} | {this.props.event.kind}</h2>
        <h3>{this.props.event.location} | Rating: {this.props.event.rating}</h3>
        <p>{this.props.event.description}</p>
        <button onClick={this.handleFav} className="form-submit">Favorite ❤️</button>
        <button onClick={this.handleUnfav} className="form-submit">Unfavorite ❤</button>
        </div>
    </div>
      );
    }
  }
  
  export default Event;