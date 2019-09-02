import React from 'react';
import Header from '../layout/Header';
import Restaurant from './Restaurant';


class Homepage extends React.Component {
    "http://localhost:3000/events";
   
    constructor(){
      super();
      this.state = {
        restaurants: [],
        events: []
      }
    }

    componentDidMount = () => {
      fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(data => {
        return this.setState({restaurants})}
        )
    }

    render() {
      return (
        <div className="App">
          <div className="container">
          <Header />
          <Restaurant restaurants={this.state.restaurants} /> 
            <h2>Hello Danie!</h2>
            <h2>[ :D ] </h2>
            <h3>I am  a person who does things</h3>
            <p>
              This is the bio section for a person to describe who they are and what kind of taco is their fav.
            </p>
          </div>
        </div>
      );
    }
  }
  
  export default Homepage
;
  