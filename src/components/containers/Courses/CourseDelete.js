import { forEachRight } from 'lodash';
import React from 'react';
import ModalView from "../../views/ModelView";
import { fetchCourse, deleteCourse } from '../../../redux/student/courseReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class CourseDelete extends React.Component {
    
    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => {
                  this.props.deleteCourse(this.props.match.params.id)
                  this.props.history.push("/course")
                }} className="ui button negative">Delete</button>
                <Link onClick={() => this.props.history.push("/course")}  className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }
    renderContent() {
        console.log(this.props.course)
        if (!this.props.course) {
            return 'Are you sure you want to delete this course?';
        }
        return `Are you sure you want to delete this course with title  ${this.props.course.name}`
    }
    render() {  
      return (
            <ModalView title="Delete Course" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => this.props.history.push('/') }/>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { 
      courses: state.courses
    }
};

export default connect(mapStateToProps, { fetchCourse, deleteCourse })(CourseDelete);