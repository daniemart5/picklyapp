import React, { Component } from 'react'
import Header from '../layout/Header';
import profile  from '../layout/Profile.jpg'; 

class About extends Component {
    render() {
        return (
            <div className="about">
                <Header/>
                <h1>About</h1>
                <span><img className='DANIE' src={profile}/></span>
                <h2>Danielle Martinoli</h2>

                <p>A software developer, living in the heart of the emerald city!</p>

                <p><a href="https://github.com/daniemart5/">Github</a></p>
                <p><a href="https://www.linkedin.com/in/daniemartinoli/">LinkedIn</a></p>
            </div>
        )
    }
}

export default About; 