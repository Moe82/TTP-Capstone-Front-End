import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { purgeStudents, fetchStudents, createStudent } from '../../../redux/student/studentReducer';

class StudentList extends React.Component {
  
  componentDidMount = () => {
    this.props.purgeStudents()
    this.props.fetchStudents(this.props.match.params.id)
  }
  
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="ui field">
        <label>{label}</label>
        <input style = {{width:'25%', borderColor:'#AE81FF'}} {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }
    
  onSubmit = (formValues) => {
    this.props.createStudent(formValues, this.props.match.params.id);
  }
    
  renderList() {
    { this.props.fetchStudents(this.props.match.params.id) };
    return this.props.students.map(student => {
      return (
        <div className="item" key={student.id}>
          <div className="content" style={{ fontSize: '2rem' }}>
            {student.name}
          </div>
        </div>
      )
    })
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

  render() {
      return (
          <div>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                  <Field name="name" component={this.renderInput} label="Enter a student name or a multiple student name with commas (E.X: Adam L, Justin W)" />
                  <button style={{backgroundColor:'#AE81FF'}}className="ui button primary">Add a student</button>
              </form>
              <h1>Students name</h1>
              <div className="ui celled list">{this.renderList()}</div>
          </div>
      )
  }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.name) {
        errors.name = "You must enter at least one student name"
    }
    return errors;
}
const mapStateToProps = (state) => {
    return {
        students: Object.values(state.students)
    }
}
const formWrapped = reduxForm({
    form: 'studentCreate',
    validate
})(StudentList)

export default connect(mapStateToProps, { createStudent, fetchStudents, purgeStudents })(formWrapped)