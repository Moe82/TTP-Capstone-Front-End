import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import courseReducer from './player/courseReducer';

// Reducers
// import playerReducer from './player/player.reducer';
import  teacherReducer  from './teacher/teacher'

const rootReducer = combineReducers({
  // players: playerReducer,
  teacher: teacherReducer,
  form:formReducer,
  courses:courseReducer
});

export default rootReducer;
