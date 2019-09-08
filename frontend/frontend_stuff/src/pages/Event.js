import React from 'react';

class Event extends React.Component {

    render() {
      return (
       <div className="App">
        <div className="container">
         <img className="pictures" src={this.props.event.website} alt="nice looking event"/>
        <h2>{this.props.event.name} | {this.props.event.kind}</h2>
        <h3>{this.props.event.location}</h3>
        <p>{this.props.event.description}</p>
        <p>Rating: {this.props.event.rating} | Likes: {this.props.event.like}</p>
        </div>
    </div>
      );
    }
  }
  
  export default Event;