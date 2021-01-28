import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/routes/RoutesContainer';
import { NavbarView } from '../components/views'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarView />
          <RoutesContainer />
      </div>
    );
  }
}
export default App;
