import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class Login extends Component {

    state={ 
        username: ''
    }
    
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value });
    }
    
    handleSubmit=(e)=>{
        e.preventDefault() 
        this.handleLoginUser()

    }

    handleLoginUser = () => {
        fetch('http://localhost:3000/login', { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({            
            username: this.state.username
        })
        })
        .then(res => res.json())
        .then(user => {
          console.log(user)
          localStorage.setItem("user", JSON.stringify(user))
          this.setState({user})
          this.props.history.push('/home');
        })
        
      }


    render() {
        return (
        <div className="login">
            <div className="card">
            <form onSubmit={this.handleSubmit}>
                <h3>Enter Username</h3> 
                <input

                onChange={this.handleChange}
                className="form-item" 
                name = "username" 
                type = "text" 
                value ={this.state.username}
                placeholder = "enter username" />
                <br></br>
                <input 
                className="form-submit" 
                type="submit" 
                value ="Login"/>   
            </form>
            </div>
        </div>
        )
    }
}
export default withRouter(Login);
