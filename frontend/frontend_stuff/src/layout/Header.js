import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1> Pickly </h1>
            <Link to='/landing'>Login Page</Link>
            | <Link to='/home'>Home</Link> 
            | <Link to='/account'>Account</Link>
            | <Link to='/search'>Search</Link>
            | <Link>Log Out</Link>
        </header>
    )
}

const headerStyle = {
    color: '#CCC7B9',
    textAlign: 'center',
    padding: '10px'
  
  }
export default Header;