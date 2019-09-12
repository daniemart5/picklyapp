import React from 'react';
import Header from '../layout/Header';
import Restaurant from './Restaurant';
import Event from './Event';

class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      restaurants: [],
      events: [],
      filteredRes: "",
      filteredEve: ""
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

  handleChange = (ev) => {
    ev.preventDefault()
    this.setState({filteredRes: ev.target.value, filteredEve: ev.target.value})
  }
  
  filteredRestaurants = (props) => {
     return this.state.restaurants.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(this.state.filteredRes.toLowerCase())
    })
  }

  filteredEvents = (props) => {
    return this.state.events.filter(event => {
     return event.name.toLowerCase().includes(this.state.filteredEve.toLowerCase())
   })
 }

  render() {

    return (
      <div className="App">
        <div className="container">

          <Header />
          <input
          type="text"
          placeholder={"Search for food or fun!"}
          onChange={this.handleChange}
          value={this.filteredEve, this.filteredRes}
          />        

          {this.filteredRestaurants().map((restaurant, index) => {
            return <Restaurant restaurant={restaurant} key={index}/>; 
            })
          }
        
          {this.filteredEvents().map((event, index) => {
            return <Event event={event} key={index} />;
              })
          }
          
        </div>
      </div>
      );
    }
  }
  
  export default Search;
