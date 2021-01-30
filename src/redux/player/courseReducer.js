import _ from 'lodash';
import { PURGE } from 'redux-persist';

const CREATE_COURSE =  'CREATE_COURSE';
const FETCH_COURSES = "FETCH_COURSES";
const FETCH_COURSE = "FETCH_COURSE";
const DELETE_COURSE = "DELETE_COURSE";
const EDIT_COURSE ="EDIT_COURSE"
// initialState={courses:[]};
export default (state = {}, action) => {
    switch (action.type) {
      case PURGE:
        console.log("@@@@@@@@@@@@@@@@@Purging State (course)!!@@@@@@@@@@@@@")
        return {}
      case FETCH_COURSES:
        return { ...state, ..._.mapKeys(action.payload, 'id') }
      case FETCH_COURSE:
        return { ...state, [action.payload.id]: action.payload };
      case CREATE_COURSE:
        return { ...state, [action.payload.id]: action.payload };
      case EDIT_COURSE:
        return { ...state, [action.payload.id]: action.payload };
      case DELETE_COURSE:
        return _.omit(state, action.payload);      
      default:
        return state;
        
        
    }
}
