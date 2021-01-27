import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/routes/RoutesContainer';
import { TeacherLoginContainer } from '../components/containers'
class App extends Component {
  render() {
    return (
      <div className="app">
          <RoutesContainer />
      </div>
    );
  }
}
export default App;