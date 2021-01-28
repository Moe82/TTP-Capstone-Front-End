import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CourseList from '../containers/Courses/CourseList';
import CourseDelete from '../containers/Courses/CourseDelete'
import CourseEdit from '../containers/Courses/CourseEdit'
import CourseView from '../containers/Courses/CourseView'
import Header from '../containers/Header';

import { UploadAttendanceContainer } from '../containers';
import { StudentInfoContainer } from '../containers'; // Not Setting up yet
const RoutesView = () => {
  return (
    <div className = "ui container">
      <Header />
      <Switch>
        <Route exact path="/" component={CourseList} />
        <Route exact path="/course/delete/:id" component={CourseDelete} />
        <Route exact path="/course/edit/:id" component={CourseEdit} />
        <Route exact path="/course/view" component={CourseView} />
        <Route path="/courses/:id/upload" component={UploadAttendanceContainer} />
      </Switch>
    </div>
  );
};

export default RoutesView;
