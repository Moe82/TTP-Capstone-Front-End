import React, { Component } from 'react';
import axios from "axios";
import { UploadAttendanceView } from '../views'
import BACK_END from '../../back-end-url'

class UploadAttendanceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      selectDate: new Date(),
      error: false,
      success: false
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
    if (this.state.file.name == null) {
      (this.setState({error: true}))
      return
    }
    event.preventDefault()
    const formData = new FormData();
    formData.append(this.state.file.name, this.state.file);
    console.log("File:", this.state.file);
    console.log("Binary String:", this.state.base64TextString);
    axios.post(`${BACK_END}/api/students/attendance`, {
      imgToBase64: this.state.base64TextString,
      id: this.props.match.params.id,
      date: this.state.selectDate.toDateString().substring(3).trim()
    }).then(res => { console.log(this.state.selectDate); this.setState({success:true})}).catch((error) => console.error(error));
    }
    
   
  handleDate = (date) =>{
    this.setState({
      selectDate: date
    })
  }

  render() {
    return (
      
      <div>
        {console.log(this.state.success)}
        <UploadAttendanceView handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleDate={this.handleDate}/>
        <br /><br/><br />
        {this.state.success &&
          <div >
            Attendance sheet has been uploaded! <br />
            Please check the date to make sure it's correct and reupload the file if you need to change it. 
          </div>
        } 
      </div>
    )
  }
}

export default UploadAttendanceContainer;