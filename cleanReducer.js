
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    cleanResponse: {}
};

const cleanReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAN_REQUEST:
            return {
                ...state,
            }
        case types.CLEAN_FAILED:
            return {
                ...state,
            }
        case types.CLEAN_RESPONSE:
            return {
                ...state,
                cleanResponse: action.response
            }
        default:
            return state;
    }
}
export default cleanReducer;


