import React, { Component } from 'react'
import Header from './Header'

class Edit extends Component {

    state = { 
        name: "",
        bio: "",
        age: "",
        city: "",
        image: ""
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.city]: e.target.value, 
            [e.target.bio]: e.target.value,
            [e.target.image]: e.target.value
        });
    }
    
    handleEditSubmit=(e)=>{
        e.preventDefault() 
        const userData = {
            name: this.state.name,
            bio: this.state.bio,
            age: this.state.age,
            city: this.state.city,
            image: this.state.image
            }
            console.log(userData)
            this.handleEditUser(userData)
        }
    

    handleEditUser = () => {
        let user = JSON.parse(localStorage.getItem("user"))
        let userID = user.id
        fetch ('http://localhost:3000/users/' + userID, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({           
            name: this.state.name,
            bio: this.state.bio,
            age: this.state.age,
            city: this.state.city,
            image: this.state.image
            })
        })
        .then(res => res.json())
        .then(data =>  {this.setState({userDate: data})
            this.props.history.push('/account')})
      }


    render() {
        return (
            <div>
            <Header />
               <form onSubmit={this.handleEditSubmit}>
                    <h3>Enter Name </h3>
                    <input 
                    onChange={this.handleChange}
                    className="form-item"
                    name = "name" 
                    type = "text" 
                    placeholder = "enter name"
                    value={this.state.name} />
                       
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

                    <h3>Enter photo link</h3> 
                    <input
                    onChange={this.handleChange}
                    className="form-item" 
                    name = "image" 
                    type = "text" 
                    placeholder = "enter image url"
                    value={this.state.image}/>
                    <br />
                    <br/>
                    <input 
                    className="form-submit" 
                    type="submit" 
                    value ="Edit User"/> 
                </form> 
            </div>
        )
    }
}
export default Edit; 