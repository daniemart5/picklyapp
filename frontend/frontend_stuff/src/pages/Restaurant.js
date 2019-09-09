import React from 'react';

class Restaurant extends React.Component {
  
  likeButton = () => {
    let newLikes = this.props.restaurant.like + 1
    this.setState({
      likes: newLikes
    })
  }

  render() {
    
    return (
     <div className="App">
        <div className="container">
          <img className="pictures" src={this.props.restaurant.website} alt="nice looking restaurant"/>
        <h2>{this.props.restaurant.name} | {this.props.restaurant.kind} </h2>
        <h3>City: {this.props.restaurant.location}</h3> 
        <p>{this.props.restaurant.discription}</p>
        <p>Rating: {this.props.restaurant.rating} | Likes: {this.props.restaurant.like}</p>
       
        <button onClick={this.likeButton} className="form-submit">Like 🔥</button>
        <button className="form-submit">Favorite ❤️</button>
        </div>
    </div>
      );
    }
  }
  
  export default Restaurant;