import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    retrieveBookingsResponse: ''
};

const retrieveBookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RETRIEVEBOOKNG_REQUEST:
            return {
                ...state,
            }
        case types.RETRIEVEBOOKING_FAILED:
            return {
                ...state,
            }
        case types.RETRIEVEBOOKING_RESPONSE:
            return {
                ...state,
                retrieveBookingsResponse: action.response
            }
        default:
            return state;
    }
}
export default retrieveBookingsReducer;


