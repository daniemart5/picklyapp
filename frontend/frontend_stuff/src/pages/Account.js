import React from 'react';
import Header from '../layout/Header';


class Account extends React.Component {
  
    render() {
      return (
      <div className="App">
        <div className="container">
          <Header /> 
            <h1>My Account</h1>
            <h4>Name: </h4>
            <p>this name</p>
            <h4>Username: </h4>
            <p>this username</p>
          <div>
            <button>Edit Account Info</button>
            <button>Delete Account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
