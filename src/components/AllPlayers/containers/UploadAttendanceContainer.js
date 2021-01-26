import React, { Component } from 'react';
import axios from "axios";
import { UploadAttendanceView } from '../views'

class UploadAttendanceContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
  }

  handleChange = (event) => { this.setState({ file: event.target.files[0] }) }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(); 
    formData.append(this.state.file, this.state.file.name); 
    console.log("HERE", this.state.file);
    axios.post('http://localhost:8080/api/students/attendance', formData)
  }
  
  render() {
    return (
      <div>
        <UploadAttendanceView handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
  )}
}


export default UploadAttendanceContainer;
