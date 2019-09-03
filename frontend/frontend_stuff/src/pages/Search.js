import React from 'react';
import Header from '../layout/Header';
import Restaurant from './Restaurant';
import Event from './Event';


class Search extends React.Component {

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
    .then(restaurants => {
      return this.setState({restaurants: restaurants})}
      )


    fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then(events => {
      return this.setState({events: events})}
      )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <div>{this.state.restaurants.map(restaurant => {
        return <Restaurant restaurant ={restaurant} />})
        }</div>
           
        <div>{this.state.events.map(event => {
        return <Event event ={event} />})
        }</div>

        </div>
      </div>
      );
    }
  }
  
  export default Search;