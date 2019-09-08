import React from 'react';
import Header from '../layout/Header';
import {withRouter} from "react-router-dom";


class Account extends React.Component {
    
    state = {
      user: JSON.parse(localStorage.getItem("user"))    
    };
  
    render() {
      return (
      <div className="App">
        <div className="container">
          <Header /> 
          <img className="pictures" src={this.state.user.image} alt="Catcus logo for pickly"/>
            <h1>Hello, {this.state.user.name}</h1>
            <p>Age: {this.state.user.age}</p>
            <h4>Username: {this.state.user.username}</h4>
          <div>
            <button className="form-submit">Edit Account Info</button>
            <button className="form-submit">Delete Account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Account);
