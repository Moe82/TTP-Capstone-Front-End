import axios from "axios";
<<<<<<< HEAD
import { PURGE, REHYDRATE } from 'redux-persist';

// ACTION TYPES
const GET_USER = "GET_USER";
const GET_USERID = "GET_USERID";
=======
import { PURGE } from 'redux-persist';
// ACTION TYPES
const GET_USER = "GET_USER";
const GET_USERID = "GET_USERID";

>>>>>>> logout

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
<<<<<<< HEAD
    type: PURGE
=======
    type: PURGE,
    key: "root",    // Whatever you chose for the "key" value when initialising redux-persist in the **persistCombineReducers** method - e.g. "root"
    result: () => null
>>>>>>> logout
  }
}

// THUNK CREATORS
export const me = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8190/auth/me", { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`http://localhost:8190/auth/${method}`, { email, password }, { withCredentials: true });
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



const defaultState = {
  id: "",
  email:"",
  error: "",
  isLoggedIn: false     
}

// REDUCER
const teacherReducer = (state = defaultState , action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case PURGE:
<<<<<<< HEAD
      console.log("PURGEING STATE")
=======
      console.log("********PURGING STATE!*********")
>>>>>>> logout
      return {};
    default:
      return state;
  }
}

export default teacherReducer;