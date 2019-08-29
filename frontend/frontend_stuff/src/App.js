import React, {Component} from "react";
import Home from "./Containers/Home"; 
import Landingpage from "./Containers/Landingpage";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Pickly</h2>
          <p>This is the app</p>
        </header>
        <div>
          <p>
            This app will change your, life maaaaaan
          </p>
        </div>
      </div>
    );
  }
}

export default App;
