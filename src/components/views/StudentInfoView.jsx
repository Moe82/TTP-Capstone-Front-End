import React from 'react';

const StudentInfoView = (props) => {
    return (
        <div>
            <form style={{ textAlign: 'center' }}>
                <div>
                    <label>Student Id:</label>
                    <input onChange = {props.handleID} type="number" />
                </div>
                <div>
                    <label>Student First Name: </label>
                    <input onChange={props.handleFirstName} type="text" />
                </div>
                <div>
                    <label>Student Last Name: </label>
                    <input onChange={props.handleLastName} type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StudentInfoView;