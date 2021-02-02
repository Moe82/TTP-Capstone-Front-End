import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import courseReducer from './course/courseReducer';
import studentReducer from './student/studentReducer';
import teacherReducer  from './teacher/teacher'

const rootReducer = combineReducers({
  teacher: teacherReducer,
  form:formReducer,
  courses:courseReducer,
  students:studentReducer
});

export default rootReducer;
