import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UploadAttendanceContainer } from '../containers';
import {StudentInfoContainer, TeacherLoginContainer} from '../containers';
const RoutesView = () => {
  return (
    <Switch>
      <Route path = "/teacher" component={TeacherLoginContainer} />
      <Route exact path="/courses/:id/upload" component={UploadAttendanceContainer} />
      <Route path = "/student/info" component={StudentInfoContainer} />
      
    </Switch>
  );
};

export default RoutesView;
