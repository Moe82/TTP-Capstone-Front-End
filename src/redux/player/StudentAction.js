import Axios from 'axios';

const CREATE_STUDENT = "CREATE_STUDENT";
const FETCH_STUDENTS = "FETCH_STUDENTS";
export const createStudent = (formValues, courseId) => async (dispatch) => {
    const res = await Axios.post(`http://localhost:8190/api/students`, { formValues, courseId });
    dispatch({ type: CREATE_STUDENT, payload: res.data })
}

export const fetchStudents = (courseId) => async (dispatch) => {
    const res = await Axios.get(`http://localhost:8190/api/students/${courseId}`);
    dispatch({type:FETCH_STUDENTS,payload:res.data});
}