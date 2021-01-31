import _ from 'lodash';
import { PURGE } from 'redux-persist'
import axios from 'axios';
import CourseList from '../../components/containers/Courses/CourseList';
import history from '../../history';
import BACK_END from '../../back-end-url'

// Action types
const CREATE_COURSE =  'CREATE_COURSE';
const FETCH_COURSES = "FETCH_COURSES";
const FETCH_COURSE = "FETCH_COURSE";
const DELETE_COURSE = "DELETE_COURSE";
const EDIT_COURSE ="EDIT_COURSE"



//ACTION CREATORS
export const createCourse = (formValues, teacherId) => {
  return async (dispatch) => {
    const response = await axios.post(`${BACK_END}/api/courses`, { formValues, teacherId });
    dispatch({ type: CREATE_COURSE, payload: response.data });
  };
};
export const fetchCourses = (teacherId) => async dispatch => {
  const res = await axios.get(`${BACK_END}/api/courses/${teacherId}`);
  dispatch({ type: FETCH_COURSES, payload: res.data });
}
export const fetchCourse = (id) => async dispatch => {
  // const res = await axios.get(`http://localhost:8190/api/courses/${id}`)
  // dispatch({ type: FETCH_COURSE, payload: res.data });
}
export const editCourse = (id, formValues) => async dispatch => {
  const res = await axios.put(`${BACK_END}/api/courses/edit/${id}`, formValues);
  dispatch({ type: EDIT_COURSE, payload: res.data })
}
export const deleteCourse = (id) => async dispatch => {
  await axios.delete(`${BACK_END}/api/courses/delete/${id}`);
  dispatch({ type: DELETE_COURSE, payload: id });
}

export const purge =  () => async dispatch => {
  console.log("sdfsdf")
  dispatch({
    type: PURGE,
    key: "root",    
    result: () => null
  });
}

export default (state = {}, action) => {
    switch (action.type) {
      case PURGE:
        console.log("***Purging State (course)!!***")
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
        let newState = _.omit(state, action.payload);  
        return newState
      default:
        return state; 
    }
}
