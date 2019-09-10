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

  filteredEvents = (props) => {
    return this.state.events.filter(event => {
    return event.name.toLowerCase().includes(this.state.filteredEve.toLowerCase())
    })
  }

  filteredRestaurants = (props) => {
    return this.state.restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(this.state.filteredRes.toLowerCase())
    })
  }


  handleChange = (ev) => {
    ev.preventDefault()
    this.setState({filteredEve: ev.target.value})
  }
  

  render() {

    return (
      <div className="App">
        <div className="container">

          <Header />
          <input
          type="text"
          value={this.filteredEve}
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleChange}
          />


          <input
          type="text"
          value={this.filteredRes}
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleChange}
          />
          <div>{this.filteredRes().map(restaurant => {
          return <Restaurant restaurant ={restaurant} />})
          }
          </div>
            
          <div>{this.filteredEve().map(event => {
          return <Event event ={event} />})
          }
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default Search;
