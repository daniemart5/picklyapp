import React from 'react';

class Event extends React.Component {

  state =  {
    events: ""
  }
 
  handleEveFav = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    fetch ('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  
        user_id: user.id,          
        favorite_id: this.props.event.id,
        favorite_type: 'Event'})
      })
      .then(res => res.json())
      .then(data =>  {
        this.setState({events: data.events})})
    
  }

  handleEventUnfav = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let fav = this.props.favorites[0]
    let fav_id = fav.id
    let fav_type = fav.favorite_type

    console.log(user.id, fav_type, fav_id, 'bob')
    if (fav_type === "Event" && fav.id === fav_id){
        fetch ('http://localhost:3000/favorites/' + fav_id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            favorite_type: "Event",
            id: fav_id
          
            })
          })
          .then(res => res.json())
          .then(data => {
          this.setState({event: data.events})})     
    }
    this.refreshPage()
  }

  refreshPage = () => {
    window.open('http://localhost:3001/favorites', "_self")
  }

    render() {
      return (
       <div className="App">
        <div className="container">
         <img className="pictures" src={this.props.event.website} alt="nice looking event"/>
        <h2>{this.props.event.name} | {this.props.event.kind}</h2>
        <h3>{this.props.event.location} | Rating: {this.props.event.rating}</h3>
        <p>{this.props.event.description}</p>
        <button onClick={this.handleEveFav} className="form-submit">Favorite ❤️</button>
        <button onClick={this.handleEventUnfav} className="form-submit">Unfavorite ❤</button>
        </div>
    </div>
      );
    }
  }
  
  export default Event;