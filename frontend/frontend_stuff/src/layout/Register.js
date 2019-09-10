import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class Register extends Component {
    
    state={ 
        name: '',
        username: '',
        bio: '',
        age: '',
        city: ''
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.username]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.city]: e.target.value, 
            [e.target.bio]: e.target.value
        });
    }
    
    handleSubmit=(e)=>{
        e.preventDefault() 
        const newUserData = {
            name: this.state.name,
            username: this.state.username,
            bio: this.state.bio,
            age: this.state.age,
            city: this.state.city
            }
            console.log(newUserData)
            this.handleCreateUser(newUserData)
        }
    

    handleCreateUser = () => {
        fetch ('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({            name: this.state.name,
            username: this.state.username,
            bio: this.state.bio,
            age: this.state.age,
            city: this.state.city})
        })
        .then(res => res.json())
        .then(data =>  {
            console.log(data)
            localStorage.setItem("user", JSON.stringify(data))
            this.props.history.push('/home')})
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
                    placeholder = "enter name"
                    value={this.state.name} />
                    
                    <h3>Enter Username</h3> 
                    <input 
                    onChange={this.handleChange}
                    className="form-item"
                    name = "username" 
                    type = "text" 
                    placeholder = "enter username"
                    value={this.state.username} />
                
                    <h3>Enter Age</h3>
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "age" 
                    type = "number" 
                    placeholder = "enter age"
                    value={this.state.age} />
                
                    <h3>Enter city</h3>
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "city" 
                    type = "text" 
                    placeholder = "enter city"
                    value={this.state.city} />

                    <h3>Enter bio</h3> 
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "bio" 
                    type = "text" 
                    placeholder = "enter bio"
                    value={this.state.bio
                    }/>
                    <br />
                    <br/>
                    <input 
                    className="form-submit" 
                    type="submit" 
                    value ="Create User"/>   
                </form>
            </div>
        </div>
        )
    }
}
export default withRouter(Register);
