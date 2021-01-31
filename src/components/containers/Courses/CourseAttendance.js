import React from 'react';
import axios from 'axios';
import BACK_END from '../../../back-end-url'

class CourseAttendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:{}};
    }
    componentDidMount() {
      axios.get(`${BACK_END}/api/students/attendance/${this.props.match.params.id}`)
        .then(response => {
          console.log("DATA:", response)
          this.setState({
            data: response.data.data
          })
        })
        
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
                    {this.renderAttendance(student)}
                </tr>
            )
        })
    }
    renderAttendance(student) {
        const attendances = [];

        for (const [key, value] of Object.entries(this.state.data[student])) {
            attendances.push(value);
        }
        console.log(attendances);
        return attendances.map(attendance => {
            return (
                <td>{attendance}</td>
            )
        })

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