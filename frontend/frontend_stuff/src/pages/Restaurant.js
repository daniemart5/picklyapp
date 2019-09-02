import React from 'react';
import Header from '../layout/Header';
import ResCard from '../layout/ResCard'

class Restaurant extends React.Component {

  state = {
  restaurants: "",
  }
  

  render() {
    return (
     <div className="App">
        <div className="container">
        <Header />
          <h2>This is the Restaurant page</h2>
            {restaurants.map(restaurant => <ResCard restaurant = {restaurant}/>)}
           
            {/* {allDogs.map(dog => <DogCard addDog = {this.addDog} user_name = {this.props.user_name} userID= {this.props.userID} key = {allDogs.indexOf(dog)} dog = {dog} />)} */}

        </div>
    </div>
      );
    }
  }
  
  export default Restaurant;