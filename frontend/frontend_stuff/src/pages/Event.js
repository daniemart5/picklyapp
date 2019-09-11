import React from 'react';

class Event extends React.Component {

  state =  {
    events: "",
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
        favorite_id: this.props.event.id,
        favorite_type: 'Event'})
      })
      .then(res => res.json())
      .then(data =>  {this.setState({events: data.events})})
    
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
        </div>
    </div>
      );
    }
  }
  
  export default Event;