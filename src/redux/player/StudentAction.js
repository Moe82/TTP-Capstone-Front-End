import Axios from 'axios';
import BACK_END from '../../back-end-url'


const CREATE_STUDENT = "CREATE_STUDENT";
const FETCH_STUDENTS = "FETCH_STUDENTS";
export const createStudent = (formValues, courseId) => async (dispatch) => {
    const res = await Axios.post(`${BACK_END}/api/students`, { formValues, courseId });
    dispatch({ type: CREATE_STUDENT, payload: res.data })
}

export const fetchStudents = (courseId) => async (dispatch) => {
    const res = await Axios.get(`${BACK_END}/api/students/${courseId}`);
    dispatch({type:FETCH_STUDENTS,payload:res.data});
}