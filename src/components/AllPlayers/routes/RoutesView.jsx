import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UploadAttendanceContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/courses/:id/upload" component={UploadAttendanceContainer} />
    </Switch>
  );
};

export default RoutesView;
