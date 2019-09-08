import React from 'react';
import Login from '../layout/Login';
import Register from '../layout/Register';
import logo from '../layout/picklyLogo.jpg';

class Landing extends React.Component {

  constructor(props){
    super(props);
    this.state = {showLogin: true}
  }

  handleToggleClick = () =>{
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }))
  }

  render() {
      return (
      <div className="App">
        <img className="logo" src={logo} alt="Catcus logo for pickly"/>
        <div className="center">
          <div className="card">
          <div className={this.props.login ? "login" : "hide"}> 
            <h3>What's your pick tonight?</h3>
            <button className="form-submit" onClick={this.handleToggleClick}>Login</button>
            <button className="form-submit" onClick={this.handleToggleClick}>Register</button>
            {this.state.showLogin ? <Login user={this.props.user} handleLoginUser={this.props.handleLoginUser}/> : <Register handleCreateUser={this.props.handleCreateUser}/>}
          </div>
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default Landing;
  