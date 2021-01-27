import React, { Component } from 'react';
import StudentInfoView from '../views/StudentInfoView';

class StudentInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            lastName: '',
            firstName: ''
        }
    }
    handleID = (e) => {
        this.setState({id:e.target.value});
    }
    handleLastName = (e) => {
        this.setState({lastName:e.target.value});
    }
    handleFirstName = (e) => {
        this.setState({firstName:e.target.value});
    }
    render() {
        return (
            <div>
                <StudentInfoView handleFirstName = {this.handleFirstName} handleLastName = {this.handleLastName} handleID = {this.handleID}/>
            </div>
        )
    }
}
export default StudentInfoContainer;