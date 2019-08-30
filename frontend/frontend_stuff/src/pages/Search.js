import React from 'react';
import Header from '../layout/Header';


class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      user: [],
      restaurants: [],
      events: []
    }
  }
   
  // componentDidMount(){
  //   fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDpWxbtnSMQG3xqYTdSw9UEmnXC28aP4Lw').then(res => res.json()).then(json => console.log(json))
  // }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
          <h2>This is the Search page</h2>
          <h3>Pick what to do!</h3>
           
        </div>
      </div>
      );
    }
  }
  
  export default Search;