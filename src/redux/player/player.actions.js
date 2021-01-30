import axios from 'axios';
import CourseList from '../../components/containers/Courses/CourseList';
import history from '../../history';
import { PURGE } from 'redux-persist';

const CREATE_COURSE =  'CREATE_COURSE';
const FETCH_COURSES = "FETCH_COURSES";
const FETCH_COURSE = "FETCH_COURSE";
const DELETE_COURSE = "DELETE_COURSE";
const EDIT_COURSE ="EDIT_COURSE"

//ACTION CREATORS
export const createCourse = (formValues, teacherId) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:8190/api/courses", {formValues, teacherId});
    dispatch({ type: CREATE_COURSE, payload: response.data });
  };
};

export const fetchCourses = (teacherId) => async dispatch => {
  console.log("TEACHERID:", teacherId)
  const res = await axios.get(`http://localhost:8190/api/courses/${teacherId}`);
  dispatch({ type: FETCH_COURSES, payload: res.data });
}

export const fetchCourse = (id) => async dispatch => {
  // const res = await axios.get(`http://localhost:8190/api/courses/${id}`)
  // dispatch({ type: FETCH_COURSE, payload: res.data });
}

export const editCourse = (id, formValues) => async dispatch => {
  const res = await axios.put(`http://localhost:8190/api/courses/edit/${id}`, formValues);
  dispatch({ type: EDIT_COURSE, payload: res.data })
}

export const deleteCourse = (id) => async dispatch => {
  await axios.delete(`http://localhost:8190/api/courses/delete/${id}`);
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
//THUNKS

