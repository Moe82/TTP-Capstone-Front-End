import React, { Component } from 'react';
import axios from "axios";
import { UploadAttendanceView } from '../views'
class UploadAttendanceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
  }
  _handleReaderLoaded = (readerEvt)=>{
    let binaryStr = readerEvt.target.result;
    this.setState({base64TextString:btoa(binaryStr)})
  }
  handleChange = (event) => { 
    let file = event.target.files[0]
    if(file){
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this)
      reader.readAsBinaryString(file);
    }
    this.setState({ file: event.target.files[0] })
   }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    console.log(typeof this.state.file)
    formData.append(this.state.file.name, this.state.file);
    console.log("File:", this.state.file);
    console.log("Binary String:", this.state.base64TextString);
    axios.post('http://localhost:8096/api/students/attendance', {
      imgToBase64: this.state.base64TextString
    })
      .then(res => { console.log(res) }).catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <UploadAttendanceView handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    )
  }
}


export default UploadAttendanceContainer;
