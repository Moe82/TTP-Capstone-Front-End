import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createCourse, fetchCourses, deleteCourse } from '../../../redux/player/courseReducer';

class CourseList extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
    this.props.fetchCourses(this.props.teacherId)
  }
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }
  onSubmit = (formValues) => {
    this.props.createCourse(formValues, this.props.teacherId);
  }

  renderList() {
    { this.props.fetchCourses(this.props.teacherId) }
    return this.props.courses.map(course => {
      return (
        <div className="item" key={course.id}>
          <div className="right floated content">
            <Link className="ui button teal" to={`/course/${course.id}/students`}>Students</Link>
            <Link to={`/course/upload/${course.id}`} className="ui button yellow">Upload attendance</Link>
            <Link to={`/course/edit/${course.id}`} className="ui button green" courseId={course.id}>Edit</Link>
            <Link onClick={() => { this.props.history.push(`/course/delete/${course.id}`) }} className="ui button negative">Delete</Link>
          </div>
          <div className="content" style={{ fontSize: '1.5rem' }}>
            {course.name} 
            <Link to = {`/course/${course.id}/attendance`}style ={{marginLeft:'3rem'}}className = "ui button primary">Attendance</Link>
          </div>
        </div>

      )
    })
  }

  render() {
    return (
      <div>
        User: {this.props.email} <br /><br />
        {console.log("sdfsdfsdf",this.props.courses)}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="name" component={this.renderInput} label="Add a course:" />
          <button className="ui button primary">Submit</button>
        </form>
        <h1>Courses:</h1>
        <div className="ui celled list">{this.renderList()}</div>
      </div>

    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter Course name"
  }
  return errors;
}
const formWrapped = reduxForm({
  form: 'courseCreate',
  validate
})(CourseList);



const mapStateToProps = (state) => {
  return {
    courses: Object.values(state.courses),
    teacherId: state.teacher.id,
    email: state.teacher.email
  }
}

export default connect(mapStateToProps, { createCourse, fetchCourses, deleteCourse })(formWrapped);