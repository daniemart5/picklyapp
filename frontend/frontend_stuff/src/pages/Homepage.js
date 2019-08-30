import React from 'react';
import Header from '../layout/Header';


class Homepage extends React.Component {
    
    constructor(){
      super();
      this.state = {
        user: []
      }
    }

    render() {
      return (
        <div className="App">
          <div className="container">
          <Header />
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
  