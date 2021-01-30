import axios from "axios";

// ACTION TYPES
const GET_USER = "GET_USER";
const GET_USERID = "GET_USERID";
const REMOVE_USER = "REMOVE_USER";

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
    type: REMOVE_USER 
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
    await axios.delete("http://localhost:8190/auth/logout", { withCredentials: true });
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
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}

export default teacherReducer;