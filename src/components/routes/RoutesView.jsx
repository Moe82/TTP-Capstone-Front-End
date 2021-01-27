import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UploadAttendanceContainer } from '../containers';
import {StudentInfoContainer } from '../containers';
import { Login, Signup } from '../containers';
const RoutesView = (props) => {
  const { isLoggedIn } = props;
  
  return (
    <Switch>
      {/* Routes placed within this section are available to all visitors */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {isLoggedIn && (
        <Switch>
          <Route exact path="/profile" component={UploadAttendanceContainer} />
          <Route exact path="/courses/:id/attendance/upload" component={UploadAttendanceContainer} />
          <Route path = "/student/info" component={StudentInfoContainer} />
        </Switch>
      )}
      
      {/* Displays our Login component as a fallback */}
      {/* <Route component={Login} /> */}
    </Switch>
  );
}

export default RoutesView;

