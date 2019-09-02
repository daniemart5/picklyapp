import React from 'react';
import Header from '../layout/Header';

class Landing extends React.Component {

    render() {
      return (
       <div className="App">
          <div className="container">
            <Header /> 
            <h2>Pickly</h2>
            <h3>What's your pick tonight?</h3>
            <ul>
              <li>Corgis</li>
              <li>Beagles</li>
              <li>Golden Retrivers</li>
              <li>Mutts</li>
              <li>You name it</li>
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Landing;
  