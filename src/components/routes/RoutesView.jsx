import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UploadAttendanceContainer } from '../containers';
import StudentList from '../containers/Students/StudentList'
import { Login, Signup } from '../containers';
import CourseList from '../containers/Courses/CourseList';
import CourseDelete from '../containers/Courses/CourseDelete'
import CourseEdit from '../containers/Courses/CourseEdit'
import CourseView from '../containers/Courses/CourseView'
import CourseAttendance from '../containers/Courses/CourseAttendance';
const RoutesView = (props) => {
  const { isLoggedIn } = props;

  return (
    <Switch>
      {/* Routes placed within this section are available to all visitors */}
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {isLoggedIn && (
        <Switch>
          <Route exact path="/course" component={CourseList} />
          <Route exact path="/course/delete/:id" component={CourseDelete} />
          <Route exact path="/course/edit/:id" component={CourseEdit} />
          <Route exact path="/course/view" component={CourseView} />
          <Route exact path="/course/upload" component={UploadAttendanceContainer} />
          <Route exact path="/course/:id/students" component={StudentList} />
          <Route exact path="/course/:id/attendance" component={CourseAttendance} />
        </Switch>
      )}
      {/* Displays our Login component as a fallback */}
      <Route component={Login} />

    </Switch>
  );
}

export default RoutesView;