import React, { Component } from 'react'
import Header from '../layout/Header'; 
import {withRouter} from "react-router-dom";

const picture = 'https://picsum.photos/id/724/5472/3648'

class Favorites extends Component {
    
    state = {
        user: JSON.parse(localStorage.getItem("user"))    
      };
    
    render() {
        return (
        <div className="App">
    
            <Header /> 
            
            <h2>HERE ARE YOUR FAVORITES</h2>
            <img className="pictures" src={picture} alt="Catcus logo for pickly"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mi maximus nulla ullamcorper tincidunt ac blandit odio. Suspendisse cursus sodales nisl, facilisis commodo risus fermentum et. Proin luctus vulputate nibh ac cursus. Proin ac dolor sed tortor consectetur accumsan. Suspendisse ac massa justo. Mauris elementum nibh dui, molestie hendrerit neque maximus ut. Duis iaculis ipsum et tempor semper. Sed nibh diam, mattis vitae fringilla at, lobortis a ligula. Fusce urna odio, egestas a viverra vel, consequat sed tellus. Ut laoreet ullamcorper risus eget vulputate. Phasellus ultrices dictum nisi non rutrum.</p>
            <button className="form-submit">Unfavorite 🖤</button>
            <hr/>
            
            <img className="pictures" src={picture} alt="Catcus logo for pickly"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mi maximus nulla ullamcorper tincidunt ac blandit odio. Suspendisse cursus sodales nisl, facilisis commodo risus fermentum et. Proin luctus vulputate nibh ac cursus. Proin ac dolor sed tortor consectetur accumsan. Suspendisse ac massa justo. Mauris elementum nibh dui, molestie hendrerit neque maximus ut. Duis iaculis ipsum et tempor semper. Sed nibh diam, mattis vitae fringilla at, lobortis a ligula. Fusce urna odio, egestas a viverra vel, consequat sed tellus. Ut laoreet ullamcorper risus eget vulputate. Phasellus ultrices dictum nisi non rutrum.</p> 
            <button className="form-submit">Unfavorite 🖤</button>
            <hr/>
            
            <img className="pictures" src={picture} alt="Catcus logo for pickly"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mi maximus nulla ullamcorper tincidunt ac blandit odio. Suspendisse cursus sodales nisl, facilisis commodo risus fermentum et. Proin luctus vulputate nibh ac cursus. Proin ac dolor sed tortor consectetur accumsan. Suspendisse ac massa justo. Mauris elementum nibh dui, molestie hendrerit neque maximus ut. Duis iaculis ipsum et tempor semper. Sed nibh diam, mattis vitae fringilla at, lobortis a ligula. Fusce urna odio, egestas a viverra vel, consequat sed tellus. Ut laoreet ullamcorper risus eget vulputate. Phasellus ultrices dictum nisi non rutrum.</p>
            <button className="form-submit">Unfavorite 🖤</button>
            <hr/>
        </div>
        )
    }
}
export default withRouter(Favorites);
