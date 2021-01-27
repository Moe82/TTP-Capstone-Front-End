import { combineReducers } from 'redux';

// Reducers
// import playerReducer from './player/player.reducer';
import  teacherReducer  from './teacher/teacher'

const rootReducer = combineReducers({
  // players: playerReducer,
  teacher: teacherReducer
});

export default rootReducer;
