import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import courseReducer from './student/courseReducer';
import studentReducer from './student/studentReducer';

// Reducers
// import playerReducer from './player/player.reducer';
import  teacherReducer  from './teacher/teacher'

const rootReducer = combineReducers({
  // players: playerReducer,
  teacher: teacherReducer,
  form:formReducer,
  courses:courseReducer,
  students:studentReducer
});

export default rootReducer;
