import React from 'react';
import Header from '../layout/Header';

class Landing extends React.Component {

    render() {
      return (
      <div className="App">
        <div className="container">
            <Header /> 
            <h3>What's your pick tonight?</h3>

          <form>
            <h3>Enter Name </h3>
            <input name = "name" type = "text" placeholder = "enter name" />
            <h3>Enter Username</h3> 
            <input name = "username" type = "text" placeholder = "enter username" />
        
            <h3>Enter Age</h3>
            <input name = "age" type = "number" placeholder = "enter age" />
          
            <h3>Enter city</h3>
            <input name = "age" type = "number" placeholder = "enter age" />

            <h3>Enter Password</h3> 
            <input name = "password" type = "password" placeholder = "enter password"/>
         
            <h3>Re-enter Password </h3>
            <input type="button" value ="Create User"/>   
          </form>
        </div>
      </div>
      );
    }
  }
  
  export default Landing;
  