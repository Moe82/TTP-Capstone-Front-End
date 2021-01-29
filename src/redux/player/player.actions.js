import axios from 'axios';
import CourseList from '../../components/containers/Courses/CourseList';
import history from '../../history';

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



export const fetchCourse = (id) => async dispatch => {
  const res = await axios.get(`http://localhost:8190/api/courses/${id}`)
  dispatch({ type: FETCH_COURSE, payload: res.data });
}

export const editCourse = (id, formValues) => async dispatch => {
  const res = await axios.put(`http://localhost:8190/api/courses/edit/${id}`, formValues);
  dispatch({ type: EDIT_COURSE, payload: res.data })
}

export const deleteCourse = (id) => async dispatch => {
  await axios.delete(`http://localhost:8190/api/courses/delete/${id}`);
  dispatch({ type: DELETE_COURSE, payload: id });
}
//THUNKS

