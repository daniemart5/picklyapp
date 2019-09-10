import React from 'react';
import Header from '../layout/Header';
import {withRouter} from "react-router-dom";


class Homepage extends React.Component {
      
  state = {
    user: JSON.parse(localStorage.getItem("user"))    
  };
  
  render() {
      return (
        <div className="App">
            <div className="container">
            <Header />
            
            <h1>Hello, {this.state.user.name}! Welcome back :)</h1>  
            <h4> Recent Places:  </h4>
            <h4> Friends Favorite Places </h4>
            <h4> Upcoming Plans </h4>
          </div>
        </div>
      );
    }       
}
  
  
  export default withRouter(Homepage)
;
  