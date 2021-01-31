import axios from "axios";
import { PURGE } from 'redux-persist';
import BACK_END from '../../back-end-url'

// ACTION TYPES
const GET_USER = "GET_USER";
const GET_USERID = "GET_USERID";

// ACTION CREATORS
const getUser = user => { 
  if (user.email !== undefined) {
    user.isLoggedIn = true
  }
  return {
    type: GET_USER,
    payload: user
  }
}

const removeUser = () => { 
  return { 
    type: PURGE,
    key: "root",    
    result: () => null
  }
}

// THUNK CREATORS
export const me = () => async dispatch => {
  try {
    const res = await axios.get(`${BACK_END}/auth/me`, { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`${BACK_END}/auth/${method}`, { email, password }, { withCredentials: true });
  }
  catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(res.data));
  }
  catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    // await axios.delete("http://localhost:8190/auth/logout", { withCredentials: true });
    dispatch(removeUser());
  }
  catch (err) {
    console.error(err);
  }
};

// initial state 
const defaultState = {
  id: "",
  email:"",
  error: "",
  isLoggedIn: false     
}

// reducer
const teacherReducer = (state = defaultState , action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case PURGE:
      console.log("********PURGING STATE!*********")
      return {};
    default:
      return state;
  }
}

export default teacherReducer;