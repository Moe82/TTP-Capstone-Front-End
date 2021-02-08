import React, { Component } from 'react';
import axios from "axios";
import { AttendanceUploadView } from '../views'
import BACK_END from '../../back-end-url'
import { Link } from 'react-router-dom';

class UploadAttendanceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesInBase64: [],
      error: false,
      success: false, 
      loading: false
    }
  }
  
  _handleReaderLoaded = (readerEvt) => {
    let binaryStr = readerEvt.target.result;
    let imagesInBase64 = [...this.state.imagesInBase64]
    imagesInBase64.push(btoa(binaryStr))
    this.setState({ imagesInBase64: imagesInBase64 })
  }

  handleChange = (event) => { 
    for (let file of event.target.files){
      if (file) {
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded
        reader.readAsBinaryString(file);
      }
    }
   }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ loading: true})    
    // const formData = new FormData();
    // formData.append(this.state.file.name, this.state.file);
    axios.post(`${BACK_END}/api/students/attendance`, {
      imagesInBase64: this.state.imagesInBase64,
      id: this.props.match.params.id,
    }).then(res => { 
      this.setState({ 
        success:true,
        loading: false
      })
    }).catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <AttendanceUploadView handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <br /> <br /> <br />
        {this.state.loading &&
        <div >
          Loading... 
        </div>
        }
        {this.state.success &&
          <div >
            Attendance sheet(s) has been uploaded! <br />
            <Link onClick={ () => { this.props.history.push(`/course/${this.props.match.params.id}/attendance`) }}> Click here </Link> to view the attendance sheet for this course.
          </div>
        } 
      </div>
    )
  }
}

export default UploadAttendanceContainer;