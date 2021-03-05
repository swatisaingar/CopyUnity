
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    editProfileResponse: ''
};

const editProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDITProfile_REQUEST:
            return {
                ...state,
            }
        case types.EDITProfile_FAILED:
            return {
                ...state,
            }
        case types.EDITProfile_RESPONSE:
            return {
                ...state,
                editProfileResponse: action.response
            }
        default:
            return state;
    }
}
export default editProfileReducer;


