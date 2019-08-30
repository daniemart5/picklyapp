import React from 'react';
import Header from '../layout/Header';

class Search extends React.Component {

    render() {
      return (
       <div className="App">
          <div className="container">
          <Header />
            <h2>This is the Search page</h2>
            <h3>Pick what to do!</h3>
           
          </div>
        </div>
      );
    }
  }
  
  export default Search;