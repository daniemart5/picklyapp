import React from 'react';
import { Link } from 'react-router-dom';
import logo from './picklyLogo.jpg';



function Header(){
    return (
        <header className="headerStyle">
            <span><img className="logo" src={logo} alt="Catcus logo for pickly"/> <h1> * PICKLY *</h1> </span>
            <br></br>
            <Link to='/home'>Home</Link>
            | <Link to='/search'>Search </Link>
            | <Link to='/favorites'>Favorites </Link> 
            | <Link to='/account'>Account </Link>
            | <Link to='/'> </Link>
        </header>
    )
}

export default Header;