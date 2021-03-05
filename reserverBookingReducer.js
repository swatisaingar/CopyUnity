import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    reserveBookingResponse: ''
};

const reserveBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Booking_REQUEST:
            return {
                ...state,
            }
        case types.Booking_FAILED:
            return {
                ...state,
            }
        case types.Booking_RESPONSE:
            return {
                ...state,
                reserveBookingResponse: action.response
            }
        default:
            return state;
    }
}
export default reserveBookingReducer;


