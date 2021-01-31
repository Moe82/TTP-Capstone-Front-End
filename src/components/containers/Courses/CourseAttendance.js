import React from 'react';
// import { connect } from 'react-redux';
// import StudentList from '../Students/StudentList';
class CourseAttendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "Mohamed Shafee": {
                    "11/5": "Present",
                    "11/6": "absent",
                    "11/7": "absent"
                },
                "Justin": {
                    "11/5": "present",
                    "11/6": "present",
                    "11/7": "absent"
                }

            }
        }
    }
    renderDates() {
        const dates = [];
        for (let name of Object.keys(this.state.data)) {
            for (let date in this.state.data[name]) {
                dates.push(date);
            }
            break;
        }
        let n = dates.length;
        return dates.map(date => {
            return (
                <th>{date}</th>
            )
        })
    }
    renderStudentList() {
        const studentName = [];
        for (let name in this.state.data) {
            studentName.push(name)
        }
        return studentName.map(student => {
            console.log(student);
            return (
                <tr>
                    <td>{student}</td>
                    {this.renderAttendance()}
                </tr>
            )
        })
    }
    renderAttendance() {
        const attendances = [];
        for (let name of Object.keys(this.state.data)) {
            for (const [key, value] of Object.entries(this.state.data[name])) {
                attendances.push(value);
            }
            console.log(attendances);
        return attendances.map(attendance => {
            return (
                <td>{attendance}</td>
            )
        })
        }
    }
    render() {
        return (
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Names</th>
                            {this.renderDates()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderStudentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseAttendance;