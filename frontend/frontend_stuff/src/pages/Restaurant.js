import React from 'react';
import Header from '../layout/Header';

class Restaurant extends React.Component {

    render() {
      return (
       <div className="App">
          <div className="container">
          <Header />
            <h2>This is the Restaurant page</h2>
            <h3>Name</h3>
            <p>
              location:
              type:
              rating:
              likes:
            </p>
           
          </div>
        </div>
      );
    }
  }
  
  export default Restaurant;