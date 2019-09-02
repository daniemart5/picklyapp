import React from 'react';
import Header from '../layout/Header';

class Account extends React.Component {

    render() {
      return (
       <div className="App">
          <div className="container">
          <Header />
            <h2>This is the profile Account page</h2>
            <h3>I love dogs</h3>
            <ul>
              <li>Change yo name</li>
              <li>Change yo pic</li>
              <li>Change yo bio</li>
              <li>Change yo life</li>
              <li>Change yo </li>
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Account;