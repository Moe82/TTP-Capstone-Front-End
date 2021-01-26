import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import Axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
          <form style={{ textAlign: 'center' }} action = "localhost:8080/api/students/attendance/" method = "POST">
            <label style={{ display: 'block' }}>Choose files to upload</label>
            <input type="file" name="image" accept="image/pgn,image/jpeg" multiple />
            <button type = "submit">Upload the images</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
