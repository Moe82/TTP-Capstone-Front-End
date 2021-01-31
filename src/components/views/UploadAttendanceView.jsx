import React from 'react';
import { DatepickerView } from '../views'


const UploadAttendanceView = (props) => {
  return (
    <form style={{ textAlign: 'center' }} onSubmit={props.handleSubmit}>
      <label >Please select a single image to upload and the date that the attendance was taken:</label> <br />
      <input type="file" name="image" accept="image/pgn,image/jpeg" multiple onChange={props.handleChange}/>
      <DatepickerView  handleDate={props.handleDate}/>
    <button type = "submit">Upload Attendance!</button>
  </form>
  );
};


export default UploadAttendanceView;
