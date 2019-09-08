import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class Login extends Component {

    state={ 
        username: '',
        password: ''
    }
    
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value });
    }
    
    handleSubmit=(e)=>{
        e.preventDefault() 
        const userData = {user: {
            username: this.state.username,
            password: this.state.password
            }
        }
        this.props.handleLoginUser(userData)
        this.props.history.push('/home');
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
                
                <h3>Enter Password</h3> 
                
                <input 
                onChange={this.handleChange}
                className="form-item"
                name = "password" 
                type = "password" 
                value={this.state.password}
                placeholder = "enter password"/>
                <br/>
                <br/>
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
