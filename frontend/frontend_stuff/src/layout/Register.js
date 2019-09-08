import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class Register extends Component {
    
    state={ 
        name: '',
        username: '',
        password: '',
        age: '',
        city: ''
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.username]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.city]: e.target.value, 
        });
    }
    
    handleSubmit=(e)=>{
        e.preventDefault() 
        const newUserData = {user: {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            city: this.state.city
            }
        }
        this.props.handleCreateUser(newUserData)
        this.props.history.push('/home');
    }
    
    render() {
        return (
        <div className="register">
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter Name </h3>
                    <input 
                    onChange={this.handleChange}
                    className="form-item"
                    name = "name" 
                    type = "text" 
                    placeholder = "enter name" />
                    
                    <h3>Enter Username</h3> 
                    <input 
                    onChange={this.handleChange}
                    className="form-item"
                    name = "username" 
                    type = "text" 
                    placeholder = "enter username" />
                
                    <h3>Enter Age</h3>
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "age" 
                    type = "number" 
                    placeholder = "enter age" />
                
                    <h3>Enter city</h3>
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "city" 
                    type = "text" 
                    placeholder = "enter city" />

                    <h3>Enter Password</h3> 
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "password" 
                    type = "password" 
                    placeholder = "enter password"/>
                
                    <h3>Re-enter Password </h3>
                    <input 
                    onChange={this.handleChange}
                    className="form-item"
                    name = "password" 
                    type = "password" 
                    placeholder = "re-enter password"/>
                    <br />
                    <br/>
                    <input 
                    className="form-submit" 
                    type="button" 
                    value ="Create User"/>   
                </form>
            </div>
        </div>
        )
    }
}
export default withRouter(Register);
