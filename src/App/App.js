import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import Navbar from '../components/AllPlayers/views/Navbar'

class App extends Component {
  render() {
    return (
      <div className="app">
        
          <Navbar />
          <RoutesContainer />
        
      </div>
    );
  }
}

export default App;
