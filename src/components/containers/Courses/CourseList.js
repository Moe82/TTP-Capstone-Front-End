import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createCourse, fetchCourses, deleteCourse } from '../../../redux/course/courseReducer';

class CourseList extends React.Component {
  componentDidMount = () => {
    // not good logic, but it fixes the delete button issue for now. 
    if (this.props.courses.length == 0) {
      this.props.fetchCourses(this.props.teacherId)
    }
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
        <input style={{width:'25%', borderColor:'#AE81FF'}} {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }
  onSubmit = (formValues) => {
    this.props.createCourse(formValues, this.props.teacherId);
  }


  render() {
    return (
      <div>
        User: {this.props.email} <br /><br />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="name" component={this.renderInput} label="Add a course:"/>
          <button style={{backgroundColor:'#AE81FF'}}  className="ui button primary">Add Corurse</button>
        </form>
        <br/><br/>
        {this.props.courses.length == 0 ? null : 
          <div>
            <h1>Courses:</h1>
            <div className="ui celled list">
              {
                this.props.courses.map(course => {
                  return (
                  <div className="item" key={course.id}>
                    <div className="right floated content">
                      <Link className="ui button teal" to={`/course/${course.id}/students`}>Students</Link>
                      <Link to={`/course/upload/${course.id}`} className="ui button yellow">Upload attendance</Link>
                      <Link to={`/course/edit/${course.id}`} className="ui button green" courseId={course.id}>Edit</Link>
                      <Link onClick={() => { this.props.history.push(`/course/delete/${course.id}`) }} className="ui button negative">Delete</Link>
                      <Link to = {`/course/${course.id}/attendance`}className = "ui button primary">Attendance</Link>
                    </div>
                    <div className="content" style={{ fontSize: '1.5rem' }}>
                      {course.name} 
                    </div>
                  </div>)
                })
              }
            </div>
            </div>
        }
        
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