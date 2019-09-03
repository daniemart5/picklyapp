import React from 'react';
import Header from '../layout/Header';
const API = "http://localhost:3000/users/";

class Homepage extends React.Component {

  state = {
    render: true,
    name: "",
    username: "",
    userID: undefined
  };

  componentDidMount = () => {
  
    fetch(`${API}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.name,
          username: json.username
        });
      });
  };
  
  render() {
      return (
        <div className="App">
            <div className="container">
            <Header /> 
            <h1>Hello, insert name! Welcome back :)</h1>  
            <h4> Recent Places: </h4>
            <h4> Friends Favorite Places </h4>
            <h4> Upcoming Plans </h4>
          </div>
        </div>
      );
    }       
}
  
  
  export default Homepage
;
  