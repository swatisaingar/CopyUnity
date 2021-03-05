
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,
    confirmBookingResponse: ''
};

const confirmBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CONFIRMBOOKNG_REQUEST:
            return {
                ...state,
            }
        case types.CONFIRMBOOKING_FAILED:
            return {
                ...state,
            }
        case types.CONFIRMBOOKING_RESPONSE:
            return {
                ...state,
                confirmBookingResponse: action.response
            }
        case types.CONFIRMBOOKING_CLEAR:
            return {
                ...state,
                confirmBookingResponse: ''
            }
        default:
            return state;
    }
}
export default confirmBookingReducer;


