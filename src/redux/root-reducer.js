import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import courseReducer from './player/courseReducer';

// Reducers
import playerReducer from './player/player.reducer';

const rootReducer = combineReducers({
  players: playerReducer,
  form:formReducer,
  courses:courseReducer
});

export default rootReducer;
