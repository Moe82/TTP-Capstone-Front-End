import _ from 'lodash';

const CREATE_STUDENT = 'CREATE_STUDENT';
const FETCH_STUDENTS = 'FETCH_STUDENTS';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STUDENT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STUDENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}