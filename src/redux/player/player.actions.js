import axios from 'axios';
import CourseList from '../../components/AllPlayers/containers/Courses/CourseList';
import PlayerActionTypes from './player.types';
import {
  CREATE_COURSE,
  FETCH_COURSES,
  FETCH_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
} from './player.types';
import history from '../../history';

//ACTION CREATORS
export const fetchAllPlayers = (payload) => ({
  type: PlayerActionTypes.FETCH_ALL_PLAYERS,
  payload,
});

export const createCourse = (formValues) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:8096/api/courses", formValues);
    dispatch({ type: CREATE_COURSE, payload: response.data });
  };
};

export const fetchCourses = () => async dispatch => {
  const res = await axios.get("http://localhost:8096/api/courses");
  dispatch({ type: FETCH_COURSES, payload: res.data });
}

export const fetchCourse = (id) => async dispatch => {
  const res = await axios.get(`http://localhost:8096/api/courses/${id}`)
  dispatch({ type: FETCH_COURSE, payload: res.data });
}

export const editCourse = (id, formValues) => async dispatch => {
  const res = await axios.put(`http://localhost:8096/api/courses/edit/${id}`, formValues);
  dispatch({ type: EDIT_COURSE, payload: res.data })
}

export const deleteCourse = (id) => async dispatch => {
  await axios.delete(`http://localhost:8096/api/courses/delete/${id}`);
  dispatch({ type: DELETE_COURSE, payload: id });
  history.push('/');
}


//THUNKS

export const fetchAllPlayersThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://localhost:8080/api/players');
      console.log('data', data);
      dispatch(fetchAllPlayers(data));
    } catch (error) {
      console.error(error);
    }
  };
};

