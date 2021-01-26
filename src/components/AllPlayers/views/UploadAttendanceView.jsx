import React from 'react';


const UploadAttendanceView = (props) => {
  return (
    <form style={{ textAlign: 'center' }} onSubmit={props.handleSubmit}>
      <label style={{ display: 'block' }}>Choose files to upload</label>
      <input type="file" name="image" accept="image/pgn,image/jpeg" multiple onChange={props.handleChange}/>
    <button type = "submit">Upload the images</button>
  </form>
  );
};


export default UploadAttendanceView;
