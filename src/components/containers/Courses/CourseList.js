import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createCourse, fetchCourses, deleteCourse } from '../../../redux/player/player.actions';

class CourseList extends React.Component {
  componentDidMount = () => {
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
        {this.props.fetchCourses(this.props.teacherId)}
        return this.props.courses.map(course => {
            return (
                <div className="item" key={course.id}>
                    <div className="right floated content">
                        <Link to={`/course/upload/${course.id}`} className="ui button primary">Upload attendance</Link>
                        <Link to={`/course/edit/${course.id}`} className="ui button primary" courseId={course.id}>Edit</Link>
                        <Link onClick={()=> { this.props.history.push(`/course/delete/${course.id}`)} } className="ui button negative">Delete</Link>
                    </div>
                    <div className="content" style={{ fontSize: '2rem' }}>
                        {course.name}
                    </div>
                </div>

            )
        })
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="name" component={this.renderInput} label="Enter Course name" />
                    <button className="ui button primary">Submit</button>
                </form>
                <h1>Course name</h1>
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
    teacherId: state.teacher.id
  }
}

export default connect(mapStateToProps, { createCourse, fetchCourses, deleteCourse })(formWrapped);