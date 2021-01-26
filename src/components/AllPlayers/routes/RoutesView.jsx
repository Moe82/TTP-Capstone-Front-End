import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UploadAttendanceContainer } from '../containers';
import {StudentInfoContainer} from '../containers';
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/courses/:id/upload" component={UploadAttendanceContainer} />
      <Route path = "/student/info" component={StudentInfoContainer} />
    </Switch>
  );
};

export default RoutesView;
