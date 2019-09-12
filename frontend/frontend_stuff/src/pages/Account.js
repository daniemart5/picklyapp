import React from 'react';
import Header from '../layout/Header';
import {withRouter} from "react-router-dom";

class Account extends React.Component {
    
    state = {
      user: JSON.parse(localStorage.getItem("user"))    
    };

    handleEdit = () => {
      this.props.history.push("/edit");
    }

    handleDelete = () => {
      let userID = this.state.user.id
      console.log(userID)
      fetch ('http://localhost:3000/users/' + userID, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            id: userID,
            })
          })
          .then(res => res.json())
          .then(data => {
            this.setState({event: data.events})
            localStorage.clear()
            this.props.history.push("/");})
      this.refreshPage()
    }

    refreshPage = () => {
      window.open('http://localhost:3001/', "_self")
    }

    render() {
      console.log(this.state.user)
      return (
      <div className="App">
        <div className="container">
          <Header /> 
          <img className="pictures" src={this.state.user.image} alt="Catcus logo for pickly"/>
            <h1>Hello, {this.state.user.name}</h1>
            <p>Age: {this.state.user.age}</p>
            <h4>Username: {this.state.user.username}</h4>
          <div>
            <button onClick={this.handleEdit} className="form-submit">Edit Account Info</button>
            <button onClick={this.handleDelete} className="form-submit">Delete Account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Account);
