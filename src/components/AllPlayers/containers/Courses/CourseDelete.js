import { forEachRight } from 'lodash';
import React from 'react';
import Modal from '../../../Modal';
import history from '../../../../history'
import { fetchCourse, deleteCourse } from '../../../../redux/player/player.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class CourseDelete extends React.Component {
    componentDidMount() {
        this.props.fetchCourse(this.props.match.params.id);
    }
    renderActions() {
        return (

            <React.Fragment>
                <button onClick={() => this.props.deleteCourse(this.props.match.params.id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
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
            <Modal title="Delete Course" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => history.push('/')} />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { courses: state.courses[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchCourse, deleteCourse })(CourseDelete);