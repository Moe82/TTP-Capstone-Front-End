import _ from 'lodash';
import Axios from 'axios';
import { PURGE } from 'redux-persist'
import BACK_END from '../../back-end-url'

// action types 
const CREATE_STUDENT = 'CREATE_STUDENT';
const FETCH_STUDENTS = 'FETCH_STUDENTS';

// middleware
export const createStudent = (formValues, courseId) => async (dispatch) => {
    const res = await Axios.post(`${BACK_END}/api/students`, { formValues, courseId });
    dispatch({ type: CREATE_STUDENT, payload: res.data })
}

export const fetchStudents = (courseId) => async (dispatch) => {
    const res = await Axios.get(`${BACK_END}/api/students/${courseId}`);
    dispatch({type:FETCH_STUDENTS,payload:res.data});
}

export const purgeStudents =  () => async dispatch => {
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
          console.log("***Purging State (students)!!***")
        return {}
        case CREATE_STUDENT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STUDENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}