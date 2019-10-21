import React, { Component } from 'react'
import Header from '../layout/Header';
import profile  from '../layout/Profile.jpg'; 

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>About</h1>
                <span><img className='DANIE' src={profile}/></span>
                <h2>Danielle Martinoli</h2>

                <p>A software developer, living in the heart of the emerald city!</p>
            </div>
        )
    }
}

export default About; 